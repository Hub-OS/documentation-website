# Entity

Most of these functions will throw if the entity has been erased. `entity:will_erase_eof()` and `entity:is_deleted()` will never throw and can be used to see if the entity is still safe to use.

### `entity:get_id()`

Returns the id for the entity.

### `entity:get_name()`

Returns the displayed name for the entity.

### `entity:set_name(name)`

Sets the displayed name for the entity.

Automatically set for [Players](/client/lua-api/player).

### `entity:get_element()`

Returns the [Element](/client/lua-api/spell#element) for the entity.

### `entity:set_element(element)`

- `element`: [Element](/client/lua-api/spell#element)

Sets the Element for the entity, affects super effectiveness of incoming attacks.

Automatically set for [Players](/client/lua-api/player).

### `entity:get_facing()`

Returns the facing [Direction](/client/lua-api/direction) of the entity, used by attacks to decide which direction to move in.

### `entity:get_facing_away()`

Same as `Direction.reverse(entity:get_facing())`

### `entity:set_facing(direction)`

Returns the facing [Direction](/client/lua-api/direction) of the entity, used by attacks to decide which direction to move in.

### `entity:get_team()`

Returns the [Team](/client/lua-api/entity#entityset_teamteam) of the entity

### `entity:set_team(team)`

- `team`
  - `Team.Other`
  - `Team.Red`
  - `Team.Blue`

Modifies which team the entity is on. If the entity is a [Player](/client/lua-api/player) the perspective may flip.

### `entity:is_team(team)`

Same as `entity:get_team() == team`

### `entity:get_tile(direction?, count?)`

- `direction`: [Direction](/client/lua-api/direction)
- `count`: integer

Returns a tile `count` many tiles in `direction`'s direction.
Returns the current tile if any parameters are unset.

### `entity:get_current_tile()`

Returns the tile at the same position as the entity.

### `entity:get_field()`

Returns the [Field](/client/lua-api/field)

### `entity:share_tile(share?)`

Allows other entities to stand on tiles reserved by this entity.

### `entity:set_float_shoe(enabled)`

The entity will ignore tile effects when active.

Automatically set for [Spells](/client/lua-api/spell) and [Artifacts](/client/lua-api/artifact).

### `entity:set_air_shoe(enabled)`

Allows the entity to walk on tiles that normally can't be walked on.

Automatically set for [Spells](/client/lua-api/spell) and [Artifacts](/client/lua-api/artifact).

### `entity:get_tile_offset()`

Returns a table with `x` and `y` keys.

This table represents the offset applied to the entity by movement.

### `entity:get_offset()`

Same as `entity:sprite():get_offset()`

### `entity:set_offset(x, y)`

Same as `entity:sprite():set_offset(x, y)`

### `entity:get_elevation()`

Returns the elevation of the entity.

### `entity:set_elevation(elevation)`

Vertical offset for the entity. When the elevation changes the sprite moves, but health will stay in the same position.

Positive elevation moves the entity upwards.

### `entity:get_height()`

Returns the height of the entity, used to determine the range where hit artifacts should appear.

### `entity:set_height(height)`

Sets the height of the entity.

### `entity:sprite()`

Returns a [Sprite](/client/lua-api/sprite), can be used to modify the entity's appearance.

### `entity:get_texture()`

Same as `entity:sprite():get_texture()`

### `entity:set_texture(path)`

Same as `entity:sprite():set_texture(path)`

### `entity:get_palette()`

Same as `entity:sprite():get_palette()`

### `entity:set_palette(path)`

Same as `entity:sprite():set_palette(path)`

### `entity:hide()`

Same as `entity:sprite():hide()`

### `entity:reveal()`

Same as `entity:sprite():reveal()`

### `entity:get_color()`

Same as `entity:sprite():get_color()`

### `entity:set_color(color)`

Same as `entity:sprite():set_color(color)`

### `entity:create_node()`

Same as `entity:sprite():create_node()`

### `entity:create_sync_node()`

Returns a [SyncNode](/client/lua-api/sprite#syncnode).

### `entity:remove_sync_node(sync_node)`

Removes the sync node from the entity.

### `entity:set_shadow(path)`

Sets the texture for the shadow. Shadows are not visible by default, use `entity:show_shadow()` to make the shadow visible.

Use values returned from [Engine.load_texture()](/client/lua-api/engine#engineload_texturepath) for better performance.

There are built-in shadow textures that can be used as well:

- `Shadow.None`
- `Shadow.Small`
- `Shadow.Big`

### `entity:show_shadow(visible?)`

Sets whether the shadow is visible or not.

### `entity:get_animation()`

Returns an [Animation](/client/lua-api/animation), can be used to modify the entity's animation data.

### `entity:load_animation(path)`

Same as `entity:get_animation():load(path)`

### `entity:create_component(lifetime)`

- `lifetime` affects when the component's update callback is called.

  - `Lifetimes.Local` when the entity update callback is called (affected by time freeze and status effects)
  - `Lifetimes.Battle` after every entity has updated and battle is active as long as time is not frozen.
  - `Lifetimes.Scene` near the end of every tick.

  Returns a [Component](#component)

### `entity:get_context()`

Returns a value that can be used to decide if an attack can counter an opponent, and to resolve the owner of an attack.

### `entity:queue_action(action)`

- `action`: [Action](/client/lua-api/action)

### `entity:can_move_to(tile)`

Returns true if the entity can move to the target tile.

### `entity:teleport(tile?, function())`

- `tile` if unset nothing happens.
- callback is called when the movement begins processing

### `entity:slide(tile?, duration, function())`

- `tile` if unset nothing happens.
- `duration` is in game frames.
- callback is called when the movement begins processing

### `entity:jump(tile?, height, duration, function())`

- `tile` if unset nothing happens.
- `height` how many pixels to offset the entity at the peak of the jump
- `duration` is in game frames.
- callback is called when the movement begins processing

### `entity:queue_movement(movement)`

- `movement`: [Movement](#movement)

### `entity:is_moving()`

Returns true if the entity is moving.

### `entity:is_sliding()`

Returns true if the entity is sliding.

### `entity:is_jumping()`

Returns true if the entity is jumping.

### `entity:is_teleporting()`

Returns true if the entity is teleporting.

### `entity:is_deleted()`

Returns true if the entity has been marked for deletion, or has been erased.

### `entity:will_erase_eof()`

Returns true if the entity will be completely deleted at the end of the frame, or already has been erased.

### `entity:erase()`

Skips delete animations, marks the entity to be erased at the end of the frame.

Clears `entity.on_delete_func` and calls `entity:delete()`

### `entity:delete()`

Calls delete callbacks, the entity won't be truly deleted unleses `entity:erase()` is called.

Ignored if `entity:delete()` was already called.

### `entity:default_player_delete()`

Calls `entity:delete()`, then plays an animation.

Calls `entity:erase()` at the end of the animation.

### `entity:default_character_delete()`

Calls `entity:delete()`, then plays an animation.

Calls `entity:erase()` at the end of the animation.

### `entity:on_delete(function(entity))`

Adds a callback listener for entity deletion.

### `entity.on_spawn_func = function(self)`

Called when the entity is spawned by [field:spawn()](/client/lua-api/field/#fieldspawnentity-tile)

### `entity.on_update_func = function(self)`

Called during battle, when not frozen from time freeze or blocked by statuses.

### `entity.on_delete_func = function(self)`

Called when health is 0 or `entity:delete()` is called. `entity:erase()` must be called to truly delete the entity.

This function is pre-set for all entities.

### `entity.on_battle_start_func = function(self)`

Called when battle starts for the first time, or when the entity is spawned if battle has already started.

### `entity.on_battle_end_func = function(self)`

Called when the battle has completed (win or loss).

Not implemented.

### `entity.can_move_to_func = function(self, tile)`

A bool is expected as a return value.

This function is pre-set for all entities.

## Component

See [entity:create_component()](/client/lua-api/entity#entitycreate_componentlifetime)

### `component:get_owner()`

Returns an [Entity](/client/lua-api/entity)

### `component:eject()`

Removes the component from the owner.

### `component.on_init_func = function(self)`

Called when the entity is spawned, or immediately if the entity has already spawned.

### `component.on_update_func = function(self)`

Called when the lifetime is relevant.

See [entity:create_component()](/client/lua-api/entity#entitycreate_componentlifetime)

## Movement

### `Battle.Movement.new()`

Returns a new Movement value for passing to [entity:queue_movement](#entityqueue_movementmovement)

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

### `movement:get_animation_progress()`

Returns the movement's animation progress as a value between 0 and 1.

### `movement:is_sliding()`

Returns true if the movement is processed as a slide.

### `movement:is_jumping()`

Returns true if the movement is processed as a jump.

### `movement:is_teleporting()`

Returns true if the movement is processed as a teleport.

### `movement.on_begin_func = function()`

Called when the movement begins processing. If the movement is cancelled before executing it won't be called.
