# Action

While actions execute, their owners will stop auto reserving tiles.

[Players](/client/lua-api/player), [Characters](/client/lua-api/character), and [Obstacles](/client/lua-api/obstacle) automatically reserve tiles outside of executing actions.

### `Action.new(entity, state)`

- `entity`: the [Entity](/client/lua-api/entity) to tie the action to.
- `state`: string, the animation state to play when the action executes.

### `Action.from_card(entity, card_properties)`

- `entity`: the [Entity](/client/lua-api/entity) to tie the action to.
- `card_properties`: [CardProperties](#cardproperties)

### `action:owner()`

Returns the [Entity](/client/lua-api/entity) tied to this action

### `action:set_lockout(lockout)`

- `lockout`
  - `make_animation_lockout()`
    - Action completes when the animation ends.
  - `make_sequence_lockout()`
    - Action completes when the action runs out of [Steps](#actioncreate_step) to execute
  - `make_async_lockout(duration)`
    - When the animation ends, entities regain movement control. Attacks must wait for the duration to end.

### `action:create_attachment(point_name)`

- `point_name`: string, name of a point in the animation to anchor the attachment to

Returns [Attachment](#attachment)

### `action:override_animation_frames(frame_data)`

See [animation:derive_state()](/client/lua-api/animation#animationderive_statestate-frame_data)

### `action:add_anim_action(frame_index, callback)`

Same as calling `action:owner():on_frame(frame_index, callback)` within [action.on_execute_func](#actionon_execute_func--functionself)

See [animation:on_frame()](/client/lua-api/animation#animationon_frameframe_index-function-do_once)

### `action:end_action()`

Calls [action.on_end_func](#actionon_end_func--functionself)

Stops execution and deletes the action.

### `action:copy_card_properties()`

Returns a copy of the action's card properties.

Experimental. Replacement / removal is under consideration.

### `action:set_card_properties(card_properties)`

- `card_properties`: [CardProperties](#cardproperties)

Sets the the action's card properties, will be overwritten when queued if the action is tied to a card.

Experimental. Replacement / removal is under consideration.

### `action.on_execute_func = function(self)`

Called when the action begins execution.

### `action.on_update_func = function(self)`

Called while the action is executing.

### `action.on_animation_end_func = function(self)`

Called when the action's animation ends.

### `action.on_end_func = function(self)`

Called when the action ends execution.

### `action.can_move_to_func = function(tile)`

Override's the owner's [can_move_to_func] while executing.

Ignored on async actions when the entity regains control.

## Attachment

### `attachment:create_attachment(point_name)`

- `point_name`: string, name of a point in this attachment's animation to anchor the new attachment to

Returns an Attachment

### `attachment:sprite()`

Returns a reference to the attachment's [Sprite](/client/lua-api/sprite)

### `attachment:animation()`

Returns a reference to the attachment's [Animation](/client/lua-api/animation)

## CardProperties

### `CardProperties.new()`

Returns a new CardProperties table with default values.

### `CardProperties.from_package(package_id, code?)`

Returns a new CardProperties table using package information.

### `card_properties.short_name`

Displayed during time freeze.

### `card_properties.damage`

Displayed during time freeze.

### `card_properties.code`

### `card_properties.element`

### `card_properties.secondary_element`

### `card_properties.card_class`

### `card_properties.hit_flags`

### `card_properties.can_boost`

### `card_properties.counterable`

### `card_properties.time_freeze`

Enables time freeze for the action.

### `card_properties.skip_time_freeze_intro`

### `card_properties.meta_classes`

## Buster

### `Buster.new(player, charged, damage)`

- `player`: [Player](/client/lua-api/player)
- `charged`: bool, affects hit artifact
- `damage`: number

Returns a new [Action](#action)
