"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=p(n),m=i,c=g["".concat(u,".").concat(m)]||g[m]||s[m]||r;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[g]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},l="Engine",o={unversionedId:"client/lua-api/engine",id:"client/lua-api/engine",title:"Engine",description:"Engine.load_texture(path)",source:"@site/docs/01-client/lua-api/01-engine.md",sourceDirName:"01-client/lua-api",slug:"/client/lua-api/engine",permalink:"/documentation-website/docs/client/lua-api/engine",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"clientSidebar",next:{title:"Field",permalink:"/documentation-website/docs/client/lua-api/field"}},u={},p=[{value:"<code>Engine.load_texture(path)</code>",id:"engineload_texturepath",level:3},{value:"<code>Engine.load_audio(path)</code>",id:"engineload_audiopath",level:3},{value:"<code>Engine.play_audio(path, audio_priority?)</code>",id:"engineplay_audiopath-audio_priority",level:3},{value:"<code>Engine.stream_music(path, loops?, start_ms?, end_ms?)</code>",id:"enginestream_musicpath-loops-start_ms-end_ms",level:3},{value:"<code>Engine.get_turn_gauge_value()</code>",id:"engineget_turn_gauge_value",level:3},{value:"<code>Engine.get_turn_gauge_time()</code>",id:"engineget_turn_gauge_time",level:3},{value:"<code>Engine.get_turn_gauge_max_time()</code>",id:"engineget_turn_gauge_max_time",level:3},{value:"<code>Engine.set_turn_gauge_time(time)</code>",id:"engineset_turn_gauge_timetime",level:3},{value:"<code>Engine.set_turn_gauge_max_time(time)</code>",id:"engineset_turn_gauge_max_timetime",level:3},{value:"<code>Engine.reset_turn_gauge_max_time()</code>",id:"enginereset_turn_gauge_max_time",level:3}],d={toc:p},g="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"engine"},"Engine"),(0,i.kt)("h3",{id:"engineload_texturepath"},(0,i.kt)("inlineCode",{parentName:"h3"},"Engine.load_texture(path)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),": file path relative to script file")),(0,i.kt)("p",null,"Caches the texture and returns a normalized path for faster access."),(0,i.kt)("p",null,"Should be used in global scope for better performance."),(0,i.kt)("h3",{id:"engineload_audiopath"},(0,i.kt)("inlineCode",{parentName:"h3"},"Engine.load_audio(path)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),": file path relative to script file")),(0,i.kt)("p",null,"Caches the audio and returns a normalized path for faster access."),(0,i.kt)("p",null,"Should be used in global scope for better performance."),(0,i.kt)("h3",{id:"engineplay_audiopath-audio_priority"},(0,i.kt)("inlineCode",{parentName:"h3"},"Engine.play_audio(path, audio_priority?)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),": file path relative to script file, use values returned from ",(0,i.kt)("inlineCode",{parentName:"li"},"Engine.load_audio()")," for better performance.")),(0,i.kt)("p",null,"Plays a sound with the specified priority."),(0,i.kt)("h3",{id:"enginestream_musicpath-loops-start_ms-end_ms"},(0,i.kt)("inlineCode",{parentName:"h3"},"Engine.stream_music(path, loops?, start_ms?, end_ms?)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),": file path relative to script file, use values returned from ",(0,i.kt)("inlineCode",{parentName:"li"},"Engine.load_audio()")," for better performance.")),(0,i.kt)("p",null,"Plays audio stored at ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," as music. Loops by default."),(0,i.kt)("h3",{id:"engineget_turn_gauge_value"},(0,i.kt)("inlineCode",{parentName:"h3"},"Engine.get_turn_gauge_value()")),(0,i.kt)("p",null,"Returns the turn gauge's progress as a value between 0 and 1."),(0,i.kt)("h3",{id:"engineget_turn_gauge_time"},(0,i.kt)("inlineCode",{parentName:"h3"},"Engine.get_turn_gauge_time()")),(0,i.kt)("p",null,"Returns the turn gauge's progress in elapsed frames."),(0,i.kt)("h3",{id:"engineget_turn_gauge_max_time"},(0,i.kt)("inlineCode",{parentName:"h3"},"Engine.get_turn_gauge_max_time()")),(0,i.kt)("p",null,"Returns the total elapsed frames required to end a turn."),(0,i.kt)("h3",{id:"engineset_turn_gauge_timetime"},(0,i.kt)("inlineCode",{parentName:"h3"},"Engine.set_turn_gauge_time(time)")),(0,i.kt)("p",null,"Sets the turn gauge's progress in elapsed frames."),(0,i.kt)("h3",{id:"engineset_turn_gauge_max_timetime"},(0,i.kt)("inlineCode",{parentName:"h3"},"Engine.set_turn_gauge_max_time(time)")),(0,i.kt)("p",null,"Sets the total elapsed frames required to end a turn."),(0,i.kt)("h3",{id:"enginereset_turn_gauge_max_time"},(0,i.kt)("inlineCode",{parentName:"h3"},"Engine.reset_turn_gauge_max_time()")),(0,i.kt)("p",null,"Sets the total elapsed frames required to end a turn to the default (512)."))}s.isMDXComponent=!0}}]);