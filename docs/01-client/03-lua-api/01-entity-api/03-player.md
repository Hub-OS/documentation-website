# Player

Instance of [Entity](/client/lua-api/entity-api/entity). All [Living](/client/lua-api/entity-api/living) and [Character](/client/lua-api/entity-api/character) functions are available as well.

Player functions are accessible to all entities, but will throw if the entity is not a Player.

### `Player.from(entity)`

Returns the entity passed in if the entity is a player, otherwise returns `nil`.

### `player:is_local()`

Used for creating small private differences between players, such as playing a sound effect, hiding a sprite, or changing a sprites color.

Returns true if the player is the local player.

Warning: Can cause unintentional desyncs. Limit behavior driven by this.

Creating or deleting sprites, entities, and animations can cause non obvious unintentional desyncs. Of course those aren't the only ways to cause unintentional desyncs.

Even modifying a sprite's color can cause a desync if another script attempts to read the sprite's color to drive behavior.

### `player:player_index()`

Returns a number, represents the index of the player in the list of players sent from the server.

### `player:emotions()`

Returns a list of valid values for `player:set_emotion()`.

### `player:emotion()`

Returns the name of the current emotion animation state.

### `player:set_emotion(state)`

Sets the current animation state for the player's emotion.

If the state doesn't exist, this does nothing.

### `player:emotions_texture()`

Returns a string.

### `player:emotions_animation_path()`

Returns a string.

### `player:set_emotions_texture(path)`

- `path`: file path relative to script file, use values returned from `Resources.load_texture()` for better performance.

### `player:load_emotions_animation(path)`

- `path`: file path relative to script file, use values returned from `Resources.load_texture()` for better performance.

If the animation doesn't have a state matching the current emotion, it will reset the player's emotion to "DEFAULT"

### `player:input_has(input_query)`

- `input_query`
  - `Input.Held.*`
  - `Input.Pressed.*`
  - `Input.Pulsed.*`
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
    - `Confirm`
    - `Cancel`
    - `EndTurn`
    - `Ready`

Returns true if `input_query` matches the player's current input state.

### `player:play_audio(path, audio_behavior?)`

