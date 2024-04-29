"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=i.createContext({}),u=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=u(n),f=l,k=s["".concat(o,".").concat(f)]||s[f]||c[f]||a;return n?i.createElement(k,r(r({ref:t},p),{},{components:n})):i.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=f;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[s]="string"==typeof e?e:l,r[1]=d;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var i=n(7462),l=(n(7294),n(3905));const a={},r="DefenseRule",d={unversionedId:"client/lua-api/defense-api/defense-rule",id:"client/lua-api/defense-api/defense-rule",title:"DefenseRule",description:"See living:adddefenserule()",source:"@site/docs/01-client/02-lua-api/05-defense-api/01-defense-rule.md",sourceDirName:"01-client/02-lua-api/05-defense-api",slug:"/client/lua-api/defense-api/defense-rule",permalink:"/client/lua-api/defense-api/defense-rule",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/05-defense-api/01-defense-rule.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"clientSidebar",previous:{title:"TurnGauge",permalink:"/client/lua-api/attack-api/turn-gauge"},next:{title:"IntangibleRule",permalink:"/client/lua-api/defense-api/intangible-rule"}},o={},u=[{value:"<code>DefenseRule.new(defense_priority, defense_order)</code>",id:"defenserulenewdefense_priority-defense_order",level:3},{value:"<code>defense_rule:replaced()</code>",id:"defense_rulereplaced",level:3},{value:"<code>defense_rule.on_replace_func = function()</code>",id:"defense_ruleon_replace_func--function",level:3},{value:"<code>defense_rule.can_block_func = function(judge, attacker, defender, hit_props)</code>",id:"defense_rulecan_block_func--functionjudge-attacker-defender-hit_props",level:3},{value:"<code>defense_rule.filter_statuses_func = function(hit_props): HitProps</code>",id:"defense_rulefilter_statuses_func--functionhit_props-hitprops",level:3},{value:"DefenseVirusBody",id:"defensevirusbody",level:2},{value:"<code>DefenseVirusBody.new()</code>",id:"defensevirusbodynew",level:3},{value:"DefenseJudge",id:"defensejudge",level:2},{value:"<code>judge:block_damage()</code>",id:"judgeblock_damage",level:3},{value:"<code>judge:block_impact()</code>",id:"judgeblock_impact",level:3},{value:"<code>judge:damage_blocked()</code>",id:"judgedamage_blocked",level:3},{value:"<code>judge:impact_blocked()</code>",id:"judgeimpact_blocked",level:3}],p={toc:u},s="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"defenserule"},"DefenseRule"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/living#livingadd_defense_ruledefense_rule"},"living:add_defense_rule()")),(0,l.kt)("h3",{id:"defenserulenewdefense_priority-defense_order"},(0,l.kt)("inlineCode",{parentName:"h3"},"DefenseRule.new(defense_priority, defense_order)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"priority"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DefensePriority.Barrier")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DefensePriority.Body")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DefensePriority.Action")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DefensePriority.Trap"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Additionally causes all players to see ",(0,l.kt)("inlineCode",{parentName:"li"},"????")," in the UI"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DefensePriority.Last")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"defense_order"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DefenseOrder.Always")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DefenseOrder.CollisionOnly"))))),(0,l.kt)("p",null,"Adding a DefenseRule to an entity when a DefenseRule already exists with the same priorty will replace the existing rule."),(0,l.kt)("p",null,"Returns a new DefenseRule."),(0,l.kt)("h3",{id:"defense_rulereplaced"},(0,l.kt)("inlineCode",{parentName:"h3"},"defense_rule:replaced()")),(0,l.kt)("p",null,"Returns true if a DefenseRule with the same priority replaced this rule."),(0,l.kt)("h3",{id:"defense_ruleon_replace_func--function"},(0,l.kt)("inlineCode",{parentName:"h3"},"defense_rule.on_replace_func = function()")),(0,l.kt)("p",null,"Called when a DefenseRule with the same priority replaced this rule."),(0,l.kt)("h3",{id:"defense_rulecan_block_func--functionjudge-attacker-defender-hit_props"},(0,l.kt)("inlineCode",{parentName:"h3"},"defense_rule.can_block_func = function(judge, attacker, defender, hit_props)")),(0,l.kt)("p",null,"If the defense order is ",(0,l.kt)("inlineCode",{parentName:"p"},"DefenseOrder.Always"),", this function will be called on every hit."),(0,l.kt)("p",null,"If the defense order is ",(0,l.kt)("inlineCode",{parentName:"p"},"DefenseOrder.CollisionOnly"),", this function will be called after intangibility is determined to not block the attack."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"judge"),": ",(0,l.kt)("a",{parentName:"li",href:"#defensejudge"},"DefenseJudge")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"attacker"),": ",(0,l.kt)("a",{parentName:"li",href:"/client/lua-api/entity-api/entity"},"Entity")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"defender"),": ",(0,l.kt)("a",{parentName:"li",href:"/client/lua-api/entity-api/entity"},"Entity")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hit_props"),": ",(0,l.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/hit-props"},"HitProps"))),(0,l.kt)("h3",{id:"defense_rulefilter_statuses_func--functionhit_props-hitprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"defense_rule.filter_statuses_func = function(hit_props): HitProps")),(0,l.kt)("p",null,"Called before applying damage and statuses to the entity."),(0,l.kt)("p",null,"Should return ",(0,l.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/hit-props"},"HitProps")),(0,l.kt)("p",null,"The return value replaces the HitProps applied to the entity."),(0,l.kt)("h2",{id:"defensevirusbody"},"DefenseVirusBody"),(0,l.kt)("h3",{id:"defensevirusbodynew"},(0,l.kt)("inlineCode",{parentName:"h3"},"DefenseVirusBody.new()")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("a",{parentName:"p",href:"#defenserule"},"DefenseRule")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"DefensePriority.Body")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"DefenseOrder.CollisionOnly"),"."),(0,l.kt)("p",null,"Filters ",(0,l.kt)("inlineCode",{parentName:"p"},"Hit.Flinch")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Hit.Flash")," flags during status filtering."),(0,l.kt)("h2",{id:"defensejudge"},"DefenseJudge"),(0,l.kt)("p",null,"Created for each attack resolution and passed through ",(0,l.kt)("a",{parentName:"p",href:"#defenserule"},"DefenseRule")," callbacks."),(0,l.kt)("h3",{id:"judgeblock_damage"},(0,l.kt)("inlineCode",{parentName:"h3"},"judge:block_damage()")),(0,l.kt)("p",null,"Prevents damage and statuses from applying to the defending entity."),(0,l.kt)("h3",{id:"judgeblock_impact"},(0,l.kt)("inlineCode",{parentName:"h3"},"judge:block_impact()")),(0,l.kt)("p",null,"Used to mark ",(0,l.kt)("inlineCode",{parentName:"p"},"Hit.Impact")," as handled / retaliated."),(0,l.kt)("p",null,"Does not strip ",(0,l.kt)("inlineCode",{parentName:"p"},"Hit.Impact"),"."),(0,l.kt)("h3",{id:"judgedamage_blocked"},(0,l.kt)("inlineCode",{parentName:"h3"},"judge:damage_blocked()")),(0,l.kt)("p",null,"Returns true if ",(0,l.kt)("inlineCode",{parentName:"p"},"judge:block_damage()")," was called."),(0,l.kt)("h3",{id:"judgeimpact_blocked"},(0,l.kt)("inlineCode",{parentName:"h3"},"judge:impact_blocked()")),(0,l.kt)("p",null,"Returns true if ",(0,l.kt)("inlineCode",{parentName:"p"},"judge:block_impact()")," was called."))}c.isMDXComponent=!0}}]);