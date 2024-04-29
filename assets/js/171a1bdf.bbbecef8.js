"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7123],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=o,f=c["".concat(u,".").concat(h)]||c[h]||d[h]||i;return r?a.createElement(f,n(n({ref:t},s),{},{components:r})):a.createElement(f,n({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,n[1]=l;for(var p=2;p<i;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const i={},n="Resources",l={unversionedId:"client/lua-api/resource-api/resources",id:"client/lua-api/resource-api/resources",title:"Resources",description:"Resources.load_texture(path)",source:"@site/docs/01-client/02-lua-api/02-resource-api/01-resources.md",sourceDirName:"01-client/02-lua-api/02-resource-api",slug:"/client/lua-api/resource-api/resources",permalink:"/client/lua-api/resource-api/resources",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/02-resource-api/01-resources.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Artifact",permalink:"/client/lua-api/entity-api/artifact"},next:{title:"Animation",permalink:"/client/lua-api/resource-api/animation"}},u={},p=[{value:"<code>Resources.load_texture(path)</code>",id:"resourcesload_texturepath",level:3},{value:"<code>Resources.load_audio(path)</code>",id:"resourcesload_audiopath",level:3},{value:"<code>Resources.play_audio(path, audio_behavior?)</code>",id:"resourcesplay_audiopath-audio_behavior",level:3},{value:"<code>Resources.play_music(path, loops?)</code>",id:"resourcesplay_musicpath-loops",level:3},{value:"AudioBehavior",id:"audiobehavior",level:2},{value:"<code>AudioBehavior.Default</code>",id:"audiobehaviordefault",level:3},{value:"<code>AudioBehavior.NoOverlap</code>",id:"audiobehaviornooverlap",level:3}],s={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resources"},"Resources"),(0,o.kt)("h3",{id:"resourcesload_texturepath"},(0,o.kt)("inlineCode",{parentName:"h3"},"Resources.load_texture(path)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),": file path relative to script file")),(0,o.kt)("p",null,"Caches the texture and returns a normalized path for faster access."),(0,o.kt)("p",null,"Returns a string."),(0,o.kt)("p",null,"Should be used in global scope for better performance."),(0,o.kt)("h3",{id:"resourcesload_audiopath"},(0,o.kt)("inlineCode",{parentName:"h3"},"Resources.load_audio(path)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),": file path relative to script file")),(0,o.kt)("p",null,"Caches the audio and returns a normalized path for faster access."),(0,o.kt)("p",null,"Returns a string."),(0,o.kt)("p",null,"Should be used in global scope for better performance."),(0,o.kt)("h3",{id:"resourcesplay_audiopath-audio_behavior"},(0,o.kt)("inlineCode",{parentName:"h3"},"Resources.play_audio(path, audio_behavior?)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),": file path relative to script file, use values returned from ",(0,o.kt)("inlineCode",{parentName:"li"},"Resources.load_audio()")," for better performance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"audio_behavior"),": ",(0,o.kt)("a",{parentName:"li",href:"#audiobehavior"},"AudioBehavior"))),(0,o.kt)("p",null,"Plays a sound with the specified priority."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/player#playerplay_audiopath-audio_behavior"},"player:play_audio()")," for playing audio to a specific player."),(0,o.kt)("h3",{id:"resourcesplay_musicpath-loops"},(0,o.kt)("inlineCode",{parentName:"h3"},"Resources.play_music(path, loops?)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),": file path relative to script file, use values returned from ",(0,o.kt)("inlineCode",{parentName:"li"},"Resources.load_audio()")," for better performance.")),(0,o.kt)("p",null,"Plays audio stored at ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," as music. Loops by default."),(0,o.kt)("h2",{id:"audiobehavior"},"AudioBehavior"),(0,o.kt)("h3",{id:"audiobehaviordefault"},(0,o.kt)("inlineCode",{parentName:"h3"},"AudioBehavior.Default")),(0,o.kt)("p",null,"Audio will play regardless of other audio."),(0,o.kt)("h3",{id:"audiobehaviornooverlap"},(0,o.kt)("inlineCode",{parentName:"h3"},"AudioBehavior.NoOverlap")),(0,o.kt)("p",null,"Audio will not play if another instance of itself is playing with NoOverlap."))}d.isMDXComponent=!0}}]);