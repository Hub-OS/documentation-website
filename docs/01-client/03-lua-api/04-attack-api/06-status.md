# Status

See [Status Package Documentation](/client/packages#statuses) for creating new statuses.

### `status:owner()`

Returns an [Entity](/client/lua-api/entity-api/entity), represents the entity affected by the status.

### `status:remaining_time()`

Returns a number representing the amount of battle frames until the status wears off.

### `status:set_remaining_time(duration)`

- `duration` number, how many battle frames the effect should last.

### `status.on_delete_func = function(self)`

Called when the status wears off, used for clean up.
