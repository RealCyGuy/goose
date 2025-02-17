"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[3822],{9575:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>g,contentTitle:()=>p,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"quickstart","title":"Quickstart","description":"Goose is an open source AI agent that supercharges your software development by automating coding tasks. This quick tutorial will guide you through getting started with Goose!","source":"@site/docs/quickstart.md","sourceDirName":".","slug":"/quickstart","permalink":"/goose/pr-preview/pr-1265/docs/quickstart","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Quickstart"},"sidebar":"tutorialSidebar","next":{"title":"Getting Started","permalink":"/goose/pr-preview/pr-1265/docs/category/getting-started"}}');var i=n(4848),t=n(8453),r=n(5537),l=n(9329),a=n(6289),d=n(6960),c=n(5561),h=n(8127);const u={sidebar_position:1,title:"Quickstart"},p="Goose in 5 minutes",g={},x=[{value:"Install Goose",id:"install-goose",level:2},{value:"Configure Provider",id:"configure-provider",level:2},{value:"Start Session",id:"start-session",level:2},{value:"Write Prompt",id:"write-prompt",level:2},{value:"Install an Extension",id:"install-an-extension",level:2},{value:"Next Steps",id:"next-steps",level:2}];function j(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"goose-in-5-minutes",children:"Goose in 5 minutes"})}),"\n",(0,i.jsx)(c.A,{}),"\n",(0,i.jsx)(o.p,{children:"Goose is an open source AI agent that supercharges your software development by automating coding tasks. This quick tutorial will guide you through getting started with Goose!"}),"\n",(0,i.jsx)(o.h2,{id:"install-goose",children:"Install Goose"}),"\n",(0,i.jsx)(o.p,{children:"You can use Goose via CLI or Desktop application."}),"\n",(0,i.jsxs)(r.A,{groupId:"interface",children:[(0,i.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsx)(o.p,{children:"Run the following command to install the latest version of Goose:"}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-sh",children:"curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | bash\n"})})]}),(0,i.jsxs)(l.A,{value:"ui",label:"Goose Desktop (macOS only)",children:[(0,i.jsxs)(o.p,{children:["To install the latest version of Goose, click the ",(0,i.jsx)(o.strong,{children:"button"})," below:"]}),(0,i.jsx)("div",{className:"pill-button",children:(0,i.jsxs)(a.A,{className:"button button--primary button--lg",to:"https://github.com/block/goose/releases/download/stable/Goose.zip",children:[(0,i.jsx)(d.i,{}),(0,i.jsx)(o.p,{children:"download goose desktop for macOS"})]})}),(0,i.jsx)("div",{style:{marginTop:"1rem"},children:(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["Unzip the downloaded ",(0,i.jsx)(o.code,{children:"Goose.zip"})," file."]}),"\n",(0,i.jsx)(o.li,{children:"Run the executable file to launch the Goose desktop application."}),"\n"]})})]})]}),"\n",(0,i.jsx)(o.h2,{id:"configure-provider",children:"Configure Provider"}),"\n",(0,i.jsxs)(o.p,{children:["Goose works with ",(0,i.jsx)(o.a,{href:"/docs/getting-started/providers",children:"supported LLM providers"}),". When you install Goose, you'll be prompted to choose your preferred LLM and supply an API key."]}),"\n",(0,i.jsxs)(r.A,{groupId:"interface",children:[(0,i.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsx)(o.p,{children:"Use the up and down arrow keys to navigate the CLI menu, and press Enter once you've selected a choice."}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"\u250c   goose-configure\n\u2502\n\u25c7 What would you like to configure?\n\u2502 Configure Providers\n\u2502\n\u25c7 Which model provider should we use?\n\u2502 Google Gemini\n\u2502\n\u25c7 Provider Google Gemini requires GOOGLE_API_KEY, please enter a value\n\u2502\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\n\u2502\n\u25c7 Enter a model from that provider:\n\u2502 gemini-2.0-flash-exp\n\u2502\n\u25c7 Hello! You're all set and ready to go, feel free to ask me anything!\n\u2502\n\u2514 Configuration saved successfully\n"})})]}),(0,i.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Set Up a Provider UI",src:n(6034).A+"",width:"752",height:"802"})})})]}),"\n",(0,i.jsx)(h.A,{}),"\n",(0,i.jsx)(o.admonition,{title:"Model Selection",type:"tip",children:(0,i.jsx)(o.p,{children:"Goose relies heavily on tool calling capabilities and currently works best with Anthropic's Claude 3.5 Sonnet and OpenAI's GPT-4o (2024-11-20) model."})}),"\n",(0,i.jsx)(o.h2,{id:"start-session",children:"Start Session"}),"\n",(0,i.jsx)(o.p,{children:"Sessions are single, continuous conversations between you and Goose. Let's start one."}),"\n",(0,i.jsxs)(r.A,{groupId:"interface",children:[(0,i.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["Make an empty directory (e.g. ",(0,i.jsx)(o.code,{children:"goose-demo"}),") and navigate to that directory from the terminal."]}),"\n",(0,i.jsx)(o.li,{children:"To start a new session, run:"}),"\n"]}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-sh",children:"goose session\n"})})]}),(0,i.jsxs)(l.A,{value:"ui",label:"Goose Desktop",children:[(0,i.jsx)(o.p,{children:"After choosing an LLM provider, you\u2019ll see the session interface ready for use."}),(0,i.jsx)(o.p,{children:"Type your questions, tasks, or instructions directly into the input field, and Goose will immediately get to work."})]})]}),"\n",(0,i.jsx)(o.h2,{id:"write-prompt",children:"Write Prompt"}),"\n",(0,i.jsx)(o.p,{children:"From the prompt, you can interact with Goose by typing your instructions exactly as you would speak to a developer."}),"\n",(0,i.jsx)(o.p,{children:"Let's ask Goose to make a tic-tac-toe game!"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"create an interactive browser-based tic-tac-toe game in javascript where a player competes against a bot\n"})}),"\n",(0,i.jsx)(o.p,{children:"Goose will create a plan and then get right to work on implementing it. Once done, your directory should contain a JavaScript file as well as an HTML page for playing."}),"\n",(0,i.jsx)(o.h2,{id:"install-an-extension",children:"Install an Extension"}),"\n",(0,i.jsxs)(o.p,{children:["While you're able to manually navigate to your working directory and open the HTML file in a browser, wouldn't it be better if Goose did that for you? Let's give Goose the ability to open a web browser by enabling the ",(0,i.jsx)(o.code,{children:"Computer Controller"})," extension."]}),"\n",(0,i.jsxs)(r.A,{groupId:"interface",children:[(0,i.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["End the current session by entering ",(0,i.jsx)(o.code,{children:"Ctrl+C"})," so that you can return to the terminal's command prompt."]}),"\n",(0,i.jsx)(o.li,{children:"Run the configuration command"}),"\n"]}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-sh",children:"goose configure\n"})}),(0,i.jsxs)(o.ol,{start:"3",children:["\n",(0,i.jsxs)(o.li,{children:["Choose ",(0,i.jsx)(o.code,{children:"Add extension"})," > ",(0,i.jsx)(o.code,{children:"Built-in Extension"})," > ",(0,i.jsx)(o.code,{children:"Computer Controller"}),". This ",(0,i.jsx)(o.a,{href:"https://block.github.io/goose/v1/extensions/detail/nondeveloper",children:"extension"})," enables webscraping, file caching, and automations."]}),"\n"]}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"\u250c   goose-configure\n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension\n\u2502\n\u25c7  What type of extension would you like to add?\n\u2502  Built-in Extension\n\u2502\n\u25c6  Which built-in extension would you like to enable?\n\u2502  \u25cb Developer Tools\n\u2502  \u25cf Computer Controller (controls for webscraping, file caching, and automations)\n\u2502  \u25cb Google Drive\n\u2502  \u25cb Memory\n\u2502  \u25cb JetBrains\n\u2514\n"})}),(0,i.jsxs)(o.ol,{start:"4",children:["\n",(0,i.jsx)(o.li,{children:"Now that Goose has browser capabilities, let's resume your last session:"}),"\n"]}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-sh",children:" goose session -r\n"})}),(0,i.jsxs)(o.ol,{start:"5",children:["\n",(0,i.jsx)(o.li,{children:"Ask Goose to launch your game in a browser:"}),"\n"]})]}),(0,i.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["Locate the menu (",(0,i.jsx)(o.code,{children:"..."}),") in the top right corner of the Goose Desktop."]}),"\n",(0,i.jsxs)(o.li,{children:["Select ",(0,i.jsx)(o.code,{children:"Settings"})," from the menu."]}),"\n",(0,i.jsxs)(o.li,{children:["Under the ",(0,i.jsx)(o.code,{children:"Extensions"})," section, toggle the ",(0,i.jsx)(o.code,{children:"Computer Controller"})," extension to enable it. This ",(0,i.jsx)(o.a,{href:"https://block.github.io/goose/v1/extensions/detail/nondeveloper",children:"extension"})," enables webscraping, file caching, and automations."]}),"\n",(0,i.jsxs)(o.li,{children:["Click ",(0,i.jsx)(o.code,{children:"<- Back"})," in the upper left corner to return to your session."]}),"\n",(0,i.jsx)(o.li,{children:"Now that Goose has browser capabilities, let's ask it to launch your game in a browser:"}),"\n"]})})]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"open index.html in a browser\n"})}),"\n",(0,i.jsx)(o.p,{children:"Go ahead and play your game, I know you want to \ud83d\ude02 ... good luck!"}),"\n",(0,i.jsx)(o.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(o.p,{children:"Congrats, you've successfully used Goose to develop a web app! \ud83c\udf89"}),"\n",(0,i.jsx)(o.p,{children:"Here are some ideas for next steps:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Continue your session with Goose and it improve your game (styling, functionality, etc)."}),"\n",(0,i.jsxs)(o.li,{children:["Browse other available ",(0,i.jsx)(o.a,{href:"/docs/getting-started/using-extensions",children:"extensions"})," and install more to enhance Goose's functionality even further."]}),"\n",(0,i.jsxs)(o.li,{children:["Provide Goose with a ",(0,i.jsx)(o.a,{href:"/docs/guides/using-goosehints",children:"set of hints"})," to use within your sessions."]}),"\n"]})]})}function m(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},8127:(e,o,n)=>{n.d(o,{A:()=>t});n(6540);var s=n(2362),i=n(4848);const t=()=>(0,i.jsxs)(s.A,{type:"info",title:"Billing",children:[(0,i.jsx)("a",{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noopener noreferrer",children:"Google Gemini"})," ","offers a free tier you can get started with. Otherwise, you'll need to ensure that you have credits available in your LLM Provider account to successfully make requests.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Some providers also have rate limits on API usage, which can affect your experience. Check out our"," ",(0,i.jsx)("a",{href:"/goose/docs/guides/handling-llm-rate-limits-with-goose",target:"_blank",children:"Handling Rate Limits"})," ","guide to learn how to efficiently manage these limits while using Goose."]})},5561:(e,o,n)=>{n.d(o,{A:()=>t});n(6540);var s=n(2362),i=n(4848);const t=()=>(0,i.jsxs)(s.A,{type:"info",title:"Supported Environments",children:["The Goose CLI currently works on ",(0,i.jsx)("strong",{children:"macOS"})," and ",(0,i.jsx)("strong",{children:"Linux"})," systems and supports both ",(0,i.jsx)("strong",{children:"ARM"})," and ",(0,i.jsx)("strong",{children:"x86"})," architectures. However, the macOS desktop app is not currently supported for x86. On ",(0,i.jsx)("strong",{children:"Windows"}),", Goose CLI can run via WSL. If you'd like to request support for additional operating systems, please"," ",(0,i.jsx)("a",{href:"https://github.com/block/goose/discussions/867",target:"_blank",rel:"noopener noreferrer",children:"vote on GitHub"}),"."]})},6960:(e,o,n)=>{n.d(o,{i:()=>i});var s=n(4848);const i=e=>{let{className:o=""}=e;return(0,s.jsx)("svg",{width:"1.5rem",height:"1.5rem",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",className:o,children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.76 12.15a1 1 0 0 0-1.52-1.3L13 12.296V3a1 1 0 1 0-2 0v9.297l-1.24-1.448a1 1 0 0 0-1.52 1.302l3 3.5a1 1 0 0 0 1.52 0l3-3.5ZM5 16a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v3H5v-3Z",fill:"currentColor"})})}},6034:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/set-up-provider-ui-a6ba5f66d16937ee91dbad22c101c232.png"}}]);