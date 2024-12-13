# Areas

`area_id` is the filename without extension, `./assets/my_area.tmx` would be `my_area`.

Positions are in tile space. To get the center of a tile add `0.5`

### `Net.list_areas()`

Returns a list of area_ids.

### `Net.is_area(area_id)`

Returns true if the area_id matches an existing area.

### `Net.update_area(area_id, tmx_string)`

Overwrites all objects, tiles, and custom properties for the area, clients will be updated at the end of the tick.

### `Net.clone_area(area_id, new_area_id)`

Creates a copy of an area. Includes objects and tiles.

### `Net.remove_area(area_id)`

Unloads an area, any players in this area are kicked.

### `Net.area_to_string(area_id)`

Returns a tmx string for an area.

### `Net.get_layer_width(area_id)`

Returns the width for tile layers in tiles.

### `Net.get_layer_height(area_id)`

Returns the height for tile layers in tiles.

### `Net.get_layer_count(area_id)`

Returns the number of layers within an area.

### `Net.get_tile_width(area_id)`

Returns the screen width of a tile in pixels.

### `Net.get_tile_height(area_id)`

Returns the screen height of a tile in pixels.

### `Net.world_to_screen_multi(area_id, x, y, z?)`

Returns the screen position using multi-values.

```lua
local x, y = Net.world_to_screen_multi(area_id, x, y)
```

### `Net.screen_to_world_multi(area_id, x, y)`

Returns the world position using multi-values.

```lua
local x, y = Net.screen_to_world_multi(area_id, x, y)
```

### `Net.get_area_custom_properties(area_id)`

Returns a [Net.CustomProperties](/server/lua-api/objects#netcustomproperties)

### `Net.get_area_custom_property(area_id, name)`

Returns a string value for the property matching the name.

### `Net.set_area_custom_property(area_id, name, property_value)`

Sets a value for the property matching the name.

### `Net.get_area_name(area_id)`

Returns the name of the area, visible to the client.

### `Net.set_area_name(area_id, name)`

Sets the name of the area, visible to the client.

### `Net.get_music(area_id)`

Returns the path of the area's music.

### `Net.set_music(area_id, path)`

Changes the music for the area, players will be updated at the end of the tick.

### `Net.get_background(area_id)`

Returns [Net.TextureAnimationPair](/server/lua-api/widgets#nettextureanimationpair)

### `Net.get_background_velocity(area_id)`

Returns `{ x: number, y: number }`

### `Net.get_background_parallax(area_id)`

Returns a number representing how strongly the player's position affects the background.

### `Net.set_background(area_id, texture_path, animation_path?, vel_x?, vel_y?, parallax?)`

Modifies background properties all at once, players will be updated at the end of the tick.

### `Net.get_foreground(area_id)`

Returns [Net.TextureAnimationPair](/server/lua-api/widgets#nettextureanimationpair)

### `Net.get_foreground_velocity(area_id)`

Returns `{ x: number, y: number }`

### `Net.get_foreground_parallax(area_id)`

Returns a number representing how strongly the player's position affects the foreground.

### `Net.set_foreground(area_id, texture_path, animation_path?, vel_x?, vel_y?, parallax?)`

Modifies foreground properties all at once, players will be updated at the end of the tick.

### `Net.get_spawn_position(area_id)`

Returns [Net.Position](/server/lua-api/misc#netposition)

Defaults to either the Home Warp or (0, 0, 0)

### `Net.set_spawn_position(area_id, x, y, z)`

Sets the default spawn position for players entering the area.

### `Net.get_spawn_direction(area_id)`

Returns a string representing the spawn direction.

Defaults the Home Warp's `Direction` custom property.

### `Net.set_spawn_direction(area_id, direction)`

Sets the default spawn direction for players entering the area.

### `Net.list_tilesets(area_id)`

Returns a list of `tileset_path`s

### `Net.get_tileset(area_id, tileset_path)`

Returns [Net.TilesetData](#nettilesetdata) or `nil`.

### `Net.get_tileset_for_tile(area_id, tile_gid)`

Returns [Net.TilesetData](#nettilesetdata) or `nil`.

Note: The same `tile_gid` can return different values for different areas.

### `Net.get_tile(area_id, x, y, z)`

Returns [Net.TileData](#nettiledata)

### `Net.set_tile(area_id, x, y, z, tile_gid, flip_h?, flip_v?, rotate?)`

Sets the tile at the specified position, updates are merged and sent to players at the end of the tick.

### `Net.provide_asset(area_id, path)`

Marks the asset as a dependency for the area, forcing joining players to download the asset before being able to play.

Useful for avoiding lag spikes during gameplay with dynamically loaded large assets. (Playing sound effects)

### `Net.play_sound(area_id, path)`

Plays a sound for every player within the area.

## Net.TilesetData

```lua
---@class Net.TilesetData
---@field path string
---@field first_gid number
```

## Net.TileData

```lua
---@class Net.TileData
---@field gid number
---@field flipped_horizontally boolean
---@field flipped_vertically boolean
---@field rotated boolean
```
