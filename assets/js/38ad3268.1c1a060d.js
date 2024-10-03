"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8496],{9550:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>s,default:()=>o,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var l=n(4848),t=n(8453);const a={},s="Living",d={id:"client/lua-api/entity-api/living",title:"Living",description:"Instance of Entity.",source:"@site/docs/01-client/02-lua-api/01-entity-api/02-living.md",sourceDirName:"01-client/02-lua-api/01-entity-api",slug:"/client/lua-api/entity-api/living",permalink:"/client/lua-api/entity-api/living",draft:!1,unlisted:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/01-entity-api/02-living.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Entity",permalink:"/client/lua-api/entity-api/entity"},next:{title:"Player",permalink:"/client/lua-api/entity-api/player"}},r={},c=[{value:"<code>Living.from(entity)</code>",id:"livingfromentity",level:3},{value:"<code>living:max_health()</code>",id:"livingmax_health",level:3},{value:"<code>living:health()</code>",id:"livinghealth",level:3},{value:"<code>living:set_health(health)</code>",id:"livingset_healthhealth",level:3},{value:"<code>living:hit(hit_props)</code>",id:"livinghithit_props",level:3},{value:"<code>living:hitbox_enabled()</code>",id:"livinghitbox_enabled",level:3},{value:"<code>living:enable_hitbox(enabled?)</code>",id:"livingenable_hitboxenabled",level:3},{value:"<code>living:counterable()</code>",id:"livingcounterable",level:3},{value:"<code>living:set_counterable(enabled?)</code>",id:"livingset_counterableenabled",level:3},{value:"<code>living:intangible()</code>",id:"livingintangible",level:3},{value:"<code>living:set_intangible(intangible, intangible_rule?)</code>",id:"livingset_intangibleintangible-intangible_rule",level:3},{value:"<code>living:add_defense_rule(defense_rule)</code>",id:"livingadd_defense_ruledefense_rule",level:3},{value:"<code>living:remove_defense_rule(defense_rule)</code>",id:"livingremove_defense_ruledefense_rule",level:3},{value:"<code>living:add_aux_prop(aux_prop)</code>",id:"livingadd_aux_propaux_prop",level:3},{value:"<code>living:remove_aux_prop(aux_prop)</code>",id:"livingremove_aux_propaux_prop",level:3},{value:"<code>living:apply_status(hit_flag, duration)</code>",id:"livingapply_statushit_flag-duration",level:3},{value:"<code>living:remove_status(hit_flag)</code>",id:"livingremove_statushit_flag",level:3},{value:"<code>living:remaining_status_time(hit_flag)</code>",id:"livingremaining_status_timehit_flag",level:3},{value:"<code>living:set_remaining_status_time(hit_flag, duration)</code>",id:"livingset_remaining_status_timehit_flag-duration",level:3},{value:"<code>living:register_status_callback(hit_flag, function())</code>",id:"livingregister_status_callbackhit_flag-function",level:3},{value:"<code>living:is_inactionable()</code>",id:"livingis_inactionable",level:3},{value:"<code>living:is_immobile()</code>",id:"livingis_immobile",level:3},{value:"<code>living.on_countered_func = function(self)</code>",id:"livingon_countered_func--functionself",level:3}];function h(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"living",children:"Living"}),"\n",(0,l.jsxs)(i.p,{children:["Instance of ",(0,l.jsx)(i.a,{href:"/client/lua-api/entity-api/entity",children:"Entity"}),"."]}),"\n",(0,l.jsxs)(i.p,{children:["Living functions are accessible to all entities, but will throw if the entity is not a ",(0,l.jsx)(i.a,{href:"/client/lua-api/entity-api/player",children:"Player"}),", ",(0,l.jsx)(i.a,{href:"/client/lua-api/entity-api/character",children:"Character"}),", or ",(0,l.jsx)(i.a,{href:"/client/lua-api/entity-api/obstacle",children:"Obstacle"}),"."]}),"\n",(0,l.jsx)(i.h3,{id:"livingfromentity",children:(0,l.jsx)(i.code,{children:"Living.from(entity)"})}),"\n",(0,l.jsxs)(i.p,{children:["Returns the entity passed in if the entity is considered living, otherwise returns ",(0,l.jsx)(i.code,{children:"nil"}),"."]}),"\n",(0,l.jsx)(i.h3,{id:"livingmax_health",children:(0,l.jsx)(i.code,{children:"living:max_health()"})}),"\n",(0,l.jsx)(i.p,{children:"Returns the entity's max health."}),"\n",(0,l.jsx)(i.h3,{id:"livinghealth",children:(0,l.jsx)(i.code,{children:"living:health()"})}),"\n",(0,l.jsx)(i.p,{children:"Returns the entity's current health."}),"\n",(0,l.jsx)(i.h3,{id:"livingset_healthhealth",children:(0,l.jsx)(i.code,{children:"living:set_health(health)"})}),"\n",(0,l.jsx)(i.p,{children:"Sets the entity's max health."}),"\n",(0,l.jsx)(i.h3,{id:"livinghithit_props",children:(0,l.jsx)(i.code,{children:"living:hit(hit_props)"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"hit_props"}),": ",(0,l.jsx)(i.a,{href:"/client/lua-api/attack-api/hit-props",children:"HitProps"})]}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["Queues a hit for processing, in most cases ",(0,l.jsxs)(i.a,{href:"/client/lua-api/entity-api/spell#spellattack_tiletile",children:["spell",":attack_tile","()"]})," should be used instead."]}),"\n",(0,l.jsx)(i.h3,{id:"livinghitbox_enabled",children:(0,l.jsx)(i.code,{children:"living:hitbox_enabled()"})}),"\n",(0,l.jsx)(i.p,{children:"Returns true if the entity can interact with attacks."}),"\n",(0,l.jsxs)(i.p,{children:["Different from ",(0,l.jsxs)(i.a,{href:"/client/lua-api/entity-api/entity#entityhittable",children:["entity",":hittable","()"]})]}),"\n",(0,l.jsx)(i.h3,{id:"livingenable_hitboxenabled",children:(0,l.jsx)(i.code,{children:"living:enable_hitbox(enabled?)"})}),"\n",(0,l.jsx)(i.p,{children:"Passing false will allow attacks to pass through as if the entity didn't exist."}),"\n",(0,l.jsx)(i.h3,{id:"livingcounterable",children:(0,l.jsx)(i.code,{children:"living:counterable()"})}),"\n",(0,l.jsx)(i.p,{children:"Returns true if the entity can currently be countered."}),"\n",(0,l.jsx)(i.h3,{id:"livingset_counterableenabled",children:(0,l.jsx)(i.code,{children:"living:set_counterable(enabled?)"})}),"\n",(0,l.jsxs)(i.p,{children:["Allows the entity to be countered when hit by an attack with a ",(0,l.jsx)(i.a,{href:"/client/lua-api/attack-api/hit-props#attackcontext",children:"context"})," created in ",(0,l.jsx)(i.a,{href:"/client/packages/#cards",children:"card_init"})]}),"\n",(0,l.jsx)(i.h3,{id:"livingintangible",children:(0,l.jsx)(i.code,{children:"living:intangible()"})}),"\n",(0,l.jsxs)(i.p,{children:["Returns true if an ",(0,l.jsx)(i.a,{href:"/client/lua-api/defense-api/intangible-rule",children:"IntangibleRule"})," is active."]}),"\n",(0,l.jsx)(i.h3,{id:"livingset_intangibleintangible-intangible_rule",children:(0,l.jsx)(i.code,{children:"living:set_intangible(intangible, intangible_rule?)"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"intangible"}),": bool, if false the active rule is removed."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"intangible_rule"}),": ",(0,l.jsx)(i.a,{href:"/client/lua-api/defense-api/intangible-rule",children:"IntangibleRule"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Ignored if ",(0,l.jsx)(i.code,{children:"intangible"})," is false."]}),"\n",(0,l.jsxs)(i.li,{children:["A default will be used if ",(0,l.jsx)(i.code,{children:"intangible_rule"})," is unset."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"livingadd_defense_ruledefense_rule",children:(0,l.jsx)(i.code,{children:"living:add_defense_rule(defense_rule)"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"defense_rule"}),": ",(0,l.jsx)(i.a,{href:"/client/lua-api/defense-api/defense-rule",children:"DefenseRule"})]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"livingremove_defense_ruledefense_rule",children:(0,l.jsx)(i.code,{children:"living:remove_defense_rule(defense_rule)"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"defense_rule"}),": ",(0,l.jsx)(i.a,{href:"/client/lua-api/defense-api/defense-rule",children:"DefenseRule"})]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"livingadd_aux_propaux_prop",children:(0,l.jsx)(i.code,{children:"living:add_aux_prop(aux_prop)"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"aux_prop"}),": ",(0,l.jsx)(i.a,{href:"/client/lua-api/defense-api/aux-prop",children:"AuxProp"})]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"livingremove_aux_propaux_prop",children:(0,l.jsx)(i.code,{children:"living:remove_aux_prop(aux_prop)"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"aux_prop"}),": ",(0,l.jsx)(i.a,{href:"/client/lua-api/defense-api/aux-prop",children:"AuxProp"})]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"livingapply_statushit_flag-duration",children:(0,l.jsx)(i.code,{children:"living:apply_status(hit_flag, duration)"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"hit_flag"})," a single hit flag, see ",(0,l.jsx)(i.a,{href:"/client/lua-api/attack-api/hit-props",children:"HitProps"})]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"duration"})," number, how many battle frames the effect should last"]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"Queues a status update. If the status is already applied, the remaining time will be updated to use the longer duration."}),"\n",(0,l.jsx)(i.h3,{id:"livingremove_statushit_flag",children:(0,l.jsx)(i.code,{children:"living:remove_status(hit_flag)"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"hit_flag"})," a single hit flag, see ",(0,l.jsx)(i.a,{href:"/client/lua-api/attack-api/hit-props",children:"HitProps"})]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"livingremaining_status_timehit_flag",children:(0,l.jsx)(i.code,{children:"living:remaining_status_time(hit_flag)"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"hit_flag"})," a single hit flag, see ",(0,l.jsx)(i.a,{href:"/client/lua-api/attack-api/hit-props",children:"HitProps"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"Returns a number representing the amount of battle frames until the status wears off."}),"\n",(0,l.jsx)(i.h3,{id:"livingset_remaining_status_timehit_flag-duration",children:(0,l.jsx)(i.code,{children:"living:set_remaining_status_time(hit_flag, duration)"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"hit_flag"})," a single hit flag, see ",(0,l.jsx)(i.a,{href:"/client/lua-api/attack-api/hit-props",children:"HitProps"})]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"duration"})," number, how many battle frames the effect should last."]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"Updates remaining time for a status already applied, or queues a new status update if isn't."}),"\n",(0,l.jsx)(i.h3,{id:"livingregister_status_callbackhit_flag-function",children:(0,l.jsx)(i.code,{children:"living:register_status_callback(hit_flag, function())"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"hit_flag"})," a single hit flag, see ",(0,l.jsx)(i.a,{href:"/client/lua-api/attack-api/hit-props",children:"HitProps"})]}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["The callback will be called when the ",(0,l.jsx)(i.code,{children:"hit_flag"})," is applied to the entity."]}),"\n",(0,l.jsx)(i.h3,{id:"livingis_inactionable",children:(0,l.jsx)(i.code,{children:"living:is_inactionable()"})}),"\n",(0,l.jsx)(i.p,{children:"Returns true if status effects that entity processing are applied."}),"\n",(0,l.jsx)(i.h3,{id:"livingis_immobile",children:(0,l.jsx)(i.code,{children:"living:is_immobile()"})}),"\n",(0,l.jsx)(i.p,{children:"Returns true if status effects that immobilize are applied."}),"\n",(0,l.jsx)(i.h3,{id:"livingon_countered_func--functionself",children:(0,l.jsx)(i.code,{children:"living.on_countered_func = function(self)"})}),"\n",(0,l.jsx)(i.p,{children:"Called when this entity has been countered."}),"\n",(0,l.jsxs)(i.p,{children:["Not to be confused with ",(0,l.jsx)(i.a,{href:"/client/lua-api/entity-api/entity#entityon_counter_func--functionself",children:"entity.on_counter_func"})]})]})}function o(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>d});var l=n(6540);const t={},a=l.createContext(t);function s(e){const i=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(a.Provider,{value:i},e.children)}}}]);