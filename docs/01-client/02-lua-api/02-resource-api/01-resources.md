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

### `Resources.play_music(path, loops?)`

- `path`: file path relative to script file, use values returned from `Resources.load_audio()` for better performance.

Plays audio stored at `path` as music. Loops by default.

## AudioBehavior

### `AudioBehavior.Default`

Audio will play regardless of other audio.

### `AudioBehavior.NoOverlap`

Audio will not play if another instance of itself is playing with NoOverlap.
