/// A truncate agent that truncates the conversation history when it exceeds the model's context limit
/// It makes no attempt to handle context limits, and cannot read resources
use async_trait::async_trait;
use futures::stream::BoxStream;
use tokio::sync::Mutex;
use tracing::{debug, error, instrument, warn};

use super::agent::GooseFreedom;
use super::Agent;
use crate::agents::capabilities::Capabilities;
use crate::agents::extension::{ExtensionConfig, ExtensionError, ExtensionResult};
use crate::message::{Message, ToolRequest};
use crate::providers::base::Provider;
use crate::providers::base::ProviderUsage;
use crate::providers::errors::ProviderError;
use crate::register_agent;
use crate::token_counter::TokenCounter;
use crate::truncate::{truncate_messages, OldestFirstTruncation};
use indoc::indoc;
use mcp_core::tool::Tool;
use serde_json::{json, Value};

const MAX_TRUNCATION_ATTEMPTS: usize = 3;
const ESTIMATE_FACTOR_DECAY: f32 = 0.9;

/// Truncate implementation of an Agent
pub struct TruncateAgent {
    capabilities: Mutex<Capabilities>,
    token_counter: TokenCounter,
    freedom_level: Mutex<GooseFreedom>,
}

impl TruncateAgent {
    pub fn new(provider: Box<dyn Provider>) -> Self {
        let token_counter = TokenCounter::new(provider.get_model_config().tokenizer_name());
        Self {
            capabilities: Mutex::new(Capabilities::new(provider)),
            token_counter,
            freedom_level: Mutex::new(GooseFreedom::default()),
        }
    }

    async fn should_allow_tool(&self, tool_name: &str) -> bool {
        let freedom = self.freedom_level.lock().await.clone();
        match freedom {
            GooseFreedom::Caged => false,
            GooseFreedom::CageFree => {
                !tool_name.contains("write")
                    && !tool_name.contains("create")
                    && !tool_name.contains("delete")
            }
            GooseFreedom::FreeRange => true, // Tools will ask for permission in the UI
            GooseFreedom::Wild => true,
        }
    }

    /// Truncates the messages to fit within the model's context window
    /// Ensures the last message is a user message and removes tool call-response pairs
    async fn truncate_messages(
        &self,
        messages: &mut Vec<Message>,
        estimate_factor: f32,
    ) -> anyhow::Result<()> {
        // Model's actual context limit
        let context_limit = self
            .capabilities
            .lock()
            .await
            .provider()
            .get_model_config()
            .context_limit();

        // Our conservative estimate of the **target** context limit
        // Our token count is an estimate since model providers often don't provide the tokenizer (eg. Claude)
        let context_limit = (context_limit as f32 * estimate_factor) as usize;

        // Calculate current token count
        let mut token_counts: Vec<usize> = messages
            .iter()
            .map(|msg| self.token_counter.count_tokens(&msg.as_concat_text()))
            .collect();

        let _ = truncate_messages(
            messages,
            &mut token_counts,
            context_limit,
            &OldestFirstTruncation,
        );

        Ok(())
    }
}

#[async_trait]
impl Agent for TruncateAgent {
    async fn add_extension(&mut self, extension: ExtensionConfig) -> ExtensionResult<()> {
        let freedom = self.get_freedom_level().await;
        if freedom == GooseFreedom::Caged {
            return Err(ExtensionError::Client(
                mcp_client::client::Error::Forbidden(
                    "Extensions cannot be added in Caged mode".to_string(),
                ),
            ));
        }
        let mut capabilities = self.capabilities.lock().await;
        capabilities.add_extension(extension).await
    }

    async fn remove_extension(&mut self, name: &str) {
        let mut capabilities = self.capabilities.lock().await;
        capabilities
            .remove_extension(name)
            .await
            .expect("Failed to remove extension");
    }

    async fn list_extensions(&self) -> Vec<String> {
        let capabilities = self.capabilities.lock().await;
        capabilities
            .list_extensions()
            .await
            .expect("Failed to list extensions")
    }

    async fn passthrough(&self, _extension: &str, _request: Value) -> ExtensionResult<Value> {
        // TODO implement
        Ok(Value::Null)
    }

