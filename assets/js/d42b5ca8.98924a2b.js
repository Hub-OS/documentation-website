"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5979],{3905:(e,t,a)=>{a.d(t,{Zo:()=>_,kt:()=>s});var l=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=l.createContext({}),o=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},_=function(e){var t=o(e.components);return l.createElement(d.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,_=p(e,["components","mdxType","originalType","parentName"]),c=o(a),m=i,s=c["".concat(d,".").concat(m)]||c[m]||y[m]||r;return a?l.createElement(s,n(n({ref:t},_),{},{components:a})):l.createElement(s,n({ref:t},_))}));function s(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[c]="string"==typeof e?e:i,n[1]=p;for(var o=2;o<r;o++)n[o]=a[o];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4553:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>y,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var l=a(7462),i=(a(7294),a(3905));const r={},n="Player Data",p={unversionedId:"server/lua-api/player-data",id:"server/lua-api/player-data",title:"Player Data",description:"Functions relevant to items, money, stats, and tracking data.",source:"@site/docs/02-server/04-lua-api/08-player-data.md",sourceDirName:"02-server/04-lua-api",slug:"/server/lua-api/player-data",permalink:"/server/lua-api/player-data",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/02-server/04-lua-api/08-player-data.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"serverSidebar",previous:{title:"Players",permalink:"/server/lua-api/players"},next:{title:"Bots",permalink:"/server/lua-api/bots"}},d={},o=[{value:"<code>Net.get_player_secret(player_id)</code>",id:"netget_player_secretplayer_id",level:3},{value:"<code>Net.get_player_element(player_id)</code>",id:"netget_player_elementplayer_id",level:3},{value:"<code>Net.get_player_health(player_id)</code>",id:"netget_player_healthplayer_id",level:3},{value:"<code>Net.set_player_health(player_id, health)</code>",id:"netset_player_healthplayer_id-health",level:3},{value:"<code>Net.get_player_base_health(player_id)</code>",id:"netget_player_base_healthplayer_id",level:3},{value:"<code>Net.set_player_base_health(player_id, health)</code>",id:"netset_player_base_healthplayer_id-health",level:3},{value:"<code>Net.get_player_max_health(player_id)</code>",id:"netget_player_max_healthplayer_id",level:3},{value:"<code>Net.get_player_emotion(player_id)</code>",id:"netget_player_emotionplayer_id",level:3},{value:"<code>Net.set_player_emotion(player_id, emotion)</code>",id:"netset_player_emotionplayer_id-emotion",level:3},{value:"<code>Net.get_player_money(player_id)</code>",id:"netget_player_moneyplayer_id",level:3},{value:"<code>Net.set_player_money(player_id, money)</code>",id:"netset_player_moneyplayer_id-money",level:3},{value:"<code>Net.register_item(item_id, item_definition)</code>",id:"netregister_itemitem_id-item_definition",level:3},{value:"<code>Net.get_item_name(item_id)</code>",id:"netget_item_nameitem_id",level:3},{value:"<code>Net.get_item_description(item_id)</code>",id:"netget_item_descriptionitem_id",level:3},{value:"<code>Net.get_player_items(player_id)</code>",id:"netget_player_itemsplayer_id",level:3},{value:"<code>Net.give_player_item(player_id, item_id, amount?)</code>",id:"netgive_player_itemplayer_id-item_id-amount",level:3},{value:"<code>Net.get_player_item_count(player_id, item_id)</code>",id:"netget_player_item_countplayer_id-item_id",level:3},{value:"<code>Net.player_has_item(player_id, item_id)</code>",id:"netplayer_has_itemplayer_id-item_id",level:3},{value:"<code>Net.get_player_card_count(player_id, package_id, code)</code>",id:"netget_player_card_countplayer_id-package_id-code",level:3},{value:"<code>Net.give_player_card(player_id, package_id, code, amount?)</code>",id:"netgive_player_cardplayer_id-package_id-code-amount",level:3},{value:"<code>Net.get_player_block_count(player_id, package_id, color)</code>",id:"netget_player_block_countplayer_id-package_id-color",level:3},{value:"<code>Net.give_player_block(player_id, package_id, color, amount?)</code>",id:"netgive_player_blockplayer_id-package_id-color-amount",level:3},{value:"<code>Net.player_character_enabled(player_id, package_id)</code>",id:"netplayer_character_enabledplayer_id-package_id",level:3},{value:"<code>Net.enable_player_character(player_id, package_id)</code>",id:"netenable_player_characterplayer_id-package_id",level:3}],_={toc:o},c="wrapper";function y(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,l.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"player-data"},"Player Data"),(0,i.kt)("p",null,"Functions relevant to items, money, stats, and tracking data."),(0,i.kt)("h3",{id:"netget_player_secretplayer_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_player_secret(player_id)")),(0,i.kt)("p",null,"The secret identifier for this player, also known as ",(0,i.kt)("inlineCode",{parentName:"p"},"identity"),". Similar to a password, do not share."),(0,i.kt)("h3",{id:"netget_player_elementplayer_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_player_element(player_id)")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},'"None" | "Fire" | "Aqua" | "Elec" | "Wood" | "Sword" | "Wind" | "Cursor" | "Summon" | "Plus" | "Break"')),(0,i.kt)("h3",{id:"netget_player_healthplayer_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_player_health(player_id)")),(0,i.kt)("p",null,"Returns the starting health for the next battle."),(0,i.kt)("h3",{id:"netset_player_healthplayer_id-health"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_player_health(player_id, health)")),(0,i.kt)("p",null,"Sets the starting health for the next battle."),(0,i.kt)("h3",{id:"netget_player_base_healthplayer_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_player_base_health(player_id)")),(0,i.kt)("p",null,"Returns the player's maximum health without augments."),(0,i.kt)("h3",{id:"netset_player_base_healthplayer_id-health"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_player_base_health(player_id, health)")),(0,i.kt)("p",null,"Sets the player's maximum health without augments."),(0,i.kt)("h3",{id:"netget_player_max_healthplayer_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_player_max_health(player_id)")),(0,i.kt)("p",null,"Returns the player's maximmum health with augments."),(0,i.kt)("h3",{id:"netget_player_emotionplayer_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_player_emotion(player_id)")),(0,i.kt)("p",null,"Returns the emotion that will be applied at the start of the next battle."),(0,i.kt)("h3",{id:"netset_player_emotionplayer_id-emotion"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_player_emotion(player_id, emotion)")),(0,i.kt)("p",null,"Sets the emotion applied at the start of the next battle."),(0,i.kt)("h3",{id:"netget_player_moneyplayer_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_player_money(player_id)")),(0,i.kt)("p",null,"Returns the amount of money the player has."),(0,i.kt)("h3",{id:"netset_player_moneyplayer_id-money"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.set_player_money(player_id, money)")),(0,i.kt)("p",null,"Sets the amount of money the player has."),(0,i.kt)("h3",{id:"netregister_itemitem_id-item_definition"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.register_item(item_id, item_definition)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"item_definition"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"{ name: string, description: string, consumable?: bool }"))),(0,i.kt)("p",null,"Registers an item definition to be shared with the client when the player obtains this item for the first time."),(0,i.kt)("p",null,"The item's name should be at most 8 characters for best display."),(0,i.kt)("h3",{id:"netget_item_nameitem_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_item_name(item_id)")),(0,i.kt)("p",null,"Returns the name used in menus."),(0,i.kt)("h3",{id:"netget_item_descriptionitem_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_item_description(item_id)")),(0,i.kt)("p",null,"Returns the description used in menus."),(0,i.kt)("h3",{id:"netget_player_itemsplayer_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_player_items(player_id)")),(0,i.kt)("p",null,"Returns a list of unique item ids."),(0,i.kt)("h3",{id:"netgive_player_itemplayer_id-item_id-amount"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.give_player_item(player_id, item_id, amount?)")),(0,i.kt)("p",null,"Gives the player items. ",(0,i.kt)("inlineCode",{parentName:"p"},"count")," will default to 1."),(0,i.kt)("p",null,"Accepts negative amount."),(0,i.kt)("h3",{id:"netget_player_item_countplayer_id-item_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_player_item_count(player_id, item_id)")),(0,i.kt)("p",null,"Returns the amount of the item the player has."),(0,i.kt)("h3",{id:"netplayer_has_itemplayer_id-item_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.player_has_item(player_id, item_id)")),(0,i.kt)("p",null,"Returns true if the player has at least one of this item."),(0,i.kt)("h3",{id:"netget_player_card_countplayer_id-package_id-code"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_player_card_count(player_id, package_id, code)")),(0,i.kt)("p",null,"Returns the amount of matching cards the player owns."),(0,i.kt)("h3",{id:"netgive_player_cardplayer_id-package_id-code-amount"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.give_player_card(player_id, package_id, code, amount?)")),(0,i.kt)("p",null,"Adds cards to the player's pack."),(0,i.kt)("p",null,"Adding any card restricts usable cards to only given cards."),(0,i.kt)("p",null,"Accepts negative amount."),(0,i.kt)("h3",{id:"netget_player_block_countplayer_id-package_id-color"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.get_player_block_count(player_id, package_id, color)")),(0,i.kt)("p",null,"Returns the amount of matching cards the player owns."),(0,i.kt)("h3",{id:"netgive_player_blockplayer_id-package_id-color-amount"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.give_player_block(player_id, package_id, color, amount?)")),(0,i.kt)("p",null,"Adds blocks to the player's pack."),(0,i.kt)("p",null,"Adding any block restricts usable blocks to only given blocks."),(0,i.kt)("p",null,"Accepts negative amount."),(0,i.kt)("h3",{id:"netplayer_character_enabledplayer_id-package_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.player_character_enabled(player_id, package_id)")),(0,i.kt)("p",null,"Returns true if the player can use the playable character's abilities."),(0,i.kt)("h3",{id:"netenable_player_characterplayer_id-package_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"Net.enable_player_character(player_id, package_id)")),(0,i.kt)("p",null,"Allows the player to use the playable character's abilities."),(0,i.kt)("p",null,"Enabling any playable character locks the player out of using abilities on non enabled playable characters."))}y.isMDXComponent=!0}}]);