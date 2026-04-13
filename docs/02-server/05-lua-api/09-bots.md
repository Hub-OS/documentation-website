# Bots

See [Actors](/server/lua-api/actor-api)

### `Net.list_bots(area_id)`

Returns a list of `bot_id`s.

### `Net.is_bot(bot_id)`

Returns true if the id matches an existing bot.

### `Net.create_bot(bot_options)`

- `bot_options`: [Net.BotOptions](#netbotoptions)

Creates a bot.

Returns a `bot_id`

### `Net.remove_bot(bot_id, warp_out?)`

Deletes the bot and notifies clients in the same area.

## Net.BotOptions

```lua
---@class Net.BotOptions
---@field name? string
---@field area_id? string
---@field warp_in? boolean
---@field texture_path? string
---@field animation_path? string
---@field animation? string
---@field loop_animation? boolean
---@field x? number
---@field y? number
---@field z? number
---@field direction? string
---@field solid? boolean
```
