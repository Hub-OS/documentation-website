# Sprite

### `sprite:create_node()`

Returns a new child Sprite instance that renders relative to the parent sprite's origin.

### `sprite:create_text_node(text_style, text)`

- `text_style`: [TextStyle](#textstyle)
- `text`: The text to render.

Returns a Sprite, similar to `sprite:create_node()`. The returned sprite node has a child for each character in `text`, all with [sprite:use_parent_shader(true)](#spriteuse_parent_shaderenable) set.

### `sprite:remove_node(sprite)`

Deletes the passed sprite if it's a child of the parent.

### `sprite:children()`

Returns a list of Sprites.

### `sprite:texture()`

Returns the path to the sprite's texture.

### `sprite:set_texture(path)`

Use values returned from [Resources.load_texture()](/client/lua-api/resource-api/resources#resourcesload_texturepath) for better performance.

### `sprite:palette()`

Returns the path to the sprite's palette or `nil`.

### `sprite:set_palette(path)`

Sets the palette for the texture to reference.

Palettes are 256x1 images. Colors on the sprite's texture will be remapped by taking the red value of the texture to grab a color from the palette.

Use values returned from [Resources.load_texture()](/client/lua-api/resource-api/resources#resourcesload_texturepath) for better performance.

### `sprite:visible()`

Returns true if the sprite is visible.

### `sprite:set_visible(visible)`

### `sprite:reveal()`

Same as `sprite:set_visible(true)`

### `sprite:hide()`

Same as `sprite:set_visible(false)`

### `sprite:layer()`

Returns an integer used for sorting during render.

### `sprite:set_layer(layer)`

- `layer`: integer, negative values render in front of the parent sprite.

Used for sorting during render.

### `sprite:offset()`

Returns `{ x: number, y: number }`, represents the parent relative offset.

### `sprite:set_offset(x, y)`

Sets the parent relative offset.

### `sprite:origin()`

Returns `{ x: number, y: number }`.

### `sprite:set_origin(x, y)`

Sets the origin, [Animations](/client/lua-api/resource-api/animation) will overwrite this value.

### `sprite:scale()`

Returns `{ x: number, y: number }`.

### `sprite:set_scale(x, y)`

Sets the scale of the sprite.

### `sprite:size()`

Returns `{ x: number, y: number }`. Represents the size of the sprite. Scale is accounted.

### `sprite:set_size(x, y)`

Sets the size of the sprite, updates the scale.

### `sprite:width()`

Returns the width of the sprite, scale is acounted.

### `sprite:set_width(width)`

Sets the width of the sprite, updates the scale.

### `sprite:height()`

Returns the height of the sprite, scale is acounted.

### `sprite:set_height(height)`

Sets the height of the sprite, updates the scale.

### `sprite:color()`

Returns a [Color](#color)

### `sprite:set_color(color)`

- `color`: [Color](#color)

The color will be reset to black at the start of the next frame for root sprites.

### `sprite:color_mode()`

Returns the color mode.

### `sprite:set_color_mode(color_mode)`

- `color_mode`
  - `ColorMode.Additive` each pixel will be added by the sprite's color, alpha will be multiplied.
  - `ColorMode.Multiply` each pixel will be multiplied by the sprite's color.

The color mode will be reset to `ColorMode.Additive` at the start of the next frame for root sprites.

### `sprite:never_flip()`

Returns true if perspective does not affect the sprite.

### `sprite:set_never_flip(never_flip?)`

Prevents player perspective from flipping the sprite.

### `sprite:shader_effect()`

Returns a SpriteShaderEffect.

### `sprite:set_shader_effect(sprite_shader_effect)`

- `sprite_shader_effect`
  - `SpriteShaderEffect.None`
  - ``SpriteShaderEffect.Grayscale`
  - `SpriteShaderEffect.Pixelate`
    - Scales with alpha.

### `sprite:use_root_shader(enable?)`

Temporarily adopts the color, color mode, palette, and shader effect of the root sprite during render.

### `sprite:use_parent_shader(enable?)`

Adopts the color, color mode, palette, and shader effect of the parent sprite during render.

## Color

Colors are tables with an `r`, `g`, `b`, and `a` key, with each value set to a 0-255 integer.

There's a global table named `Color` with helpers for making new color tables.

### `Color.new(r, g, b, a?)`

Each component is a 0-255 value, `a` defaults to 255.

Returns a color.

### `Color.mix(color_a, color_b, progress)`

A `progress` of 0.0 will return a table with the same values as `color_a`.

A `progress` of 1.0 will return a table with the same values as `color_b`.

Other values of `progress` will linearly interpolate each component between `color_a` and `color_b`.

Returns a color.

## TextStyle

### `TextStyle.new(font_name, texture_path?, animation_path?)`

- `font_name`: The name of the font to use.
  - Built in fonts:
    - `"THICK"`
    - `"THIN"`
    - `"THIN_SMALL"`
    - `"MENU_TITLE"`
    - `"MICRO"`
    - `"CONTEXT"`
    - `"CODE"`
    - `"PLAYER_HP"`
    - `"PLAYER_HP_ORANGE"`
    - `"PLAYER_HP_GREEN"`
    - `"DAMAGE"`
    - `"RESULT"`
    - `"BATTLE"`
    - `"ENTITY_HP"`
  - `texture_path`: Required for custom fonts.
  - `animation_path`: Required for custom fonts.

For custom fonts, the format `[FONT_NAME]_U+[CHAR_HEX]` is used for mapping characters. Only the first frame in the animation is used to render the character.

Example: An animation file containing the character `A` for the font `COOL_FONT`

```
animation state="COOL_FONT_U+0041"
frame x="0" y="0" w="7" h="12
```

## SyncNode

SyncNodes are a sprite animation pair that sync settings, state, and progress with an entity's root animation.

### `sync_node:sprite()`

Returns a reference to the sync node's sprite.

### `sync_node:animation()`

Returns a reference to the sync node's [Animation](/client/lua-api/resource-api/animation)
