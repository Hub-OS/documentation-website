# Misc

Extra utilities for scripting.

### `Net.encode_uri_component(text)`

Encodes characters for use in a URI or within file names.

Alphanumeric characters, spaces, dashes, and underscores will be unmodified. Periods will also remain, unless the period is the first character in the text.

Returns a string.

### `Net.decode_uri_component(text)`

Decodes a string encoded for use in a URI.

Returns a string.

### `Net.system_random()`

Returns a number, specifically a cryptographically secure 64 bit random integer using the system's random number generator.

## Net.Position

```lua
---@class Net.Position
---@field x number
---@field y number
---@field z number
```
