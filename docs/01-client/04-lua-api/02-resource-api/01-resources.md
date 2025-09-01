# Resources

### `Resources.load_texture(path)`

- `path`: file path relative to script file

Caches the texture and returns a normalized path for faster access.

Returns a string.

Should be used in global scope for better performance.

### `Resources.load_audio(path)`

- `path`: file path relative to script file

Caches the audio and returns a normalized path for faster access.

Returns a string.

Should be used in global scope for better performance.

### `Resources.play_audio(path, audio_behavior?)`

- `path`: file path relative to script file, use values returned from `Resources.load_audio()` for better performance.
- `audio_behavior`: [AudioBehavior](#audiobehavior)

Plays a sound with the specified priority.

See [player:play_audio()](/client/lua-api/entity-api/player#playerplay_audiopath-audio_behavior) for playing audio to a specific player.

### `Resources.stop_music()`

Stops the currently playing music.

### `Resources.play_music(path, loops?)`

- `path`: file path relative to script file, use values returned from `Resources.load_audio()` for better performance.

Plays audio stored at `path` as music. Loops by default.

### `Resources.white_flash_color()`

Returns [Color](/client/lua-api/resource-api/sprite#color), tied to the Flash Brightness setting and seen as the color used for transitions to white.

Be careful when reading properties from the returned value, as settings will differ between players, and driving logic using these values can cause each client to desync.

### `Resources.is_local(player_index)`

Returns true if the index represents the local player.

### `Resources.local_index()`

Returns a number, represents the index of the local player in the list of players sent from the server.

### `Resources.input_has(player_index, input_query)`

Same as [player:input_has()](/client/lua-api/entity-api/player#playerinput_hasinput_query).

Allows for spectator input to be read.

## AudioBehavior

### `AudioBehavior.Default`

Audio will play regardless of other audio. Same as `AudioBehavior.Overlap`

### `AudioBehavior.Overlap`

Audio will play regardless of other audio.

### `AudioBehavior.NoOverlap`

Audio will not play if another instance of itself is playing with NoOverlap, Restart, or LoopSection.

### `AudioBehavior.Restart`

If this audio is already playing with NoOverlap or Restart, it will be restarted. Looping audio will not be restarted.

Plays the audio as normal if there is no other instance of itself.

### `AudioBehavior.LoopSection(start_sample, end_sample)`

Audio will play from the beginning (sample 0), looping back to `start_sample` when `end_sample` is reached.

Stops existing playback of the sound if it has `AudioBehavior.NoOverlap`.

Returns an AudioBehavior.

### `AudioBehavior.EndLoop`

The sound will continue playing if it was already playing. If AudioBehavior.LoopSection was applied, it will stop looping at `end_sample`
