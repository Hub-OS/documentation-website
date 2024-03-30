"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1683],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),s=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},_="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),_=s(a),u=n,c=_["".concat(o,".").concat(u)]||_[u]||m[u]||r;return a?i.createElement(c,p(p({ref:t},d),{},{components:a})):i.createElement(c,p({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[_]="string"==typeof e?e:n,p[1]=l;for(var s=2;s<r;s++)p[s]=a[s];return i.createElement.apply(null,p)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3943:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=a(7462),n=(a(7294),a(3905));const r={},p="Widgets",l={unversionedId:"server/lua-api/widgets",id:"server/lua-api/widgets",title:"Widgets",description:"Net.isplayerbusy(player_id)",source:"@site/docs/02-server/04-lua-api/06-widgets.md",sourceDirName:"02-server/04-lua-api",slug:"/server/lua-api/widgets",permalink:"/server/lua-api/widgets",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/02-server/04-lua-api/06-widgets.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"serverSidebar",previous:{title:"Objects",permalink:"/server/lua-api/objects"},next:{title:"Players",permalink:"/server/lua-api/players"}},o={},s=[{value:"<code>Net.is_player_busy(player_id)</code>",id:"netis_player_busyplayer_id",level:3},{value:"<code>Net.is_player_in_widget(player_id)</code>",id:"netis_player_in_widgetplayer_id",level:3},{value:"<code>Net.is_player_shopping(player_id)</code>",id:"netis_player_shoppingplayer_id",level:3},{value:"<code>Net.hide_hud(player_id)</code>",id:"nethide_hudplayer_id",level:3},{value:"<code>Net.show_hud(player_id)</code>",id:"netshow_hudplayer_id",level:3},{value:"<code>Net.message_player(player_id, message, textbox_options)</code>",id:"netmessage_playerplayer_id-message-textbox_options",level:3},{value:"<code>Net.question_player(player_id, question)</code>",id:"netquestion_playerplayer_id-question",level:3},{value:"<code>Net.quiz_player(player_id, option_a?, option_b?, option_c?, textbox_options)</code>",id:"netquiz_playerplayer_id-option_a-option_b-option_c-textbox_options",level:3},{value:"<code>Net.prompt_player(player_id, character_limit?, default_text?)</code>",id:"netprompt_playerplayer_id-character_limit-default_text",level:3},{value:"<code>Net.open_board(player_id, board_name, color, posts, open_instantly?)</code>",id:"netopen_boardplayer_id-board_name-color-posts-open_instantly",level:3},{value:"<code>Net.prepend_posts(player_id, posts, post_id?)</code>",id:"netprepend_postsplayer_id-posts-post_id",level:3},{value:"<code>Net.append_posts(player_id, posts, post_id?)</code>",id:"netappend_postsplayer_id-posts-post_id",level:3},{value:"<code>Net.remove_post(player_id, post_id)</code>",id:"netremove_postplayer_id-post_id",level:3},{value:"<code>Net.close_board(player_id)</code>",id:"netclose_boardplayer_id",level:3},{value:"<code>Net.open_shop(player_id, items, mug_texture_path?, mug_animation_path?)</code>",id:"netopen_shopplayer_id-items-mug_texture_path-mug_animation_path",level:3},{value:"<code>Net.set_shop_message(player_id, message)</code>",id:"netset_shop_messageplayer_id-message",level:3},{value:"<code>Net.update_shop_item(player_id, item_data)</code>",id:"netupdate_shop_itemplayer_id-item_data",level:3},{value:"<code>Net.remove_shop_item(player_id, item_id)</code>",id:"netremove_shop_itemplayer_id-item_id",level:3},{value:"<code>Net.create_sprite({ player_id?, parent_id, parent_point?, x?, y?, layer?, texture_path, animation_path?, animation? })</code>",id:"netcreate_sprite-player_id-parent_id-parent_point-x-y-layer-texture_path-animation_path-animation-",level:3},{value:"<code>Net.animate_sprite(sprite_id, state_name, loop?)</code>",id:"netanimate_spritesprite_id-state_name-loop",level:3},{value:"<code>Net.delete_sprite(sprite_id)</code>",id:"netdelete_spritesprite_id",level:3},{value:"<code>Net.set_player_map_color(player_id, color)</code>",id:"netset_player_map_colorplayer_id-color",level:3},{value:"<code>Net.set_bot_map_color(bot_id, color)</code>",id:"netset_bot_map_colorbot_id-color",level:3},{value:"Textbox Options",id:"textbox-options",level:2},{value:"<code>Net.refer_server(player_id, name, address)</code>",id:"netrefer_serverplayer_id-name-address",level:3},{value:"<code>Net.refer_package(player_id, package_id)</code>",id:"netrefer_packageplayer_id-package_id",level:3},{value:"<code>Net.offer_package(player_id, package_id)</code>",id:"netoffer_packageplayer_id-package_id",level:3}],d={toc:s},_="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(_,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"widgets"},"Widgets"),(0,n.kt)("h3",{id:"netis_player_busyplayer_id"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.is_player_busy(player_id)")),(0,n.kt)("p",null,"Returns true if the player is in a server sent battle, or if a board, shop, or textbox is open."),(0,n.kt)("h3",{id:"netis_player_in_widgetplayer_id"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.is_player_in_widget(player_id)")),(0,n.kt)("p",null,"Returns true if a board, shop, or textbox is open."),(0,n.kt)("h3",{id:"netis_player_shoppingplayer_id"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.is_player_shopping(player_id)")),(0,n.kt)("p",null,"Returns true if a shop is open."),(0,n.kt)("h3",{id:"nethide_hudplayer_id"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.hide_hud(player_id)")),(0,n.kt)("p",null,"Hides the HUD for the specified player."),(0,n.kt)("h3",{id:"netshow_hudplayer_id"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.show_hud(player_id)")),(0,n.kt)("p",null,"Makes the HUD visible for the specified player."),(0,n.kt)("h3",{id:"netmessage_playerplayer_id-message-textbox_options"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.message_player(player_id, message, textbox_options)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"message"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"textbox_options"),": ",(0,n.kt)("a",{parentName:"li",href:"#textbox-options"},"Textbox Options"))),(0,n.kt)("p",null,"Displays a textbox with the message and mug."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/server/lua-api/events#textbox_response"},"textbox_response")," or the ",(0,n.kt)("a",{parentName:"p",href:"/server/lua-api/async#asyncmessage_playerplayer_id-message-mug_texture_path-mug_animation_path"},"async")," version of this function for handling responses."),(0,n.kt)("h3",{id:"netquestion_playerplayer_id-question"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.question_player(player_id, question)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"question"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"textbox_options"),": ",(0,n.kt)("a",{parentName:"li",href:"#textbox-options"},"Textbox Options"))),(0,n.kt)("p",null,"Displays a textbox with a Yes / No input after the message."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/server/lua-api/events#textbox_response"},"textbox_response")," or the ",(0,n.kt)("a",{parentName:"p",href:"/server/lua-api/async#asyncquestion_playerplayer_id-question-mug_texture_path-mug_animation_path%3E"},"async")," version of this function for handling responses."),(0,n.kt)("h3",{id:"netquiz_playerplayer_id-option_a-option_b-option_c-textbox_options"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.quiz_player(player_id, option_a?, option_b?, option_c?, textbox_options)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"option_a"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"option_b"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"option_c"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"textbox_options"),": ",(0,n.kt)("a",{parentName:"li",href:"#textbox-options"},"Textbox Options"))),(0,n.kt)("p",null,"Displays a textbox with selectable options."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/server/lua-api/events#textbox_response"},"textbox_response")," or the ",(0,n.kt)("a",{parentName:"p",href:"/server/lua-api/async#asyncquiz_playerplayer_id-option_a-option_b-option_c-mug_texture_path-mug_animation_path%3E"},"async")," version of this function for handling responses."),(0,n.kt)("h3",{id:"netprompt_playerplayer_id-character_limit-default_text"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.prompt_player(player_id, character_limit?, default_text?)")),(0,n.kt)("p",null,"Displays a textbox that accepts text input."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/server/lua-api/events#textbox_response"},"textbox_response")," or the ",(0,n.kt)("a",{parentName:"p",href:"/server/lua-api/async#asyncprompt_playerplayer_id-character_limit-default_text"},"async")," version of this function for handling responses."),(0,n.kt)("h3",{id:"netopen_boardplayer_id-board_name-color-posts-open_instantly"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.open_board(player_id, board_name, color, posts, open_instantly?)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"color"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"{ r: 0-255, g: 0-255, b: 0-255 }")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"posts"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"{ id: string, read: bool?, title: string?, author: string? }[]"))),(0,n.kt)("p",null,"Returns EventEmitter, re-emits ",(0,n.kt)("inlineCode",{parentName:"p"},"post_selection"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"post_request"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"board_close")," server events."),(0,n.kt)("h3",{id:"netprepend_postsplayer_id-posts-post_id"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.prepend_posts(player_id, posts, post_id?)")),(0,n.kt)("p",null,"Issues may arise when multiple scripts create boards at the same time."),(0,n.kt)("h3",{id:"netappend_postsplayer_id-posts-post_id"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.append_posts(player_id, posts, post_id?)")),(0,n.kt)("p",null,"Issues may arise when multiple scripts create boards at the same time."),(0,n.kt)("h3",{id:"netremove_postplayer_id-post_id"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.remove_post(player_id, post_id)")),(0,n.kt)("p",null,"Issues may arise when multiple scripts create boards at the same time."),(0,n.kt)("h3",{id:"netclose_boardplayer_id"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.close_board(player_id)")),(0,n.kt)("p",null,"Closes the currently opened board for the player."),(0,n.kt)("h3",{id:"netopen_shopplayer_id-items-mug_texture_path-mug_animation_path"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.open_shop(player_id, items, mug_texture_path?, mug_animation_path?)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"items"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"{ id: string?, name: string, price: number | string }[]"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("inlineCode",{parentName:"li"},"id")," is unset, the ",(0,n.kt)("inlineCode",{parentName:"li"},"name")," is used as the ",(0,n.kt)("inlineCode",{parentName:"li"},"id")," instead.")))),(0,n.kt)("p",null,"Returns EventEmitter, re-emits ",(0,n.kt)("inlineCode",{parentName:"p"},"shop_purchase"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"shop_description_request"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"shop_leave"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"shop_close")," server events."),(0,n.kt)("h3",{id:"netset_shop_messageplayer_id-message"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.set_shop_message(player_id, message)")),(0,n.kt)("p",null,"Sets the default text for the shop keeper. Ignored if no shop is open."),(0,n.kt)("h3",{id:"netupdate_shop_itemplayer_id-item_data"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.update_shop_item(player_id, item_data)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"item_data"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"{ id: string?, name: string, price: number | string }"))),(0,n.kt)("p",null,"Replaces the ",(0,n.kt)("inlineCode",{parentName:"p"},"item_data")," for the item matching the ",(0,n.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,n.kt)("h3",{id:"netremove_shop_itemplayer_id-item_id"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.remove_shop_item(player_id, item_id)")),(0,n.kt)("p",null,"Delete the item from the open shop."),(0,n.kt)("h3",{id:"netcreate_sprite-player_id-parent_id-parent_point-x-y-layer-texture_path-animation_path-animation-"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.create_sprite({ player_id?, parent_id, parent_point?, x?, y?, layer?, texture_path, animation_path?, animation? })")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"player_id")," restricts visibility to this specific player if set."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"parent_id"),' can be "widget", "hud", or an actor_id.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"parent_point")," a point defined in the parent's animation file or built-in point.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'If unset the origin will be used. For "widget" and "hud" the origin is the top left of the screen.'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"y")," offset from ",(0,n.kt)("inlineCode",{parentName:"li"},"parent_point")," in screen pixels."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"layer")," an integer used for sorting sprites relative to the parent.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Smaller numbers display on top of larger numbers, use negatives if you want to display in front of other sprites."),(0,n.kt)("li",{parentName:"ul"},"Positives display under the parent if the parent is an actor."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"animation")," is an animation state, this state will be looped.")),(0,n.kt)("p",null,"Returns sprite_id"),(0,n.kt)("h3",{id:"netanimate_spritesprite_id-state_name-loop"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.animate_sprite(sprite_id, state_name, loop?)")),(0,n.kt)("p",null,"Sets the animation state for the sprite."),(0,n.kt)("h3",{id:"netdelete_spritesprite_id"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.delete_sprite(sprite_id)")),(0,n.kt)("p",null,"Deletes the the sprite."),(0,n.kt)("h3",{id:"netset_player_map_colorplayer_id-color"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.set_player_map_color(player_id, color)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"color"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"{ r: 0-255, g: 0-255, b: 0-255, a?: 0-255 }"))),(0,n.kt)("p",null,"Sets the color of the marker used in the map menu to represent this player. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"{ r: 0, g: 0, b: 0, a: 0 }")),(0,n.kt)("h3",{id:"netset_bot_map_colorbot_id-color"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.set_bot_map_color(bot_id, color)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"color"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"{ r: 0-255, g: 0-255, b: 0-255, a?: 0-255 }"))),(0,n.kt)("p",null,"Sets the color of the marker used in the map menu to represent this bot. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"{ r: 0, g: 0, b: 0, a: 0 }")),(0,n.kt)("h2",{id:"textbox-options"},"Textbox Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'-- note modified syntax: ? marks a field as optional\nlocal textbox_options = {\n  mug? = {\n    texture_path = "/server/assets/[...].png",\n    animation_path = "/server/assets/[...].animation",\n  }\n}\n\nNet.message_player(player_id, message, textbox_options)\n')),(0,n.kt)("h3",{id:"netrefer_serverplayer_id-name-address"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.refer_server(player_id, name, address)")),(0,n.kt)("p",null,"Opens a menu for the player to save the referred server."),(0,n.kt)("h3",{id:"netrefer_packageplayer_id-package_id"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.refer_package(player_id, package_id)")),(0,n.kt)("p",null,"Opens a menu on the client for the player to view and install a package from their preferred package repo."),(0,n.kt)("h3",{id:"netoffer_packageplayer_id-package_id"},(0,n.kt)("inlineCode",{parentName:"h3"},"Net.offer_package(player_id, package_id)")),(0,n.kt)("p",null,"Allows the client to directly download packages from the server."),(0,n.kt)("p",null,"Currently unimplemented on the client."))}m.isMDXComponent=!0}}]);