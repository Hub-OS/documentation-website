# Field

### `field:tile_at(col, row)`

There's hidden padding around the field, the first visible tile is at (1, 1).

Returns a [Tile](/docs/client/lua-api/tile)

### `field:width()`

Returns the total columns in the field.

### `field:height()`

Returns the total rows in the field.

### `field:spawn(entity, tile)`

Spawns the entity at the start of the next frame if the entity hasn't already been spawned, and places the entity at the tile.

### `field:spawn(entity, col, row)`

Spawns the entity at the start of the next frame if the entity hasn't already been spawned, and places the entity at the tile at (col, row).

### `field:get_entity(id)`

Returns an [Entity](/docs/client/lua-api/entity) if it exists.

### `field:find_entities(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only "hittable" [Entities](/docs/client/lua-api/entity) will be passed to the callback.

### `field:find_characters(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only "hittable" [Characters](/docs/client/lua-api/character) will be passed to the callback.

### `field:find_obstacles(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only "hittable" [Obstacles](/docs/client/lua-api/obstacle) will be passed to the callback.

### `field:find_players(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only "hittable" [Players](/docs/client/lua-api/player) will be passed to the callback.

### `field:find_spells(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only [Spells](/docs/client/lua-api/spell) will be passed to the callback.

### `field:find_tiles(function(tile))`

Returns a list of [Tiles](/docs/client/lua-api/tile) for any tile the callback returned true for.

### `field:notify_on_delete(target_id, observer_id, function(entity))`

### `field:callback_on_delete(id, function(entity))`
