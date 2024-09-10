"use strict";(self.webpackChunkproject_crm_website=self.webpackChunkproject_crm_website||[]).push([[884],{5318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5611:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(5773),o=(n(7378),n(5318));const i={toc:[]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses.")))}s.isMDXComponent=!0},8206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(5773),o=(n(7378),n(5318)),i=n(5611);const s={sidebar_position:30,title:"Conformity Testing"},a=void 0,c={unversionedId:"guidance/testing",id:"guidance/testing",title:"Conformity Testing",description:"Test Implementation",source:"@site/docs/guidance/testing.md",sourceDirName:"guidance",slug:"/guidance/testing",permalink:"/project-crm/docs/guidance/testing",draft:!1,editUrl:"https://github.com/uncefact/project-crm/edit/main/website/docs/guidance/testing.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Conformity Testing"},sidebar:"tutorialSidebar",previous:{title:"Reference Implementation",permalink:"/project-crm/docs/guidance/reference"},next:{title:"Help & Support",permalink:"/project-crm/docs/guidance/Support"}},p={},l=[{value:"Test Implementation",id:"test-implementation",level:2},{value:"Testing Services",id:"testing-services",level:2}],u={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.ZP,{mdxType:"Disclaimer"}),(0,o.kt)("h2",{id:"test-implementation"},"Test Implementation"),(0,o.kt)("p",null,"Test implementations assist individual implementers and communities of implementers to test your conformance with UNTP-CRM, prior to broad adoption.  These tools allow early implementers to manually create trial digital credentials, and publish them so they can be accessed by other pilot implementers, such as trading partners, customs authorities, investors. You can find other planned implementers here, with whom you can test your test implementation. "),(0,o.kt)("p",null,"Description of tools for undertaking a test implementation can be found at the UNTP site here: ",(0,o.kt)("a",{parentName:"p",href:"https://uncefact.github.io/spec-untp/docs/tools-and-support/ReferenceImplementation"},"https://uncefact.github.io/spec-untp/docs/tools-and-support/ReferenceImplementation"),". The tools and guidance for their use can be accessed at: GitHub - uncefact/tests-untp: UNTP mock implementations and test cases"),(0,o.kt)("h2",{id:"testing-services"},"Testing Services"),(0,o.kt)("p",null,"An explanation of testing services can be found at the \u201cTesting Services\u201d section of the UNTP site: ",(0,o.kt)("a",{parentName:"p",href:"https://uncefact.github.io/spec-untp/docs/tools-and-support/TestService"},"https://uncefact.github.io/spec-untp/docs/tools-and-support/TestService"),". The tools and guidance for their use can be accessed at: GitHub - uncefact/tests-untp: UNTP mock implementations and test cases."),(0,o.kt)("p",null,"Results from early implementations will enable the CRM project team to create CRM-specific testing services, as needed."))}m.isMDXComponent=!0}}]);