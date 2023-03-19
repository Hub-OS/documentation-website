# Bots

Positions are in tile space. To get the center of a tile add `0.5`

### `Net.list_bots(area_id)`

Returns a list of `bot_id`s.

### `Net.create_bot(bot_id, { name?, area_id?, warp_in?, texture_path?, animation_path?, animation?, x?, y?, z?, direction?, solid? })`

Creates a bot using the id.

### `Net.create_bot({ name?, area_id?, warp_in?, texture_path?, animation_path?, animation?, x?, y?, z?, direction?, solid? })`

Creates a bot.

Returns a `bot_id`

### `Net.is_bot(bot_id)`

Returns true if the id matches an existing bot.

### `Net.remove_bot(bot_id, warp_out?)`

Deletes the bot and notifies clients in the same area.

### `Net.get_bot_area(bot_id)`

Returns the `area_id` for the area the bot is currently in.

### `Net.get_bot_name(bot_id)`

Returns the name shown to players for the bot.

### `Net.set_bot_name(bot_id, name)`

Sets the name shown to players for the bot.

### `Net.get_bot_direction(bot_id)`

Gets the facing direction of the bot.

### `Net.set_bot_direction(bot_id, direction)`

Sets the facing direction of the bot.

### `Net.get_bot_position(bot_id)`

Returns `{ x, y, z }`

### `Net.move_bot(bot_id, x, y, z)`

Sets the position of the bot, will play a warp animation on the clients if the bot is moving too fast.

### `Net.transfer_bot(bot_id, area_id, warp_in?, x?, y?, z?)`

Sets the area and position of the bot.

### `Net.set_bot_solid(bot_id, solid)`

Not implemented.

### `Net.set_bot_avatar(bot_id, texture_path, animation_path)`

Sets texture and animation files used to display the bot.

### `Net.set_bot_emote(bot_id, emote_id, use_custom_emotes?)`

Displays an emote above the bot. `emote_id` is a number.

Subject to change.

### `Net.animate_bot(bot_id, state_name, loop?)`

Sets the animation state for the bot, the default states will be used if the bot moves.

### `Net.animate_bot_properties(bot_id, keyframes)`

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

Interpolated animation for fancy effects.

If a keyframe at duration 0 does not exist for a property, the client will default to initial values or a blank value. Ex: X/Y/Z will use the bot's current position, and "Sound Effect" would use blank / play no sounds.

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

If you need something to happen when the animation ends, you should use [Async.sleep()](</docs/server/lua-api/async#Async.sleep(seconds)>)
