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

### `Net.get_asset_hash(server_path)`

Returns the asset's hash string.

### `Net.provide_asset_for_player(player_id, path)`

Allows for assets to be sent ahead of time to reduce apparent server hiccups.

Calling in response to `player_request` will cause cached files on the client to be ignored.

### `Net.provide_package_for_player(player_id, path)`

Similar to [Net.provide_asset_for_player](#netprovide_asset_for_playerplayer_id-path), but also loads the package on the client.

This does not "install" packages on the client. Use [Net.offer_package()](/server/lua-api/widgets#netoffer_packageplayer_id-package_path) or [Net.refer_package()](/server/lua-api/widgets#netrefer_packageplayer_id-package_id-refer_options) for that use case.

Calling in response to `player_request` will cause cached files on the client to be ignored.
