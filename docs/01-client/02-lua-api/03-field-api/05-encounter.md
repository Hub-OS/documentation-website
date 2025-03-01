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

### `encounter:set_panels(texture_paths, animation_path, tile_width, tile_height)`

- `texture_paths`: a list of path strings, expects a path for `Team.Red`, `Team.Blue`, and `Team.Other`
- `animation_path`: an animation file used by tiles, applies to all team textures.
- `tile_width`: width used to resolve spacing.
- `tile_height`: height used to resolve spacing.

Experimental. Replacement / removal is under consideration.

### `encounter:set_field_size(width, height)`

Resizes the field, remember to add two to each dimension to account for the invisible edge tiles. If the field is larger than the screen allows, the camera will adjust placement and zoom to fit all [Characters](/client/lua-api/entity-api/character).

Resets tile teams and states on the field.

### `encounter:set_music(path)`

Sets the initial battle music. Use [Resources.play_music()](/client/lua-api/resource-api/resources#resourcesplay_musicpath-loops) to change the music in the middle of the battle

### `encounter:field()`

Returns [Field](/client/lua-api/field-api/field)

### `encounter:enable_automatic_turn_end(enabled?)`

- `enabled`: defaults to true.

Causes turns to end without needing the player to press the EndTurn button.

### `encounter:set_turn_limit(limit)`

- `limit`: max number of turns players can take.

If the `limit` is hit, the battle will end as a failure.

### `encounter:enable_flipping(enable?, player_index?)`

- `enable`: defaults to true.
- `player_index`: starts at 0, if unset applies to all players.

When enabled, players can flip using the FaceLeft and FaceRight buttons.

If this function is never called, it is automatically decided by checking for non team panels on the end row behind the player.

### `encounter:enable_boss_battle(enabled?)`

Affects the score in [battle_results](/server/lua-api/events#battle_results).

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