- `path`: file path relative to script file, use values returned from `Resources.load_audio()` for better performance.
- `audio_behavior`: [AudioBehavior](/client/lua-api/resource-api/resources#audiobehavior)

Plays an audio file to only this player.

See [Resources.play_audio()](/client/lua-api/resource-api/resources#resourcesplay_audiopath-audio_behavior) for playing audio for all players.

### `player:set_fully_charged_color(color)`

- `color`: [Color](/client/lua-api/resource-api/sprite#color)

Sets the color of the fully charged sprite.

### `player:set_charge_position(x, y)`

Sets the offset of the fully charged sprite.

### `player:slide_when_moving()`

Returns a bool.

### `player:movement_on_input()`

Returns true if holding movement buttons causes the player to move.

With no calls to `*:set_movement_on_input()`, the default is true.

### `player:set_movement_on_input(bool?)`

Configures whether holding movement buttons causes the player to move, when no other augments or forms are overriding this behavior.

### `player:set_slide_when_moving(bool?)`

When `true`, the player will slide to tiles and continue using the `CHARACTER_IDLE` state.

When `false`, the player will teleport to tiles and animate with the `CHARACTER_MOVE` state.

### `player:queue_default_player_movement(tile)`

- `tile`: [Tile](/client/lua-api/field-api/tile)

Queues a movement with the default internal logic.

### `player:queue_normal_attack()`

Queues an action from a [Form](#playerform), [Augment](#augment), or the base player mod.

### `player:queue_charged_attack()`

Queues an action from a [Form](#playerform), [Augment](#augment), or the base player mod.

### `player:queue_special_attack()`

Queues an action from a [Form](#playerform), [Augment](#augment), or the base player mod.

### `player:special_on_input()`

Returns true if pressing the Special button activates the special attack.

With no calls to `*:set_special_on_input()`, the default is true.

### `player:set_special_on_input(bool?)`

Configures whether the Special button should activate the special attack, when no other augments or forms are overriding this behavior.

### `player:has_regular_card()`

Returns a bool.

### `player:deck_cards()`

Returns a list of [DeckCard](/client/lua-api/attack-api/cards#deckcard).

### `player:deck_card(index)`

- `index`: number, 1 is the first card in the deck.

Returns [DeckCard](/client/lua-api/attack-api/cards#deckcard) or nil.

Creating CardProperties through this function rather than [player:deck_card_properties()](#playerdeck_card_propertiesindex) may cause desyncs when the mod is installed on multiple clients in battle.

### `player:deck_card_properties(index)`

- `index`: number, 1 is the first card in the deck.

Returns [CardProperties](/client/lua-api/attack-api/cards#cardproperties) or nil.

### `player:set_deck_card(index, deck_card)`

- `index`: number, 1 is the first card in the deck.
- `deck_card`: [DeckCard](/client/lua-api/attack-api/cards#deckcard)

If there's no card at this index, nothing happens.

### `player:remove_deck_card(index)`

- `index`: number, 1 is the first card in the deck.

Removes a card from the player's deck.

Any [StagedItem](#stageditem) referencing this card will be dropped.

### `player:insert_deck_card(index, deck_card)`

- `index`: number, 1 is the first card in the deck.
- `deck_card`: [DeckCard](/client/lua-api/attack-api/cards#deckcard)

Inserts a card into the player's deck.

### `player:staged_items_confirmed()`

Returns true if Card Select can close.

### `player:confirm_staged_items()`

Allows Card Select to close.

### `player:stage_card(card_properties, function()?)`

- `card_properties`: [CardProperties](/client/lua-api/attack-api/cards#cardproperties)
- The callback will be called when the player removes the StagedItem.

Appends a new [StagedItem](#stageditem) to display in Card Select.

### `player:stage_deck_card(deck_index, function()?)`

- `deck_index`: number, 1 is the first card in the deck.
- The callback will be called when the player removes the StagedItem.

Appends a new [StagedItem](#stageditem) to display in Card Select.

Any StagedItems already referencing `deck_index` will be removed.

### `player:stage_deck_discard(deck_index, function()?)`

- `deck_index`: number, 1 is the first card in the deck.
- The callback will be called when the player removes the StagedItem.

Appends a new [StagedItem](#stageditem) to display in Card Select.

Any StagedItems already referencing `deck_index` will be removed.

### `player:stage_form(form, texture_path?, function()?)`

- `form`: [PlayerForm](#playerform)
- `texture_path`: The texture to use for the icon.
- The callback will be called when the player removes the StagedItem.

Prepends a new [StagedItem](#stageditem) that will be displayed in card select if a texture is set. If a form is already staged this StagedItem will replace the existing item.

### `player:stage_icon(texture_path, function()?)`

- `texture_path`: The texture to use for the icon.
- The callback will be called when the player removes the StagedItem.

Appends a new [StagedItem](#stageditem) to display in Card Select.

### `player:pop_staged_item()`

Removes the latest [StagedItem](#stageditem), calling the undo callback.

### `player:staged_items()`

Returns a list of [StagedItem](#stageditem)

### `player:staged_item(index)`

- `index`: number, starts with 1.

Returns a [StagedItem](#stageditem) or `nil`.

### `player:staged_item_texture(index)`

- `index`: number, starts with 1.

Returns a string. Represents the path to the StagedItem's icon texture.

### `player:card_select_restriction()`

Returns `{ package_id?: string, code?: string }`. Cards must match any of the set fields.

### `player:set_card_selection_blocked(bool)`

Prevents selection in Card Select and hides the cursor.

### `player:set_fixed_card(card_properties, card_button_slot?)`

Dedicates a button slot in Card Select to the specified card. Internally defined as a [CardSelectButton](#cardselectbutton).

Returns [CardSelectButton](#cardselectbutton)

### `player:create_card_button(slot_count, card_button_slot?)`

Creates a button embedded in the end of the card list in Card Select.

Returns [CardSelectButton](#cardselectbutton)

### `player:create_special_button()`

Creates a button under the "Confirm" button in Card Select.

Returns [CardSelectButton](#cardselectbutton)

### `player:create_form()`

Returns a new [PlayerForm](#playerform).

Can be used up to five times before throwing.

### `player:create_hidden_form()`

Returns a new [PlayerForm](#playerform).

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

### `player:charges_with_shoot()`

Returns true if holding the Shoot button is tied to charging for [player.charged_attack_func](#playercharged_attack_func--functionself-actionnil)

With no calls to `*:set_charge_with_shoot()`, the default is true.

### `player:set_charge_with_shoot(bool?)`

Configures whether the Shoot button is tied to charging for [player.charged_attack_func](#playercharged_attack_func--functionself-actionnil), when no other augments or forms are overriding this behavior.

### `player:mark_charging(bool?)`

Marks the player as trying to charge an attack for [player.charged_attack_func](#playercharged_attack_func--functionself-actionnil)

Automatically resets to false when the value is used by the engine.

### `player:calculate_default_charge_time()`

Returns the amount of time in game frames, the `Shoot` button would need to be held for a fully charged attack if the [player.calculate_charge_time](#playercalculate_charge_time) function was not set.

### `player:calculate_charge_time()`

Returns the amount of time in game frames, the `Shoot` button should be held for a fully charged attack.

### `player.calculate_charge_time_func = function(self): number`

Should return the amount of time in game frames, the `Shoot` button should be held for a fully charged attack.

### `player.normal_attack_func = function(self): Action|nil`

Should return an [Action](/client/lua-api/attack-api/action)

Many player mods use [Buster](/client/lua-api/attack-api/action#buster) for their return value.

```lua
player.normal_attack_func = function(self)
  return Buster.new(self, false, player:attack_level())
end
```

### `player.charged_attack_func = function(self): Action|nil`

Should return an [Action](/client/lua-api/attack-api/action)

Many player mods use [Buster](/client/lua-api/attack-api/action#buster) for their return value.

```lua
player.charged_attack_func = function(self)
  return Buster.new(self, true, player:attack_level() * 10)
end
```

### `player.special_attack_func = function(self): Action|nil`

Should return an [Action](/client/lua-api/attack-api/action)

### `player.calculate_card_charge_time_func = function(self, card_properties): number|nil`

Will not be called if there's no matching `charged_card_func`

Return a number representing the minimum amount of time the card use button must be held for `charged_card_func` to be called to handle this card.

### `player.charged_card_func = function(self, card_properties): Action|nil`

Will not be called if there's no matching `calculate_card_charge_time_func`

An [Action](/client/lua-api/attack-api/action) or `nil` is expected as a return value.

### `player.movement_func = function(self, direction)`

Used to handle movement input, setting this overrides the default handling.

## PlayerForm

Created through [player:create_form()](#playercreate_form)

### `player_form:index()`

Returns a number. Used internally to identify the form.

### `player_form:set_mugshot_texture(path)`

- `path`: file path relative to script file, use values returned from `Resources.load_texture()` for better performance.

This texture is used for the form selection menu.

### `player_form:set_description(description?)`

Sets the description to display when the player requests for info.

### `player_form:set_fixed_card(card_properties, card_button_slot?)`

Dedicates a button slot in Card Select to the specified card. Internally defined as a [CardSelectButton](#cardselectbutton).
Overrides the card button created on the Player and any [Augment](#augment).

Returns [CardSelectButton](#cardselectbutton)

### `player_form:create_card_button(slot_count, card_button_slot?)`

Creates a button embedded in the end of the card list in Card Select.
Overrides card buttons created on the Player and any [Augment](#augment).

Returns [CardSelectButton](#cardselectbutton)

### `player_form:create_special_button()`

Creates a button under the "Confirm" button in Card Select.
Overrides the special button created on the Player and any [Augment](#augment).

Returns [CardSelectButton](#cardselectbutton)

### `player_form.on_select_func = function(self)`

Called when the form is selected or staged, the player's emotions should be modified here.

### `player_form.on_deselect_func = function(self)`

Called when the form is deselected or unstaged, the player's emotions should be reverted here.

### `player_form.on_activate_func = function(self)`

Called when the form is activated, the player's appearance should be modified here.

### `player_form.on_deactivate_func = function(self)`

Called when the form is deactivated, the player's appearance should be reverted here.

### `player_form.on_update_func = function(self)`

Called after [player.on_update_func](#playernormal_attack_func--functionself-actionnil) when this form is active.

### `player_form:set_charge_with_shoot(bool?)`

Configures whether the Shoot button is tied to charging for [player.charged_attack_func](#playercharged_attack_func--functionself-actionnil), when no other augments or forms are overriding this behavior.

When set to nil (default), the final value will try to fall back to a specified non-nil value with a lower priority or true.

### `player_form:set_special_on_input(bool?)`

Configures whether the Special button activate the special attack, when no other augments or forms are overriding this behavior.

When set to nil (default), the final value will try to fall back to a specified non-nil value with a lower priority or true.

### `player_form:set_movement_on_input(bool?)`

Configures whether holding movement buttons causes the player to move, when no other augments or forms are overriding this behavior.

When set to nil (default), the final value will try to fall back to a specified non-nil value with a lower priority or true.

### `player_form.calculate_charge_time_func = function(self): number`

Overrides [player.calculate_charge_time_func](#playercalculate_charge_time_func--functionself-number) when this form is active.
Also overrides any [Augment](#augment)'s override.

A number representing the minimum Shoot button held time in game frames is expected as a return value.

### `player_form.normal_attack_func = function(self): Action|nil`

Overrides [player.normal_attack_func](#playernormal_attack_func--functionself-actionnil) when this form is active.
Also overrides any [Augment](#augment)'s override.

An [Action](/client/lua-api/attack-api/action) is expected as a return value.

Return `nil` to fallback to the player's implementation.

### `player_form.charged_attack_func = function(self): Action|nil`

Overrides [player.charged_attack_func](#playercharged_attack_func--functionself-actionnil) when this form is active.
Also overrides any [Augment](#augment)'s override.

An [Action](/client/lua-api/attack-api/action) is expected as a return value.

Return `nil` to fallback to the player's implementation.

### `player_form.special_attack_func = function(self): Action|nil`

Overrides [player.special_attack_func](#playerspecial_attack_func--functionself-actionnil) when this form is active.
Also overrides any [Augment](#augment)'s override.

An [Action](/client/lua-api/attack-api/action) is expected as a return value.

Return `nil` to fallback to the player's implementation.

### `player_form.calculate_card_charge_time_func = function(self, card_properties): number|nil`

Will not be called if there's no matching `charged_card_func`

Return a number representing the minimum amount of time the card use button must be held for this form's `charged_card_func` to be called to handle this card.

### `player_form.charged_card_func = function(self, card_properties): Action|nil`

Will not be called if there's no matching `calculate_card_charge_time_func`

An [Action](/client/lua-api/attack-api/action) or `nil` is expected as a return value.

### `player_form.movement_func = function(self)`

Overrides [player.movement_func](#playermovement_func--functionself-direction) when this form is active.
Also overrides any [Augment](#augment)'s override.

Used to handle movement input.

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

### `augment:set_fixed_card(card_properties, card_button_slot?)`

Dedicates a button slot in Card Select to the specified card. Internally defined as a [CardSelectButton](#cardselectbutton).
Overrides the card button created on the Player.

Returns [CardSelectButton](#cardselectbutton)

### `augment:create_card_button(slot_count, card_button_slot?)`

Creates a button embedded in the end of the card list in Card Select.
Overrides card buttons created on the Player.

Returns [CardSelectButton](#cardselectbutton)

### `augment:create_special_button()`

Creates a button under the "Confirm" button in Card Select.
Overrides the special button created on the Player.

Returns [CardSelectButton](#cardselectbutton)

### `augment:set_charge_with_shoot(bool?)`

Configures whether the Shoot button is tied to charging for [player.charged_attack_func](#playercharged_attack_func--functionself-actionnil), when no other augments or forms are overriding this behavior.

When set to nil (default), the final value will try to fall back to a specified non-nil value with a lower priority or true.

### `augment:set_special_on_input(bool?)`

Configures whether the Special button activate the special attack, when no other augments or forms are overriding this behavior.

When set to nil (default), the final value will try to fall back to a specified non-nil value with a lower priority or true.

### `augment:set_movement_on_input(bool?)`

Configures whether holding movement buttons causes the player to move, when no other augments or forms are overriding this behavior.

When set to nil (default), the final value will try to fall back to a specified non-nil value with a lower priority or true.

### `augment.calculate_charge_time_func = function(self): number`

Overrides [player.calculate_charge_time_func](#playercalculate_charge_time_func--functionself-number)

A number representing the minimum Shoot button held time in game frames is expected as a return value.

### `augment.normal_attack_func = function(self): Action|nil`

Overrides [player.normal_attack_func](#playernormal_attack_func--functionself-actionnil)

An [Action](/client/lua-api/attack-api/action) is expected as a return value.

Return `nil` to fallback to the next implementation (augment, form, or player).

### `augment.charged_attack_func = function(self): Action|nil`

Overrides [player.charged_attack_func](#playercharged_attack_func--functionself-actionnil)

An [Action](/client/lua-api/attack-api/action) is expected as a return value.

Return `nil` to fallback to the next implementation (augment, form, or player).

### `augment.special_attack_func = function(self): Action|nil`

Overrides [player.special_attack_func](#playerspecial_attack_func--functionself-actionnil)

An [Action](/client/lua-api/attack-api/action) is expected as a return value.

Return `nil` to fallback to the next implementation (augment, form, or player).

### `augment.calculate_card_charge_time_func = function(self, card_properties): number|nil`

Will not be called if there's no matching `charged_card_func`

Return a number representing the minimum amount of time the card use button must be held for this augment's `charged_card_func` to be called to handle this card.

### `augment.charged_card_func = function(self, card_properties): Action|nil`

Will not be called if there's no matching `calculate_card_charge_time_func`

An [Action](/client/lua-api/attack-api/action) or `nil` is expected as a return value.

### `augment.movement_func = function(self, direction)`

Overrides [player.movement_func](#playermovement_func--functionself-direction).

Used to handle movement input.

### `augment.on_delete_func = function(self)`

Called when the player is deleted or when this augment's level is boosted to `<= 0`.

## CardSelectButton

### `button:sprite()`

Returns a [Sprite](/client/lua-api/resource-api/sprite)

### `button:texture()`

Returns a string.

Same as `button:sprite():texture()`

### `button:set_texture(path)`

Same as `button:sprite():set_texture(path)`

Use values returned from [Resources.load_texture()](/client/lua-api/resource-api/resources#resourcesload_texturepath) for better performance.

### `button:animation()`

Returns an [Animation](/client/lua-api/resource-api/animation)

### `button:preview_sprite()`

Returns a [Sprite](/client/lua-api/resource-api/sprite)

### `button:preview_texture()`

Returns a string.

Same as `button:preview_sprite():texture()`

### `button:set_preview_texture(path)`

Use values returned from [Resources.load_texture()](/client/lua-api/resource-api/resources#resourcesload_texturepath) for better performance.

Same as `button:preview_sprite():set_texture(path)`

### `button:preview_animation()`

Returns an [Animation](/client/lua-api/resource-api/animation)

### `button:use_card_preview(card_properties)`

Replaces the set preview sprite and animation with a preview generated by the `card_properties` parameter.

### `button:use_fixed_card_cursor(bool)`

Changes the cursor (when hovered) from a dynamic cursor based on button width to a fixed card cursor locked to the last card slot.

### `button:use_default_audio(bool)`

A method to disable successful button use audio.

### `button:set_description(description?)`

Sets the description to display when the player requests for info.

### `button:use_card_description(card_properties)`

Sets the button's description to match a specified card.

### `button:owner()`

Returns an [Entity](/client/lua-api/entity-api/entity)

### `button:delete()`

Deletes the button.

### `button:deleted()`

Returns true if the button was deleted.

### `button.on_selection_change_func = function(self)`

Called when any changes are made to [player:staged_items()](#playerstaged_items)

### `button.use_func = function(self): boolean`

Return true if the button's usage effect was successful. The result will affect the played sound.

## StagedItem

An item displayed as a pending selection in Card Select.

### `staged_item.category`

- `"deck_card"`
- `"deck_discard"`
- `"card"`
- `"form"`
- `"icon"`

### `staged_item.index`

A number for `"deck_card"`, `"deck_discard"`, and `"form"`

Otherwise `nil`

### `staged_item.card_properties`

[CardProperties](/client/lua-api/attack-api/cards#cardproperties) for `"card"`

Otherwise: `nil`
