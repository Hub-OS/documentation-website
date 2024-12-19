"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[975],{4852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=t(4848),a=t(8453);const l={},r="Encounter",c={id:"client/lua-api/field-api/encounter",title:"Encounter",description:"encounter:createspawner(packageid, rank)",source:"@site/docs/01-client/02-lua-api/03-field-api/05-encounter.md",sourceDirName:"01-client/02-lua-api/03-field-api",slug:"/client/lua-api/field-api/encounter",permalink:"/client/lua-api/field-api/encounter",draft:!1,unlisted:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/03-field-api/05-encounter.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Movement",permalink:"/client/lua-api/field-api/movement"},next:{title:"Custom Tile State",permalink:"/client/lua-api/field-api/custom-tile-state"}},s={},d=[{value:"<code>encounter:create_spawner(package_id, rank)</code>",id:"encountercreate_spawnerpackage_id-rank",level:3},{value:"<code>encounter:player_count()</code>",id:"encounterplayer_count",level:3},{value:"<code>encounter:spawn_player(player_index, col, row)</code>",id:"encounterspawn_playerplayer_index-col-row",level:3},{value:"<code>encounter:set_background(texture_path, animation_path, vel_x?, vel_y?)</code>",id:"encounterset_backgroundtexture_path-animation_path-vel_x-vel_y",level:3},{value:"<code>encounter:set_panels(texture_paths, animation_path, tile_width, tile_height)</code>",id:"encounterset_panelstexture_paths-animation_path-tile_width-tile_height",level:3},{value:"<code>encounter:set_field_size(width, height)</code>",id:"encounterset_field_sizewidth-height",level:3},{value:"<code>encounter:set_music(path)</code>",id:"encounterset_musicpath",level:3},{value:"<code>encounter:field()</code>",id:"encounterfield",level:3},{value:"<code>encounter:enable_automatic_turn_end(enabled?)</code>",id:"encounterenable_automatic_turn_endenabled",level:3},{value:"<code>encounter:set_turn_limit(limit)</code>",id:"encounterset_turn_limitlimit",level:3},{value:"<code>encounter:enable_flipping(enable?, player_index?)</code>",id:"encounterenable_flippingenable-player_index",level:3},{value:"<code>encounter:enable_boss_battle(enabled?)</code>",id:"encounterenable_boss_battleenabled",level:3},{value:"Spawner",id:"spawner",level:2},{value:"<code>spawner:spawn_at(col, row)</code>",id:"spawnerspawn_atcol-row",level:3},{value:"Mutator",id:"mutator",level:2},{value:"<code>mutator:mutate(function(entity))</code>",id:"mutatormutatefunctionentity",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"encounter",children:"Encounter"}),"\n",(0,i.jsx)(n.h3,{id:"encountercreate_spawnerpackage_id-rank",children:(0,i.jsx)(n.code,{children:"encounter:create_spawner(package_id, rank)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"package_id"}),": string, the package id for a character package"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"rank"}),": ",(0,i.jsx)(n.a,{href:"/client/lua-api/entity-api/character#characterfrom_packagepackage_id-team-rank",children:"Rank"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Returns a ",(0,i.jsx)(n.a,{href:"#spawner",children:"Spawner"})]}),"\n",(0,i.jsx)(n.h3,{id:"encounterplayer_count",children:(0,i.jsx)(n.code,{children:"encounter:player_count()"})}),"\n",(0,i.jsx)(n.p,{children:"Returns a number, the amount of players that will join the battle."}),"\n",(0,i.jsx)(n.h3,{id:"encounterspawn_playerplayer_index-col-row",children:(0,i.jsx)(n.code,{children:"encounter:spawn_player(player_index, col, row)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"player_index"}),": number, starts at 0"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Sets the spawn position for this player."}),"\n",(0,i.jsx)(n.h3,{id:"encounterset_backgroundtexture_path-animation_path-vel_x-vel_y",children:(0,i.jsx)(n.code,{children:"encounter:set_background(texture_path, animation_path, vel_x?, vel_y?)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"vel_x"}),': if unset, uses the "VELOCITY" point on the first frame of the animation.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"vel_y"}),': if unset, uses the "VELOCITY" point on the first frame of the animation.']}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"encounterset_panelstexture_paths-animation_path-tile_width-tile_height",children:(0,i.jsx)(n.code,{children:"encounter:set_panels(texture_paths, animation_path, tile_width, tile_height)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"texture_paths"}),": a list of path strings, expects a path for ",(0,i.jsx)(n.code,{children:"Team.Red"}),", ",(0,i.jsx)(n.code,{children:"Team.Blue"}),", and ",(0,i.jsx)(n.code,{children:"Team.Other"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"animation_path"}),": an animation file used by tiles, applies to all team textures."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tile_width"}),": width used to resolve spacing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tile_height"}),": height used to resolve spacing."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Experimental. Replacement / removal is under consideration."}),"\n",(0,i.jsx)(n.h3,{id:"encounterset_field_sizewidth-height",children:(0,i.jsx)(n.code,{children:"encounter:set_field_size(width, height)"})}),"\n",(0,i.jsxs)(n.p,{children:["Resizes the field, remember to add two to each dimension to account for the invisible edge tiles. If the field is larger than the screen allows, the camera will adjust placement and zoom to fit all ",(0,i.jsx)(n.a,{href:"/client/lua-api/entity-api/character",children:"Characters"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Resets tile teams and states on the field."}),"\n",(0,i.jsx)(n.h3,{id:"encounterset_musicpath",children:(0,i.jsx)(n.code,{children:"encounter:set_music(path)"})}),"\n",(0,i.jsxs)(n.p,{children:["Sets the initial battle music. Use ",(0,i.jsx)(n.a,{href:"/client/lua-api/resource-api/resources#resourcesplay_musicpath-loops",children:"Resources.play_music()"})," to change the music in the middle of the battle"]}),"\n",(0,i.jsx)(n.h3,{id:"encounterfield",children:(0,i.jsx)(n.code,{children:"encounter:field()"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns ",(0,i.jsx)(n.a,{href:"/client/lua-api/field-api/field",children:"Field"})]}),"\n",(0,i.jsx)(n.h3,{id:"encounterenable_automatic_turn_endenabled",children:(0,i.jsx)(n.code,{children:"encounter:enable_automatic_turn_end(enabled?)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"enabled"}),": defaults to true."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Causes turns to end without needing the player to press the EndTurn button."}),"\n",(0,i.jsx)(n.h3,{id:"encounterset_turn_limitlimit",children:(0,i.jsx)(n.code,{children:"encounter:set_turn_limit(limit)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"limit"}),": max number of turns players can take."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"limit"})," is hit, the battle will end as a failure."]}),"\n",(0,i.jsx)(n.h3,{id:"encounterenable_flippingenable-player_index",children:(0,i.jsx)(n.code,{children:"encounter:enable_flipping(enable?, player_index?)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"enable"}),": defaults to true."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"player_index"}),": starts at 0, if unset applies to all players."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When enabled, players can flip using the FaceLeft and FaceRight buttons."}),"\n",(0,i.jsx)(n.p,{children:"If this function is never called, it is automatically decided by checking for non team panels on the end row behind the player."}),"\n",(0,i.jsx)(n.h3,{id:"encounterenable_boss_battleenabled",children:(0,i.jsx)(n.code,{children:"encounter:enable_boss_battle(enabled?)"})}),"\n",(0,i.jsxs)(n.p,{children:["Affects the score in ",(0,i.jsx)(n.a,{href:"/server/lua-api/events#battle_results",children:"battle_results"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"spawner",children:"Spawner"}),"\n",(0,i.jsx)(n.p,{children:"Spawns characters at the start of battle."}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsxs)(n.a,{href:"#encountercreate_spawnerpackage_id-rank",children:["encounter",":create_spawner","()"]})," for creating a spawner."]}),"\n",(0,i.jsx)(n.h3,{id:"spawnerspawn_atcol-row",children:(0,i.jsx)(n.code,{children:"spawner:spawn_at(col, row)"})}),"\n",(0,i.jsx)(n.p,{children:"Spawns the character at this position."}),"\n",(0,i.jsx)(n.p,{children:"The tile at this position decides facing direction and team."}),"\n",(0,i.jsxs)(n.p,{children:["Returns a ",(0,i.jsx)(n.a,{href:"#mutator",children:"Mutator"})]}),"\n",(0,i.jsx)(n.h2,{id:"mutator",children:"Mutator"}),"\n",(0,i.jsx)(n.p,{children:"Allows for modification of a spawned character. Usage is optional."}),"\n",(0,i.jsx)(n.h3,{id:"mutatormutatefunctionentity",children:(0,i.jsx)(n.code,{children:"mutator:mutate(function(entity))"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"entity"}),": ",(0,i.jsx)(n.a,{href:"/client/lua-api/entity-api/entity",children:"Entity"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(6540);const a={},l=i.createContext(a);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);