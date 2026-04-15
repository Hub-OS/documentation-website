# Actors

The visible body for players and bots. Player and Bot IDs are usable as actor IDs.

Positions are in tile space. To get the center of a tile add `0.5`

### `Net.is_actor(actor_id)`

Returns true if the id matches an existing actor.

### `Net.get_actor_area(actor_id)`

Returns the `area_id` for the area the actor is currently in.

### `Net.get_actor_name(actor_id)`

Returns the name shown to players for the actor.

For player actors, this will default to "Nickname" in config.

### `Net.set_actor_name(actor_id, name)`

Sets the name shown to players for the actor.

### `Net.get_actor_direction(actor_id)`

Returns the facing direction of the actor.

### `Net.set_actor_direction(bot_id, direction)`

Sets the facing direction of the actor.

This is immediate for bots, delayed by a network round trip for player actors.

### `Net.get_actor_position(actor_id)`

Returns [Net.Position](/server/lua-api/misc#netposition)

### `Net.get_actor_position_multi(actor_id)`

Returns the actor's position using multi-values.

### `Net.move_actor(actor_id, x, y, z, direction?)`

Moves the actor, will play a warp animation on the clients if the actor is moving too fast.

This is immediate for bots, delayed by a network round trip for player actors.

### `Net.warp_actor(actor_id, x, y, z, direction?)`

If the actor belongs to a player, it will play a warp animation for the movement on that player's client, otherwise works identically to `Net.move_actor()`

This is immediate for bots, delayed by a network round trip for player actors.

### `Net.transfer_actor(player_id, area_id, warp_in?, x?, y?, z?, direction?)`

Sends the actor to a different area.

This is immediate for bots, delayed by a network round trip for player actors.

```lua
local x, y, z = Net.get_actor_position_multi(actor_id)
```

### `Net.set_actor_avatar(actor_id, texture_path, animation_path)`

Sets texture and animation files used to display the actor.

### `Net.set_actor_emote(actor_id, emote_id)`

Displays an emote above the actor. `emote_id` is the name of an animation state in the emotes animation.

An invalid `emote_id` will hide an existing emote.

### `Net.animate_actor(actor_id, state_name, loop?)`

Sets the animation state for the actor, the default states will be used if the actor moves.

### `Net.animate_actor_properties(actor_id, keyframes)`

- `keyframes`: [Net.ActorKeyframe[]](#netactorkeyframe)

Interpolated animations for fancy effects.

If a keyframe at duration 0 does not exist for a property, the client will default to initial values or a blank value. Ex: X/Y/Z will use the actor's current position, and "Sound Effect" would use blank / play no sounds.

If the position is not animated, the player can control their actor while the animations play.

The final state of the animation will stick to the actor, excluding sounds.

```lua
Net:on("tile_interaction", function(event)
  local position = Net.get_actor_position(event.player_id)

  -- a stretched jump. if the actor disappears, you may need to add a new tile layer
  local keyframes = {
    {
      properties = {
        { property = "Z",      value = position.z + 1, ease = "Out" },
        { property = "ScaleY", value = 1.5,            ease = "Out" }
      },
      duration = 0.5
    },
    {
      properties = {
        { property = "Z",      value = position.z, ease = "In" },
        { property = "ScaleY", value = 1,          ease = "In" }
      },
      duration = 0.5
    }
  }

  Net.animate_actor_properties(event.player_id, keyframes)
end)
```

If you need something to happen when the animation ends, you should use [Async.sleep()](/server/lua-api/async#asyncsleepseconds)

## Net.ActorKeyframe

```lua
---@class Net.ActorKeyframe
---@field properties Net.ActorPropertyKeyframe[]
---@field duration? number in seconds
```

Expanded:

```lua
keyframes: {
  properties: {
    property: "Animation" | "Animation Loop" | "Animation Speed" | "X" | "Y" | "Z" | "ScaleX" | "ScaleY" | "Rotation" | "Direction" | "Sound Effect" | "Sound Effect Loop",
    ease?: "Linear" | "In" | "Out" | "InOut" | "Floor" | "Ceil",
    value: number | string
  }[],
  duration: number
}[]
```

## Net.ActorPropertyKeyframe

```lua
---@class Net.ActorPropertyKeyframe
---@field property "Animation" | "Animation Loop" | "Animation Speed" | "X" | "Y" | "Z" | "ScaleX" | "ScaleY" | "Rotation" | "Direction" | "Sound Effect" | "Sound Effect Loop"
---@field ease? "Linear" | "In" | "Out" | "InOut" | "Floor" | "Ceil",
---@field value number | string
```
