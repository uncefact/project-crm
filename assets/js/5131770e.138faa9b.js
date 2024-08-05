"use strict";(self.webpackChunkproject_crm_website=self.webpackChunkproject_crm_website||[]).push([[106],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5611:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(5773),r=(n(7378),n(5318));const i={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses.")))}l.isMDXComponent=!0},1727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(5773),r=(n(7378),n(5318)),i=n(5611);const l={sidebar_position:20,title:"Guidance"},o=void 0,s={unversionedId:"guidance/index",id:"guidance/index",title:"Guidance",description:"Design Principles",source:"@site/docs/guidance/index.md",sourceDirName:"guidance",slug:"/guidance/",permalink:"/project-crm/docs/guidance/",draft:!1,editUrl:"https://github.com/uncefact/project-crm/edit/main/website/docs/guidance/index.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Guidance"},sidebar:"tutorialSidebar",previous:{title:"Vocabularies",permalink:"/project-crm/docs/specification/Vocabularies"},next:{title:"For Industry",permalink:"/project-crm/docs/guidance/Industry"}},c={},p=[{value:"Design Principles",id:"design-principles",level:3},{value:"Design Challenges",id:"design-challenges",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.ZP,{mdxType:"Disclaimer"}),(0,r.kt)("h3",{id:"design-principles"},"Design Principles"),(0,r.kt)("p",null,"This document is guided by the following principles"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Simple and implementable always wins over expansive & complex."),(0,r.kt)("li",{parentName:"ol"},"Open and free is a fundamental requirement."),(0,r.kt)("li",{parentName:"ol"},"Collaborative development encourages buy-in"),(0,r.kt)("li",{parentName:"ol"},"Decentralised models will always be more scalable than centralized ones."),(0,r.kt)("li",{parentName:"ol"},"Independently verifiable claims are more credible."),(0,r.kt)("li",{parentName:"ol"},"Learn and leverage existing ecosystems, methodologies, standards and approaches.")),(0,r.kt)("h3",{id:"design-challenges"},"Design Challenges"),(0,r.kt)("p",null,"Implementing end-to-end supply chain traceability at scale faces a number of challenges. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Challenge"),(0,r.kt)("th",{parentName:"tr",align:null},"Our approach"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A plethora of platforms exist already"),(0,r.kt)("td",{parentName:"tr",align:null},"We must focus on interoperability between systems, not picking winners. We\u2019ll also provide guidance on how existing systems can extend their capability to support interoperability.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Technology maturity is variable"),(0,r.kt)("td",{parentName:"tr",align:null},"We must accommodate small businesses and developing nations and allow a gradual transition from paper processes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Most traceability pilots have not scaled to production volumes"),(0,r.kt)("td",{parentName:"tr",align:null},"We must design simple and scalable solutions that can be implemented at scale")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Supply chain actors will not expose sensitive data"),(0,r.kt)("td",{parentName:"tr",align:null},"We must allow stakeholders to protect sensitive commercial information whilst revealing ESG info.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ESG claims have different levels of trust"),(0,r.kt)("td",{parentName:"tr",align:null},"We must provide sufficient evidence to trust the claims.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Greenwashing fraud is endemic"),(0,r.kt)("td",{parentName:"tr",align:null},"We need to explicitly identify greenwashing fraud vectors and how to solve them \u2013 including product substation, mass balance, etc. In particular, in CRM, suppliers have taken the approach of inserting a middleman and obscuring the traceability to the source. A goal of this approach must be the traceability of claims back to the point of extraction, as required by the OECD due diligence handbook.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cost"),(0,r.kt)("td",{parentName:"tr",align:null},"The solution must be cheap enough that there remains a plentiful margin incentive for producers and manufacturers to change behaviour.")))))}u.isMDXComponent=!0}}]);