# Widgets

### `Net.is_player_busy(player_id)`

Returns true if the player is in a server sent battle, or if a board, shop, or textbox is open.

### `Net.is_player_in_widget(player_id)`

Returns true if a board, shop, or textbox is open.

### `Net.is_player_shopping(player_id)`

Returns true if a shop is open.

### `Net.message_player(player_id, message, mug_texture_path?, mug_animation_path?)`

Displays a textbox with the message and mug.

See [textbox_response](/docs/server/lua-api/events#textbox_response) or the [async](/docs/server/lua-api/async#asyncmessage_playerplayer_id-message-mug_texture_path-mug_animation_path) version of this function for handling responses.

### `Net.question_player(player_id, question, mug_texture_path?, mug_animation_path?)`

Displays a textbox with a Yes / No input after the message.

See [textbox_response](/docs/server/lua-api/events#textbox_response) or the [async](/docs/server/lua-api/async#asyncquestion_playerplayer_id-question-mug_texture_path-mug_animation_path>) version of this function for handling responses.

### `Net.quiz_player(player_id, option_a?, option_b?, option_c?, mug_texture_path?, mug_animation_path?)`

Displays a textbox with selectable options.

See [textbox_response](/docs/server/lua-api/events#textbox_response) or the [async](/docs/server/lua-api/async#asyncquiz_playerplayer_id-option_a-option_b-option_c-mug_texture_path-mug_animation_path>) version of this function for handling responses.

### `Net.prompt_player(player_id, character_limit?, default_text?)`

Displays a textbox that accepts text input.

See [textbox_response](/docs/server/lua-api/events#textbox_response) or the [async](/docs/server/lua-api/async#asyncprompt_playerplayer_id-character_limit-default_text) version of this function for handling responses.

### `Net.open_board(player_id, board_name, color, posts, open_instantly?)`

- `color`: `{ r: 0-255, g: 0-255, b: 0-255 }`
- `posts`: `{ id: string, read: bool?, title: string?, author: string? }[]`

Returns EventEmitter, re-emits `post_selection`, `post_request`, and `board_close` server events.

### `Net.prepend_posts(player_id, posts, post_id?)`

Issues may arise when multiple scripts create boards at the same time.

### `Net.append_posts(player_id, posts, post_id?)`

Issues may arise when multiple scripts create boards at the same time.

### `Net.remove_post(player_id, post_id)`

Issues may arise when multiple scripts create boards at the same time.

### `Net.close_board(player_id)`

Closes the currently opened board for the player.

### `Net.open_shop(player_id, items, mug_texture_path?, mug_animation_path?)`

- `items`: `{ id: string?, name: string, price: number | string }[]`
  - If the `id` is unset, the `name` is used as the `id` instead.

Returns EventEmitter, re-emits `shop_purchase`, `shop_description_request`, `shop_leave`, and `shop_close` server events.

### `Net.set_shop_message(player_id, message)`

Sets the default text for the shop keeper. Ignored if no shop is open.

### `Net.update_shop_item(player_id, item_data)`

- `item_data`: `{ id: string?, name: string, price: number | string }`

Replaces the `item_data` for the item matching the `id`.

### `Net.remove_shop_item(player_id, item_id)`

Delete the item from the open shop.

### `Net.create_sprite({ player_id?, parent_id, parent_point?, x?, y?, layer?, texture_path, animation_path?, animation? })`

- `player_id` restricts visibility to this specific player if set.
- `parent_id` can be "widget", "hud", or an actor_id.
- `parent_point` a point defined in the parent's animation file or built-in point.
  - If unset the origin will be used. For "widget" and "hud" the origin is the top left of the screen.
- `x`, `y` offset from `parent_point` in screen pixels.
- `layer` an integer used for sorting sprites relative to the parent.
  - Smaller numbers display on top of larger numbers, use negatives if you want to display in front of other sprites.
  - Positives display under the parent if the parent is an actor.
- `animation` is an animation state, this state will be looped.

Returns sprite_id

### `Net.animate_sprite(sprite_id, state_name, loop?)`

Sets the animation state for the sprite.

### `Net.delete_sprite(sprite_id)`

Deletes the the sprite.

### `Net.set_player_map_color(player_id, color)`

- `color`: `{ r: 0-255, g: 0-255, b: 0-255, a?: 0-255 }`

Sets the color of the marker used in the map menu to represent this player. Defaults to `{ r: 0, g: 0, b: 0, a: 0 }`

### `Net.set_bot_map_color(bot_id, color)`

- `color`: `{ r: 0-255, g: 0-255, b: 0-255, a?: 0-255 }`

Sets the color of the marker used in the map menu to represent this bot. Defaults to `{ r: 0, g: 0, b: 0, a: 0 }`
