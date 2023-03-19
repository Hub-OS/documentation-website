"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[482],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5959:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={},o="Lua Version And Changes",l={unversionedId:"server/lua-api/lua-version-and-changes",id:"server/lua-api/lua-version-and-changes",title:"Lua Version And Changes",description:"The Lua interpreter shipped with the server is version 5.4. Reference//www.lua.org/manual/5.4/#index",source:"@site/docs/02-server/04-lua-api/01-lua-version-and-changes.md",sourceDirName:"02-server/04-lua-api",slug:"/server/lua-api/lua-version-and-changes",permalink:"/docs/server/lua-api/lua-version-and-changes",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"serverSidebar",previous:{title:"Assets",permalink:"/docs/server/assets"},next:{title:"Event Emitters",permalink:"/docs/server/lua-api/event-emitters"}},s={},u=[],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lua-version-and-changes"},"Lua Version And Changes"),(0,a.kt)("p",null,"The Lua interpreter shipped with the server is version 5.4. Reference: ",(0,a.kt)("a",{parentName:"p",href:"https://www.lua.org/manual/5.4/#index"},"https://www.lua.org/manual/5.4/#index")),(0,a.kt)("p",null,"Small changes to the built-in Lua functions were made for improved development experience:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tostring")," will format tables."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"print"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"warn"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"printerr")," can display tables."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"warn")," will output yellow text to stdout."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"printerr")," will output red text to stdout.")),(0,a.kt)("p",null,"Note: If you want to use io or interact with other programs see ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/lua-api/async"},"Async"),". While Lua built-ins can be used they are blocking and can cause server hiccups."))}d.isMDXComponent=!0}}]);