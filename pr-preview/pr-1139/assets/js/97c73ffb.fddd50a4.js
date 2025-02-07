"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[6950],{6614:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"getting-started/providers","title":"Configure LLM Provider","description":"Goose is compatible with a wide range of LLM providers, allowing you to choose and integrate your preferred model.","source":"@site/docs/getting-started/providers.md","sourceDirName":"getting-started","slug":"/getting-started/providers","permalink":"/goose/pr-preview/pr-1139/docs/getting-started/providers","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Configure LLM Provider"},"sidebar":"tutorialSidebar","previous":{"title":"Install Goose","permalink":"/goose/pr-preview/pr-1139/docs/getting-started/installation"},"next":{"title":"Using Extensions","permalink":"/goose/pr-preview/pr-1139/docs/getting-started/using-extensions"}}');var i=r(4848),s=r(8453),l=r(5537),t=r(9329);const d={sidebar_position:2,title:"Configure LLM Provider"},a="Supported LLM Providers",c={},h=[{value:"Available Providers",id:"available-providers",level:2},{value:"Configure Provider",id:"configure-provider",level:2},{value:"Using Goose for Free",id:"using-goose-for-free",level:2},{value:"Google Gemini",id:"google-gemini",level:3},{value:"Local LLMs (Ollama)",id:"local-llms-ollama",level:3},{value:"DeepSeek-R1",id:"deepseek-r1",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"supported-llm-providers",children:"Supported LLM Providers"})}),"\n",(0,i.jsx)(n.p,{children:"Goose is compatible with a wide range of LLM providers, allowing you to choose and integrate your preferred model."}),"\n",(0,i.jsx)(n.admonition,{title:"Model Selection",type:"tip",children:(0,i.jsxs)(n.p,{children:["Goose relies heavily on tool calling capabilities and currently works best with Anthropic's Claude 3.5 Sonnet and OpenAI's GPT-4o (2024-11-20) model.\n",(0,i.jsx)(n.a,{href:"https://gorilla.cs.berkeley.edu/leaderboard.html",children:"Berkeley Function-Calling Leaderboard"})," can be a good guide for selecting models."]})}),"\n",(0,i.jsx)(n.h2,{id:"available-providers",children:"Available Providers"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Provider"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Parameters"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://www.anthropic.com/",children:"Anthropic"})}),(0,i.jsx)(n.td,{children:"Offers Claude, an advanced AI model for natural language tasks."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ANTHROPIC_API_KEY"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://www.databricks.com/",children:"Databricks"})}),(0,i.jsx)(n.td,{children:"Unified data analytics and AI platform for building and deploying models."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"DATABRICKS_HOST"}),", ",(0,i.jsx)(n.code,{children:"DATABRICKS_TOKEN"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://ai.google.dev/gemini-api/docs",children:"Gemini"})}),(0,i.jsx)(n.td,{children:"Advanced LLMs by Google with multimodal capabilities (text, images)."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"GOOGLE_API_KEY"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://groq.com/",children:"Groq"})}),(0,i.jsx)(n.td,{children:"High-performance inference hardware and tools for LLMs."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"GROQ_API_KEY"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://ollama.com/",children:"Ollama"})}),(0,i.jsxs)(n.td,{children:["Local model runner supporting Qwen, Llama, DeepSeek, and other open-source models. ",(0,i.jsxs)(n.strong,{children:["Because this provider runs locally, you must first ",(0,i.jsx)(n.a,{href:"/docs/getting-started/providers#local-llms-ollama",children:"download and run a model"}),"."]})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"OLLAMA_HOST"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://platform.openai.com/api-keys",children:"OpenAI"})}),(0,i.jsxs)(n.td,{children:["Provides gpt-4o, o1, and other advanced language models. ",(0,i.jsx)(n.strong,{children:"o1-mini and o1-preview are not supported because Goose uses tool calling."})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"OPENAI_API_KEY"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://openrouter.ai/",children:"OpenRouter"})}),(0,i.jsx)(n.td,{children:"API gateway for unified access to various models with features like rate-limiting management."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"OPENROUTER_API_KEY"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"configure-provider",children:"Configure Provider"}),"\n",(0,i.jsxs)(n.p,{children:["To configure your chosen provider or see available options, run ",(0,i.jsx)(n.code,{children:"goose configure"})," in the CLI or visit the ",(0,i.jsx)(n.code,{children:"Provider Settings"})," page in the Goose Desktop."]}),"\n",(0,i.jsxs)(l.A,{groupId:"interface",children:[(0,i.jsxs)(t.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Run the following command:"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.code,{children:"Configure Providers"})," from the menu and press Enter."]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c6  What would you like to configure?\n\u2502  \u25cf Configure Providers (Change provider or update credentials)\n\u2502  \u25cb Toggle Extensions \n\u2502  \u25cb Add Extension \n\u2514  \n"})}),(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Choose a model provider and press Enter."}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Configure Providers \n\u2502\n\u25c6  Which model provider should we use?\n\u2502  \u25cf Anthropic (Claude and other models from Anthropic)\n\u2502  \u25cb Databricks \n\u2502  \u25cb Google Gemini \n\u2502  \u25cb Groq \n\u2502  \u25cb Ollama \n\u2502  \u25cb OpenAI \n\u2502  \u25cb OpenRouter \n\u2514  \n"})}),(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Enter your API key (and any other configuration details) when prompted"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Configure Providers \n\u2502\n\u25c7  Which model provider should we use?\n\u2502  Anthropic \n\u2502\n\u25c6  Provider Anthropic requires ANTHROPIC_API_KEY, please enter a value\n\u2502   \n\u2514  \n"})})]}),(0,i.jsxs)(t.A,{value:"ui",label:"Goose Desktop",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To update your LLM provider and API key:"})}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"..."})," in the upper right corner"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Settings"})]}),"\n",(0,i.jsxs)(n.li,{children:["Next to ",(0,i.jsx)(n.code,{children:"Models"}),", click the ",(0,i.jsx)(n.code,{children:"browse"})," link"]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.code,{children:"configure"})," link in the upper right corner"]}),"\n",(0,i.jsxs)(n.li,{children:["Press the ",(0,i.jsx)(n.code,{children:"+"})," button next to the provider of your choice"]}),"\n",(0,i.jsxs)(n.li,{children:["Add additional configurations (API key, host, etc) then press ",(0,i.jsx)(n.code,{children:"submit"})]}),"\n"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To add/change provider model"})}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"..."})," in the upper right corner"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Settings"})]}),"\n",(0,i.jsxs)(n.li,{children:["Next to ",(0,i.jsx)(n.code,{children:"Models"}),", click the ",(0,i.jsx)(n.code,{children:"browse"})," link"]}),"\n",(0,i.jsxs)(n.li,{children:["Scroll down to ",(0,i.jsx)(n.code,{children:"Add Model"})]}),"\n",(0,i.jsx)(n.li,{children:"Select a Provider from drop down menu"}),"\n",(0,i.jsxs)(n.li,{children:["Enter Model name and press ",(0,i.jsx)(n.code,{children:"+ Add Model"})]}),"\n"]}),(0,i.jsxs)(n.p,{children:["You can explore more models by selecting a ",(0,i.jsx)(n.code,{children:"provider"})," name under ",(0,i.jsx)(n.code,{children:"Browse by Provider"}),". A link will appear, directing you to the provider\u2019s website. Once you've found the model you want, return to step 6 and paste the model name."]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"using-goose-for-free",children:"Using Goose for Free"}),"\n",(0,i.jsxs)(n.p,{children:["Goose is a free and open source AI agent that you can start using right away, but not all supported ",(0,i.jsx)(n.a,{href:"/docs/getting-started/providers",children:"LLM Providers"})," provide a free tier."]}),"\n",(0,i.jsx)(n.p,{children:"Below, we outline a couple of free options and how to get started with them."}),"\n",(0,i.jsx)(n.admonition,{title:"Limitations",type:"warning",children:(0,i.jsx)(n.p,{children:"These free options are a great way to get started with Goose and explore its capabilities. However, you may need to upgrade your LLM for better performance."})}),"\n",(0,i.jsx)(n.h3,{id:"google-gemini",children:"Google Gemini"}),"\n",(0,i.jsxs)(n.p,{children:["Google Gemini provides a free tier. To start using the Gemini API with Goose, you need an API Key from ",(0,i.jsx)(n.a,{href:"https://aistudio.google.com/app/apikey",children:"Google AI studio"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"To set up Google Gemini with Goose, follow these steps:"}),"\n",(0,i.jsxs)(l.A,{groupId:"interface",children:[(0,i.jsxs)(t.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Run:"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.code,{children:"Configure Providers"})," from the menu."]}),"\n",(0,i.jsxs)(n.li,{children:["Follow the prompts to choose ",(0,i.jsx)(n.code,{children:"Google Gemini"})," as the provider."]}),"\n",(0,i.jsx)(n.li,{children:"Enter your API key when prompted."}),"\n",(0,i.jsx)(n.li,{children:"Enter the Gemini model of your choice."}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u250c   goose-configure\n\u2502\n\u25c7 What would you like to configure?\n\u2502 Configure Providers\n\u2502\n\u25c7 Which model provider should we use?\n\u2502 Google Gemini\n\u2502\n\u25c7 Provider Google Gemini requires GOOGLE_API_KEY, please enter a value\n\u2502\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\n\u2502    \n\u25c7 Enter a model from that provider:\n\u2502 gemini-2.0-flash-exp\n\u2502\n\u25c7 Hello! You're all set and ready to go, feel free to ask me anything!\n\u2502\n\u2514 Configuration saved successfully\n"})})]}),(0,i.jsxs)(t.A,{value:"ui",label:"Goose Desktop",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To update your LLM provider and API key:"})}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Click on the three dots in the top-right corner."}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.code,{children:"Provider Settings"})," from the menu."]}),"\n",(0,i.jsxs)(n.li,{children:["Choose ",(0,i.jsx)(n.code,{children:"Google Gemini"})," as provider from the list."]}),"\n",(0,i.jsxs)(n.li,{children:["Click Edit, enter your API key, and click ",(0,i.jsx)(n.code,{children:"Set as Active"}),"."]}),"\n"]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"local-llms-ollama",children:"Local LLMs (Ollama)"}),"\n",(0,i.jsx)(n.p,{children:"Ollama provides local LLMs, which requires a bit more set up before you can use it with Goose."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://ollama.com/download",children:"Download Ollama"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Run any ",(0,i.jsx)(n.a,{href:"https://ollama.com/search?c=tools",children:"model supporting tool-calling"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Limited Support for models without tool calling",type:"warning",children:(0,i.jsxs)(n.p,{children:["Goose extensively uses tool calling, so models without it (e.g. ",(0,i.jsx)(n.code,{children:"DeepSeek-r1"}),") can only do chat completion. If using models without tool calling, all Goose ",(0,i.jsx)(n.a,{href:"/docs/getting-started/using-extensions#enablingdisabling-extensions",children:"extensions must be disabled"}),". As an alternative, you can use a ",(0,i.jsx)(n.a,{href:"/docs/getting-started/providers#deepseek-r1",children:"custom DeepSeek-r1 model"})," we've made specifically for Goose."]})}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"ollama run qwen2.5\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"In a separate terminal window, configure with Goose:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Choose to ",(0,i.jsx)(n.code,{children:"Configure Providers"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c6  What would you like to configure?\n\u2502  \u25cf Configure Providers (Change provider or update credentials)\n\u2502  \u25cb Toggle Extensions \n\u2502  \u25cb Add Extension \n\u2514  \n"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["Choose ",(0,i.jsx)(n.code,{children:"Ollama"})," as the model provider"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Configure Providers \n\u2502\n\u25c6  Which model provider should we use?\n\u2502  \u25cb Anthropic \n\u2502  \u25cb Databricks \n\u2502  \u25cb Google Gemini \n\u2502  \u25cb Groq \n\u2502  \u25cf Ollama (Local open source models)\n\u2502  \u25cb OpenAI \n\u2502  \u25cb OpenRouter \n\u2514  \n"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Enter the host where your model is running"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Endpoint",type:"info",children:(0,i.jsxs)(n.p,{children:["For Ollama, if you don't provide a host, we set it to ",(0,i.jsx)(n.code,{children:"localhost:11434"}),". When constructing the URL, we preprend ",(0,i.jsx)(n.code,{children:"http://"})," if the scheme is not ",(0,i.jsx)(n.code,{children:"http"})," or ",(0,i.jsx)(n.code,{children:"https"}),". If you're running Ollama on port 80 or 443, you'll have to set ",(0,i.jsx)(n.code,{children:"OLLMA_HOST=http://host:{port}"})]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Configure Providers \n\u2502\n\u25c7  Which model provider should we use?\n\u2502  Ollama \n\u2502\n\u25c6  Provider Ollama requires OLLAMA_HOST, please enter a value\n\u2502  http://localhost:11434\n\u2514\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Enter the model you have running"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Configure Providers \n\u2502\n\u25c7  Which model provider should we use?\n\u2502  Ollama \n\u2502\n\u25c7  Provider Ollama requires OLLAMA_HOST, please enter a value\n\u2502  http://localhost:11434\n\u2502\n\u25c7  Enter a model from that provider:\n\u2502  qwen2.5\n\u2502\n\u25c7  Welcome! You're all set to explore and utilize my capabilities. Let's get started on solving your problems together!\n\u2502\n\u2514  Configuration saved successfully\n"})}),"\n",(0,i.jsx)(n.h3,{id:"deepseek-r1",children:"DeepSeek-R1"}),"\n",(0,i.jsxs)(n.p,{children:["Ollama provides open source LLMs, such as ",(0,i.jsx)(n.code,{children:"DeepSeek-r1"}),", that you can install and run locally.\nNote that the native ",(0,i.jsx)(n.code,{children:"DeepSeek-r1"})," model doesn't support tool calling, however, we have a ",(0,i.jsx)(n.a,{href:"https://ollama.com/michaelneale/deepseek-r1-goose",children:"custom model"})," you can use with Goose."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Note that this is a 70B model size and requires a powerful device to run smoothly."})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Download and install Ollama from ",(0,i.jsx)(n.a,{href:"https://ollama.com/download",children:"ollama.com"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"In a terminal window, run the following command to install the custom DeepSeek-r1 model:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"ollama run michaelneale/deepseek-r1-goose\n"})}),"\n",(0,i.jsxs)(l.A,{groupId:"interface",children:[(0,i.jsxs)(t.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"In a separate terminal window, configure with Goose:"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Choose to ",(0,i.jsx)(n.code,{children:"Configure Providers"})]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c6  What would you like to configure?\n\u2502  \u25cf Configure Providers (Change provider or update credentials)\n\u2502  \u25cb Toggle Extensions \n\u2502  \u25cb Add Extension \n\u2514  \n"})}),(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["Choose ",(0,i.jsx)(n.code,{children:"Ollama"})," as the model provider"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Configure Providers \n\u2502\n\u25c6  Which model provider should we use?\n\u2502  \u25cb Anthropic \n\u2502  \u25cb Databricks \n\u2502  \u25cb Google Gemini \n\u2502  \u25cb Groq \n\u2502  \u25cf Ollama (Local open source models)\n\u2502  \u25cb OpenAI \n\u2502  \u25cb OpenRouter \n\u2514  \n"})}),(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Enter the host where your model is running"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Configure Providers \n\u2502\n\u25c7  Which model provider should we use?\n\u2502  Ollama \n\u2502\n\u25c6  Provider Ollama requires OLLAMA_HOST, please enter a value\n\u2502  http://localhost:11434\n\u2514\n"})}),(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Enter the installed model from above"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Configure Providers \n\u2502\n\u25c7  Which model provider should we use?\n\u2502  Ollama \n\u2502\n\u25c7   Provider Ollama requires OLLAMA_HOST, please enter a value\n\u2502  http://localhost:11434  \n\u2502    \n\u25c7  Enter a model from that provider:\n\u2502  michaelneale/deepseek-r1-goose\n\u2502\n\u25c7  Welcome! You're all set to explore and utilize my capabilities. Let's get started on solving your problems together!\n\u2502\n\u2514  Configuration saved successfully\n"})})]}),(0,i.jsx)(t.A,{value:"ui",label:"Goose Desktop",children:(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"..."})," in the top-right corner."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.code,{children:"Settings"})," -> ",(0,i.jsx)(n.code,{children:"Browse Models"})," -> and select ",(0,i.jsx)(n.code,{children:"Ollama"})," from the list."]}),"\n",(0,i.jsxs)(n.li,{children:["Enter ",(0,i.jsx)(n.code,{children:"michaelneale/deepseek-r1-goose"})," for the model name."]}),"\n"]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:["If you have any questions or need help with a specific provider, feel free to reach out to us on ",(0,i.jsx)(n.a,{href:"https://discord.gg/block-opensource",children:"Discord"})," or on the ",(0,i.jsx)(n.a,{href:"https://github.com/block/goose",children:"Goose repo"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9329:(e,n,r)=>{r.d(n,{A:()=>l});r(6540);var o=r(4164);const i={tabItem:"tabItem_Ymn6"};var s=r(4848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(i.tabItem,l),hidden:r,children:n})}},5537:(e,n,r)=>{r.d(n,{A:()=>y});var o=r(6540),i=r(4164),s=r(5627),l=r(6347),t=r(372),d=r(604),a=r(1861),c=r(8749);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:o,default:i}}=e;return{value:n,label:r,attributes:o,default:i}}))}(r);return function(e){const n=(0,a.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const i=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,s=u(e),[l,d]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[a,h]=x({queryString:r,groupId:i}),[g,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,c.Dv)(r);return[i,(0,o.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),j=(()=>{const e=a??g;return p({value:e,tabValues:s})?e:null})();(0,t.A)((()=>{j&&d(j)}),[j]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,s]),tabValues:s}}var m=r(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(4848);function v(e){let{className:n,block:r,selectedValue:o,selectValue:l,tabValues:t}=e;const d=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.a_)(),c=e=>{const n=e.currentTarget,r=d.indexOf(n),i=t[r].value;i!==o&&(a(n),l(i))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:t.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>{d.push(e)},onKeyDown:h,onClick:c,...s,className:(0,i.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":o===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,f.jsx)(w,{...e,children:h(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>t});var o=r(6540);const i={},s=o.createContext(i);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);