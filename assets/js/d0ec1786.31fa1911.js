"use strict";(self.webpackChunkproject_crm_website=self.webpackChunkproject_crm_website||[]).push([[448],{5318:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>u});var n=i(7378);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=d(i),u=r,m=f["".concat(c,".").concat(u)]||f[u]||p[u]||o;return i?n.createElement(m,s(s({ref:t},l),{},{components:i})):n.createElement(m,s({ref:t},l))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,s=new Array(o);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var d=2;d<o;d++)s[d]=i[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},5611:(e,t,i)=>{i.d(t,{ZP:()=>s});var n=i(5773),r=(i(7378),i(5318));const o={toc:[]};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses.")))}s.isMDXComponent=!0},5708:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=i(5773),r=(i(7378),i(5318)),o=i(5611);const s={sidebar_position:20,title:"Identity Resolvers"},a=void 0,c={unversionedId:"specification/Identifiers",id:"specification/Identifiers",title:"Identity Resolvers",description:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses.",source:"@site/docs/specification/Identifiers.md",sourceDirName:"specification",slug:"/specification/Identifiers",permalink:"/project-crm/docs/specification/Identifiers",draft:!1,editUrl:"https://github.com/uncefact/project-crm/edit/main/website/docs/specification/Identifiers.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Identity Resolvers"},sidebar:"tutorialSidebar",previous:{title:"Conformity Credentials",permalink:"/project-crm/docs/specification/ConformityCredential"},next:{title:"Vocabularies",permalink:"/project-crm/docs/specification/Vocabularies"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Facility Identifiers",id:"facility-identifiers",level:2},{value:"Material Identifiers",id:"material-identifiers",level:2},{value:"Consignment Identifiers",id:"consignment-identifiers",level:2}],p={toc:l};function f(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.ZP,{mdxType:"Disclaimer"}),(0,r.kt)("p",null,"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Identifiers of businesses (eg tax registration numbers), of locations (eg google pins or cadastral/lot numbers), and of products (eg GS1 GTINs or other schemes) are ubiquitous throughout supply chains and underpin the integrity of the system. UNTP-CRM builds upon existing identifier schemes without precluding the use of new schemes so that existing investments and high integrity registers can be leveraged. UNTP-CRM requires four key features of the identifiers and, for those that don't already embody these features, provides a framework to uplift the identifier scheme to meet requirements. Identifiers used in implementations should be discoverable (ie easily read by scanning a barcode, QR code, or RFID), globally unique (ie by adding a domain prefix to local schemes), resolvable (ie given an identifier, there is a standard way to find more data about the identified thing), and verifiable (ie ownership of the identifier can be verified so that actors cannot make claims about identifiers they don't own)."),(0,r.kt)("h2",{id:"facility-identifiers"},"Facility Identifiers"),(0,r.kt)("h2",{id:"material-identifiers"},"Material Identifiers"),(0,r.kt)("h2",{id:"consignment-identifiers"},"Consignment Identifiers"))}f.isMDXComponent=!0}}]);