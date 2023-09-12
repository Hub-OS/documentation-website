# Player

Instance of [Entity](/client/lua-api/entity-api/entity). All [Living](/client/lua-api/entity-api/living) and [Character](/client/lua-api/entity-api/character) functions are available as well.

Player functions are accessible to all entities, but will throw if the entity is not a Player.

### `Player.from(entity)`

Returns the entity passed in if the entity is a player, otherwise returns `nil`.

### `player:emotions()`

Returns a list of valid values for `player:set_emotion()`.

### `player:emotion()`

Returns the name of the current emotion animation state.

### `player:set_emotion(state)`

Sets the current animation state for the player's emotion.

If the state doesn't exist, this does nothing.

### `player:input_has(input_query)`

- `input_query`
  - `Input.Held.*`
  - `Input.Pressed.*`
    - `Left`
    - `Right`
    - `Down`
    - `Use`
    - `Special`
    - `Shoot`
    - `FaceLeft`
    - `FaceRight`
    - `LeftShoulder`
    - `RightShoulder`
    - `EndTurn`
    - `Ready`

Returns true if `input_query` matches the player's current input state.

### `player:set_fully_charged_color(color)`

- `color`: [Color](/client/lua-api/resource-api/sprite#color)

Sets the color of the fully charged sprite.

### `player:set_charge_position(x, y)`

Sets the offset of the fully charged sprite.

### `player:slide_when_moving(bool?)`

When `true`, the player will slide to tiles and continue using the `PLAYER_IDLE` state.

When `false`, the player will teleport to tiles and animate with the `PLAYER_MOVE` state.

### `player:create_form()`

Returns a new [PlayerForm](#playerform).

Can be used up to five times before throwing.

### `player:get_augment(package_id)`

Returns an [Augment](#augment) or `nil` if the player doesn't have an augment with that `package_id`.

### `player:augments()`

Returns a list of [Augments](#augment)

### `player:boost_augment(package_id, level_increment)`

If the level before boosting is 0, the [Augment](#augment) is initialized.

If the level after boosting is 0, the Augment's delete callback is called and the Augment is removed.

### `player:boost_max_health(health)`

- `health`: integer

Adds the `health` value to the max health.

If it is the player's health is greater than the new max health it will be reduced to the new max health.

### `player:hand_size()`

Returns the max amount of cards the player can view from the deck accounting for boosts.

### `player:boost_hand_size(size)`

- `size`: integer

Adds the `size` value to the `hand_size` or the amount of cards the player can view from the deck.

### `player:attack_level()`

Returns the player's total attack level, a combination of `boost_attack_level` and [Augment](#augment) boosts.

### `player:boost_attack_level(increment)`

- `increment`: integer

Adds the `increment` value to the attack level. The attack level can only be boosted by five through this method.

### `player:rapid_level()`

Returns the player's total rapid level, a combination `boost_rapid_level` and [Augment](#augment) boosts.

### `player:boost_rapid_level(increment)`

- `increment`: integer

Adds the `increment` value to the rapid level. The rapid level can only be boosted by five through this method.

### `player:charge_level()`

Returns the player's total charge level, a combination `boost_charge_level` and [Augment](#augment) boosts.

### `player:boost_charge_level(increment)`

- `increment`: integer

Adds the `increment` value to the charge level. The charge level can only be boosted by five through this method.

### `player:calculate_default_charge_time()`

Returns the amount of time in game frames, the `Shoot` button would need to be held for a fully charged attack if the [player.calculate_charge_time](#playercalculate_charge_time) function was not set.

### `player:calculate_charge_time()`

Returns the amount of time in game frames, the `Shoot` button should be held for a fully charged attack.

### `player.calculate_charge_time_func = function(self)`

Should return the amount of time in game frames, the `Shoot` button should be held for a fully charged attack.

### `player.normal_attack_func = function(self)`

Should return an [Action](/client/lua-api/attack-api/action)

Many player mods use [Buster](/client/lua-api/attack-api/action#buster) for their return value.

```lua
player.normal_attack_func = function(self)
  return Buster.new(self, false, player:attack_level())
end
```

### `player.charged_attack_func = function(self)`

Should return an [Action](/client/lua-api/attack-api/action)

Many player mods use [Buster](/client/lua-api/attack-api/action#buster) for their return value.

```lua
player.charged_attack_func = function(self)
  return Buster.new(self, true, player:attack_level() * 10)
end
```

### `player.special_attack_func = function(self)`

Should return an [Action](/client/lua-api/attack-api/action)

### `player.can_charge_card_func = function(card_properties)`

Will not be called if there's no matching `charged_card_func`

Return true if `charged_card_func` should be called to handle this card.

### `player.charged_card_func = function(self, card_properties)`

Will not be called if there's no matching `can_charge_card_func`

An [Action](/client/lua-api/attack-api/action) or `nil` is expected as a return value.

## PlayerForm

Created through [player:create_form()](#playercreate_form)

### `player_form:set_mugshot_texture_path(path)`

- `path`: file path relative to script file, use values returned from `Resources.load_texture()` for better performance.

This texture is used for the form selection menu.

### `player_form.on_activate_func = function(self, player)`

Called when the form is activated, the player's appearance should be modified here.

### `player_form.on_deactivate_func = function(self, player)`

Called when the form is deactivated, the player's appearance should be reverted here.

### `player_form.on_update_func = function(self, player)`

Called after [player.on_update_func](#playernormal_attack_func--functionself) when this form is active.

### `player_form.calculate_charge_time_func = function(self, player)`

Overrides [player.calculate_charge_time_func](#playercalculate_charge_time_func--functionself) when this form is active.

A numer representing the minimum Shoot button held time in game frames is expected as a return value.

### `player_form.normal_attack_func = function(self, player)`

Overrides [player.normal_attack_func](#playernormal_attack_func--functionself) when this form is active.

An [Action](/client/lua-api/attack-api/action) is expected as a return value.

Return `nil` to fallback to the player's implementation.

### `player_form.charged_attack_func = function(self, player)`

Overrides [player.charged_attack_func](#playercharged_attack_func--functionself) when this form is active.

An [Action](/client/lua-api/attack-api/action) is expected as a return value.

Return `nil` to fallback to the player's implementation.

### `player_form.special_attack_func = function(self, player)`

Overrides [player.special_attack_func](#playerspecial_attack_func--functionself) when this form is active.

An [Action](/client/lua-api/attack-api/action) is expected as a return value.

Return `nil` to fallback to the player's implementation.

### `player_form.can_charge_card_func = function(card_properties)`

Will not be called if there's no matching `charged_card_func`

Return true if this form's `charged_card_func` should be called to handle this card.

### `player_form.charged_card_func = function(self, card_properties)`

Will not be called if there's no matching `can_charge_card_func`

An [Action](/client/lua-api/attack-api/action) or `nil` is expected as a return value.

## Augment

### `augment:id()`

Returns the package id of the augment.

### `augment:level()`

Returns an integer.

### `augment:owner()`

Returns an [Entity](/client/lua-api/entity-api/entity)

### `augment:has_tag(tag)`

- `tag`: string

Returns true if the augment has a matching tag.

### `augment.calculate_charge_time_func = function(self)`

Overrides [player.calculate_charge_time_func](#playercalculate_charge_time_func--functionself) also overrides the active form's override.

A numer representing the minimum Shoot button held time in game frames is expected as a return value.

### `augment.normal_attack_func = function(self)`

Overrides [player.normal_attack_func](#playernormal_attack_func--functionself) also overrides the active form's override.

An [Action](/client/lua-api/attack-api/action) is expected as a return value.

Return `nil` to fallback to the next implementation (augment, form, or player).

### `augment.charged_attack_func = function(self)`

Overrides [player.charged_attack_func](#playercharged_attack_func--functionself) also overrides the active form's override.

An [Action](/client/lua-api/attack-api/action) is expected as a return value.

Return `nil` to fallback to the next implementation (augment, form, or player).

### `augment.special_attack_func = function(self)`

Overrides [player.special_attack_func](#playerspecial_attack_func--functionself) also overrides the active form's override.

An [Action](/client/lua-api/attack-api/action) is expected as a return value.

Return `nil` to fallback to the next implementation (augment, form, or player).

### `augment.can_charge_card_func = function(card_properties)`

Will not be called if there's no matching `charged_card_func`

Return true if this augment's `charged_card_func` should be called to handle this card.

### `augment.charged_card_func = function(self, card_properties)`

Will not be called if there's no matching `can_charge_card_func`

An [Action](/client/lua-api/attack-api/action) or `nil` is expected as a return value.

### `augment.on_delete_func = function(self)`

Called when the player is deleted or when this augment's level is boosted to <= 0.
