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

### `field:find_entities(function(entity))`

Returns a list of entities for any entity the callback returned true for.

All spawned [Entities](/client/lua-api/entity-api/entity) will be passed to the callback.

### `field:find_characters(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only spawned [Characters](/client/lua-api/entity-api/character) will be passed to the callback, includes [Players](/client/lua-api/entity-api/player).

### `field:find_obstacles(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only spawned [Obstacles](/client/lua-api/entity-api/obstacle) will be passed to the callback.

### `field:find_players(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only spawned [Players](/client/lua-api/entity-api/player) will be passed to the callback.

### `field:find_spells(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only spawned [Spells](/client/lua-api/entity-api/spell) will be passed to the callback, excludes [Obstacles](/client/lua-api/entity-api/obstacle).

### `field:find_nearest_characters(function(entity))`

Returns a list of entities sorted by distance, for any entity the callback returned true for.

Only spawned [Characters](/client/lua-api/entity-api/character) will be passed to the callback, includes [Players](/client/lua-api/entity-api/player).

### `field:find_nearest_players(function(entity))`

Returns a list of entities sorted by distance, for any entity the callback returned true for.

Only spawned [Players](/client/lua-api/entity-api/player) will be passed to the callback.

### `field:find_tiles(function(tile))`

Returns a list of [Tiles](#tile) for any tile the callback returned true for.

### `field:shake(strength, duration)`

- `strength` number, affects how aggressively the field shakes
- `duration` number, how many game frames the effect should last

### `field:notify_on_delete(target_id, observer_id, function(entity))`

Deprecated. Use [entity:on_delete()](/client/lua-api/entity-api/entity#entityon_deletefunctionentity) instead.

### `field:callback_on_delete(id, function(entity))`

Deprecated. Use [entity:on_delete()](/client/lua-api/entity-api/entity#entityon_deletefunctionentity) instead.
