# Player Data

Functions relevant to items, money, stats, and tracking data.

### `Net.get_player_secret(player_id)`

Returns the secret identifier for this player, also known as `identity`. Similar to a password, do not share.

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

Returns the player's maximum health with augments.

### `Net.get_player_emotion(player_id)`

Returns the emotion that will be applied at the start of the next battle.

### `Net.set_player_emotion(player_id, emotion)`

Sets the emotion applied at the start of the next battle.

### `Net.get_player_money(player_id)`

Returns the amount of money the player has.

### `Net.set_player_money(player_id, money)`

Sets the amount of money the player has.

### `Net.register_item(item_id, item_definition)`

- `item_definition`: [Net.ItemDefinition](#netitemdefinition)

Registers an item definition to be shared with the client when the player obtains this item for the first time.

The item's name should be at most 8 characters for best display.

### `Net.get_item_name(item_id)`

Returns the name used in menus.

### `Net.get_item_description(item_id)`

Returns the description used in menus.

### `Net.get_player_items(player_id)`

Returns a list of unique item ids.

### `Net.give_player_item(player_id, item_id, amount?)`

Gives the player items. `count` will default to 1.

Accepts negative amount.

### `Net.get_player_item_count(player_id, item_id)`

Returns the amount of the item the player has.

### `Net.player_has_item(player_id, item_id)`

Returns true if the player has at least one of this item.

### `Net.get_player_card_count(player_id, package_id, code)`

Returns the amount of matching cards the player owns.

### `Net.give_player_card(player_id, package_id, code, amount?)`

Adds cards to the player's pack.

Adding any card restricts usable cards to only given cards.

Accepts negative amount.

### `Net.get_player_block_count(player_id, package_id, color)`

Returns the amount of matching cards the player owns.

### `Net.give_player_block(player_id, package_id, color, amount?)`

Adds blocks to the player's pack.

Adding any block restricts usable blocks to only given blocks.

Accepts negative amount.

### `Net.player_character_enabled(player_id, package_id)`

Returns true if the player can use the playable character's abilities.

### `Net.enable_player_character(player_id, package_id)`

Allows the player to use the playable character's abilities.

Enabling any playable character locks the player out of using abilities on non enabled playable characters.

## Net.ItemDefinition

```lua
---@class Net.ItemDefinition
---@field name string
---@field description string
---@field consumable boolean?
```
