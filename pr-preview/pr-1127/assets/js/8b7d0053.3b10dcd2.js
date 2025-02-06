"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[4896],{2643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"guides/handling-llm-rate-limits-with-goose","title":"LLM Rate Limits","description":"Rate limiting is the process of restricting the number of requests a user or application can send to an LLM API within a specific timeframe. LLM providers enforce this with the purpose of managing resources and preventing abuse.","source":"@site/docs/guides/handling-llm-rate-limits-with-goose.md","sourceDirName":"guides","slug":"/guides/handling-llm-rate-limits-with-goose","permalink":"/goose/pr-preview/pr-1127/docs/guides/handling-llm-rate-limits-with-goose","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"LLM Rate Limits","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Using Goosehints","permalink":"/goose/pr-preview/pr-1127/docs/guides/using-goosehints"},"next":{"title":"File Management","permalink":"/goose/pr-preview/pr-1127/docs/guides/file-management"}}');var i=n(4848),s=n(8453),o=n(5537),a=n(9329);const l={title:"LLM Rate Limits",sidebar_position:4},u="Handling LLM Rate Limits",c={},d=[{value:"Using OpenRouter",id:"using-openrouter",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"handling-llm-rate-limits",children:"Handling LLM Rate Limits"})}),"\n",(0,i.jsx)(t.p,{children:"Rate limiting is the process of restricting the number of requests a user or application can send to an LLM API within a specific timeframe. LLM providers enforce this with the purpose of managing resources and preventing abuse."}),"\n",(0,i.jsx)(t.p,{children:"Since Goose is working very quickly to implement your tasks, you may need to manage rate limits imposed by the provider. If you frequently hit rate limits, consider upgrading your LLM plan to access higher tier limits or using OpenRouter."}),"\n",(0,i.jsx)(t.h2,{id:"using-openrouter",children:"Using OpenRouter"}),"\n",(0,i.jsx)(t.p,{children:"OpenRouter provides a unified interface for LLMs that allows you to select and switch between different providers automatically - all under a single billing plan. With OpenRouter, you can utilize free models or purchase credits for paid models."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Go to ",(0,i.jsx)(t.a,{href:"https://openrouter.ai",children:"openrouter.ai"})," and create an account."]}),"\n",(0,i.jsxs)(t.li,{children:["Once verified, create your ",(0,i.jsx)(t.a,{href:"https://openrouter.ai/settings/keys",children:"API key"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(o.A,{groupId:"interface",children:[(0,i.jsxs)(a.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Run the Goose configuration command:"}),"\n"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"goose configure\n"})}),(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.code,{children:"Configure Providers"})," from the menu."]}),"\n",(0,i.jsx)(t.li,{children:"Follow the prompts to choose OpenRouter as your provider and enter your OpenRouter API key when prompted."}),"\n"]})]}),(0,i.jsx)(a.A,{value:"ui",label:"Goose Desktop",children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Click on the three dots in the top-right corner."}),"\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.code,{children:"Settings"})," from the menu."]}),"\n",(0,i.jsxs)(t.li,{children:['Click on "Browse" in the ',(0,i.jsx)(t.code,{children:"Models"})," section."]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"Configure"})]}),"\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.code,{children:"OpenRouter"})," from the list of available providers."]}),"\n",(0,i.jsx)(t.li,{children:"Enter your OpenRouter API key in the dialog that appears."}),"\n"]})})]}),"\n",(0,i.jsx)(t.p,{children:"Now Goose will send your requests through OpenRouter which will automatically switch models when necessary to avoid interruptions due to rate limiting."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var r=n(4164);const i={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),i=n(4164),s=n(5627),o=n(6347),a=n(372),l=n(604),u=n(1861),c=n(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:n,groupId:i}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,c.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),b=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),i=a[n].value;i!==r&&(u(t),o(i))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...s,className:(0,i.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);