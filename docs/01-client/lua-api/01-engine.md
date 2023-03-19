# Engine

### `Engine.load_texture(path)`

- `path`: file path relative to script file

Caches the texture and returns a normalized path for faster access.

Should be used in global scope for better performance.

### `Engine.load_audio(path)`

- `path`: file path relative to script file

Caches the audio and returns a normalized path for faster access.

Should be used in global scope for better performance.

### `Engine.play_audio(path, audio_priority?)`

- `path`: file path relative to script file, use values returned from `Engine.load_audio()` for better performance.

Plays a sound with the specified priority.

### `Engine.stream_music(path, loops?, start_ms?, end_ms?)`

- `path`: file path relative to script file, use values returned from `Engine.load_audio()` for better performance.

Plays audio stored at `path` as music. Loops by default.

### `Engine.get_turn_gauge_value()`

Returns the turn gauge's progress as a value between 0 and 1.

### `Engine.get_turn_gauge_time()`

Returns the turn gauge's progress in elapsed frames.

### `Engine.get_turn_gauge_max_time()`

Returns the total elapsed frames required to end a turn.

### `Engine.set_turn_gauge_time(time)`

Sets the turn gauge's progress in elapsed frames.

### `Engine.set_turn_gauge_max_time(time)`

Sets the total elapsed frames required to end a turn.

### `Engine.reset_turn_gauge_max_time()`

Sets the total elapsed frames required to end a turn to the default (512).
