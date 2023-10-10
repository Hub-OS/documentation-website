"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4309],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>s});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,s=u["".concat(p,".").concat(m)]||u[m]||k[m]||i;return a?r.createElement(s,l(l({ref:t},o),{},{components:a})):r.createElement(s,l({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5313:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const i={},l="Character",c={unversionedId:"client/lua-api/entity-api/character",id:"client/lua-api/entity-api/character",title:"Character",description:"Instance of Entity. All Living functions are available as well.",source:"@site/docs/01-client/02-lua-api/01-entity-api/04-character.md",sourceDirName:"01-client/02-lua-api/01-entity-api",slug:"/client/lua-api/entity-api/character",permalink:"/client/lua-api/entity-api/character",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/01-entity-api/04-character.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Player",permalink:"/client/lua-api/entity-api/player"},next:{title:"Spell",permalink:"/client/lua-api/entity-api/spell"}},p={},d=[{value:"<code>Character.from(entity)</code>",id:"characterfromentity",level:3},{value:"<code>Character.from_package(package_id, team, rank)</code>",id:"characterfrom_packagepackage_id-team-rank",level:3},{value:"<code>Character:rank()</code>",id:"characterrank",level:3},{value:"<code>Character:field_cards()</code>",id:"characterfield_cards",level:3},{value:"<code>Character:field_card(index)</code>",id:"characterfield_cardindex",level:3},{value:"<code>Character:set_field_card(index, card_properties)</code>",id:"characterset_field_cardindex-card_properties",level:3},{value:"<code>Character:remove_field_card(index)</code>",id:"characterremove_field_cardindex",level:3},{value:"<code>Character:insert_field_card(index, card_properties)</code>",id:"characterinsert_field_cardindex-card_properties",level:3}],o={toc:d},u="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"character"},"Character"),(0,n.kt)("p",null,"Instance of ",(0,n.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/entity"},"Entity"),". All ",(0,n.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/living"},"Living")," functions are available as well."),(0,n.kt)("p",null,"Character functions are accessible to all entities, but will throw if the entity is not a Character or ",(0,n.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/player"},"Player"),"."),(0,n.kt)("h3",{id:"characterfromentity"},(0,n.kt)("inlineCode",{parentName:"h3"},"Character.from(entity)")),(0,n.kt)("p",null,"Returns the entity passed in if the entity is a character or player, otherwise returns ",(0,n.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,n.kt)("h3",{id:"characterfrom_packagepackage_id-team-rank"},(0,n.kt)("inlineCode",{parentName:"h3"},"Character.from_package(package_id, team, rank)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"package_id"),": string, the package id of the character"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"team"),": ",(0,n.kt)("a",{parentName:"li",href:"/client/lua-api/entity-api/entity#entityset_teamteam"},"Team")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rank"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rank.V1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rank.V2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rank.V3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rank.V4")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rank.V5")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rank.SP")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rank.EX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rank.Rare1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rank.Rare2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rank.NM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rank.RV")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rank.DS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rank.Alpha")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rank.Beta")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rank.Omega")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rank.Sigma"))))),(0,n.kt)("p",null,"Returns a new ",(0,n.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/entity"},"Entity"),", throws if the package doesn't exist."),(0,n.kt)("h3",{id:"characterrank"},(0,n.kt)("inlineCode",{parentName:"h3"},"Character:rank()")),(0,n.kt)("p",null,"Returns the character's rank."),(0,n.kt)("h3",{id:"characterfield_cards"},(0,n.kt)("inlineCode",{parentName:"h3"},"Character:field_cards()")),(0,n.kt)("p",null,"Returns a list of ",(0,n.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/card-properties"},"CardProperties"),", the first card is the next card that can be used."),(0,n.kt)("h3",{id:"characterfield_cardindex"},(0,n.kt)("inlineCode",{parentName:"h3"},"Character:field_card(index)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"index"),": number, 1 represents the next card that can be used.")),(0,n.kt)("p",null,"Returns ",(0,n.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/card-properties"},"CardProperties")," or nil."),(0,n.kt)("h3",{id:"characterset_field_cardindex-card_properties"},(0,n.kt)("inlineCode",{parentName:"h3"},"Character:set_field_card(index, card_properties)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"index"),": number, 1 represents the next card that can be used."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"card_properties"),": ",(0,n.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/card-properties"},"CardProperties"))),(0,n.kt)("p",null,"Changing package_id will cause ",(0,n.kt)("a",{parentName:"p",href:"/client/packages#cards"},"card_mutate()")," to restart or run again next frame."),(0,n.kt)("h3",{id:"characterremove_field_cardindex"},(0,n.kt)("inlineCode",{parentName:"h3"},"Character:remove_field_card(index)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"index"),": number, 1 represents the next card that can be used.")),(0,n.kt)("h3",{id:"characterinsert_field_cardindex-card_properties"},(0,n.kt)("inlineCode",{parentName:"h3"},"Character:insert_field_card(index, card_properties)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"index"),": number, 1 represents the next card that can be used."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"card_properties"),": ",(0,n.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/card-properties"},"CardProperties"))),(0,n.kt)("p",null,"Inserts a card at this index, shifting cards at this position and after to the right."),(0,n.kt)("p",null,"Will cause ",(0,n.kt)("a",{parentName:"p",href:"/client/packages#cards"},"card_mutate()")," to restart or run again next frame."))}k.isMDXComponent=!0}}]);