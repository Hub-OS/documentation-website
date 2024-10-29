"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26],{3669:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>s});var n=t(4848),l=t(8453);const d={},a="Field",c={id:"client/lua-api/field-api/field",title:"Field",description:"field:tile_at(col, row)",source:"@site/docs/01-client/02-lua-api/03-field-api/01-field.md",sourceDirName:"01-client/02-lua-api/03-field-api",slug:"/client/lua-api/field-api/field",permalink:"/client/lua-api/field-api/field",draft:!1,unlisted:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/03-field-api/01-field.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Sprite",permalink:"/client/lua-api/resource-api/sprite"},next:{title:"Tile",permalink:"/client/lua-api/field-api/tile"}},o={},s=[{value:"<code>field:tile_at(col, row)</code>",id:"fieldtile_atcol-row",level:3},{value:"<code>field:width()</code>",id:"fieldwidth",level:3},{value:"<code>field:height()</code>",id:"fieldheight",level:3},{value:"<code>field:spawn(entity, tile)</code>",id:"fieldspawnentity-tile",level:3},{value:"<code>field:spawn(entity, col, row)</code>",id:"fieldspawnentity-col-row",level:3},{value:"<code>field:get_entity(id)</code>",id:"fieldget_entityid",level:3},{value:"<code>field:find_entities(function(entity): boolean)</code>",id:"fieldfind_entitiesfunctionentity-boolean",level:3},{value:"<code>field:find_characters(function(entity): boolean)</code>",id:"fieldfind_charactersfunctionentity-boolean",level:3},{value:"<code>field:find_obstacles(function(entity): boolean)</code>",id:"fieldfind_obstaclesfunctionentity-boolean",level:3},{value:"<code>field:find_players(function(entity): boolean)</code>",id:"fieldfind_playersfunctionentity-boolean",level:3},{value:"<code>field:find_spells(function(entity): boolean)</code>",id:"fieldfind_spellsfunctionentity-boolean",level:3},{value:"<code>field:find_nearest_characters(entity, function(entity): boolean)</code>",id:"fieldfind_nearest_charactersentity-functionentity-boolean",level:3},{value:"<code>field:find_nearest_players(entity, function(entity): boolean)</code>",id:"fieldfind_nearest_playersentity-functionentity-boolean",level:3},{value:"<code>field:find_tiles(function(tile): boolean)</code>",id:"fieldfind_tilesfunctiontile-boolean",level:3},{value:"<code>field:shake(strength, duration)</code>",id:"fieldshakestrength-duration",level:3},{value:"<code>field:notify_on_delete(target_id, observer_id, function(entity))</code>",id:"fieldnotify_on_deletetarget_id-observer_id-functionentity",level:3},{value:"<code>field:callback_on_delete(id, function(entity))</code>",id:"fieldcallback_on_deleteid-functionentity",level:3},{value:"<code>field:reclaim_column(x, team)</code>",id:"fieldreclaim_columnx-team",level:3}];function r(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"field",children:"Field"}),"\n",(0,n.jsx)(i.h3,{id:"fieldtile_atcol-row",children:(0,n.jsx)(i.code,{children:"field:tile_at(col, row)"})}),"\n",(0,n.jsx)(i.p,{children:"There's hidden padding around the field, the first visible tile is at (1, 1)."}),"\n",(0,n.jsxs)(i.p,{children:["Returns a ",(0,n.jsx)(i.a,{href:"/client/lua-api/field-api/tile",children:"Tile"})," or ",(0,n.jsx)(i.code,{children:"nil"})]}),"\n",(0,n.jsx)(i.h3,{id:"fieldwidth",children:(0,n.jsx)(i.code,{children:"field:width()"})}),"\n",(0,n.jsx)(i.p,{children:"Returns the total columns in the field."}),"\n",(0,n.jsx)(i.h3,{id:"fieldheight",children:(0,n.jsx)(i.code,{children:"field:height()"})}),"\n",(0,n.jsx)(i.p,{children:"Returns the total rows in the field."}),"\n",(0,n.jsx)(i.h3,{id:"fieldspawnentity-tile",children:(0,n.jsx)(i.code,{children:"field:spawn(entity, tile)"})}),"\n",(0,n.jsx)(i.p,{children:"Spawns the entity at the start of the next frame if the entity hasn't already been spawned, and places the entity at the tile."}),"\n",(0,n.jsx)(i.h3,{id:"fieldspawnentity-col-row",children:(0,n.jsx)(i.code,{children:"field:spawn(entity, col, row)"})}),"\n",(0,n.jsx)(i.p,{children:"Spawns the entity at the start of the next frame if the entity hasn't already been spawned, and places the entity at the tile at (col, row)."}),"\n",(0,n.jsx)(i.h3,{id:"fieldget_entityid",children:(0,n.jsx)(i.code,{children:"field:get_entity(id)"})}),"\n",(0,n.jsxs)(i.p,{children:["Returns an ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/entity",children:"Entity"})," or ",(0,n.jsx)(i.code,{children:"nil"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"fieldfind_entitiesfunctionentity-boolean",children:(0,n.jsx)(i.code,{children:"field:find_entities(function(entity): boolean)"})}),"\n",(0,n.jsx)(i.p,{children:"Returns a list of entities for any entity the callback returned true for."}),"\n",(0,n.jsxs)(i.p,{children:["All spawned ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/entity",children:"Entities"})," that haven't been deleted will be passed to the callback."]}),"\n",(0,n.jsx)(i.h3,{id:"fieldfind_charactersfunctionentity-boolean",children:(0,n.jsx)(i.code,{children:"field:find_characters(function(entity): boolean)"})}),"\n",(0,n.jsx)(i.p,{children:"Returns a list of entities for any entity the callback returned true for."}),"\n",(0,n.jsxs)(i.p,{children:["Only spawned ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/character",children:"Characters"})," that haven't been deleted will be passed to the callback, includes ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/player",children:"Players"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"fieldfind_obstaclesfunctionentity-boolean",children:(0,n.jsx)(i.code,{children:"field:find_obstacles(function(entity): boolean)"})}),"\n",(0,n.jsx)(i.p,{children:"Returns a list of entities for any entity the callback returned true for."}),"\n",(0,n.jsxs)(i.p,{children:["Only spawned ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/obstacle",children:"Obstacles"})," that haven't been deleted will be passed to the callback."]}),"\n",(0,n.jsx)(i.h3,{id:"fieldfind_playersfunctionentity-boolean",children:(0,n.jsx)(i.code,{children:"field:find_players(function(entity): boolean)"})}),"\n",(0,n.jsx)(i.p,{children:"Returns a list of entities for any entity the callback returned true for."}),"\n",(0,n.jsxs)(i.p,{children:["Only spawned ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/player",children:"Players"})," that haven't been deleted will be passed to the callback."]}),"\n",(0,n.jsx)(i.h3,{id:"fieldfind_spellsfunctionentity-boolean",children:(0,n.jsx)(i.code,{children:"field:find_spells(function(entity): boolean)"})}),"\n",(0,n.jsx)(i.p,{children:"Returns a list of entities for any entity the callback returned true for."}),"\n",(0,n.jsxs)(i.p,{children:["Only spawned ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/spell",children:"Spells"})," that haven't been deleted will be passed to the callback, excludes ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/obstacle",children:"Obstacles"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"fieldfind_nearest_charactersentity-functionentity-boolean",children:(0,n.jsx)(i.code,{children:"field:find_nearest_characters(entity, function(entity): boolean)"})}),"\n",(0,n.jsx)(i.p,{children:"Returns a list of entities sorted by distance, for any entity the callback returned true for."}),"\n",(0,n.jsxs)(i.p,{children:["Only spawned ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/character",children:"Characters"})," that haven't been deleted will be passed to the callback, includes ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/player",children:"Players"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"fieldfind_nearest_playersentity-functionentity-boolean",children:(0,n.jsx)(i.code,{children:"field:find_nearest_players(entity, function(entity): boolean)"})}),"\n",(0,n.jsx)(i.p,{children:"Returns a list of entities sorted by distance, for any entity the callback returned true for."}),"\n",(0,n.jsxs)(i.p,{children:["Only spawned ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/player",children:"Players"})," that haven't been deleted will be passed to the callback."]}),"\n",(0,n.jsx)(i.h3,{id:"fieldfind_tilesfunctiontile-boolean",children:(0,n.jsx)(i.code,{children:"field:find_tiles(function(tile): boolean)"})}),"\n",(0,n.jsxs)(i.p,{children:["Returns a list of ",(0,n.jsx)(i.a,{href:"/client/lua-api/field-api/tile",children:"Tiles"})," for any tile the callback returned true for."]}),"\n",(0,n.jsx)(i.h3,{id:"fieldshakestrength-duration",children:(0,n.jsx)(i.code,{children:"field:shake(strength, duration)"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"strength"})," number, affects how aggressively the field shakes"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"duration"})," number, how many game frames the effect should last"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"fieldnotify_on_deletetarget_id-observer_id-functionentity",children:(0,n.jsx)(i.code,{children:"field:notify_on_delete(target_id, observer_id, function(entity))"})}),"\n",(0,n.jsxs)(i.p,{children:["Deprecated. Use ",(0,n.jsxs)(i.a,{href:"/client/lua-api/entity-api/entity#entityon_deletefunctionentity",children:["entity",":on_delete","()"]})," instead."]}),"\n",(0,n.jsx)(i.h3,{id:"fieldcallback_on_deleteid-functionentity",children:(0,n.jsx)(i.code,{children:"field:callback_on_delete(id, function(entity))"})}),"\n",(0,n.jsxs)(i.p,{children:["Deprecated. Use ",(0,n.jsxs)(i.a,{href:"/client/lua-api/entity-api/entity#entityon_deletefunctionentity",children:["entity",":on_delete","()"]})," instead."]}),"\n",(0,n.jsx)(i.h3,{id:"fieldreclaim_columnx-team",children:(0,n.jsx)(i.code,{children:"field:reclaim_column(x, team)"})}),"\n",(0,n.jsx)(i.p,{children:"Causes tiles in the column to return to the matching team as soon as possible, starting at the next frame. The transfer will be delayed by tile reservations in the column."})]})}function f(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>c});var n=t(6540);const l={},d=n.createContext(l);function a(e){const i=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(d.Provider,{value:i},e.children)}}}]);