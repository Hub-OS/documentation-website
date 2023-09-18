# CardProperties

### `CardProperties.new()`

Returns a new CardProperties table with default values.

### `CardProperties.from_package(package_id, code?)`

Returns a new CardProperties table using package information.

### `card_properties.package_id`

String, used for resolving to an [Action](/client/lua-api/attack-api/action).

### `card_properties.namespace`

Undefined type, used for resolving to an [Action](/client/lua-api/attack-api/action).

### `card_properties.short_name`

String, displayed during time freeze.

### `card_properties.damage`

Number, influences generated [HitProps](/client/lua-api/attack-api/hit-props).

Displayed during time freeze.

### `card_properties.recover`

Number, used by other mods for conditional behavior.

### `card_properties.code`

String, used by other mods for conditional behavior.

### `card_properties.element`

[Element](/client/lua-api/attack-api/hit-props#element), influences generated [HitProps](/client/lua-api/attack-api/hit-props)

### `card_properties.secondary_element`

[Element](/client/lua-api/attack-api/hit-props#element), influences generated [HitProps](/client/lua-api/attack-api/hit-props)

### `card_properties.card_class`

Any of the values below:

- `CardClass.Standard`
- `CardClass.Mega`
- `CardClass.Giga`
- `CardClass.Dark`

### `card_properties.hit_flags`

[Hit](/client/lua-api/attack-api/hit-props#hit_propsflags), influences generated [HitProps](/client/lua-api/attack-api/hit-props)

### `card_properties.can_boost`

Boolean or nil, used by other mods for conditional behavior.

### `card_properties.time_freeze`

Boolean or nil, enables time freeze for the [Action](/client/lua-api/attack-api/action).

### `card_properties.skip_time_freeze_intro`

Boolean or nil, used by [Actions](/client/lua-api/attack-api/action) to skip displaying the name of the attack and prevent time freeze countering.

### `card_properties.tags`

A list of strings, used by other mods for conditional behavior.
