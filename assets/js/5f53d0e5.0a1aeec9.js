"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3324],{3787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var i=t(4848),r=t(8453);const a={},c="Event Emitters",l={id:"server/lua-api/event-emitters",title:"Event Emitters",description:"Net.EventEmitter.new()",source:"@site/docs/02-server/04-lua-api/02-event-emitters.md",sourceDirName:"02-server/04-lua-api",slug:"/server/lua-api/event-emitters",permalink:"/server/lua-api/event-emitters",draft:!1,unlisted:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/02-server/04-lua-api/02-event-emitters.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"serverSidebar",previous:{title:"Lua Version And Changes",permalink:"/server/lua-api/lua-version-and-changes"},next:{title:"Server Events",permalink:"/server/lua-api/events"}},s={},o=[{value:"<code>Net.EventEmitter.new()</code>",id:"neteventemitternew",level:3},{value:"<code>emitter:emit(event_name, ...)</code>",id:"emitteremitevent_name-",level:3},{value:"<code>emitter:on(event_name, function(...))</code>",id:"emitteronevent_name-function",level:3},{value:"<code>emitter:once(event_name, function(...))</code>",id:"emitteronceevent_name-function",level:3},{value:"<code>emitter:on_any(function(event_name, ...))</code>",id:"emitteron_anyfunctionevent_name-",level:3},{value:"<code>emitter:on_any_once(function(event_name, ...))</code>",id:"emitteron_any_oncefunctionevent_name-",level:3},{value:"<code>emitter:remove_listener(event_name, callback)</code>",id:"emitterremove_listenerevent_name-callback",level:3},{value:"<code>emitter:remove_on_any_listener(callback)</code>",id:"emitterremove_on_any_listenercallback",level:3},{value:"<code>emitter:async_iter(event_name)</code>",id:"emitterasync_iterevent_name",level:3},{value:"<code>emitter:async_iter_all(event_name)</code>",id:"emitterasync_iter_allevent_name",level:3},{value:"<code>emitter:destroy()</code>",id:"emitterdestroy",level:3}];function m(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"event-emitters",children:"Event Emitters"}),"\n",(0,i.jsx)(n.h3,{id:"neteventemitternew",children:(0,i.jsx)(n.code,{children:"Net.EventEmitter.new()"})}),"\n",(0,i.jsx)(n.p,{children:"Constructs a new EventEmitter instance."}),"\n",(0,i.jsx)(n.h3,{id:"emitteremitevent_name-",children:(0,i.jsx)(n.code,{children:"emitter:emit(event_name, ...)"})}),"\n",(0,i.jsxs)(n.p,{children:["Parameters after ",(0,i.jsx)(n.code,{children:"event_name"})," are custom and passed to event listeners."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local emitter = Net.EventEmitter.new()\n\nemitter:on("example_event", function(a, b)\n  print(a .. b) -- will output `cd`\nend)\n\nemitter:emit("example_event", "c", "d")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"emitteronevent_name-function",children:(0,i.jsx)(n.code,{children:"emitter:on(event_name, function(...))"})}),"\n",(0,i.jsxs)(n.p,{children:["Calls the provided function every time an event matching ",(0,i.jsx)(n.code,{children:"event_name"})," is emitted."]}),"\n",(0,i.jsx)(n.h3,{id:"emitteronceevent_name-function",children:(0,i.jsx)(n.code,{children:"emitter:once(event_name, function(...))"})}),"\n",(0,i.jsxs)(n.p,{children:["Calls the provided function when an event matching ",(0,i.jsx)(n.code,{children:"event_name"})," is emitted, then deletes the listener."]}),"\n",(0,i.jsx)(n.h3,{id:"emitteron_anyfunctionevent_name-",children:(0,i.jsx)(n.code,{children:"emitter:on_any(function(event_name, ...))"})}),"\n",(0,i.jsx)(n.p,{children:"Calls the provided function when any event is emitted. Useful for debugging."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local emitter = Net.EventEmitter.new()\n\nemitter:on_any(function(...)\n  print(...) -- will output `example_event c d`\nend)\n\nemitter:emit("example_event", "c", "d")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"emitteron_any_oncefunctionevent_name-",children:(0,i.jsx)(n.code,{children:"emitter:on_any_once(function(event_name, ...))"})}),"\n",(0,i.jsx)(n.p,{children:"Calls the provided function when any event is emitted, then deletes the listener."}),"\n",(0,i.jsx)(n.h3,{id:"emitterremove_listenerevent_name-callback",children:(0,i.jsx)(n.code,{children:"emitter:remove_listener(event_name, callback)"})}),"\n",(0,i.jsxs)(n.p,{children:["Removes the listener to prevent future calls from the emitter.\n",(0,i.jsx)(n.code,{children:"callback"})," must be a reference to the same instance of the function."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local emitter = Net.EventEmitter.new()\n\nlocal listener = function(a, b)\n  print(a .. b)\nend\n\nemitter:on("example_event", listener)\nemitter:emit("example_event", "c", "d")  -- will output `c d` from the listener\n\nemitter:remove_listener("example_event", listener)\nemitter:emit("example_event", "c", "d")  -- no output\n'})}),"\n",(0,i.jsx)(n.h3,{id:"emitterremove_on_any_listenercallback",children:(0,i.jsx)(n.code,{children:"emitter:remove_on_any_listener(callback)"})}),"\n",(0,i.jsxs)(n.p,{children:["Removes the listener to prevent future calls from the emitter.\n",(0,i.jsx)(n.code,{children:"callback"})," must be a reference to the same instance of the function."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local emitter = Net.EventEmitter.new()\n\nlocal listener = function(...)\n  print(...)\nend\n\nemitter:on_any(listener)\nemitter:emit("example_event", "c", "d")  -- will output `example_name c d` from the listener\n\nemitter:remove_on_any_listener(listener)\nemitter:emit("example_event", "c", "d")  -- no output\n'})}),"\n",(0,i.jsx)(n.h3,{id:"emitterasync_iterevent_name",children:(0,i.jsx)(n.code,{children:"emitter:async_iter(event_name)"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns an iterator that returns promises with the value set to ",(0,i.jsx)(n.code,{children:"..."})," (Event custom parameters)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local emitter = Net.EventEmitter.new()\n\nAsync.create_scope(function()\n  -- Async.await can transform async iterators into iterators that return values directly\n  for a, b in Async.await(emitter:async_iter("example_event")) do\n    print(a .. b) -- will output "cd"\n  end\nend)\n\nemitter:emit("example_event", "c", "d")\nemitter:destroy()\n'})}),"\n",(0,i.jsx)(n.h3,{id:"emitterasync_iter_allevent_name",children:(0,i.jsx)(n.code,{children:"emitter:async_iter_all(event_name)"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns an iterator that returns promises with the value set to ",(0,i.jsx)(n.code,{children:"event_name, ..."}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local emitter = Net.EventEmitter.new()\n\nAsync.create_scope(function()\n  for event_name, a, b in Async.await(emitter:async_iter_all()) do\n    print(event_name .. " " .. a .. b) -- will output "example_event cd"\n  end\nend)\n\nemitter:emit("example_event", "c", "d")\nemitter:destroy()\n'})}),"\n",(0,i.jsx)(n.h3,{id:"emitterdestroy",children:(0,i.jsx)(n.code,{children:"emitter:destroy()"})}),"\n",(0,i.jsx)(n.p,{children:"Allows async iterators to complete. Otherwise iterators will wait until the program ends."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local emitter = Net.EventEmitter.new()\n\nAsync.create_scope(function()\n  for _ in Async.await(emitter:async_iter("example_event")) do\n  end\n\n  print("complete!") -- will only output "complete!" if emitter:destroy() is called\nend)\n\nemitter:emit("example_event", "c", "d")\nemitter:destroy()\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var i=t(6540);const r={},a=i.createContext(r);function c(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);