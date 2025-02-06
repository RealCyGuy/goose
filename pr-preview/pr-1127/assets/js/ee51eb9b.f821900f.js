"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[9951],{2356:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tutorials/developer-mcp","title":"Developer Extension","description":"Use Developer MCP Server as a Goose Extension","source":"@site/docs/tutorials/developer-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/developer-mcp","permalink":"/goose/pr-preview/pr-1127/docs/tutorials/developer-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Developer Extension","description":"Use Developer MCP Server as a Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"Building Custom Extensions","permalink":"/goose/pr-preview/pr-1127/docs/tutorials/custom-extensions"},"next":{"title":"Figma Extension","permalink":"/goose/pr-preview/pr-1127/docs/tutorials/figma-mcp"}}');var r=t(4848),o=t(8453),a=t(5537),i=t(9329);const l={title:"Developer Extension",description:"Use Developer MCP Server as a Goose Extension"},u=void 0,c={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Goose Output",id:"goose-output",level:3}];function p(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The Developer extension allows Goose to automate developer-centric tasks such as file editing, shell command execution, and project setup."}),"\n",(0,r.jsxs)(n.p,{children:["This tutorial will cover enabling and using the Developer MCP Server, which is a built-in Goose extension. In most cases, this extension is ",(0,r.jsx)(n.strong,{children:"already enabled by default when Goose is installed"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure extension is enabled:"}),"\n"]}),"\n",(0,r.jsxs)(a.A,{groupId:"interface",children:[(0,r.jsxs)(i.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Run the ",(0,r.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Choose to ",(0,r.jsx)(n.code,{children:"Toggle Extensions"})]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Toggle Extensions \n\u2502\n\u25c6  Enable extensions: (use "space" to toggle and "enter" to submit)\n// highlight-start    \n\u2502  \u25cf developer\n// highlight-end  \n\u2514  Extension settings updated successfully\n'})})]}),(0,r.jsx)(i.A,{value:"ui",label:"Goose Desktop",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"..."})," in the upper right corner"]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"Settings"})]}),"\n",(0,r.jsxs)(n.li,{children:["Under ",(0,r.jsx)(n.code,{children:"Extensions"}),", toggle ",(0,r.jsx)(n.code,{children:"Developer"})," to on."]}),"\n"]})})]}),"\n",(0,r.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsx)(n.p,{children:"In this example, I'm going to have Goose automate setting up my JavaScript developer environment with Express, Mongoose, Nodemon, Dotenv and initialize Git."}),"\n",(0,r.jsx)(n.admonition,{title:"LLM",type:"info",children:(0,r.jsx)(n.p,{children:"Anthropic's Claude 3.5 Sonnet was used for this task."})}),"\n",(0,r.jsxs)(a.A,{groupId:"interface",children:[(0,r.jsxs)(i.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Open a terminal and start a new Goose session:"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"goose session\n"})})]}),(0,r.jsx)(i.A,{value:"ui",label:"Goose Desktop",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Open a new session in Goose Desktop"}),"\n"]})})]}),"\n",(0,r.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"set up a new JavaScript project with Express, Mongoose, Nodemon, and Dotenv? Fetch the latest package versions, generate a README with those versions, and initialize Git\n"})}),"\n",(0,r.jsx)(n.p,{children:"After 1 minute, Goose was done setting up my entire dev environment! \ud83c\udf89"}),"\n",(0,r.jsx)(n.h3,{id:"goose-output",children:"Goose Output"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:'I\'ll help you set up a new JavaScript project with those dependencies. I\'ll break this down into steps:\n\n1. First, let\'s create a new directory and initialize the project\n2. Then install the dependencies\n3. Create a detailed README\n4. Initialize git\n5. Create some starter files\n6. Let\'s begin:\n\n[... shell commands, files created ...]\n\nGreat! I\'ve set up a complete Express project with MongoDB and Dotenv integrations:\n\n1. Created a new project directory and initialized npm\n2. Installed Express, Mongoose, and dotenv dependencies\n3. set up the basic project structure with directories for:\n    - config/\n    - models/\n    - routes/ \n    - controllers/\n4. Created essential files:\n    - index.js (main server file)\n    - .env (environment variables)\n    - .ignore (with common node.js ignores)\n5. Added a basic user model with basic name and email fields\n6. Created a user controller with two methods:\n    - getUsers (GET all users)\n    - createUser (POST new user)\n7. Added user routes under `/api/routes`\n8. Updated package.json with start scripts\n9. Created a comprehensive README.md with:\n    - Installation scripts\n    - Project structure\n    - Available scripts\n    - Environment variables \n    - Latest package versions\n\nThe project structure is:\n\nmy-express-app/\n\u251c\u2500\u2500 config/         # Configuration files\n\u251c\u2500\u2500 models/        # MongoDB models\n\u2502   \u2514\u2500\u2500 User.js    # User model\n\u251c\u2500\u2500 routes/        # API routes\n\u2502   \u2514\u2500\u2500 userRoutes.js\n\u251c\u2500\u2500 controllers/   # Route controllers\n\u2502   \u2514\u2500\u2500 userController.js\n\u251c\u2500\u2500 .env           # Environment variables\n\u251c\u2500\u2500 .gitignore     # Git ignore file\n\u251c\u2500\u2500 index.js       # Entry point\n\u2514\u2500\u2500 package.json   # Project dependencies and scripts\n\nTo start developing you can:\n\n1. Run `npm install` to install dependencies\n2. start the server with `npm run dev` \n\nThe API will be available at:\n    - `http://localhost:3000/api/users` (GET to get all users)\n    - `http://localhost:3000/api/users` (POST to create a new user)\n\nTo test out the API you can use tools like postman or curl, for example, to create a new user:\n\ncurl x POST http://localhost:3000/api/users \\\n-H "Content-Type: application/json" \\\n-d \'{"name": "Ebony Louis" , "email": "ebony@example.com"}\'\n\nWould you like me to add any additional features or make other improvements to the setup?\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var s=t(4164);const r={tabItem:"tabItem_Ymn6"};var o=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>E});var s=t(6540),r=t(4164),o=t(5627),a=t(6347),i=t(372),l=t(604),u=t(1861),c=t(8749);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=p(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[u,d]=m({queryString:t,groupId:r}),[g,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),f=(()=>{const e=u??g;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,o]),tabValues:o}}var v=t(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function b(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==s&&(u(n),a(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...o,className:(0,r.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function E(e){const n=(0,v.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(6540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);