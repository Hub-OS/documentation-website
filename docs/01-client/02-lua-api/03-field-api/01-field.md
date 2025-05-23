# Field

### `field:tile_at(col, row)`

There's hidden padding around the field, the first visible tile is at (1, 1).

Returns a [Tile](/client/lua-api/field-api/tile) or `nil`

### `field:width()`

Returns the total columns in the field.

### `field:height()`

Returns the total rows in the field.

### `field:spawn(entity, tile)`

Spawns the entity at the start of the next frame if the entity hasn't already been spawned, and places the entity at the tile.

### `field:spawn(entity, col, row)`

Spawns the entity at the start of the next frame if the entity hasn't already been spawned, and places the entity at the tile at (col, row).

### `field:get_entity(id)`

Returns an [Entity](/client/lua-api/entity-api/entity) or `nil`.

### `field:find_entities(function(entity): boolean)`

Returns a list of entities for any entity the callback returned true for.

All spawned [Entities](/client/lua-api/entity-api/entity) that haven't been deleted will be passed to the callback.

### `field:find_characters(function(entity): boolean)`

Returns a list of entities for any entity the callback returned true for.

Only spawned [Characters](/client/lua-api/entity-api/character) that haven't been deleted will be passed to the callback, includes [Players](/client/lua-api/entity-api/player).

### `field:find_obstacles(function(entity): boolean)`

Returns a list of entities for any entity the callback returned true for.

Only spawned [Obstacles](/client/lua-api/entity-api/obstacle) that haven't been deleted will be passed to the callback.

### `field:find_players(function(entity): boolean)`

Returns a list of entities for any entity the callback returned true for.

Only spawned [Players](/client/lua-api/entity-api/player) that haven't been deleted will be passed to the callback.

### `field:find_spells(function(entity): boolean)`

Returns a list of entities for any entity the callback returned true for.

Only spawned [Spells](/client/lua-api/entity-api/spell) that haven't been deleted will be passed to the callback, excludes [Obstacles](/client/lua-api/entity-api/obstacle).

### `field:find_nearest_characters(entity, function(entity): boolean)`

Returns a list of entities sorted by distance, for any entity the callback returned true for.

Only spawned [Characters](/client/lua-api/entity-api/character) that haven't been deleted will be passed to the callback, includes [Players](/client/lua-api/entity-api/player).

### `field:find_nearest_players(entity, function(entity): boolean)`

Returns a list of entities sorted by distance, for any entity the callback returned true for.

Only spawned [Players](/client/lua-api/entity-api/player) that haven't been deleted will be passed to the callback.

### `field:find_tiles(function(tile): boolean)`

Returns a list of [Tiles](/client/lua-api/field-api/tile) for any tile the callback returned true for.

### `field:shake(strength, duration)`

- `strength` number, affects how aggressively the field shakes
- `duration` number, how many game frames the effect should last

### `field:notify_on_delete(target_id, observer_id, function(entity))`

Deprecated. Use [entity:on_delete()](/client/lua-api/entity-api/entity#entityon_deletefunctionentity) instead.

### `field:callback_on_delete(id, function(entity))`

Deprecated. Use [entity:on_delete()](/client/lua-api/entity-api/entity#entityon_deletefunctionentity) instead.

### `field:reclaim_column(x, team)`

Causes tiles in the column to return to the matching team as soon as possible, starting at the next frame. The transfer will be delayed by tile reservations in the column.
