# Async

If you want to use IO while players are connected, you'll want to use the Async API to prevent server hiccups.
Note: paths in this section use system paths and not asset paths.

## Promises

A promise is a table stand-in for an eventual value. It has an `and_then` function, which accepts a callback that will eventually be called with the promised value or nil on failure. Most async functions will return a promise.

```lua
promise.and_then(function(value)
  print(value)
end)
```

### `Async.create_promise<T>(function(resolve))`

Returns a promise from a callback. A resolve function is passed to this callback, which calls functions passed to `and_then`

This promise supports late calls to `and_then`

```lua
local promise = Async.create_promise(function(resolve)
  resolve(1, 2, 3)
end)

promise.and_then(print) -- outputs "1 2 3"
```

### `Async.await(promise)`

Can only be used within an async scope or coroutine.

Waits for a promise by providing a function to and_then and yielding until the function is called.

Returns the value passed by and_then

### `Async.await(async_iterator)`

Returns an iterator from an async iterator (an iterator which returns promises).

Can only be used within a coroutine. Use `Async.promisify()` to let the server handle resuming the coroutine.

```lua
-- example with Async.await(async_iterator)
local shop_items = {
  { name = "a", price = 0 },
  { name = "b", price = 0 }
}

Net:on("player_join", Async.create_function(function(event)
  local emitter = Net.open_shop(event.player_id, )

  -- events are automatically awaited
  for event in Async.await(emitter:async_iter("shop_purchase")) do
    print(event)
  end
end))
```

```lua
-- example without Async.await(async_iterator)
local shop_items = {
  { name = "a", price = 0 },
  { name = "b", price = 0 }
}

Net:on("player_join", Async.create_function(function(event)
  local emitter = Net.open_shop(event.player_id)

  for promise in emitter:async_iter("shop_purchase") do
    -- each event must be awaited individually
    local event = Async.await(promise)
    print(event)
  end
end))
```

### `Async.await_all(promises)`

Can only be used within an async scope or coroutine.

Takes a list of promises and returns a list of values.

### `Async.create_scope<T>(function(): T)`

Returns a promise, resolves to the return value.

```lua
local promise = Async.create_scope(function()
  Async.await(Async.sleep(5))

  return "hi"
end)

promise.and_then(print) -- says "hi" after 5s
```

### `Async.create_function<T>(function(...): T|nil)`

Returns a function that returns a promise, which resolves to the return value.

```lua
local say_after = Async.create_function(function(message, delay)
  Async.await(Async.sleep(delay)))

  return message
end)

say_after("hello", 5).and_then(print) -- says "hello" after 5s
say_after("world", 10).and_then(print) -- says "world" after 10s
```

### `Async.request(url, request_options?)`

- `request_options`: [Net.RequestOptions](#netrequestoptions)

Returns a promise that resolves to `{ status, headers, body }?`

### `Async.download(path, url, request_options?)`

- `request_options`: [Net.RequestOptions](#netrequestoptions)

Downloads a file straight to disk.

Returns a promise that resolves to `true` if the file was successfully saved, or `false` if the operation failed.

### `Async.read_file(path)`

Returns a promise that resolves to a string representing the bytes stored in the file.

An empty string is returned if reading failed.

### `Async.write_file(path, content)`

Returns a promise that resolves to `true` if the file was successfully saved, or `false` if the operation failed.

### `Async.ensure_dir(path)`

Creates a directory at `path` if it does not already exist.

Returns a promise.

### `Async.poll_server(address)`

Returns a promise that resolves to `{}?`

### `Async.message_server(address, data)`

You will not know if this succeeds, the other server will need to reply. See [server_message](/server/lua-api/events#server_message).

### `Async.sleep(seconds)`

Returns a promise that resolves after the duration has passed.

### `Async.message_player(player_id, message, mug_texture_path?, mug_animation_path?)`

Returns a promise that resolves to `0` or `nil` for disconnected.

### `Async.message_player(player_id, message, textbox_options?)`

- `textbox_options`: [Net.TextboxOptions](/server/lua-api/widgets#nettextboxoptions)

Returns a promise that resolves to `0` or `nil` for disconnected.

### `Async.message_player_auto(player_id, message, close_delay, mug_texture_path?, mug_animation_path?)`

Returns a promise that resolves to `0` or `nil` for disconnected.

### `Async.message_player_auto(player_id, message, close_delay, textbox_options?)`

- `textbox_options`: [Net.TextboxOptions](/server/lua-api/widgets#nettextboxoptions)

Returns a promise that resolves to `0` or `nil` for disconnected.

### `Async.question_player(player_id, question, mug_texture_path?, mug_animation_path?)`

Returns a promise that resolves to `1` for yes, `0` for no, and `nil` for disconnected.

### `Async.question_player(player_id, question, textbox_options?)`

- `textbox_options`: [Net.TextboxOptions](/server/lua-api/widgets#nettextboxoptions)

Returns a promise that resolves to `1` for yes, `0` for no, and `nil` for disconnected.

### `Async.quiz_player(player_id, option_a?, option_b?, option_c?, mug_texture_path?, mug_animation_path?)`

Returns a promise that resolves to 0-2 for option a-c, or `nil` for disconnected.

### `Async.quiz_player(player_id, option_a?, option_b?, option_c?, textbox_options?)`

- `textbox_options`: [Net.TextboxOptions](/server/lua-api/widgets#nettextboxoptions)

Returns a promise that resolves to 0-2 for option a-c, or `nil` for disconnected.

### `Async.prompt_player(player_id, character_limit?, default_text?)`

Returns a promise that resolves to `string`, or `nil` for disconnected.

### `Async.initiate_encounter(player_id, package_path, encounter_data?)`

- `encounter_data`: anything that could be represented as JSON.
  - Read as second param in encounter_init for the encounter package

Returns `Net.Promise<Net.BattleResults?>`

### `Async.initiate_pvp(player_1_id, player_2_id, package_path?, encounter_data?)`

- `encounter_data`: anything that could be represented as JSON.
  - Read as second param in encounter_init for the encounter package

Returns `Net.Promise<Net.BattleResults?>[]`

### `Async.initiate_netplay(player_ids, package_path?, encounter_data?)`

- `encounter_data`: anything that could be represented as JSON.
  - Read as second param in encounter_init for the encounter package

Returns `Net.Promise<Net.BattleResults?>[]`

## Net.BattleResults

```lua
---@class Net.BattleResults
---@field player_id Net.ActorId
---@field won boolean
---@field health number
---@field score number
---@field time number
---@field ran boolean
---@field emotion string
---@field turns number
---@field allies { name: string, health: number }[]
---@field enemies { name: string, health: number }[]
---@field neutral { name: string, health: number }[]
```

## Net.RequestOptions

```lua
---@class Net.RequestOptions
---@field method? string
---@field headers? table<string, string>
---@field body? string
```
