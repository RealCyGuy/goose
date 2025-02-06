"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[9013],{269:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"troubleshooting","title":"Troubleshooting","description":"Goose, like any system, may run into occasional issues. This guide provides solutions for common problems.","source":"@site/docs/troubleshooting.md","sourceDirName":".","slug":"/troubleshooting","permalink":"/goose/pr-preview/pr-1127/docs/troubleshooting","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Troubleshooting"},"sidebar":"tutorialSidebar","previous":{"title":"Error Handling","permalink":"/goose/pr-preview/pr-1127/docs/goose-architecture/error-handling"}}');var r=n(4848),i=n(8453);const t={title:"Troubleshooting"},l="Troubleshooting",a={},d=[{value:"Goose Edits Files",id:"goose-edits-files",level:3},{value:"Interrupting Goose",id:"interrupting-goose",level:3},{value:"Stuck in a Loop or Unresponsive",id:"stuck-in-a-loop-or-unresponsive",level:3},{value:"Context Length Exceeded Error",id:"context-length-exceeded-error",level:3},{value:"Using Ollama Provider",id:"using-ollama-provider",level:3},{value:"Handling Rate Limit Errors",id:"handling-rate-limit-errors",level:3},{value:"Hermit Errors",id:"hermit-errors",level:3},{value:"API Errors",id:"api-errors",level:3},{value:"Remove Cached Data",id:"remove-cached-data",level:3},{value:"Keychain/Keyring Errors",id:"keychainkeyring-errors",level:3},{value:"Need Further Help?",id:"need-further-help",level:3}];function c(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"troubleshooting",children:"Troubleshooting"})}),"\n",(0,r.jsx)(o.p,{children:"Goose, like any system, may run into occasional issues. This guide provides solutions for common problems."}),"\n",(0,r.jsx)(o.h3,{id:"goose-edits-files",children:"Goose Edits Files"}),"\n",(0,r.jsx)(o.p,{children:"Goose can and will edit files as part of its workflow. To avoid losing personal changes, use version control to stage your personal edits. Leave Goose edits unstaged until reviewed. Consider separate commits for Goose's edits so you can easily revert them if needed."}),"\n",(0,r.jsx)(o.hr,{}),"\n",(0,r.jsx)(o.h3,{id:"interrupting-goose",children:"Interrupting Goose"}),"\n",(0,r.jsxs)(o.p,{children:["If Goose is heading in the wrong direction or gets stuck, you can interrupt it by pressing ",(0,r.jsx)(o.code,{children:"CTRL+C"}),". This will stop Goose and give you the opportunity to correct its actions or provide additional information."]}),"\n",(0,r.jsx)(o.hr,{}),"\n",(0,r.jsx)(o.h3,{id:"stuck-in-a-loop-or-unresponsive",children:"Stuck in a Loop or Unresponsive"}),"\n",(0,r.jsx)(o.p,{children:'In rare cases, Goose may enter a "doom spiral" or become unresponsive during a long session. This is often resolved by ending the current session, and starting a new session.'}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["Hold down ",(0,r.jsx)(o.code,{children:"Ctrl+C"})," to cancel"]}),"\n",(0,r.jsx)(o.li,{children:"Start a new session:"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-sh",children:"goose session\n"})}),"\n",(0,r.jsx)(o.admonition,{type:"tip",children:(0,r.jsx)(o.p,{children:"For particularly large or complex tasks, consider breaking them into smaller sessions."})}),"\n",(0,r.jsx)(o.hr,{}),"\n",(0,r.jsx)(o.h3,{id:"context-length-exceeded-error",children:"Context Length Exceeded Error"}),"\n",(0,r.jsxs)(o.p,{children:["This error occurs when the input provided to Goose exceeds the maximum token limit of the LLM being used. To resolve this, try breaking down your input into smaller parts. You can also use ",(0,r.jsx)(o.code,{children:".goosehints"})," as a way to provide goose with detailed context. Refer to the ",(0,r.jsx)(o.a,{href:"/docs/guides/using-goosehints",children:"Using Goosehints Guide"})," for more information."]}),"\n",(0,r.jsx)(o.hr,{}),"\n",(0,r.jsx)(o.h3,{id:"using-ollama-provider",children:"Using Ollama Provider"}),"\n",(0,r.jsxs)(o.p,{children:["Ollama provides local LLMs, which means you must first ",(0,r.jsx)(o.a,{href:"/docs/getting-started/providers#local-llms-ollama",children:"download Ollama and run a model"})," before attempting to use this provider with Goose. If you do not have the model downloaded, you'll run into the following error:"]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:['ExecutionError("error sending request for url (',(0,r.jsx)(o.a,{href:"http://localhost:11434/v1/chat/completions",children:"http://localhost:11434/v1/chat/completions"}),')")']}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Another thing to note is that the DeepSeek models do not support tool calling, so all Goose ",(0,r.jsx)(o.a,{href:"/docs/getting-started/using-extensions#enablingdisabling-extensions",children:"extensions must be disabled"})," to use one of these models. Unfortunately, without the use of tools, there is not much Goose will be able to do autonomously if using DeepSeek. However, Ollama's other models such as ",(0,r.jsx)(o.code,{children:"qwen2.5"})," do support tool calling and can be used with Goose extensions."]}),"\n",(0,r.jsx)(o.hr,{}),"\n",(0,r.jsx)(o.h3,{id:"handling-rate-limit-errors",children:"Handling Rate Limit Errors"}),"\n",(0,r.jsxs)(o.p,{children:["Goose may encounter a ",(0,r.jsx)(o.code,{children:"429 error"})," (rate limit exceeded) when interacting with LLM providers. The recommended solution is to use OpenRouter. See ",(0,r.jsx)(o.a,{href:"/docs/guides/handling-llm-rate-limits-with-goose",children:"Handling LLM Rate Limits"})," for more info."]}),"\n",(0,r.jsx)(o.hr,{}),"\n",(0,r.jsx)(o.h3,{id:"hermit-errors",children:"Hermit Errors"}),"\n",(0,r.jsxs)(o.p,{children:['If you see an issue installing an extension in the app that says "hermit',":fatal",'", you may need to reset your hermit cache. We use\na copy of hermit to ensure npx and uvx are consistently available. If you have already used an older version of hermit, you may\nneed to cleanup the cache - on Mac this cache is at']}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"sudo rm -rf ~/Library/Caches/hermit\n"})}),"\n",(0,r.jsx)(o.hr,{}),"\n",(0,r.jsx)(o.h3,{id:"api-errors",children:"API Errors"}),"\n",(0,r.jsx)(o.p,{children:"Users may run into an error like the one below when there are issues with their LLM API tokens, such as running out of credits or incorrect configuration:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-sh",children:"Traceback (most recent call last):\n  File \"/Users/admin/.local/pipx/venvs/goose-ai/lib/python3.13/site-packages/exchange/providers/utils.py\",\nline 30, in raise_for_status\n    response.raise_for_status()\n    ~~~~~~~~~~~~~~~~~~~~~~~~~^^\n  File \"/Users/admin/.local/pipx/venvs/goose-ai/lib/python3.13/site-packages/httpx/_models.py\",\nline 829, in raise_for_status\n    raise HTTPStatusError(message, request=request, response=self)\nhttpx.HTTPStatusError: Client error '404 Not Found' for url\n'https://api.openai.com/v1/chat/completions'\n\n...\n"})}),"\n",(0,r.jsx)(o.p,{children:"This error typically occurs when LLM API credits are exhausted or your API key is invalid. To resolve this issue:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["Check Your API Credits:","\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Log into your LLM provider's dashboard"}),"\n",(0,r.jsx)(o.li,{children:"Verify that you have enough credits. If not, refill them"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["Verify API Key:","\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Run the following command to reconfigure your API key:"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-sh",children:"goose configure\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["For detailed steps on updating your LLM provider, refer to the ",(0,r.jsx)(o.a,{href:"/docs/getting-started/installation",children:"Installation"})," Guide."]}),"\n",(0,r.jsx)(o.hr,{}),"\n",(0,r.jsx)(o.h3,{id:"remove-cached-data",children:"Remove Cached Data"}),"\n",(0,r.jsxs)(o.p,{children:["Goose stores data in a few places. Secrets, such as API keys, are stored exclusively in the system keychain.\nLogs and configuration data are stored in ",(0,r.jsx)(o.code,{children:"~/.config/goose"}),". And the app stores a small amount of data in\n",(0,r.jsx)(o.code,{children:"~/Library/Application Support/Goose"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"You can remove all of this data by following these steps."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["stop any copies of goose running (CLI or GUI)","\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"consider confirming you've stopped them all via the activity monitor"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.li,{children:'open the keychain and delete the credential called "goose", which contains all secrets stored by goose'}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"rm -rf ~/.config/goose"})}),"\n",(0,r.jsxs)(o.li,{children:["For the App on macOS, ",(0,r.jsx)(o.code,{children:"rm -rf ~/Library/Application Support/Goose"})]}),"\n",(0,r.jsx)(o.li,{children:'Delete the "Goose" app from your Applications folder'}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"After this cleanup, if you are looking to try out a fresh install of Goose, you can now start from the usual\ninstall instructions."}),"\n",(0,r.jsx)(o.hr,{}),"\n",(0,r.jsx)(o.h3,{id:"keychainkeyring-errors",children:"Keychain/Keyring Errors"}),"\n",(0,r.jsx)(o.p,{children:"Goose tries to use the system keyring to store secrets. In environments where there is no keyring support, you may\nsee an error like:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"Error Failed to access secure storage (keyring): Platform secure storage failure: DBus error: The name org.freedesktop.secrets was not provided by any .service files\nPlease check your system keychain and run 'goose configure' again.\nIf your system is unable to use the keyring, please try setting secret key(s) via environment variables.\n"})}),"\n",(0,r.jsxs)(o.p,{children:["In this case, you will need to set your provider specific environment variable(s), which can be found at ",(0,r.jsx)(o.a,{href:"/docs/getting-started/providers",children:"Supported LLM Providers"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"You can set them either by doing:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"export GOOGLE_API_KEY=$YOUR_KEY_HERE"})," - for the duration of your session"]}),"\n",(0,r.jsxs)(o.li,{children:["in your ",(0,r.jsx)(o.code,{children:"~/.bashrc"})," or ",(0,r.jsx)(o.code,{children:"~/.zshrc"})," - (or equivalents) so it persists on new shell each new session"]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Then select the ",(0,r.jsx)(o.code,{children:"No"})," option when prompted to save the value to your keyring."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"$ goose configure\n\nWelcome to goose! Let's get you set up with a provider.\n  you can rerun this command later to update your configuration\n\n\u250c   goose-configure\n\u2502\n\u25c7  Which model provider should we use?\n\u2502  Google Gemini\n\u2502\n\u25c7  GOOGLE_API_KEY is set via environment variable\n\u2502\n\u25c7  Would you like to save this value to your keyring?\n\u2502  No\n\u2502\n\u25c7  Enter a model from that provider:\n\u2502  gemini-2.0-flash-exp\n"})}),"\n",(0,r.jsx)(o.hr,{}),"\n",(0,r.jsx)(o.h3,{id:"need-further-help",children:"Need Further Help?"}),"\n",(0,r.jsxs)(o.p,{children:["If you have questions, run into issues, or just need to brainstorm ideas join the ",(0,r.jsx)(o.a,{href:"https://discord.gg/block-opensource",children:"Discord Community"}),"!"]})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>l});var s=n(6540);const r={},i=s.createContext(r);function t(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);