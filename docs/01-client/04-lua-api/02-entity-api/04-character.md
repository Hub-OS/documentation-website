# Character

Instance of [Entity](/client/lua-api/entity-api/entity). All [Living](/client/lua-api/entity-api/living) functions are available as well.

Character functions are accessible to all entities, but will throw if the entity is not a Character or [Player](/client/lua-api/entity-api/player).

### `Character.from(entity)`

Returns the entity passed in if the entity is a character or player, otherwise returns `nil`.

### `Character.from_package(package_id, team, rank)`

- `package_id`: string, the package id of the character
- `team`: [Team](/client/lua-api/entity-api/entity#entityset_teamteam)
- `rank`
  - `Rank.V1`
  - `Rank.V2`
  - `Rank.V3`
  - `Rank.V4`
  - `Rank.V5`
  - `Rank.SP`
  - `Rank.EX`
  - `Rank.Rare1`
  - `Rank.Rare2`
  - `Rank.NM`
  - `Rank.RV`
  - `Rank.DS`
  - `Rank.Alpha`
  - `Rank.Beta`
  - `Rank.Omega`
  - `Rank.Sigma`

Returns a new [Entity](/client/lua-api/entity-api/entity), throws if the package doesn't exist.

### `character:rank()`

Returns the character's rank.

### `character:field_cards()`

Returns a list of [CardProperties](/client/lua-api/attack-api/cards#cardproperties), the first card is the next card that can be used.

### `character:field_card(index)`

- `index`: number, 1 represents the next card that can be used.

Returns [CardProperties](/client/lua-api/attack-api/cards#cardproperties) or nil.

### `character:set_field_card(index, card_properties)`

- `index`: number, 1 represents the next card that can be used.
- `card_properties`: [CardProperties](/client/lua-api/attack-api/cards#cardproperties)

Changing package_id will cause [card_mutate()](/client/packages#cards) to restart or run again next frame.

If there's no card at this index, nothing happens.

### `character:remove_field_card(index)`

- `index`: number, 1 represents the next card that can be used.

### `character:insert_field_card(index, card_properties)`

- `index`: number, 1 represents the next card that can be used.
- `card_properties`: [CardProperties](/client/lua-api/attack-api/cards#cardproperties)

Inserts a card at this index, shifting cards at this position and after to the right.

Will cause [card_mutate()](/client/packages#cards) to restart or run again next frame.

### `character.intro_func = function(self): Action|nil`

Called at the start of the intro state (the state before card select first opens).

When unset or returning nil, the default intro for the character type will be used.

The returned action will not be immediately executed. When the action is completed, the next character's intro will begin or the intro state will end.
