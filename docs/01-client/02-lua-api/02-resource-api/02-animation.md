# Animation

### `Animation.new(path?)`

Returns a new Animation instance.

### `animation:copy_from(animation)`

Copies states and settings from the passed animation. Progress is reset.

Internally calls `animation:apply()` unless the animation was created through `Animation.new()`

This function will call and clear interrupt callbacks.

### `animation:apply(sprite)`

Applies the current animation state to the sprite, updating the origin and bounds of the sprite.

### `animation:load(path)`

Loads new states, clears the old states.

Will attempt to retain settings and progress if the new animation has the same state as the active state.

If the animation has not completed and retaining state fails, this function will call and clear interrupt callbacks.

### `animation:update()`

Advances animation progress by 1f or ~0.1666s. Ignored if the animation is paused.

Internally calls `animation:apply()` unless the animation was created through `Animation.new()`

Automatically called unless the animation was created through `Animation.new()`

### `animation:sync_time(time)`

- `time`: number, represents game frames

Updates the animation as if it has only played for `time`. Using the same time will freeze the animation, decreasing time will reverse the animation.

### `animation:pause()`

Causes `animation:update()` calls (including automatic calls) to be ignored.

### `animation:resume()`

Unpauses the animation.

### `animation:completed()`

Returns true if the animation is complete.

### `animation:has_state(state)`

Returns true if the state exists.

### `animation:state()`

Returns the name of the active state.

### `animation:set_state(state, frame_data?)`

- `frame_data` a list of frame index and duration pairs.
  - When provided, the animation will remap frames and durations to match until the next `set_state` call.
  - Frame index starts at 1
  - Duration is in game frames (60 per second).

Changes the active state, resets animation progress and settings.

This function will call and clear interrupt callbacks.

Internally calls `animation:apply()` unless the animation was created through `Animation.new()`

```lua
-- modified example from the built-in buster.lua file

local frame_data = { { 1, 1 }, { 2, 2 }, { 3, 2 }, { 1, 1 } }

action:override_animation_frames(frame_data)

-- setup buster attachment
local buster_attachment = action:add_attachment("BUSTER")

local buster_sprite = buster_attachment:sprite()
buster_sprite:set_texture(user:texture())
buster_sprite:set_layer(-2)
buster_sprite:use_root_shader()

local buster_animation = buster_attachment:animation()
buster_animation:copy_from(user:animation())

-- relevant
buster_animation:set_state("BUSTER", frame_data)
```

### `animation:has_point(name)`

Returns true if the current animation frame has a point with this name.

### `animation:get_point(name)`

Returns `{ x: number, y: number }`.

### `animation:set_playback(playback)`

- `playback`:
  - `Playback.Once` stops when the animation is completed.
  - `Playback.Loop` restarts the animation when completed.
  - `Playback.Bounce` when the animation completes playing forward it will play again reversed and cycle.
  - `Playback.Reverse` same as `Playback.Once` but reversed.
    - Currently does not start the animation on the last frame.

```lua
animation:set_state("example")
animation:set_playback(Playback.Loop)
```

### `animation:on_complete(function())`

Adds a function to be called when the animation "completes".

Completion condition differs depending on playback:

- `Playback.Once` when the last frame completes.
- `Playback.Loop` when the last frame completes.
- `Playback.Bounce` when the first frame completes when reversed.
- `Playback.Reverse` when the first frame completes.

### `animation:on_interrupt(function())`

Adds a function to be called when the state changes.

### `animation:on_frame(frame_index, function(), do_once?)`

- `frame_index` starts at 1
- `do_once` when true, the callback is deleted.

Calls the callback when the frame changes during an update. If the `frame_index` is 1 and the state was just set, it will be called next update.
