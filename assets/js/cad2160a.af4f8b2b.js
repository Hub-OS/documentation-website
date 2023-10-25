"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return n?a.createElement(m,u(u({ref:t},c),{},{components:n})):a.createElement(m,u({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,u[1]=o;for(var l=2;l<i;l++)u[l]=n[l];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={},u="Status",o={unversionedId:"client/lua-api/attack-api/status",id:"client/lua-api/attack-api/status",title:"Status",description:"See Status Package Documentation for creating new statuses.",source:"@site/docs/01-client/02-lua-api/04-attack-api/06-status.md",sourceDirName:"01-client/02-lua-api/04-attack-api",slug:"/client/lua-api/attack-api/status",permalink:"/client/lua-api/attack-api/status",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/04-attack-api/06-status.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Cards",permalink:"/client/lua-api/attack-api/cards"},next:{title:"TurnGauge",permalink:"/client/lua-api/attack-api/turn-gauge"}},s={},l=[{value:"<code>status:owner()</code>",id:"statusowner",level:3},{value:"<code>status:remaining_time()</code>",id:"statusremaining_time",level:3},{value:"<code>status:set_remaining_time(duration)</code>",id:"statusset_remaining_timeduration",level:3},{value:"<code>status.on_delete_func = function(self)</code>",id:"statuson_delete_func--functionself",level:3}],c={toc:l},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"status"},"Status"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/client/packages#statuses"},"Status Package Documentation")," for creating new statuses."),(0,r.kt)("h3",{id:"statusowner"},(0,r.kt)("inlineCode",{parentName:"h3"},"status:owner()")),(0,r.kt)("p",null,"Returns an ",(0,r.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/entity"},"Entity"),", represents the entity affected by the status."),(0,r.kt)("h3",{id:"statusremaining_time"},(0,r.kt)("inlineCode",{parentName:"h3"},"status:remaining_time()")),(0,r.kt)("p",null,"Returns a number representing the amount of battle frames until the status wears off."),(0,r.kt)("h3",{id:"statusset_remaining_timeduration"},(0,r.kt)("inlineCode",{parentName:"h3"},"status:set_remaining_time(duration)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"duration")," number, how many battle frames the effect should last.")),(0,r.kt)("h3",{id:"statuson_delete_func--functionself"},(0,r.kt)("inlineCode",{parentName:"h3"},"status.on_delete_func = function(self)")),(0,r.kt)("p",null,"Called when the status wears off, used for clean up."))}f.isMDXComponent=!0}}]);