"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[431],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(i),m=r,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return i?n.createElement(f,c(c({ref:t},d),{},{components:i})):n.createElement(f,c({ref:t},d))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,c=new Array(o);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,c[1]=a;for(var p=2;p<o;p++)c[p]=i[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},5560:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=i(7462),r=(i(7294),i(3905));const o={},c="Direction",a={unversionedId:"client/lua-api/direction",id:"client/lua-api/direction",title:"Direction",description:"- Direction.None",source:"@site/docs/01-client/02-lua-api/04-direction.md",sourceDirName:"01-client/02-lua-api",slug:"/client/lua-api/direction",permalink:"/client/lua-api/direction",draft:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/04-direction.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Field",permalink:"/client/lua-api/field"},next:{title:"Animation",permalink:"/client/lua-api/animation"}},l={},p=[{value:"<code>Direction.flip_x(direction)</code>",id:"directionflip_xdirection",level:3},{value:"<code>Direction.flip_y(direction)</code>",id:"directionflip_ydirection",level:3},{value:"<code>Direction.reverse(direction)</code>",id:"directionreversedirection",level:3},{value:"<code>Direction.join(direction_a, direction_b)</code>",id:"directionjoindirection_a-direction_b",level:3},{value:"<code>Direction.vector(direction)</code>",id:"directionvectordirection",level:3},{value:"<code>Direction.unit_vector(direction)</code>",id:"directionunit_vectordirection",level:3}],d={toc:p},u="wrapper";function s(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"direction"},"Direction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.None")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.Up")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.Left")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.Down")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.Right")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.UpLeft")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.UpRight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.DownLeft")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Direction.DownRight"))),(0,r.kt)("h3",{id:"directionflip_xdirection"},(0,r.kt)("inlineCode",{parentName:"h3"},"Direction.flip_x(direction)")),(0,r.kt)("p",null,"Returns a direction flipped along the x axis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"assert(Direction.flip_x(Direction.Left) == Direction.Right)\nassert(Direction.flip_x(Direction.UpLeft) == Direction.UpRight)\n")),(0,r.kt)("h3",{id:"directionflip_ydirection"},(0,r.kt)("inlineCode",{parentName:"h3"},"Direction.flip_y(direction)")),(0,r.kt)("p",null,"Returns a direction flipped along the y axis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"assert(Direction.flip_y(Direction.Up) == Direction.Down)\nassert(Direction.flip_y(Direction.UpLeft) == Direction.DownLeft)\n")),(0,r.kt)("h3",{id:"directionreversedirection"},(0,r.kt)("inlineCode",{parentName:"h3"},"Direction.reverse(direction)")),(0,r.kt)("p",null,"Returns a direction flipped along the y axis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"assert(Direction.reverse(Direction.Left) == Direction.Right)\nassert(Direction.reverse(Direction.UpLeft) == Direction.DownRight)\n")),(0,r.kt)("h3",{id:"directionjoindirection_a-direction_b"},(0,r.kt)("inlineCode",{parentName:"h3"},"Direction.join(direction_a, direction_b)")),(0,r.kt)("p",null,"Joins two directions into a single direction."),(0,r.kt)("p",null,"Returns a direction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"assert(Direction.join(Direction.Up, Direction.Left) == Direction.UpLeft)\nassert(Direction.join(Direction.UpLeft, Direction.Right) == Direction.Up)\nassert(Direction.join(Direction.Left, Direction.Right) == Direction.None)\n")),(0,r.kt)("h3",{id:"directionvectordirection"},(0,r.kt)("inlineCode",{parentName:"h3"},"Direction.vector(direction)")),(0,r.kt)("p",null,"Returns a table with ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," keys."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local vector = Direction.vector(Direction.UpLeft)\nassert(vector.x == -1 and vector.y == -1)\n")),(0,r.kt)("h3",{id:"directionunit_vectordirection"},(0,r.kt)("inlineCode",{parentName:"h3"},"Direction.unit_vector(direction)")),(0,r.kt)("p",null,"Returns a table with ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," keys."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local vector = Direction.unit_vector(Direction.UpLeft)\nprint(vector.x) -- -0.707...\nprint(vector.y) -- -0.707...\n")))}s.isMDXComponent=!0}}]);