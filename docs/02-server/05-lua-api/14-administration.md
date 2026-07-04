# Administration

Command processing and server lifecycle.

### `Net.shutdown()`

Stops the server.

### `Net.print_to(player_id?, any)`

Logs a message to the specified user, or the console if nil.

### `Net.warn_to(player_id?, any)`

Logs a warning to the specified user, or the console if nil.

### `Net.error_to(player_id?, any)`

Logs an error to the specified user, or the console if nil.

### `Net.register_command(name, command_info)`

Registers a command. The command can be processed through the `command` server event.

### `Net.list_commands()`

Returns a list of all registered command names.

### `Net.get_command_description(name)`

Returns a string or nil, for the description of the command created through [Net.register_command()](#netregister_commandname-command_info)

## Net.CommandInfo

```lua
---@class Net.CommandInfo
---@field description string
```
