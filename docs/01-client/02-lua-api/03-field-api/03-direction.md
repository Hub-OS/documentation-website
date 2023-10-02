# Direction

- `Direction.None`
- `Direction.Up`
- `Direction.Left`
- `Direction.Down`
- `Direction.Right`
- `Direction.UpLeft`
- `Direction.UpRight`
- `Direction.DownLeft`
- `Direction.DownRight`

### `Direction.flip_x(direction)`

Returns a direction flipped along the x axis.

```lua
assert(Direction.flip_x(Direction.Left) == Direction.Right)
assert(Direction.flip_x(Direction.UpLeft) == Direction.UpRight)
```

### `Direction.flip_y(direction)`

Returns a direction flipped along the y axis.

```lua
assert(Direction.flip_y(Direction.Up) == Direction.Down)
assert(Direction.flip_y(Direction.UpLeft) == Direction.DownLeft)
```

### `Direction.reverse(direction)`

Returns a direction flipped along the y axis.

```lua
assert(Direction.reverse(Direction.Left) == Direction.Right)
assert(Direction.reverse(Direction.UpLeft) == Direction.DownRight)
```

### `Direction.join(direction_a, direction_b)`

Joins two directions into a single direction.

Returns a direction.

```lua
assert(Direction.join(Direction.Up, Direction.Left) == Direction.UpLeft)
assert(Direction.join(Direction.UpLeft, Direction.Right) == Direction.Up)
assert(Direction.join(Direction.Left, Direction.Right) == Direction.None)
```

### `Direction.vector(direction)`

Returns `{ x: number, y: number }`.

```lua
local vector = Direction.vector(Direction.UpLeft)
assert(vector.x == -1 and vector.y == -1)
```

### `Direction.unit_vector(direction)`

Returns `{ x: number, y: number }`.

```lua
local vector = Direction.unit_vector(Direction.UpLeft)
print(vector.x) -- -0.707...
print(vector.y) -- -0.707...
```
