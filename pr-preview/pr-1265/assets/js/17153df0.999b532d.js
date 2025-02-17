"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[6082],{6911:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"guides/goose-cli-commands","title":"CLI Commands","description":"Goose provides a command-line interface (CLI) with several commands for managing sessions, configurations and extensions. Below is a list of the available commands and their  descriptions:","source":"@site/docs/guides/goose-cli-commands.md","sourceDirName":"guides","slug":"/guides/goose-cli-commands","permalink":"/goose/pr-preview/pr-1265/docs/guides/goose-cli-commands","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Managing Sessions","permalink":"/goose/pr-preview/pr-1265/docs/guides/managing-goose-sessions"},"next":{"title":"Using Goosehints","permalink":"/goose/pr-preview/pr-1265/docs/guides/using-goosehints"}}');var o=s(4848),r=s(8453);const l={sidebar_position:2},c="CLI Commands",d={},t=[{value:"Commands",id:"commands",level:2},{value:"help",id:"help",level:3},{value:"version",id:"version",level:3},{value:"agents",id:"agents",level:3},{value:"mcp",id:"mcp",level:3},{value:"session [options]",id:"session-options",level:3},{value:"run [options]",id:"run-options",level:3},{value:"configure [options]",id:"configure-options",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"cli-commands",children:"CLI Commands"})}),"\n",(0,o.jsx)(n.p,{children:"Goose provides a command-line interface (CLI) with several commands for managing sessions, configurations and extensions. Below is a list of the available commands and their  descriptions:"}),"\n",(0,o.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,o.jsx)(n.h3,{id:"help",children:"help"}),"\n",(0,o.jsx)(n.p,{children:"Used to display the help menu"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"goose --help\n"})}),"\n",(0,o.jsx)(n.h3,{id:"version",children:"version"}),"\n",(0,o.jsx)(n.p,{children:"Used to check the current Goose version you have installed"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"goose --version\n"})}),"\n",(0,o.jsx)(n.h3,{id:"agents",children:"agents"}),"\n",(0,o.jsx)(n.p,{children:"Used to list all available agents"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"goose agents\n"})}),"\n",(0,o.jsx)(n.h3,{id:"mcp",children:"mcp"}),"\n",(0,o.jsxs)(n.p,{children:["Run an enabled MCP server specified by ",(0,o.jsx)(n.code,{children:"<name>"})," (e.g. 'Google Drive')"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"goose mcp <name>\n"})}),"\n",(0,o.jsx)(n.h3,{id:"session-options",children:"session [options]"}),"\n",(0,o.jsx)(n.p,{children:"Start or resume sessions with the following options."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Options:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"-n, --name <NAME>"})})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Name for the new chat session (e.g. ",(0,o.jsx)(n.code,{children:"'project-x'"}),")"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"goose session --name <name>\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"-r, --resume"})})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Resume the previous session"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"goose session --resume --name <name>\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"--with-extension <COMMAND>"})})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Starts the session with the specified extension. Can also include environment variables (e.g., ",(0,o.jsx)(n.code,{children:"'GITHUB_TOKEN={your_token} npx -y @modelcontextprotocol/server-github'"}),")."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"goose session --name <name> --with-extension <command>\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"--with-builtin <NAME>"})})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Starts the session with the specified ",(0,o.jsx)(n.a,{href:"/docs/getting-started/using-extensions#built-in-extensions",children:"built-in extension"})," enabled. (e.g. 'developer')"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"goose session --with-builtin <id>\n"})}),"\n",(0,o.jsx)(n.h3,{id:"run-options",children:"run [options]"}),"\n",(0,o.jsx)(n.p,{children:"Execute commands from an instruction file or stdin"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"-i, --instructions <FILE>"})}),": Path to instruction file containing commands"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"-t, --text <TEXT>"})}),": Input text to provide to Goose directly"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"-n, --name <NAME>"})}),": Name for this run session (e.g., 'daily-tasks')"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"-r, --resume"})}),": Resume from a previous run"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"goose run --instructions plan.md\n"})}),"\n",(0,o.jsx)(n.h3,{id:"configure-options",children:"configure [options]"}),"\n",(0,o.jsx)(n.p,{children:"Configure Goose settings - providers, extensions, etc."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"goose configure'\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var i=s(6540);const o={},r=i.createContext(o);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);