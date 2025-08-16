# Debug Hotkeys

### Global

- `F3`: Displays a frame graph.

  - The horizontal white bar is the target time (~16ms), each vertical bar represents a frame's update + render time. If all vertical bars are at or below the horizontal white bar, the game is running at 60 FPS.

- `F3+N` Lists loaded namespaces.
- `F3+S`: Saves a recording of the previous battle.

### Battle

Inputs will be ignored by the battle while the `F3` key is held.

- `F3+V`: Lists Lua VMs sorted by memory usage in the console.
- `F3+I`: Displays player indices on Player entities.
