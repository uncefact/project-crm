"use strict";(self.webpackChunkproject_crm_website=self.webpackChunkproject_crm_website||[]).push([[931],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5611:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(5773),r=(n(7378),n(5318));const i={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses.")))}l.isMDXComponent=!0},759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(5773),r=(n(7378),n(5318)),i=n(5611);const l={sidebar_position:2,title:"Architecture"},o=void 0,c={unversionedId:"specification/Architecture",id:"specification/Architecture",title:"Architecture",description:"The architecture is the blueprint for all the components of the specification and how they work together. It defines the design principles and challenges which underpin the  UNTP-CRM and shows the components working together from the perspective of a single actor and across the entire value chain. The UNTP-CRM is a fundamentally decentralized architecture with no central store of data.",source:"@site/docs/specification/Architecture.md",sourceDirName:"specification",slug:"/specification/Architecture",permalink:"/project-crm/docs/specification/Architecture",draft:!1,editUrl:"https://github.com/uncefact/project-crm/edit/main/website/docs/specification/Architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Architecture"},sidebar:"tutorialSidebar",previous:{title:"Technical Specification",permalink:"/project-crm/docs/specification/"},next:{title:"Material Passports",permalink:"/project-crm/docs/specification/DigitalMaterialPassport"}},s={},p=[{value:"Design Principles",id:"design-principles",level:2},{value:"Design Challenges\u200b",id:"design-challenges",level:3},{value:"Components",id:"components",level:2},{value:"Each Actor",id:"each-actor",level:2},{value:"Entire Value Chain",id:"entire-value-chain",level:2}],u={toc:p};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.ZP,{mdxType:"Disclaimer"}),(0,r.kt)("p",null,"The architecture is the blueprint for all the components of the specification and how they work together. It defines the design principles and challenges which underpin the  UNTP-CRM and shows the components working together from the perspective of a single actor and across the entire value chain. The UNTP-CRM is a fundamentally decentralized architecture with no central store of data. "),(0,r.kt)("h2",{id:"design-principles"},"Design Principles"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In alignment with the UNTP extension methodology, UNTP-CRM aligns as closely as possible to UNTP and clearly identifies and explains any adaptations required for use by the CRM industry."),(0,r.kt)("li",{parentName:"ol"},"Simple and implementable always wins over expansive & complex."),(0,r.kt)("li",{parentName:"ol"},"Open and free is a fundamental requirement."),(0,r.kt)("li",{parentName:"ol"},"Collaborative development encourages buy-in."),(0,r.kt)("li",{parentName:"ol"},"Decentralized models will always be more scalable than centralized ones."),(0,r.kt)("li",{parentName:"ol"},"Independently verifiable claims are more credible."),(0,r.kt)("li",{parentName:"ol"},"Learn and leverage existing ecosystems, methodologies, standards and approaches.")),(0,r.kt)("h3",{id:"design-challenges"},"Design Challenges\u200b"),(0,r.kt)("p",null,"Implementing end-to-end supply chain traceability at scale faces a number of challenges."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Challenge"),(0,r.kt)("th",{parentName:"tr",align:null},"Our approach"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A plethora of platforms exist already"),(0,r.kt)("td",{parentName:"tr",align:null},"We must focus on interoperability between systems, not picking winners. We\u2019ll also provide guidance on how existing systems can extend their capability to support interoperability.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Technology maturity is variable"),(0,r.kt)("td",{parentName:"tr",align:null},"We must accommodate small businesses and developing nations and allow a gradual transition from paper processes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Most traceability pilots have not scaled to production volumes"),(0,r.kt)("td",{parentName:"tr",align:null},"We must design simple and scalable solutions that can be implemented at scale")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Supply chain actors will not expose sensitive data"),(0,r.kt)("td",{parentName:"tr",align:null},"We must allow stakeholders to protect sensitive commercial information whilst revealing ESG info.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ESG claims have different levels of trust"),(0,r.kt)("td",{parentName:"tr",align:null},"We must provide sufficient evidence to trust the claims.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Greenwashing fraud is endemic"),(0,r.kt)("td",{parentName:"tr",align:null},"We need to explicitly identify greenwashing fraud vectors and how to solve them \u2013 including product substation, mass balance, etc. In particular, in CRM, suppliers have taken the approach of inserting a middleman and obscuring the traceability to the source. A goal of this approach must be the traceability of claims back to the point of extraction, as required by the OECD due diligence handbook.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cost"),(0,r.kt)("td",{parentName:"tr",align:null},"The solution must be cheap enough that there remains a plentiful margin incentive for producers and manufacturers to change behaviour.")))),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://uncefact.github.io/spec-untp/docs/specification/"},"UNTP Technical Specification"),", for purpose and description of the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verifiable Credentials Profile (VCP)"),(0,r.kt)("li",{parentName:"ul"},"Digital Product Passport (DPP)"),(0,r.kt)("li",{parentName:"ul"},"Digital Conformity Credential (DCC)"),(0,r.kt)("li",{parentName:"ul"},"Digital Traceability Events (DTE)"),(0,r.kt)("li",{parentName:"ul"},"Digital Identity Anchor (DIA)"),(0,r.kt)("li",{parentName:"ul"},"Identity Resolver (IDR)"),(0,r.kt)("li",{parentName:"ul"},"Decentralised Access Control (DAC)"),(0,r.kt)("li",{parentName:"ul"},"Sustainability Vocabulary Catalog (SVC)")),(0,r.kt)("h2",{id:"each-actor"},"Each Actor"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture for issuer",src:n(3787).Z,width:"2000",height:"1125"})),(0,r.kt)("h2",{id:"entire-value-chain"},"Entire Value Chain"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture for verifier",src:n(5710).Z,width:"2000",height:"1125"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://uncefact.github.io/project-crm/docs/specification/"},"Technical Specification")),(0,r.kt)("li",{parentName:"ul"},"Material Passports")))}d.isMDXComponent=!0},3787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Architecture-actor-996e37f8437fa76d4acecbbf7b29d951.png"},5710:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Architecture-chain-e2b5348ee531a3d1a4468d719850680c.png"}}]);