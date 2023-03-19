# Objects

Positions and sizes are in tile space. To get the center of a tile add `0.5`

### `Net.list_objects(area_id)`

Returns a list of `object_id`s.

### `Net.get_object_by_id(area_id, object_id)`

Returns `{ id, name, class, type, visible, x, y, z, width, height, rotation, data, custom_properties }?`

### `Net.get_object_by_name(area_id, name)`

Returns `{ id, name, class, visible, x, y, z, width, height, rotation, data, custom_properties }?`

### `Net.create_object(area_id, { name?, type?, visible?, x?, y?, z?, width?, height?, rotation?, data, custom_properties? })`

Returns an `object_id`

### `Net.remove_object(area_id, object_id)`

Removes an object, clients will be updated at the end of the tick.

### `Net.set_object_name(area_id, object_id, name)`

Renames an object.

### `Net.set_object_class(area_id, object_id, class)`

Changes the object's class, clients will be updated at the end of the tick.

### `Net.set_object_type(area_id, object_id, type)`

Deprecated. Use set_object_class instead.

### `Net.set_object_custom_property(area_id, object_id, name, value)`

Modifies an object's custom property, clients will be updated at the end of the tick.

### `Net.resize_object(area_id, object_id, width, height)`

Resizes the object, clients will be updated at the end of the tick.

### `Net.set_object_rotation(area_id, object_id, rotation)`

`rotation` is in degrees, clients will be updated at the end of the tick.

### `Net.set_object_visibility(area_id, object_id, visibility)`

`visibility` is a bool, the object will be invisible if set to `false`. Clients will be updated at the end of the tick.

### `Net.move_object(area_id, object_id, x, y, layer)`

Moves the object, clients will be updated at the end of the tick.

### `Net.set_object_data(area_id, object_id, data)`

Allows for the type and shape of the object to be adjusted. Clients will be updated at the end of the tick.

```lua
-- possible values for data:
{
  type: "point" | "rect" | "ellipse"
}

{
  type: "polygon" | "polyline"
  points: { x, y }[],
}

{
  type: "tile",
  gid: number,
  flipped_horizontally: bool?,
  flipped_vertically: bool?,
  rotated?, -- always false
}
```
