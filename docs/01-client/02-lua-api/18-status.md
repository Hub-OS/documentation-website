# Status

See [Status Package Documentation](/client/packages#statuses) for creating new statuses.

### `status:owner()`

Returns an [Entity](/client/lua-api/entity), represents the entity affected by the status.

### `status.on_delete_func = function(self)`

Called when the status wears off, used for clean up.
