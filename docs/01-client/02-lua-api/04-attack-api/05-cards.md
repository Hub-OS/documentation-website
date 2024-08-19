# Cards

## DeckCard

A card sitting in a [Player's](/client/lua-api/entity-api/player) deck.

### `deck_card.package_id`

String, passed to [CardProperties.from_package()](#cardpropertiesfrom_packagepackage_id-code).

### `deck_card.code`

String, passed to [CardProperties.from_package()](#cardpropertiesfrom_packagepackage_id-code).

## CardProperties

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

### `card_properties.status_durations`

A table that maps frame durations for status hit flags.

See [Hit.duration_for()](/client/lua-api/attack-api/hit-props#hitduration_forhit_flag-level)

### `card_properties.can_boost`

Boolean or nil, used by other mods for conditional behavior.

### `card_properties.can_charge`

Boolean or nil, used by other mods for conditional behavior.

### `card_properties.time_freeze`

Boolean or nil, enables time freeze for the [Action](/client/lua-api/attack-api/action).

### `card_properties.skip_time_freeze_intro`

Boolean or nil, used by [Actions](/client/lua-api/attack-api/action) to skip displaying the name of the attack and prevent time freeze countering.

Additionally the time freeze caused by this Action will not dim the screen.

### `card_properties.prevent_time_freeze_counter`

Boolean or nil, used to decide if a time freezing [Action](/client/lua-api/attack-api/action) can be countered.

### `card_properties.conceal`

Boolean or nil, hides damage and displays question marks when the card's name is displayed to opponents.

### `card_properties.tags`

A list of strings, used by other mods for conditional behavior.
