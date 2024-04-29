# Objects

Positions and sizes are in tile space. To get the center of a tile add `0.5`

### `Net.list_objects(area_id)`

Returns a list of `object_id`s.

### `Net.get_object_by_id(area_id, object_id)`

Returns [TiledObject](#tiledobject) or `nil`

### `Net.get_object_by_name(area_id, name)`

Returns [TiledObject](#tiledobject) or `nil`

### `Net.create_object(area_id, object_options)`

- `object_options`: [TiledObjectOptions](#tiledobjectoptions)

Returns an `object_id`

### `Net.remove_object(area_id, object_id)`

Removes an object, clients will be updated at the end of the tick.

### `Net.set_object_name(area_id, object_id, name)`

Renames an object.

### `Net.set_object_class(area_id, object_id, class)`

Changes the object's class, clients will be updated at the end of the tick.

### `Net.set_object_type(area_id, object_id, type)`

Deprecated. Use set_object_class instead.

### `Net.set_object_custom_property(area_id, object_id, name, property_value)`

Modifies an object's custom property, clients will be updated at the end of the tick.

### `Net.resize_object(area_id, object_id, width, height)`

Resizes the object, clients will be updated at the end of the tick.

### `Net.set_object_rotation(area_id, object_id, rotation)`

`rotation` is in degrees, clients will be updated at the end of the tick.

### `Net.set_object_visibility(area_id, object_id, visibility)`

`visibility` is a bool, the object will be invisible if set to `false`. Clients will be updated at the end of the tick.

### `Net.move_object(area_id, object_id, x, y, layer)`

Moves the object, clients will be updated at the end of the tick.

### `Net.set_object_data(area_id, object_id, object_data)`

- `object_data`: [TiledObjectData](#tiledobjectdata)

Allows for the type and shape of the object to be adjusted. Clients will be updated at the end of the tick.

## TiledObjectOptions

```lua
---@class TiledObjectOptions
---@field id? number
---@field name? string
---@field class? string deprecated
---@field type? string
---@field visible? boolean
---@field x? number
---@field y? number
---@field z? number
---@field width? number
---@field height? number
---@field rotation? number
---@field data TiledObjectData
---@field custom_properties? TiledCustomProperties
```

## TiledObject

```lua
---@class TiledObject
---@field id number
---@field name string
---@field class string deprecated
---@field type string
---@field visible boolean
---@field x number
---@field y number
---@field z number
---@field width number
---@field height number
---@field rotation number
---@field data TiledObjectData
---@field custom_properties TiledCustomProperties
```

## TiledObjectData

```lua
---@alias TiledObjectData TiledBasicObjectData | TiledPolygonObjectData | TiledTileObjectData
```

## TiledBasicObjectData

```lua
---@class TiledBasicObjectData
---@field type "point" | "rect" | "ellipse"
```

## TiledPolygonObjectData

```lua
---@class TiledPolygonObjectData
---@field type "polygon" | "polyline"
---@field points { x: number, y: number }[],
```

## TiledTileObjectData

```lua
---@class TiledTileObjectData
---@field type "tile"
---@field gid number
---@field flipped_horizontally boolean
---@field flipped_vertically boolean
```

## TiledCustomProperties

```lua
---@alias TiledCustomProperties table<string, string>
```
