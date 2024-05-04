"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8039],{9510:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=s(4848),a=s(8453);const n={},i="Assets",o={id:"server/lua-api/assets",title:"Assets",description:"Net.updateasset(serverpath, content)",source:"@site/docs/02-server/04-lua-api/11-assets.md",sourceDirName:"02-server/04-lua-api",slug:"/server/lua-api/assets",permalink:"/server/lua-api/assets",draft:!1,unlisted:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/02-server/04-lua-api/11-assets.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"serverSidebar",previous:{title:"Actor Property Animations",permalink:"/server/lua-api/actor-property-animations"},next:{title:"Synchronization",permalink:"/server/lua-api/synchronization"}},d={},p=[{value:"<code>Net.update_asset(server_path, content)</code>",id:"netupdate_assetserver_path-content",level:3},{value:"<code>Net.remove_asset(server_path)</code>",id:"netremove_assetserver_path",level:3},{value:"<code>Net.has_asset(server_path)</code>",id:"nethas_assetserver_path",level:3},{value:"<code>Net.get_asset_type(server_path)</code>",id:"netget_asset_typeserver_path",level:3},{value:"<code>Net.get_asset_size(server_path)</code>",id:"netget_asset_sizeserver_path",level:3},{value:"<code>Net.provide_asset_for_player(player_id, path)</code>",id:"netprovide_asset_for_playerplayer_id-path",level:3},{value:"<code>Net.provide_package_for_player(player_id, path)</code>",id:"netprovide_package_for_playerplayer_id-path",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"assets",children:"Assets"}),"\n",(0,r.jsx)(t.h3,{id:"netupdate_assetserver_path-content",children:(0,r.jsx)(t.code,{children:"Net.update_asset(server_path, content)"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"content"}),": ",(0,r.jsx)(t.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Modifies the asset in memory and updates any clients that have downloaded the previous version of this asset."}),"\n",(0,r.jsx)(t.h3,{id:"netremove_assetserver_path",children:(0,r.jsx)(t.code,{children:"Net.remove_asset(server_path)"})}),"\n",(0,r.jsx)(t.p,{children:"Unloads the asset from the server, preventing the asset from being shared to clients."}),"\n",(0,r.jsx)(t.h3,{id:"nethas_assetserver_path",children:(0,r.jsx)(t.code,{children:"Net.has_asset(server_path)"})}),"\n",(0,r.jsx)(t.p,{children:"Returns true if the asset exists."}),"\n",(0,r.jsx)(t.h3,{id:"netget_asset_typeserver_path",children:(0,r.jsx)(t.code,{children:"Net.get_asset_type(server_path)"})}),"\n",(0,r.jsxs)(t.p,{children:["Returns ",(0,r.jsx)(t.code,{children:'"text" | "texture" | "audio" | "data"'})]}),"\n",(0,r.jsx)(t.h3,{id:"netget_asset_sizeserver_path",children:(0,r.jsx)(t.code,{children:"Net.get_asset_size(server_path)"})}),"\n",(0,r.jsx)(t.p,{children:"Returns the asset's size in bytes."}),"\n",(0,r.jsx)(t.p,{children:"Note some assets are compressed when loaded by the server and may differ from the size on disk."}),"\n",(0,r.jsx)(t.h3,{id:"netprovide_asset_for_playerplayer_id-path",children:(0,r.jsx)(t.code,{children:"Net.provide_asset_for_player(player_id, path)"})}),"\n",(0,r.jsx)(t.p,{children:"Allows for assets to be sent ahead of time to reduce apparent server hiccups."}),"\n",(0,r.jsx)(t.h3,{id:"netprovide_package_for_playerplayer_id-path",children:(0,r.jsx)(t.code,{children:"Net.provide_package_for_player(player_id, path)"})}),"\n",(0,r.jsxs)(t.p,{children:["Similar to ",(0,r.jsx)(t.a,{href:"#netprovide_asset_for_playerplayer_id-path",children:"Net.provide_asset_for_player"}),", but also loads the package on the client."]}),"\n",(0,r.jsxs)(t.p,{children:['This does not "install" packages on the client. Use ',(0,r.jsx)(t.a,{href:"/server/lua-api/widgets#netoffer_packageplayer_id-package_path",children:"Net.offer_package()"})," or ",(0,r.jsx)(t.a,{href:"/server/lua-api/widgets#netrefer_packageplayer_id-package_id",children:"Net.refer_package()"})," for that use case."]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var r=s(6540);const a={},n=r.createContext(a);function i(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);