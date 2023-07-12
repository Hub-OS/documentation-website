# Players

Positions are in tile space. To get the center of a tile add `0.5`

### `Net.list_players(area_id)`

Returns a list of `player_id`s.

### `Net.is_player(player_id)`

Returns true if the server is aware of a player with the provided id.

### `Net.get_player_area(player_id)`

Returns the `area_id` for the area the player is currently in.

### `Net.get_player_ip(player_id)`

Returns the IP address of the player as a string. Useful for creating connection whitelists/blacklists.

If you want to track data use [Net.get_player_secret()](/server/lua-api/player-data#netget_player_secretplayer_id). Otherwise you'll have issues when multiple players live within the same house.

### `Net.get_player_name(player_id)`

Gets the name of the player. "Nickname" in config.

### `Net.set_player_name(player_id, name)`

Sets the name of the player for all players to see.

### `Net.get_player_direction(player_id)`

Gets the facing direction of the player.

### `Net.get_player_position(player_id)`

Returns `{ x, y, z }`

### `Net.get_player_mugshot(player_id)`

Returns `{ texture_path, animation_path }`

### `Net.get_player_avatar(player_id)`

Returns `{ texture_path, animation_path }`

### `Net.set_player_avatar(player_id, texture_path, animation_path)`

Sets the texture file and animation file used to display the player.

### `Net.get_player_avatar_name(player_id)`

Returns the name of the playable character used by the player.

### `Net.set_player_emote(player_id, emote_id, use_custom_emotes?)`

Displays an emote above the player. `emote_id` is a number.

Subject to change.

### `Net.exclusive_player_emote(player_id, emoter_id, emote_id, use_custom_emotes?)`

- `emoter_id`: a `bot_id` or `player_id`

Displays an emote exclusively to this player.

Subject to change.

### `Net.animate_player(player_id, state_name, loop?)`

Sets the animation state for the player, the default states will be used if the player moves.

### `Net.animate_player_properties(player_id, keyframes)`

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

If a keyframe at duration 0 does not exist for a property, the client will default to initial values or a blank value. Ex: X/Y/Z will use the player's current position, and "Sound Effect" would use blank / play no sounds.

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

If you need something to happen when the animation ends, you should use [Async.sleep()](</server/lua-api/async#Async.sleep(seconds)>)

### `Net.provide_asset_for_player(player_id, path)`

Allows for assets to be sent ahead of time to reduce apparent server hiccups.

### `Net.play_sound_for_player(player_id, path)`

Allows for assets to be sent ahead of time to reduce apparent server hiccups.

### `Net.exclude_object_for_player(player_id, object_id)`

Disables collisions, interactions, and hides the object for this player.

### `Net.include_object_for_player(player_id, object_id)`

Brings back functionality removed by `Net.exclude_object_for_player()` for this player.

### `Net.exclude_actor_for_player(player_id, actor_id)`

Disables collisions, interactions, and hides the actor for this player.

### `Net.include_actor_for_player(player_id, actor_id)`

Brings back functionality removed by `Net.exclude_actor_for_player()` for this player.

### `Net.enable_camera_controls(player_id, range_x?, range_y?) -- range is in pixels`

Not implemented. Subject to change.

### `Net.move_player_camera(player_id, x, y, z, holdTimeInSeconds?)`

Snaps the camera to a specific position.

Locks the camera.

### `Net.slide_player_camera(player_id, x, y, z, durationInSeconds)`

Slides the camera to a specific position.

Locks the camera.

### `Net.shake_player_camera(player_id, strength, durationInSeconds)`

Shakes the camera. Useful for impact (explosions, landing, earthquakes)

### `Net.fade_player_camera(player_id, color, durationInSeconds)`

- `color`: `{ r: 0-255, g: 0-255, b: 0-255, a?: 0-255 }`

### `Net.track_with_player_camera(player_id, actor_id)`

Changes which actor the camera follows. Initially this will be set to the player.

### `Net.unlock_player_camera(player_id)`

Unlocks the player's camera, allowing it to follow the tracked actor again.

### `Net.is_player_input_locked(player_id)`

Returns true if there's any locks on the player's input.

### `Net.lock_player_input(player_id)`

Prevents the player from moving, interacting, and opening menus. Multiple locks can exist at a time.

### `Net.unlock_player_input(player_id)`

Removes a lock on the player's input.

### `Net.teleport_player(player_id, warp, x, y, z, direction?)`

Teleports the player to a new position.

### `Net.offer_package(player_id, package_path)`

Gets permission from the player to permanently install a package on their client, allowing for the package to be used when disconnected and while on other servers.

If the player accepts, the package will be installed.

Not implemented.

### `Net.set_player_restrictions(player_id, path)`

- `path`: `string`
  - Server asset path to a toml file.

Expecting structure:

```toml
[deck]
# excluded properties will use these defaults
required_total = 30
mega_limit = 5
giga_limit = 1
dark_limit = 3

[packages]
# empty or excluded properties will allow all packages
blacklist = ["hash_here", ...]
whitelist = ["hash_here", ...]
```

### `Net.is_player_busy(player_id)`

Returns true if the player is in a server sent battle, or if a board, shop, or textbox is open.

### `Net.is_player_battling(player_id)`

Returns true if the player is in battle.

### `Net.initiate_encounter(player_id, package_path, data?)`

- `data`: anything that could be represented as JSON.
  - Read as second param in encounter_init for the encounter package

### `Net.initiate_pvp(player_1_id, player_2_id, package_path?, data?)`

- `data`: anything that could be represented as JSON.
  - Read as second param in encounter_init for the encounter package

### `Net.initiate_netplay(player_ids, package_path?, data?)`

- `data`: anything that could be represented as JSON.
  - Read as second param in encounter_init for the encounter package

### `Net.transfer_player(player_id, area_id, warp_in?, x?, y?, z?, direction?)`

Sends the player to a different area.

### `Net.transfer_server(player_id, address, warp_out?, data?)`

- `data`: `string`
  - Readable in [player_request](/server/lua-api/events#player_request) on the remote server

### `Net.request_authorization(player_id, address, data?)`

- `data`: `string`
  - Readable in [authorization](/server/lua-api/events#authorization) on the remote server

### `Net.kick_player(player_id, reason, warp_out?)`
