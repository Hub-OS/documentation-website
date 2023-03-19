"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[192],{3905:(e,t,o)=>{o.d(t,{Zo:()=>_,kt:()=>c});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},_=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,_=d(e,["components","mdxType","originalType","parentName"]),p=s(o),u=i,c=p["".concat(l,".").concat(u)]||p[u]||b[u]||a;return o?n.createElement(c,r(r({ref:t},_),{},{components:o})):n.createElement(c,r({ref:t},_))}));function c(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:i,r[1]=d;for(var s=2;s<a;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6015:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>b,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var n=o(7462),i=(o(7294),o(3905));const a={},r="Bots",d={unversionedId:"server/lua-api/bots",id:"server/lua-api/bots",title:"Bots",description:"Positions are in tile space. To get the center of a tile add 0.5",source:"@site/docs/02-server/04-lua-api/09-bots.md",sourceDirName:"02-server/04-lua-api",slug:"/server/lua-api/bots",permalink:"/documentation-website/docs/server/lua-api/bots",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"serverSidebar",previous:{title:"Player Data",permalink:"/documentation-website/docs/server/lua-api/player-data"},next:{title:"Assets",permalink:"/documentation-website/docs/server/lua-api/assets"}},l={},s=[{value:"<code>Net.list_bots(area_id)</code>",id:"netlist_botsarea_id",level:3},{value:"<code>Net.create_bot(bot_id, { name?, area_id?, warp_in?, texture_path?, animation_path?, animation?, x?, y?, z?, direction?, solid? })</code>",id:"netcreate_botbot_id--name-area_id-warp_in-texture_path-animation_path-animation-x-y-z-direction-solid-",level:3},{value:"<code>Net.create_bot({ name?, area_id?, warp_in?, texture_path?, animation_path?, animation?, x?, y?, z?, direction?, solid? })</code>",id:"netcreate_bot-name-area_id-warp_in-texture_path-animation_path-animation-x-y-z-direction-solid-",level:3},{value:"<code>Net.is_bot(bot_id)</code>",id:"netis_botbot_id",level:3},{value:"<code>Net.remove_bot(bot_id, warp_out?)</code>",id:"netremove_botbot_id-warp_out",level:3},{value:"<code>Net.get_bot_area(bot_id)</code>",id:"netget_bot_areabot_id",level:3},{value:"<code>Net.get_bot_name(bot_id)</code>",id:"netget_bot_namebot_id",level:3},{value:"<code>Net.set_bot_name(bot_id, name)</code>",id:"netset_bot_namebot_id-name",level:3},{value:"<code>Net.get_bot_direction(bot_id)</code>",id:"netget_bot_directionbot_id",level:3},{value:"<code>Net.set_bot_direction(bot_id, direction)</code>",id:"netset_bot_directionbot_id-direction",level:3},{value:"<code>Net.get_bot_position(bot_id)</code>",id:"netget_bot_positionbot_id",level:3},{value:"<code>Net.move_bot(bot_id, x, y, z)</code>",id:"netmove_botbot_id-x-y-z",level:3},{value:"<code>Net.transfer_bot(bot_id, area_id, warp_in?, x?, y?, z?)</code>",id:"nettransfer_botbot_id-area_id-warp_in-x-y-z",level:3},{value:"<code>Net.set_bot_solid(bot_id, solid)</code>",id:"netset_bot_solidbot_id-solid",level:3},{value:"<code>Net.set_bot_avatar(bot_id, texture_path, animation_path)</code>",id:"netset_bot_avatarbot_id-texture_path-animation_path",level:3},{value:"<code>Net.set_bot_emote(bot_id, emote_id, use_custom_emotes?)</code>",id:"netset_bot_emotebot_id-emote_id-use_custom_emotes",level:3},{value:"<code>Net.animate_bot(bot_id, state_name, loop?)</code>",id:"netanimate_botbot_id-state_name-loop",level:3},{value:"<code>Net.animate_bot_properties(bot_id, keyframes)</code>",id:"netanimate_bot_propertiesbot_id-keyframes",level:3}],_={toc:s},p="wrapper";function b(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,n.Z)({},_,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bots"},"Bots"),(0,i.kt)("p",null,"Positions are in tile space. To get the center of a tile add ",(0,i.kt)("inlineCode",{parentName:"p"},"0.5")),(0,i.kt)("h3",{id:"netlist_botsarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.list_bots(area_id)")),(0,i.kt)("p",null,"Returns a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"bot_id"),"s."),(0,i.kt)("h3",{id:"netcreate_botbot_id--name-area_id-warp_in-texture_path-animation_path-animation-x-y-z-direction-solid-"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.create_bot(bot_id, { name?, area_id?, warp_in?, texture_path?, animation_path?, animation?, x?, y?, z?, direction?, solid? })")),(0,i.kt)("p",null,"Creates a bot using the id."),(0,i.kt)("h3",{id:"netcreate_bot-name-area_id-warp_in-texture_path-animation_path-animation-x-y-z-direction-solid-"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.create_bot({ name?, area_id?, warp_in?, texture_path?, animation_path?, animation?, x?, y?, z?, direction?, solid? })")),(0,i.kt)("p",null,"Creates a bot."),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"bot_id")),(0,i.kt)("h3",{id:"netis_botbot_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.is_bot(bot_id)")),(0,i.kt)("p",null,"Returns true if the id matches an existing bot."),(0,i.kt)("h3",{id:"netremove_botbot_id-warp_out"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.remove_bot(bot_id, warp_out?)")),(0,i.kt)("p",null,"Deletes the bot and notifies clients in the same area."),(0,i.kt)("h3",{id:"netget_bot_areabot_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_bot_area(bot_id)")),(0,i.kt)("p",null,"Returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"area_id")," for the area the bot is currently in."),(0,i.kt)("h3",{id:"netget_bot_namebot_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_bot_name(bot_id)")),(0,i.kt)("p",null,"Returns the name shown to players for the bot."),(0,i.kt)("h3",{id:"netset_bot_namebot_id-name"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_bot_name(bot_id, name)")),(0,i.kt)("p",null,"Sets the name shown to players for the bot."),(0,i.kt)("h3",{id:"netget_bot_directionbot_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_bot_direction(bot_id)")),(0,i.kt)("p",null,"Gets the facing direction of the bot."),(0,i.kt)("h3",{id:"netset_bot_directionbot_id-direction"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_bot_direction(bot_id, direction)")),(0,i.kt)("p",null,"Sets the facing direction of the bot."),(0,i.kt)("h3",{id:"netget_bot_positionbot_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_bot_position(bot_id)")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"{ x, y, z }")),(0,i.kt)("h3",{id:"netmove_botbot_id-x-y-z"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.move_bot(bot_id, x, y, z)")),(0,i.kt)("p",null,"Sets the position of the bot, will play a warp animation on the clients if the bot is moving too fast."),(0,i.kt)("h3",{id:"nettransfer_botbot_id-area_id-warp_in-x-y-z"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.transfer_bot(bot_id, area_id, warp_in?, x?, y?, z?)")),(0,i.kt)("p",null,"Sets the area and position of the bot."),(0,i.kt)("h3",{id:"netset_bot_solidbot_id-solid"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_bot_solid(bot_id, solid)")),(0,i.kt)("p",null,"Not implemented."),(0,i.kt)("h3",{id:"netset_bot_avatarbot_id-texture_path-animation_path"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_bot_avatar(bot_id, texture_path, animation_path)")),(0,i.kt)("p",null,"Sets texture and animation files used to display the bot."),(0,i.kt)("h3",{id:"netset_bot_emotebot_id-emote_id-use_custom_emotes"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_bot_emote(bot_id, emote_id, use_custom_emotes?)")),(0,i.kt)("p",null,"Displays an emote above the bot. ",(0,i.kt)("inlineCode",{parentName:"p"},"emote_id")," is a number."),(0,i.kt)("p",null,"Subject to change."),(0,i.kt)("h3",{id:"netanimate_botbot_id-state_name-loop"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.animate_bot(bot_id, state_name, loop?)")),(0,i.kt)("p",null,"Sets the animation state for the bot, the default states will be used if the bot moves."),(0,i.kt)("h3",{id:"netanimate_bot_propertiesbot_id-keyframes"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.animate_bot_properties(bot_id, keyframes)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'keyframes: {\n  properties: {\n    property: "Animation" | "Animation Speed" | "X" | "Y" | "Z" | "ScaleX" | "ScaleY" | "Rotation" | "Direction" | "Sound Effect" | "Sound Effect Loop",\n    ease?: "Linear" | "In" | "Out" | "InOut" | "Floor",\n    value: number | string\n  }[],\n  duration: number\n}[]\n')),(0,i.kt)("p",null,"Interpolated animation for fancy effects."),(0,i.kt)("p",null,'If a keyframe at duration 0 does not exist for a property, the client will default to initial values or a blank value. Ex: X/Y/Z will use the bot\'s current position, and "Sound Effect" would use blank / play no sounds.'),(0,i.kt)("p",null,"The final state of the animation will stick to the bot, excluding sounds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local position = Net.get_bot_position(bot_id)\n\n-- a stretched jump. if the bot disappears, you may need to add a new tile layer\nlocal keyframes = {\n  {\n    properties = {\n      { property = "Z",      value = position.z + 1, ease = "Out" },\n      { property = "ScaleY", value = 1.5,            ease = "Out" }\n    },\n    duration = 0.5\n  },\n  {\n    properties = {\n      { property = "Z",      value = position.z, ease = "In" },\n      { property = "ScaleY", value = 1,          ease = "In" }\n    },\n    duration = 0.5\n  }\n}\n\nNet.animate_bot_properties(bot_id, keyframes)\n')),(0,i.kt)("p",null,"If you need something to happen when the animation ends, you should use ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/lua-api/async#Async.sleep(seconds)"},"Async.sleep()")))}b.isMDXComponent=!0}}]);