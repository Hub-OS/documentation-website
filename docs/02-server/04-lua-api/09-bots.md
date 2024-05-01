# Bots

Positions are in tile space. To get the center of a tile add `0.5`

### `Net.list_bots(area_id)`

Returns a list of `bot_id`s.

### `Net.create_bot(bot_options)`

- `bot_options`: [Net.BotOptions](#netbotoptions)

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

Returns [Net.Position](/server/lua-api/misc#netposition)

### `Net.move_bot(bot_id, x, y, z)`

Sets the position of the bot, will play a warp animation on the clients if the bot is moving too fast.

### `Net.transfer_bot(bot_id, area_id, warp_in?, x?, y?, z?)`

Sets the area and position of the bot.

### `Net.set_bot_solid(bot_id, solid)`

Not implemented.

### `Net.set_bot_avatar(bot_id, texture_path, animation_path)`

Sets texture and animation files used to display the bot.

### `Net.set_bot_emote(bot_id, emote_id)`

Displays an emote above the bot. `emote_id` is the name of an animation state in the emotes animation.

An invalid `emote_id` will hide an existing emote.

### `Net.animate_bot(bot_id, state_name, loop?)`

Sets the animation state for the bot, the default states will be used if the bot moves.

## Net.BotOptions

```lua
---@class Net.BotOptions
---@field name? string
---@field area_id? string
---@field warp_in? boolean
---@field texture_path? string
---@field animation_path? string
---@field animation? string
---@field x? number
---@field y? number
---@field z? number
---@field direction? string
---@field solid? boolean
```
