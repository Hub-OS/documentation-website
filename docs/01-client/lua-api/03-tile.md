# Tile

Tiles have a custom comparison function that allows two instances to be compared directly: `tile_a == tile_b`

### `tile:x()`

Returns the column of the tile.

### `tile:y()`

Returns the row of the tile.

### `tile:width()`

Returns the width of the tile in pixels.

### `tile:height()`

Returns the height of the tile in pixels.

### `tile:get_state()`

Returns the tile's TileState.

### `tile:set_state(tile_state)`

- `tile_state`
  - `TileState.Hidden`
  - `TileState.Normal`
  - `TileState.Hole`
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

### `tile:reserve_entity_by_id(entity_id)`

Adds a reservation for this tile by the entity id.

### `tile:get_facing()`

Returns a [Direction](/docs/client/lua-api/direction)

### `tile:set_facing(direction)`

- `direction`: [Direction](/docs/client/lua-api/direction)

Sets the facing direction used to set the initial direction of spawned entities, as well as for resolving reverting team.

### `tile:highlight(mode)`

- `mode`
  - `Highlight.None`
  - `Highlight.Flash`
  - `Highlight.Solid`

### `tile:get_tile(direction, count)`

- `direction`: [Direction](/docs/client/lua-api/direction)
- `count`: integer

Returns a tile `count` many tiles in `direction`'s direction.

### `tile:attack_entities(entity)`

Queues an attack to occur on this tile by this [Entity](/docs/client/lua-api/entity).

### `tile:contains_entity(entity)`

Returns true if the [Entity](/docs/client/lua-api/entity) is on the field and at the same position as the tile.

### `tile:add_entity(entity)`

Moves the [Entity](/docs/client/lua-api/entity) to this tile if the entity is spawned.

### `tile:remove_entity(entity)`

Removes the [Entity](/docs/client/lua-api/entity) from the field.

### `tile:remove_entity_by_id(entity_id)`

Removes the [Entity](/docs/client/lua-api/entity) from the field.

### `tile:find_entities(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only "hittable" [Entities](/docs/client/lua-api/entity) will be passed to the callback.

### `tile:find_characters(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only "hittable" [Characters](/docs/client/lua-api/character) will be passed to the callback.

### `tile:find_obstacles(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only "hittable" [Obstacles](/docs/client/lua-api/obstacle) will be passed to the callback.

### `tile:find_players(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only "hittable" [Players](/docs/client/lua-api/players) will be passed to the callback.

### `tile:find_spells(function(entity))`

Returns a list of entities for any entity the callback returned true for.

Only [Spells](/docs/client/lua-api/spell) will be passed to the callback.