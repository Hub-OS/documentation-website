# Action

While actions execute, their owners will stop auto reserving tiles.

[Players](/client/lua-api/entity-api/player), [Characters](/client/lua-api/entity-api/character), and [Obstacles](/client/lua-api/entity-api/obstacle) automatically reserve tiles outside of executing actions.

### `Action.new(entity, state)`

- `entity`: the [Entity](/client/lua-api/entity-api/entity) to tie the action to.
- `state`: string, the animation state to play when the action executes.

Returns a new Action.

### `Action.from_card(entity, card_properties)`

- `entity`: the [Entity](/client/lua-api/entity-api/entity) to tie the action to.
- `card_properties`: [CardProperties](/client/lua-api/attack-api/card-properties)

### `action:owner()`

Returns the [Entity](/client/lua-api/entity-api/entity) tied to this action

### `action:set_lockout(lockout)`

- `lockout`: [ActionLockout](#actionlockout)

### `action:create_step()`

Returns a new [Step](#step)

### `action:create_attachment(point_name)`

- `point_name`: string, name of a point in the animation to anchor the attachment to

Returns [Attachment](#attachment)

### `action:override_animation_frames(frame_data)`

See [animation:derive_state()](/client/lua-api/resource-api/animation#animationderive_statestate-frame_data)

### `action:add_anim_action(frame_index, callback)`

Same as calling `action:owner():on_frame(frame_index, callback)` within [action.on_execute_func](#actionon_execute_func--functionself_owner)

See [animation:on_frame()](/client/lua-api/resource-api/animation#animationon_frameframe_index-function-do_once)

### `action:end_action()`

Calls [action.on_end_func](#actionon_end_func--functionself)

Stops execution and deletes the action.

### `action:copy_card_properties()`

Returns a copy of the action's card properties.

Experimental. Replacement / removal is under consideration.

### `action:set_card_properties(card_properties)`

- `card_properties`: [CardProperties](/client/lua-api/attack-api/card-properties)

Sets the the action's card properties, will be overwritten when queued if the action is tied to a card.

Experimental. Replacement / removal is under consideration.

### `action.on_execute_func = function(self, owner)`

Called when the action begins execution.

### `action.on_update_func = function(self)`

Called while the action is executing.

### `action.on_animation_end_func = function(self)`

Called when the action's animation ends.

### `action.on_end_func = function(self)`

Called when the action ends execution.

### `action.can_move_to_func = function(tile)`

Override's the owner's [can_move_to_func](/client/lua-api/entity-api/entity/#entitycan_move_to_func--functionself-tile-boolean) while executing.

Ignored on async actions when the entity regains control.

## Attachment

### `attachment:create_attachment(point_name)`

- `point_name`: string, name of a point in this attachment's animation to anchor the new attachment to

Returns an Attachment

### `attachment:sprite()`

Returns a reference to the attachment's [Sprite](/client/lua-api/resource-api/sprite)

### `attachment:animation()`

Returns a reference to the attachment's [Animation](/client/lua-api/resource-api/animation)

## ActionLockout

Controls when Actions complete.

### `ActionLockout.new_animation()`

Returns ActionLockout.

Action completes when the animation ends.

### `ActionLockout.new_sequence()`

Returns ActionLockout.

Action completes when the action runs out of [Steps](#actioncreate_step) to execute

### `ActionLockout.new_async(duration)`

Returns ActionLockout.

When the animation ends, entities regain movement control. Attacks must wait for the duration to end.

## Step

### `step:complete_step()`

Marks the step as complete.

### `step.on_update_func = function(self)`

Called every tick while the associated action is active if this step is not marked as complete, and there are no steps created before this step that haven't been marked as complete.

## Buster

### `Buster.new(player, charged, damage)`

- `player`: [Player](/client/lua-api/entity-api/player)
- `charged`: bool, affects hit artifact
- `damage`: number

Returns a new [Action](#action)
