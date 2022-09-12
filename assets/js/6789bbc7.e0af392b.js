"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[7369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(n),m=a,p=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return n?i.createElement(p,r(r({ref:t},c),{},{components:n})):i.createElement(p,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},r="Why Fedimint",s={unversionedId:"GettingStarted/Why-Fedimint",id:"GettingStarted/Why-Fedimint",title:"Why Fedimint",description:"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.",source:"@site/docs/GettingStarted/01-Why-Fedimint.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/Why-Fedimint",permalink:"/docs/GettingStarted/Why-Fedimint",draft:!1,editUrl:"https://github.com/fedimint/wiki_fedimint/tree/main/docs/GettingStarted/01-Why-Fedimint.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Primer",permalink:"/docs/category/primer"},next:{title:"Who are the federations?",permalink:"/docs/GettingStarted/Who-are-the-fms"}},l={},d=[{value:"Community Custody",id:"community-custody",level:2},{value:"Financial Privacy",id:"financial-privacy",level:2},{value:"Scaling",id:"scaling",level:2}],c={toc:d};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"why-fedimint"},"Why Fedimint"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.")),(0,a.kt)("p",null,"Bitcoin is a powerful human rights technology that enables anybody in the world to ",(0,a.kt)("strong",{parentName:"p"},"be their own bank"),"."),(0,a.kt)("p",null,"Anyone, anywhere in the world, can run their own node, custody their own funds, and transact permissionlessly over the Bitcoin main chain or the Lightning Network."),(0,a.kt)("p",null,"We believe that creating simpler, private user experiences will be critical in promoting the human rights benefits of bitcoin."),(0,a.kt)("p",null,"Fedimint is built on three guiding pillars."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The spectrum and trade offs for Fedimint Custody",src:n(3396).Z,width:"673",height:"218"})),(0,a.kt)("h2",{id:"community-custody"},"Community Custody"),(0,a.kt)("p",null,"Ideally bitcoiners should run their own nodes and custody their own funds."),(0,a.kt)("p",null,"Many people find the technical challenges of running their own nodes and holding their own funds through recovery phrase management prohibitively difficult, and opt into trusting a third party custodian like exchanges or custodial wallets. "),(0,a.kt)("p",null,"These users sacrifice their privacy and security in favor of speed and convenience. This represents a systemic risk to the bitcoin network as large quantities of bitcoin are aggregated into single custodians."),(0,a.kt)("p",null,"Fedimint aims to address this by distributing custodianship across millions of communities, making it simple for them to bank themselves. These community focused 'banks' are known as Fedimint Federations.  "),(0,a.kt)("p",null,"We are building a solution which allows users to onboard to Bitcoin in a manner they find extremely convenient, without sacrificing privacy and security."),(0,a.kt)("p",null,"Fedimint allows bitcoiners to onboard new users, assisting them in their custody and payment model. Instead of referring a new bitcoiner to a third party custodian, you can onboard them yourself as part of a Federation."),(0,a.kt)("p",null,"Put another way it allows you to ",(0,a.kt)("strong",{parentName:"p"},"be your mum's / friends / villages bank"),". "),(0,a.kt)("p",null,'We call these close, trusted relationships "2nd party custodians". Fedimint federation guardians should be close friends and family members that you know personally, and can directly influence should they ever attempt to violate your trust.'),(0,a.kt)("p",null,"This provides bitcoiners with a third option between 3rd party centralized custodians and self custody as shown in the figure below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The spectrum and trade offs for Fedimint Custody",src:n(1666).Z,width:"1208",height:"545"})),(0,a.kt)("p",null,"Most importantly, Fedimint is interoperable with the Lightning Network. Fedimint users can at any time move their funds into their own self-custody lightning wallet."),(0,a.kt)("p",null,"This allows Fedimint users to remain apart of the wider lightning network, making it possible to pay merchants, other users, or even move between Fedimints."),(0,a.kt)("p",null,"As such, a user who previously used a 3rd party custodian for convenience can retain that convenience whilst improving their privacy and control of their finances."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"There is a ",(0,a.kt)("a",{parentName:"p",href:"../TradeOffs/NotYOurKeys"},"trade off "),' here as you are trusting a federation with your bitcoin. As such it will be important to "know your federation".')),(0,a.kt)("h2",{id:"financial-privacy"},"Financial Privacy"),(0,a.kt)("p",null,"Fedimint uses ",(0,a.kt)("a",{parentName:"p",href:"/docs/CommonTerms/Blind%20Signatures"},"Chaumain e-cash tokens and blinded signatures")," to achieve privacy for federation members. Federation guardians cannot correlate inputs and outputs of federation members' transactions, and cannot see the holdings of any individual federation member."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The spectrum and trade offs for Fedimint Custody",src:n(9152).Z,width:"391",height:"477"})),(0,a.kt)("p",null,"The mint guardians will be aware of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"total amount")," of bitcoin held in the community multi-sig wallet."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"total amount")," of eCash tokens outstanding for redemption.")),(0,a.kt)("p",null,"They will be entirely unaware of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"individual account balance")," of a user (i.e. how many tokens a user has)."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"identity of the user")," to whom a particular eCash token was issued to."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"identity of the user")," who redeems an eCash token."),(0,a.kt)("li",{parentName:"ul"},"Any ",(0,a.kt)("strong",{parentName:"li"},"transactions of the token")," which are made between issuance and redemption.")),(0,a.kt)("p",null,"This is among the most important benefits of Fedimint over 3rd party custodians. Today, if you or anyone you transact with uses money through a custodian like an exchange, that custodian can see who you are, who you're paying, where the funds came from, and sometimes where they go afterward. Fedimint guardians see none of this information."),(0,a.kt)("h2",{id:"scaling"},"Scaling"),(0,a.kt)("p",null,"The Bitcoin UTXO set, as it exists today, cannot scale to serve billions of users self custodying through personally owned UTXOs. Even using the Lightning Network as a scaling model, it would take years of full blocks to open a single lightning channel each for a billion people. We believe this is a fundamental limit to self custody, and that, at-scale, users will have to aggregate and share ownership of UTXOs either through shared cold storage or as shared lightning channels."),(0,a.kt)("p",null,"The current direction this scaling model has taken is that users opt into using centralized third party custodians to manage their funds or manage their lightning channels/balances."),(0,a.kt)("p",null,"Fedimint provides an alternative solution: federating custody of users' funds, but maintaining interoperability with the lightning network to allow global scale payments outside of an individual Fedimint."),(0,a.kt)("p",null,'Fedimint takes the economic density of an entire community and collapses it into a small number of "gateway" lightning nodes.'),(0,a.kt)("p",null,"A great way to understand this is to consider the different levels of detail in a road network connecting multiple towns."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Roadmap Analogy",src:n(1755).Z,width:"578",height:"294"})),(0,a.kt)("p",null,'The Fedimint map (right) clearly shows the many different roads that connect different users in a town. You could imagine this as many different direct interactions and commercial activity that remains in town and doesn\'t clog the "regional road network".'),(0,a.kt)("p",null,'The lightning map (left) represents this regional road network which simply connects to that "town" of activity to a broader network of similar "towns".'),(0,a.kt)("p",null,"If we tried to connect every address in town one, with town two then we would overwhelm the area with inefficient roads."),(0,a.kt)("p",null,"We believe this model will allow us to build a more flexible and scalable and efficient lightning network."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"There is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/renepickhardt/mpp-splitter/issues/12#issuecomment-1143772489"},"some recent research")," on how to scale lightning that suggests the possibility of widespread use of Fedimint Federations could increase the efficiency of the lightning network while also increasing the potential fees a Lightning Service Provider (LSP) could earn due to increased demand.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The goal would be a world of hundreds of thousands to millions of community banks running fedimint and inter-operating over the lightning network."))}u.isMDXComponent=!0},3396:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/fm-benefits.excalidraw-360e762deb7294ede075c130c4a6317f.png"},9152:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/fm-privacy-firewall.excalidraw-41de26674cc8396533cb612cddbd7686.png"},1755:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/fm-roadmap-analogy.excalidraw-fb2837303831bd2072e91680d2778b21.png"},1666:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/fm-spectrum-custody.excalidraw-4db14732495b99429517511026155dfa.png"}}]);