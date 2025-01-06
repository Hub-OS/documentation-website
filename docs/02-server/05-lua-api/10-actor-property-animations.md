# Actor Property Animations

Animations over actor properties. Players and bots are actors.

Inspired by CSS animations.

### `Net.animate_player_properties(player_id, keyframes)`

- `keyframes`: [Net.ActorKeyframe[]](#netactorkeyframe)

Interpolated animation for fancy effects.

If a keyframe at duration 0 does not exist for a property, the client will default to initial values or a blank value. Ex: X/Y/Z will use the actor's current position, and "Sound Effect" would use blank / play no sounds.

If the position is not animated, the player can control their actor while the animations play.

The final state of the animation will stick to the player, excluding sounds.

```lua
Net:on("tile_interaction", function(event)
  local position = Net.get_player_position(event.player_id)

  -- a stretched jump. if the player disappears, you may need to add a new tile layer
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

  Net.animate_player_properties(event.player_id, keyframes)
end)
```

If you need something to happen when the animation ends, you should use [Async.sleep()](/server/lua-api/async#asyncsleepseconds)

### `Net.animate_bot_properties(bot_id, keyframes)`

- `keyframes`: [Net.ActorKeyframe[]](#netactorkeyframe)

Interpolated animation for fancy effects.

If a keyframe at duration 0 does not exist for a property, the client will default to initial values or a blank value. Ex: X/Y/Z will use the actor's current position, and "Sound Effect" would use blank / play no sounds.

The final state of the animation will stick to the bot, excluding sounds.

```lua
local position = Net.get_bot_position(bot_id)

-- a stretched jump. if the bot disappears, you may need to add a new tile layer
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

Net.animate_bot_properties(bot_id, keyframes)
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
    property: "Animation" | "Animation Speed" | "X" | "Y" | "Z" | "ScaleX" | "ScaleY" | "Rotation" | "Direction" | "Sound Effect" | "Sound Effect Loop",
    ease?: "Linear" | "In" | "Out" | "InOut" | "Floor",
    value: number | string
  }[],
  duration: number
}[]
```

## Net.ActorPropertyKeyframe

```lua
---@class Net.ActorPropertyKeyframe
---@field property "Animation" | "Animation Speed" | "X" | "Y" | "Z" | "ScaleX" | "ScaleY" | "Rotation" | "Direction" | "Sound Effect" | "Sound Effect Loop"
---@field ease? "Linear" | "In" | "Out" | "InOut" | "Floor",
---@field value number | string
```
