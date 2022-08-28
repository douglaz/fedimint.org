"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[5638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||c[f]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},a="Regulatory Risk",s={unversionedId:"TradeOffs/RegulatoryRisk",id:"TradeOffs/RegulatoryRisk",title:"Regulatory Risk",description:"This guide has been developed as a community project and is a live document. We would advise you to fully consider your own risk model and mitigations before running Fedimint. We also appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.",source:"@site/docs/TradeOffs/04-RegulatoryRisk.md",sourceDirName:"TradeOffs",slug:"/TradeOffs/RegulatoryRisk",permalink:"/docs/TradeOffs/RegulatoryRisk",draft:!1,editUrl:"https://github.com/fedimint/fedimint.org/tree/main/docs/TradeOffs/04-RegulatoryRisk.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Debasement Risk",permalink:"/docs/TradeOffs/DebasementRisk"},next:{title:"LN Gateway Risk",permalink:"/docs/TradeOffs/TrustLNGateways"}},l={},u=[],d={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"regulatory-risk"},"Regulatory Risk"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This guide has been developed as a community project and is a live document. We would advise you to fully consider your own risk model and mitigations before running Fedimint. We also appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.")),(0,o.kt)("p",null,"The Fedimint protocol has been designed to fit a particular regulatory niche. One in which people custody assets for friends, family and community interests, where there is no profit motive. "),(0,o.kt)("p",null,"This risk deals with the threat of changing regulations meaning this is no longer the case and the mint is forced to shut down or divulge user information. "),(0,o.kt)("p",null,"This is a nuanced area that will need to be explored on a per Fedimint basis dependant on the laws in the local jurisdiction and the way a Fedimint is set up and operated.\xa0"),(0,o.kt)("p",null,"However, most jurisdictions that regulate Bitcoin financial activities have exemptions for financial related activities that are not done by way of business.\xa0 "),(0,o.kt)("p",null,"There are a number of reasons for this but one is that it is normal for individuals to perform financial activities on behalf of friends and family and to require these activities to be regulated would quickly overwhelm any regulatory body.\xa0"),(0,o.kt)("p",null,"Imagine if anyone holding money for their child in a piggy bank would have to become a regulated custodian, or if to accept money from your friend to buy something for them from the local convenience store you\u2019d need to register as a payment institute!"),(0,o.kt)("p",null,"The most commonly envisaged model for a Fedimint community is one made of pre-existing trusted guardians and users and where the guardians are not providing the service to make a profit but to help ensure that their and their friends\u2019 bitcoins are kept safely and privately.\xa0 Furthermore, no one guardian retains total control over a user\u2019s funds."),(0,o.kt)("p",null,"The UK FCA has a ",(0,o.kt)("a",{parentName:"p",href:"https://www.fca.org.uk/publication/documents/cryptoasset-registration-flowchart.pdf"},"helpful flowchart")," showing their process for determining whether or not an organisation needs to be regulated. However, it should go without saying that if you are worried about this, you should definitely seek legal advice in your local jurisdiction."),(0,o.kt)("p",null,"The protocol is flexible enough to support human rights groups in high threat environments. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"It is up to the federation guardians to consider the legal and regulatory implications of the deployment considered. ")))}c.isMDXComponent=!0}}]);