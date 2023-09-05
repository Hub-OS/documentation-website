# Field

### `field:tile_at(col, row)`

There's hidden padding around the field, the first visible tile is at (1, 1).

Returns a [Tile](#tile) or `nil`

### `field:width()`

Returns the total columns in the field.

### `field:height()`

Returns the total rows in the field.

### `field:spawn(entity, tile)`

Spawns the entity at the start of the next frame if the entity hasn't already been spawned, and places the entity at the tile.

### `field:spawn(entity, col, row)`

Spawns the entity at the start of the next frame if the entity hasn't already been spawned, and places the entity at the tile at (col, row).

### `field:get_entity(id)`

Returns an [Entity](/client/lua-api/entity) or `nil`.

### `field:find_entities(function(entity))`

Returns a list of entities for any entity the callback returned true for.

All spawned [Entities](/client/lua-api/entity) will be passed to the callback.

### `field:find_characters(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only spawned [Characters](/client/lua-api/character) will be passed to the callback, includes [Players](/client/lua-api/player).

### `field:find_obstacles(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only spawned [Obstacles](/client/lua-api/obstacle) will be passed to the callback.

### `field:find_players(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only spawned [Players](/client/lua-api/player) will be passed to the callback.

### `field:find_spells(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only spawned [Spells](/client/lua-api/spell) will be passed to the callback, excludes [Obstacles](/client/lua-api/obstacle).

### `field:find_nearest_characters(function(entity))`

Returns a list of entities sorted by distance, for any entity the callback returned true for.

Only spawned [Characters](/client/lua-api/character) will be passed to the callback, includes [Players](/client/lua-api/player).

### `field:find_nearest_players(function(entity))`

Returns a list of entities sorted by distance, for any entity the callback returned true for.

Only spawned [Players](/client/lua-api/player) will be passed to the callback.

### `field:find_tiles(function(tile))`

Returns a list of [Tiles](#tile) for any tile the callback returned true for.

### `field:shake(strength, duration)`

- `strength` number, affects how aggressively the field shakes
- `duration` number, how many game frames the effect should last

### `field:notify_on_delete(target_id, observer_id, function(entity))`

Deprecated. Use [entity:on_delete()](/client/lua-api/entity#entityon_deletefunctionentity) instead.

### `field:callback_on_delete(id, function(entity))`

Deprecated. Use [entity:on_delete()](/client/lua-api/entity#entityon_deletefunctionentity) instead.

## Tile

Tiles have a custom comparison function that allows two instances to be compared directly: `tile_a == tile_b`

### `tile:x()`

Returns the column of the tile.

### `tile:y()`

Returns the row of the tile.

### `tile:width()`

Returns the width of the tile in pixels.

### `tile:height()`

Returns the height of the tile in pixels.

### `tile:state()`

Returns the tile's TileState.

### `tile:set_state(tile_state)`

- `tile_state`
  - `TileState.Hidden`
  - `TileState.Normal`
  - `TileState.PermaHole`
  - `TileState.Cracked`
  - `TileState.Broken`
  - `TileState.Ice`
  - `TileState.Grass`
  - `TileState.Lava`
  - `TileState.Poison`
  - `TileState.Holy`
  - `TileState.DirectionLeft`
  - `TileState.DirectionRight`
  - `TileState.DirectionUp`
  - `TileState.DirectionDown`
  - `TileState.Volcano`
  - `TileState.Sea`
  - `TileState.Sand`
  - `TileState.Metal`

### `tile:is_edge()`

Returns true if the tile is one of the hidden padding tiles around the edge of the field.

### `tile:is_walkable()`

Returns true if the tile is not a hole. (`TileState.Broken`, `TileState.Hidden`, `TileState.Empty`)

### `tile:is_reserved()`

Returns true if there's any reservations for this tile.

### `tile:reserve_for(entity)`

Adds a reservation of this tile for this [Entity](/client/lua-api/entity).

### `tile:remove_reservation_for(entity)`

Removes a reservation for this tile for this [Entity](/client/lua-api/entity).

### `tile:reserve_for_id(entity_id)`

Adds a reservation of this tile for this [Entity](/client/lua-api/entity) using an entity id.

### `tile:remove_reservation_for_id(entity_id)`

Removes a reservation of this tile for this [Entity](/client/lua-api/entity) using an entity id.

### `tile:team()`

Returns [Team](/client/lua-api/entity#entityset_teamteam)

### `tile:set_team(team)`

- `team`: [Team](/client/lua-api/entity#entityset_teamteam)

### `tile:facing()`

Returns a [Direction](/client/lua-api/direction)

### `tile:set_facing(direction)`

- `direction`: [Direction](/client/lua-api/direction)

Sets the facing direction used to set the initial direction of spawned entities, as well as for resolving reverting team.

### `tile:highlight(mode)`

- `mode`
  - `Highlight.None`
  - `Highlight.Flash`
  - `Highlight.Solid`

### `tile:get_tile(direction, count)`

- `direction`: [Direction](/client/lua-api/direction)
- `count`: integer

Returns a Tile `count` many tiles in `direction`'s direction, or `nil`.

### `tile:attack_entities(spell)`

Queues an attack to occur on this tile by this [Spell](/client/lua-api/spell).

### `tile:contains_entity(entity)`

Returns true if the [Entity](/client/lua-api/entity) is on the field and at the same position as the tile.

### `tile:add_entity(entity)`

Moves the [Entity](/client/lua-api/entity) to this tile if the entity is spawned.

### `tile:remove_entity(entity)`

Removes the [Entity](/client/lua-api/entity) from the field.

### `tile:remove_entity_by_id(entity_id)`

Removes the [Entity](/client/lua-api/entity) from the field.

### `tile:find_entities(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only "hittable" [Entities](/client/lua-api/entity) will be passed to the callback.

### `tile:find_characters(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only "hittable" [Characters](/client/lua-api/character) will be passed to the callback.

### `tile:find_obstacles(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only "hittable" [Obstacles](/client/lua-api/obstacle) will be passed to the callback.

### `tile:find_players(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only "hittable" [Players](/client/lua-api/player) will be passed to the callback.

### `tile:find_spells(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only [Spells](/client/lua-api/spell) will be passed to the callback.
