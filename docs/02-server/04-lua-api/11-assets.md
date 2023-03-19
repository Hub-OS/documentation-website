# Assets

### `Net.update_asset(server_path, content)`

- `content`: `string`

Modifies the asset in memory and updates any clients that have downloaded the previous version of this asset.

### `Net.remove_asset(server_path)`

Unloads the asset from the server, preventing the asset from being shared to clients.

### `Net.has_asset(server_path)`

Returns true if the asset exists.

### `Net.get_asset_type(server_path)`

Returns `"text" | "texture" | "audio" | "data"`

### `Net.get_asset_size(server_path)`

Returns the asset's size in bytes.

Note some assets are compressed when loaded by the server and may differ from the size on disk.
