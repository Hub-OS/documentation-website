"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1147],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3161:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},o="Minimal Setup",l={unversionedId:"server/minimal-setup",id:"server/minimal-setup",title:"Minimal Setup",description:"- areas folder",source:"@site/docs/02-server/01-minimal-setup.md",sourceDirName:"02-server",slug:"/server/minimal-setup",permalink:"/server/minimal-setup",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/02-server/01-minimal-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"serverSidebar",next:{title:"Areas",permalink:"/server/areas"}},s={},p=[],u={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"minimal-setup"},"Minimal Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"areas")," folder",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".tmx")," map files, ",(0,a.kt)("inlineCode",{parentName:"li"},"default.tmx")," required"),(0,a.kt)("li",{parentName:"ul"},"See ",(0,a.kt)("a",{parentName:"li",href:"/server/areas"},"Areas")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assets")," folder",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Tilesets, textures, audio, animations, packages"),(0,a.kt)("li",{parentName:"ul"},"See ",(0,a.kt)("a",{parentName:"li",href:"/server/assets"},"Assets")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scripts")," folder",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Lua files. Entry scripts are read from ",(0,a.kt)("inlineCode",{parentName:"li"},"scripts/*/main.lua")," for script projects, and ",(0,a.kt)("inlineCode",{parentName:"li"},"scripts/*.lua")," for single file scripts"),(0,a.kt)("li",{parentName:"ul"},"See ",(0,a.kt)("a",{parentName:"li",href:"/server/lua-api/lua-version-and-changes/"},"Lua API")))),(0,a.kt)("li",{parentName:"ul"},"Server executable")),(0,a.kt)("p",null,"Run the server through a command prompt or terminal and join on ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8765")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"-h")," to see more options and research port forwarding or server hosting if you want to share your server with others over the internet"))}c.isMDXComponent=!0}}]);