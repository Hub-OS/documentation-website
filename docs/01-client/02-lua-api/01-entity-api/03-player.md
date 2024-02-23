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

### `player:set_slide_when_moving(bool?)`

When `true`, the player will slide to tiles and continue using the `PLAYER_IDLE` state.

When `false`, the player will teleport to tiles and animate with the `PLAYER_MOVE` state.

### `player:queue_default_player_movement(tile)`

- `tile`: [Tile](/client/lua-api/field-api/tile)

Queues a movement with the default internal logic.

### `player:has_regular_card()`

Returns a bool.

### `player:deck_cards()`

Returns a list of [DeckCard](/client/lua-api/attack-api/cards#deckcard).

### `player:deck_card(index)`

Returns [DeckCard](/client/lua-api/attack-api/cards#deckcard) or nil.

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

Removes a card from the player's deck.

Any [StagedItem](#stageditem) referencing this card will be dropped.

### `player:staged_items_confirmed()`

Returns true if Card Select can close.

### `player:confirm_staged_items()`

Allows Card Select to close.

### `player:stage_card(card_properties, function()?)`

- `card_properties`: [CardProperties](/client/lua-api/attack-api/cards#cardproperties)
- The callback will be called when the player removes the StagedItem.

Appends a new [StageItem](#stageitem) to display in Card Select.

### `player:stage_deck_card(deck_index, function()?)`

- `deck_index`: number, 1 is the first card in the deck.
- The callback will be called when the player removes the StagedItem.

Appends a new [StageItem](#stageitem) to display in Card Select.

Any StageItems already referencing `deck_index` will be removed.

### `player:stage_deck_discard(deck_index, function()?)`

- `deck_index`: number, 1 is the first card in the deck.
- The callback will be called when the player removes the StagedItem.

Appends a new [StageItem](#stageitem) to display in Card Select.

Any StageItems already referencing `deck_index` will be removed.

### `player:stage_form(form, texture_path?, function()?)`

- `form`: [PlayerForm](#playerform)
- `texture_path`: The texture to use for the icon.
- The callback will be called when the player removes the StagedItem.

Prepends a new [StageItem](#stageitem) that will be displayed in card select if a texture is set. If a form is already staged this StageItem will replace the existing item.

### `player:stage_icon(texture_path, function()?)`

- `texture_path`: The texture to use for the icon.
- The callback will be called when the player removes the StagedItem.

Appends a new [StageItem](#stageitem) to display in Card Select.

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

Returns `{ package_id?: string, code?: string } | nil`. Cards must match any of the set fields.

### `player:set_card_selection_blocked(bool)`

Prevents selection in Card Select and hides the cursor.

### `player:set_fixed_card(card_properties)`

Dedicates the last card slot in Card Select to the specified card. Internally defined as a [CardSelectButton](#cardselectbutton).

### `player:create_card_button(slot_count)`

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

### `player.special_attack_func = function(self): Action`

Should return an [Action](/client/lua-api/attack-api/action)

### `player.can_charge_card_func = function(card_properties)`

Will not be called if there's no matching `charged_card_func`

Return true if `charged_card_func` should be called to handle this card.

### `player.charged_card_func = function(self, card_properties): Action|nil`

Will not be called if there's no matching `can_charge_card_func`

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

### `player_form:set_fixed_card(card_properties)`

Dedicates the last card slot in Card Select to the specified card. Internally defined as a [CardSelectButton](#cardselectbutton).
Overrides the card button created on the Player and any [Augment](#augment).

### `player_form:create_card_button(slot_count)`

Creates a button embedded in the end of the card list in Card Select.
Overrides the card button created on the Player and any [Augment](#augment).

Returns [CardSelectButton](#cardselectbutton)

### `player_form:create_special_button()`

Creates a button under the "Confirm" button in Card Select.
Overrides the special button created on the Player and any [Augment](#augment).

Returns [CardSelectButton](#cardselectbutton)

### `player_form.on_activate_func = function(self, player)`

Called when the form is activated, the player's appearance should be modified here.

### `player_form.on_deactivate_func = function(self, player)`

Called when the form is deactivated, the player's appearance should be reverted here.

### `player_form.on_update_func = function(self, player)`

Called after [player.on_update_func](#playernormal_attack_func--functionself) when this form is active.

### `player_form.calculate_charge_time_func = function(self, player): number`

Overrides [player.calculate_charge_time_func](#playercalculate_charge_time_func--functionself-number) when this form is active.
Also overrides any [Augment](#augment)'s override.

A number representing the minimum Shoot button held time in game frames is expected as a return value.

### `player_form.normal_attack_func = function(self, player): Action|nil`

Overrides [player.normal_attack_func](#playernormal_attack_func--functionself-actionnil) when this form is active.
Also overrides any [Augment](#augment)'s override.

An [Action](/client/lua-api/attack-api/action) is expected as a return value.

Return `nil` to fallback to the player's implementation.

### `player_form.charged_attack_func = function(self, player): Action|nil`

Overrides [player.charged_attack_func](#playercharged_attack_func--functionself-actionnil) when this form is active.
Also overrides any [Augment](#augment)'s override.

An [Action](/client/lua-api/attack-api/action) is expected as a return value.

Return `nil` to fallback to the player's implementation.

### `player_form.special_attack_func = function(self, player): Action|nil`

Overrides [player.special_attack_func](#playerspecial_attack_func--functionself-action) when this form is active.
Also overrides any [Augment](#augment)'s override.

An [Action](/client/lua-api/attack-api/action) is expected as a return value.

Return `nil` to fallback to the player's implementation.

### `player_form.can_charge_card_func = function(card_properties): boolean`

Will not be called if there's no matching `charged_card_func`

Return true if this form's `charged_card_func` should be called to handle this card.

### `player_form.charged_card_func = function(self, card_properties): Action|nil`

Will not be called if there's no matching `can_charge_card_func`

An [Action](/client/lua-api/attack-api/action) or `nil` is expected as a return value.

### `player_form.movement_func = function(self, player)`

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

### `augment:set_fixed_card(card_properties)`

Dedicates the last card slot in Card Select to the specified card. Internally defined as a [CardSelectButton](#cardselectbutton).
Overrides the card button created on the Player.

### `augment:create_card_button(slot_count)`

Creates a button embedded in the end of the card list in Card Select.
Overrides the card button created on the Player.

Returns [CardSelectButton](#cardselectbutton)

### `augment:create_special_button()`

Creates a button under the "Confirm" button in Card Select.
Overrides the special button created on the Player.

Returns [CardSelectButton](#cardselectbutton)

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

Overrides [player.special_attack_func](#playerspecial_attack_func--functionself-action)

An [Action](/client/lua-api/attack-api/action) is expected as a return value.

Return `nil` to fallback to the next implementation (augment, form, or player).

### `augment.can_charge_card_func = function(card_properties): boolean`

Will not be called if there's no matching `charged_card_func`

Return true if this augment's `charged_card_func` should be called to handle this card.

### `augment.charged_card_func = function(self, card_properties): Action|nil`

Will not be called if there's no matching `can_charge_card_func`

An [Action](/client/lua-api/attack-api/action) or `nil` is expected as a return value.

### `augment.movement_func = function(self, direction)`

Overrides [player.movement_func](#playermovement_func--functionself-direction).

Used to handle movement input.

### `augment.on_delete_func = function(self)`

Called when the player is deleted or when this augment's level is boosted to <= 0.

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
