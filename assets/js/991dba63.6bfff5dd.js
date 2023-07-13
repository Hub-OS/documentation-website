"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=r(7462),o=(r(7294),r(3905));const n={},i="Resources",l={unversionedId:"client/lua-api/resources",id:"client/lua-api/resources",title:"Resources",description:"Resources.load_texture(path)",source:"@site/docs/01-client/02-lua-api/01-resources.md",sourceDirName:"01-client/02-lua-api",slug:"/client/lua-api/resources",permalink:"/client/lua-api/resources",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/01-resources.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Packages",permalink:"/client/packages"},next:{title:"Encounter",permalink:"/client/lua-api/encounter"}},s={},u=[{value:"<code>Resources.load_texture(path)</code>",id:"resourcesload_texturepath",level:3},{value:"<code>Resources.load_audio(path)</code>",id:"resourcesload_audiopath",level:3},{value:"<code>Resources.play_audio(path, audio_priority?)</code>",id:"resourcesplay_audiopath-audio_priority",level:3},{value:"<code>Resources.play_music(path, loops?, start_ms?, end_ms?)</code>",id:"resourcesplay_musicpath-loops-start_ms-end_ms",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resources"},"Resources"),(0,o.kt)("h3",{id:"resourcesload_texturepath"},(0,o.kt)("inlineCode",{parentName:"h3"},"Resources.load_texture(path)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),": file path relative to script file")),(0,o.kt)("p",null,"Caches the texture and returns a normalized path for faster access."),(0,o.kt)("p",null,"Should be used in global scope for better performance."),(0,o.kt)("h3",{id:"resourcesload_audiopath"},(0,o.kt)("inlineCode",{parentName:"h3"},"Resources.load_audio(path)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),": file path relative to script file")),(0,o.kt)("p",null,"Caches the audio and returns a normalized path for faster access."),(0,o.kt)("p",null,"Should be used in global scope for better performance."),(0,o.kt)("h3",{id:"resourcesplay_audiopath-audio_priority"},(0,o.kt)("inlineCode",{parentName:"h3"},"Resources.play_audio(path, audio_priority?)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),": file path relative to script file, use values returned from ",(0,o.kt)("inlineCode",{parentName:"li"},"Resources.load_audio()")," for better performance.")),(0,o.kt)("p",null,"Plays a sound with the specified priority."),(0,o.kt)("h3",{id:"resourcesplay_musicpath-loops-start_ms-end_ms"},(0,o.kt)("inlineCode",{parentName:"h3"},"Resources.play_music(path, loops?, start_ms?, end_ms?)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),": file path relative to script file, use values returned from ",(0,o.kt)("inlineCode",{parentName:"li"},"Resources.load_audio()")," for better performance.")),(0,o.kt)("p",null,"Plays audio stored at ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," as music. Loops by default."))}d.isMDXComponent=!0}}]);