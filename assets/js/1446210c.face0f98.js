"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),s=i,y=m["".concat(p,".").concat(s)]||m[s]||f[s]||r;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={},l="Artifact",o={unversionedId:"client/lua-api/entity-api/artifact",id:"client/lua-api/entity-api/artifact",title:"Artifact",description:"Instance of Entity.",source:"@site/docs/01-client/02-lua-api/01-entity-api/07-artifact.md",sourceDirName:"01-client/02-lua-api/01-entity-api",slug:"/client/lua-api/entity-api/artifact",permalink:"/client/lua-api/entity-api/artifact",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/01-entity-api/07-artifact.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Obstacle",permalink:"/client/lua-api/entity-api/obstacle"},next:{title:"Resources",permalink:"/client/lua-api/resource-api/resources"}},p={},c=[{value:"<code>Artifact.new(team?)</code>",id:"artifactnewteam",level:3},{value:"<code>Artifact.from(entity)</code>",id:"artifactfromentity",level:3},{value:"<code>Explosion.new(team?)</code>",id:"explosionnewteam",level:3},{value:"<code>Poof.new(team?)</code>",id:"poofnewteam",level:3},{value:"<code>Alert.poof(team?)</code>",id:"alertpoofteam",level:3}],u={toc:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"artifact"},"Artifact"),(0,i.kt)("p",null,"Instance of ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/entity"},"Entity"),"."),(0,i.kt)("h3",{id:"artifactnewteam"},(0,i.kt)("inlineCode",{parentName:"h3"},"Artifact.new(team?)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"team"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity-api/entity#entityset_teamteam"},"Team"))),(0,i.kt)("p",null,"Returns a new ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/entity"},"Entity")," instance."),(0,i.kt)("h3",{id:"artifactfromentity"},(0,i.kt)("inlineCode",{parentName:"h3"},"Artifact.from(entity)")),(0,i.kt)("p",null,"Returns the entity passed in if the entity is an artifact, otherwise returns ",(0,i.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,i.kt)("h3",{id:"explosionnewteam"},(0,i.kt)("inlineCode",{parentName:"h3"},"Explosion.new(team?)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"team"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity-api/entity#entityset_teamteam"},"Team"))),(0,i.kt)("p",null,"Returns a new ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/entity"},"Entity")," instance."),(0,i.kt)("p",null,"The entity will play an animation and sound, automatically deletes on completion."),(0,i.kt)("h3",{id:"poofnewteam"},(0,i.kt)("inlineCode",{parentName:"h3"},"Poof.new(team?)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"team"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity-api/entity#entityset_teamteam"},"Team"))),(0,i.kt)("p",null,"Returns a new ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/entity"},"Entity")," instance."),(0,i.kt)("p",null,"The entity will play an animation, automatically deletes on completion."),(0,i.kt)("h3",{id:"alertpoofteam"},(0,i.kt)("inlineCode",{parentName:"h3"},"Alert.poof(team?)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"team"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity-api/entity#entityset_teamteam"},"Team"))),(0,i.kt)("p",null,"Returns a new ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/entity"},"Entity")," instance."),(0,i.kt)("p",null,"The entity will play an animation, automatically deletes on completion."))}f.isMDXComponent=!0}}]);