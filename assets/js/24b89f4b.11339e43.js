"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[4597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,f=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1140:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o="How do backups work?",s={unversionedId:"FAQs/Backups",id:"FAQs/Backups",title:"How do backups work?",description:"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.",source:"@site/docs/FAQs/Backups.md",sourceDirName:"FAQs",slug:"/FAQs/Backups",permalink:"/docs/FAQs/Backups",draft:!1,editUrl:"https://github.com/fedimint/fedimint.org/tree/main/docs/FAQs/Backups.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is aChaumian Mint",permalink:"/docs/FAQs/WhatIsChaumianMint"},next:{title:"What are the future use cases for Fedimint?",permalink:"/docs/FAQs/FutureUseCases"}},u={},c=[{value:"How are user backups and recoveries managed?",id:"how-are-user-backups-and-recoveries-managed",level:2},{value:"Can Fedimint federations help with estate planning and inheritance?",id:"can-fedimint-federations-help-with-estate-planning-and-inheritance",level:2},{value:"Do federation users need back up private keys?",id:"do-federation-users-need-back-up-private-keys",level:2}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-do-backups-work"},"How do backups work?"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.")),(0,a.kt)("p",null,"The backup process in Fedimint is out of scope of the main protocol and is likely to differ depending on the particular federation implementation."),(0,a.kt)("h2",{id:"how-are-user-backups-and-recoveries-managed"},"How are user backups and recoveries managed?"),(0,a.kt)("p",null,"It is envisaged that after joining a federation, which only requires scanning a QR code provided by a federation guardian, the user will likely be asked to enter their full name as it appears on their passport (or easily memorable piece of information).\xa0 "),(0,a.kt)("p",null,"This will be used to encrypt the user private key before it is sharded and backed up to the guardians\u2019 federation servers."),(0,a.kt)("p",null,"If a user loses their phone or can no longer access their tokens, they can personally verify themselves using KYF (Know Your Federation - always use Fedimints where you can trust your guardians) and once a quorum of guardians verify the identity of the user, they can send the shards that relate to their name and the user can reconstitute them locally."),(0,a.kt)("h2",{id:"can-fedimint-federations-help-with-estate-planning-and-inheritance"},"Can Fedimint federations help with estate planning and inheritance?"),(0,a.kt)("p",null,"Yes.\xa0 Building on the protocol discussed in the question \u201cHow are user backup and recovery handled?\u201d, it is feasible to securely store one\u2019s will with the Fedimint federation such that it can only be revealed upon your passing.\xa0 "),(0,a.kt)("p",null,"Even without this, it is possible for suitably appointed executors to a Will to provide sufficient evidence to enable the guardians to release the late users tokens to them."),(0,a.kt)("h2",{id:"do-federation-users-need-back-up-private-keys"},"Do federation users need back up private keys?"),(0,a.kt)("p",null,"Do federation users need to figure out how to back up their private keys or 12 or 24 word backup phrases like with a hardware wallet?"),(0,a.kt)("p",null,"Yes they do, but it is envisaged that their key will automatically be split into cryptographically secure \u201cshards\u201d that are shared between the guardians when they first connect using their full name (or similar) as the recovery key. "),(0,a.kt)("p",null,"This process can be thought of as an encrypted password backup to a mini private DropBox or Google Drive run by the federation."),(0,a.kt)("p",null,"In this way, no one guardian is able to access a user\u2019s credentials but a minority of guardians losing their federation private keys will not prevent recovery of the user\u2019s private key.\xa0 "),(0,a.kt)("p",null,"Given the multi second party trust model that already exists, this approach does not introduce additional risk to users but does provide greater convenience and lower risk than storing it with a third party such as a cloud backup service provider."))}d.isMDXComponent=!0}}]);