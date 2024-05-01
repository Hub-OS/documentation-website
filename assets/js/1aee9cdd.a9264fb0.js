"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9803],{5794:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(4848),s=i(8453);const r={},o="Widgets",l={id:"server/lua-api/widgets",title:"Widgets",description:"Net.isplayerbusy(player_id)",source:"@site/docs/02-server/04-lua-api/06-widgets.md",sourceDirName:"02-server/04-lua-api",slug:"/server/lua-api/widgets",permalink:"/server/lua-api/widgets",draft:!1,unlisted:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/02-server/04-lua-api/06-widgets.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"serverSidebar",previous:{title:"Objects",permalink:"/server/lua-api/objects"},next:{title:"Players",permalink:"/server/lua-api/players"}},a={},d=[{value:"<code>Net.is_player_busy(player_id)</code>",id:"netis_player_busyplayer_id",level:3},{value:"<code>Net.is_player_in_widget(player_id)</code>",id:"netis_player_in_widgetplayer_id",level:3},{value:"<code>Net.is_player_shopping(player_id)</code>",id:"netis_player_shoppingplayer_id",level:3},{value:"<code>Net.hide_hud(player_id)</code>",id:"nethide_hudplayer_id",level:3},{value:"<code>Net.show_hud(player_id)</code>",id:"netshow_hudplayer_id",level:3},{value:"<code>Net.message_player(player_id, message, mug_texture_path?, mug_animation_path?)</code>",id:"netmessage_playerplayer_id-message-mug_texture_path-mug_animation_path",level:3},{value:"<code>Net.message_player(player_id, message, textbox_options?)</code>",id:"netmessage_playerplayer_id-message-textbox_options",level:3},{value:"<code>Net.question_player(player_id, question, mug_texture_path?, mug_animation_path?)</code>",id:"netquestion_playerplayer_id-question-mug_texture_path-mug_animation_path",level:3},{value:"<code>Net.question_player(player_id, question, textbox_options?)</code>",id:"netquestion_playerplayer_id-question-textbox_options",level:3},{value:"<code>Net.quiz_player(player_id, option_a?, option_b?, option_c?, mug_texture_path?, mug_animation_path?)</code>",id:"netquiz_playerplayer_id-option_a-option_b-option_c-mug_texture_path-mug_animation_path",level:3},{value:"<code>Net.quiz_player(player_id, option_a?, option_b?, option_c?, textbox_options?)</code>",id:"netquiz_playerplayer_id-option_a-option_b-option_c-textbox_options",level:3},{value:"<code>Net.prompt_player(player_id, character_limit?, default_text?)</code>",id:"netprompt_playerplayer_id-character_limit-default_text",level:3},{value:"<code>Net.open_board(player_id, board_name, color, posts, open_instantly?)</code>",id:"netopen_boardplayer_id-board_name-color-posts-open_instantly",level:3},{value:"<code>Net.prepend_posts(player_id, posts, post_id?)</code>",id:"netprepend_postsplayer_id-posts-post_id",level:3},{value:"<code>Net.append_posts(player_id, posts, post_id?)</code>",id:"netappend_postsplayer_id-posts-post_id",level:3},{value:"<code>Net.remove_post(player_id, post_id)</code>",id:"netremove_postplayer_id-post_id",level:3},{value:"<code>Net.close_board(player_id)</code>",id:"netclose_boardplayer_id",level:3},{value:"<code>Net.open_shop(player_id, shop_items, mug_texture_path?, mug_animation_path?)</code>",id:"netopen_shopplayer_id-shop_items-mug_texture_path-mug_animation_path",level:3},{value:"<code>Net.set_shop_message(player_id, message)</code>",id:"netset_shop_messageplayer_id-message",level:3},{value:"<code>Net.update_shop_item(player_id, shop_item)</code>",id:"netupdate_shop_itemplayer_id-shop_item",level:3},{value:"<code>Net.remove_shop_item(player_id, item_id)</code>",id:"netremove_shop_itemplayer_id-item_id",level:3},{value:"<code>Net.create_sprite(sprite_options)</code>",id:"netcreate_spritesprite_options",level:3},{value:"<code>Net.animate_sprite(sprite_id, state_name, loop?)</code>",id:"netanimate_spritesprite_id-state_name-loop",level:3},{value:"<code>Net.delete_sprite(sprite_id)</code>",id:"netdelete_spritesprite_id",level:3},{value:"<code>Net.set_player_map_color(player_id, color)</code>",id:"netset_player_map_colorplayer_id-color",level:3},{value:"<code>Net.set_bot_map_color(bot_id, color)</code>",id:"netset_bot_map_colorbot_id-color",level:3},{value:"<code>Net.refer_server(player_id, name, address)</code>",id:"netrefer_serverplayer_id-name-address",level:3},{value:"<code>Net.refer_package(player_id, package_id)</code>",id:"netrefer_packageplayer_id-package_id",level:3},{value:"<code>Net.offer_package(player_id, package_id)</code>",id:"netoffer_packageplayer_id-package_id",level:3},{value:"Net.TextureAnimationPair",id:"nettextureanimationpair",level:2},{value:"Net.Color",id:"netcolor",level:2},{value:"Net.TextboxOptions",id:"nettextboxoptions",level:2},{value:"Net.TextStyle",id:"nettextstyle",level:2},{value:"Net.BoardPost",id:"netboardpost",level:2},{value:"Net.ShopItem",id:"netshopitem",level:2},{value:"Net.SpriteOptions",id:"netspriteoptions",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"widgets",children:"Widgets"}),"\n",(0,n.jsx)(t.h3,{id:"netis_player_busyplayer_id",children:(0,n.jsx)(t.code,{children:"Net.is_player_busy(player_id)"})}),"\n",(0,n.jsx)(t.p,{children:"Returns true if the player is in a server sent battle, or if a board, shop, or textbox is open."}),"\n",(0,n.jsx)(t.h3,{id:"netis_player_in_widgetplayer_id",children:(0,n.jsx)(t.code,{children:"Net.is_player_in_widget(player_id)"})}),"\n",(0,n.jsx)(t.p,{children:"Returns true if a board, shop, or textbox is open."}),"\n",(0,n.jsx)(t.h3,{id:"netis_player_shoppingplayer_id",children:(0,n.jsx)(t.code,{children:"Net.is_player_shopping(player_id)"})}),"\n",(0,n.jsx)(t.p,{children:"Returns true if a shop is open."}),"\n",(0,n.jsx)(t.h3,{id:"nethide_hudplayer_id",children:(0,n.jsx)(t.code,{children:"Net.hide_hud(player_id)"})}),"\n",(0,n.jsx)(t.p,{children:"Hides the HUD for the specified player."}),"\n",(0,n.jsx)(t.h3,{id:"netshow_hudplayer_id",children:(0,n.jsx)(t.code,{children:"Net.show_hud(player_id)"})}),"\n",(0,n.jsx)(t.p,{children:"Makes the HUD visible for the specified player."}),"\n",(0,n.jsx)(t.h3,{id:"netmessage_playerplayer_id-message-mug_texture_path-mug_animation_path",children:(0,n.jsx)(t.code,{children:"Net.message_player(player_id, message, mug_texture_path?, mug_animation_path?)"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"message"}),": ",(0,n.jsx)(t.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Displays a textbox with the message and mug."}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/server/lua-api/events#textbox_response",children:"textbox_response"})," or the ",(0,n.jsx)(t.a,{href:"/server/lua-api/async#asyncmessage_playerplayer_id-message-mug_texture_path-mug_animation_path",children:"async"})," version of this function for handling responses."]}),"\n",(0,n.jsx)(t.h3,{id:"netmessage_playerplayer_id-message-textbox_options",children:(0,n.jsx)(t.code,{children:"Net.message_player(player_id, message, textbox_options?)"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"message"}),": ",(0,n.jsx)(t.code,{children:"string"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"textbox_options"}),": ",(0,n.jsx)(t.a,{href:"#nettextboxoptions",children:"Net.TextboxOptions"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Displays a textbox with the message and mug."}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/server/lua-api/events#textbox_response",children:"textbox_response"})," or the ",(0,n.jsx)(t.a,{href:"/server/lua-api/async#asyncmessage_playerplayer_id-message-textbox_options",children:"async"})," version of this function for handling responses."]}),"\n",(0,n.jsx)(t.h3,{id:"netquestion_playerplayer_id-question-mug_texture_path-mug_animation_path",children:(0,n.jsx)(t.code,{children:"Net.question_player(player_id, question, mug_texture_path?, mug_animation_path?)"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"question"}),": ",(0,n.jsx)(t.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Displays a textbox with a Yes / No input after the message."}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/server/lua-api/events#textbox_response",children:"textbox_response"})," or the ",(0,n.jsx)(t.a,{href:"/server/lua-api/async#asyncquestion_playerplayer_id-question-mug_texture_path-mug_animation_path",children:"async"})," version of this function for handling responses."]}),"\n",(0,n.jsx)(t.h3,{id:"netquestion_playerplayer_id-question-textbox_options",children:(0,n.jsx)(t.code,{children:"Net.question_player(player_id, question, textbox_options?)"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"question"}),": ",(0,n.jsx)(t.code,{children:"string"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"textbox_options"}),": ",(0,n.jsx)(t.a,{href:"#nettextboxoptions",children:"Net.TextboxOptions"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Displays a textbox with a Yes / No input after the message."}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/server/lua-api/events#textbox_response",children:"textbox_response"})," or the ",(0,n.jsx)(t.a,{href:"/server/lua-api/async#asyncquestion_playerplayer_id-question-textbox_options",children:"async"})," version of this function for handling responses."]}),"\n",(0,n.jsx)(t.h3,{id:"netquiz_playerplayer_id-option_a-option_b-option_c-mug_texture_path-mug_animation_path",children:(0,n.jsx)(t.code,{children:"Net.quiz_player(player_id, option_a?, option_b?, option_c?, mug_texture_path?, mug_animation_path?)"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"option_a"}),": ",(0,n.jsx)(t.code,{children:"string"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"option_b"}),": ",(0,n.jsx)(t.code,{children:"string"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"option_c"}),": ",(0,n.jsx)(t.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Displays a textbox with selectable options."}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/server/lua-api/events#textbox_response",children:"textbox_response"})," or the ",(0,n.jsx)(t.a,{href:"/server/lua-api/async#asyncquiz_playerplayer_id-option_a-option_b-option_c-mug_texture_path-mug_animation_path",children:"async"})," version of this function for handling responses."]}),"\n",(0,n.jsx)(t.h3,{id:"netquiz_playerplayer_id-option_a-option_b-option_c-textbox_options",children:(0,n.jsx)(t.code,{children:"Net.quiz_player(player_id, option_a?, option_b?, option_c?, textbox_options?)"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"option_a"}),": ",(0,n.jsx)(t.code,{children:"string"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"option_b"}),": ",(0,n.jsx)(t.code,{children:"string"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"option_c"}),": ",(0,n.jsx)(t.code,{children:"string"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"textbox_options"}),": ",(0,n.jsx)(t.a,{href:"#nettextboxoptions",children:"Net.TextboxOptions"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Displays a textbox with selectable options."}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/server/lua-api/events#textbox_response",children:"textbox_response"})," or the ",(0,n.jsx)(t.a,{href:"/server/lua-api/async#asyncquiz_playerplayer_id-option_a-option_b-option_c-textbox_options",children:"async"})," version of this function for handling responses."]}),"\n",(0,n.jsx)(t.h3,{id:"netprompt_playerplayer_id-character_limit-default_text",children:(0,n.jsx)(t.code,{children:"Net.prompt_player(player_id, character_limit?, default_text?)"})}),"\n",(0,n.jsx)(t.p,{children:"Displays a textbox that accepts text input."}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/server/lua-api/events#textbox_response",children:"textbox_response"})," or the ",(0,n.jsx)(t.a,{href:"/server/lua-api/async#asyncprompt_playerplayer_id-character_limit-default_text",children:"async"})," version of this function for handling responses."]}),"\n",(0,n.jsx)(t.h3,{id:"netopen_boardplayer_id-board_name-color-posts-open_instantly",children:(0,n.jsx)(t.code,{children:"Net.open_board(player_id, board_name, color, posts, open_instantly?)"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"color"}),": ",(0,n.jsx)(t.a,{href:"#netcolor",children:"Net.Color"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"posts"}),": ",(0,n.jsx)(t.a,{href:"#netboardpost",children:"Net.BoardPost[]"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Returns ",(0,n.jsx)(t.a,{href:"/server/lua-api/event-emitters",children:"Net.EventEmitter"}),", re-emits ",(0,n.jsx)(t.code,{children:"post_selection"}),", ",(0,n.jsx)(t.code,{children:"post_request"}),", and ",(0,n.jsx)(t.code,{children:"board_close"})," server events."]}),"\n",(0,n.jsx)(t.h3,{id:"netprepend_postsplayer_id-posts-post_id",children:(0,n.jsx)(t.code,{children:"Net.prepend_posts(player_id, posts, post_id?)"})}),"\n",(0,n.jsx)(t.p,{children:"Issues may arise when multiple scripts create boards at the same time."}),"\n",(0,n.jsx)(t.h3,{id:"netappend_postsplayer_id-posts-post_id",children:(0,n.jsx)(t.code,{children:"Net.append_posts(player_id, posts, post_id?)"})}),"\n",(0,n.jsx)(t.p,{children:"Issues may arise when multiple scripts create boards at the same time."}),"\n",(0,n.jsx)(t.h3,{id:"netremove_postplayer_id-post_id",children:(0,n.jsx)(t.code,{children:"Net.remove_post(player_id, post_id)"})}),"\n",(0,n.jsx)(t.p,{children:"Issues may arise when multiple scripts create boards at the same time."}),"\n",(0,n.jsx)(t.h3,{id:"netclose_boardplayer_id",children:(0,n.jsx)(t.code,{children:"Net.close_board(player_id)"})}),"\n",(0,n.jsx)(t.p,{children:"Closes the currently opened board for the player."}),"\n",(0,n.jsx)(t.h3,{id:"netopen_shopplayer_id-shop_items-mug_texture_path-mug_animation_path",children:(0,n.jsx)(t.code,{children:"Net.open_shop(player_id, shop_items, mug_texture_path?, mug_animation_path?)"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"shop_items"}),": ",(0,n.jsx)(t.a,{href:"#netshopitem",children:"Net.ShopItem[]"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If the ",(0,n.jsx)(t.code,{children:"id"})," is unset, the ",(0,n.jsx)(t.code,{children:"name"})," is used as the ",(0,n.jsx)(t.code,{children:"id"})," instead."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Returns ",(0,n.jsx)(t.a,{href:"/server/lua-api/event-emitters",children:"Net.EventEmitter"}),", re-emits ",(0,n.jsx)(t.code,{children:"shop_purchase"}),", ",(0,n.jsx)(t.code,{children:"shop_description_request"}),", ",(0,n.jsx)(t.code,{children:"shop_leave"}),", and ",(0,n.jsx)(t.code,{children:"shop_close"})," server events."]}),"\n",(0,n.jsx)(t.h3,{id:"netset_shop_messageplayer_id-message",children:(0,n.jsx)(t.code,{children:"Net.set_shop_message(player_id, message)"})}),"\n",(0,n.jsx)(t.p,{children:"Sets the default text for the shop keeper. Ignored if no shop is open."}),"\n",(0,n.jsx)(t.h3,{id:"netupdate_shop_itemplayer_id-shop_item",children:(0,n.jsx)(t.code,{children:"Net.update_shop_item(player_id, shop_item)"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"shop_item"}),": ",(0,n.jsx)(t.a,{href:"#netshopitem",children:"Net.ShopItem"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Replaces the ",(0,n.jsx)(t.code,{children:"shop_item"})," for the item matching the ",(0,n.jsx)(t.code,{children:"id"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"netremove_shop_itemplayer_id-item_id",children:(0,n.jsx)(t.code,{children:"Net.remove_shop_item(player_id, item_id)"})}),"\n",(0,n.jsx)(t.p,{children:"Delete the item from the open shop."}),"\n",(0,n.jsx)(t.h3,{id:"netcreate_spritesprite_options",children:(0,n.jsx)(t.code,{children:"Net.create_sprite(sprite_options)"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"sprite_options"})," ",(0,n.jsx)(t.a,{href:"#netspriteoptions",children:"Net.SpriteOptions"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Returns sprite_id"}),"\n",(0,n.jsx)(t.h3,{id:"netanimate_spritesprite_id-state_name-loop",children:(0,n.jsx)(t.code,{children:"Net.animate_sprite(sprite_id, state_name, loop?)"})}),"\n",(0,n.jsx)(t.p,{children:"Sets the animation state for the sprite."}),"\n",(0,n.jsx)(t.h3,{id:"netdelete_spritesprite_id",children:(0,n.jsx)(t.code,{children:"Net.delete_sprite(sprite_id)"})}),"\n",(0,n.jsx)(t.p,{children:"Deletes the the sprite."}),"\n",(0,n.jsx)(t.h3,{id:"netset_player_map_colorplayer_id-color",children:(0,n.jsx)(t.code,{children:"Net.set_player_map_color(player_id, color)"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"color"}),": ",(0,n.jsx)(t.a,{href:"#netcolor",children:"Net.Color"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Sets the color of the marker used in the map menu to represent this player. Defaults to ",(0,n.jsx)(t.code,{children:"{ r: 0, g: 0, b: 0, a: 0 }"})]}),"\n",(0,n.jsx)(t.h3,{id:"netset_bot_map_colorbot_id-color",children:(0,n.jsx)(t.code,{children:"Net.set_bot_map_color(bot_id, color)"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"color"}),": ",(0,n.jsx)(t.a,{href:"#netcolor",children:"Net.Color"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Sets the color of the marker used in the map menu to represent this bot. Defaults to ",(0,n.jsx)(t.code,{children:"{ r: 0, g: 0, b: 0, a: 0 }"})]}),"\n",(0,n.jsx)(t.h3,{id:"netrefer_serverplayer_id-name-address",children:(0,n.jsx)(t.code,{children:"Net.refer_server(player_id, name, address)"})}),"\n",(0,n.jsx)(t.p,{children:"Opens a menu for the player to save the referred server."}),"\n",(0,n.jsx)(t.h3,{id:"netrefer_packageplayer_id-package_id",children:(0,n.jsx)(t.code,{children:"Net.refer_package(player_id, package_id)"})}),"\n",(0,n.jsx)(t.p,{children:"Opens a menu on the client for the player to view and install a package from their preferred package repo."}),"\n",(0,n.jsx)(t.h3,{id:"netoffer_packageplayer_id-package_id",children:(0,n.jsx)(t.code,{children:"Net.offer_package(player_id, package_id)"})}),"\n",(0,n.jsx)(t.p,{children:"Allows the client to directly download packages from the server."}),"\n",(0,n.jsx)(t.p,{children:"Currently unimplemented on the client."}),"\n",(0,n.jsx)(t.h2,{id:"nettextureanimationpair",children:"Net.TextureAnimationPair"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"---@class Net.TextureAnimationPair\n---@field texture_path string\n---@field animation_path string\n"})}),"\n",(0,n.jsx)(t.h2,{id:"netcolor",children:"Net.Color"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"--- All fields are in the range: [0, 255]\n---@class Net.Color\n---@field r number\n---@field g number\n---@field b number\n---@field a? number\n"})}),"\n",(0,n.jsx)(t.h2,{id:"nettextboxoptions",children:"Net.TextboxOptions"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"---@class Net.TextboxOptions\n---@field mug? Net.TextureAnimationPair\n---@field text_style? Net.TextStyle\n"})}),"\n",(0,n.jsx)(t.h2,{id:"nettextstyle",children:"Net.TextStyle"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"---@class Net.TextStyle\n---@field font_name? string\n---@field monospace? boolean\n---@field min_glyph_width? number\n---@field letter_spacing? number\n---@field line_spacing? number\n---@field scale_x? number\n---@field scale_y? number\n---@field color? Net.Color\n---@field shadow_color? Net.Color\n---@field custom_atlas? Net.TextureAnimationPair,\n"})}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'-- note modified syntax: ? marks a field as optional\nlocal textbox_options = {\n  mug? = {\n    texture_path = "/server/assets/[...].png",\n    animation_path = "/server/assets/[...].animation",\n  }\n}\n\nNet.message_player(player_id, message, textbox_options)\n'})}),"\n",(0,n.jsx)(t.h2,{id:"netboardpost",children:"Net.BoardPost"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"---@class Net.BoardPost\n---@field id string\n---@field read boolean?\n---@field title string?\n---@field author string?\n"})}),"\n",(0,n.jsx)(t.h2,{id:"netshopitem",children:"Net.ShopItem"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"---@class Net.ShopItem\n---@field id string?\n---@field name string,\n---@field price number | string\n"})}),"\n",(0,n.jsx)(t.h2,{id:"netspriteoptions",children:"Net.SpriteOptions"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'---@class Net.SpriteOptions\n---@field player_id? Net.ActorId restricts visibility to this specific player if set.\n---@field parent_id "widget" | "hud" | Net.ActorId a point defined in the parent\'s animation file or built-in point.\n---@field parent_point? string If unset the origin will be used. For "widget" and "hud" the origin is the top left of the screen.\n---@field x? number offset from `parent_point` in screen pixels\n---@field y? number offset from `parent_point` in screen pixels\n---@field layer? number used for sorting sprites relative to the parent. Use negatives if you want to display in front of other sprites.\n---@field texture_path string\n---@field animation_path? string\n---@field animation? string Animation state, this state will be looped.\n'})})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var n=i(6540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);