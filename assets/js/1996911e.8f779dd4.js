"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[378],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),_=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=_(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=_(a),c=i,h=s["".concat(o,".").concat(c)]||s[c]||u[c]||n;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[s]="string"==typeof e?e:i,l[1]=d;for(var _=2;_<n;_++)l[_]=a[_];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8085:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>d,toc:()=>_});var r=a(7462),i=(a(7294),a(3905));const n={},l="Areas",d={unversionedId:"server/lua-api/areas",id:"server/lua-api/areas",title:"Areas",description:"areaid is the filename without extension, ./assets/myarea.tmx would be my_area.",source:"@site/docs/02-server/04-lua-api/04-areas.md",sourceDirName:"02-server/04-lua-api",slug:"/server/lua-api/areas",permalink:"/documentation-website/docs/server/lua-api/areas",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"serverSidebar",previous:{title:"Server Events",permalink:"/documentation-website/docs/server/lua-api/events"},next:{title:"Objects",permalink:"/documentation-website/docs/server/lua-api/objects"}},o={},_=[{value:"<code>Net.list_areas()</code>",id:"netlist_areas",level:3},{value:"<code>Net.create_area(new_area_id)</code>",id:"netcreate_areanew_area_id",level:3},{value:"<code>Net.update_area(area_id, tmx_string)</code>",id:"netupdate_areaarea_id-tmx_string",level:3},{value:"<code>Net.clone_area(area_id, new_area_id)</code>",id:"netclone_areaarea_id-new_area_id",level:3},{value:"<code>Net.remove_area(area_id)</code>",id:"netremove_areaarea_id",level:3},{value:"<code>Net.area_to_string(area_id)</code>",id:"netarea_to_stringarea_id",level:3},{value:"<code>Net.get_width(area_id)</code>",id:"netget_widtharea_id",level:3},{value:"<code>Net.get_height(area_id)</code>",id:"netget_heightarea_id",level:3},{value:"<code>Net.get_layer_count(area_id)</code>",id:"netget_layer_countarea_id",level:3},{value:"<code>Net.get_tile_width(area_id)</code>",id:"netget_tile_widtharea_id",level:3},{value:"<code>Net.get_tile_height(area_id)</code>",id:"netget_tile_heightarea_id",level:3},{value:"<code>Net.get_area_custom_properties(area_id)</code>",id:"netget_area_custom_propertiesarea_id",level:3},{value:"<code>Net.get_area_custom_property(area_id, name)</code>",id:"netget_area_custom_propertyarea_id-name",level:3},{value:"<code>Net.set_area_custom_property(area_id, name, value)</code>",id:"netset_area_custom_propertyarea_id-name-value",level:3},{value:"<code>Net.get_area_name(area_id)</code>",id:"netget_area_namearea_id",level:3},{value:"<code>Net.set_area_name(area_id, name)</code>",id:"netset_area_namearea_id-name",level:3},{value:"<code>Net.get_song(area_id)</code>",id:"netget_songarea_id",level:3},{value:"<code>Net.set_song(area_id, path)</code>",id:"netset_songarea_id-path",level:3},{value:"<code>Net.get_background(area_id)</code>",id:"netget_backgroundarea_id",level:3},{value:"<code>Net.get_background_velocity(area_id)</code>",id:"netget_background_velocityarea_id",level:3},{value:"<code>Net.get_background_parallax(area_id)</code>",id:"netget_background_parallaxarea_id",level:3},{value:"<code>Net.set_background(area_id, texture_path, animation_path?, vel_x?, vel_y?, parallax?)</code>",id:"netset_backgroundarea_id-texture_path-animation_path-vel_x-vel_y-parallax",level:3},{value:"<code>Net.get_foreground(area_id)</code>",id:"netget_foregroundarea_id",level:3},{value:"<code>Net.get_foreground_velocity(area_id)</code>",id:"netget_foreground_velocityarea_id",level:3},{value:"<code>Net.get_foreground_parallax(area_id)</code>",id:"netget_foreground_parallaxarea_id",level:3},{value:"<code>Net.set_foreground(area_id, texture_path, animation_path?, vel_x?, vel_y?, parallax?)</code>",id:"netset_foregroundarea_id-texture_path-animation_path-vel_x-vel_y-parallax",level:3},{value:"<code>Net.get_spawn_position(area_id)</code>",id:"netget_spawn_positionarea_id",level:3},{value:"<code>Net.set_spawn_position(area_id, x, y, z)</code>",id:"netset_spawn_positionarea_id-x-y-z",level:3},{value:"<code>Net.get_spawn_direction(area_id)</code>",id:"netget_spawn_directionarea_id",level:3},{value:"<code>Net.set_spawn_direction(area_id, direction)</code>",id:"netset_spawn_directionarea_id-direction",level:3},{value:"<code>Net.list_tilesets(area_id)</code>",id:"netlist_tilesetsarea_id",level:3},{value:"<code>Net.get_tileset(area_id, tileset_path)</code>",id:"netget_tilesetarea_id-tileset_path",level:3},{value:"<code>Net.get_tileset_for_tile(area_id, tile_gid)</code>",id:"netget_tileset_for_tilearea_id-tile_gid",level:3},{value:"<code>Net.get_tile(area_id, x, y, z)</code>",id:"netget_tilearea_id-x-y-z",level:3},{value:"<code>Net.set_tile(area_id, x, y, z, tile_gid, flip_h?, flip_v?, rotate?)</code>",id:"netset_tilearea_id-x-y-z-tile_gid-flip_h-flip_v-rotate",level:3},{value:"<code>Net.provide_asset(area_id, path)</code>",id:"netprovide_assetarea_id-path",level:3},{value:"<code>Net.play_sound(area_id, path)</code>",id:"netplay_soundarea_id-path",level:3}],p={toc:_},s="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(s,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"areas"},"Areas"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"area_id")," is the filename without extension, ",(0,i.kt)("inlineCode",{parentName:"p"},"./assets/my_area.tmx")," would be ",(0,i.kt)("inlineCode",{parentName:"p"},"my_area"),"."),(0,i.kt)("p",null,"Positions are in tile space. To get the center of a tile add ",(0,i.kt)("inlineCode",{parentName:"p"},"0.5")),(0,i.kt)("h3",{id:"netlist_areas"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.list_areas()")),(0,i.kt)("p",null,"Returns a list of area_ids."),(0,i.kt)("h3",{id:"netcreate_areanew_area_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.create_area(new_area_id)")),(0,i.kt)("p",null,"Not implemented."),(0,i.kt)("h3",{id:"netupdate_areaarea_id-tmx_string"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.update_area(area_id, tmx_string)")),(0,i.kt)("p",null,"Overwrites all objects, tiles, and custom properties for the area, clients will be updated at the end of the tick."),(0,i.kt)("h3",{id:"netclone_areaarea_id-new_area_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.clone_area(area_id, new_area_id)")),(0,i.kt)("p",null,"Creates a copy of an area. Includes objects and tiles."),(0,i.kt)("h3",{id:"netremove_areaarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.remove_area(area_id)")),(0,i.kt)("p",null,"Unloads an area, any players in this area are kicked."),(0,i.kt)("h3",{id:"netarea_to_stringarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.area_to_string(area_id)")),(0,i.kt)("p",null,"Returns a tmx string for an area."),(0,i.kt)("h3",{id:"netget_widtharea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_width(area_id)")),(0,i.kt)("p",null,"Returns the width of an area in tiles."),(0,i.kt)("h3",{id:"netget_heightarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_height(area_id)")),(0,i.kt)("p",null,"Returns the height of an area in tiles."),(0,i.kt)("h3",{id:"netget_layer_countarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_layer_count(area_id)")),(0,i.kt)("p",null,"Returns the number of layers within an area."),(0,i.kt)("h3",{id:"netget_tile_widtharea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_tile_width(area_id)")),(0,i.kt)("p",null,"Returns the screen width of a tile in pixels."),(0,i.kt)("h3",{id:"netget_tile_heightarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_tile_height(area_id)")),(0,i.kt)("p",null,"Returns the screen height of a tile in pixels."),(0,i.kt)("h3",{id:"netget_area_custom_propertiesarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_area_custom_properties(area_id)")),(0,i.kt)("p",null,"Returns a table containing custom properties with property names as keys."),(0,i.kt)("h3",{id:"netget_area_custom_propertyarea_id-name"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_area_custom_property(area_id, name)")),(0,i.kt)("p",null,"Returns a string value for the property matching the name."),(0,i.kt)("h3",{id:"netset_area_custom_propertyarea_id-name-value"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_area_custom_property(area_id, name, value)")),(0,i.kt)("p",null,"Sets a value for the property matching the name."),(0,i.kt)("h3",{id:"netget_area_namearea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_area_name(area_id)")),(0,i.kt)("p",null,"Returns the name of the area, visible to the client."),(0,i.kt)("h3",{id:"netset_area_namearea_id-name"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_area_name(area_id, name)")),(0,i.kt)("p",null,"Sets the name of the area, visible to the client."),(0,i.kt)("h3",{id:"netget_songarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_song(area_id)")),(0,i.kt)("p",null,"Returns the path of the area's song."),(0,i.kt)("h3",{id:"netset_songarea_id-path"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_song(area_id, path)")),(0,i.kt)("p",null,"Changes the song for the area, players will be updated at the end of the tick."),(0,i.kt)("h3",{id:"netget_backgroundarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_background(area_id)")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"{ texture_path: string, animation_path: string }")),(0,i.kt)("h3",{id:"netget_background_velocityarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_background_velocity(area_id)")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"{ x: number, y: number }")),(0,i.kt)("h3",{id:"netget_background_parallaxarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_background_parallax(area_id)")),(0,i.kt)("p",null,"Returns a number representing how strongly the player's position affects the background."),(0,i.kt)("h3",{id:"netset_backgroundarea_id-texture_path-animation_path-vel_x-vel_y-parallax"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_background(area_id, texture_path, animation_path?, vel_x?, vel_y?, parallax?)")),(0,i.kt)("p",null,"Modifies background properties all at once, players will be updated at the end of the tick."),(0,i.kt)("h3",{id:"netget_foregroundarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_foreground(area_id)")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"{ texture_path: string, animation_path: string }")),(0,i.kt)("h3",{id:"netget_foreground_velocityarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_foreground_velocity(area_id)")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"{ x: number, y: number }")),(0,i.kt)("h3",{id:"netget_foreground_parallaxarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_foreground_parallax(area_id)")),(0,i.kt)("p",null,"Returns a number representing how strongly the player's position affects the foreground."),(0,i.kt)("h3",{id:"netset_foregroundarea_id-texture_path-animation_path-vel_x-vel_y-parallax"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_foreground(area_id, texture_path, animation_path?, vel_x?, vel_y?, parallax?)")),(0,i.kt)("p",null,"Modifies foreground properties all at once, players will be updated at the end of the tick."),(0,i.kt)("h3",{id:"netget_spawn_positionarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_spawn_position(area_id)")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"{ x, y, z }")),(0,i.kt)("p",null,"Defaults to either the Home Warp or (0, 0, 0)"),(0,i.kt)("h3",{id:"netset_spawn_positionarea_id-x-y-z"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_spawn_position(area_id, x, y, z)")),(0,i.kt)("p",null,"Sets the default spawn position for players entering the area."),(0,i.kt)("h3",{id:"netget_spawn_directionarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_spawn_direction(area_id)")),(0,i.kt)("p",null,"Returns a string representing the spawn direction."),(0,i.kt)("p",null,"Defaults the Home Warp's ",(0,i.kt)("inlineCode",{parentName:"p"},"Direction")," custom property."),(0,i.kt)("h3",{id:"netset_spawn_directionarea_id-direction"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_spawn_direction(area_id, direction)")),(0,i.kt)("p",null,"Sets the default spawn direction for players entering the area."),(0,i.kt)("h3",{id:"netlist_tilesetsarea_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.list_tilesets(area_id)")),(0,i.kt)("p",null,"Returns a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"tileset_path"),"s"),(0,i.kt)("h3",{id:"netget_tilesetarea_id-tileset_path"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_tileset(area_id, tileset_path)")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"{ path, first_gid }?")),(0,i.kt)("h3",{id:"netget_tileset_for_tilearea_id-tile_gid"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_tileset_for_tile(area_id, tile_gid)")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"{ path, first_gid }?")),(0,i.kt)("p",null,"Note: The same ",(0,i.kt)("inlineCode",{parentName:"p"},"tile_gid")," can return different values for different areas."),(0,i.kt)("h3",{id:"netget_tilearea_id-x-y-z"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_tile(area_id, x, y, z)")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"{ gid: number, flipped_horizontally: bool, flipped_vertically: bool, rotated: bool }")),(0,i.kt)("h3",{id:"netset_tilearea_id-x-y-z-tile_gid-flip_h-flip_v-rotate"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_tile(area_id, x, y, z, tile_gid, flip_h?, flip_v?, rotate?)")),(0,i.kt)("p",null,"Sets the tile at the specified position, updates are merged and sent to players at the end of the tick."),(0,i.kt)("h3",{id:"netprovide_assetarea_id-path"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.provide_asset(area_id, path)")),(0,i.kt)("p",null,"Marks the asset as a dependency for the area, forcing joining players to download the asset before being able to play."),(0,i.kt)("p",null,"Useful for avoiding lag spikes during gameplay with dynamically loaded large assets. (Playing sound effects)"),(0,i.kt)("h3",{id:"netplay_soundarea_id-path"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.play_sound(area_id, path)")),(0,i.kt)("p",null,"Plays a sound for every player within the area."))}u.isMDXComponent=!0}}]);