    #[instrument(skip(self, messages), fields(user_message))]
    async fn reply(
        &self,
        messages: &[Message],
    ) -> anyhow::Result<BoxStream<'_, anyhow::Result<Message>>> {
        let mut messages = messages.to_vec();
        let reply_span = tracing::Span::current();
        let mut capabilities = self.capabilities.lock().await;
        let all_tools = capabilities.get_prefixed_tools().await?;
        let mut truncation_attempt: usize = 0;

        // we add in the read_resource tool by default
        // TODO: make sure there is no collision with another extension's tool name
        let read_resource_tool = Tool::new(
            "platform__read_resource".to_string(),
            indoc! {r#"
                Read a resource from an extension.

                Resources allow extensions to share data that provide context to LLMs, such as
                files, database schemas, or application-specific information. This tool searches for the
                resource URI in the provided extension, and reads in the resource content. If no extension
                is provided, the tool will search all extensions for the resource.
            "#}.to_string(),
            json!({
                "type": "object",
                "required": ["uri"],
                "properties": {
                    "uri": {"type": "string", "description": "Resource URI"},
                    "extension_name": {"type": "string", "description": "Optional extension name"}
                }
            }),
        );

        let list_resources_tool = Tool::new(
            "platform__list_resources".to_string(),
            indoc! {r#"
                List resources from an extension(s).

                Resources allow extensions to share data that provide context to LLMs, such as
                files, database schemas, or application-specific information. This tool lists resources
                in the provided extension, and returns a list for the user to browse. If no extension
                is provided, the tool will search all extensions for the resource.
            "#}.to_string(),
            json!({
                "type": "object",
                "properties": {
                    "extension_name": {"type": "string", "description": "Optional extension name"}
                }
            }),
        );

        // Filter tools based on freedom level
        let mut tools = Vec::new();
        for tool in all_tools {
            if self.should_allow_tool(&tool.name).await {
                tools.push(tool);
            }
        }

        // Only add resource tools if we support them and we're not in caged mode
        if capabilities.supports_resources() {
            if self.should_allow_tool("platform__read_resource").await {
                tools.push(read_resource_tool);
            }
            if self.should_allow_tool("platform__list_resources").await {
                tools.push(list_resources_tool);
            }
        }

        let system_prompt = capabilities.get_system_prompt().await;

        // Set the user_message field in the span instead of creating a new event
        if let Some(content) = messages
            .last()
            .and_then(|msg| msg.content.first())
            .and_then(|c| c.as_text())
        {
            debug!("user_message" = &content);
        }

        Ok(Box::pin(async_stream::try_stream! {
            let _reply_guard = reply_span.enter();
            loop {
                // Attempt to get completion from provider
                match capabilities.provider().complete(
                    &system_prompt,
                    &messages,
                    &tools,
                ).await {
                    Ok((response, usage)) => {
                        capabilities.record_usage(usage).await;

                        // Reset truncation attempt
                        truncation_attempt = 0;

                        // Yield the assistant's response
                        yield response.clone();

                        tokio::task::yield_now().await;

                        // First collect any tool requests
                        let tool_requests: Vec<&ToolRequest> = response.content
                            .iter()
                            .filter_map(|content| content.as_tool_request())
                            .collect();

                        if tool_requests.is_empty() {
                            break;
                        }

                        // Then dispatch each in parallel
                        let futures: Vec<_> = tool_requests
                            .iter()
                            .filter_map(|request| request.tool_call.clone().ok())
                            .map(|tool_call| capabilities.dispatch_tool_call(tool_call))
                            .collect();

                        // Process all the futures in parallel but wait until all are finished
                        let outputs = futures::future::join_all(futures).await;

                        // Create a message with the responses
                        let mut message_tool_response = Message::user();
                        // Now combine these into MessageContent::ToolResponse using the original ID
                        for (request, output) in tool_requests.iter().zip(outputs.into_iter()) {
                            message_tool_response = message_tool_response.with_tool_response(
                                request.id.clone(),
                                output,
                            );
                        }

                        yield message_tool_response.clone();

                        messages.push(response);
                        messages.push(message_tool_response);
                    },
                    Err(ProviderError::ContextLengthExceeded(_)) => {
                        if truncation_attempt >= MAX_TRUNCATION_ATTEMPTS {
                            // Create an error message & terminate the stream
                            // the previous message would have been a user message (e.g. before any tool calls, this is just after the input message.
                            // at the start of a loop after a tool call, it would be after a tool_use assistant followed by a tool_result user)
                            yield Message::assistant().with_text("Error: Context length exceeds limits even after multiple attempts to truncate.");
                            break;
                        }

                        truncation_attempt += 1;
                        warn!("Context length exceeded. Truncation Attempt: {}/{}.", truncation_attempt, MAX_TRUNCATION_ATTEMPTS);

                        // Decay the estimate factor as we make more truncation attempts
                        // Estimate factor decays like this over time: 0.9, 0.81, 0.729, ...
                        let estimate_factor: f32 = ESTIMATE_FACTOR_DECAY.powi(truncation_attempt as i32);

                        // release the lock before truncation to prevent deadlock
                        drop(capabilities);

                        self.truncate_messages(&mut messages, estimate_factor).await?;

                        // Re-acquire the lock
                        capabilities = self.capabilities.lock().await;

                        // Retry the loop after truncation
                        continue;
                    },
                    Err(e) => {
                        // Create an error message & terminate the stream
                        error!("Error: {}", e);
                        yield Message::assistant().with_text(format!("Ran into this error: {e}.\n\nPlease retry if you think this is a transient or recoverable error."));
                        break;
                    }
                }

                // Yield control back to the scheduler to prevent blocking
                tokio::task::yield_now().await;
            }
        }))
    }

    async fn usage(&self) -> Vec<ProviderUsage> {
        let capabilities = self.capabilities.lock().await;
        capabilities.get_usage().await
    }

    async fn set_freedom_level(&mut self, freedom: GooseFreedom) {
        let mut freedom_level = self.freedom_level.lock().await;
        *freedom_level = freedom;
    }

    async fn get_freedom_level(&self) -> GooseFreedom {
        self.freedom_level.lock().await.clone()
    }
}

register_agent!("truncate", TruncateAgent);

#[cfg(test)]
mod tests {
    use super::*;
    use crate::providers::mock::MockProvider;

