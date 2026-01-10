# Event Emitters

### `Net.EventEmitter.new()`

Returns [Net.EventEmitter](/server/lua-api/event-emitters)

### `emitter:emit(event_name, ...)`

Parameters after `event_name` are custom and passed to event listeners.

```lua
local emitter = Net.EventEmitter.new()

emitter:on("example_event", function(a, b)
  print(a .. b) -- will output `cd`
end)

emitter:emit("example_event", "c", "d")
```

### `emitter:on(event_name, function(...))`

Calls the provided function every time an event matching `event_name` is emitted.

### `emitter:once(event_name, function(...))`

Calls the provided function when an event matching `event_name` is emitted, then deletes the listener.

### `emitter:on_any(function(event_name, ...))`

Calls the provided function when any event is emitted. Useful for debugging.

```lua
local emitter = Net.EventEmitter.new()

emitter:on_any(function(...)
  print(...) -- will output `example_event c d`
end)

emitter:emit("example_event", "c", "d")
```

### `emitter:on_any_once(function(event_name, ...))`

Calls the provided function when any event is emitted, then deletes the listener.

### `emitter:remove_listener(event_name, callback)`

Removes the listener to prevent future calls from the emitter.
`callback` must be a reference to the same instance of the function.

```lua
local emitter = Net.EventEmitter.new()

local listener = function(a, b)
  print(a .. b)
end

emitter:on("example_event", listener)
emitter:emit("example_event", "c", "d")  -- will output `c d` from the listener

emitter:remove_listener("example_event", listener)
emitter:emit("example_event", "c", "d")  -- no output
```

### `emitter:remove_on_any_listener(callback)`

Removes the listener to prevent future calls from the emitter.
`callback` must be a reference to the same instance of the function.

```lua
local emitter = Net.EventEmitter.new()

local listener = function(...)
  print(...)
end

emitter:on_any(listener)
emitter:emit("example_event", "c", "d")  -- will output `example_name c d` from the listener

emitter:remove_on_any_listener(listener)
emitter:emit("example_event", "c", "d")  -- no output
```

### `emitter:async_iter(event_name)`

Returns an iterator that returns promises with the value set to `...` (Event custom parameters).

```lua
local emitter = Net.EventEmitter.new()

Async.create_scope(function()
  -- Async.await can transform async iterators into iterators that return values directly
  for a, b in Async.await(emitter:async_iter("example_event")) do
    print(a .. b) -- will output "cd"
  end
end)

emitter:emit("example_event", "c", "d")
emitter:destroy()
```

### `emitter:async_iter_all()`

Returns an iterator that returns promises with the value set to `event_name, ...`.

```lua
local emitter = Net.EventEmitter.new()

Async.create_scope(function()
  for event_name, a, b in Async.await(emitter:async_iter_all()) do
    print(event_name .. " " .. a .. b) -- will output "example_event cd"
  end
end)

emitter:emit("example_event", "c", "d")
emitter:destroy()
```

### `emitter:destroy()`

Allows async iterators to complete. Otherwise iterators will wait until the program ends.

```lua
local emitter = Net.EventEmitter.new()

Async.create_scope(function()
  for _ in Async.await(emitter:async_iter("example_event")) do
  end

  print("complete!") -- will only output "complete!" if emitter:destroy() is called
end)

emitter:emit("example_event", "c", "d")
emitter:destroy()
```
