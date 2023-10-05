# Custom Tile State

See [Tile State Package Documentation](/client/packages#tile-states) for creating new tile states.

### `custom_tile_state:field()`

Returns [Field](/client/lua-api/field-api/field)

### `custom_tile_state.change_request_func = function(self, tile, tile_state): boolean`

Called when [tile:set_state()](/client/lua-api/field-api/tile#tileset_statetile_state) is called. Used to accept or deny the change.

### `custom_tile_state.on_update_func = function(self, tile)`

Called for every tile matching the state while time isn't frozen.

### `custom_tile_state.on_entity_enter_func = function(self, entity)`

Called when an entity enters the tile during a movement, [tile:add_entity()](/client/lua-api/field-api/tile#tileadd_entityentity), [tile:set_state()](/client/lua-api/field-api/tile#tileset_statetile_state), or spawning.

### `custom_tile_state.on_entity_leave_func = function(self, entity, prev_tile)`

Called when an entity moves to another tile from a movement or [tile:add_entity()](/client/lua-api/field-api/tile#tileadd_entityentity).

`tile` is the tile the entity left.

### `custom_tile_state.on_entity_stop_func = function(self, entity, prev_tile)`

Called when an entity finishes movement on the tile or is added by [tile:add_entity()](/client/lua-api/field-api/tile#tileadd_entityentity).