    async fn setup_agent() -> TruncateAgent {
        let provider = Box::new(MockProvider::default());
        TruncateAgent::new(provider)
    }

    #[tokio::test]
    async fn test_caged_mode_denies_all_tools() {
        let mut agent = setup_agent().await;
        agent.set_freedom_level(GooseFreedom::Caged).await;

        assert!(!agent.should_allow_tool("any_tool").await);
        assert!(!agent.should_allow_tool("platform__read_resource").await);
        assert!(!agent.should_allow_tool("developer__shell").await);
    }

    #[tokio::test]
    async fn test_cage_free_mode_restricts_dangerous_tools() {
        let mut agent = setup_agent().await;
        agent.set_freedom_level(GooseFreedom::CageFree).await;

        // Should deny dangerous tools
        assert!(!agent.should_allow_tool("developer__write_file").await);
        assert!(!agent.should_allow_tool("developer__create_file").await);
        assert!(!agent.should_allow_tool("developer__delete_file").await);

        // Should allow safe tools
        assert!(agent.should_allow_tool("developer__shell").await);
        assert!(agent.should_allow_tool("platform__read_resource").await);
    }

    #[tokio::test]
    async fn test_free_range_mode_allows_all_tools() {
        let mut agent = setup_agent().await;
        agent.set_freedom_level(GooseFreedom::FreeRange).await;

        assert!(agent.should_allow_tool("developer__write_file").await);
        assert!(agent.should_allow_tool("developer__create_file").await);
        assert!(agent.should_allow_tool("developer__delete_file").await);
        assert!(agent.should_allow_tool("developer__shell").await);
        assert!(agent.should_allow_tool("platform__read_resource").await);
    }

    #[tokio::test]
    async fn test_wild_mode_allows_all_tools() {
        let mut agent = setup_agent().await;
        agent.set_freedom_level(GooseFreedom::Wild).await;

        assert!(agent.should_allow_tool("developer__write_file").await);
        assert!(agent.should_allow_tool("developer__create_file").await);
        assert!(agent.should_allow_tool("developer__delete_file").await);
        assert!(agent.should_allow_tool("developer__shell").await);
        assert!(agent.should_allow_tool("platform__read_resource").await);
    }

    #[tokio::test]
    async fn test_caged_mode_denies_extensions() {
        let mut agent = setup_agent().await;
        agent.set_freedom_level(GooseFreedom::Caged).await;

        let result = agent.add_extension(ExtensionConfig::default()).await;
        assert!(result.is_err());
    }
}
