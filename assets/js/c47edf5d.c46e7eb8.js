"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2187],{9843:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var i=t(4848),s=t(8453);const l={},r="HitProps",c={id:"client/lua-api/attack-api/hit-props",title:"HitProps",description:"See spell:sethitprops()",source:"@site/docs/01-client/02-lua-api/04-attack-api/02-hit-props.md",sourceDirName:"01-client/02-lua-api/04-attack-api",slug:"/client/lua-api/attack-api/hit-props",permalink:"/client/lua-api/attack-api/hit-props",draft:!1,unlisted:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/04-attack-api/02-hit-props.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Action",permalink:"/client/lua-api/attack-api/action"},next:{title:"Cards",permalink:"/client/lua-api/attack-api/cards"}},d={},a=[{value:"<code>HitProps.new(damage, flags, element, secondary_element, context?, drag?)</code>",id:"hitpropsnewdamage-flags-element-secondary_element-context-drag",level:3},{value:"<code>HitProps.new(damage, flags, element, context?, drag?)</code>",id:"hitpropsnewdamage-flags-element-context-drag",level:3},{value:"<code>HitProps.from_card(card_properties, context?, drag?)</code>",id:"hitpropsfrom_cardcard_properties-context-drag",level:3},{value:"<code>hit_props.damage</code>",id:"hit_propsdamage",level:3},{value:"<code>hit_props.flags</code>",id:"hit_propsflags",level:3},{value:"<code>hit_props.element</code>",id:"hit_propselement",level:3},{value:"<code>hit_props.secondary_element</code>",id:"hit_propssecondary_element",level:3},{value:"<code>hit_props.drag</code>",id:"hit_propsdrag",level:3},{value:"<code>hit_props.context</code>",id:"hit_propscontext",level:3},{value:"Element",id:"element",level:2},{value:"Drag",id:"drag",level:2},{value:"<code>Drag.new(direction?, count?)</code>",id:"dragnewdirection-count",level:3},{value:"<code>Drag.None</code>",id:"dragnone",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"hitprops",children:"HitProps"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsxs)(n.a,{href:"/client/lua-api/entity-api/spell#spellset_hit_propshit_props",children:["spell",":set_hit_props","()"]})]}),"\n",(0,i.jsx)(n.h3,{id:"hitpropsnewdamage-flags-element-secondary_element-context-drag",children:(0,i.jsx)(n.code,{children:"HitProps.new(damage, flags, element, secondary_element, context?, drag?)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"damage"}),": integer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"flags"}),": See ",(0,i.jsx)(n.a,{href:"#hit_propsflags",children:"flags"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"element"}),": ",(0,i.jsx)(n.a,{href:"/client/lua-api/attack-api/hit-props#element",children:"Element"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"secondary_element"}),": ",(0,i.jsx)(n.a,{href:"/client/lua-api/attack-api/hit-props#element",children:"Element"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"context"}),": The value obtained by ",(0,i.jsxs)(n.a,{href:"/client/lua-api/entity-api/entity#entitycontext",children:["entity",":context","()"]})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"drag"}),": ",(0,i.jsx)(n.a,{href:"#drag",children:"Drag"})," defaults to Drag.None"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Returns a new HitProps instance."}),"\n",(0,i.jsx)(n.h3,{id:"hitpropsnewdamage-flags-element-context-drag",children:(0,i.jsx)(n.code,{children:"HitProps.new(damage, flags, element, context?, drag?)"})}),"\n",(0,i.jsx)(n.p,{children:"Returns a new HitProps instance."}),"\n",(0,i.jsx)(n.h3,{id:"hitpropsfrom_cardcard_properties-context-drag",children:(0,i.jsx)(n.code,{children:"HitProps.from_card(card_properties, context?, drag?)"})}),"\n",(0,i.jsx)(n.p,{children:"Returns a new HitProps instance."}),"\n",(0,i.jsx)(n.h3,{id:"hit_propsdamage",children:(0,i.jsx)(n.code,{children:"hit_props.damage"})}),"\n",(0,i.jsx)(n.p,{children:"A number, used to calculate how much health to take away from entities hit by the attack."}),"\n",(0,i.jsx)(n.h3,{id:"hit_propsflags",children:(0,i.jsx)(n.code,{children:"hit_props.flags"})}),"\n",(0,i.jsxs)(n.p,{children:["Any of the values below, or combined using bitwise or (",(0,i.jsx)(n.code,{children:"|"}),")"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Hit.None"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Hit.RetainIntangible"})," prevents intangibility from being lost if the attack pierces."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Hit.NoCounter"})," prevents the attack from countering."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Hit.Drag"})," Allows the ",(0,i.jsx)(n.a,{href:"#hit_propsdrag",children:"drag property"})," to drag the entity."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Hit.Impact"})," allows the attack to counter the entity and causes the entity to appear white for one frame."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Hit.Flinch"})," read by the hit entity to cancel attacks and play a flinch animation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Hit.Flash"})," applies the default intangible rule to the hit entity and flickers the entity's sprite."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Hit.Shake"})," causes the hit entity to shake."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Hit.PierceInvis"})," read by defense rules to pierce defenses."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Hit.PierceGuard"})," read by defense rules to pierce defenses."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Hit.PierceGround"})," read by defense rules to pierce defenses."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Hit.Freeze"})," applies freeze status on hit."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Hit.Paralyze"})," applies paralyze status on hit."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Hit.Root"})," applies root status on hit."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Hit.Blind"})," applies blindness status on hit."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Hit.Confuse"})," applies confusion status on hit."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/client/packages#statuses",children:"Hit.[flag_name]"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"hit_propselement",children:(0,i.jsx)(n.code,{children:"hit_props.element"})}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"/client/lua-api/attack-api/hit-props#element",children:"Element"}),". If element or secondary_element is super effective against an entity's element, this attack will deal 2x damage."]}),"\n",(0,i.jsx)(n.h3,{id:"hit_propssecondary_element",children:(0,i.jsx)(n.code,{children:"hit_props.secondary_element"})}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"/client/lua-api/attack-api/hit-props#element",children:"Element"}),". If element or secondary_element is super effective against an entity's element, this attack will deal 2x damage."]}),"\n",(0,i.jsx)(n.h3,{id:"hit_propsdrag",children:(0,i.jsx)(n.code,{children:"hit_props.drag"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#drag",children:"Drag"})}),"\n",(0,i.jsx)(n.h3,{id:"hit_propscontext",children:(0,i.jsx)(n.code,{children:"hit_props.context"})}),"\n",(0,i.jsxs)(n.p,{children:["Context obtained by ",(0,i.jsxs)(n.a,{href:"/client/lua-api/entity-api/entity#entitycontext",children:["entity",":context","()"]})]}),"\n",(0,i.jsx)(n.h2,{id:"element",children:"Element"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Element.None"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Element.Fire"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Element.Aqua"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Element.Elec"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Element.Wood"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Element.Sword"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Element.Wind"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Element.Cursor"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Element.Summon"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Element.Plus"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Element.Break"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"drag",children:"Drag"}),"\n",(0,i.jsx)(n.h3,{id:"dragnewdirection-count",children:(0,i.jsx)(n.code,{children:"Drag.new(direction?, count?)"})}),"\n",(0,i.jsx)(n.p,{children:"Returns a new Drag instance."}),"\n",(0,i.jsx)(n.h3,{id:"dragnone",children:(0,i.jsx)(n.code,{children:"Drag.None"})}),"\n",(0,i.jsx)(n.p,{children:"Returns a new Drag instance."}),"\n",(0,i.jsxs)(n.p,{children:["Same as ",(0,i.jsx)(n.code,{children:"Drag.new()"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(6540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);