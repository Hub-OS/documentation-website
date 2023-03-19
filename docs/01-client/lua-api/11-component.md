# Component

See [entity:create_component()](/docs/client/lua-api/entity#entitycreate_componentlifetime)

### `component:get_owner()`

Returns an [Entity](/docs/client/lua-api/entity)

### `component:eject()`

Removes the component from the owner.

### `component.on_init_func = function(self)`

Called when the entity is spawned, or immediately if the entity has already spawned.

### `component.on_update_func = function(self)`

Called when the lifetime is relevant.

See [entity:create_component()](/docs/client/lua-api/entity#entitycreate_componentlifetime)
