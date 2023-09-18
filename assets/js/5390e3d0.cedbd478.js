"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[863],{3905:(e,i,t)=>{t.d(i,{Zo:()=>d,kt:()=>m});var n=t(7294);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function c(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var i=n.useContext(l),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},d=function(e){var i=p(e.components);return n.createElement(l.Provider,{value:i},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},f=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,m=u["".concat(l,".").concat(f)]||u[f]||s[f]||o;return t?n.createElement(m,a(a({ref:i},d),{},{components:t})):n.createElement(m,a({ref:i},d))}));function m(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var l in i)hasOwnProperty.call(i,l)&&(c[l]=i[l]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8233:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const o={},a="Direction",c={unversionedId:"client/lua-api/field-api/direction",id:"client/lua-api/field-api/direction",title:"Direction",description:"- Direction.None",source:"@site/docs/01-client/02-lua-api/03-field-api/03-direction.md",sourceDirName:"01-client/02-lua-api/03-field-api",slug:"/client/lua-api/field-api/direction",permalink:"/client/lua-api/field-api/direction",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/03-field-api/03-direction.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Tile",permalink:"/client/lua-api/field-api/tile"},next:{title:"Movement",permalink:"/client/lua-api/field-api/movement"}},l={},p=[{value:"<code>Direction.flip_x(direction)</code>",id:"directionflip_xdirection",level:3},{value:"<code>Direction.flip_y(direction)</code>",id:"directionflip_ydirection",level:3},{value:"<code>Direction.reverse(direction)</code>",id:"directionreversedirection",level:3},{value:"<code>Direction.join(direction_a, direction_b)</code>",id:"directionjoindirection_a-direction_b",level:3},{value:"<code>Direction.vector(direction)</code>",id:"directionvectordirection",level:3},{value:"<code>Direction.unit_vector(direction)</code>",id:"directionunit_vectordirection",level:3}],d={toc:p},u="wrapper";function s(e){let{components:i,...t}=e;return(0,r.kt)(u,(0,n.Z)({},d,t,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"direction"},"Direction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.None")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.Up")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.Left")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.Down")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.Right")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.UpLeft")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.UpRight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.DownLeft")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.DownRight"))),(0,r.kt)("h3",{id:"directionflip_xdirection"},(0,r.kt)("inlineCode",{parentName:"h3"},"Direction.flip_x(direction)")),(0,r.kt)("p",null,"Returns a direction flipped along the x axis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"assert(Direction.flip_x(Direction.Left) == Direction.Right)\nassert(Direction.flip_x(Direction.UpLeft) == Direction.UpRight)\n")),(0,r.kt)("h3",{id:"directionflip_ydirection"},(0,r.kt)("inlineCode",{parentName:"h3"},"Direction.flip_y(direction)")),(0,r.kt)("p",null,"Returns a direction flipped along the y axis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"assert(Direction.flip_y(Direction.Up) == Direction.Down)\nassert(Direction.flip_y(Direction.UpLeft) == Direction.DownLeft)\n")),(0,r.kt)("h3",{id:"directionreversedirection"},(0,r.kt)("inlineCode",{parentName:"h3"},"Direction.reverse(direction)")),(0,r.kt)("p",null,"Returns a direction flipped along the y axis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"assert(Direction.reverse(Direction.Left) == Direction.Right)\nassert(Direction.reverse(Direction.UpLeft) == Direction.DownRight)\n")),(0,r.kt)("h3",{id:"directionjoindirection_a-direction_b"},(0,r.kt)("inlineCode",{parentName:"h3"},"Direction.join(direction_a, direction_b)")),(0,r.kt)("p",null,"Joins two directions into a single direction."),(0,r.kt)("p",null,"Returns a direction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"assert(Direction.join(Direction.Up, Direction.Left) == Direction.UpLeft)\nassert(Direction.join(Direction.UpLeft, Direction.Right) == Direction.Up)\nassert(Direction.join(Direction.Left, Direction.Right) == Direction.None)\n")),(0,r.kt)("h3",{id:"directionvectordirection"},(0,r.kt)("inlineCode",{parentName:"h3"},"Direction.vector(direction)")),(0,r.kt)("p",null,"Returns a table with ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," keys."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local vector = Direction.vector(Direction.UpLeft)\nassert(vector.x == -1 and vector.y == -1)\n")),(0,r.kt)("h3",{id:"directionunit_vectordirection"},(0,r.kt)("inlineCode",{parentName:"h3"},"Direction.unit_vector(direction)")),(0,r.kt)("p",null,"Returns a table with ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," keys."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local vector = Direction.unit_vector(Direction.UpLeft)\nprint(vector.x) -- -0.707...\nprint(vector.y) -- -0.707...\n")))}s.isMDXComponent=!0}}]);