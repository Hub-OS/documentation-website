"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,m=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,k=c["".concat(m,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r[c]="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={},l="Animation",r={unversionedId:"client/lua-api/animation",id:"client/lua-api/animation",title:"Animation",description:"Engine.Animation.new(path?)",source:"@site/docs/01-client/01-lua-api/06-animation.md",sourceDirName:"01-client/01-lua-api",slug:"/client/lua-api/animation",permalink:"/documentation-website/docs/client/lua-api/animation",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Direction",permalink:"/documentation-website/docs/client/lua-api/direction"},next:{title:"Sprite",permalink:"/documentation-website/docs/client/lua-api/sprite"}},m={},s=[{value:"<code>Engine.Animation.new(path?)</code>",id:"engineanimationnewpath",level:3},{value:"<code>animation:copy_from(animation)</code>",id:"animationcopy_fromanimation",level:3},{value:"<code>animation:apply(sprite)</code>",id:"animationapplysprite",level:3},{value:"<code>animation:load(path)</code>",id:"animationloadpath",level:3},{value:"<code>animation:update()</code>",id:"animationupdate",level:3},{value:"<code>animation:pause()</code>",id:"animationpause",level:3},{value:"<code>animation:resume()</code>",id:"animationresume",level:3},{value:"<code>animation:has_state(state)</code>",id:"animationhas_statestate",level:3},{value:"<code>animation:get_state()</code>",id:"animationget_state",level:3},{value:"<code>animation:set_state(state)</code>",id:"animationset_statestate",level:3},{value:"<code>animation:derive_state(state, frame_data)</code>",id:"animationderive_statestate-frame_data",level:3},{value:"<code>animation:has_point(name)</code>",id:"animationhas_pointname",level:3},{value:"<code>animation:get_point(name)</code>",id:"animationget_pointname",level:3},{value:"<code>animation:set_playback(playback)</code>",id:"animationset_playbackplayback",level:3},{value:"<code>animation:on_complete(function())</code>",id:"animationon_completefunction",level:3},{value:"<code>animation:on_interrupt(function())</code>",id:"animationon_interruptfunction",level:3},{value:"<code>animation:on_frame(frame_index, function(), do_once?)</code>",id:"animationon_frameframe_index-function-do_once",level:3}],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"animation"},"Animation"),(0,i.kt)("h3",{id:"engineanimationnewpath"},(0,i.kt)("inlineCode",{parentName:"h3"},"Engine.Animation.new(path?)")),(0,i.kt)("p",null,"Constructs a new Animation instance."),(0,i.kt)("h3",{id:"animationcopy_fromanimation"},(0,i.kt)("inlineCode",{parentName:"h3"},"animation:copy_from(animation)")),(0,i.kt)("p",null,"Copies states and settings from the passed animation. Progress is reset."),(0,i.kt)("p",null,"Internally calls ",(0,i.kt)("inlineCode",{parentName:"p"},"animation:apply()")," unless the animation was created through ",(0,i.kt)("inlineCode",{parentName:"p"},"Engine.Animation.new()")),(0,i.kt)("p",null,"This function will call and clear interrupt callbacks."),(0,i.kt)("h3",{id:"animationapplysprite"},(0,i.kt)("inlineCode",{parentName:"h3"},"animation:apply(sprite)")),(0,i.kt)("p",null,"Applies the current animation state to the sprite, updating the origin and bounds of the sprite."),(0,i.kt)("h3",{id:"animationloadpath"},(0,i.kt)("inlineCode",{parentName:"h3"},"animation:load(path)")),(0,i.kt)("p",null,"Loads new states, clears the old states."),(0,i.kt)("p",null,"Will attempt to retain settings and progress if the new animation has the same state as the active state."),(0,i.kt)("p",null,"If the animation has not completed and retaining state fails, this function will call and clear interrupt callbacks."),(0,i.kt)("h3",{id:"animationupdate"},(0,i.kt)("inlineCode",{parentName:"h3"},"animation:update()")),(0,i.kt)("p",null,"Advances animation progress by 1f or ~0.1666s. Ignored if the animation is paused."),(0,i.kt)("p",null,"Internally calls ",(0,i.kt)("inlineCode",{parentName:"p"},"animation:apply()")," unless the animation was created through ",(0,i.kt)("inlineCode",{parentName:"p"},"Engine.Animation.new()")),(0,i.kt)("p",null,"Automatically called unless the animation was created through ",(0,i.kt)("inlineCode",{parentName:"p"},"Engine.Animation.new()")),(0,i.kt)("h3",{id:"animationpause"},(0,i.kt)("inlineCode",{parentName:"h3"},"animation:pause()")),(0,i.kt)("p",null,"Causes ",(0,i.kt)("inlineCode",{parentName:"p"},"animation:update()")," calls (including automatic calls) to be ignored."),(0,i.kt)("h3",{id:"animationresume"},(0,i.kt)("inlineCode",{parentName:"h3"},"animation:resume()")),(0,i.kt)("p",null,"Unpauses the animation."),(0,i.kt)("h3",{id:"animationhas_statestate"},(0,i.kt)("inlineCode",{parentName:"h3"},"animation:has_state(state)")),(0,i.kt)("p",null,"Returns true if the state exists."),(0,i.kt)("h3",{id:"animationget_state"},(0,i.kt)("inlineCode",{parentName:"h3"},"animation:get_state()")),(0,i.kt)("p",null,"Returns the name of the active state."),(0,i.kt)("h3",{id:"animationset_statestate"},(0,i.kt)("inlineCode",{parentName:"h3"},"animation:set_state(state)")),(0,i.kt)("p",null,"Changes the active state, resets animation progress and settings."),(0,i.kt)("p",null,"This function will call and clear interrupt callbacks."),(0,i.kt)("p",null,"Internally calls ",(0,i.kt)("inlineCode",{parentName:"p"},"animation:apply()")," unless the animation was created through ",(0,i.kt)("inlineCode",{parentName:"p"},"Engine.Animation.new()")),(0,i.kt)("h3",{id:"animationderive_statestate-frame_data"},(0,i.kt)("inlineCode",{parentName:"h3"},"animation:derive_state(state, frame_data)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"frame_data")," a list of frame index and duration pairs.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Frame index starts at 1"),(0,i.kt)("li",{parentName:"ul"},"Duration is in game frames (60 per second).")))),(0,i.kt)("p",null,"Returns a state name for the derived state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- modified example from the built-in buster.lua file\n\nlocal frame_data = { { 1, 1 }, { 2, 2 }, { 3, 2 }, { 1, 1 } }\n\naction:override_animation_frames(frame_data)\n\n-- setup buster attachment\nlocal buster_attachment = action:add_attachment("BUSTER")\n\nlocal buster_sprite = buster_attachment:sprite()\nbuster_sprite:set_texture(user:get_texture())\nbuster_sprite:set_layer(-2)\nbuster_sprite:use_root_shader()\n\nlocal buster_animation = buster_attachment:get_animation()\nbuster_animation:copy_from(user:get_animation())\n\n-- relevant\nlocal derived_state = buster_animation:derive_state("BUSTER", frame_data)\nbuster_animation:set_state(derived_state)\n')),(0,i.kt)("h3",{id:"animationhas_pointname"},(0,i.kt)("inlineCode",{parentName:"h3"},"animation:has_point(name)")),(0,i.kt)("p",null,"Returns true if the current animation frame has a point with this name."),(0,i.kt)("h3",{id:"animationget_pointname"},(0,i.kt)("inlineCode",{parentName:"h3"},"animation:get_point(name)")),(0,i.kt)("p",null,"Returns a table with ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," keys."),(0,i.kt)("h3",{id:"animationset_playbackplayback"},(0,i.kt)("inlineCode",{parentName:"h3"},"animation:set_playback(playback)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"playback"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Playback.Once")," stops when the animation is completed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Playback.Loop")," restarts the animation when completed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Playback.Bounce")," when the animation completes playing forward it will play again reversed and cycle."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Playback.Reverse")," same as ",(0,i.kt)("inlineCode",{parentName:"li"},"Playback.Once")," but reversed.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Currently does not start the animation on the last frame.")))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'animation:set_state("example")\nanimation:set_playback(Playback.Loop)\n')),(0,i.kt)("h3",{id:"animationon_completefunction"},(0,i.kt)("inlineCode",{parentName:"h3"},"animation:on_complete(function())")),(0,i.kt)("p",null,'Adds a function to be called when the animation "completes".'),(0,i.kt)("p",null,"Completion condition differs depending on playback:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Playback.Once")," when the last frame completes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Playback.Loop")," when the last frame completes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Playback.Bounce")," when the first frame completes when reversed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Playback.Reverse")," when the first frame completes.")),(0,i.kt)("h3",{id:"animationon_interruptfunction"},(0,i.kt)("inlineCode",{parentName:"h3"},"animation:on_interrupt(function())")),(0,i.kt)("p",null,"Adds a function to be called when the state changes."),(0,i.kt)("h3",{id:"animationon_frameframe_index-function-do_once"},(0,i.kt)("inlineCode",{parentName:"h3"},"animation:on_frame(frame_index, function(), do_once?)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"frame_index")," starts at 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"do_once")," when true, the callback is deleted.")),(0,i.kt)("p",null,"Calls the callback when the frame changes during an update. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_index")," is 1 and the state was just set, it will be called next update."))}d.isMDXComponent=!0}}]);