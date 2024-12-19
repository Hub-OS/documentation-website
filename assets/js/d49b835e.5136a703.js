"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[715],{479:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=i(4848),s=i(8453);const l={},n="Sprite",d={id:"client/lua-api/resource-api/sprite",title:"Sprite",description:"sprite:create_node()",source:"@site/docs/01-client/02-lua-api/02-resource-api/03-sprite.md",sourceDirName:"01-client/02-lua-api/02-resource-api",slug:"/client/lua-api/resource-api/sprite",permalink:"/client/lua-api/resource-api/sprite",draft:!1,unlisted:!1,editUrl:"https://github.com/Hub-OS/documentation-website/tree/master/docs/01-client/02-lua-api/02-resource-api/03-sprite.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"clientSidebar",previous:{title:"Animation",permalink:"/client/lua-api/resource-api/animation"},next:{title:"Field",permalink:"/client/lua-api/field-api/field"}},c={},o=[{value:"<code>sprite:create_node()</code>",id:"spritecreate_node",level:3},{value:"<code>sprite:create_text_node(text_style, text)</code>",id:"spritecreate_text_nodetext_style-text",level:3},{value:"<code>sprite:copy_from(sprite)</code>",id:"spritecopy_fromsprite",level:3},{value:"<code>sprite:remove_node(sprite)</code>",id:"spriteremove_nodesprite",level:3},{value:"<code>sprite:children()</code>",id:"spritechildren",level:3},{value:"<code>sprite:texture()</code>",id:"spritetexture",level:3},{value:"<code>sprite:set_texture(path)</code>",id:"spriteset_texturepath",level:3},{value:"<code>sprite:palette()</code>",id:"spritepalette",level:3},{value:"<code>sprite:set_palette(path)</code>",id:"spriteset_palettepath",level:3},{value:"<code>sprite:visible()</code>",id:"spritevisible",level:3},{value:"<code>sprite:set_visible(visible)</code>",id:"spriteset_visiblevisible",level:3},{value:"<code>sprite:reveal()</code>",id:"spritereveal",level:3},{value:"<code>sprite:hide()</code>",id:"spritehide",level:3},{value:"<code>sprite:layer()</code>",id:"spritelayer",level:3},{value:"<code>sprite:set_layer(layer)</code>",id:"spriteset_layerlayer",level:3},{value:"<code>sprite:offset()</code>",id:"spriteoffset",level:3},{value:"<code>sprite:set_offset(x, y)</code>",id:"spriteset_offsetx-y",level:3},{value:"<code>sprite:origin()</code>",id:"spriteorigin",level:3},{value:"<code>sprite:set_origin(x, y)</code>",id:"spriteset_originx-y",level:3},{value:"<code>sprite:scale()</code>",id:"spritescale",level:3},{value:"<code>sprite:set_scale(x, y)</code>",id:"spriteset_scalex-y",level:3},{value:"<code>sprite:size()</code>",id:"spritesize",level:3},{value:"<code>sprite:set_size(x, y)</code>",id:"spriteset_sizex-y",level:3},{value:"<code>sprite:width()</code>",id:"spritewidth",level:3},{value:"<code>sprite:set_width(width)</code>",id:"spriteset_widthwidth",level:3},{value:"<code>sprite:height()</code>",id:"spriteheight",level:3},{value:"<code>sprite:set_height(height)</code>",id:"spriteset_heightheight",level:3},{value:"<code>sprite:color()</code>",id:"spritecolor",level:3},{value:"<code>sprite:set_color(color)</code>",id:"spriteset_colorcolor",level:3},{value:"<code>sprite:color_mode()</code>",id:"spritecolor_mode",level:3},{value:"<code>sprite:set_color_mode(color_mode)</code>",id:"spriteset_color_modecolor_mode",level:3},{value:"<code>sprite:never_flip()</code>",id:"spritenever_flip",level:3},{value:"<code>sprite:set_never_flip(never_flip?)</code>",id:"spriteset_never_flipnever_flip",level:3},{value:"<code>sprite:shader_effect()</code>",id:"spriteshader_effect",level:3},{value:"<code>sprite:set_shader_effect(sprite_shader_effect)</code>",id:"spriteset_shader_effectsprite_shader_effect",level:3},{value:"<code>sprite:use_root_shader(enable?)</code>",id:"spriteuse_root_shaderenable",level:3},{value:"<code>sprite:use_parent_shader(enable?)</code>",id:"spriteuse_parent_shaderenable",level:3},{value:"Color",id:"color",level:2},{value:"<code>Color.new(r, g, b, a?)</code>",id:"colornewr-g-b-a",level:3},{value:"<code>Color.mix(color_a, color_b, progress)</code>",id:"colormixcolor_a-color_b-progress",level:3},{value:"<code>color.r</code>",id:"colorr",level:3},{value:"<code>color.g</code>",id:"colorg",level:3},{value:"<code>color.b</code>",id:"colorb",level:3},{value:"<code>color.a</code>",id:"colora",level:3},{value:"TextStyle",id:"textstyle",level:2},{value:"<code>TextStyle.new(font_name, texture_path?, animation_path?)</code>",id:"textstylenewfont_name-texture_path-animation_path",level:3},{value:"<code>TextStyle.new_monospace(font_name, texture_path?, animation_path?)</code>",id:"textstylenew_monospacefont_name-texture_path-animation_path",level:3},{value:"<code>text_style.monospace</code>",id:"text_stylemonospace",level:3},{value:"<code>text_style.min_glyph_width</code>",id:"text_stylemin_glyph_width",level:3},{value:"<code>text_style.letter_spacing</code>",id:"text_styleletter_spacing",level:3},{value:"<code>text_style.line_spacing</code>",id:"text_styleline_spacing",level:3},{value:"<code>TextStyle.measure(text_style, text)</code>",id:"textstylemeasuretext_style-text",level:3},{value:"TextMetrics",id:"textmetrics",level:2},{value:"<code>text_metrics.width</code>",id:"text_metricswidth",level:3},{value:"<code>text_metrics.height</code>",id:"text_metricsheight",level:3},{value:"SyncNode",id:"syncnode",level:2},{value:"<code>sync_node:sprite()</code>",id:"sync_nodesprite",level:3},{value:"<code>sync_node:animation()</code>",id:"sync_nodeanimation",level:3},{value:"Hud",id:"hud",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"sprite",children:"Sprite"}),"\n",(0,r.jsx)(t.h3,{id:"spritecreate_node",children:(0,r.jsx)(t.code,{children:"sprite:create_node()"})}),"\n",(0,r.jsx)(t.p,{children:"Returns a new child Sprite instance that renders relative to the parent sprite's origin."}),"\n",(0,r.jsx)(t.h3,{id:"spritecreate_text_nodetext_style-text",children:(0,r.jsx)(t.code,{children:"sprite:create_text_node(text_style, text)"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"text_style"}),": ",(0,r.jsx)(t.a,{href:"#textstyle",children:"TextStyle"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"text"}),": The text to render."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Returns a Sprite, similar to ",(0,r.jsx)(t.code,{children:"sprite:create_node()"}),". The returned sprite node has a child for each character in ",(0,r.jsx)(t.code,{children:"text"}),", all with ",(0,r.jsxs)(t.a,{href:"#spriteuse_parent_shaderenable",children:["sprite",":use_parent_shader","(true)"]})," set."]}),"\n",(0,r.jsx)(t.h3,{id:"spritecopy_fromsprite",children:(0,r.jsx)(t.code,{children:"sprite:copy_from(sprite)"})}),"\n",(0,r.jsx)(t.p,{children:"Copies all data from the other sprite, other than children."}),"\n",(0,r.jsx)(t.h3,{id:"spriteremove_nodesprite",children:(0,r.jsx)(t.code,{children:"sprite:remove_node(sprite)"})}),"\n",(0,r.jsx)(t.p,{children:"Deletes the passed sprite if it's a child of the parent."}),"\n",(0,r.jsx)(t.h3,{id:"spritechildren",children:(0,r.jsx)(t.code,{children:"sprite:children()"})}),"\n",(0,r.jsx)(t.p,{children:"Returns a list of Sprites."}),"\n",(0,r.jsx)(t.h3,{id:"spritetexture",children:(0,r.jsx)(t.code,{children:"sprite:texture()"})}),"\n",(0,r.jsx)(t.p,{children:"Returns the path to the sprite's texture."}),"\n",(0,r.jsx)(t.h3,{id:"spriteset_texturepath",children:(0,r.jsx)(t.code,{children:"sprite:set_texture(path)"})}),"\n",(0,r.jsxs)(t.p,{children:["Use values returned from ",(0,r.jsx)(t.a,{href:"/client/lua-api/resource-api/resources#resourcesload_texturepath",children:"Resources.load_texture()"})," for better performance."]}),"\n",(0,r.jsx)(t.h3,{id:"spritepalette",children:(0,r.jsx)(t.code,{children:"sprite:palette()"})}),"\n",(0,r.jsxs)(t.p,{children:["Returns the path to the sprite's palette or ",(0,r.jsx)(t.code,{children:"nil"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"spriteset_palettepath",children:(0,r.jsx)(t.code,{children:"sprite:set_palette(path)"})}),"\n",(0,r.jsx)(t.p,{children:"Sets the palette for the texture to reference."}),"\n",(0,r.jsx)(t.p,{children:"Palettes are 256x1 images. Colors on the sprite's texture will be remapped by taking the red value of the texture to grab a color from the palette."}),"\n",(0,r.jsxs)(t.p,{children:["Use values returned from ",(0,r.jsx)(t.a,{href:"/client/lua-api/resource-api/resources#resourcesload_texturepath",children:"Resources.load_texture()"})," for better performance."]}),"\n",(0,r.jsx)(t.h3,{id:"spritevisible",children:(0,r.jsx)(t.code,{children:"sprite:visible()"})}),"\n",(0,r.jsx)(t.p,{children:"Returns true if the sprite is visible."}),"\n",(0,r.jsx)(t.h3,{id:"spriteset_visiblevisible",children:(0,r.jsx)(t.code,{children:"sprite:set_visible(visible)"})}),"\n",(0,r.jsx)(t.h3,{id:"spritereveal",children:(0,r.jsx)(t.code,{children:"sprite:reveal()"})}),"\n",(0,r.jsxs)(t.p,{children:["Same as ",(0,r.jsx)(t.code,{children:"sprite:set_visible(true)"})]}),"\n",(0,r.jsx)(t.h3,{id:"spritehide",children:(0,r.jsx)(t.code,{children:"sprite:hide()"})}),"\n",(0,r.jsxs)(t.p,{children:["Same as ",(0,r.jsx)(t.code,{children:"sprite:set_visible(false)"})]}),"\n",(0,r.jsx)(t.h3,{id:"spritelayer",children:(0,r.jsx)(t.code,{children:"sprite:layer()"})}),"\n",(0,r.jsx)(t.p,{children:"Returns an integer used for sorting during render."}),"\n",(0,r.jsx)(t.h3,{id:"spriteset_layerlayer",children:(0,r.jsx)(t.code,{children:"sprite:set_layer(layer)"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"layer"}),": integer, negative values render in front of the parent sprite."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Used for sorting during render."}),"\n",(0,r.jsx)(t.h3,{id:"spriteoffset",children:(0,r.jsx)(t.code,{children:"sprite:offset()"})}),"\n",(0,r.jsxs)(t.p,{children:["Returns ",(0,r.jsx)(t.code,{children:"{ x: number, y: number }"}),", represents the parent relative offset."]}),"\n",(0,r.jsx)(t.h3,{id:"spriteset_offsetx-y",children:(0,r.jsx)(t.code,{children:"sprite:set_offset(x, y)"})}),"\n",(0,r.jsx)(t.p,{children:"Sets the parent relative offset."}),"\n",(0,r.jsx)(t.h3,{id:"spriteorigin",children:(0,r.jsx)(t.code,{children:"sprite:origin()"})}),"\n",(0,r.jsxs)(t.p,{children:["Returns ",(0,r.jsx)(t.code,{children:"{ x: number, y: number }"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"spriteset_originx-y",children:(0,r.jsx)(t.code,{children:"sprite:set_origin(x, y)"})}),"\n",(0,r.jsxs)(t.p,{children:["Sets the origin, ",(0,r.jsx)(t.a,{href:"/client/lua-api/resource-api/animation",children:"Animations"})," will overwrite this value."]}),"\n",(0,r.jsx)(t.h3,{id:"spritescale",children:(0,r.jsx)(t.code,{children:"sprite:scale()"})}),"\n",(0,r.jsxs)(t.p,{children:["Returns ",(0,r.jsx)(t.code,{children:"{ x: number, y: number }"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"spriteset_scalex-y",children:(0,r.jsx)(t.code,{children:"sprite:set_scale(x, y)"})}),"\n",(0,r.jsx)(t.p,{children:"Sets the scale of the sprite."}),"\n",(0,r.jsx)(t.h3,{id:"spritesize",children:(0,r.jsx)(t.code,{children:"sprite:size()"})}),"\n",(0,r.jsxs)(t.p,{children:["Returns ",(0,r.jsx)(t.code,{children:"{ x: number, y: number }"}),". Represents the size of the sprite. Scale is accounted."]}),"\n",(0,r.jsx)(t.h3,{id:"spriteset_sizex-y",children:(0,r.jsx)(t.code,{children:"sprite:set_size(x, y)"})}),"\n",(0,r.jsx)(t.p,{children:"Sets the size of the sprite, updates the scale."}),"\n",(0,r.jsx)(t.h3,{id:"spritewidth",children:(0,r.jsx)(t.code,{children:"sprite:width()"})}),"\n",(0,r.jsx)(t.p,{children:"Returns the width of the sprite, scale is acounted."}),"\n",(0,r.jsx)(t.h3,{id:"spriteset_widthwidth",children:(0,r.jsx)(t.code,{children:"sprite:set_width(width)"})}),"\n",(0,r.jsx)(t.p,{children:"Sets the width of the sprite, updates the scale."}),"\n",(0,r.jsx)(t.h3,{id:"spriteheight",children:(0,r.jsx)(t.code,{children:"sprite:height()"})}),"\n",(0,r.jsx)(t.p,{children:"Returns the height of the sprite, scale is acounted."}),"\n",(0,r.jsx)(t.h3,{id:"spriteset_heightheight",children:(0,r.jsx)(t.code,{children:"sprite:set_height(height)"})}),"\n",(0,r.jsx)(t.p,{children:"Sets the height of the sprite, updates the scale."}),"\n",(0,r.jsx)(t.h3,{id:"spritecolor",children:(0,r.jsx)(t.code,{children:"sprite:color()"})}),"\n",(0,r.jsxs)(t.p,{children:["Returns a ",(0,r.jsx)(t.a,{href:"#color",children:"Color"})]}),"\n",(0,r.jsx)(t.h3,{id:"spriteset_colorcolor",children:(0,r.jsx)(t.code,{children:"sprite:set_color(color)"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"color"}),": ",(0,r.jsx)(t.a,{href:"#color",children:"Color"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The color will be reset to black at the start of the next frame for root sprites."}),"\n",(0,r.jsx)(t.h3,{id:"spritecolor_mode",children:(0,r.jsx)(t.code,{children:"sprite:color_mode()"})}),"\n",(0,r.jsx)(t.p,{children:"Returns the ColorMode."}),"\n",(0,r.jsx)(t.h3,{id:"spriteset_color_modecolor_mode",children:(0,r.jsx)(t.code,{children:"sprite:set_color_mode(color_mode)"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"color_mode"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ColorMode.Additive"})," each pixel will be added by the sprite's color, alpha will be multiplied."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ColorMode.Multiply"})," each pixel will be multiplied by the sprite's color."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The color mode will be reset to ",(0,r.jsx)(t.code,{children:"ColorMode.Additive"})," at the start of the next frame for root sprites."]}),"\n",(0,r.jsx)(t.h3,{id:"spritenever_flip",children:(0,r.jsx)(t.code,{children:"sprite:never_flip()"})}),"\n",(0,r.jsx)(t.p,{children:"Returns true if perspective does not affect the sprite."}),"\n",(0,r.jsx)(t.h3,{id:"spriteset_never_flipnever_flip",children:(0,r.jsx)(t.code,{children:"sprite:set_never_flip(never_flip?)"})}),"\n",(0,r.jsx)(t.p,{children:"Prevents player perspective from flipping the sprite."}),"\n",(0,r.jsx)(t.h3,{id:"spriteshader_effect",children:(0,r.jsx)(t.code,{children:"sprite:shader_effect()"})}),"\n",(0,r.jsx)(t.p,{children:"Returns a SpriteShaderEffect."}),"\n",(0,r.jsx)(t.h3,{id:"spriteset_shader_effectsprite_shader_effect",children:(0,r.jsx)(t.code,{children:"sprite:set_shader_effect(sprite_shader_effect)"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"sprite_shader_effect"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"SpriteShaderEffect.None"})}),"\n",(0,r.jsx)(t.li,{children:"``SpriteShaderEffect.Grayscale`"}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"SpriteShaderEffect.Pixelate"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Scales with alpha."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"spriteuse_root_shaderenable",children:(0,r.jsx)(t.code,{children:"sprite:use_root_shader(enable?)"})}),"\n",(0,r.jsx)(t.p,{children:"Temporarily adopts the color, color mode, palette, and shader effect of the root sprite during render."}),"\n",(0,r.jsx)(t.h3,{id:"spriteuse_parent_shaderenable",children:(0,r.jsx)(t.code,{children:"sprite:use_parent_shader(enable?)"})}),"\n",(0,r.jsx)(t.p,{children:"Adopts the color, color mode, palette, and shader effect of the parent sprite during render."}),"\n",(0,r.jsx)(t.h2,{id:"color",children:"Color"}),"\n",(0,r.jsxs)(t.p,{children:["Colors are tables with an ",(0,r.jsx)(t.code,{children:"r"}),", ",(0,r.jsx)(t.code,{children:"g"}),", ",(0,r.jsx)(t.code,{children:"b"}),", and ",(0,r.jsx)(t.code,{children:"a"})," key, with each value set to a 0-255 integer."]}),"\n",(0,r.jsxs)(t.p,{children:["There's a global table named ",(0,r.jsx)(t.code,{children:"Color"})," with helpers for making new color tables."]}),"\n",(0,r.jsx)(t.h3,{id:"colornewr-g-b-a",children:(0,r.jsx)(t.code,{children:"Color.new(r, g, b, a?)"})}),"\n",(0,r.jsxs)(t.p,{children:["Each component is a 0-255 value, ",(0,r.jsx)(t.code,{children:"a"})," defaults to 255."]}),"\n",(0,r.jsx)(t.p,{children:"Returns a color."}),"\n",(0,r.jsx)(t.h3,{id:"colormixcolor_a-color_b-progress",children:(0,r.jsx)(t.code,{children:"Color.mix(color_a, color_b, progress)"})}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.code,{children:"progress"})," of 0.0 will return a table with the same values as ",(0,r.jsx)(t.code,{children:"color_a"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.code,{children:"progress"})," of 1.0 will return a table with the same values as ",(0,r.jsx)(t.code,{children:"color_b"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Other values of ",(0,r.jsx)(t.code,{children:"progress"})," will linearly interpolate each component between ",(0,r.jsx)(t.code,{children:"color_a"})," and ",(0,r.jsx)(t.code,{children:"color_b"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Returns a color."}),"\n",(0,r.jsx)(t.h3,{id:"colorr",children:(0,r.jsx)(t.code,{children:"color.r"})}),"\n",(0,r.jsx)(t.p,{children:"The red component of the color. Stored as a number in the range [0, 255]."}),"\n",(0,r.jsx)(t.h3,{id:"colorg",children:(0,r.jsx)(t.code,{children:"color.g"})}),"\n",(0,r.jsx)(t.p,{children:"The green component of the color. Stored as a number in the range [0, 255]."}),"\n",(0,r.jsx)(t.h3,{id:"colorb",children:(0,r.jsx)(t.code,{children:"color.b"})}),"\n",(0,r.jsx)(t.p,{children:"The blue component of the color. Stored as a number in the range [0, 255]."}),"\n",(0,r.jsx)(t.h3,{id:"colora",children:(0,r.jsx)(t.code,{children:"color.a"})}),"\n",(0,r.jsx)(t.p,{children:"The alpha or transparency component of the color. Stored as a number in the range [0, 255]."}),"\n",(0,r.jsx)(t.h2,{id:"textstyle",children:"TextStyle"}),"\n",(0,r.jsx)(t.h3,{id:"textstylenewfont_name-texture_path-animation_path",children:(0,r.jsx)(t.code,{children:"TextStyle.new(font_name, texture_path?, animation_path?)"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"font_name"}),": The name of the font to use.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Built in fonts:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'"THICK"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'"THIN"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'"THIN_SMALL"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'"MENU_TITLE"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'"MICRO"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'"CONTEXT"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'"CODE"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'"PLAYER_HP"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'"PLAYER_HP_ORANGE"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'"PLAYER_HP_GREEN"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'"DAMAGE"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'"RESULT"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'"BATTLE"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'"ENTITY_HP"'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"texture_path"}),": Required for custom fonts."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"animation_path"}),": Required for custom fonts."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For custom fonts, the format ",(0,r.jsx)(t.code,{children:"[FONT_NAME]_U+[CHAR_HEX]"})," is used for mapping characters. Only the first frame in the animation is used to render the character."]}),"\n",(0,r.jsxs)(t.p,{children:["Example: An animation file containing the character ",(0,r.jsx)(t.code,{children:"A"})," for the font ",(0,r.jsx)(t.code,{children:"COOL_FONT"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'animation state="COOL_FONT_U+0041"\nframe x="0" y="0" w="7" h="12\n'})}),"\n",(0,r.jsx)(t.p,{children:"Returns TextStyle."}),"\n",(0,r.jsx)(t.h3,{id:"textstylenew_monospacefont_name-texture_path-animation_path",children:(0,r.jsx)(t.code,{children:"TextStyle.new_monospace(font_name, texture_path?, animation_path?)"})}),"\n",(0,r.jsxs)(t.p,{children:["Returns TextStyle, see ",(0,r.jsx)(t.a,{href:"#textstylenewfont_name-texture_path-animation_path",children:"TextStyle.new()"})]}),"\n",(0,r.jsx)(t.h3,{id:"text_stylemonospace",children:(0,r.jsx)(t.code,{children:"text_style.monospace"})}),"\n",(0,r.jsxs)(t.p,{children:["Boolean or nil. When set to true, text created using this text style will use the width of either the space character or ",(0,r.jsx)(t.code,{children:"A"})," to decide how much width will be allocated for a single glyph, instead of the width of the glyph itself."]}),"\n",(0,r.jsx)(t.h3,{id:"text_stylemin_glyph_width",children:(0,r.jsx)(t.code,{children:"text_style.min_glyph_width"})}),"\n",(0,r.jsx)(t.p,{children:"Number or nil. The minimum amount of space allocated for a single glyph for resolving glyph placement."}),"\n",(0,r.jsx)(t.p,{children:"When unset the text style will use the engine default value of 0."}),"\n",(0,r.jsx)(t.h3,{id:"text_styleletter_spacing",children:(0,r.jsx)(t.code,{children:"text_style.letter_spacing"})}),"\n",(0,r.jsx)(t.p,{children:"Number or nil. Additional horizontal space between glyphs."}),"\n",(0,r.jsx)(t.p,{children:"When unset the text style will use the engine default value of 1."}),"\n",(0,r.jsx)(t.h3,{id:"text_styleline_spacing",children:(0,r.jsx)(t.code,{children:"text_style.line_spacing"})}),"\n",(0,r.jsxs)(t.p,{children:["Number or nil. Additional vertical space given to new lines. Line height is calculated using the height of either the space character or ",(0,r.jsx)(t.code,{children:"A"}),", added to the line spacing."]}),"\n",(0,r.jsx)(t.p,{children:"When unset the text style will use the engine default value of 1."}),"\n",(0,r.jsx)(t.h3,{id:"textstylemeasuretext_style-text",children:(0,r.jsx)(t.code,{children:"TextStyle.measure(text_style, text)"})}),"\n",(0,r.jsx)(t.p,{children:"Returns TextMetrics"}),"\n",(0,r.jsx)(t.h2,{id:"textmetrics",children:"TextMetrics"}),"\n",(0,r.jsx)(t.h3,{id:"text_metricswidth",children:(0,r.jsx)(t.code,{children:"text_metrics.width"})}),"\n",(0,r.jsx)(t.p,{children:"The width of the text."}),"\n",(0,r.jsx)(t.h3,{id:"text_metricsheight",children:(0,r.jsx)(t.code,{children:"text_metrics.height"})}),"\n",(0,r.jsx)(t.p,{children:"The height of the text."}),"\n",(0,r.jsx)(t.h2,{id:"syncnode",children:"SyncNode"}),"\n",(0,r.jsx)(t.p,{children:"SyncNodes are a sprite animation pair that sync settings, state, and progress with an entity's root animation."}),"\n",(0,r.jsx)(t.h3,{id:"sync_nodesprite",children:(0,r.jsx)(t.code,{children:"sync_node:sprite()"})}),"\n",(0,r.jsx)(t.p,{children:"Returns a reference to the sync node's sprite."}),"\n",(0,r.jsx)(t.h3,{id:"sync_nodeanimation",children:(0,r.jsx)(t.code,{children:"sync_node:animation()"})}),"\n",(0,r.jsxs)(t.p,{children:["Returns a reference to the sync node's ",(0,r.jsx)(t.a,{href:"/client/lua-api/resource-api/animation",children:"Animation"})]}),"\n",(0,r.jsx)(t.h2,{id:"hud",children:"Hud"}),"\n",(0,r.jsx)(t.p,{children:"A global sprite node, used to add sprites to the HUD."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:"local sprite = Hud:create_node()\n"})})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>d});var r=i(6540);const s={},l=r.createContext(s);function n(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);