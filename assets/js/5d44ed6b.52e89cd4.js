"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1987],{2018:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var i=o(4848),n=o(8453);const d={},s="Bots",a={id:"server/lua-api/bots",title:"Bots",description:"Positions are in tile space. To get the center of a tile add 0.5",source:"@site/docs/02-server/04-lua-api/09-bots.md",sourceDirName:"02-server/04-lua-api",slug:"/server/lua-api/bots",permalink:"/server/lua-api/bots",draft:!1,unlisted:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/02-server/04-lua-api/09-bots.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"serverSidebar",previous:{title:"Player Data",permalink:"/server/lua-api/player-data"},next:{title:"Actor Property Animations",permalink:"/server/lua-api/actor-property-animations"}},r={},l=[{value:"<code>Net.list_bots(area_id)</code>",id:"netlist_botsarea_id",level:3},{value:"<code>Net.create_bot(bot_options)</code>",id:"netcreate_botbot_options",level:3},{value:"<code>Net.is_bot(bot_id)</code>",id:"netis_botbot_id",level:3},{value:"<code>Net.remove_bot(bot_id, warp_out?)</code>",id:"netremove_botbot_id-warp_out",level:3},{value:"<code>Net.get_bot_area(bot_id)</code>",id:"netget_bot_areabot_id",level:3},{value:"<code>Net.get_bot_name(bot_id)</code>",id:"netget_bot_namebot_id",level:3},{value:"<code>Net.set_bot_name(bot_id, name)</code>",id:"netset_bot_namebot_id-name",level:3},{value:"<code>Net.get_bot_direction(bot_id)</code>",id:"netget_bot_directionbot_id",level:3},{value:"<code>Net.set_bot_direction(bot_id, direction)</code>",id:"netset_bot_directionbot_id-direction",level:3},{value:"<code>Net.get_bot_position(bot_id)</code>",id:"netget_bot_positionbot_id",level:3},{value:"<code>Net.move_bot(bot_id, x, y, z)</code>",id:"netmove_botbot_id-x-y-z",level:3},{value:"<code>Net.transfer_bot(bot_id, area_id, warp_in?, x?, y?, z?)</code>",id:"nettransfer_botbot_id-area_id-warp_in-x-y-z",level:3},{value:"<code>Net.set_bot_solid(bot_id, solid)</code>",id:"netset_bot_solidbot_id-solid",level:3},{value:"<code>Net.set_bot_avatar(bot_id, texture_path, animation_path)</code>",id:"netset_bot_avatarbot_id-texture_path-animation_path",level:3},{value:"<code>Net.set_bot_emote(bot_id, emote_id)</code>",id:"netset_bot_emotebot_id-emote_id",level:3},{value:"<code>Net.animate_bot(bot_id, state_name, loop?)</code>",id:"netanimate_botbot_id-state_name-loop",level:3},{value:"Net.BotOptions",id:"netbotoptions",level:2}];function _(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"bots",children:"Bots"}),"\n",(0,i.jsxs)(t.p,{children:["Positions are in tile space. To get the center of a tile add ",(0,i.jsx)(t.code,{children:"0.5"})]}),"\n",(0,i.jsx)(t.h3,{id:"netlist_botsarea_id",children:(0,i.jsx)(t.code,{children:"Net.list_bots(area_id)"})}),"\n",(0,i.jsxs)(t.p,{children:["Returns a list of ",(0,i.jsx)(t.code,{children:"bot_id"}),"s."]}),"\n",(0,i.jsx)(t.h3,{id:"netcreate_botbot_options",children:(0,i.jsx)(t.code,{children:"Net.create_bot(bot_options)"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"bot_options"}),": ",(0,i.jsx)(t.a,{href:"#netbotoptions",children:"Net.BotOptions"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Creates a bot."}),"\n",(0,i.jsxs)(t.p,{children:["Returns a ",(0,i.jsx)(t.code,{children:"bot_id"})]}),"\n",(0,i.jsx)(t.h3,{id:"netis_botbot_id",children:(0,i.jsx)(t.code,{children:"Net.is_bot(bot_id)"})}),"\n",(0,i.jsx)(t.p,{children:"Returns true if the id matches an existing bot."}),"\n",(0,i.jsx)(t.h3,{id:"netremove_botbot_id-warp_out",children:(0,i.jsx)(t.code,{children:"Net.remove_bot(bot_id, warp_out?)"})}),"\n",(0,i.jsx)(t.p,{children:"Deletes the bot and notifies clients in the same area."}),"\n",(0,i.jsx)(t.h3,{id:"netget_bot_areabot_id",children:(0,i.jsx)(t.code,{children:"Net.get_bot_area(bot_id)"})}),"\n",(0,i.jsxs)(t.p,{children:["Returns the ",(0,i.jsx)(t.code,{children:"area_id"})," for the area the bot is currently in."]}),"\n",(0,i.jsx)(t.h3,{id:"netget_bot_namebot_id",children:(0,i.jsx)(t.code,{children:"Net.get_bot_name(bot_id)"})}),"\n",(0,i.jsx)(t.p,{children:"Returns the name shown to players for the bot."}),"\n",(0,i.jsx)(t.h3,{id:"netset_bot_namebot_id-name",children:(0,i.jsx)(t.code,{children:"Net.set_bot_name(bot_id, name)"})}),"\n",(0,i.jsx)(t.p,{children:"Sets the name shown to players for the bot."}),"\n",(0,i.jsx)(t.h3,{id:"netget_bot_directionbot_id",children:(0,i.jsx)(t.code,{children:"Net.get_bot_direction(bot_id)"})}),"\n",(0,i.jsx)(t.p,{children:"Gets the facing direction of the bot."}),"\n",(0,i.jsx)(t.h3,{id:"netset_bot_directionbot_id-direction",children:(0,i.jsx)(t.code,{children:"Net.set_bot_direction(bot_id, direction)"})}),"\n",(0,i.jsx)(t.p,{children:"Sets the facing direction of the bot."}),"\n",(0,i.jsx)(t.h3,{id:"netget_bot_positionbot_id",children:(0,i.jsx)(t.code,{children:"Net.get_bot_position(bot_id)"})}),"\n",(0,i.jsxs)(t.p,{children:["Returns ",(0,i.jsx)(t.a,{href:"/server/lua-api/misc#netposition",children:"Net.Position"})]}),"\n",(0,i.jsx)(t.h3,{id:"netmove_botbot_id-x-y-z",children:(0,i.jsx)(t.code,{children:"Net.move_bot(bot_id, x, y, z)"})}),"\n",(0,i.jsx)(t.p,{children:"Sets the position of the bot, will play a warp animation on the clients if the bot is moving too fast."}),"\n",(0,i.jsx)(t.h3,{id:"nettransfer_botbot_id-area_id-warp_in-x-y-z",children:(0,i.jsx)(t.code,{children:"Net.transfer_bot(bot_id, area_id, warp_in?, x?, y?, z?)"})}),"\n",(0,i.jsx)(t.p,{children:"Sets the area and position of the bot."}),"\n",(0,i.jsx)(t.h3,{id:"netset_bot_solidbot_id-solid",children:(0,i.jsx)(t.code,{children:"Net.set_bot_solid(bot_id, solid)"})}),"\n",(0,i.jsx)(t.p,{children:"Not implemented."}),"\n",(0,i.jsx)(t.h3,{id:"netset_bot_avatarbot_id-texture_path-animation_path",children:(0,i.jsx)(t.code,{children:"Net.set_bot_avatar(bot_id, texture_path, animation_path)"})}),"\n",(0,i.jsx)(t.p,{children:"Sets texture and animation files used to display the bot."}),"\n",(0,i.jsx)(t.h3,{id:"netset_bot_emotebot_id-emote_id",children:(0,i.jsx)(t.code,{children:"Net.set_bot_emote(bot_id, emote_id)"})}),"\n",(0,i.jsxs)(t.p,{children:["Displays an emote above the bot. ",(0,i.jsx)(t.code,{children:"emote_id"})," is the name of an animation state in the emotes animation."]}),"\n",(0,i.jsx)(t.h3,{id:"netanimate_botbot_id-state_name-loop",children:(0,i.jsx)(t.code,{children:"Net.animate_bot(bot_id, state_name, loop?)"})}),"\n",(0,i.jsx)(t.p,{children:"Sets the animation state for the bot, the default states will be used if the bot moves."}),"\n",(0,i.jsx)(t.h2,{id:"netbotoptions",children:"Net.BotOptions"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:"---@class Net.BotOptions\n---@field name? string\n---@field area_id? string\n---@field warp_in? boolean\n---@field texture_path? string\n---@field animation_path? string\n---@field animation? string\n---@field x? number\n---@field y? number\n---@field z? number\n---@field direction? string\n---@field solid? boolean\n"})})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var i=o(6540);const n={},d=i.createContext(n);function s(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);