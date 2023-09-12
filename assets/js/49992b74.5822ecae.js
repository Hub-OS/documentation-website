"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3006],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),u=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(o.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=u(t),f=r,k=s["".concat(o,".").concat(f)]||s[f]||c[f]||a;return t?i.createElement(k,l(l({ref:n},p),{},{components:t})):i.createElement(k,l({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=f;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d[s]="string"==typeof e?e:r,l[1]=d;for(var u=2;u<a;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var i=t(7462),r=(t(7294),t(3905));const a={},l="DefenseRule",d={unversionedId:"client/lua-api/defense-api/defense-rule",id:"client/lua-api/defense-api/defense-rule",title:"DefenseRule",description:"See living:adddefenserule()",source:"@site/docs/01-client/02-lua-api/05-defense-api/01-defense-rule.md",sourceDirName:"01-client/02-lua-api/05-defense-api",slug:"/client/lua-api/defense-api/defense-rule",permalink:"/client/lua-api/defense-api/defense-rule",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/05-defense-api/01-defense-rule.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"clientSidebar",previous:{title:"TurnGauge",permalink:"/client/lua-api/attack-api/turn-gauge"},next:{title:"IntangibleRule",permalink:"/client/lua-api/defense-api/intangible-rule"}},o={},u=[{value:"<code>DefenseRule.new(priority, defense_order)</code>",id:"defenserulenewpriority-defense_order",level:3},{value:"<code>defense_rule:replaced()</code>",id:"defense_rulereplaced",level:3},{value:"<code>defense_rule.on_replace_func = function()</code>",id:"defense_ruleon_replace_func--function",level:3},{value:"<code>defense_rule.can_block_func = function(judge, attacker, defender, hit_props)</code>",id:"defense_rulecan_block_func--functionjudge-attacker-defender-hit_props",level:3},{value:"<code>defense_rule.filter_statuses_func = function(hit_props)</code>",id:"defense_rulefilter_statuses_func--functionhit_props",level:3},{value:"DefenseVirusBody",id:"defensevirusbody",level:2},{value:"<code>DefenseVirusBody.new()</code>",id:"defensevirusbodynew",level:3},{value:"DefenseJudge",id:"defensejudge",level:2},{value:"<code>judge:block_damage()</code>",id:"judgeblock_damage",level:3},{value:"<code>judge:block_impact()</code>",id:"judgeblock_impact",level:3},{value:"<code>judge:damage_blocked()</code>",id:"judgedamage_blocked",level:3},{value:"<code>judge:impact_blocked()</code>",id:"judgeimpact_blocked",level:3}],p={toc:u},s="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"defenserule"},"DefenseRule"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/client/lua-api/entity-api/living#livingadd_defense_ruledefense_rule"},"living:add_defense_rule()")),(0,r.kt)("h3",{id:"defenserulenewpriority-defense_order"},(0,r.kt)("inlineCode",{parentName:"h3"},"DefenseRule.new(priority, defense_order)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"priority"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DefensePriority.Barrier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DefensePriority.Body")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DefensePriority.Action")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DefensePriority.Trap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DefensePriority.Last")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defense_order"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DefenseOrder.Always")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DefenseOrder.CollisionOnly"))))),(0,r.kt)("p",null,"Adding a DefenseRule to an entity when a DefenseRule already exists with the same priorty will replace the existing rule."),(0,r.kt)("h3",{id:"defense_rulereplaced"},(0,r.kt)("inlineCode",{parentName:"h3"},"defense_rule:replaced()")),(0,r.kt)("p",null,"Returns true if a DefenseRule with the same priority replaced this rule."),(0,r.kt)("h3",{id:"defense_ruleon_replace_func--function"},(0,r.kt)("inlineCode",{parentName:"h3"},"defense_rule.on_replace_func = function()")),(0,r.kt)("p",null,"Called when a DefenseRule with the same priority replaced this rule."),(0,r.kt)("h3",{id:"defense_rulecan_block_func--functionjudge-attacker-defender-hit_props"},(0,r.kt)("inlineCode",{parentName:"h3"},"defense_rule.can_block_func = function(judge, attacker, defender, hit_props)")),(0,r.kt)("p",null,"If the defense order is ",(0,r.kt)("inlineCode",{parentName:"p"},"DefenseOrder.Always"),", this function will be called on every hit."),(0,r.kt)("p",null,"If the defense order is ",(0,r.kt)("inlineCode",{parentName:"p"},"DefenseOrder.CollisionOnly"),", this function will be called after intangibility is determined to not block the attack."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"judge"),": ",(0,r.kt)("a",{parentName:"li",href:"#defensejudge"},"DefenseJudge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attacker"),": ",(0,r.kt)("a",{parentName:"li",href:"/client/lua-api/entity-api/entity"},"Entity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defender"),": ",(0,r.kt)("a",{parentName:"li",href:"/client/lua-api/entity-api/entity"},"Entity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hit_props"),": ",(0,r.kt)("a",{parentName:"li",href:"/client/lua-api/attack-api/hit-props"},"HitProps"))),(0,r.kt)("h3",{id:"defense_rulefilter_statuses_func--functionhit_props"},(0,r.kt)("inlineCode",{parentName:"h3"},"defense_rule.filter_statuses_func = function(hit_props)")),(0,r.kt)("p",null,"Called before applying damage and statuses to the entity."),(0,r.kt)("p",null,"Should return ",(0,r.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/hit-props"},"HitProps")),(0,r.kt)("p",null,"The return value replaces the HitProps applied to the entity."),(0,r.kt)("h2",{id:"defensevirusbody"},"DefenseVirusBody"),(0,r.kt)("h3",{id:"defensevirusbodynew"},(0,r.kt)("inlineCode",{parentName:"h3"},"DefenseVirusBody.new()")),(0,r.kt)("p",null,"Creates a ",(0,r.kt)("a",{parentName:"p",href:"#defenserule"},"DefenseRule")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"DefensePriority.Body")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DefenseOrder.CollisionOnly"),"."),(0,r.kt)("p",null,"Filters ",(0,r.kt)("inlineCode",{parentName:"p"},"Hit.Flinch")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Hit.Flash")," flags during status filtering."),(0,r.kt)("h2",{id:"defensejudge"},"DefenseJudge"),(0,r.kt)("p",null,"Created for each attack resolution and passed through ",(0,r.kt)("a",{parentName:"p",href:"#defenserule"},"DefenseRule")," callbacks."),(0,r.kt)("h3",{id:"judgeblock_damage"},(0,r.kt)("inlineCode",{parentName:"h3"},"judge:block_damage()")),(0,r.kt)("p",null,"Prevents damage and statuses from applying to the defending entity."),(0,r.kt)("h3",{id:"judgeblock_impact"},(0,r.kt)("inlineCode",{parentName:"h3"},"judge:block_impact()")),(0,r.kt)("h3",{id:"judgedamage_blocked"},(0,r.kt)("inlineCode",{parentName:"h3"},"judge:damage_blocked()")),(0,r.kt)("p",null,"Returns true if ",(0,r.kt)("inlineCode",{parentName:"p"},"judge:block_damage()")," was called."),(0,r.kt)("h3",{id:"judgeimpact_blocked"},(0,r.kt)("inlineCode",{parentName:"h3"},"judge:impact_blocked()")),(0,r.kt)("p",null,"Returns true if ",(0,r.kt)("inlineCode",{parentName:"p"},"judge:block_impact()")," was called."))}c.isMDXComponent=!0}}]);