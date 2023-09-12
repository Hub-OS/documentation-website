"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[352],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(a),u=i,k=c["".concat(o,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={},l="HitProps",p={unversionedId:"client/lua-api/attack-api/hit-props",id:"client/lua-api/attack-api/hit-props",title:"HitProps",description:"See spell:sethitprops()",source:"@site/docs/01-client/02-lua-api/04-attack-api/02-hit-props.md",sourceDirName:"01-client/02-lua-api/04-attack-api",slug:"/client/lua-api/attack-api/hit-props",permalink:"/client/lua-api/attack-api/hit-props",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/04-attack-api/02-hit-props.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Action",permalink:"/client/lua-api/attack-api/action"},next:{title:"CardProperties",permalink:"/client/lua-api/attack-api/card-properties"}},o={},s=[{value:"<code>HitProps.new(damage, flags, element, secondary_element, context?, drag?)</code>",id:"hitpropsnewdamage-flags-element-secondary_element-context-drag",level:3},{value:"<code>HitProps.new(damage, flags, element, context?, drag?)</code>",id:"hitpropsnewdamage-flags-element-context-drag",level:3},{value:"<code>HitProps.from_card(card_properties, context?, drag?)</code>",id:"hitpropsfrom_cardcard_properties-context-drag",level:3},{value:"<code>hit_props.damage</code>",id:"hit_propsdamage",level:3},{value:"<code>hit_props.flags</code>",id:"hit_propsflags",level:3},{value:"<code>hit_props.element</code>",id:"hit_propselement",level:3},{value:"<code>hit_props.secondary_element</code>",id:"hit_propssecondary_element",level:3},{value:"<code>hit_props.drag</code>",id:"hit_propsdrag",level:3},{value:"<code>hit_props.context</code>",id:"hit_propscontext",level:3},{value:"Element",id:"element",level:2},{value:"Drag",id:"drag",level:2},{value:"<code>Drag.new(direction?, count?)</code>",id:"dragnewdirection-count",level:3},{value:"<code>Drag.None</code>",id:"dragnone",level:3}],d={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hitprops"},"HitProps"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/spell#spellset_hit_propshit_props"},"spell:set_hit_props()")),(0,i.kt)("h3",{id:"hitpropsnewdamage-flags-element-secondary_element-context-drag"},(0,i.kt)("inlineCode",{parentName:"h3"},"HitProps.new(damage, flags, element, secondary_element, context?, drag?)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"damage"),": integer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flags"),": See ",(0,i.kt)("a",{parentName:"li",href:"#hit_propsflags"},"flags")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"element"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/hit-props#element"},"Element")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secondary_element"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/hit-props#element"},"Element")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context"),": The value obtained by ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/entity-api/entity#entitycontext"},"entity:context()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"drag"),": ",(0,i.kt)("a",{parentName:"li",href:"#drag"},"Drag")," defaults to Drag.None")),(0,i.kt)("p",null,"Returns a new HitProps instance."),(0,i.kt)("h3",{id:"hitpropsnewdamage-flags-element-context-drag"},(0,i.kt)("inlineCode",{parentName:"h3"},"HitProps.new(damage, flags, element, context?, drag?)")),(0,i.kt)("p",null,"Returns a new HitProps instance."),(0,i.kt)("h3",{id:"hitpropsfrom_cardcard_properties-context-drag"},(0,i.kt)("inlineCode",{parentName:"h3"},"HitProps.from_card(card_properties, context?, drag?)")),(0,i.kt)("p",null,"Returns a new HitProps instance."),(0,i.kt)("h3",{id:"hit_propsdamage"},(0,i.kt)("inlineCode",{parentName:"h3"},"hit_props.damage")),(0,i.kt)("p",null,"A number, used to calculate how much health to take away from entities hit by the attack."),(0,i.kt)("h3",{id:"hit_propsflags"},(0,i.kt)("inlineCode",{parentName:"h3"},"hit_props.flags")),(0,i.kt)("p",null,"Any of the values below, or combined using bitwise or (",(0,i.kt)("inlineCode",{parentName:"p"},"|"),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit.None")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit.RetainIntangible")," prevents intangibility from being lost if the attack pierces."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit.NoCounter")," prevents the attack from countering."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit.Drag")," Allows the ",(0,i.kt)("a",{parentName:"li",href:"#hit_propsdrag"},"drag property")," to drag the entity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit.Impact")," allows the attack to counter the entity and causes the entity to appear white for one frame."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit.Flinch")," read by the hit entity to cancel attacks and play a flinch animation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit.Flash")," applies the default intangible rule to the hit entity and flickers the entity's sprite."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit.Shake")," causes the hit entity to shake."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit.PierceInvis")," read by defense rules to pierce defenses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit.PierceGuard")," read by defense rules to pierce defenses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit.PierceGround")," read by defense rules to pierce defenses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit.Freeze")," applies freeze status on hit."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit.Paralyze")," applies paralyze status on hit."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit.Root")," applies root status on hit."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit.Blind")," applies blindness status on hit."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit.Confuse")," applies confusion status on hit."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/client/packages#statuses"},"Hit.[flag_name]"))),(0,i.kt)("h3",{id:"hit_propselement"},(0,i.kt)("inlineCode",{parentName:"h3"},"hit_props.element")),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/hit-props#element"},"Element"),". If element or secondary_element is super effective against an entity's element, this attack will deal 2x damage."),(0,i.kt)("h3",{id:"hit_propssecondary_element"},(0,i.kt)("inlineCode",{parentName:"h3"},"hit_props.secondary_element")),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/hit-props#element"},"Element"),". If element or secondary_element is super effective against an entity's element, this attack will deal 2x damage."),(0,i.kt)("h3",{id:"hit_propsdrag"},(0,i.kt)("inlineCode",{parentName:"h3"},"hit_props.drag")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#drag"},"Drag")),(0,i.kt)("h3",{id:"hit_propscontext"},(0,i.kt)("inlineCode",{parentName:"h3"},"hit_props.context")),(0,i.kt)("p",null,"Context obtained by ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/entity#entitycontext"},"entity:context()")),(0,i.kt)("h2",{id:"element"},"Element"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Element.None")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Element.Fire")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Element.Aqua")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Element.Elec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Element.Wood")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Element.Sword")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Element.Wind")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Element.Cursor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Element.Summon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Element.Plus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Element.Break"))),(0,i.kt)("h2",{id:"drag"},"Drag"),(0,i.kt)("h3",{id:"dragnewdirection-count"},(0,i.kt)("inlineCode",{parentName:"h3"},"Drag.new(direction?, count?)")),(0,i.kt)("p",null,"Returns a new Drag instance."),(0,i.kt)("h3",{id:"dragnone"},(0,i.kt)("inlineCode",{parentName:"h3"},"Drag.None")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("inlineCode",{parentName:"p"},"Drag.new()")))}m.isMDXComponent=!0}}]);