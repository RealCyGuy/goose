"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[8664],{3575:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"plugins/cli","title":"Goose CLI Commands","description":"Goose provides a command-line interface (CLI) with various commands to manage sessions, toolkits, and more. Below is a list of the available commands and their descriptions:","source":"@site/docs/plugins/cli.md","sourceDirName":"plugins","slug":"/plugins/cli","permalink":"/goose/v1/docs/plugins/cli","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/plugins/cli.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Available Toolkits in Goose","permalink":"/goose/v1/docs/plugins/available-toolkits"},"next":{"title":"Plugins in Goose","permalink":"/goose/v1/docs/plugins/"}}');var i=n(4848),l=n(8453);const r={},c="Goose CLI Commands",t={},d=[{value:"Goose CLI",id:"goose-cli",level:2},{value:"<code>version</code>",id:"version",level:3},{value:"<code>session</code>",id:"session",level:3},{value:"<code>start</code>",id:"start",level:4},{value:"<code>resume</code>",id:"resume",level:4},{value:"<code>run</code>",id:"run",level:4},{value:"<code>list</code>",id:"list",level:4},{value:"<code>clear</code>",id:"clear",level:4},{value:"<code>toolkit</code>",id:"toolkit",level:3},{value:"<code>list</code>",id:"list-1",level:4}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"goose-cli-commands",children:"Goose CLI Commands"})}),"\n",(0,i.jsx)(s.p,{children:"Goose provides a command-line interface (CLI) with various commands to manage sessions, toolkits, and more. Below is a list of the available commands and their descriptions:"}),"\n",(0,i.jsx)(s.h2,{id:"goose-cli",children:"Goose CLI"}),"\n",(0,i.jsx)(s.h3,{id:"version",children:(0,i.jsx)(s.code,{children:"version"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"  goose version\n"})}),"\n",(0,i.jsx)(s.p,{children:"Lists the version of Goose and any associated plugins."}),"\n",(0,i.jsx)(s.h3,{id:"session",children:(0,i.jsx)(s.code,{children:"session"})}),"\n",(0,i.jsx)(s.h4,{id:"start",children:(0,i.jsx)(s.code,{children:"start"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"  goose session start [--profile PROFILE] [--log-level [DEBUG|INFO|WARNING|ERROR|CRITICAL]] [--tracing]\n"})}),"\n",(0,i.jsx)(s.p,{children:"Starts a new Goose session."}),"\n",(0,i.jsxs)(s.p,{children:["If you want to enable locally hosted Langfuse tracing, pass the --tracing flag after starting your local Langfuse server as outlined in the ",(0,i.jsx)(s.a,{href:"https://block.github.io/goose/contributing.html",children:"Contributing Guide's"})," Development guidelines."]}),"\n",(0,i.jsx)(s.h4,{id:"resume",children:(0,i.jsx)(s.code,{children:"resume"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"  goose session resume [NAME] [--profile PROFILE]\n"})}),"\n",(0,i.jsx)(s.p,{children:"Resumes an existing Goose session."}),"\n",(0,i.jsx)(s.h4,{id:"run",children:(0,i.jsx)(s.code,{children:"run"})}),"\n",(0,i.jsx)(s.p,{children:"Goose can run one off plans:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"  goose run plan.md\n"})}),"\n",(0,i.jsx)(s.p,{children:"It will run this plan, or sequence of tasks, to completion as a one shot task."}),"\n",(0,i.jsx)(s.h4,{id:"list",children:(0,i.jsx)(s.code,{children:"list"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"  goose session list\n"})}),"\n",(0,i.jsx)(s.p,{children:"Lists all Goose sessions."}),"\n",(0,i.jsx)(s.h4,{id:"clear",children:(0,i.jsx)(s.code,{children:"clear"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"  goose session clear [--keep KEEP]\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Deletes old Goose sessions, keeping the most recent ones as specified by the ",(0,i.jsx)(s.code,{children:"--keep"})," option."]}),"\n",(0,i.jsx)(s.h3,{id:"toolkit",children:(0,i.jsx)(s.code,{children:"toolkit"})}),"\n",(0,i.jsx)(s.h4,{id:"list-1",children:(0,i.jsx)(s.code,{children:"list"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"  goose toolkit list\n"})}),"\n",(0,i.jsx)(s.p,{children:"Lists all available toolkits with their descriptions."})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var o=n(6540);const i={},l=o.createContext(i);function r(e){const s=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(l.Provider,{value:s},e.children)}}}]);