"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[107],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9612:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={},s="Assets",l={unversionedId:"server/assets",id:"server/assets",title:"Assets",description:"Types of assets:",source:"@site/docs/02-server/03-assets.md",sourceDirName:"02-server",slug:"/server/assets",permalink:"/server/assets",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/02-server/03-assets.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"serverSidebar",previous:{title:"Areas",permalink:"/server/areas"},next:{title:"Lua Version And Changes",permalink:"/server/lua-api/lua-version-and-changes"}},o={},p=[],u={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"assets"},"Assets"),(0,a.kt)("p",null,"Types of assets:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Texture (.png|.bmp)"),(0,a.kt)("li",{parentName:"ul"},"Audio (.ogg|.wav|.mid|.midi|.mp3)"),(0,a.kt)("li",{parentName:"ul"},"Mod Packages (.zip)"),(0,a.kt)("li",{parentName:"ul"},"Text")),(0,a.kt)("p",null,"Paths"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/server"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Pseudo folder that represents files in memory"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/assets"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Generated at start from files in ",(0,a.kt)("inlineCode",{parentName:"li"},"./assets"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"./assets/prog.png")," can be referenced with ",(0,a.kt)("inlineCode",{parentName:"li"},"/server/assets/prog.png")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/players"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Stores avatar files sent from players (5 MiB limit)"),(0,a.kt)("li",{parentName:"ul"},"Textures are stored as ",(0,a.kt)("inlineCode",{parentName:"li"},"[id].texture"),", and animations are stored as ",(0,a.kt)("inlineCode",{parentName:"li"},"[id].animation")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/areas"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Generated from areas and updated every tick."),(0,a.kt)("li",{parentName:"ul"},"Stored as ",(0,a.kt)("inlineCode",{parentName:"li"},"[area id].txt")))))),(0,a.kt)("li",{parentName:"ul"},"Paths not starting with ",(0,a.kt)("inlineCode",{parentName:"li"},"/server")," are treated as paths to client files. Files of interest are available in ",(0,a.kt)("inlineCode",{parentName:"li"},"assets/")),(0,a.kt)("li",{parentName:"ul"},"PATHS ARE CASE SENSITIVE OUT OF WINDOWS, also avoid ",(0,a.kt)("inlineCode",{parentName:"li"},"\\")," as that's Windows specific")))}c.isMDXComponent=!0}}]);