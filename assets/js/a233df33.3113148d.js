"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6764],{8773:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>s});var n=i(4848),a=i(8453);const l={},c="AuxProp",t={id:"client/lua-api/defense-api/aux-prop",title:"AuxProp",description:"AuxProps are structures for generating conditional behavior that composes well with other AuxProps, without requiring writers to be aware of all content to avoid ordering conflicts. AuxProps achieves this using a priority system that uses the effect and requirements to generate a clear order for behavior.",source:"@site/docs/01-client/02-lua-api/05-defense-api/03-aux-prop.md",sourceDirName:"01-client/02-lua-api/05-defense-api",slug:"/client/lua-api/defense-api/aux-prop",permalink:"/client/lua-api/defense-api/aux-prop",draft:!1,unlisted:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/05-defense-api/03-aux-prop.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"clientSidebar",previous:{title:"IntangibleRule",permalink:"/client/lua-api/defense-api/intangible-rule"},next:{title:"Debug Hotkeys",permalink:"/client/debug-hotkeys"}},d={},s=[{value:"<code>AuxProp.new()</code>",id:"auxpropnew",level:3},{value:"<code>aux_prop:once()</code>",id:"aux_proponce",level:3},{value:"<code>aux_prop:immediate()</code>",id:"aux_propimmediate",level:3},{value:"<code>aux_prop:with_callback(callback)</code>",id:"aux_propwith_callbackcallback",level:3},{value:"AuxProp Requirements",id:"auxprop-requirements",level:2},{value:"<code>aux_prop:require_interval(frames)</code>",id:"aux_proprequire_intervalframes",level:3},{value:"<code>aux_prop:require_hit_element(element)</code>",id:"aux_proprequire_hit_elementelement",level:3},{value:"<code>aux_prop:require_hit_element_is_weakness()</code>",id:"aux_proprequire_hit_element_is_weakness",level:3},{value:"<code>aux_prop:require_hit_flag(hit_flags)</code>",id:"aux_proprequire_hit_flaghit_flags",level:3},{value:"<code>aux_prop:require_hit_damage(compare, damage)</code>",id:"aux_proprequire_hit_damagecompare-damage",level:3},{value:"<code>aux_prop:require_projected_hit_damage(expr, compare, damage)</code>",id:"aux_proprequire_projected_hit_damageexpr-compare-damage",level:3},{value:"<code>aux_prop:require_total_damage(compare, damage)</code>",id:"aux_proprequire_total_damagecompare-damage",level:3},{value:"<code>aux_prop:require_element(element)</code>",id:"aux_proprequire_elementelement",level:3},{value:"<code>aux_prop:require_negative_tile_interaction()</code>",id:"aux_proprequire_negative_tile_interaction",level:3},{value:"<code>aux_prop:require_emotion(emotion)</code>",id:"aux_proprequire_emotionemotion",level:3},{value:"<code>aux_prop:require_charged_card()</code>",id:"aux_proprequire_charged_card",level:3},{value:"<code>aux_prop:require_card_element(element)</code>",id:"aux_proprequire_card_elementelement",level:3},{value:"<code>aux_prop:require_card_not_element(element)</code>",id:"aux_proprequire_card_not_elementelement",level:3},{value:"<code>aux_prop:require_card_damage(compare, damage)</code>",id:"aux_proprequire_card_damagecompare-damage",level:3},{value:"<code>aux_prop:require_card_recover(compare, recover)</code>",id:"aux_proprequire_card_recovercompare-recover",level:3},{value:"<code>aux_prop:require_card_hit_flags(hit_flags)</code>",id:"aux_proprequire_card_hit_flagshit_flags",level:3},{value:"<code>aux_prop:require_card_code(code)</code>",id:"aux_proprequire_card_codecode",level:3},{value:"<code>aux_prop:require_card_class(card_class)</code>",id:"aux_proprequire_card_classcard_class",level:3},{value:"<code>aux_prop:require_card_time_freeze(time_freeze)</code>",id:"aux_proprequire_card_time_freezetime_freeze",level:3},{value:"<code>aux_prop:require_card_tag(tag)</code>",id:"aux_proprequire_card_tagtag",level:3},{value:"<code>aux_prop:require_projected_health_threshold(expr, compare, percentage)</code>",id:"aux_proprequire_projected_health_thresholdexpr-compare-percentage",level:3},{value:"<code>aux_prop:require_projected_health(expr, compare, health)</code>",id:"aux_proprequire_projected_healthexpr-compare-health",level:3},{value:"<code>aux_prop:require_health_threshold(compare, percentage)</code>",id:"aux_proprequire_health_thresholdcompare-percentage",level:3},{value:"<code>aux_prop:require_health(compare, health)</code>",id:"aux_proprequire_healthcompare-health",level:3},{value:"AuxProp Effects",id:"auxprop-effects",level:2},{value:"<code>aux_prop:increase_card_damage(increase)</code>",id:"aux_propincrease_card_damageincrease",level:3},{value:"<code>aux_prop:increase_card_multiplier(increase)</code>",id:"aux_propincrease_card_multiplierincrease",level:3},{value:"<code>aux_prop:intercept_action(function(action): Action|nil)</code>",id:"aux_propintercept_actionfunctionaction-actionnil",level:3},{value:"<code>aux_prop:interrupt_action(function(action))</code>",id:"aux_propinterrupt_actionfunctionaction",level:3},{value:"<code>aux_prop:declare_immunity(hit_flags)</code>",id:"aux_propdeclare_immunityhit_flags",level:3},{value:"<code>aux_prop:apply_status(hit_flag, duration)</code>",id:"aux_propapply_statushit_flag-duration",level:3},{value:"<code>aux_prop:remove_status(hit_flag)</code>",id:"aux_propremove_statushit_flag",level:3},{value:"<code>aux_prop:increase_hit_damage(expr)</code>",id:"aux_propincrease_hit_damageexpr",level:3},{value:"<code>aux_prop:decrease_hit_damage(expr)</code>",id:"aux_propdecrease_hit_damageexpr",level:3},{value:"<code>aux_prop:decrease_total_damage(expr)</code>",id:"aux_propdecrease_total_damageexpr",level:3},{value:"<code>aux_prop:drain_health(health)</code>",id:"aux_propdrain_healthhealth",level:3},{value:"<code>aux_prop:recover_health(health)</code>",id:"aux_proprecover_healthhealth",level:3},{value:"Math Expression Strings",id:"math-expression-strings",level:2},{value:"Examples",id:"examples",level:3},{value:"Supported Values",id:"supported-values",level:3},{value:"Supported Operations",id:"supported-operations",level:3},{value:"Supported Functions",id:"supported-functions",level:3},{value:"Compare",id:"compare",level:2},{value:"StandardEnemyAux",id:"standardenemyaux",level:2},{value:"<code>StandardEnemyAux.new()</code>",id:"standardenemyauxnew",level:3}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"auxprop",children:"AuxProp"}),"\n",(0,n.jsx)(r.p,{children:"AuxProps are structures for generating conditional behavior that composes well with other AuxProps, without requiring writers to be aware of all content to avoid ordering conflicts. AuxProps achieves this using a priority system that uses the effect and requirements to generate a clear order for behavior."}),"\n",(0,n.jsx)(r.p,{children:"AuxProps can only be tied to a single entity and can not be updated once bound. To update an AuxProp it must be removed and added again."}),"\n",(0,n.jsx)(r.h3,{id:"auxpropnew",children:(0,n.jsx)(r.code,{children:"AuxProp.new()"})}),"\n",(0,n.jsxs)(r.p,{children:["Returns a new AuxProp. Attach to an entity with ",(0,n.jsxs)(r.a,{href:"/client/lua-api/entity-api/living#livingadd_aux_propaux_prop",children:["living",":add_aux_prop","()"]})," and remove with ",(0,n.jsxs)(r.a,{href:"/client/lua-api/entity-api/living#livingremove_aux_propaux_prop",children:["living",":add_aux_prop","()"]})]}),"\n",(0,n.jsx)(r.p,{children:"All AuxProp methods return the AuxProp for chaining."}),"\n",(0,n.jsx)(r.h3,{id:"aux_proponce",children:(0,n.jsx)(r.code,{children:"aux_prop:once()"})}),"\n",(0,n.jsx)(r.p,{children:"Allows the AuxProp to auto remove after it's effects are first applied."}),"\n",(0,n.jsx)(r.h3,{id:"aux_propimmediate",children:(0,n.jsx)(r.code,{children:"aux_prop:immediate()"})}),"\n",(0,n.jsx)(r.p,{children:"Allows the AuxProp to auto remove after a single test run, approximately a single battle frame."}),"\n",(0,n.jsx)(r.h3,{id:"aux_propwith_callbackcallback",children:(0,n.jsx)(r.code,{children:"aux_prop:with_callback(callback)"})}),"\n",(0,n.jsx)(r.p,{children:"The callback will be called shortly after the AuxProp's effect is applied. Multiple callbacks can be added to a single AuxProp."}),"\n",(0,n.jsx)(r.h2,{id:"auxprop-requirements",children:"AuxProp Requirements"}),"\n",(0,n.jsxs)(r.p,{children:["An AuxProp can have zero or more requirements. Every requirement must pass on the same test run (approximately a single battle frame) to execute ",(0,n.jsx)(r.a,{href:"#auxprop-effects",children:"effects"})," and callbacks."]}),"\n",(0,n.jsxs)(r.p,{children:["The requirements affect the final priority of the AuxProp.\nThe lowest requirement priority is used as a secondary priority when multiple ",(0,n.jsx)(r.a,{href:"#auxprop-effects",children:"effects"})," have the same priority.\nThe lower the priority is in the list, the later it will execute."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Unconditional"}),"\n",(0,n.jsx)(r.li,{children:"Interval"}),"\n",(0,n.jsx)(r.li,{children:"Hit"}),"\n",(0,n.jsx)(r.li,{children:"Body"}),"\n",(0,n.jsx)(r.li,{children:"HP Expression"}),"\n",(0,n.jsx)(r.li,{children:"HP GE"}),"\n",(0,n.jsx)(r.li,{children:"HP LE"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["All hit related requirements will use hit properties after ",(0,n.jsx)(r.a,{href:"/client/lua-api/defense-api/defense-rule",children:"DefenseRule"})," modification and before AuxProp modification."]}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_intervalframes",children:(0,n.jsx)(r.code,{children:"aux_prop:require_interval(frames)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Interval priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"frames"}),": number"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The AuxProp can pass if ",(0,n.jsx)(r.code,{children:"battle_frame_time % frames == 0"})]}),"\n",(0,n.jsx)(r.p,{children:"In the future the AuxProp will store an internal timer that starts as soon as it is attached, increments every battle frame, passing the test on the first frame and at each interval."}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_hit_elementelement",children:(0,n.jsx)(r.code,{children:"aux_prop:require_hit_element(element)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Hit priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"element"}),": ",(0,n.jsx)(r.a,{href:"/client/lua-api/attack-api/hit-props#element",children:"Element"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"The AuxProp will check the incoming hit's element and secondary element of incoming hits for a match."}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_hit_element_is_weakness",children:(0,n.jsx)(r.code,{children:"aux_prop:require_hit_element_is_weakness()"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Hit priority"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"The AuxProp will check the incoming hit's element and secondary element to see if the attached entity's element is weak to either element."}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_hit_flaghit_flags",children:(0,n.jsx)(r.code,{children:"aux_prop:require_hit_flag(hit_flags)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Hit priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"hit_flags"}),": ",(0,n.jsx)(r.a,{href:"/client/lua-api/attack-api/hit-props#hit_propsflags",children:"Hit"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The AuxProp will check the incoming hit's ",(0,n.jsx)(r.a,{href:"/client/lua-api/attack-api/hit-props#hit_propsflags",children:"flags"})," to see if all matching flags apply."]}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_hit_damagecompare-damage",children:(0,n.jsx)(r.code,{children:"aux_prop:require_hit_damage(compare, damage)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Hit priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"compare"}),": ",(0,n.jsx)(r.a,{href:"#compare",children:"Compare"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"damage"}),": number"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The AuxProp will check the incoming hit's ",(0,n.jsx)(r.a,{href:"/client/lua-api/attack-api/hit-props#hit_propsdamage",children:"damage"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_projected_hit_damageexpr-compare-damage",children:(0,n.jsx)(r.code,{children:"aux_prop:require_projected_hit_damage(expr, compare, damage)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Hit priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"expr"}),": ",(0,n.jsx)(r.a,{href:"#math-expression-strings",children:"Math Expression String"}),", ",(0,n.jsx)(r.code,{children:'"DAMAGE"'})," will represent the damage value for the current hit."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"compare"}),": ",(0,n.jsx)(r.a,{href:"#compare",children:"Compare"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"damage"}),": number"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The AuxProp will check the incoming hit's ",(0,n.jsx)(r.a,{href:"/client/lua-api/attack-api/hit-props#hit_propsdamage",children:"damage"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_total_damagecompare-damage",children:(0,n.jsx)(r.code,{children:"aux_prop:require_total_damage(compare, damage)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Hit priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"compare"}),": ",(0,n.jsx)(r.a,{href:"#compare",children:"Compare"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"damage"}),": number"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"The AuxProp will check the total incoming damage from all hits in the current frame."}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_elementelement",children:(0,n.jsx)(r.code,{children:"aux_prop:require_element(element)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Body priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"element"}),": ",(0,n.jsx)(r.a,{href:"/client/lua-api/attack-api/hit-props#element",children:"Element"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"The AuxProp will check the attached entity for matching element."}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_negative_tile_interaction",children:(0,n.jsx)(r.code,{children:"aux_prop:require_negative_tile_interaction()"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Body priority"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The AuxProp will check ",(0,n.jsx)(r.code,{children:"entity:ignoring_negative_tile_effects() == false"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_emotionemotion",children:(0,n.jsx)(r.code,{children:"aux_prop:require_emotion(emotion)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Body priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"emotion"}),": string"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"The AuxProp will check the attached entity for matching emotion."}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_charged_card",children:(0,n.jsx)(r.code,{children:"aux_prop:require_charged_card()"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Body priority"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The AuxProp will require a ",(0,n.jsx)(r.a,{href:"/client/lua-api/entity-api/player",children:"Player"})," to be holding a fully ",(0,n.jsx)(r.a,{href:"/client/lua-api/entity-api/player#playercan_charge_card_func--functioncard_properties-boolean",children:"charged"})," card."]}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_card_elementelement",children:(0,n.jsx)(r.code,{children:"aux_prop:require_card_element(element)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Body priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"element"}),": ",(0,n.jsx)(r.a,{href:"/client/lua-api/attack-api/hit-props#element",children:"Element"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"The AuxProp will check the next card on the attached entity for either matching element or secondary element."}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_card_not_elementelement",children:(0,n.jsx)(r.code,{children:"aux_prop:require_card_not_element(element)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Body priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"element"}),": ",(0,n.jsx)(r.a,{href:"/client/lua-api/attack-api/hit-props#element",children:"Element"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"The AuxProp will check the next card on the attached entity for a failed match with both element and secondary element."}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_card_damagecompare-damage",children:(0,n.jsx)(r.code,{children:"aux_prop:require_card_damage(compare, damage)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Body priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"compare"}),": ",(0,n.jsx)(r.a,{href:"#compare",children:"Compare"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"damage"}),": number"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The AuxProp will compare the damage on the next card on the attached entity against the ",(0,n.jsx)(r.code,{children:"damage"})," value."]}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_card_recovercompare-recover",children:(0,n.jsx)(r.code,{children:"aux_prop:require_card_recover(compare, recover)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Body priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"compare"}),": ",(0,n.jsx)(r.a,{href:"#compare",children:"Compare"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"recover"}),": number"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The AuxProp will compare the recover amount on the next card on the attached entity against the ",(0,n.jsx)(r.code,{children:"recover"})," value."]}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_card_hit_flagshit_flags",children:(0,n.jsx)(r.code,{children:"aux_prop:require_card_hit_flags(hit_flags)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Body priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"hit_flags"}),": ",(0,n.jsx)(r.a,{href:"/client/lua-api/attack-api/hit-props#hit_propsflags",children:"Hit"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"The AuxProp will check the next card on the attached entity for matching hit flags."}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_card_codecode",children:(0,n.jsx)(r.code,{children:"aux_prop:require_card_code(code)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Body priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"code"}),": string"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"The AuxProp will check the next card on the attached entity for matching code."}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_card_classcard_class",children:(0,n.jsx)(r.code,{children:"aux_prop:require_card_class(card_class)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Body priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"card_class"}),": ",(0,n.jsx)(r.a,{href:"/client/lua-api/attack-api/cards#card_propertiescard_class",children:"CardClass"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"The AuxProp will check the next card on the attached entity for matching class."}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_card_time_freezetime_freeze",children:(0,n.jsx)(r.code,{children:"aux_prop:require_card_time_freeze(time_freeze)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Body priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"time_freeze"}),": bool"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"The AuxProp will check the time freeze value on the next card on the attached entity."}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_card_tagtag",children:(0,n.jsx)(r.code,{children:"aux_prop:require_card_tag(tag)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Body priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"tag"}),": string"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"The AuxProp will check the next card on the attached entity for matching tag."}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_projected_health_thresholdexpr-compare-percentage",children:(0,n.jsx)(r.code,{children:"aux_prop:require_projected_health_threshold(expr, compare, percentage)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"HP Expression priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"expr"}),": ",(0,n.jsx)(r.a,{href:"#math-expression-strings",children:"Math Expression String"}),", ",(0,n.jsx)(r.code,{children:'"DAMAGE"'})," will represent the total damage value for all incoming hits."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"compare"}),": ",(0,n.jsx)(r.a,{href:"#compare",children:"Compare"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"percentage"}),": a number in range [0, 1]"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The AuxProp will compare the result of the expression divided by the entity's max_health against ",(0,n.jsx)(r.code,{children:"percentage"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_projected_healthexpr-compare-health",children:(0,n.jsx)(r.code,{children:"aux_prop:require_projected_health(expr, compare, health)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"HP Expression priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"expr"}),": ",(0,n.jsx)(r.a,{href:"#math-expression-strings",children:"Math Expression String"}),", ",(0,n.jsx)(r.code,{children:'"DAMAGE"'})," will represent the total damage value for all incoming hits."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"compare"}),": ",(0,n.jsx)(r.a,{href:"#compare",children:"Compare"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"health"}),": a number"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The AuxProp will compare the result of the expression against ",(0,n.jsx)(r.code,{children:"health"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_health_thresholdcompare-percentage",children:(0,n.jsx)(r.code,{children:"aux_prop:require_health_threshold(compare, percentage)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["HP GE or HP LE priority depending on ",(0,n.jsx)(r.code,{children:"compare"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"compare"}),": ",(0,n.jsx)(r.a,{href:"#compare",children:"Compare"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"percentage"}),": a number in range [0, 1]"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The AuxProp will compare the entity's health divided by it's max health against ",(0,n.jsx)(r.code,{children:"percentage"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprequire_healthcompare-health",children:(0,n.jsx)(r.code,{children:"aux_prop:require_health(compare, health)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["HP GE or HP LE priority depending on ",(0,n.jsx)(r.code,{children:"compare"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"compare"}),": ",(0,n.jsx)(r.a,{href:"#compare",children:"Compare"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"health"}),": a number"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The AuxProp will compare the entity's health against ",(0,n.jsx)(r.code,{children:"health"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"auxprop-effects",children:"AuxProp Effects"}),"\n",(0,n.jsx)(r.p,{children:"An AuxProp can have one optional effect (but still have multiple callbacks). The type of effect has a strong influence over the priority and execution order of the effect."}),"\n",(0,n.jsx)(r.p,{children:"The lower the priority is in the list, the later it will execute."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Increase Card Damage"}),"\n",(0,n.jsx)(r.li,{children:"Increase Card Multiplier"}),"\n",(0,n.jsx)(r.li,{children:"Intercept Action"}),"\n",(0,n.jsx)(r.li,{children:"Interrupt Action"}),"\n",(0,n.jsx)(r.li,{children:"Status Immunity"}),"\n",(0,n.jsx)(r.li,{children:"Apply Status"}),"\n",(0,n.jsx)(r.li,{children:"Remove Status"}),"\n",(0,n.jsx)(r.li,{children:"Increase Hit Damage"}),"\n",(0,n.jsx)(r.li,{children:"Decrease Hit Damage"}),"\n",(0,n.jsx)(r.li,{children:"Decrease Damage Total"}),"\n",(0,n.jsx)(r.li,{children:"Drain Health"}),"\n",(0,n.jsx)(r.li,{children:"Recover Health"}),"\n",(0,n.jsx)(r.li,{children:"No Effect"}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"aux_propincrease_card_damageincrease",children:(0,n.jsx)(r.code,{children:"aux_prop:increase_card_damage(increase)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Increase Card Damage priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"increase"}),": number, the amount to increase the card damage before multiplying."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"aux_propincrease_card_multiplierincrease",children:(0,n.jsx)(r.code,{children:"aux_prop:increase_card_multiplier(increase)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Increase Card Multiplier priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"increase"}),": number, the amount to increase the multiplier by."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"aux_propintercept_actionfunctionaction-actionnil",children:(0,n.jsx)(r.code,{children:"aux_prop:intercept_action(function(action): Action|nil)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Intercept Action priority"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Intercepts an Action moving off the action queue for execution. Returning a different Action or nil in the callback will cancel and delete the Action. ",(0,n.jsx)(r.code,{children:"aux_prop:require_card_*"})," will refer to properties on the Action."]}),"\n",(0,n.jsx)(r.h3,{id:"aux_propinterrupt_actionfunctionaction",children:(0,n.jsx)(r.code,{children:"aux_prop:interrupt_action(function(action))"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Interrupt Action priority"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Interrupts an Action that is about to execute or has executed. The Action will be deleted after the callback finishes.\n",(0,n.jsx)(r.code,{children:"aux_prop:require_card_*"})," will refer to properties on the Action."]}),"\n",(0,n.jsx)(r.h3,{id:"aux_propdeclare_immunityhit_flags",children:(0,n.jsx)(r.code,{children:"aux_prop:declare_immunity(hit_flags)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Status Immunity priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"hit_flags"}),": ",(0,n.jsx)(r.a,{href:"/client/lua-api/attack-api/hit-props#hit_propsflags",children:"Hit"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Declares immunity for incoming hits this frame, will not remove existing statuses."}),"\n",(0,n.jsx)(r.h3,{id:"aux_propapply_statushit_flag-duration",children:(0,n.jsx)(r.code,{children:"aux_prop:apply_status(hit_flag, duration)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Apply Status priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"hit_flag"}),": ",(0,n.jsx)(r.a,{href:"/client/lua-api/attack-api/hit-props#hit_propsflags",children:"Hit"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"duration"}),": number, how many game frames the effect should last"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Applies a status to the entity."}),"\n",(0,n.jsx)(r.h3,{id:"aux_propremove_statushit_flag",children:(0,n.jsx)(r.code,{children:"aux_prop:remove_status(hit_flag)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Remove Status priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"hit_flag"}),": ",(0,n.jsx)(r.a,{href:"/client/lua-api/attack-api/hit-props#hit_propsflags",children:"Hit"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Removes an existing status on the entity, won't affect incoming hits."}),"\n",(0,n.jsx)(r.h3,{id:"aux_propincrease_hit_damageexpr",children:(0,n.jsx)(r.code,{children:"aux_prop:increase_hit_damage(expr)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Increase Hit Damage priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"expr"}),": ",(0,n.jsx)(r.a,{href:"#math-expression-strings",children:"Math Expression String"}),", ",(0,n.jsx)(r.code,{children:'"DAMAGE"'})," will represent the damage value for the current hit before any modifications."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The result of ",(0,n.jsx)(r.code,{children:"expr"})," will be added to the total incoming damage."]}),"\n",(0,n.jsx)(r.p,{children:"If the result is negative, it will be clamped to 0."}),"\n",(0,n.jsx)(r.h3,{id:"aux_propdecrease_hit_damageexpr",children:(0,n.jsx)(r.code,{children:"aux_prop:decrease_hit_damage(expr)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Decrease Hit Damage priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"expr"}),": ",(0,n.jsx)(r.a,{href:"#math-expression-strings",children:"Math Expression String"}),", ",(0,n.jsx)(r.code,{children:'"DAMAGE"'})," will represent the damage value for the current hit before any modifications."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The result of ",(0,n.jsx)(r.code,{children:"expr"})," will be subtracted from the total incoming damage."]}),"\n",(0,n.jsx)(r.p,{children:"If the result is negative, it will be clamped to 0."}),"\n",(0,n.jsx)(r.p,{children:"Note: To entirely negate damage a defense rule must be used."}),"\n",(0,n.jsx)(r.h3,{id:"aux_propdecrease_total_damageexpr",children:(0,n.jsx)(r.code,{children:"aux_prop:decrease_total_damage(expr)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Decrease Damage Total priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"expr"}),": ",(0,n.jsx)(r.a,{href:"#math-expression-strings",children:"Math Expression String"}),", ",(0,n.jsx)(r.code,{children:'"DAMAGE"'})," will represent the total damage value for all incoming hits."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The result of ",(0,n.jsx)(r.code,{children:"expr"})," will be subtracted from the total incoming damage."]}),"\n",(0,n.jsx)(r.p,{children:"If the total damage was previously not zero the final total damage will have a minimum value of 1."}),"\n",(0,n.jsx)(r.h3,{id:"aux_propdrain_healthhealth",children:(0,n.jsx)(r.code,{children:"aux_prop:drain_health(health)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Drain Health priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"health"}),": the amount of health to take away"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"aux_proprecover_healthhealth",children:(0,n.jsx)(r.code,{children:"aux_prop:recover_health(health)"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Recover Health priority"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"health"}),": the amount of health to restore"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"math-expression-strings",children:"Math Expression Strings"}),"\n",(0,n.jsx)(r.p,{children:"Math expressions that are evalulated later in time."}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lua",children:'-- undershirt\nlocal aux_prop = AuxProp.new()\n  :require_total_damage(Compare.GT, 0)\n  :decrease_total_damage("clamp(DAMAGE, 1, HEALTH - 1)")\n\nentity:add_aux_prop(aux_prop)\n'})}),"\n",(0,n.jsx)(r.h3,{id:"supported-values",children:"Supported Values"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Numbers with optional sign and decimal: ",(0,n.jsx)(r.code,{children:"-1.2"}),", ",(0,n.jsx)(r.code,{children:"2"}),", ",(0,n.jsx)(r.code,{children:"3.0"})]}),"\n",(0,n.jsxs)(r.li,{children:["Built-in variables:","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"HEALTH"}),": The attached entities health."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"MAX_HEALTH"}),": The attached entities max health."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"DAMAGE"}),": Context dependent damage value, either from a single hit or the total of all hits."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"supported-operations",children:"Supported Operations"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"+"})," Addition"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"-"})," Subtraction"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"*"})," Multiplication"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"/"})," Division"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"%"})," Modulus / Remainder"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"supported-functions",children:"Supported Functions"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"clamp(value, min, max)"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"abs(value)"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"sign(value)"})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"compare",children:"Compare"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Compare.LT"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Less Than ",(0,n.jsx)(r.code,{children:"<"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Compare.LE"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Less Than Equal ",(0,n.jsx)(r.code,{children:"<="})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Compare.NE"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Not Equal ",(0,n.jsx)(r.code,{children:"~="})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Compare.EQ"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Equal ",(0,n.jsx)(r.code,{children:"=="})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Compare.GT"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Greater Than ",(0,n.jsx)(r.code,{children:">"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Compare.GE"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Greater Than Equal ",(0,n.jsx)(r.code,{children:">="})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"standardenemyaux",children:"StandardEnemyAux"}),"\n",(0,n.jsx)(r.h3,{id:"standardenemyauxnew",children:(0,n.jsx)(r.code,{children:"StandardEnemyAux.new()"})}),"\n",(0,n.jsxs)(r.p,{children:["Returns an AuxProp that provides ",(0,n.jsx)(r.code,{children:"Hit.Flash"})," immunity."]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,r,i)=>{i.d(r,{R:()=>c,x:()=>t});var n=i(6540);const a={},l=n.createContext(a);function c(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);