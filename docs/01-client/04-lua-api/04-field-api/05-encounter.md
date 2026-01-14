# Encounter

### `encounter:create_spawner(package_id, rank)`

- `package_id`: string, the package id for a character package
- `rank`: [Rank](/client/lua-api/entity-api/character#characterfrom_packagepackage_id-team-rank)

Returns a [Spawner](#spawner)

### `encounter:player_count()`

Returns a number, the amount of players that will join the battle.

### `encounter:spawn_player(player_index, col, row)`

- `player_index`: number, starts at 0

Sets the spawn position for this player.

### `encounter:mark_spectator(player_index)`

- `player_index`: number, starts at 0

Marks the player as a spectator. Avoids creating an entity for this player (Mods from this player will still be loaded).

### `encounter:set_spectate_on_delete(bool?)`

Converts players to spectators when deleted.

### `encounter:set_background(texture_path, animation_path, vel_x?, vel_y?)`

- `vel_x`: if unset, uses the "VELOCITY" point on the first frame of the animation.
- `vel_y`: if unset, uses the "VELOCITY" point on the first frame of the animation.

### `encounter:set_music(path)`

Sets the initial battle music. Use [Resources.play_music()](/client/lua-api/resource-api/resources#resourcesplay_musicpath-loops) to change the music in the middle of the battle

### `encounter:set_field_size(width, height)`

Resizes the field, remember to add two to each dimension to account for the invisible edge tiles (The default field size is 8x5). If the field is larger than the screen allows, the camera will adjust placement and zoom to fit all [Characters](/client/lua-api/entity-api/character).

Resets tile teams and states on the field.

### `encounter:field()`

Deprecated. Use [Field](/client/lua-api/field-api/field) directly.

### `encounter:set_tile_state_resources(tile_state, texture_path, animation_path)`

Overrides visuals used to render tile states.

`TileState.Normal` and `TileState.PermalHole` are special base states, overriding visuals for these states may affect what is drawn for other states.

### `encounter:set_tile_size(width, height)`

Sets the size of tiles for resolving placement.

### `encounter:enable_automatic_turn_end(enabled?)`

- `enabled`: defaults to true.

Causes turns to end without needing the player to press the EndTurn button.

### `encounter:set_turn_limit(limit)`

- `limit`: max number of turns players can take.

If the `limit` is hit, the battle will end as a failure.

### `encounter:set_time_freeze_chain_limit(chain_limit)`

- `chain_limit`
  - `TimeFreezeChainLimit.OnePerTeam` the default, only the last time freeze action from each team will be used.
  - `TimeFreezeChainLimit.OnePerEntity` only the last time freeze action from each entity will be used.
  - `TimeFreezeChainLimit.Unlimited` every time freeze action in the chain will be used.

### `encounter:set_team_owner_limit(limit)`

How many entities can be owned by the team before old entities start deleting, 2 by default.

### `encounter:set_entity_owner_limit(limit)`

How many entities can be owned by an entity before old entities start deleting, 1 by default.

### `encounter:set_entities_share_ownership(share?)`

Decides whether the entity owner limit is shared between the team or is tied directly to the owner, true by default.

If the entity owner limit is 1, there can only be one entity owned by any member of the team when this is true, otherwise there can be one for each unique owner.

### `encounter:enable_flipping(enable?, player_index?)`

- `enable`: defaults to true.
- `player_index`: starts at 0, if unset applies to all players.

When enabled, players can flip using the FaceLeft and FaceRight buttons.

If this function is never called, it is automatically decided by checking for non team panels on the end row behind the player.

### `encounter:enable_boss_battle(enabled?)`

Affects the score in [battle_results](/server/lua-api/events#battle_results).

### `encounter:enable_scripted_scene_end()`

Disables the built-in battle result banner and prevents the scene from automatically ending.

### `encounter:enable_scripted_result()`

Disables the built-in win / loss detection.

### `encounter:win()`

Marks the battle as a win for [battle_results](/server/lua-api/events#battle_results).

Additionally [ends the battle](#encounteron_battle_endfunctionwon), does not end the scene.

### `encounter:lose()`

Marks the battle as a loss for [battle_results](/server/lua-api/events#battle_results).

Additionally [ends the battle](#encounteron_battle_endfunctionwon), does not end the scene.

### `encounter:end_scene()`

Signals the end of the scene, allowing the player to return to a server or previous menu.

Additionally [ends the battle](#encounteron_battle_endfunctionwon)

### `encounter:on_battle_end(function(won))`

Adds a listener for the battle end to handle results.

### `encounter:send_to_server(data)`

Sends a message to the server that initiated this battle, which can be accessed on the server in the [battle_message](/server/lua-api/events#battle_message) event.

### `encounter:on_server_message(function(data))`

Receives a message sent from the server by [Net.send_battle_message()](/server/lua-api/players#netsend_battle_messagebattle_id-encounter_data).

## Spawner

Spawns characters at the start of battle.

See [encounter:create_spawner()](#encountercreate_spawnerpackage_id-rank) for creating a spawner.

### `spawner:spawn_at(col, row)`

Spawns the character at this position.

The tile at this position decides facing direction and team.

Returns a [Mutator](#mutator)

## Mutator

Allows for modification of a spawned character. Usage is optional.

### `mutator:mutate(function(entity))`

- `entity`: [Entity](/client/lua-api/entity-api/entity)
