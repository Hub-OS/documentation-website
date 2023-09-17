"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7867],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>s});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=u(a),c=i,s=d["".concat(o,".").concat(c)]||d[c]||h[c]||l;return a?r.createElement(s,n(n({ref:t},m),{},{components:a})):r.createElement(s,n({ref:t},m))}));function s(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,n=new Array(l);n[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:i,n[1]=p;for(var u=2;u<l;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6061:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(7462),i=(a(7294),a(3905));const l={},n="AuxProp",p={unversionedId:"client/lua-api/defense-api/aux-prop",id:"client/lua-api/defense-api/aux-prop",title:"AuxProp",description:"AuxProps are structures for generating conditional behavior that composes well with other AuxProps, without requiring writers to be aware of all content to avoid ordering conflicts. AuxProps achieves this using a priority system that uses the effect and requirements to generate a clear order for behavior.",source:"@site/docs/01-client/02-lua-api/05-defense-api/03-aux-prop.md",sourceDirName:"01-client/02-lua-api/05-defense-api",slug:"/client/lua-api/defense-api/aux-prop",permalink:"/client/lua-api/defense-api/aux-prop",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/05-defense-api/03-aux-prop.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"clientSidebar",previous:{title:"IntangibleRule",permalink:"/client/lua-api/defense-api/intangible-rule"},next:{title:"Debug Hotkeys",permalink:"/client/debug-hotkeys"}},o={},u=[{value:"<code>AuxProp.new()</code>",id:"auxpropnew",level:3},{value:"<code>aux_prop:once()</code>",id:"aux_proponce",level:3},{value:"<code>aux_prop:immediate()</code>",id:"aux_propimmediate",level:3},{value:"<code>aux_prop:with_callback(callback)</code>",id:"aux_propwith_callbackcallback",level:3},{value:"AuxProp Requirements",id:"auxprop-requirements",level:2},{value:"<code>aux_prop:require_interval(frames)</code>",id:"aux_proprequire_intervalframes",level:3},{value:"<code>aux_prop:require_hit_element(element)</code>",id:"aux_proprequire_hit_elementelement",level:3},{value:"<code>aux_prop:require_hit_element_is_weakness()</code>",id:"aux_proprequire_hit_element_is_weakness",level:3},{value:"<code>aux_prop:require_hit_flag(hit_flags)</code>",id:"aux_proprequire_hit_flaghit_flags",level:3},{value:"<code>aux_prop:require_hit_damage(compare, damage)</code>",id:"aux_proprequire_hit_damagecompare-damage",level:3},{value:"<code>aux_prop:require_projected_hit_damage(expr, compare, damage)</code>",id:"aux_proprequire_projected_hit_damageexpr-compare-damage",level:3},{value:"<code>aux_prop:require_total_damage(compare, damage)</code>",id:"aux_proprequire_total_damagecompare-damage",level:3},{value:"<code>aux_prop:require_element(element)</code>",id:"aux_proprequire_elementelement",level:3},{value:"<code>aux_prop:require_emotion(emotion)</code>",id:"aux_proprequire_emotionemotion",level:3},{value:"<code>aux_prop:require_card_element(element)</code>",id:"aux_proprequire_card_elementelement",level:3},{value:"<code>aux_prop:require_card_not_element(element)</code>",id:"aux_proprequire_card_not_elementelement",level:3},{value:"<code>aux_prop:require_card_damage(damage)</code>",id:"aux_proprequire_card_damagedamage",level:3},{value:"<code>aux_prop:require_card_recover(recover)</code>",id:"aux_proprequire_card_recoverrecover",level:3},{value:"<code>aux_prop:require_card_hit_flags(hit_flags)</code>",id:"aux_proprequire_card_hit_flagshit_flags",level:3},{value:"<code>aux_prop:require_card_code(code)</code>",id:"aux_proprequire_card_codecode",level:3},{value:"<code>aux_prop:require_card_class(card_class)</code>",id:"aux_proprequire_card_classcard_class",level:3},{value:"<code>aux_prop:require_card_time_freeze(time_freeze)</code>",id:"aux_proprequire_card_time_freezetime_freeze",level:3},{value:"<code>aux_prop:require_card_tag(tag)</code>",id:"aux_proprequire_card_tagtag",level:3},{value:"<code>aux_prop:require_projected_health_threshold(expr, compare, percentage)</code>",id:"aux_proprequire_projected_health_thresholdexpr-compare-percentage",level:3},{value:"<code>aux_prop:require_projected_health(health)</code>",id:"aux_proprequire_projected_healthhealth",level:3},{value:"<code>aux_prop:require_health_threshold(compare, percentage)</code>",id:"aux_proprequire_health_thresholdcompare-percentage",level:3},{value:"<code>aux_prop:require_health(compare, health)</code>",id:"aux_proprequire_healthcompare-health",level:3},{value:"AuxProp Effects",id:"auxprop-effects",level:2},{value:"<code>aux_prop:declare_immunity(hit_flags)</code>",id:"aux_propdeclare_immunityhit_flags",level:3},{value:"<code>aux_prop:apply_status(hit_flag, duration)</code>",id:"aux_propapply_statushit_flag-duration",level:3},{value:"<code>aux_prop:remove_status(hit_flag)</code>",id:"aux_propremove_statushit_flag",level:3},{value:"<code>aux_prop:increase_hit_damage(expr)</code>",id:"aux_propincrease_hit_damageexpr",level:3},{value:"<code>aux_prop:decrease_hit_damage(expr)</code>",id:"aux_propdecrease_hit_damageexpr",level:3},{value:"<code>aux_prop:decrease_total_damage(expr)</code>",id:"aux_propdecrease_total_damageexpr",level:3},{value:"<code>aux_prop:drain_health(health)</code>",id:"aux_propdrain_healthhealth",level:3},{value:"<code>aux_prop:recover_health(health)</code>",id:"aux_proprecover_healthhealth",level:3},{value:"<code>aux_prop:intercept_action(callback)</code>",id:"aux_propintercept_actioncallback",level:3},{value:"Math Expression Strings",id:"math-expression-strings",level:2},{value:"Examples",id:"examples",level:3},{value:"Supported Values",id:"supported-values",level:3},{value:"Supported Operations",id:"supported-operations",level:3},{value:"Supported Functions",id:"supported-functions",level:3},{value:"Compare",id:"compare",level:2}],m={toc:u},d="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"auxprop"},"AuxProp"),(0,i.kt)("p",null,"AuxProps are structures for generating conditional behavior that composes well with other AuxProps, without requiring writers to be aware of all content to avoid ordering conflicts. AuxProps achieves this using a priority system that uses the effect and requirements to generate a clear order for behavior."),(0,i.kt)("p",null,"AuxProps can only be tied to a single entity and can not be updated once bound. To update an AuxProp it must be removed and added again."),(0,i.kt)("h3",{id:"auxpropnew"},(0,i.kt)("inlineCode",{parentName:"h3"},"AuxProp.new()")),(0,i.kt)("p",null,"Returns a new AuxProp. Attach to an entity with ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/living#livingadd_aux_propaux_prop"},"living:add_aux_prop()")," and remove with ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/living#livingremove_aux_propaux_prop"},"living:add_aux_prop()")),(0,i.kt)("p",null,"All AuxProp methods return the AuxProp for chaining."),(0,i.kt)("h3",{id:"aux_proponce"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:once()")),(0,i.kt)("p",null,"Allows the AuxProp to auto remove after it's effects are first applied."),(0,i.kt)("h3",{id:"aux_propimmediate"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:immediate()")),(0,i.kt)("p",null,"Allows the AuxProp to auto remove after a single test run, approximately a single battle frame."),(0,i.kt)("h3",{id:"aux_propwith_callbackcallback"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:with_callback(callback)")),(0,i.kt)("p",null,"The callback will be called shortly after the AuxProp's effect is applied. Multiple callbacks can be added to a single AuxProp."),(0,i.kt)("h2",{id:"auxprop-requirements"},"AuxProp Requirements"),(0,i.kt)("p",null,"An AuxProp can have zero or more requirements. Every requirement must pass on the same test run (approximately a single battle frame) to execute ",(0,i.kt)("a",{parentName:"p",href:"#auxprop-effects"},"effects")," and callbacks."),(0,i.kt)("p",null,"The requirements affect the final priority of the AuxProp.\nThe lowest requirement priority is used as a secondary priority when multiple ",(0,i.kt)("a",{parentName:"p",href:"#auxprop-effects"},"effects")," have the same priority.\nThe lower the priority is in the list, the later it will execute."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unconditional"),(0,i.kt)("li",{parentName:"ul"},"Interval"),(0,i.kt)("li",{parentName:"ul"},"Hit"),(0,i.kt)("li",{parentName:"ul"},"Body"),(0,i.kt)("li",{parentName:"ul"},"HP Expression"),(0,i.kt)("li",{parentName:"ul"},"HP GE"),(0,i.kt)("li",{parentName:"ul"},"HP LE")),(0,i.kt)("p",null,"All hit related requirements will use hit properties after ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/defense-api/defense-rule"},"DefenseRule")," modification and before AuxProp modification."),(0,i.kt)("h3",{id:"aux_proprequire_intervalframes"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_interval(frames)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Interval priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"frames"),": number")),(0,i.kt)("p",null,"The AuxProp can pass if ",(0,i.kt)("inlineCode",{parentName:"p"},"battle_frame_time % frames == 0")),(0,i.kt)("p",null,"In the future the AuxProp will store an internal timer that starts as soon as it is attached, increments every battle frame, passing the test on the first frame and at each interval."),(0,i.kt)("h3",{id:"aux_proprequire_hit_elementelement"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_hit_element(element)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hit priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"element"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/hit-props#element"},"Element"))),(0,i.kt)("p",null,"The AuxProp will check the incoming hit's element and secondary element of incoming hits for a match."),(0,i.kt)("h3",{id:"aux_proprequire_hit_element_is_weakness"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_hit_element_is_weakness()")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hit priority")),(0,i.kt)("p",null,"The AuxProp will check the incoming hit's element and secondary element to see if the attached entity's element is weak to either element."),(0,i.kt)("h3",{id:"aux_proprequire_hit_flaghit_flags"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_hit_flag(hit_flags)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hit priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hit_flags"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/hit-props#hit_propsflags"},"Hit"))),(0,i.kt)("p",null,"The AuxProp will check the incoming hit's ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/hit-props#hit_propsflags"},"flags")," to see if all matching flags apply."),(0,i.kt)("h3",{id:"aux_proprequire_hit_damagecompare-damage"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_hit_damage(compare, damage)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hit priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compare"),": ",(0,i.kt)("a",{parentName:"li",href:"#compare"},"Compare")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"damage"),": number")),(0,i.kt)("p",null,"The AuxProp will check the incoming hit's ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/hit-props#hit_propsdamage"},"damage"),"."),(0,i.kt)("h3",{id:"aux_proprequire_projected_hit_damageexpr-compare-damage"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_projected_hit_damage(expr, compare, damage)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hit priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr"),": ",(0,i.kt)("a",{parentName:"li",href:"#math-expression-strings"},"Math Expression String"),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"DAMAGE"')," will represent the damage value for the current hit."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compare"),": ",(0,i.kt)("a",{parentName:"li",href:"#compare"},"Compare")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"damage"),": number")),(0,i.kt)("p",null,"The AuxProp will check the incoming hit's ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/hit-props#hit_propsdamage"},"damage"),"."),(0,i.kt)("h3",{id:"aux_proprequire_total_damagecompare-damage"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_total_damage(compare, damage)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hit priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compare"),": ",(0,i.kt)("a",{parentName:"li",href:"#compare"},"Compare")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"damage"),": number")),(0,i.kt)("p",null,"The AuxProp will check the total incoming damage from all hits in the current frame."),(0,i.kt)("h3",{id:"aux_proprequire_elementelement"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_element(element)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Body priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"element"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/hit-props#element"},"Element"))),(0,i.kt)("p",null,"The AuxProp will check the attached entity for matching element."),(0,i.kt)("h3",{id:"aux_proprequire_emotionemotion"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_emotion(emotion)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Body priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"emotion"),": string")),(0,i.kt)("p",null,"The AuxProp will check the attached entity for matching emotion."),(0,i.kt)("h3",{id:"aux_proprequire_card_elementelement"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_card_element(element)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Body priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"element"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/hit-props#element"},"Element"))),(0,i.kt)("p",null,"The AuxProp will check the next card on the attached entity for either matching element or secondary element."),(0,i.kt)("h3",{id:"aux_proprequire_card_not_elementelement"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_card_not_element(element)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Body priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"element"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/hit-props#element"},"Element"))),(0,i.kt)("p",null,"The AuxProp will check the next card on the attached entity for a failed match with both element and secondary element."),(0,i.kt)("h3",{id:"aux_proprequire_card_damagedamage"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_card_damage(damage)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Body priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compare"),": ",(0,i.kt)("a",{parentName:"li",href:"#compare"},"Compare")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"damage"),": number")),(0,i.kt)("p",null,"The AuxProp will compare the damage on the next card on the attached entity against the ",(0,i.kt)("inlineCode",{parentName:"p"},"damage")," value."),(0,i.kt)("h3",{id:"aux_proprequire_card_recoverrecover"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_card_recover(recover)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Body priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compare"),": ",(0,i.kt)("a",{parentName:"li",href:"#compare"},"Compare")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"recover"),": number")),(0,i.kt)("p",null,"The AuxProp will compare the recover amount on the next card on the attached entity against the ",(0,i.kt)("inlineCode",{parentName:"p"},"recover")," value."),(0,i.kt)("h3",{id:"aux_proprequire_card_hit_flagshit_flags"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_card_hit_flags(hit_flags)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Body priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hit_flags"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/hit-props#hit_propsflags"},"Hit"))),(0,i.kt)("p",null,"The AuxProp will check the next card on the attached entity for matching hit flags."),(0,i.kt)("h3",{id:"aux_proprequire_card_codecode"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_card_code(code)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Body priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"code"),": string")),(0,i.kt)("p",null,"The AuxProp will check the next card on the attached entity for matching code."),(0,i.kt)("h3",{id:"aux_proprequire_card_classcard_class"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_card_class(card_class)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Body priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"card_class"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/card-properties#card_propertiescard_class"},"CardClass"))),(0,i.kt)("p",null,"The AuxProp will check the next card on the attached entity for matching class."),(0,i.kt)("h3",{id:"aux_proprequire_card_time_freezetime_freeze"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_card_time_freeze(time_freeze)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Body priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time_freeze"),": bool")),(0,i.kt)("p",null,"The AuxProp will check the time freeze value on the next card on the attached entity."),(0,i.kt)("h3",{id:"aux_proprequire_card_tagtag"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_card_tag(tag)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Body priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tag"),": string")),(0,i.kt)("p",null,"The AuxProp will check the next card on the attached entity for matching tag."),(0,i.kt)("h3",{id:"aux_proprequire_projected_health_thresholdexpr-compare-percentage"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_projected_health_threshold(expr, compare, percentage)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HP Expression priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr"),": ",(0,i.kt)("a",{parentName:"li",href:"#math-expression-strings"},"Math Expression String"),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"DAMAGE"')," will represent the total damage value for all incoming hits."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compare"),": ",(0,i.kt)("a",{parentName:"li",href:"#compare"},"Compare")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"percentage"),": a number in range ","[0, 1]")),(0,i.kt)("p",null,"The AuxProp will compare the result of the expression divided by the entity's max_health against ",(0,i.kt)("inlineCode",{parentName:"p"},"percentage"),"."),(0,i.kt)("h3",{id:"aux_proprequire_projected_healthhealth"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_projected_health(health)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HP Expression priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr"),": ",(0,i.kt)("a",{parentName:"li",href:"#math-expression-strings"},"Math Expression String"),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"DAMAGE"')," will represent the total damage value for all incoming hits."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compare"),": ",(0,i.kt)("a",{parentName:"li",href:"#compare"},"Compare")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"health"),": a number")),(0,i.kt)("p",null,"The AuxProp will compare the result of the expression against ",(0,i.kt)("inlineCode",{parentName:"p"},"health"),"."),(0,i.kt)("h3",{id:"aux_proprequire_health_thresholdcompare-percentage"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_health_threshold(compare, percentage)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HP GE or HP LE priority depending on ",(0,i.kt)("inlineCode",{parentName:"li"},"compare")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compare"),": ",(0,i.kt)("a",{parentName:"li",href:"#compare"},"Compare")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"percentage"),": a number in range ","[0, 1]")),(0,i.kt)("p",null,"The AuxProp will compare the entity's health divided by it's max health against ",(0,i.kt)("inlineCode",{parentName:"p"},"percentage"),"."),(0,i.kt)("h3",{id:"aux_proprequire_healthcompare-health"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:require_health(compare, health)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HP GE or HP LE priority depending on ",(0,i.kt)("inlineCode",{parentName:"li"},"compare")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compare"),": ",(0,i.kt)("a",{parentName:"li",href:"#compare"},"Compare")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"health"),": a number")),(0,i.kt)("p",null,"The AuxProp will compare the entity's health against ",(0,i.kt)("inlineCode",{parentName:"p"},"health"),"."),(0,i.kt)("h2",{id:"auxprop-effects"},"AuxProp Effects"),(0,i.kt)("p",null,"An AuxProp can have one optional effect (but still have multiple callbacks). The type of effect has a strong influence over the priority and execution order of the effect."),(0,i.kt)("p",null,"The lower the priority is in the list, the later it will execute."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Status Immunity"),(0,i.kt)("li",{parentName:"ul"},"Apply Status"),(0,i.kt)("li",{parentName:"ul"},"Remove Status"),(0,i.kt)("li",{parentName:"ul"},"Increase Hit Damage"),(0,i.kt)("li",{parentName:"ul"},"Decrease Hit Damage"),(0,i.kt)("li",{parentName:"ul"},"Decrease Damage Total"),(0,i.kt)("li",{parentName:"ul"},"Drain Health"),(0,i.kt)("li",{parentName:"ul"},"Recover Health"),(0,i.kt)("li",{parentName:"ul"},"Intercept Action"),(0,i.kt)("li",{parentName:"ul"},"No Effect")),(0,i.kt)("h3",{id:"aux_propdeclare_immunityhit_flags"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:declare_immunity(hit_flags)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Status Immunity priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hit_flags"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/hit-props#hit_propsflags"},"Hit"))),(0,i.kt)("p",null,"Declares immunity for incoming hits this frame, will not remove existing statuses."),(0,i.kt)("h3",{id:"aux_propapply_statushit_flag-duration"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:apply_status(hit_flag, duration)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apply Status priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hit_flag"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/hit-props#hit_propsflags"},"Hit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"duration"),": number, how many game frames the effect should last")),(0,i.kt)("p",null,"Applies a status to the entity."),(0,i.kt)("h3",{id:"aux_propremove_statushit_flag"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:remove_status(hit_flag)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remove Status priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hit_flag"),": ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/hit-props#hit_propsflags"},"Hit"))),(0,i.kt)("p",null,"Removes an existing status on the entity, won't affect incoming hits."),(0,i.kt)("h3",{id:"aux_propincrease_hit_damageexpr"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:increase_hit_damage(expr)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Increase Hit Damage priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr"),": ",(0,i.kt)("a",{parentName:"li",href:"#math-expression-strings"},"Math Expression String"),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"DAMAGE"')," will represent the damage value for the current hit.")),(0,i.kt)("p",null,"The difference in the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," and the incoming hit's damage will be used to update the total incoming damage."),(0,i.kt)("p",null,"If the result is less than the incoming hit's damage, a warning will be logged."),(0,i.kt)("h3",{id:"aux_propdecrease_hit_damageexpr"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:decrease_hit_damage(expr)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Decrease Hit Damage priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr"),": ",(0,i.kt)("a",{parentName:"li",href:"#math-expression-strings"},"Math Expression String"),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"DAMAGE"')," will represent the damage value for the current hit.")),(0,i.kt)("p",null,"The difference in the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," and the incoming hit's damage will be used to update the total incoming damage."),(0,i.kt)("p",null,"If the result is more than the incoming hit's damage, a warning will be logged."),(0,i.kt)("p",null,"Note: If the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," is zero, a super effective hit or another AuxProp may still add back the damage as only the difference of the result is used.\nTo entirely negate damage a defense rule must be used."),(0,i.kt)("h3",{id:"aux_propdecrease_total_damageexpr"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:decrease_total_damage(expr)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Decrease Damage Total priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr"),": ",(0,i.kt)("a",{parentName:"li",href:"#math-expression-strings"},"Math Expression String"),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"DAMAGE"')," will represent the total damage value for all incoming hits.")),(0,i.kt)("p",null,"The result of ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," will be used to modify the total incoming damage."),(0,i.kt)("p",null,"If the total damage was previously not zero the final total damage will have a minimum value of 1."),(0,i.kt)("h3",{id:"aux_propdrain_healthhealth"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:drain_health(health)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Drain Health priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"health"),": the amount of health to take away")),(0,i.kt)("h3",{id:"aux_proprecover_healthhealth"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:recover_health(health)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Recover Health priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"health"),": the amount of health to restore")),(0,i.kt)("h3",{id:"aux_propintercept_actioncallback"},(0,i.kt)("inlineCode",{parentName:"h3"},"aux_prop:intercept_action(callback)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Intercept Action priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"callback"),": A function that accepts an ",(0,i.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/action"},"Action")," and returns an Action or nil.")),(0,i.kt)("p",null,"Intercepts an Action moving off the action queue for execution. Returning a different Action or nil in the callback will cancel and delete the Action. ",(0,i.kt)("inlineCode",{parentName:"p"},"aux_prop:require_card_*")," will refer to properties on the Action."),(0,i.kt)("h2",{id:"math-expression-strings"},"Math Expression Strings"),(0,i.kt)("p",null,"Math expressions that are evalulated later in time."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- undershirt\nlocal aux_prop = AuxProp.new()\n  :require_total_damage(Compare.GT, 0)\n  :decrease_total_damage("clamp(DAMAGE, 1, HEALTH - 1)")\n\nentity:add_aux_prop(aux_prop)\n')),(0,i.kt)("h3",{id:"supported-values"},"Supported Values"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Numbers with optional sign and decimal: ",(0,i.kt)("inlineCode",{parentName:"li"},"-1.2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"3.0")),(0,i.kt)("li",{parentName:"ul"},"Built-in variables:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HEALTH"),": The attached entities health."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MAX_HEALTH"),": The attached entities max health."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DAMAGE"),": Context dependent damage value, either from a single hit or the total of all hits.")))),(0,i.kt)("h3",{id:"supported-operations"},"Supported Operations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Addition"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Subtraction"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*")," Multiplication"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/")," Division"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"%")," Modulus / Remainder")),(0,i.kt)("h3",{id:"supported-functions"},"Supported Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clamp(value, min, max)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"abs(value)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sign(value)"))),(0,i.kt)("h2",{id:"compare"},"Compare"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Compare.LT"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Less Than <"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Compare.LE"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Less Than Equal <="))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Compare.NE"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Not Equal ~="))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Compare.EQ"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Equal =="))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Compare.GT"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Greater Than >"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Compare.GE"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Greater Than Equal >=")))))}h.isMDXComponent=!0}}]);