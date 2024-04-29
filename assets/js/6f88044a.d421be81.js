"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8183],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>j});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var r=a.createContext({}),c=function(e){var t=a.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),b=c(i),_=n,j=b["".concat(r,".").concat(_)]||b[_]||p[_]||o;return i?a.createElement(j,l(l({ref:t},s),{},{components:i})):a.createElement(j,l({ref:t},s))}));function j(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,l=new Array(o);l[0]=_;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d[b]="string"==typeof e?e:n,l[1]=d;for(var c=2;c<o;c++)l[c]=i[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}_.displayName="MDXCreateElement"},2730:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=i(7462),n=(i(7294),i(3905));const o={},l="Objects",d={unversionedId:"server/lua-api/objects",id:"server/lua-api/objects",title:"Objects",description:"Positions and sizes are in tile space. To get the center of a tile add 0.5",source:"@site/docs/02-server/04-lua-api/05-objects.md",sourceDirName:"02-server/04-lua-api",slug:"/server/lua-api/objects",permalink:"/server/lua-api/objects",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/02-server/04-lua-api/05-objects.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"serverSidebar",previous:{title:"Areas",permalink:"/server/lua-api/areas"},next:{title:"Widgets",permalink:"/server/lua-api/widgets"}},r={},c=[{value:"<code>Net.list_objects(area_id)</code>",id:"netlist_objectsarea_id",level:3},{value:"<code>Net.get_object_by_id(area_id, object_id)</code>",id:"netget_object_by_idarea_id-object_id",level:3},{value:"<code>Net.get_object_by_name(area_id, name)</code>",id:"netget_object_by_namearea_id-name",level:3},{value:"<code>Net.create_object(area_id, object_options)</code>",id:"netcreate_objectarea_id-object_options",level:3},{value:"<code>Net.remove_object(area_id, object_id)</code>",id:"netremove_objectarea_id-object_id",level:3},{value:"<code>Net.set_object_name(area_id, object_id, name)</code>",id:"netset_object_namearea_id-object_id-name",level:3},{value:"<code>Net.set_object_class(area_id, object_id, class)</code>",id:"netset_object_classarea_id-object_id-class",level:3},{value:"<code>Net.set_object_type(area_id, object_id, type)</code>",id:"netset_object_typearea_id-object_id-type",level:3},{value:"<code>Net.set_object_custom_property(area_id, object_id, name, property_value)</code>",id:"netset_object_custom_propertyarea_id-object_id-name-property_value",level:3},{value:"<code>Net.resize_object(area_id, object_id, width, height)</code>",id:"netresize_objectarea_id-object_id-width-height",level:3},{value:"<code>Net.set_object_rotation(area_id, object_id, rotation)</code>",id:"netset_object_rotationarea_id-object_id-rotation",level:3},{value:"<code>Net.set_object_visibility(area_id, object_id, visibility)</code>",id:"netset_object_visibilityarea_id-object_id-visibility",level:3},{value:"<code>Net.move_object(area_id, object_id, x, y, layer)</code>",id:"netmove_objectarea_id-object_id-x-y-layer",level:3},{value:"<code>Net.set_object_data(area_id, object_id, object_data)</code>",id:"netset_object_dataarea_id-object_id-object_data",level:3},{value:"TiledObjectOptions",id:"tiledobjectoptions",level:2},{value:"TiledObject",id:"tiledobject",level:2},{value:"TiledObjectData",id:"tiledobjectdata",level:2},{value:"TiledBasicObjectData",id:"tiledbasicobjectdata",level:2},{value:"TiledPolygonObjectData",id:"tiledpolygonobjectdata",level:2},{value:"TiledTileObjectData",id:"tiledtileobjectdata",level:2},{value:"TiledCustomProperties",id:"tiledcustomproperties",level:2}],s={toc:c},b="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(b,(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"objects"},"Objects"),(0,n.kt)("p",null,"Positions and sizes are in tile space. To get the center of a tile add ",(0,n.kt)("inlineCode",{parentName:"p"},"0.5")),(0,n.kt)("h3",{id:"netlist_objectsarea_id"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.list_objects(area_id)")),(0,n.kt)("p",null,"Returns a list of ",(0,n.kt)("inlineCode",{parentName:"p"},"object_id"),"s."),(0,n.kt)("h3",{id:"netget_object_by_idarea_id-object_id"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.get_object_by_id(area_id, object_id)")),(0,n.kt)("p",null,"Returns ",(0,n.kt)("a",{parentName:"p",href:"#tiledobject"},"TiledObject")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"nil")),(0,n.kt)("h3",{id:"netget_object_by_namearea_id-name"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.get_object_by_name(area_id, name)")),(0,n.kt)("p",null,"Returns ",(0,n.kt)("a",{parentName:"p",href:"#tiledobject"},"TiledObject")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"nil")),(0,n.kt)("h3",{id:"netcreate_objectarea_id-object_options"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.create_object(area_id, object_options)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"object_options"),": ",(0,n.kt)("a",{parentName:"li",href:"#tiledobjectoptions"},"TiledObjectOptions"))),(0,n.kt)("p",null,"Returns an ",(0,n.kt)("inlineCode",{parentName:"p"},"object_id")),(0,n.kt)("h3",{id:"netremove_objectarea_id-object_id"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.remove_object(area_id, object_id)")),(0,n.kt)("p",null,"Removes an object, clients will be updated at the end of the tick."),(0,n.kt)("h3",{id:"netset_object_namearea_id-object_id-name"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.set_object_name(area_id, object_id, name)")),(0,n.kt)("p",null,"Renames an object."),(0,n.kt)("h3",{id:"netset_object_classarea_id-object_id-class"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.set_object_class(area_id, object_id, class)")),(0,n.kt)("p",null,"Changes the object's class, clients will be updated at the end of the tick."),(0,n.kt)("h3",{id:"netset_object_typearea_id-object_id-type"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.set_object_type(area_id, object_id, type)")),(0,n.kt)("p",null,"Deprecated. Use set_object_class instead."),(0,n.kt)("h3",{id:"netset_object_custom_propertyarea_id-object_id-name-property_value"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.set_object_custom_property(area_id, object_id, name, property_value)")),(0,n.kt)("p",null,"Modifies an object's custom property, clients will be updated at the end of the tick."),(0,n.kt)("h3",{id:"netresize_objectarea_id-object_id-width-height"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.resize_object(area_id, object_id, width, height)")),(0,n.kt)("p",null,"Resizes the object, clients will be updated at the end of the tick."),(0,n.kt)("h3",{id:"netset_object_rotationarea_id-object_id-rotation"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.set_object_rotation(area_id, object_id, rotation)")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"rotation")," is in degrees, clients will be updated at the end of the tick."),(0,n.kt)("h3",{id:"netset_object_visibilityarea_id-object_id-visibility"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.set_object_visibility(area_id, object_id, visibility)")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"visibility")," is a bool, the object will be invisible if set to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),". Clients will be updated at the end of the tick."),(0,n.kt)("h3",{id:"netmove_objectarea_id-object_id-x-y-layer"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.move_object(area_id, object_id, x, y, layer)")),(0,n.kt)("p",null,"Moves the object, clients will be updated at the end of the tick."),(0,n.kt)("h3",{id:"netset_object_dataarea_id-object_id-object_data"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.set_object_data(area_id, object_id, object_data)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"object_data"),": ",(0,n.kt)("a",{parentName:"li",href:"#tiledobjectdata"},"TiledObjectData"))),(0,n.kt)("p",null,"Allows for the type and shape of the object to be adjusted. Clients will be updated at the end of the tick."),(0,n.kt)("h2",{id:"tiledobjectoptions"},"TiledObjectOptions"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"---@class TiledObjectOptions\n---@field id? number\n---@field name? string\n---@field class? string deprecated\n---@field type? string\n---@field visible? boolean\n---@field x? number\n---@field y? number\n---@field z? number\n---@field width? number\n---@field height? number\n---@field rotation? number\n---@field data TiledObjectData\n---@field custom_properties? TiledCustomProperties\n")),(0,n.kt)("h2",{id:"tiledobject"},"TiledObject"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"---@class TiledObject\n---@field id number\n---@field name string\n---@field class string deprecated\n---@field type string\n---@field visible boolean\n---@field x number\n---@field y number\n---@field z number\n---@field width number\n---@field height number\n---@field rotation number\n---@field data TiledObjectData\n---@field custom_properties TiledCustomProperties\n")),(0,n.kt)("h2",{id:"tiledobjectdata"},"TiledObjectData"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"---@alias TiledObjectData TiledBasicObjectData | TiledPolygonObjectData | TiledTileObjectData\n")),(0,n.kt)("h2",{id:"tiledbasicobjectdata"},"TiledBasicObjectData"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'---@class TiledBasicObjectData\n---@field type "point" | "rect" | "ellipse"\n')),(0,n.kt)("h2",{id:"tiledpolygonobjectdata"},"TiledPolygonObjectData"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'---@class TiledPolygonObjectData\n---@field type "polygon" | "polyline"\n---@field points { x: number, y: number }[],\n')),(0,n.kt)("h2",{id:"tiledtileobjectdata"},"TiledTileObjectData"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'---@class TiledTileObjectData\n---@field type "tile"\n---@field gid number\n---@field flipped_horizontally boolean\n---@field flipped_vertically boolean\n')),(0,n.kt)("h2",{id:"tiledcustomproperties"},"TiledCustomProperties"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"---@alias TiledCustomProperties table<string, string>\n")))}p.isMDXComponent=!0}}]);