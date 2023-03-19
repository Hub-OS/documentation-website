# Player Data

Functions relevant to items, money, stats, and tracking data.

### `Net.get_player_secret(player_id)`

The secret identifier for this player, also known as `identity`. Similar to a password, do not share.

### `Net.get_player_element(player_id)`

Returns `"None" | "Fire" | "Aqua" | "Elec" | "Wood" | "Sword" | "Wind" | "Cursor" | "Summon" | "Plus" | "Break"`

### `Net.get_player_health(player_id)`

Returns the starting health for the next battle.

### `Net.set_player_health(player_id, health)`

Sets the starting health for the next battle.

### `Net.get_player_base_health(player_id)`

Returns the player's maximum health without augments.

### `Net.set_player_base_health(player_id, health)`

Sets the player's maximum health without augments.

### `Net.get_player_max_health(player_id)`

Returns the player's maximmum health with augments.

### `Net.get_player_emotion(player_id)`

Returns the emotion that will be applied at the start of the next battle.

### `Net.set_player_emotion(player_id, emotion)`

Sets the emotion applied at the start of the next battle.

### `Net.get_player_money(player_id)`

Returns the amount of money the player has.

### `Net.set_player_money(player_id, money)`

Sets the amount of money the player has.

### `Net.register_item(item_id, item_definition)`

- `item_definition`: `{ consumable?: bool, name: string, description: string }`

Registers an item definition to be shared with the client when the player obtains this item for the first time.

### `Net.get_item_name(item_id)`

Returns the name used in menus.

### `Net.get_item_description(item_id)`

Returns the description used in menus.

### `Net.get_player_items(player_id)`

Returns a list of unique item ids.

### `Net.give_player_item(player_id, item_id, count?)`

Gives the player items. `count` will default to 1.

### `Net.remove_player_item(player_id, item_id, count?)`

Removes items from the player. `count` will default to 1.

### `Net.get_player_item_count(player_id, item_id)`

Returns the amount of the item the player has.

### `Net.player_has_item(player_id, item_id)`

Returns true if the player has at least one of this item.
