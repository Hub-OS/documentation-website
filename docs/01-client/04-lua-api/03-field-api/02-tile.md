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

### `tile:state()`

Returns the TileState.

### `tile:set_state(tile_state)`

- `tile_state`
  - `TileState.Void`
  - `TileState.Normal`
  - `TileState.PermaHole`
  - `TileState.Cracked`
  - `TileState.Broken`
  - [TileState.[state_name]](/client/packages#tile-states)

### `tile:can_set_state(tile_state)`

Returns true if the currently applied tile state can be replaced with `tile_state`

### `tile:visible_state()`

Returns a TileState, usually the same as [tile:state()](#tilestate), unless [tile:set_visible_state()](#tileset_visible_statetile_state) was called.

### `tile:set_visible_state(tile_state?)`

Overrides the visual for the tile to match a tile state, or set to nil to sync with [tile:state()](#tilestate)

### `tile:is_edge()`

Returns true if the tile is one of the hidden padding tiles around the edge of the field.

### `tile:is_walkable()`

Returns true if the tile is not a hole.

Examples: `TileState.Broken`, `TileState.Void`, `TileState.Empty`

### `tile:is_shareable(exclude_list?)`

Returns true as long as there are no reservations by entities where [entity:sharing_tile()](/client/lua-api/entity-api/entity#entitysharing_tile) is false, excluding [entities with ids](/client/lua-api/entity-api/entity#entityid) matching the `exclude_list`.

### `tile:is_reserved(exclude_list?)`

Returns true if there's any reservations for this tile, excluding [entities with ids](/client/lua-api/entity-api/entity#entityid) matching the `exclude_list`.

### `tile:reserve_count_for(entity)`

Returns a number, representing the total reservation count for this [Entity](/client/lua-api/entity-api/entity).

### `tile:reserve_for(entity)`

Adds a reservation of this tile for this [Entity](/client/lua-api/entity-api/entity).

### `tile:remove_reservation_for(entity)`

Removes a reservation for this tile for this [Entity](/client/lua-api/entity-api/entity).

### `tile:reserve_for_id(entity_id)`

Adds a reservation of this tile for this [Entity](/client/lua-api/entity-api/entity) using an entity id.

### `tile:remove_reservation_for_id(entity_id)`

Removes a reservation of this tile for this [Entity](/client/lua-api/entity-api/entity) using an entity id.

### `tile:team()`

Returns [Team](/client/lua-api/entity-api/entity#entityset_teamteam)

### `tile:set_team(team, direction)`

- `team`: [Team](/client/lua-api/entity-api/entity#entityset_teamteam)
- `direction`: [Direction](/client/lua-api/field-api/direction) override for the duration of the team change.

### `tile:original_team()`

Returns [Team](/client/lua-api/entity-api/entity#entityset_teamteam)

### `tile:facing()`

Returns a [Direction](/client/lua-api/field-api/direction)

### `tile:set_facing(direction)`

- `direction`: [Direction](/client/lua-api/field-api/direction)

Sets the facing direction used to set the initial direction of spawned entities, as well as for resolving reverting team.

### `tile:set_highlight(highlight)`

- `highlight`
  - `Highlight.None`
  - `Highlight.Flash`
  - `Highlight.Solid`

### `tile:get_tile(direction, distance)`

- `direction`: [Direction](/client/lua-api/field-api/direction)
- `count`: integer

Returns a Tile `count` many tiles in `direction`'s direction, or `nil`.

### `tile:attack_entities(spell)`

Same as [spell:attack_tile(tile)](/client/lua-api/entity-api/spell#spellattack_tiletile)

### `tile:contains_entity(entity)`

Returns true if the [Entity](/client/lua-api/entity-api/entity) is at the same position as the tile.

### `tile:add_entity(entity)`

Moves the [Entity](/client/lua-api/entity-api/entity) to this tile if the entity is spawned.

### `tile:remove_entity(entity)`

Removes the [Entity](/client/lua-api/entity-api/entity) from the field.

### `tile:remove_entity_by_id(entity_id)`

Removes the [Entity](/client/lua-api/entity-api/entity) from the field.

### `tile:find_entities(function(entity): boolean)`

Returns a list of entities for any entity the callback returned true for.

Only spawned [Entities](/client/lua-api/entity-api/entity) not marked for deletion will be passed to the callback.

### `tile:find_characters(function(entity): boolean)`

Returns a list of entities for any entity the callback returned true for.

Only spawned [Characters](/client/lua-api/entity-api/character) not marked for deletion will be passed to the callback.

### `tile:find_obstacles(function(entity): boolean)`

Returns a list of entities for any entity the callback returned true for.

Only spawned [Obstacles](/client/lua-api/entity-api/obstacle) not marked for deletion will be passed to the callback.

### `tile:find_players(function(entity): boolean)`

Returns a list of entities for any entity the callback returned true for.

Only spawned [Players](/client/lua-api/entity-api/player) not marked for deletion will be passed to the callback.

### `tile:find_spells(function(entity): boolean)`

Returns a list of entities for any entity the callback returned true for.

Only [Spells](/client/lua-api/entity-api/spell) will be passed to the callback.
