"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[878],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var n=i(7294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(i),f=l,h=s["".concat(o,".").concat(f)]||s[f]||u[f]||a;return i?n.createElement(h,r(r({ref:t},p),{},{components:i})):n.createElement(h,r({ref:t},p))}));function h(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=i.length,r=new Array(a);r[0]=f;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[s]="string"==typeof e?e:l,r[1]=d;for(var c=2;c<a;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},7716:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var n=i(7462),l=(i(7294),i(3905));const a={},r="Field",d={unversionedId:"client/lua-api/field",id:"client/lua-api/field",title:"Field",description:"field:tile_at(col, row)",source:"@site/docs/01-client/02-lua-api/03-field.md",sourceDirName:"01-client/02-lua-api",slug:"/client/lua-api/field",permalink:"/documentation-website/client/lua-api/field",draft:!1,editUrl:"https://github.com/Real-PET/documentation-website/tree/master/docs/01-client/02-lua-api/03-field.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Battle",permalink:"/documentation-website/client/lua-api/battle"},next:{title:"Direction",permalink:"/documentation-website/client/lua-api/direction"}},o={},c=[{value:"<code>field:tile_at(col, row)</code>",id:"fieldtile_atcol-row",level:3},{value:"<code>field:width()</code>",id:"fieldwidth",level:3},{value:"<code>field:height()</code>",id:"fieldheight",level:3},{value:"<code>field:spawn(entity, tile)</code>",id:"fieldspawnentity-tile",level:3},{value:"<code>field:spawn(entity, col, row)</code>",id:"fieldspawnentity-col-row",level:3},{value:"<code>field:get_entity(id)</code>",id:"fieldget_entityid",level:3},{value:"<code>field:find_entities(function(entity))</code>",id:"fieldfind_entitiesfunctionentity",level:3},{value:"<code>field:find_characters(function(entity))</code>",id:"fieldfind_charactersfunctionentity",level:3},{value:"<code>field:find_obstacles(function(entity))</code>",id:"fieldfind_obstaclesfunctionentity",level:3},{value:"<code>field:find_players(function(entity))</code>",id:"fieldfind_playersfunctionentity",level:3},{value:"<code>field:find_spells(function(entity))</code>",id:"fieldfind_spellsfunctionentity",level:3},{value:"<code>field:find_tiles(function(tile))</code>",id:"fieldfind_tilesfunctiontile",level:3},{value:"<code>field:shake(strength, duration)</code>",id:"fieldshakestrength-duration",level:3},{value:"<code>field:notify_on_delete(target_id, observer_id, function(entity))</code>",id:"fieldnotify_on_deletetarget_id-observer_id-functionentity",level:3},{value:"<code>field:callback_on_delete(id, function(entity))</code>",id:"fieldcallback_on_deleteid-functionentity",level:3},{value:"Tile",id:"tile",level:2},{value:"<code>tile:x()</code>",id:"tilex",level:3},{value:"<code>tile:y()</code>",id:"tiley",level:3},{value:"<code>tile:width()</code>",id:"tilewidth",level:3},{value:"<code>tile:height()</code>",id:"tileheight",level:3},{value:"<code>tile:get_state()</code>",id:"tileget_state",level:3},{value:"<code>tile:set_state(tile_state)</code>",id:"tileset_statetile_state",level:3},{value:"<code>tile:is_edge()</code>",id:"tileis_edge",level:3},{value:"<code>tile:is_walkable()</code>",id:"tileis_walkable",level:3},{value:"<code>tile:is_reserved()</code>",id:"tileis_reserved",level:3},{value:"<code>tile:reserve_for(entity)</code>",id:"tilereserve_forentity",level:3},{value:"<code>tile:remove_reservation_for(entity)</code>",id:"tileremove_reservation_forentity",level:3},{value:"<code>tile:reserve_for_id(entity_id)</code>",id:"tilereserve_for_identity_id",level:3},{value:"<code>tile:remove_reservation_for_id(entity_id)</code>",id:"tileremove_reservation_for_identity_id",level:3},{value:"<code>tile:get_team()</code>",id:"tileget_team",level:3},{value:"<code>tile:set_team(team)</code>",id:"tileset_teamteam",level:3},{value:"<code>tile:get_facing()</code>",id:"tileget_facing",level:3},{value:"<code>tile:set_facing(direction)</code>",id:"tileset_facingdirection",level:3},{value:"<code>tile:highlight(mode)</code>",id:"tilehighlightmode",level:3},{value:"<code>tile:get_tile(direction, count)</code>",id:"tileget_tiledirection-count",level:3},{value:"<code>tile:attack_entities(spell)</code>",id:"tileattack_entitiesspell",level:3},{value:"<code>tile:contains_entity(entity)</code>",id:"tilecontains_entityentity",level:3},{value:"<code>tile:add_entity(entity)</code>",id:"tileadd_entityentity",level:3},{value:"<code>tile:remove_entity(entity)</code>",id:"tileremove_entityentity",level:3},{value:"<code>tile:remove_entity_by_id(entity_id)</code>",id:"tileremove_entity_by_identity_id",level:3},{value:"<code>tile:find_entities(function(entity))</code>",id:"tilefind_entitiesfunctionentity",level:3},{value:"<code>tile:find_characters(function(entity))</code>",id:"tilefind_charactersfunctionentity",level:3},{value:"<code>tile:find_obstacles(function(entity))</code>",id:"tilefind_obstaclesfunctionentity",level:3},{value:"<code>tile:find_players(function(entity))</code>",id:"tilefind_playersfunctionentity",level:3},{value:"<code>tile:find_spells(function(entity))</code>",id:"tilefind_spellsfunctionentity",level:3}],p={toc:c},s="wrapper";function u(e){let{components:t,...i}=e;return(0,l.kt)(s,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"field"},"Field"),(0,l.kt)("h3",{id:"fieldtile_atcol-row"},(0,l.kt)("inlineCode",{parentName:"h3"},"field:tile_at(col, row)")),(0,l.kt)("p",null,"There's hidden padding around the field, the first visible tile is at (1, 1)."),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("a",{parentName:"p",href:"#tile"},"Tile")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")),(0,l.kt)("h3",{id:"fieldwidth"},(0,l.kt)("inlineCode",{parentName:"h3"},"field:width()")),(0,l.kt)("p",null,"Returns the total columns in the field."),(0,l.kt)("h3",{id:"fieldheight"},(0,l.kt)("inlineCode",{parentName:"h3"},"field:height()")),(0,l.kt)("p",null,"Returns the total rows in the field."),(0,l.kt)("h3",{id:"fieldspawnentity-tile"},(0,l.kt)("inlineCode",{parentName:"h3"},"field:spawn(entity, tile)")),(0,l.kt)("p",null,"Spawns the entity at the start of the next frame if the entity hasn't already been spawned, and places the entity at the tile."),(0,l.kt)("h3",{id:"fieldspawnentity-col-row"},(0,l.kt)("inlineCode",{parentName:"h3"},"field:spawn(entity, col, row)")),(0,l.kt)("p",null,"Spawns the entity at the start of the next frame if the entity hasn't already been spawned, and places the entity at the tile at (col, row)."),(0,l.kt)("h3",{id:"fieldget_entityid"},(0,l.kt)("inlineCode",{parentName:"h3"},"field:get_entity(id)")),(0,l.kt)("p",null,"Returns an ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entity")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,l.kt)("h3",{id:"fieldfind_entitiesfunctionentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"field:find_entities(function(entity))")),(0,l.kt)("p",null,"Returns a list of entities for any entity the callback returned true for."),(0,l.kt)("p",null,'Only "hittable" ',(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entities")," will be passed to the callback."),(0,l.kt)("h3",{id:"fieldfind_charactersfunctionentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"field:find_characters(function(entity))")),(0,l.kt)("p",null,"Returns a list of entities for any entity the callback returned true for."),(0,l.kt)("p",null,'Only "hittable" ',(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/character"},"Characters")," will be passed to the callback."),(0,l.kt)("h3",{id:"fieldfind_obstaclesfunctionentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"field:find_obstacles(function(entity))")),(0,l.kt)("p",null,"Returns a list of entities for any entity the callback returned true for."),(0,l.kt)("p",null,'Only "hittable" ',(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/obstacle"},"Obstacles")," will be passed to the callback."),(0,l.kt)("h3",{id:"fieldfind_playersfunctionentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"field:find_players(function(entity))")),(0,l.kt)("p",null,"Returns a list of entities for any entity the callback returned true for."),(0,l.kt)("p",null,'Only "hittable" ',(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/player"},"Players")," will be passed to the callback."),(0,l.kt)("h3",{id:"fieldfind_spellsfunctionentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"field:find_spells(function(entity))")),(0,l.kt)("p",null,"Returns a list of entities for any entity the callback returned true for."),(0,l.kt)("p",null,"Only ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/spell"},"Spells")," will be passed to the callback."),(0,l.kt)("h3",{id:"fieldfind_tilesfunctiontile"},(0,l.kt)("inlineCode",{parentName:"h3"},"field:find_tiles(function(tile))")),(0,l.kt)("p",null,"Returns a list of ",(0,l.kt)("a",{parentName:"p",href:"#tile"},"Tiles")," for any tile the callback returned true for."),(0,l.kt)("h3",{id:"fieldshakestrength-duration"},(0,l.kt)("inlineCode",{parentName:"h3"},"field:shake(strength, duration)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"strength")," number, affects how aggressively the field shakes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," number, how many game frames the effect should last")),(0,l.kt)("h3",{id:"fieldnotify_on_deletetarget_id-observer_id-functionentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"field:notify_on_delete(target_id, observer_id, function(entity))")),(0,l.kt)("p",null,"Deprecated. Use ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity#entityon_deletefunctionentity"},"entity:on_delete()")," instead."),(0,l.kt)("h3",{id:"fieldcallback_on_deleteid-functionentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"field:callback_on_delete(id, function(entity))")),(0,l.kt)("p",null,"Deprecated. Use ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity#entityon_deletefunctionentity"},"entity:on_delete()")," instead."),(0,l.kt)("h2",{id:"tile"},"Tile"),(0,l.kt)("p",null,"Tiles have a custom comparison function that allows two instances to be compared directly: ",(0,l.kt)("inlineCode",{parentName:"p"},"tile_a == tile_b")),(0,l.kt)("h3",{id:"tilex"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:x()")),(0,l.kt)("p",null,"Returns the column of the tile."),(0,l.kt)("h3",{id:"tiley"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:y()")),(0,l.kt)("p",null,"Returns the row of the tile."),(0,l.kt)("h3",{id:"tilewidth"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:width()")),(0,l.kt)("p",null,"Returns the width of the tile in pixels."),(0,l.kt)("h3",{id:"tileheight"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:height()")),(0,l.kt)("p",null,"Returns the height of the tile in pixels."),(0,l.kt)("h3",{id:"tileget_state"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:get_state()")),(0,l.kt)("p",null,"Returns the tile's TileState."),(0,l.kt)("h3",{id:"tileset_statetile_state"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:set_state(tile_state)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tile_state"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.Hidden")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.Normal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.PermaHole")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.Cracked")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.Broken")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.Ice")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.Grass")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.Lava")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.Poison")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.Holy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.DirectionLeft")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.DirectionRight")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.DirectionUp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.DirectionDown")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.Volcano")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.Sea")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.Sand")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TileState.Metal"))))),(0,l.kt)("h3",{id:"tileis_edge"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:is_edge()")),(0,l.kt)("p",null,"Returns true if the tile is one of the hidden padding tiles around the edge of the field."),(0,l.kt)("h3",{id:"tileis_walkable"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:is_walkable()")),(0,l.kt)("p",null,"Returns true if the tile is not a hole. (",(0,l.kt)("inlineCode",{parentName:"p"},"TileState.Broken"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"TileState.Hidden"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"TileState.Empty"),")"),(0,l.kt)("h3",{id:"tileis_reserved"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:is_reserved()")),(0,l.kt)("p",null,"Returns true if there's any reservations for this tile."),(0,l.kt)("h3",{id:"tilereserve_forentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:reserve_for(entity)")),(0,l.kt)("p",null,"Adds a reservation of this tile for this ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entity"),"."),(0,l.kt)("h3",{id:"tileremove_reservation_forentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:remove_reservation_for(entity)")),(0,l.kt)("p",null,"Removes a reservation for this tile for this ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entity"),"."),(0,l.kt)("h3",{id:"tilereserve_for_identity_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:reserve_for_id(entity_id)")),(0,l.kt)("p",null,"Adds a reservation of this tile for this ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entity")," using an entity id."),(0,l.kt)("h3",{id:"tileremove_reservation_for_identity_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:remove_reservation_for_id(entity_id)")),(0,l.kt)("p",null,"Removes a reservation of this tile for this ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entity")," using an entity id."),(0,l.kt)("h3",{id:"tileget_team"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:get_team()")),(0,l.kt)("p",null,"Returns ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity#entityset_teamteam"},"Team")),(0,l.kt)("h3",{id:"tileset_teamteam"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:set_team(team)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"team"),": ",(0,l.kt)("a",{parentName:"li",href:"/client/lua-api/entity#entityset_teamteam"},"Team"))),(0,l.kt)("h3",{id:"tileget_facing"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:get_facing()")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/direction"},"Direction")),(0,l.kt)("h3",{id:"tileset_facingdirection"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:set_facing(direction)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"direction"),": ",(0,l.kt)("a",{parentName:"li",href:"/client/lua-api/direction"},"Direction"))),(0,l.kt)("p",null,"Sets the facing direction used to set the initial direction of spawned entities, as well as for resolving reverting team."),(0,l.kt)("h3",{id:"tilehighlightmode"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:highlight(mode)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mode"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Highlight.None")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Highlight.Flash")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Highlight.Solid"))))),(0,l.kt)("h3",{id:"tileget_tiledirection-count"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:get_tile(direction, count)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"direction"),": ",(0,l.kt)("a",{parentName:"li",href:"/client/lua-api/direction"},"Direction")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"count"),": integer")),(0,l.kt)("p",null,"Returns a Tile ",(0,l.kt)("inlineCode",{parentName:"p"},"count")," many tiles in ",(0,l.kt)("inlineCode",{parentName:"p"},"direction"),"'s direction, or ",(0,l.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,l.kt)("h3",{id:"tileattack_entitiesspell"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:attack_entities(spell)")),(0,l.kt)("p",null,"Queues an attack to occur on this tile by this ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/spell"},"Spell"),"."),(0,l.kt)("h3",{id:"tilecontains_entityentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:contains_entity(entity)")),(0,l.kt)("p",null,"Returns true if the ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entity")," is on the field and at the same position as the tile."),(0,l.kt)("h3",{id:"tileadd_entityentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:add_entity(entity)")),(0,l.kt)("p",null,"Moves the ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entity")," to this tile if the entity is spawned."),(0,l.kt)("h3",{id:"tileremove_entityentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:remove_entity(entity)")),(0,l.kt)("p",null,"Removes the ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entity")," from the field."),(0,l.kt)("h3",{id:"tileremove_entity_by_identity_id"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:remove_entity_by_id(entity_id)")),(0,l.kt)("p",null,"Removes the ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entity")," from the field."),(0,l.kt)("h3",{id:"tilefind_entitiesfunctionentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:find_entities(function(entity))")),(0,l.kt)("p",null,"Returns a list of entities for any entity the callback returned true for."),(0,l.kt)("p",null,'Only "hittable" ',(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entities")," will be passed to the callback."),(0,l.kt)("h3",{id:"tilefind_charactersfunctionentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:find_characters(function(entity))")),(0,l.kt)("p",null,"Returns a list of entities for any entity the callback returned true for."),(0,l.kt)("p",null,'Only "hittable" ',(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/character"},"Characters")," will be passed to the callback."),(0,l.kt)("h3",{id:"tilefind_obstaclesfunctionentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:find_obstacles(function(entity))")),(0,l.kt)("p",null,"Returns a list of entities for any entity the callback returned true for."),(0,l.kt)("p",null,'Only "hittable" ',(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/obstacle"},"Obstacles")," will be passed to the callback."),(0,l.kt)("h3",{id:"tilefind_playersfunctionentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:find_players(function(entity))")),(0,l.kt)("p",null,"Returns a list of entities for any entity the callback returned true for."),(0,l.kt)("p",null,'Only "hittable" ',(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/player"},"Players")," will be passed to the callback."),(0,l.kt)("h3",{id:"tilefind_spellsfunctionentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"tile:find_spells(function(entity))")),(0,l.kt)("p",null,"Returns a list of entities for any entity the callback returned true for."),(0,l.kt)("p",null,"Only ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/spell"},"Spells")," will be passed to the callback."))}u.isMDXComponent=!0}}]);