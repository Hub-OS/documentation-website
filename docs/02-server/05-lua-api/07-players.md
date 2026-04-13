# Players

Positions are in tile space. To get the center of a tile add `0.5`

### `Net.list_players(area_id)`

Returns a list of `player_id`s.

### `Net.is_player(player_id)`

Returns true if the server is aware of a player with the provided id.

### `Net.get_player_ip(player_id)`

Returns the IP address of the player as a string. Useful for creating connection whitelists/blacklists.

If you want to track data use [Net.get_player_secret()](/server/lua-api/player-data#netget_player_secretplayer_id). Otherwise you'll have issues when multiple players live within the same house.

### `Net.get_player_mugshot(player_id)`

Returns [Net.TextureAnimationPair](/server/lua-api/widgets#nettextureanimationpair)

### `Net.get_player_avatar_name(player_id)`

Returns the name of the playable character used by the player.

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

### `Net.exclusive_actor_emote_for_player(player_id, emoter_id, emote_id)`

- `emoter_id`: a `bot_id` or `player_id`

Displays an emote exclusively to this player.

### `Net.enable_camera_controls(player_id, range_x?, range_y?)`

- `range_x`: number
- `range_y`: number

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

### `Net.is_player_movement_locked(player_id)`

Returns true if there's any locks on the player's movement.

Unaffected by input locks.

### `Net.lock_player_movement(player_id)`

Prevents the player from moving. Multiple locks can exist at a time.

### `Net.unlock_player_movement(player_id)`

Removes a lock on the player's movement.

### `Net.set_player_restrictions(player_id, path)`

- `path`: `string`
  - Server asset path to a toml file.

Expecting structure:

```toml
[augments]
blocks_enabled = true
drives_enabled = true

[deck]
# excluded properties will use these defaults
required_total = 30
mega_limit = 5
giga_limit = 1
dark_limit = 3

[packages]
# empty or excluded properties will allow all packages
hash_whitelist = ["hash_here", ...]
id_whitelist = ["package.id.here", ...]
id_blacklist = ["package.id.here", ...]
namespace_whitelist = ["LDR100.", "dev.konstinople.library."]
tag_whitelist = ["TAG", ...]
tag_blacklist = ["TAG", "OFFLINE_ONLY", ...]
```

### `Net.is_player_busy(player_id)`

Returns true if the player is in a server sent battle, or if a board, shop, or textbox is open.

### `Net.is_player_battling(player_id)`

Returns true if the player is in battle.

### `Net.initiate_encounter(player_id, package_path, encounter_data?)`

- `encounter_data`: anything that could be represented as JSON.
  - Read as second param in encounter_init for the encounter package

Returns an event emitter and a battle id.

```lua
local emitter, battle_id = Net.initiate_encounter(player_id, "/server/mods/my-encounter")
```

### `Net.initiate_pvp(player_1_id, player_2_id, package_path?, encounter_data?)`

- `encounter_data`: anything that could be represented as JSON.
  - Read as second param in encounter_init for the encounter package

Returns an event emitter and a battle id.

```lua
local emitter, battle_id = Net.initiate_pvp(player_a, player_b, "/server/mods/my-encounter")
```

### `Net.initiate_netplay(player_ids, package_path?, encounter_data?)`

- `encounter_data`: anything that could be represented as JSON.
  - Read as second param in encounter_init for the encounter package

Returns an event emitter and a battle id.

```lua
local emitter, battle_id = Net.initiate_netplay(player_ids, "/server/mods/my-encounter")
```

### `Net.send_battle_message(battle_id, encounter_data)`

Sends data to callbacks provided to [encounter:on_server_message()](/client/lua-api/field-api/encounter#encounteron_server_messagefunctiondata) in encounter mods sent to the client.

```lua
local emitter, battle_id = Net.initiate_encounter(player_ids, "/server/mods/my-encounter")

emitter:on("battle_message", function(event)
  -- read and respond to encounter:send_to_server() messages
  print(event.data)
  Net.send_battle_message(battle_id, "Pong!")
  Net.send_battle_message(battle_id, { a = "b" })
end)
```

### `Net.transfer_server(player_id, address, warp_out?, data?)`

- `data`: `string`
  - Readable in [player_request](/server/lua-api/events#player_request) on the remote server

### `Net.request_authorization(player_id, address, data?)`

- `data`: `string`
  - Readable in [authorization](/server/lua-api/events#authorization) on the remote server

### `Net.kick_player(player_id, reason, warp_out?)`
