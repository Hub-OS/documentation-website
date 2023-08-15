"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[272],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>_});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(a),m=i,_=s["".concat(l,".").concat(m)]||s[m]||u[m]||r;return a?n.createElement(_,o(o({ref:t},d),{},{components:a})):n.createElement(_,o({ref:t},d))}));function _(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3835:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={},o="Action",c={unversionedId:"client/lua-api/action",id:"client/lua-api/action",title:"Action",description:"While actions execute, their owners will stop auto reserving tiles.",source:"@site/docs/01-client/02-lua-api/16-action.md",sourceDirName:"01-client/02-lua-api",slug:"/client/lua-api/action",permalink:"/client/lua-api/action",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/16-action.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Artifact",permalink:"/client/lua-api/artifact"},next:{title:"TurnGauge",permalink:"/client/lua-api/turn-gauge"}},l={},p=[{value:"<code>Action.new(entity, state)</code>",id:"actionnewentity-state",level:3},{value:"<code>Action.from_card(entity, card_properties)</code>",id:"actionfrom_cardentity-card_properties",level:3},{value:"<code>action:owner()</code>",id:"actionowner",level:3},{value:"<code>action:set_lockout(lockout)</code>",id:"actionset_lockoutlockout",level:3},{value:"<code>action:create_step()</code>",id:"actioncreate_step",level:3},{value:"<code>action:create_attachment(point_name)</code>",id:"actioncreate_attachmentpoint_name",level:3},{value:"<code>action:override_animation_frames(frame_data)</code>",id:"actionoverride_animation_framesframe_data",level:3},{value:"<code>action:add_anim_action(frame_index, callback)</code>",id:"actionadd_anim_actionframe_index-callback",level:3},{value:"<code>action:end_action()</code>",id:"actionend_action",level:3},{value:"<code>action:copy_card_properties()</code>",id:"actioncopy_card_properties",level:3},{value:"<code>action:set_card_properties(card_properties)</code>",id:"actionset_card_propertiescard_properties",level:3},{value:"<code>action.on_execute_func = function(self)</code>",id:"actionon_execute_func--functionself",level:3},{value:"<code>action.on_update_func = function(self)</code>",id:"actionon_update_func--functionself",level:3},{value:"<code>action.on_animation_end_func = function(self)</code>",id:"actionon_animation_end_func--functionself",level:3},{value:"<code>action.on_end_func = function(self)</code>",id:"actionon_end_func--functionself",level:3},{value:"<code>action.can_move_to_func = function(tile)</code>",id:"actioncan_move_to_func--functiontile",level:3},{value:"Attachment",id:"attachment",level:2},{value:"<code>attachment:create_attachment(point_name)</code>",id:"attachmentcreate_attachmentpoint_name",level:3},{value:"<code>attachment:sprite()</code>",id:"attachmentsprite",level:3},{value:"<code>attachment:animation()</code>",id:"attachmentanimation",level:3},{value:"Step",id:"step",level:2},{value:"<code>step:complete_step()</code>",id:"stepcomplete_step",level:3},{value:"<code>step.on_update_func = function(self)</code>",id:"stepon_update_func--functionself",level:3},{value:"CardProperties",id:"cardproperties",level:2},{value:"<code>CardProperties.new()</code>",id:"cardpropertiesnew",level:3},{value:"<code>CardProperties.from_package(package_id, code?)</code>",id:"cardpropertiesfrom_packagepackage_id-code",level:3},{value:"<code>card_properties.short_name</code>",id:"card_propertiesshort_name",level:3},{value:"<code>card_properties.damage</code>",id:"card_propertiesdamage",level:3},{value:"<code>card_properties.code</code>",id:"card_propertiescode",level:3},{value:"<code>card_properties.element</code>",id:"card_propertieselement",level:3},{value:"<code>card_properties.secondary_element</code>",id:"card_propertiessecondary_element",level:3},{value:"<code>card_properties.card_class</code>",id:"card_propertiescard_class",level:3},{value:"<code>card_properties.hit_flags</code>",id:"card_propertieshit_flags",level:3},{value:"<code>card_properties.can_boost</code>",id:"card_propertiescan_boost",level:3},{value:"<code>card_properties.counterable</code>",id:"card_propertiescounterable",level:3},{value:"<code>card_properties.time_freeze</code>",id:"card_propertiestime_freeze",level:3},{value:"<code>card_properties.skip_time_freeze_intro</code>",id:"card_propertiesskip_time_freeze_intro",level:3},{value:"<code>card_properties.meta_classes</code>",id:"card_propertiesmeta_classes",level:3},{value:"Buster",id:"buster",level:2},{value:"<code>Buster.new(player, charged, damage)</code>",id:"busternewplayer-charged-damage",level:3}],d={toc:p},s="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(s,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"action"},"Action"),(0,i.kt)("p",null,"While actions execute, their owners will stop auto reserving tiles."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/player"},"Players"),", ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/character"},"Characters"),", and ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/obstacle"},"Obstacles")," automatically reserve tiles outside of executing actions."),(0,i.kt)("h3",{id:"actionnewentity-state"},(0,i.kt)("inlineCode",{parentName:"h3"},"Action.new(entity, state)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entity"),": the ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity"},"Entity")," to tie the action to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state"),": string, the animation state to play when the action executes.")),(0,i.kt)("h3",{id:"actionfrom_cardentity-card_properties"},(0,i.kt)("inlineCode",{parentName:"h3"},"Action.from_card(entity, card_properties)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entity"),": the ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity"},"Entity")," to tie the action to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"card_properties"),": ",(0,i.kt)("a",{parentName:"li",href:"#cardproperties"},"CardProperties"))),(0,i.kt)("h3",{id:"actionowner"},(0,i.kt)("inlineCode",{parentName:"h3"},"action:owner()")),(0,i.kt)("p",null,"Returns the ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/entity"},"Entity")," tied to this action"),(0,i.kt)("h3",{id:"actionset_lockoutlockout"},(0,i.kt)("inlineCode",{parentName:"h3"},"action:set_lockout(lockout)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lockout"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"make_animation_lockout()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Action completes when the animation ends."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"make_sequence_lockout()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Action completes when the action runs out of ",(0,i.kt)("a",{parentName:"li",href:"#actioncreate_step"},"Steps")," to execute"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"make_async_lockout(duration)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When the animation ends, entities regain movement control. Attacks must wait for the duration to end.")))))),(0,i.kt)("h3",{id:"actioncreate_step"},(0,i.kt)("inlineCode",{parentName:"h3"},"action:create_step()")),(0,i.kt)("p",null,"Returns a new ",(0,i.kt)("a",{parentName:"p",href:"#step"},"Step")),(0,i.kt)("h3",{id:"actioncreate_attachmentpoint_name"},(0,i.kt)("inlineCode",{parentName:"h3"},"action:create_attachment(point_name)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"point_name"),": string, name of a point in the animation to anchor the attachment to")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("a",{parentName:"p",href:"#attachment"},"Attachment")),(0,i.kt)("h3",{id:"actionoverride_animation_framesframe_data"},(0,i.kt)("inlineCode",{parentName:"h3"},"action:override_animation_frames(frame_data)")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/animation#animationderive_statestate-frame_data"},"animation:derive_state()")),(0,i.kt)("h3",{id:"actionadd_anim_actionframe_index-callback"},(0,i.kt)("inlineCode",{parentName:"h3"},"action:add_anim_action(frame_index, callback)")),(0,i.kt)("p",null,"Same as calling ",(0,i.kt)("inlineCode",{parentName:"p"},"action:owner():on_frame(frame_index, callback)")," within ",(0,i.kt)("a",{parentName:"p",href:"#actionon_execute_func--functionself"},"action.on_execute_func")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/animation#animationon_frameframe_index-function-do_once"},"animation:on_frame()")),(0,i.kt)("h3",{id:"actionend_action"},(0,i.kt)("inlineCode",{parentName:"h3"},"action:end_action()")),(0,i.kt)("p",null,"Calls ",(0,i.kt)("a",{parentName:"p",href:"#actionon_end_func--functionself"},"action.on_end_func")),(0,i.kt)("p",null,"Stops execution and deletes the action."),(0,i.kt)("h3",{id:"actioncopy_card_properties"},(0,i.kt)("inlineCode",{parentName:"h3"},"action:copy_card_properties()")),(0,i.kt)("p",null,"Returns a copy of the action's card properties."),(0,i.kt)("p",null,"Experimental. Replacement / removal is under consideration."),(0,i.kt)("h3",{id:"actionset_card_propertiescard_properties"},(0,i.kt)("inlineCode",{parentName:"h3"},"action:set_card_properties(card_properties)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"card_properties"),": ",(0,i.kt)("a",{parentName:"li",href:"#cardproperties"},"CardProperties"))),(0,i.kt)("p",null,"Sets the the action's card properties, will be overwritten when queued if the action is tied to a card."),(0,i.kt)("p",null,"Experimental. Replacement / removal is under consideration."),(0,i.kt)("h3",{id:"actionon_execute_func--functionself"},(0,i.kt)("inlineCode",{parentName:"h3"},"action.on_execute_func = function(self)")),(0,i.kt)("p",null,"Called when the action begins execution."),(0,i.kt)("h3",{id:"actionon_update_func--functionself"},(0,i.kt)("inlineCode",{parentName:"h3"},"action.on_update_func = function(self)")),(0,i.kt)("p",null,"Called while the action is executing."),(0,i.kt)("h3",{id:"actionon_animation_end_func--functionself"},(0,i.kt)("inlineCode",{parentName:"h3"},"action.on_animation_end_func = function(self)")),(0,i.kt)("p",null,"Called when the action's animation ends."),(0,i.kt)("h3",{id:"actionon_end_func--functionself"},(0,i.kt)("inlineCode",{parentName:"h3"},"action.on_end_func = function(self)")),(0,i.kt)("p",null,"Called when the action ends execution."),(0,i.kt)("h3",{id:"actioncan_move_to_func--functiontile"},(0,i.kt)("inlineCode",{parentName:"h3"},"action.can_move_to_func = function(tile)")),(0,i.kt)("p",null,"Override's the owner's ","[can_move_to_func]"," while executing."),(0,i.kt)("p",null,"Ignored on async actions when the entity regains control."),(0,i.kt)("h2",{id:"attachment"},"Attachment"),(0,i.kt)("h3",{id:"attachmentcreate_attachmentpoint_name"},(0,i.kt)("inlineCode",{parentName:"h3"},"attachment:create_attachment(point_name)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"point_name"),": string, name of a point in this attachment's animation to anchor the new attachment to")),(0,i.kt)("p",null,"Returns an Attachment"),(0,i.kt)("h3",{id:"attachmentsprite"},(0,i.kt)("inlineCode",{parentName:"h3"},"attachment:sprite()")),(0,i.kt)("p",null,"Returns a reference to the attachment's ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/sprite"},"Sprite")),(0,i.kt)("h3",{id:"attachmentanimation"},(0,i.kt)("inlineCode",{parentName:"h3"},"attachment:animation()")),(0,i.kt)("p",null,"Returns a reference to the attachment's ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/animation"},"Animation")),(0,i.kt)("h2",{id:"step"},"Step"),(0,i.kt)("h3",{id:"stepcomplete_step"},(0,i.kt)("inlineCode",{parentName:"h3"},"step:complete_step()")),(0,i.kt)("p",null,"Marks the step as complete."),(0,i.kt)("h3",{id:"stepon_update_func--functionself"},(0,i.kt)("inlineCode",{parentName:"h3"},"step.on_update_func = function(self)")),(0,i.kt)("p",null,"Called every tick while the associated action is active if this step is not marked as complete, and there are no steps created before this step that haven't been marked as complete."),(0,i.kt)("h2",{id:"cardproperties"},"CardProperties"),(0,i.kt)("h3",{id:"cardpropertiesnew"},(0,i.kt)("inlineCode",{parentName:"h3"},"CardProperties.new()")),(0,i.kt)("p",null,"Returns a new CardProperties table with default values."),(0,i.kt)("h3",{id:"cardpropertiesfrom_packagepackage_id-code"},(0,i.kt)("inlineCode",{parentName:"h3"},"CardProperties.from_package(package_id, code?)")),(0,i.kt)("p",null,"Returns a new CardProperties table using package information."),(0,i.kt)("h3",{id:"card_propertiesshort_name"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.short_name")),(0,i.kt)("p",null,"Displayed during time freeze."),(0,i.kt)("h3",{id:"card_propertiesdamage"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.damage")),(0,i.kt)("p",null,"Displayed during time freeze."),(0,i.kt)("h3",{id:"card_propertiescode"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.code")),(0,i.kt)("h3",{id:"card_propertieselement"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.element")),(0,i.kt)("h3",{id:"card_propertiessecondary_element"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.secondary_element")),(0,i.kt)("h3",{id:"card_propertiescard_class"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.card_class")),(0,i.kt)("h3",{id:"card_propertieshit_flags"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.hit_flags")),(0,i.kt)("h3",{id:"card_propertiescan_boost"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.can_boost")),(0,i.kt)("h3",{id:"card_propertiescounterable"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.counterable")),(0,i.kt)("h3",{id:"card_propertiestime_freeze"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.time_freeze")),(0,i.kt)("p",null,"Enables time freeze for the action."),(0,i.kt)("h3",{id:"card_propertiesskip_time_freeze_intro"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.skip_time_freeze_intro")),(0,i.kt)("h3",{id:"card_propertiesmeta_classes"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.meta_classes")),(0,i.kt)("h2",{id:"buster"},"Buster"),(0,i.kt)("h3",{id:"busternewplayer-charged-damage"},(0,i.kt)("inlineCode",{parentName:"h3"},"Buster.new(player, charged, damage)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"player"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/player"},"Player")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"charged"),": bool, affects hit artifact"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"damage"),": number")),(0,i.kt)("p",null,"Returns a new ",(0,i.kt)("a",{parentName:"p",href:"#action"},"Action")))}u.isMDXComponent=!0}}]);