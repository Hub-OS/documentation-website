"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6278],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>k});var a=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},d=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,p=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=l(t),m=i,k=s["".concat(c,".").concat(m)]||s[m]||u[m]||p;return t?a.createElement(k,n(n({ref:r},d),{},{components:t})):a.createElement(k,n({ref:r},d))}));function k(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var p=t.length,n=new Array(p);n[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[s]="string"==typeof e?e:i,n[1]=o;for(var l=2;l<p;l++)n[l]=t[l];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7322:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var a=t(7462),i=(t(7294),t(3905));const p={},n="CardProperties",o={unversionedId:"client/lua-api/attack-api/card-properties",id:"client/lua-api/attack-api/card-properties",title:"CardProperties",description:"CardProperties.new()",source:"@site/docs/01-client/02-lua-api/04-attack-api/05-card-properties.md",sourceDirName:"01-client/02-lua-api/04-attack-api",slug:"/client/lua-api/attack-api/card-properties",permalink:"/client/lua-api/attack-api/card-properties",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/04-attack-api/05-card-properties.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"clientSidebar",previous:{title:"HitProps",permalink:"/client/lua-api/attack-api/hit-props"},next:{title:"Status",permalink:"/client/lua-api/attack-api/status"}},c={},l=[{value:"<code>CardProperties.new()</code>",id:"cardpropertiesnew",level:3},{value:"<code>CardProperties.from_package(package_id, code?)</code>",id:"cardpropertiesfrom_packagepackage_id-code",level:3},{value:"<code>card_properties.package_id</code>",id:"card_propertiespackage_id",level:3},{value:"<code>card_properties.namespace</code>",id:"card_propertiesnamespace",level:3},{value:"<code>card_properties.short_name</code>",id:"card_propertiesshort_name",level:3},{value:"<code>card_properties.damage</code>",id:"card_propertiesdamage",level:3},{value:"<code>card_properties.recover</code>",id:"card_propertiesrecover",level:3},{value:"<code>card_properties.code</code>",id:"card_propertiescode",level:3},{value:"<code>card_properties.element</code>",id:"card_propertieselement",level:3},{value:"<code>card_properties.secondary_element</code>",id:"card_propertiessecondary_element",level:3},{value:"<code>card_properties.card_class</code>",id:"card_propertiescard_class",level:3},{value:"<code>card_properties.hit_flags</code>",id:"card_propertieshit_flags",level:3},{value:"<code>card_properties.can_boost</code>",id:"card_propertiescan_boost",level:3},{value:"<code>card_properties.time_freeze</code>",id:"card_propertiestime_freeze",level:3},{value:"<code>card_properties.skip_time_freeze_intro</code>",id:"card_propertiesskip_time_freeze_intro",level:3},{value:"<code>card_properties.tags</code>",id:"card_propertiestags",level:3}],d={toc:l},s="wrapper";function u(e){let{components:r,...t}=e;return(0,i.kt)(s,(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cardproperties"},"CardProperties"),(0,i.kt)("h3",{id:"cardpropertiesnew"},(0,i.kt)("inlineCode",{parentName:"h3"},"CardProperties.new()")),(0,i.kt)("p",null,"Returns a new CardProperties table with default values."),(0,i.kt)("h3",{id:"cardpropertiesfrom_packagepackage_id-code"},(0,i.kt)("inlineCode",{parentName:"h3"},"CardProperties.from_package(package_id, code?)")),(0,i.kt)("p",null,"Returns a new CardProperties table using package information."),(0,i.kt)("h3",{id:"card_propertiespackage_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.package_id")),(0,i.kt)("p",null,"String, used for resolving to an ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/action"},"Action"),"."),(0,i.kt)("h3",{id:"card_propertiesnamespace"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.namespace")),(0,i.kt)("p",null,"Undefined type, used for resolving to an ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/action"},"Action"),"."),(0,i.kt)("h3",{id:"card_propertiesshort_name"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.short_name")),(0,i.kt)("p",null,"String, displayed during time freeze."),(0,i.kt)("h3",{id:"card_propertiesdamage"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.damage")),(0,i.kt)("p",null,"Number, influences generated ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/hit-props"},"HitProps"),"."),(0,i.kt)("p",null,"Displayed during time freeze."),(0,i.kt)("h3",{id:"card_propertiesrecover"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.recover")),(0,i.kt)("p",null,"Number, used by other mods for conditional behavior."),(0,i.kt)("h3",{id:"card_propertiescode"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.code")),(0,i.kt)("p",null,"String, used by other mods for conditional behavior."),(0,i.kt)("h3",{id:"card_propertieselement"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.element")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/hit-props#element"},"Element"),", influences generated ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/hit-props"},"HitProps")),(0,i.kt)("h3",{id:"card_propertiessecondary_element"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.secondary_element")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/hit-props#element"},"Element"),", influences generated ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/hit-props"},"HitProps")),(0,i.kt)("h3",{id:"card_propertiescard_class"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.card_class")),(0,i.kt)("p",null,"Any of the values below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CardClass.Standard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CardClass.Mega")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CardClass.Giga")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CardClass.Dark"))),(0,i.kt)("h3",{id:"card_propertieshit_flags"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.hit_flags")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/hit-props#hit_propsflags"},"Hit"),", influences generated ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/hit-props"},"HitProps")),(0,i.kt)("h3",{id:"card_propertiescan_boost"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.can_boost")),(0,i.kt)("p",null,"Boolean or nil, used by other mods for conditional behavior."),(0,i.kt)("h3",{id:"card_propertiestime_freeze"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.time_freeze")),(0,i.kt)("p",null,"Boolean or nil, enables time freeze for the ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/action"},"Action"),"."),(0,i.kt)("h3",{id:"card_propertiesskip_time_freeze_intro"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.skip_time_freeze_intro")),(0,i.kt)("p",null,"Boolean or nil, used by ",(0,i.kt)("a",{parentName:"p",href:"/client/lua-api/attack-api/action"},"Actions")," to skip displaying the name of the attack and prevent time freeze countering."),(0,i.kt)("h3",{id:"card_propertiestags"},(0,i.kt)("inlineCode",{parentName:"h3"},"card_properties.tags")),(0,i.kt)("p",null,"A list of strings, used by other mods for conditional behavior."))}u.isMDXComponent=!0}}]);