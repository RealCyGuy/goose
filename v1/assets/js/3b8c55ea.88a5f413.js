"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[6803],{23:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"installation","title":"Installation","description":"To install Goose, use pipx on macOS, Linux, or Windows.","source":"@site/docs/installation.md","sourceDirName":".","slug":"/installation","permalink":"/goose/v1/docs/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/goose/v1/docs/"},"next":{"title":"Quickstart","permalink":"/goose/v1/docs/quickstart"}}');var i=o(4848),t=o(8453);const r={sidebar_position:2},a="Installation",l={},c=[{value:"Configuration",id:"configuration",level:3},{value:"Set up a provider",id:"set-up-a-provider",level:4},{value:"Profiles",id:"profiles",level:4},{value:"Running Goose",id:"running-goose",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,i.jsxs)(n.p,{children:["To install Goose, use ",(0,i.jsx)(n.code,{children:"pipx"})," on macOS, Linux, or Windows."]}),"\n",(0,i.jsxs)(n.p,{children:["First, ensure ",(0,i.jsx)(n.a,{href:"https://github.com/pypa/pipx?tab=readme-ov-file#install-pipx",children:"pipx"})," is installed:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"brew install pipx\npipx ensurepath\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then install Goose:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"pipx install goose-ai\n"})}),"\n",(0,i.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.h4,{id:"set-up-a-provider",children:"Set up a provider"}),"\n",(0,i.jsxs)(n.p,{children:["Goose works with a set of ",(0,i.jsx)(n.a,{href:"https://block.github.io/goose/plugins/providers.html",children:"supported LLM providers"})," that you can obtain an API key from if you don't already have one. You'll be prompted to set an API key if you haven't set one previously when you run Goose."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["[!TIP]\n",(0,i.jsx)(n.strong,{children:"Billing:"})]}),"\n",(0,i.jsx)(n.p,{children:"You will need to have credits in your LLM Provider account (when necessary) to be able to successfully make requests."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"profiles",children:"Profiles"}),"\n",(0,i.jsxs)(n.p,{children:["After installation, you can configure Goose anytime by editing your profile file located at ",(0,i.jsx)(n.code,{children:"~/.config/goose/profiles.yaml"}),". You can set multiple profile configurations, use different LLM providers, and enable toolkits that customize Goose's functionality as well:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"default:\n  provider: openai\n  processor: gpt-4o\n  accelerator: gpt-4o-mini\n  moderator: passive\n  toolkits:\n    - name: developer\n      requires: {}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"running-goose",children:"Running Goose"}),"\n",(0,i.jsxs)(n.p,{children:["You can run ",(0,i.jsx)(n.code,{children:"goose"})," from the command line using:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"goose session start\n"})}),"\n",(0,i.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(n.p,{children:["Visit the ",(0,i.jsx)(n.a,{href:"https://block.github.io/goose/configuration.html",children:"Configuration Guide"})," for detailed instructions on configuring Goose."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var s=o(6540);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);