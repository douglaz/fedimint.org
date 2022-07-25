"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[9192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={},o="Blind Signatures",s={unversionedId:"CommonTerms/Blind Signatures",id:"CommonTerms/Blind Signatures",title:"Blind Signatures",description:"This Guide is being actively worked on!",source:"@site/docs/CommonTerms/Blind Signatures.md",sourceDirName:"CommonTerms",slug:"/CommonTerms/Blind Signatures",permalink:"/wiki_fedimint/docs/CommonTerms/Blind Signatures",draft:!1,editUrl:"https://github.com/humansinstitute/wiki_fedimint/tree/main/packages/create-docusaurus/templates/shared/docs/CommonTerms/Blind Signatures.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Definitions & Terms",permalink:"/wiki_fedimint/docs/category/definitions--terms"},next:{title:"Chaumian eCash",permalink:"/wiki_fedimint/docs/CommonTerms/Chaumian eCash"}},l={},c=[],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blind-signatures"},"Blind Signatures"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This Guide is being actively worked on!")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Community Custody on a spectrum",src:n(7438).Z,width:"1154",height:"288"})),(0,r.kt)("p",null,"The canonical explanation of blind signatures was given by David Chaum in terms of imprinting a signature on a message using carbon copy paper. "),(0,r.kt)("p",null,"As highlighted in the figure above imagine obtaining a signature on a document as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a document and seal the document into an envelope along with carbon copy paper."),(0,r.kt)("li",{parentName:"ol"},"Pass the envelope to the signer who can sign the outside of the envelope, which in turn creates an internal signature on the document. "),(0,r.kt)("li",{parentName:"ol"},"You have now obtained a signature on your document without revealing the contents of the document."),(0,r.kt)("li",{parentName:"ol"},"If you were to reveal your document at a later date, the signer could confirm that they did indeed sign that document.")),(0,r.kt)("p",null,'This is concept is utilized inside eCash to allow an eCash mint to issue "IOUs" that it can confirm are valid, whilst retaining privacy. '),(0,r.kt)("p",null,"In essence the mint has different signatures for different values of satoshis that are deposited. "),(0,r.kt)("p",null,'As such when a deposit (lets say 10,000 satoshis) is made I write a document saying "Here\'s a deposit to Fedimint A with a random serial number" I pop it in an envelope and ask Fedimint A to sign it with their 10,000 satoshi signature. '),(0,r.kt)("p",null,"When it comes time to spend the sats, I take the note out of the envelope and provide that 10,000 satoshi note to the merchant in much the same way I would hand over a banknote. "),(0,r.kt)("p",null,"The merchant, wants to make sure the note is real so he contacts the Fedimint to check. "),(0,r.kt)("p",null,"The Fedimint has never seen this document, it can confirm that it does indeed include a valid signature for redemption of 10,000 satoshis."),(0,r.kt)("p",null,"At this point both myself and the merchant have a copy of the signed note which has a claim on the satoshis."),(0,r.kt)("p",null,"So instead of simply accepting the signed note the merchant goes through his own envelope note trick and asks the Fedimint to destroy this claim for 10k sats and replace it with this new claim for 10k sats :)"))}m.isMDXComponent=!0},7438:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/blind-signing-12c89c6dece70a0a674fc3883d9ed1ef.png"}}]);