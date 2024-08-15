"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[715],{479:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>n,metadata:()=>d,toc:()=>o});var s=i(4848),t=i(8453);const n={},l="Sprite",d={id:"client/lua-api/resource-api/sprite",title:"Sprite",description:"sprite:create_node()",source:"@site/docs/01-client/02-lua-api/02-resource-api/03-sprite.md",sourceDirName:"01-client/02-lua-api/02-resource-api",slug:"/client/lua-api/resource-api/sprite",permalink:"/client/lua-api/resource-api/sprite",draft:!1,unlisted:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/02-resource-api/03-sprite.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Animation",permalink:"/client/lua-api/resource-api/animation"},next:{title:"Field",permalink:"/client/lua-api/field-api/field"}},c={},o=[{value:"<code>sprite:create_node()</code>",id:"spritecreate_node",level:3},{value:"<code>sprite:create_text_node(text_style, text)</code>",id:"spritecreate_text_nodetext_style-text",level:3},{value:"<code>sprite:copy_from(sprite)</code>",id:"spritecopy_fromsprite",level:3},{value:"<code>sprite:remove_node(sprite)</code>",id:"spriteremove_nodesprite",level:3},{value:"<code>sprite:children()</code>",id:"spritechildren",level:3},{value:"<code>sprite:texture()</code>",id:"spritetexture",level:3},{value:"<code>sprite:set_texture(path)</code>",id:"spriteset_texturepath",level:3},{value:"<code>sprite:palette()</code>",id:"spritepalette",level:3},{value:"<code>sprite:set_palette(path)</code>",id:"spriteset_palettepath",level:3},{value:"<code>sprite:visible()</code>",id:"spritevisible",level:3},{value:"<code>sprite:set_visible(visible)</code>",id:"spriteset_visiblevisible",level:3},{value:"<code>sprite:reveal()</code>",id:"spritereveal",level:3},{value:"<code>sprite:hide()</code>",id:"spritehide",level:3},{value:"<code>sprite:layer()</code>",id:"spritelayer",level:3},{value:"<code>sprite:set_layer(layer)</code>",id:"spriteset_layerlayer",level:3},{value:"<code>sprite:offset()</code>",id:"spriteoffset",level:3},{value:"<code>sprite:set_offset(x, y)</code>",id:"spriteset_offsetx-y",level:3},{value:"<code>sprite:origin()</code>",id:"spriteorigin",level:3},{value:"<code>sprite:set_origin(x, y)</code>",id:"spriteset_originx-y",level:3},{value:"<code>sprite:scale()</code>",id:"spritescale",level:3},{value:"<code>sprite:set_scale(x, y)</code>",id:"spriteset_scalex-y",level:3},{value:"<code>sprite:size()</code>",id:"spritesize",level:3},{value:"<code>sprite:set_size(x, y)</code>",id:"spriteset_sizex-y",level:3},{value:"<code>sprite:width()</code>",id:"spritewidth",level:3},{value:"<code>sprite:set_width(width)</code>",id:"spriteset_widthwidth",level:3},{value:"<code>sprite:height()</code>",id:"spriteheight",level:3},{value:"<code>sprite:set_height(height)</code>",id:"spriteset_heightheight",level:3},{value:"<code>sprite:color()</code>",id:"spritecolor",level:3},{value:"<code>sprite:set_color(color)</code>",id:"spriteset_colorcolor",level:3},{value:"<code>sprite:color_mode()</code>",id:"spritecolor_mode",level:3},{value:"<code>sprite:set_color_mode(color_mode)</code>",id:"spriteset_color_modecolor_mode",level:3},{value:"<code>sprite:never_flip()</code>",id:"spritenever_flip",level:3},{value:"<code>sprite:set_never_flip(never_flip?)</code>",id:"spriteset_never_flipnever_flip",level:3},{value:"<code>sprite:shader_effect()</code>",id:"spriteshader_effect",level:3},{value:"<code>sprite:set_shader_effect(sprite_shader_effect)</code>",id:"spriteset_shader_effectsprite_shader_effect",level:3},{value:"<code>sprite:use_root_shader(enable?)</code>",id:"spriteuse_root_shaderenable",level:3},{value:"<code>sprite:use_parent_shader(enable?)</code>",id:"spriteuse_parent_shaderenable",level:3},{value:"Color",id:"color",level:2},{value:"<code>Color.new(r, g, b, a?)</code>",id:"colornewr-g-b-a",level:3},{value:"<code>Color.mix(color_a, color_b, progress)</code>",id:"colormixcolor_a-color_b-progress",level:3},{value:"<code>color.r</code>",id:"colorr",level:3},{value:"<code>color.g</code>",id:"colorg",level:3},{value:"<code>color.b</code>",id:"colorb",level:3},{value:"<code>color.a</code>",id:"colora",level:3},{value:"TextStyle",id:"textstyle",level:2},{value:"<code>TextStyle.new(font_name, texture_path?, animation_path?)</code>",id:"textstylenewfont_name-texture_path-animation_path",level:3},{value:"SyncNode",id:"syncnode",level:2},{value:"<code>sync_node:sprite()</code>",id:"sync_nodesprite",level:3},{value:"<code>sync_node:animation()</code>",id:"sync_nodeanimation",level:3}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"sprite",children:"Sprite"}),"\n",(0,s.jsx)(r.h3,{id:"spritecreate_node",children:(0,s.jsx)(r.code,{children:"sprite:create_node()"})}),"\n",(0,s.jsx)(r.p,{children:"Returns a new child Sprite instance that renders relative to the parent sprite's origin."}),"\n",(0,s.jsx)(r.h3,{id:"spritecreate_text_nodetext_style-text",children:(0,s.jsx)(r.code,{children:"sprite:create_text_node(text_style, text)"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"text_style"}),": ",(0,s.jsx)(r.a,{href:"#textstyle",children:"TextStyle"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"text"}),": The text to render."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Returns a Sprite, similar to ",(0,s.jsx)(r.code,{children:"sprite:create_node()"}),". The returned sprite node has a child for each character in ",(0,s.jsx)(r.code,{children:"text"}),", all with ",(0,s.jsxs)(r.a,{href:"#spriteuse_parent_shaderenable",children:["sprite",":use_parent_shader","(true)"]})," set."]}),"\n",(0,s.jsx)(r.h3,{id:"spritecopy_fromsprite",children:(0,s.jsx)(r.code,{children:"sprite:copy_from(sprite)"})}),"\n",(0,s.jsx)(r.p,{children:"Copies all data from the other sprite, other than children."}),"\n",(0,s.jsx)(r.h3,{id:"spriteremove_nodesprite",children:(0,s.jsx)(r.code,{children:"sprite:remove_node(sprite)"})}),"\n",(0,s.jsx)(r.p,{children:"Deletes the passed sprite if it's a child of the parent."}),"\n",(0,s.jsx)(r.h3,{id:"spritechildren",children:(0,s.jsx)(r.code,{children:"sprite:children()"})}),"\n",(0,s.jsx)(r.p,{children:"Returns a list of Sprites."}),"\n",(0,s.jsx)(r.h3,{id:"spritetexture",children:(0,s.jsx)(r.code,{children:"sprite:texture()"})}),"\n",(0,s.jsx)(r.p,{children:"Returns the path to the sprite's texture."}),"\n",(0,s.jsx)(r.h3,{id:"spriteset_texturepath",children:(0,s.jsx)(r.code,{children:"sprite:set_texture(path)"})}),"\n",(0,s.jsxs)(r.p,{children:["Use values returned from ",(0,s.jsx)(r.a,{href:"/client/lua-api/resource-api/resources#resourcesload_texturepath",children:"Resources.load_texture()"})," for better performance."]}),"\n",(0,s.jsx)(r.h3,{id:"spritepalette",children:(0,s.jsx)(r.code,{children:"sprite:palette()"})}),"\n",(0,s.jsxs)(r.p,{children:["Returns the path to the sprite's palette or ",(0,s.jsx)(r.code,{children:"nil"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"spriteset_palettepath",children:(0,s.jsx)(r.code,{children:"sprite:set_palette(path)"})}),"\n",(0,s.jsx)(r.p,{children:"Sets the palette for the texture to reference."}),"\n",(0,s.jsx)(r.p,{children:"Palettes are 256x1 images. Colors on the sprite's texture will be remapped by taking the red value of the texture to grab a color from the palette."}),"\n",(0,s.jsxs)(r.p,{children:["Use values returned from ",(0,s.jsx)(r.a,{href:"/client/lua-api/resource-api/resources#resourcesload_texturepath",children:"Resources.load_texture()"})," for better performance."]}),"\n",(0,s.jsx)(r.h3,{id:"spritevisible",children:(0,s.jsx)(r.code,{children:"sprite:visible()"})}),"\n",(0,s.jsx)(r.p,{children:"Returns true if the sprite is visible."}),"\n",(0,s.jsx)(r.h3,{id:"spriteset_visiblevisible",children:(0,s.jsx)(r.code,{children:"sprite:set_visible(visible)"})}),"\n",(0,s.jsx)(r.h3,{id:"spritereveal",children:(0,s.jsx)(r.code,{children:"sprite:reveal()"})}),"\n",(0,s.jsxs)(r.p,{children:["Same as ",(0,s.jsx)(r.code,{children:"sprite:set_visible(true)"})]}),"\n",(0,s.jsx)(r.h3,{id:"spritehide",children:(0,s.jsx)(r.code,{children:"sprite:hide()"})}),"\n",(0,s.jsxs)(r.p,{children:["Same as ",(0,s.jsx)(r.code,{children:"sprite:set_visible(false)"})]}),"\n",(0,s.jsx)(r.h3,{id:"spritelayer",children:(0,s.jsx)(r.code,{children:"sprite:layer()"})}),"\n",(0,s.jsx)(r.p,{children:"Returns an integer used for sorting during render."}),"\n",(0,s.jsx)(r.h3,{id:"spriteset_layerlayer",children:(0,s.jsx)(r.code,{children:"sprite:set_layer(layer)"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"layer"}),": integer, negative values render in front of the parent sprite."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Used for sorting during render."}),"\n",(0,s.jsx)(r.h3,{id:"spriteoffset",children:(0,s.jsx)(r.code,{children:"sprite:offset()"})}),"\n",(0,s.jsxs)(r.p,{children:["Returns ",(0,s.jsx)(r.code,{children:"{ x: number, y: number }"}),", represents the parent relative offset."]}),"\n",(0,s.jsx)(r.h3,{id:"spriteset_offsetx-y",children:(0,s.jsx)(r.code,{children:"sprite:set_offset(x, y)"})}),"\n",(0,s.jsx)(r.p,{children:"Sets the parent relative offset."}),"\n",(0,s.jsx)(r.h3,{id:"spriteorigin",children:(0,s.jsx)(r.code,{children:"sprite:origin()"})}),"\n",(0,s.jsxs)(r.p,{children:["Returns ",(0,s.jsx)(r.code,{children:"{ x: number, y: number }"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"spriteset_originx-y",children:(0,s.jsx)(r.code,{children:"sprite:set_origin(x, y)"})}),"\n",(0,s.jsxs)(r.p,{children:["Sets the origin, ",(0,s.jsx)(r.a,{href:"/client/lua-api/resource-api/animation",children:"Animations"})," will overwrite this value."]}),"\n",(0,s.jsx)(r.h3,{id:"spritescale",children:(0,s.jsx)(r.code,{children:"sprite:scale()"})}),"\n",(0,s.jsxs)(r.p,{children:["Returns ",(0,s.jsx)(r.code,{children:"{ x: number, y: number }"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"spriteset_scalex-y",children:(0,s.jsx)(r.code,{children:"sprite:set_scale(x, y)"})}),"\n",(0,s.jsx)(r.p,{children:"Sets the scale of the sprite."}),"\n",(0,s.jsx)(r.h3,{id:"spritesize",children:(0,s.jsx)(r.code,{children:"sprite:size()"})}),"\n",(0,s.jsxs)(r.p,{children:["Returns ",(0,s.jsx)(r.code,{children:"{ x: number, y: number }"}),". Represents the size of the sprite. Scale is accounted."]}),"\n",(0,s.jsx)(r.h3,{id:"spriteset_sizex-y",children:(0,s.jsx)(r.code,{children:"sprite:set_size(x, y)"})}),"\n",(0,s.jsx)(r.p,{children:"Sets the size of the sprite, updates the scale."}),"\n",(0,s.jsx)(r.h3,{id:"spritewidth",children:(0,s.jsx)(r.code,{children:"sprite:width()"})}),"\n",(0,s.jsx)(r.p,{children:"Returns the width of the sprite, scale is acounted."}),"\n",(0,s.jsx)(r.h3,{id:"spriteset_widthwidth",children:(0,s.jsx)(r.code,{children:"sprite:set_width(width)"})}),"\n",(0,s.jsx)(r.p,{children:"Sets the width of the sprite, updates the scale."}),"\n",(0,s.jsx)(r.h3,{id:"spriteheight",children:(0,s.jsx)(r.code,{children:"sprite:height()"})}),"\n",(0,s.jsx)(r.p,{children:"Returns the height of the sprite, scale is acounted."}),"\n",(0,s.jsx)(r.h3,{id:"spriteset_heightheight",children:(0,s.jsx)(r.code,{children:"sprite:set_height(height)"})}),"\n",(0,s.jsx)(r.p,{children:"Sets the height of the sprite, updates the scale."}),"\n",(0,s.jsx)(r.h3,{id:"spritecolor",children:(0,s.jsx)(r.code,{children:"sprite:color()"})}),"\n",(0,s.jsxs)(r.p,{children:["Returns a ",(0,s.jsx)(r.a,{href:"#color",children:"Color"})]}),"\n",(0,s.jsx)(r.h3,{id:"spriteset_colorcolor",children:(0,s.jsx)(r.code,{children:"sprite:set_color(color)"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"color"}),": ",(0,s.jsx)(r.a,{href:"#color",children:"Color"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"The color will be reset to black at the start of the next frame for root sprites."}),"\n",(0,s.jsx)(r.h3,{id:"spritecolor_mode",children:(0,s.jsx)(r.code,{children:"sprite:color_mode()"})}),"\n",(0,s.jsx)(r.p,{children:"Returns the ColorMode."}),"\n",(0,s.jsx)(r.h3,{id:"spriteset_color_modecolor_mode",children:(0,s.jsx)(r.code,{children:"sprite:set_color_mode(color_mode)"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"color_mode"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"ColorMode.Additive"})," each pixel will be added by the sprite's color, alpha will be multiplied."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"ColorMode.Multiply"})," each pixel will be multiplied by the sprite's color."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["The color mode will be reset to ",(0,s.jsx)(r.code,{children:"ColorMode.Additive"})," at the start of the next frame for root sprites."]}),"\n",(0,s.jsx)(r.h3,{id:"spritenever_flip",children:(0,s.jsx)(r.code,{children:"sprite:never_flip()"})}),"\n",(0,s.jsx)(r.p,{children:"Returns true if perspective does not affect the sprite."}),"\n",(0,s.jsx)(r.h3,{id:"spriteset_never_flipnever_flip",children:(0,s.jsx)(r.code,{children:"sprite:set_never_flip(never_flip?)"})}),"\n",(0,s.jsx)(r.p,{children:"Prevents player perspective from flipping the sprite."}),"\n",(0,s.jsx)(r.h3,{id:"spriteshader_effect",children:(0,s.jsx)(r.code,{children:"sprite:shader_effect()"})}),"\n",(0,s.jsx)(r.p,{children:"Returns a SpriteShaderEffect."}),"\n",(0,s.jsx)(r.h3,{id:"spriteset_shader_effectsprite_shader_effect",children:(0,s.jsx)(r.code,{children:"sprite:set_shader_effect(sprite_shader_effect)"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"sprite_shader_effect"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"SpriteShaderEffect.None"})}),"\n",(0,s.jsx)(r.li,{children:"``SpriteShaderEffect.Grayscale`"}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"SpriteShaderEffect.Pixelate"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Scales with alpha."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"spriteuse_root_shaderenable",children:(0,s.jsx)(r.code,{children:"sprite:use_root_shader(enable?)"})}),"\n",(0,s.jsx)(r.p,{children:"Temporarily adopts the color, color mode, palette, and shader effect of the root sprite during render."}),"\n",(0,s.jsx)(r.h3,{id:"spriteuse_parent_shaderenable",children:(0,s.jsx)(r.code,{children:"sprite:use_parent_shader(enable?)"})}),"\n",(0,s.jsx)(r.p,{children:"Adopts the color, color mode, palette, and shader effect of the parent sprite during render."}),"\n",(0,s.jsx)(r.h2,{id:"color",children:"Color"}),"\n",(0,s.jsxs)(r.p,{children:["Colors are tables with an ",(0,s.jsx)(r.code,{children:"r"}),", ",(0,s.jsx)(r.code,{children:"g"}),", ",(0,s.jsx)(r.code,{children:"b"}),", and ",(0,s.jsx)(r.code,{children:"a"})," key, with each value set to a 0-255 integer."]}),"\n",(0,s.jsxs)(r.p,{children:["There's a global table named ",(0,s.jsx)(r.code,{children:"Color"})," with helpers for making new color tables."]}),"\n",(0,s.jsx)(r.h3,{id:"colornewr-g-b-a",children:(0,s.jsx)(r.code,{children:"Color.new(r, g, b, a?)"})}),"\n",(0,s.jsxs)(r.p,{children:["Each component is a 0-255 value, ",(0,s.jsx)(r.code,{children:"a"})," defaults to 255."]}),"\n",(0,s.jsx)(r.p,{children:"Returns a color."}),"\n",(0,s.jsx)(r.h3,{id:"colormixcolor_a-color_b-progress",children:(0,s.jsx)(r.code,{children:"Color.mix(color_a, color_b, progress)"})}),"\n",(0,s.jsxs)(r.p,{children:["A ",(0,s.jsx)(r.code,{children:"progress"})," of 0.0 will return a table with the same values as ",(0,s.jsx)(r.code,{children:"color_a"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["A ",(0,s.jsx)(r.code,{children:"progress"})," of 1.0 will return a table with the same values as ",(0,s.jsx)(r.code,{children:"color_b"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Other values of ",(0,s.jsx)(r.code,{children:"progress"})," will linearly interpolate each component between ",(0,s.jsx)(r.code,{children:"color_a"})," and ",(0,s.jsx)(r.code,{children:"color_b"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"Returns a color."}),"\n",(0,s.jsx)(r.h3,{id:"colorr",children:(0,s.jsx)(r.code,{children:"color.r"})}),"\n",(0,s.jsx)(r.p,{children:"The red component of the color. Stored as a number in the range [0, 255]."}),"\n",(0,s.jsx)(r.h3,{id:"colorg",children:(0,s.jsx)(r.code,{children:"color.g"})}),"\n",(0,s.jsx)(r.p,{children:"The green component of the color. Stored as a number in the range [0, 255]."}),"\n",(0,s.jsx)(r.h3,{id:"colorb",children:(0,s.jsx)(r.code,{children:"color.b"})}),"\n",(0,s.jsx)(r.p,{children:"The blue component of the color. Stored as a number in the range [0, 255]."}),"\n",(0,s.jsx)(r.h3,{id:"colora",children:(0,s.jsx)(r.code,{children:"color.a"})}),"\n",(0,s.jsx)(r.p,{children:"The alpha or transparency component of the color. Stored as a number in the range [0, 255]."}),"\n",(0,s.jsx)(r.h2,{id:"textstyle",children:"TextStyle"}),"\n",(0,s.jsx)(r.h3,{id:"textstylenewfont_name-texture_path-animation_path",children:(0,s.jsx)(r.code,{children:"TextStyle.new(font_name, texture_path?, animation_path?)"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"font_name"}),": The name of the font to use.","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Built in fonts:","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:'"THICK"'})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:'"THIN"'})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:'"THIN_SMALL"'})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:'"MENU_TITLE"'})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:'"MICRO"'})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:'"CONTEXT"'})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:'"CODE"'})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:'"PLAYER_HP"'})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:'"PLAYER_HP_ORANGE"'})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:'"PLAYER_HP_GREEN"'})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:'"DAMAGE"'})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:'"RESULT"'})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:'"BATTLE"'})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:'"ENTITY_HP"'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"texture_path"}),": Required for custom fonts."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"animation_path"}),": Required for custom fonts."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["For custom fonts, the format ",(0,s.jsx)(r.code,{children:"[FONT_NAME]_U+[CHAR_HEX]"})," is used for mapping characters. Only the first frame in the animation is used to render the character."]}),"\n",(0,s.jsxs)(r.p,{children:["Example: An animation file containing the character ",(0,s.jsx)(r.code,{children:"A"})," for the font ",(0,s.jsx)(r.code,{children:"COOL_FONT"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:'animation state="COOL_FONT_U+0041"\nframe x="0" y="0" w="7" h="12\n'})}),"\n",(0,s.jsx)(r.p,{children:"Returns TextStyle."}),"\n",(0,s.jsx)(r.h2,{id:"syncnode",children:"SyncNode"}),"\n",(0,s.jsx)(r.p,{children:"SyncNodes are a sprite animation pair that sync settings, state, and progress with an entity's root animation."}),"\n",(0,s.jsx)(r.h3,{id:"sync_nodesprite",children:(0,s.jsx)(r.code,{children:"sync_node:sprite()"})}),"\n",(0,s.jsx)(r.p,{children:"Returns a reference to the sync node's sprite."}),"\n",(0,s.jsx)(r.h3,{id:"sync_nodeanimation",children:(0,s.jsx)(r.code,{children:"sync_node:animation()"})}),"\n",(0,s.jsxs)(r.p,{children:["Returns a reference to the sync node's ",(0,s.jsx)(r.a,{href:"/client/lua-api/resource-api/animation",children:"Animation"})]})]})}function a(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,r,i)=>{i.d(r,{R:()=>l,x:()=>d});var s=i(6540);const t={},n=s.createContext(t);function l(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);