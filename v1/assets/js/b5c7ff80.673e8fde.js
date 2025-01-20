"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[9034],{9362:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"plugins/providers","title":"Providers","description":"Providers in Goose mean \\"LLM providers\\" that Goose can interact with. Providers are defined in the Exchange library for the most part, but you can define your own.","source":"@site/docs/plugins/providers.md","sourceDirName":"plugins","slug":"/plugins/providers","permalink":"/goose/v1/docs/plugins/providers","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/plugins/providers.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Plugins in Goose","permalink":"/goose/v1/docs/plugins/"},"next":{"title":"Using Toolkits","permalink":"/goose/v1/docs/plugins/using-toolkits"}}');var a=n(4848),s=n(8453);const i={},t="Providers",l={},c=[{value:"Currently Available Providers",id:"currently-available-providers",level:2},{value:"Anthropic",id:"anthropic",level:3},{value:"Azure",id:"azure",level:3},{value:"Bedrock",id:"bedrock",level:3},{value:"Databricks",id:"databricks",level:3},{value:"Google",id:"google",level:3},{value:"Ollama",id:"ollama",level:3},{value:"OpenAI",id:"openai",level:3}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"providers",children:"Providers"})}),"\n",(0,a.jsxs)(r.p,{children:['Providers in Goose mean "LLM providers" that Goose can interact with. Providers are defined in the ',(0,a.jsx)(r.a,{href:"https://github.com/block/goose/tree/main/packages/exchange/src/exchange/providers",children:"Exchange library"})," for the most part, but you can define your own."]}),"\n",(0,a.jsxs)(r.p,{children:["As you configure your chosen provider, you add the models you want to use to the ",(0,a.jsx)(r.code,{children:"~/.config/goose/profiles.yaml"})," file and you can set any necessary environment variables or API keys in your terminal. For example:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:'export PROVIDER_API_KEY="your_api_key_here"\n'})}),"\n",(0,a.jsx)(r.h2,{id:"currently-available-providers",children:"Currently Available Providers"}),"\n",(0,a.jsx)(r.h3,{id:"anthropic",children:"Anthropic"}),"\n",(0,a.jsxs)(r.p,{children:["To use Anthropic, you need an API key, which you can obtain by signing up or logging into ",(0,a.jsx)(r.a,{href:"https://www.anthropic.com/",children:"Anthropic's platform"}),". Once you have your API key and your ",(0,a.jsx)(r.code,{children:"profiles.yaml"})," file updated to the provider, you can set the ",(0,a.jsx)(r.code,{children:"ANTHROPIC_API_KEY"})," environment variable in your shell using:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:'export ANTHROPIC_API_KEY="your_api_key_here"`.\n'})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",metastring:'title="profiles.yaml"',children:"default:\n  provider: anthropic\n  processor: claude-3-5-sonnet-20241022\n  accelerator: claude-3-5-sonnet-20241022\n"})}),"\n",(0,a.jsx)(r.h3,{id:"azure",children:"Azure"}),"\n",(0,a.jsxs)(r.p,{children:["Azure AI services provide API keys through the Azure Portal. Visit the ",(0,a.jsx)(r.a,{href:"https://portal.azure.com/",children:"Azure Portal"})," to create a resource and obtain your key. You will need to configure Goose by updating your profile and setting appropriate environment variables."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",metastring:'title="profiles.yaml"',children:"default:\n  provider: azure\n  processor: azure-gpt-4\n  accelerator: azure-gpt-3\n"})}),"\n",(0,a.jsx)(r.h3,{id:"bedrock",children:"Bedrock"}),"\n",(0,a.jsxs)(r.p,{children:["More information can be found at ",(0,a.jsx)(r.a,{href:"https://aws.amazon.com/bedrock/",children:"AWS Bedrock"}),". You need to set up your AWS credentials and configure Bedrock access accordingly in your Goose profile."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",metastring:'title="profiles.yaml"',children:"default:\n  provider: bedrock\n  processor: titan-llm\n  accelerator: titan-llm-lite\n"})}),"\n",(0,a.jsx)(r.h3,{id:"databricks",children:"Databricks"}),"\n",(0,a.jsxs)(r.p,{children:["To use Databricks, sign up or log into ",(0,a.jsx)(r.a,{href:"https://www.databricks.com/",children:"Databricks"})," and generate a personal access token via the user settings. Configure Goose by setting the ",(0,a.jsx)(r.code,{children:"DATABRICKS_HOST"})," and ",(0,a.jsx)(r.code,{children:"DATABRICKS_TOKEN"})," environment variables."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",metastring:'title="profiles.yaml"',children:"default:\n  provider: databricks\n  processor: databricks-meta-llama-3-1-70b-instruct\n  accelerator: databricks-meta-llama-3-1-70b-instruct\n"})}),"\n",(0,a.jsx)(r.h3,{id:"google",children:"Google"}),"\n",(0,a.jsxs)(r.p,{children:["Google Cloud AI services require you to set up a project in the ",(0,a.jsx)(r.a,{href:"https://console.cloud.google.com/",children:"Google Cloud Console"}),". After enabling the relevant APIs, you should generate an API key or set up a service account. Ensure your application can access these credentials."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",metastring:'title="profiles.yaml"',children:"default:\n  provider: google\n  processor: gemini-1.5-flash\n  accelerator: gemini-1.5-flash\n"})}),"\n",(0,a.jsx)(r.h3,{id:"ollama",children:"Ollama"}),"\n",(0,a.jsxs)(r.p,{children:["For Ollama, refer to the setup process on ",(0,a.jsx)(r.a,{href:"https://ollama.com/",children:"Ollama's site"})," for obtaining necessary credentials. Make sure your environment has all the required tokens set up."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",metastring:'title="profiles.yaml"',children:"default:\n  provider: ollama\n  processor: ollama-pro\n  accelerator: ollama-lite\n"})}),"\n",(0,a.jsx)(r.h3,{id:"openai",children:"OpenAI"}),"\n",(0,a.jsxs)(r.p,{children:["Register at ",(0,a.jsx)(r.a,{href:"https://platform.openai.com/api-keys",children:"OpenAI's platform"})," to obtain an API key. Configure Goose by updating your ",(0,a.jsx)(r.code,{children:"profiles.yaml"})," file and setting the ",(0,a.jsx)(r.code,{children:"OPENAI_API_KEY"})," in your terminal:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:'export OPENAI_API_KEY="your_api_key_here"\n'})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",metastring:'title="profiles.yaml"',children:"default:\n  provider: openai\n  processor: gpt-4\n  accelerator: gpt-3.5-turbo\n"})})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>t});var o=n(6540);const a={},s=o.createContext(a);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);