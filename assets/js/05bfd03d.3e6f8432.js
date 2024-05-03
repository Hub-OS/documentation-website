"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2799],{5318:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>o});var n=t(4848),l=t(8453);const d={},c="Tile",s={id:"client/lua-api/field-api/tile",title:"Tile",description:"Tiles have a custom comparison function that allows two instances to be compared directly: tilea == tileb",source:"@site/docs/01-client/02-lua-api/03-field-api/02-tile.md",sourceDirName:"01-client/02-lua-api/03-field-api",slug:"/client/lua-api/field-api/tile",permalink:"/client/lua-api/field-api/tile",draft:!1,unlisted:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/03-field-api/02-tile.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Field",permalink:"/client/lua-api/field-api/field"},next:{title:"Direction",permalink:"/client/lua-api/field-api/direction"}},r={},o=[{value:"<code>tile:x()</code>",id:"tilex",level:3},{value:"<code>tile:y()</code>",id:"tiley",level:3},{value:"<code>tile:width()</code>",id:"tilewidth",level:3},{value:"<code>tile:height()</code>",id:"tileheight",level:3},{value:"<code>tile:state()</code>",id:"tilestate",level:3},{value:"<code>tile:set_state(tile_state)</code>",id:"tileset_statetile_state",level:3},{value:"<code>tile:is_edge()</code>",id:"tileis_edge",level:3},{value:"<code>tile:is_walkable()</code>",id:"tileis_walkable",level:3},{value:"<code>tile:is_reserved(exclude_list?)</code>",id:"tileis_reservedexclude_list",level:3},{value:"<code>tile:reserve_count_for(entity)</code>",id:"tilereserve_count_forentity",level:3},{value:"<code>tile:reserve_for(entity)</code>",id:"tilereserve_forentity",level:3},{value:"<code>tile:remove_reservation_for(entity)</code>",id:"tileremove_reservation_forentity",level:3},{value:"<code>tile:reserve_for_id(entity_id)</code>",id:"tilereserve_for_identity_id",level:3},{value:"<code>tile:remove_reservation_for_id(entity_id)</code>",id:"tileremove_reservation_for_identity_id",level:3},{value:"<code>tile:team()</code>",id:"tileteam",level:3},{value:"<code>tile:set_team(team, direction?)</code>",id:"tileset_teamteam-direction",level:3},{value:"<code>tile:facing()</code>",id:"tilefacing",level:3},{value:"<code>tile:set_facing(direction)</code>",id:"tileset_facingdirection",level:3},{value:"<code>tile:set_highlight(highlight)</code>",id:"tileset_highlighthighlight",level:3},{value:"<code>tile:get_tile(direction, count)</code>",id:"tileget_tiledirection-count",level:3},{value:"<code>tile:attack_entities(spell)</code>",id:"tileattack_entitiesspell",level:3},{value:"<code>tile:contains_entity(entity)</code>",id:"tilecontains_entityentity",level:3},{value:"<code>tile:add_entity(entity)</code>",id:"tileadd_entityentity",level:3},{value:"<code>tile:remove_entity(entity)</code>",id:"tileremove_entityentity",level:3},{value:"<code>tile:remove_entity_by_id(entity_id)</code>",id:"tileremove_entity_by_identity_id",level:3},{value:"<code>tile:find_entities(function(entity): boolean)</code>",id:"tilefind_entitiesfunctionentity-boolean",level:3},{value:"<code>tile:find_characters(function(entity): boolean)</code>",id:"tilefind_charactersfunctionentity-boolean",level:3},{value:"<code>tile:find_obstacles(function(entity): boolean)</code>",id:"tilefind_obstaclesfunctionentity-boolean",level:3},{value:"<code>tile:find_players(function(entity): boolean)</code>",id:"tilefind_playersfunctionentity-boolean",level:3},{value:"<code>tile:find_spells(function(entity): boolean)</code>",id:"tilefind_spellsfunctionentity-boolean",level:3}];function a(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"tile",children:"Tile"}),"\n",(0,n.jsxs)(i.p,{children:["Tiles have a custom comparison function that allows two instances to be compared directly: ",(0,n.jsx)(i.code,{children:"tile_a == tile_b"})]}),"\n",(0,n.jsx)(i.h3,{id:"tilex",children:(0,n.jsx)(i.code,{children:"tile:x()"})}),"\n",(0,n.jsx)(i.p,{children:"Returns the column of the tile."}),"\n",(0,n.jsx)(i.h3,{id:"tiley",children:(0,n.jsx)(i.code,{children:"tile:y()"})}),"\n",(0,n.jsx)(i.p,{children:"Returns the row of the tile."}),"\n",(0,n.jsx)(i.h3,{id:"tilewidth",children:(0,n.jsx)(i.code,{children:"tile:width()"})}),"\n",(0,n.jsx)(i.p,{children:"Returns the width of the tile in pixels."}),"\n",(0,n.jsx)(i.h3,{id:"tileheight",children:(0,n.jsx)(i.code,{children:"tile:height()"})}),"\n",(0,n.jsx)(i.p,{children:"Returns the height of the tile in pixels."}),"\n",(0,n.jsx)(i.h3,{id:"tilestate",children:(0,n.jsx)(i.code,{children:"tile:state()"})}),"\n",(0,n.jsx)(i.p,{children:"Returns the TileState."}),"\n",(0,n.jsx)(i.h3,{id:"tileset_statetile_state",children:(0,n.jsx)(i.code,{children:"tile:set_state(tile_state)"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"tile_state"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"TileState.Hidden"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"TileState.Normal"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"TileState.PermaHole"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"TileState.Cracked"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"TileState.Broken"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/client/packages#tile-states",children:"TileState.[state_name]"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"tileis_edge",children:(0,n.jsx)(i.code,{children:"tile:is_edge()"})}),"\n",(0,n.jsx)(i.p,{children:"Returns true if the tile is one of the hidden padding tiles around the edge of the field."}),"\n",(0,n.jsx)(i.h3,{id:"tileis_walkable",children:(0,n.jsx)(i.code,{children:"tile:is_walkable()"})}),"\n",(0,n.jsxs)(i.p,{children:["Returns true if the tile is not a hole. (",(0,n.jsx)(i.code,{children:"TileState.Broken"}),", ",(0,n.jsx)(i.code,{children:"TileState.Hidden"}),", ",(0,n.jsx)(i.code,{children:"TileState.Empty"}),")"]}),"\n",(0,n.jsx)(i.h3,{id:"tileis_reservedexclude_list",children:(0,n.jsx)(i.code,{children:"tile:is_reserved(exclude_list?)"})}),"\n",(0,n.jsxs)(i.p,{children:["Returns true if there's any reservations for this tile, excluding ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/entity#entityid",children:"entities with ids"})," matching the ",(0,n.jsx)(i.code,{children:"exclude_list"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"tilereserve_count_forentity",children:(0,n.jsx)(i.code,{children:"tile:reserve_count_for(entity)"})}),"\n",(0,n.jsxs)(i.p,{children:["Returns a number, representing the total reservation count for this ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/entity",children:"Entity"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"tilereserve_forentity",children:(0,n.jsx)(i.code,{children:"tile:reserve_for(entity)"})}),"\n",(0,n.jsxs)(i.p,{children:["Adds a reservation of this tile for this ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/entity",children:"Entity"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"tileremove_reservation_forentity",children:(0,n.jsx)(i.code,{children:"tile:remove_reservation_for(entity)"})}),"\n",(0,n.jsxs)(i.p,{children:["Removes a reservation for this tile for this ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/entity",children:"Entity"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"tilereserve_for_identity_id",children:(0,n.jsx)(i.code,{children:"tile:reserve_for_id(entity_id)"})}),"\n",(0,n.jsxs)(i.p,{children:["Adds a reservation of this tile for this ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/entity",children:"Entity"})," using an entity id."]}),"\n",(0,n.jsx)(i.h3,{id:"tileremove_reservation_for_identity_id",children:(0,n.jsx)(i.code,{children:"tile:remove_reservation_for_id(entity_id)"})}),"\n",(0,n.jsxs)(i.p,{children:["Removes a reservation of this tile for this ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/entity",children:"Entity"})," using an entity id."]}),"\n",(0,n.jsx)(i.h3,{id:"tileteam",children:(0,n.jsx)(i.code,{children:"tile:team()"})}),"\n",(0,n.jsxs)(i.p,{children:["Returns ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/entity#entityset_teamteam",children:"Team"})]}),"\n",(0,n.jsx)(i.h3,{id:"tileset_teamteam-direction",children:(0,n.jsx)(i.code,{children:"tile:set_team(team, direction?)"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"team"}),": ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/entity#entityset_teamteam",children:"Team"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"direction"}),": ",(0,n.jsx)(i.a,{href:"/client/lua-api/field-api/direction",children:"Direction"})," optional override for the duration of the team change."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"tilefacing",children:(0,n.jsx)(i.code,{children:"tile:facing()"})}),"\n",(0,n.jsxs)(i.p,{children:["Returns a ",(0,n.jsx)(i.a,{href:"/client/lua-api/field-api/direction",children:"Direction"})]}),"\n",(0,n.jsx)(i.h3,{id:"tileset_facingdirection",children:(0,n.jsx)(i.code,{children:"tile:set_facing(direction)"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"direction"}),": ",(0,n.jsx)(i.a,{href:"/client/lua-api/field-api/direction",children:"Direction"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Sets the facing direction used to set the initial direction of spawned entities, as well as for resolving reverting team."}),"\n",(0,n.jsx)(i.h3,{id:"tileset_highlighthighlight",children:(0,n.jsx)(i.code,{children:"tile:set_highlight(highlight)"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"highlight"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"Highlight.None"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"Highlight.Flash"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"Highlight.Solid"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"tileget_tiledirection-count",children:(0,n.jsx)(i.code,{children:"tile:get_tile(direction, count)"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"direction"}),": ",(0,n.jsx)(i.a,{href:"/client/lua-api/field-api/direction",children:"Direction"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"count"}),": integer"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Returns a Tile ",(0,n.jsx)(i.code,{children:"count"})," many tiles in ",(0,n.jsx)(i.code,{children:"direction"}),"'s direction, or ",(0,n.jsx)(i.code,{children:"nil"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"tileattack_entitiesspell",children:(0,n.jsx)(i.code,{children:"tile:attack_entities(spell)"})}),"\n",(0,n.jsxs)(i.p,{children:["Queues an attack to occur on this tile by this ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/spell",children:"Spell"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"tilecontains_entityentity",children:(0,n.jsx)(i.code,{children:"tile:contains_entity(entity)"})}),"\n",(0,n.jsxs)(i.p,{children:["Returns true if the ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/entity",children:"Entity"})," is on the field and at the same position as the tile."]}),"\n",(0,n.jsx)(i.h3,{id:"tileadd_entityentity",children:(0,n.jsx)(i.code,{children:"tile:add_entity(entity)"})}),"\n",(0,n.jsxs)(i.p,{children:["Moves the ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/entity",children:"Entity"})," to this tile if the entity is spawned."]}),"\n",(0,n.jsx)(i.h3,{id:"tileremove_entityentity",children:(0,n.jsx)(i.code,{children:"tile:remove_entity(entity)"})}),"\n",(0,n.jsxs)(i.p,{children:["Removes the ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/entity",children:"Entity"})," from the field."]}),"\n",(0,n.jsx)(i.h3,{id:"tileremove_entity_by_identity_id",children:(0,n.jsx)(i.code,{children:"tile:remove_entity_by_id(entity_id)"})}),"\n",(0,n.jsxs)(i.p,{children:["Removes the ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/entity",children:"Entity"})," from the field."]}),"\n",(0,n.jsx)(i.h3,{id:"tilefind_entitiesfunctionentity-boolean",children:(0,n.jsx)(i.code,{children:"tile:find_entities(function(entity): boolean)"})}),"\n",(0,n.jsx)(i.p,{children:"Returns a list of entities for any entity the callback returned true for."}),"\n",(0,n.jsxs)(i.p,{children:["Only ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/entity",children:"Entities"})," on the field and not marked for deletion will be passed to the callback."]}),"\n",(0,n.jsx)(i.h3,{id:"tilefind_charactersfunctionentity-boolean",children:(0,n.jsx)(i.code,{children:"tile:find_characters(function(entity): boolean)"})}),"\n",(0,n.jsx)(i.p,{children:"Returns a list of entities for any entity the callback returned true for."}),"\n",(0,n.jsxs)(i.p,{children:["Only ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/character",children:"Characters"})," on the field and not marked for deletion will be passed to the callback."]}),"\n",(0,n.jsx)(i.h3,{id:"tilefind_obstaclesfunctionentity-boolean",children:(0,n.jsx)(i.code,{children:"tile:find_obstacles(function(entity): boolean)"})}),"\n",(0,n.jsx)(i.p,{children:"Returns a list of entities for any entity the callback returned true for."}),"\n",(0,n.jsxs)(i.p,{children:["Only ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/obstacle",children:"Obstacles"})," on the field and not marked for deletion will be passed to the callback."]}),"\n",(0,n.jsx)(i.h3,{id:"tilefind_playersfunctionentity-boolean",children:(0,n.jsx)(i.code,{children:"tile:find_players(function(entity): boolean)"})}),"\n",(0,n.jsx)(i.p,{children:"Returns a list of entities for any entity the callback returned true for."}),"\n",(0,n.jsxs)(i.p,{children:["Only ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/player",children:"Players"})," on the field and not marked for deletion will be passed to the callback."]}),"\n",(0,n.jsx)(i.h3,{id:"tilefind_spellsfunctionentity-boolean",children:(0,n.jsx)(i.code,{children:"tile:find_spells(function(entity): boolean)"})}),"\n",(0,n.jsx)(i.p,{children:"Returns a list of entities for any entity the callback returned true for."}),"\n",(0,n.jsxs)(i.p,{children:["Only ",(0,n.jsx)(i.a,{href:"/client/lua-api/entity-api/spell",children:"Spells"})," will be passed to the callback."]})]})}function h(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>s});var n=t(6540);const l={},d=n.createContext(l);function c(e){const i=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),n.createElement(d.Provider,{value:i},e.children)}}}]);