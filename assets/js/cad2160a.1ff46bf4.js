"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8085],{8035:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var a=n(4848),s=n(8453);const i={},c="Status",u={id:"client/lua-api/attack-api/status",title:"Status",description:"See Status Package Documentation for creating new statuses.",source:"@site/docs/01-client/02-lua-api/04-attack-api/06-status.md",sourceDirName:"01-client/02-lua-api/04-attack-api",slug:"/client/lua-api/attack-api/status",permalink:"/client/lua-api/attack-api/status",draft:!1,unlisted:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/04-attack-api/06-status.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Cards",permalink:"/client/lua-api/attack-api/cards"},next:{title:"TurnGauge",permalink:"/client/lua-api/attack-api/turn-gauge"}},r={},o=[{value:"<code>status:owner()</code>",id:"statusowner",level:3},{value:"<code>status:remaining_time()</code>",id:"statusremaining_time",level:3},{value:"<code>status:set_remaining_time(duration)</code>",id:"statusset_remaining_timeduration",level:3},{value:"<code>status.on_delete_func = function(self)</code>",id:"statuson_delete_func--functionself",level:3}];function l(t){const e={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"status",children:"Status"}),"\n",(0,a.jsxs)(e.p,{children:["See ",(0,a.jsx)(e.a,{href:"/client/packages#statuses",children:"Status Package Documentation"})," for creating new statuses."]}),"\n",(0,a.jsx)(e.h3,{id:"statusowner",children:(0,a.jsx)(e.code,{children:"status:owner()"})}),"\n",(0,a.jsxs)(e.p,{children:["Returns an ",(0,a.jsx)(e.a,{href:"/client/lua-api/entity-api/entity",children:"Entity"}),", represents the entity affected by the status."]}),"\n",(0,a.jsx)(e.h3,{id:"statusremaining_time",children:(0,a.jsx)(e.code,{children:"status:remaining_time()"})}),"\n",(0,a.jsx)(e.p,{children:"Returns a number representing the amount of battle frames until the status wears off."}),"\n",(0,a.jsx)(e.h3,{id:"statusset_remaining_timeduration",children:(0,a.jsx)(e.code,{children:"status:set_remaining_time(duration)"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"duration"})," number, how many battle frames the effect should last."]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"statuson_delete_func--functionself",children:(0,a.jsx)(e.code,{children:"status.on_delete_func = function(self)"})}),"\n",(0,a.jsx)(e.p,{children:"Called when the status wears off, used for clean up."})]})}function d(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>u});var a=n(6540);const s={},i=a.createContext(s);function c(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function u(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);