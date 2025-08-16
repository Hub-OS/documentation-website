# Character Animations

Common animation states used by the engine and card mods.

## Core

- `CHARACTER_IDLE`
  - Used by the engine for player mods as a default looping idle animation.
- `CHARACTER_HIT`
  - Used by status effects such as Flinch and Paralyze.
  - Flinch will use up to 22 game frames of the animation, with the animation file's specified timing.
    - If this animation state missing the effects of Flinch won't apply.
  - Status effects similar to Paralyze will use only the first frame of this animation.
    - If this animation state missing these effects will pause the entity's current animation.
- `CHARACTER_MOVE`
  - Used by the engine for animating player movement.
  - 4 animation frames, plays forward then reversed, timing is ignored.
- `CHARACTER_SHOOT`
  - Used by the engine for the player's default attack.
  - Requires a point labeled `BUSTER` for attaching a weapon.
  - 4 animation frames, timing is ignored.
- `BUSTER`
  - A weapon used by `CHARACTER_SHOOT` and attached to the `BUSTER` point.
  - Requires a point labeled `ENDPOINT` for particles.

## BattleNetwork Mods

- `CHARACTER_SWING_HAND`
  - Used by AirHock and more. See the [Sword Library](https://hubos.dev/mods/dev.konstinople.library.sword).
  - 4 animation frames, timing is ignored.
- `CHARACTER_SWING_HILT`
  - Used by sword and similar chips. See the [Sword Library](https://hubos.dev/mods/dev.konstinople.library.sword).
  - Requires a point labeled `ENDPOINT` for where the blade should start.
  - 4 animation frames, timing is ignored.
- `BLADE`
  - Optional, placed on `CHARACTER_SWING_HILT` and used by the [Sword Library](https://hubos.dev/mods/dev.konstinople.library.sword) to override basic blade sprites if it exists.
  - 4 animation frames, timing is ignored.
- `CHARACTER_THROW`
  - Used by bomb and chips. See the [Bomb Library](https://hubos.dev/mods/dev.konstinople.library.bomb)
  - Requires a point labeled `HAND` on the first two frames.
  - 5 animation frames, timing is ignored. May accept more frames in the future.
