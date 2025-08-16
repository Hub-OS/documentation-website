# Movement

See [entity:queue_movement](/client/lua-api/entity-api/entity#entityqueue_movementmovement)

### `Movement.new_teleport(tile)`

- `tile`: [Tile](/client/lua-api/field-api/tile)

Returns a new Movement instance.

### `Movement.new_slide(tile, delta)`

- `tile`: [Tile](/client/lua-api/field-api/tile)
- `delta`: number

Returns a new Movement instance.

### `Movement.new_jump(tile, height, delta)`

- `tile`: [Tile](/client/lua-api/field-api/tile)
- `height`: number
- `delta`: number

Returns a new Movement instance.

### `movement.elapsed`

The elapsed time in game frames since the movement began.

### `movement.delta`

The duration in game frames for the movement animation to play.

If the delta is greater than zero the entity will slide. If [height](#movementheight) isn't 0, the entity will jump instead.

### `movement.delay`

The required duration in game frames for the movement animation to start.

### `movement.endlag`

The duration in game frames for the movement to drop after delta + delay.

### `movement.height`

The distance above the ground for the entity to jump.

### `movement.dest_tile`

The tile where the movement will complete.

### `movement:animation_progress()`

Returns the movement's animation progress as a value between 0 and 1.

### `movement:is_sliding()`

Returns true if the movement is processed as a slide.

### `movement:is_jumping()`

Returns true if the movement is processed as a jump.

### `movement:is_teleporting()`

Returns true if the movement is processed as a teleport.

### `movement.on_begin_func = function()`

Called when the movement begins processing. If the movement is cancelled before executing it won't be called.

### `movement.on_end_func = function()`

Called when the movement completes or is cancelled.
