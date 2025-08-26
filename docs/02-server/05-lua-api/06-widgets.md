# Widgets

### `Net.is_player_busy(player_id)`

Returns true if the player is in a server sent battle, or if a board, shop, or textbox is open.

### `Net.is_player_in_widget(player_id)`

Returns true if a board, shop, or textbox is open.

### `Net.is_player_shopping(player_id)`

Returns true if a shop is open.

### `Net.hide_hud(player_id)`

Hides the HUD for the specified player.

### `Net.show_hud(player_id)`

Makes the HUD visible for the specified player.

### `Net.message_player(player_id, message, mug_texture_path?, mug_animation_path?)`

- `message`: `string`

Displays a textbox with the message and mug.

See [textbox_response](/server/lua-api/events#textbox_response) or the [async](/server/lua-api/async#asyncmessage_playerplayer_id-message-mug_texture_path-mug_animation_path) version of this function for handling responses.

### `Net.message_player(player_id, message, textbox_options?)`

- `message`: `string`
- `textbox_options`: [Net.TextboxOptions](#nettextboxoptions)

Displays a textbox with the message and mug.

See [textbox_response](/server/lua-api/events#textbox_response) or the [async](/server/lua-api/async#asyncmessage_playerplayer_id-message-textbox_options) version of this function for handling responses.

### `Net.message_player_auto(player_id, message, close_delay, mug_texture_path?, mug_animation_path?)`

- `message`: `string`
- `close_delay`: `number` the duration to wait after the text finishes animating to automatically move on.

Displays a textbox with the message and mug.

See [textbox_response](/server/lua-api/events#textbox_response) or the [async](/server/lua-api/async#asyncmessage_player_autoplayer_id-message-close_delay-mug_texture_path-mug_animation_path) version of this function for handling responses.

### `Net.message_player_auto(player_id, message, textbox_options?)`

- `message`: `string`
- `close_delay`: `number` the duration to wait after the text finishes animating to automatically move on.
- `textbox_options`: [Net.TextboxOptions](#nettextboxoptions)

Displays a textbox with the message and mug.

See [textbox_response](/server/lua-api/events#textbox_response) or the [async](/server/lua-api/async#asyncmessage_player_autoplayer_id-message-close_delay-textbox_options) version of this function for handling responses.

### `Net.question_player(player_id, question, mug_texture_path?, mug_animation_path?)`

- `question`: `string`

Displays a textbox with a Yes / No input after the message.

See [textbox_response](/server/lua-api/events#textbox_response) or the [async](/server/lua-api/async#asyncquestion_playerplayer_id-question-mug_texture_path-mug_animation_path) version of this function for handling responses.

### `Net.question_player(player_id, question, textbox_options?)`

- `question`: `string`
- `textbox_options`: [Net.TextboxOptions](#nettextboxoptions)

Displays a textbox with a Yes / No input after the message.

See [textbox_response](/server/lua-api/events#textbox_response) or the [async](/server/lua-api/async#asyncquestion_playerplayer_id-question-textbox_options) version of this function for handling responses.

### `Net.quiz_player(player_id, option_a?, option_b?, option_c?, mug_texture_path?, mug_animation_path?)`

- `option_a`: `string`
- `option_b`: `string`
- `option_c`: `string`

Displays a textbox with selectable options.

See [textbox_response](/server/lua-api/events#textbox_response) or the [async](/server/lua-api/async#asyncquiz_playerplayer_id-option_a-option_b-option_c-mug_texture_path-mug_animation_path) version of this function for handling responses.

### `Net.quiz_player(player_id, option_a?, option_b?, option_c?, textbox_options?)`

- `option_a`: `string`
- `option_b`: `string`
- `option_c`: `string`
- `textbox_options`: [Net.TextboxOptions](#nettextboxoptions)

Displays a textbox with selectable options.

See [textbox_response](/server/lua-api/events#textbox_response) or the [async](/server/lua-api/async#asyncquiz_playerplayer_id-option_a-option_b-option_c-textbox_options) version of this function for handling responses.

### `Net.prompt_player(player_id, character_limit?, default_text?)`

Displays a textbox that accepts text input.

See [textbox_response](/server/lua-api/events#textbox_response) or the [async](/server/lua-api/async#asyncprompt_playerplayer_id-character_limit-default_text) version of this function for handling responses.

### `Net.open_board(player_id, board_name, color, posts, open_instantly?)`

- `color`: [Net.Color](#netcolor)
- `posts`: [Net.BoardPost[]](#netboardpost)

Returns [Net.EventEmitter](/server/lua-api/event-emitters), re-emits `post_selection`, `post_request`, and `board_close` server events.

### `Net.prepend_posts(player_id, posts, post_id?)`

Issues may arise when multiple scripts create boards at the same time.

### `Net.append_posts(player_id, posts, post_id?)`

Issues may arise when multiple scripts create boards at the same time.

### `Net.remove_post(player_id, post_id)`

Issues may arise when multiple scripts create boards at the same time.

### `Net.close_board(player_id)`

Closes the currently opened board for the player.

### `Net.open_shop(player_id, shop_items, mug_texture_path?, mug_animation_path?)`

- `shop_items`: [Net.ShopItem[]](#netshopitem)
  - If the `id` is unset, the `name` is used as the `id` instead.

Returns [Net.EventEmitter](/server/lua-api/event-emitters), re-emits `shop_purchase`, `shop_description_request`, `shop_leave`, and `shop_close` server events.

### `Net.set_shop_message(player_id, message)`

Sets the default text for the shop keeper. Ignored if no shop is open.

### `Net.prepend_shop_items(player_id, shop_items, item_id?)`

Issues may arise when multiple scripts create shops at the same time.

### `Net.append_shop_items(player_id, shop_items, item_id?)`

Issues may arise when multiple scripts create bshopsoards at the same time.

### `Net.update_shop_item(player_id, shop_item)`

- `shop_item`: [Net.ShopItem](#netshopitem)

Replaces the `shop_item` for the item matching the `id`.

### `Net.remove_shop_item(player_id, item_id)`

Delete the item from the open shop.

### `Net.create_sprite(sprite_options)`

- `sprite_options` [Net.SpriteOptions](#netspriteoptions)

Returns sprite_id

### `Net.create_text_sprite(text_sprite_options)`

- `text_sprite_options` [Net.TextSpriteOptions](#nettextspriteoptions)

Returns sprite_id

### `Net.animate_sprite(sprite_id, state_name, loop?)`

Sets the animation state for the sprite.

### `Net.delete_sprite(sprite_id)`

Deletes the the sprite.

### `Net.set_player_map_color(player_id, color)`

- `color`: [Net.Color](#netcolor)

Sets the color of the marker used in the map menu to represent this player. Defaults to `{ r: 0, g: 0, b: 0, a: 0 }`

### `Net.set_bot_map_color(bot_id, color)`

- `color`: [Net.Color](#netcolor)

Sets the color of the marker used in the map menu to represent this bot. Defaults to `{ r: 0, g: 0, b: 0, a: 0 }`

### `Net.refer_link(player_id, address)`

Sends a link to the player to open in the browser. Permission will be asked before opening.

Supports `http://` and `https://` protocols.

### `Net.refer_server(player_id, name, address)`

Opens a menu for the player to save the referred server.

### `Net.refer_package(player_id, package_id)`

Opens a menu on the client for the player to view and install a package from their preferred package repo.

### `Net.offer_package(player_id, package_path)`

Gets permission from the player to permanently install a package on their client, allowing for the package to be used when disconnected and while on other servers.

If the player accepts, the package will be installed.

Currently unimplemented on the client.

## Net.TextureAnimationPair

```lua
---@class Net.TextureAnimationPair
---@field texture_path string
---@field animation_path string
```

## Net.Color

```lua
--- All fields are in the range: [0, 255]
---@class Net.Color
---@field r number
---@field g number
---@field b number
---@field a? number
```

## Net.TextboxOptions

```lua
---@class Net.TextboxOptions
---@field mug? Net.TextureAnimationPair
---@field text_style? Net.TextStyle
```

## Net.TextStyle

```lua
---@class Net.TextStyle
---@field font? string
---@field monospace? boolean
---@field min_glyph_width? number
---@field letter_spacing? number
---@field line_spacing? number
---@field scale_x? number
---@field scale_y? number
---@field color? Net.Color
---@field shadow_color? Net.Color
---@field custom_atlas? Net.TextureAnimationPair,
```

Example:

```lua
-- note modified syntax: ? marks a field as optional
local textbox_options = {
  mug? = {
    texture_path = "/server/assets/[...].png",
    animation_path = "/server/assets/[...].animation",
  }
}

Net.message_player(player_id, message, textbox_options)
```

## Net.BoardPost

```lua
---@class Net.BoardPost
---@field id string
---@field read boolean?
---@field title string?
---@field author string?
```

## Net.ShopItem

```lua
---@class Net.ShopItem
---@field id string?
---@field name string,
---@field price number | string
```

## Net.SpriteOptions

```lua
---@class Net.SpriteOptions
---@field player_id? Net.ActorId Restricts visibility to this specific player if set.
---@field parent_id "widget" | "hud" | Net.ActorId
---A point defined in the parent's animation file or built-in point such as "EMOTE".
---If unset the origin will be used.
---
---For "widget" and "hud" the origin is the top left of the screen.
---@field parent_point? string
---@field x? number Offset from `parent_point` in screen pixels
---@field y? number Offset from `parent_point` in screen pixels
---@field layer? number Used for sorting sprites relative to the parent. Use negatives if you want to display in front of other sprites.
---@field texture_path string
---@field animation_path? string
---@field animation? string Animation state, this state will be looped.
```

## Net.SpriteOptions

```lua
---@class Net.TextSpriteOptions
---@field player_id? Net.ActorId Restricts visibility to this specific player if set.
---@field parent_id "widget" | "hud" | Net.ActorId
---A point defined in the parent's animation file or built-in point such as "EMOTE".
---If unset the origin will be used.
---
---For "widget" and "hud" the origin is the top left of the screen.
---@field parent_point? string
---@field x? number Offset from `parent_point` in screen pixels
---@field y? number Offset from `parent_point` in screen pixels
---@field layer? number Used for sorting sprites relative to the parent. Use negatives if you want to display in front of other sprites.
---@field text string
---@field text_style Net.TextStyle
---@field h_align? "left" | "center" | "right"
---@field v_align? "top" | "center" | "bottom"
```
