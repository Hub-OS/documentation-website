"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[904],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>c});var l=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=l.createContext({}),u=function(e){var a=l.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},m=function(e){var a=u(e.components);return l.createElement(o.Provider,{value:a},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},s=l.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),h=u(t),s=r,c=h["".concat(o,".").concat(s)]||h[s]||d[s]||i;return t?l.createElement(c,n(n({ref:a},m),{},{components:t})):l.createElement(c,n({ref:a},m))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,n=new Array(i);n[0]=s;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[h]="string"==typeof e?e:r,n[1]=p;for(var u=2;u<i;u++)n[u]=t[u];return l.createElement.apply(null,n)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9391:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var l=t(7462),r=(t(7294),t(3905));const i={},n="AuxProp",p={unversionedId:"client/lua-api/aux-prop",id:"client/lua-api/aux-prop",title:"AuxProp",description:"AuxProps are structures for generating conditional behavior that composes well with other AuxProps, without requiring writers to be aware of all content to avoid ordering conflicts. AuxProps achieves this using a priority system that uses the effect and requirements to generate a clear order for behavior.",source:"@site/docs/01-client/02-lua-api/19-aux-prop.md",sourceDirName:"01-client/02-lua-api",slug:"/client/lua-api/aux-prop",permalink:"/client/lua-api/aux-prop",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/19-aux-prop.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Status",permalink:"/client/lua-api/status"},next:{title:"Breaking Changes",permalink:"/client/breaking-changes"}},o={},u=[{value:"<code>AuxProp.new()</code>",id:"auxpropnew",level:3},{value:"<code>aux_prop:once()</code>",id:"aux_proponce",level:3},{value:"<code>aux_prop:immediate()</code>",id:"aux_propimmediate",level:3},{value:"<code>aux_prop:with_callback(callback)</code>",id:"aux_propwith_callbackcallback",level:3},{value:"AuxProp Requirements",id:"auxprop-requirements",level:2},{value:"<code>aux_prop:require_interval(frames)</code>",id:"aux_proprequire_intervalframes",level:3},{value:"<code>aux_prop:require_hit_element(element)</code>",id:"aux_proprequire_hit_elementelement",level:3},{value:"<code>aux_prop:require_hit_element_is_weakness()</code>",id:"aux_proprequire_hit_element_is_weakness",level:3},{value:"<code>aux_prop:require_hit_flag(hit_flags)</code>",id:"aux_proprequire_hit_flaghit_flags",level:3},{value:"<code>aux_prop:require_hit_damage(compare, damage)</code>",id:"aux_proprequire_hit_damagecompare-damage",level:3},{value:"<code>aux_prop:require_projected_hit_damage(expr, compare, damage)</code>",id:"aux_proprequire_projected_hit_damageexpr-compare-damage",level:3},{value:"<code>aux_prop:require_total_damage(compare, damage)</code>",id:"aux_proprequire_total_damagecompare-damage",level:3},{value:"<code>aux_prop:require_element(element)</code>",id:"aux_proprequire_elementelement",level:3},{value:"<code>aux_prop:require_emotion(emotion)</code>",id:"aux_proprequire_emotionemotion",level:3},{value:"<code>aux_prop:require_projected_health_threshold(expr, compare, percentage)</code>",id:"aux_proprequire_projected_health_thresholdexpr-compare-percentage",level:3},{value:"<code>aux_prop:require_projected_health(health)</code>",id:"aux_proprequire_projected_healthhealth",level:3},{value:"<code>aux_prop:require_health_threshold(compare, percentage)</code>",id:"aux_proprequire_health_thresholdcompare-percentage",level:3},{value:"<code>aux_prop:require_health(compare, health)</code>",id:"aux_proprequire_healthcompare-health",level:3},{value:"Compare",id:"compare",level:2},{value:"AuxProp Effects",id:"auxprop-effects",level:2},{value:"<code>aux_prop:declare_immunity(hit_flags)</code>",id:"aux_propdeclare_immunityhit_flags",level:3},{value:"<code>aux_prop:apply_status(hit_flag, duration)</code>",id:"aux_propapply_statushit_flag-duration",level:3},{value:"<code>aux_prop:remove_status(hit_flag)</code>",id:"aux_propremove_statushit_flag",level:3},{value:"<code>aux_prop:increase_hit_damage(expr)</code>",id:"aux_propincrease_hit_damageexpr",level:3},{value:"<code>aux_prop:decrease_hit_damage(expr)</code>",id:"aux_propdecrease_hit_damageexpr",level:3},{value:"<code>aux_prop:decrease_total_damage(expr)</code>",id:"aux_propdecrease_total_damageexpr",level:3},{value:"<code>aux_prop:drain_health(health)</code>",id:"aux_propdrain_healthhealth",level:3},{value:"<code>aux_prop:recover_health(health)</code>",id:"aux_proprecover_healthhealth",level:3},{value:"AuxMath",id:"auxmath",level:2},{value:"<code>AuxMath.add(a, b)</code>",id:"auxmathadda-b",level:3},{value:"<code>AuxMath.sub(a, b)</code>",id:"auxmathsuba-b",level:3},{value:"<code>AuxMath.mul(a, b)</code>",id:"auxmathmula-b",level:3},{value:"<code>AuxMath.div(a, b)</code>",id:"auxmathdiva-b",level:3},{value:"<code>AuxMath.mod(a, b)</code>",id:"auxmathmoda-b",level:3},{value:"<code>AuxMath.abs(a)</code>",id:"auxmathabsa",level:3},{value:"<code>AuxMath.sign(a)</code>",id:"auxmathsigna",level:3},{value:"<code>AuxMath.clamp(a, b, c)</code>",id:"auxmathclampa-b-c",level:3},{value:"<code>AuxMath.eval(expr, variables?)</code>",id:"auxmathevalexpr-variables",level:3}],m={toc:u},h="wrapper";function d(e){let{components:a,...t}=e;return(0,r.kt)(h,(0,l.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"auxprop"},"AuxProp"),(0,r.kt)("p",null,"AuxProps are structures for generating conditional behavior that composes well with other AuxProps, without requiring writers to be aware of all content to avoid ordering conflicts. AuxProps achieves this using a priority system that uses the effect and requirements to generate a clear order for behavior."),(0,r.kt)("p",null,"AuxProps can only be tied to a single entity and can not be updated once bound. To update an AuxProp it must be removed and added again."),(0,r.kt)("h3",{id:"auxpropnew"},(0,r.kt)("inlineCode",{parentName:"h3"},"AuxProp.new()")),(0,r.kt)("p",null,"Returns a new AuxProp. Attach to an entity with ",(0,r.kt)("a",{parentName:"p",href:"/client/lua-api/living#livingadd_aux_propaux_prop"},"living:add_aux_prop()")," and remove with ",(0,r.kt)("a",{parentName:"p",href:"/client/lua-api/living#livingremove_aux_propaux_prop"},"living:add_aux_prop()")),(0,r.kt)("h3",{id:"aux_proponce"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:once()")),(0,r.kt)("p",null,"Allows the AuxProp to auto remove after it's effects are first applied."),(0,r.kt)("h3",{id:"aux_propimmediate"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:immediate()")),(0,r.kt)("p",null,"Allows the AuxProp to auto remove after a single test run, approximately a single battle frame."),(0,r.kt)("h3",{id:"aux_propwith_callbackcallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:with_callback(callback)")),(0,r.kt)("p",null,"The callback will be called shortly after the AuxProp's effect is applied. Multiple callbacks can be added to a single AuxProp."),(0,r.kt)("h2",{id:"auxprop-requirements"},"AuxProp Requirements"),(0,r.kt)("p",null,"An AuxProp can have zero or more requirements. Every requirement must pass on the same test run (approximately a single battle frame) to execute ",(0,r.kt)("a",{parentName:"p",href:"#auxprop-effects"},"effects")," and callbacks."),(0,r.kt)("p",null,"The requirements affect the final priority of the AuxProp.\nThe lowest requirement priority is used as a secondary priority when multiple ",(0,r.kt)("a",{parentName:"p",href:"#auxprop-effects"},"effects")," have the same priority.\nThe lower the priority is in the list, the later it will execute."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unconditional"),(0,r.kt)("li",{parentName:"ul"},"Interval"),(0,r.kt)("li",{parentName:"ul"},"Hit"),(0,r.kt)("li",{parentName:"ul"},"Body"),(0,r.kt)("li",{parentName:"ul"},"HP Expression"),(0,r.kt)("li",{parentName:"ul"},"HP GE"),(0,r.kt)("li",{parentName:"ul"},"HP LE")),(0,r.kt)("p",null,"All hit related requirements will use hit properties after ",(0,r.kt)("a",{parentName:"p",href:"/client/lua-api/living#defenserule"},"DefenseRule")," modification and before AuxProp modification."),(0,r.kt)("h3",{id:"aux_proprequire_intervalframes"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_interval(frames)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Interval priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"frames"),": number")),(0,r.kt)("p",null,"The AuxProp can pass if ",(0,r.kt)("inlineCode",{parentName:"p"},"battle_frame_time % frames == 0")),(0,r.kt)("h3",{id:"aux_proprequire_hit_elementelement"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_hit_element(element)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hit priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"element"),": ",(0,r.kt)("a",{parentName:"li",href:"/client/lua-api/spell#element"},"Element"))),(0,r.kt)("p",null,"The AuxProp will check the incoming hit's element and secondary element of incoming hits for a match."),(0,r.kt)("h3",{id:"aux_proprequire_hit_element_is_weakness"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_hit_element_is_weakness()")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hit priority")),(0,r.kt)("p",null,"The AuxProp will check the incoming hit's element and secondary element to see if the attached entity's element is weak to either element."),(0,r.kt)("h3",{id:"aux_proprequire_hit_flaghit_flags"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_hit_flag(hit_flags)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hit priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hit_flags"),": ",(0,r.kt)("a",{parentName:"li",href:"/client/lua-api/spell#hit_propsflags"},"Hit"))),(0,r.kt)("p",null,"The AuxProp will check the incoming hit's ",(0,r.kt)("a",{parentName:"p",href:"/client/lua-api/spell#hit_propsflags"},"flags")," to see if all matching flags apply."),(0,r.kt)("h3",{id:"aux_proprequire_hit_damagecompare-damage"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_hit_damage(compare, damage)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hit priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compare"),": ",(0,r.kt)("a",{parentName:"li",href:"#compare"},"Compare")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"damage"),": number")),(0,r.kt)("p",null,"The AuxProp will check the incoming hit's ",(0,r.kt)("a",{parentName:"p",href:"/client/lua-api/spell#hit_propsdamage"},"damage"),"."),(0,r.kt)("h3",{id:"aux_proprequire_projected_hit_damageexpr-compare-damage"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_projected_hit_damage(expr, compare, damage)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hit priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expr"),": An ",(0,r.kt)("a",{parentName:"li",href:"#auxmath"},"AuxMath")," expression, ",(0,r.kt)("inlineCode",{parentName:"li"},'"DAMAGE"')," will represent the damage value for the current hit."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compare"),": ",(0,r.kt)("a",{parentName:"li",href:"#compare"},"Compare")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"damage"),": number")),(0,r.kt)("p",null,"The AuxProp will check the incoming hit's ",(0,r.kt)("a",{parentName:"p",href:"/client/lua-api/spell#hit_propsdamage"},"damage"),"."),(0,r.kt)("h3",{id:"aux_proprequire_total_damagecompare-damage"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_total_damage(compare, damage)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hit priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compare"),": ",(0,r.kt)("a",{parentName:"li",href:"#compare"},"Compare")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"damage"),": number")),(0,r.kt)("p",null,"The AuxProp will check the total incoming damage from all hits in the current frame."),(0,r.kt)("h3",{id:"aux_proprequire_elementelement"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_element(element)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Body priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"element"),": ",(0,r.kt)("a",{parentName:"li",href:"/client/lua-api/spell#element"},"Element"))),(0,r.kt)("p",null,"The AuxProp will check the attached entity for matching element."),(0,r.kt)("h3",{id:"aux_proprequire_emotionemotion"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_emotion(emotion)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Body priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"emotion"),": string")),(0,r.kt)("p",null,"The AuxProp will check the attached entity for matching emotion."),(0,r.kt)("h3",{id:"aux_proprequire_projected_health_thresholdexpr-compare-percentage"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_projected_health_threshold(expr, compare, percentage)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HP Expression priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expr"),": An ",(0,r.kt)("a",{parentName:"li",href:"#auxmath"},"AuxMath")," expression, ",(0,r.kt)("inlineCode",{parentName:"li"},'"DAMAGE"')," will represent the total damage value for all incoming hits."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compare"),": ",(0,r.kt)("a",{parentName:"li",href:"#compare"},"Compare")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"percentage"),": a number in range ","[0, 1]")),(0,r.kt)("p",null,"The AuxProp will compare the result of the expression divided by the entity's max_health against ",(0,r.kt)("inlineCode",{parentName:"p"},"percentage"),"."),(0,r.kt)("h3",{id:"aux_proprequire_projected_healthhealth"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_projected_health(health)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HP Expression priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expr"),": An ",(0,r.kt)("a",{parentName:"li",href:"#auxmath"},"AuxMath")," expression, ",(0,r.kt)("inlineCode",{parentName:"li"},'"DAMAGE"')," will represent the total damage value for all incoming hits."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compare"),": ",(0,r.kt)("a",{parentName:"li",href:"#compare"},"Compare")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"health"),": a number")),(0,r.kt)("p",null,"The AuxProp will compare the result of the expression against ",(0,r.kt)("inlineCode",{parentName:"p"},"health"),"."),(0,r.kt)("h3",{id:"aux_proprequire_health_thresholdcompare-percentage"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_health_threshold(compare, percentage)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HP GE or HP LE priority depending on ",(0,r.kt)("inlineCode",{parentName:"li"},"compare")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compare"),": ",(0,r.kt)("a",{parentName:"li",href:"#compare"},"Compare")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"percentage"),": a number in range ","[0, 1]")),(0,r.kt)("p",null,"The AuxProp will compare the entity's health divided by it's max health against ",(0,r.kt)("inlineCode",{parentName:"p"},"percentage"),"."),(0,r.kt)("h3",{id:"aux_proprequire_healthcompare-health"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_health(compare, health)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HP GE or HP LE priority depending on ",(0,r.kt)("inlineCode",{parentName:"li"},"compare")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compare"),": ",(0,r.kt)("a",{parentName:"li",href:"#compare"},"Compare")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"health"),": a number")),(0,r.kt)("p",null,"The AuxProp will compare the entity's health against ",(0,r.kt)("inlineCode",{parentName:"p"},"health"),"."),(0,r.kt)("h2",{id:"compare"},"Compare"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Compare.LT"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Less Than <"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Compare.LE"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Less Than Equal <="))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Compare.NE"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Not Equal ~="))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Compare.EQ"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Equal =="))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Compare.GT"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Greater Than >"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Compare.GE"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Greater Than Equal >=")))),(0,r.kt)("h2",{id:"auxprop-effects"},"AuxProp Effects"),(0,r.kt)("p",null,"An AuxProp can have one optional effect (but still have multiple callbacks). The type of effect has a strong influence over the priority and execution order of the effect."),(0,r.kt)("p",null,"The lower the priority is in the list, the later it will execute."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Status Immunity"),(0,r.kt)("li",{parentName:"ul"},"Apply Status"),(0,r.kt)("li",{parentName:"ul"},"Remove Status"),(0,r.kt)("li",{parentName:"ul"},"Increase Hit Damage"),(0,r.kt)("li",{parentName:"ul"},"Decrease Hit Damage"),(0,r.kt)("li",{parentName:"ul"},"Decrease Damage Total"),(0,r.kt)("li",{parentName:"ul"},"Drain Health"),(0,r.kt)("li",{parentName:"ul"},"Recover Health"),(0,r.kt)("li",{parentName:"ul"},"No Effect")),(0,r.kt)("h3",{id:"aux_propdeclare_immunityhit_flags"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:declare_immunity(hit_flags)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Status Immunity priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hit_flags"),": ",(0,r.kt)("a",{parentName:"li",href:"/client/lua-api/spell#hit_propsflags"},"Hit"))),(0,r.kt)("p",null,"Declares immunity for incoming hits this frame, will not remove existing statuses."),(0,r.kt)("h3",{id:"aux_propapply_statushit_flag-duration"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:apply_status(hit_flag, duration)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apply Status priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hit_flag"),": ",(0,r.kt)("a",{parentName:"li",href:"/client/lua-api/spell#hit_propsflags"},"Hit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"duration"),": number, how many game frames the effect should last")),(0,r.kt)("p",null,"Applies a status to the entity."),(0,r.kt)("h3",{id:"aux_propremove_statushit_flag"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:remove_status(hit_flag)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove Status priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hit_flag"),": ",(0,r.kt)("a",{parentName:"li",href:"/client/lua-api/spell#hit_propsflags"},"Hit"))),(0,r.kt)("p",null,"Removes an existing status on the entity, won't affect incoming hits."),(0,r.kt)("h3",{id:"aux_propincrease_hit_damageexpr"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:increase_hit_damage(expr)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Increase Hit Damage priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expr"),": An ",(0,r.kt)("a",{parentName:"li",href:"#auxmath"},"AuxMath")," expression, ",(0,r.kt)("inlineCode",{parentName:"li"},'"DAMAGE"')," will represent the damage value for the current hit.")),(0,r.kt)("p",null,"The difference in the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"expr")," and the incoming hit's damage will be used to update the total incoming damage."),(0,r.kt)("p",null,"If the result is less than the incoming hit's damage, a warning will be logged."),(0,r.kt)("h3",{id:"aux_propdecrease_hit_damageexpr"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:decrease_hit_damage(expr)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decrease Hit Damage priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expr"),": An ",(0,r.kt)("a",{parentName:"li",href:"#auxmath"},"AuxMath")," expression, ",(0,r.kt)("inlineCode",{parentName:"li"},'"DAMAGE"')," will represent the damage value for the current hit.")),(0,r.kt)("p",null,"The difference in the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"expr")," and the incoming hit's damage will be used to update the total incoming damage."),(0,r.kt)("p",null,"If the result is less than the incoming hit's damage, a warning will be logged."),(0,r.kt)("h3",{id:"aux_propdecrease_total_damageexpr"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:decrease_total_damage(expr)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decrease Damage Total priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expr"),": An ",(0,r.kt)("a",{parentName:"li",href:"#auxmath"},"AuxMath")," expression, ",(0,r.kt)("inlineCode",{parentName:"li"},'"DAMAGE"')," will represent the total damage value for all incoming hits.")),(0,r.kt)("p",null,"The result of ",(0,r.kt)("inlineCode",{parentName:"p"},"expr")," will be used to modify the total incoming damage."),(0,r.kt)("p",null,"If the total damage was previously not zero the final total damage will have a minimum value of 1."),(0,r.kt)("h3",{id:"aux_propdrain_healthhealth"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:drain_health(health)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drain Health priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"health"),": the amount of health to take away")),(0,r.kt)("h3",{id:"aux_proprecover_healthhealth"},(0,r.kt)("inlineCode",{parentName:"h3"},"aux_prop:recover_health(health)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recover Health priority"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"health"),": the amount of health to restore")),(0,r.kt)("h2",{id:"auxmath"},"AuxMath"),(0,r.kt)("p",null,"Math expressions for AuxProps that are evalulated later in time."),(0,r.kt)("p",null,"Acceptable values for anything accepting AuxMath:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Numbers"),(0,r.kt)("li",{parentName:"ul"},"Strings representing variables:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"HEALTH"'),": The attached entities health."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"MAX_HEALTH"'),": The attached entities max health."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"DAMAGE"'),": Context dependent damage value, either from a single hit or the total of all hits."))),(0,r.kt)("li",{parentName:"ul"},"The result of a function returning an AuxMath value (defined below)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Results of these functions can be chained: ",(0,r.kt)("inlineCode",{parentName:"li"},"AuxMath.sub(AuxMath.add(1, 3), 2)")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"AuxMath.add(1, 3):sub(2)")," have the same result.")))),(0,r.kt)("h3",{id:"auxmathadda-b"},(0,r.kt)("inlineCode",{parentName:"h3"},"AuxMath.add(a, b)")),(0,r.kt)("p",null,"Returns an AuxMath expression representing ",(0,r.kt)("inlineCode",{parentName:"p"},"a + b")),(0,r.kt)("h3",{id:"auxmathsuba-b"},(0,r.kt)("inlineCode",{parentName:"h3"},"AuxMath.sub(a, b)")),(0,r.kt)("p",null,"Returns an AuxMath expression representing ",(0,r.kt)("inlineCode",{parentName:"p"},"a - b")),(0,r.kt)("h3",{id:"auxmathmula-b"},(0,r.kt)("inlineCode",{parentName:"h3"},"AuxMath.mul(a, b)")),(0,r.kt)("p",null,"Returns an AuxMath expression representing ",(0,r.kt)("inlineCode",{parentName:"p"},"a * b")),(0,r.kt)("h3",{id:"auxmathdiva-b"},(0,r.kt)("inlineCode",{parentName:"h3"},"AuxMath.div(a, b)")),(0,r.kt)("p",null,"Returns an AuxMath expression representing ",(0,r.kt)("inlineCode",{parentName:"p"},"a / b")),(0,r.kt)("h3",{id:"auxmathmoda-b"},(0,r.kt)("inlineCode",{parentName:"h3"},"AuxMath.mod(a, b)")),(0,r.kt)("p",null,"Returns an AuxMath expression representing ",(0,r.kt)("inlineCode",{parentName:"p"},"a % b")),(0,r.kt)("h3",{id:"auxmathabsa"},(0,r.kt)("inlineCode",{parentName:"h3"},"AuxMath.abs(a)")),(0,r.kt)("p",null,"Returns an AuxMath expression representing ",(0,r.kt)("inlineCode",{parentName:"p"},"math.abs(a)")),(0,r.kt)("h3",{id:"auxmathsigna"},(0,r.kt)("inlineCode",{parentName:"h3"},"AuxMath.sign(a)")),(0,r.kt)("p",null,"Returns an AuxMath expression that calculates the sign of ",(0,r.kt)("inlineCode",{parentName:"p"},"a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a < 0")," will evalulate to -1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a == 0")," will evalulate to 0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a > 0")," will evalulate to 1")),(0,r.kt)("h3",{id:"auxmathclampa-b-c"},(0,r.kt)("inlineCode",{parentName:"h3"},"AuxMath.clamp(a, b, c)")),(0,r.kt)("p",null,"Returns an AuxMath expression that keeps ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," between ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a < b")," will evalulate to ",(0,r.kt)("inlineCode",{parentName:"li"},"b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a > c")," will evalulate to ",(0,r.kt)("inlineCode",{parentName:"li"},"c")),(0,r.kt)("li",{parentName:"ul"},"Otherwise it will evalulate to ",(0,r.kt)("inlineCode",{parentName:"li"},"a"))),(0,r.kt)("h3",{id:"auxmathevalexpr-variables"},(0,r.kt)("inlineCode",{parentName:"h3"},"AuxMath.eval(expr, variables?)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expr"),": an AuxMath expression"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"variables"),": a table mapping variable names to values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local variables = {\n  a = 3,\n  b = 1\n}\n\n-- lua\nprint((3 + 2) - 1) -- 4\n\n-- chaining\nprint(AuxMath.add(3, 2):sub(1):eval()) -- 4\n\n-- variables, chaining\nprint(AuxMath.add("a", 2):sub("b"):eval(variables)) -- 4\n\n-- variables, no chaining\nprint(AuxMath.eval(AuxMath.sub(AuxMath.add("a", 2), "b"), variables)) -- 4\n')))}d.isMDXComponent=!0}}]);