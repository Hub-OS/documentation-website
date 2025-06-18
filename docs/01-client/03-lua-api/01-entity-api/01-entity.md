# Entity

Most of these functions will throw if the entity has been erased. `entity:will_erase_eof()` and `entity:deleted()` will never throw and can be used to see if the entity is still safe to use.

### `entity:id()`

Returns the id for the entity.

### `entity:name()`

Returns the displayed name for the entity.

### `entity:set_name(name)`

Sets the displayed name for the entity.

Automatically set for [Players](/client/lua-api/entity-api/player).

### `entity:element()`

Returns the [Element](/client/lua-api/attack-api/hit-props#element) for the entity.

### `entity:set_element(element)`

- `element`: [Element](/client/lua-api/attack-api/hit-props#element)

Sets the Element for the entity, affects super effectiveness of incoming attacks.

Automatically set for [Players](/client/lua-api/entity-api/player).

### `entity:facing()`

Returns the facing [Direction](/client/lua-api/field-api/direction) of the entity, used by attacks to decide which direction to move in.

### `entity:facing_away()`

Returns [Direction](/client/lua-api/field-api/direction)

Same as `Direction.reverse(entity:facing())`

### `entity:set_facing(direction)`

Sets the facing [Direction](/client/lua-api/field-api/direction) of the entity, used by attacks to decide which direction to move in.

### `entity:team()`

Returns the [Team](/client/lua-api/entity-api/entity#entityset_teamteam) of the entity

### `entity:set_team(team)`

- `team`
  - `Team.Other`
  - `Team.Red`
  - `Team.Blue`

Modifies which team the entity is on. If the entity is a [Player](/client/lua-api/entity-api/player) the perspective may flip.

### `entity:is_team(team)`

Returns a boolean.

Same as `entity:team() == team`

### `entity:owner()`

Returns an Entity, Team, or `nil`

### `entity:set_owner(team_or_entity?)`

Marks a team or entity as the owner of this entity. If `team_or_entity` is unset the entity will be reverted to having no owner.

If a team or entity has too many entities claimed, the oldest claimed entity will be deleted.

### `entity:get_tile(direction?, distance?)`

- `direction`: [Direction](/client/lua-api/field-api/direction)
- `distance`: integer

Returns a tile `distance` many tiles in `direction`'s direction, or `nil`.
Returns the current tile if any parameters are unset.

### `entity:current_tile()`

Returns the tile at the same position as the entity.

### `entity:field()`

Returns the [Field](/client/lua-api/field-api/field)

### `entity:spawned()`

Returns true if the entity has spawned.

Usually set to true the frame after [field:spawn()](/client/lua-api/field-api/field#fieldspawnentity-tile) is called with this entity.

### `entity:hittable()`

Returns true if the entity:

- Is [Living](/client/lua-api/entity-api/living)
- [Hitbox is enabled](/client/lua-api/entity-api/living#livinghitbox_enabled)
- Has health > 0
- On the field
- Not deleted

Different from [living:hitbox_enabled()](/client/lua-api/entity-api/living#livinghitbox_enabled)

### `entity:sharing_tile()`

Returns true if other entities can stand on this tile.

### `entity:enable_sharing_tile(share?)`

Allows other entities to stand on tiles reserved by this entity.

### `entity:ignoring_negative_tile_effects()`

Returns true if negative tile effects should be ignored for this entity.

Affects only movement and idle effects, such as Cracked tiles converting to Broken or damage from Poison tiles.
Does not affect tile interactions with attacks, such as freezing on Ice tiles when hit with an Aqua attack.

### `entity:ignore_negative_tile_effects(enabled)`

The entity will ignore negative tile effects when active.

Automatically set for [Spells](/client/lua-api/entity-api/spell) and [Artifacts](/client/lua-api/entity-api/artifact).

### `entity:ignoring_hole_tiles()`

Returns true if the entity should be able to walk on Broken and PermaHole tiles.

### `entity:ignore_hole_tiles(enabled)`

Allows the entity to walk on Broken and PermaHole tiles.

Automatically set for [Spells](/client/lua-api/entity-api/spell) and [Artifacts](/client/lua-api/entity-api/artifact).

### `entity:movement_offset()`

Returns `{ x: number, y: number }`.

This table represents the temporary offset applied to the entity by movement.

### `entity:set_movement_offset(x, y)`

Overwrites the frame temporary movement offset.

### `entity:offset()`

Returns `{ x: number, y: number }`

Same as `entity:sprite():offset()`

### `entity:set_offset(x, y)`

Same as `entity:sprite():set_offset(x, y)`

### `entity:elevation()`

Returns the elevation of the entity.

### `entity:set_elevation(elevation)`

Vertical offset for the entity. When the elevation changes the sprite moves, but health will stay in the same position.

Positive elevation moves the entity upwards.

### `entity:height()`

Returns the height of the entity, used to determine the range where hit artifacts should appear.

### `entity:set_height(height)`

Sets the height of the entity.

### `entity:sprite()`

Returns a [Sprite](/client/lua-api/resource-api/sprite), can be used to modify the entity's appearance.

### `entity:texture()`

Returns a string.

Same as `entity:sprite():texture()`

### `entity:set_texture(path)`

Same as `entity:sprite():set_texture(path)`

### `entity:palette()`

Returns a string or `nil`

Same as `entity:sprite():palette()`

### `entity:set_palette(path)`

Same as `entity:sprite():set_palette(path)`

### `entity:hide()`

Same as `entity:sprite():hide()`

### `entity:reveal()`

Same as `entity:sprite():reveal()`

### `entity:color()`

Returns [Color](/client/lua-api/resource-api/sprite#color)

Same as `entity:sprite():color()`

### `entity:set_color(color)`

Same as `entity:sprite():set_color(color)`

### `entity:never_flip()`

Returns a boolean.

Same as `entity:sprite():never_flip()`

### `entity:set_never_flip(never_flip?)`

Same as `entity:sprite():set_never_flip(never_flip)`

### `entity:create_node()`

Returns a [Sprite](/client/lua-api/resource-api/sprite)

Same as `entity:sprite():create_node()`

### `entity:create_sync_node()`

Returns a [SyncNode](/client/lua-api/resource-api/sprite#syncnode).

### `entity:remove_sync_node(sync_node)`

Removes the sync node from the entity.

### `entity:set_shadow(path)`

Sets the texture for the shadow. Shadows are not visible by default, use `entity:show_shadow()` to make the shadow visible.

Use values returned from [Resources.load_texture()](/client/lua-api/resource-api/resources#resourcesload_texturepath) for better performance.

There are built-in shadow textures that can be used as well:

- `Shadow.None`
- `Shadow.Small`
- `Shadow.Big`

### `entity:show_shadow(visible?)`

Sets whether the shadow is visible or not.

### `entity:animation()`

Returns an [Animation](/client/lua-api/resource-api/animation), can be used to modify the entity's animation data.

### `entity:load_animation(path)`

Same as `entity:animation():load(path)`

### `entity:create_component(lifetime)`

- `lifetime` affects when the component's update callback is called.

  - `Lifetime.Local` when the entity update callback is called (affected by time freeze and status effects)
  - `Lifetime.ActiveBattle` after every entity has updated and battle is active as long as time is not frozen.
  - `Lifetime.Battle` after every entity has updated and battle is active.
  - `Lifetime.Scene` near the end of every tick.
  - `Lifetime.CardSelectOpen` the frame where card select begins to open.
  - `Lifetime.CardSelectClose` the frame where card select begins to close.
  - `Lifetime.CardSelectComplete` the frame where all players have confirmed card select.
  - `Lifetime.Nil` never.

  Returns a [Component](#component)

### `entity:context()`

Returns a value that can be used to decide if an attack can counter an opponent, and to resolve the owner of an attack.

Countering an attack can be achieved by hitting an enemy with [HitProps](/client/lua-api/attack-api/hit-props) containing context obtained during [card_init](/client/packages#cards) or within [action.on_execute_func](/client/lua-api/attack-api/action#actionon_execute_func--functionself-owner)

Make sure to obtain context in card_init and not within a callback for countering.

### `entity:has_actions()`

Returns true if the entity has an executing action or pending actions.

### `entity:queue_action(action)`

- `action`: [Action](/client/lua-api/attack-api/action)

Note: During time freeze, Actions that freeze time skip to the front of the line.

### `entity:cancel_actions()`

Ends and deletes synchronous and pending actions.

### `entity:can_move_to(tile?)`

Returns true if the entity can move to the target tile.

### `entity:teleport(tile?, function()?)`

- `tile`: [Tile](/client/lua-api/field-api/tile), if unset nothing happens.
- callback is called when the movement begins processing

### `entity:slide(tile?, duration?, function()?)`

- `tile`: [Tile](/client/lua-api/field-api/tile), if unset nothing happens.
- `duration` is in game frames.
- callback is called when the movement begins processing

### `entity:jump(tile?, height, duration, function()?)`

- `tile`: [Tile](/client/lua-api/field-api/tile), if unset nothing happens.
- `height` how many pixels to offset the entity at the peak of the jump
- `duration` is in game frames.
- callback is called when the movement begins processing

### `entity:queue_movement(movement)`

- `movement`: [Movement](/client/lua-api/field-api/movement)

### `entity:cancel_movement()`

Cancels non-drag movement.

### `entity:is_moving()`

Returns true if the entity is moving.

### `entity:is_sliding()`

Returns true if the entity is sliding.

### `entity:is_jumping()`

Returns true if the entity is jumping.

### `entity:is_teleporting()`

Returns true if the entity is teleporting.

### `entity:is_dragged()`

Returns true if the entity's current movement was caused by drag.

This does return true during the drag lockout, use [living:is_immobile()](/client/lua-api/entity-api/living#livingis_immobile) to detect the immobility caused from lockout.

### `entity:set_idle()`

Calls [entity:on_idle_func()](#entityon_idle_func--functionself)

### `entity:deleted()`

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

Called when the entity is spawned by [field:spawn()](/client/lua-api/field-api/field/#fieldspawnentity-tile)

### `entity.on_update_func = function(self)`

Called during battle, when not frozen from time freeze or blocked by statuses.

### `entity.on_idle_func = function(self)`

Called when [Actions](/client/lua-api/attack-api/action) complete or when [entity:set_idle()](#entityset_idle) is called. For [Players](/client/lua-api/entity-api/player), it is additionally called when the movement animation ends.

### `entity.on_counter_func = function(self)`

Called when an attack using this entity's [context](/client/lua-api/attack-api/hit-props#attackcontext) counters another entity.

Not to be confused with [living.on_countered_func](/client/lua-api/entity-api/living#livingon_countered_func--functionself)

### `entity.on_delete_func = function(self)`

Called when health is 0 or `entity:delete()` is called. `entity:erase()` must be called to truly delete the entity.

This function is pre-set for all entities.

### `entity.on_battle_start_func = function(self)`

Called when battle starts for the first time, or when the entity is spawned if battle has already started.

### `entity.on_battle_end_func = function(self, won)`

Called when the battle has completed (win or loss).

### `entity.can_move_to_func = function(tile): boolean`

This function is predefined for all entities.

## Component

See [entity:create_component()](/client/lua-api/entity-api/entity#entitycreate_componentlifetime)

### `component:owner()`

Returns an [Entity](/client/lua-api/entity-api/entity)

### `component:eject()`

Removes the component from the owner.

### `component.on_init_func = function(self)`

Called when the entity is spawned, or immediately if the entity has already spawned.

### `component.on_update_func = function(self)`

Called when the lifetime is relevant.

See [entity:create_component()](/client/lua-api/entity-api/entity#entitycreate_componentlifetime)
