# Breaking Changes

## 0.91.0

- Rename `Net.deletes_sprite()` -> `Net.remove_sprite()`

## 0.14.0

- Removed `host` and `port` from `"server_message"` event, merged into `address`.
- Direction values returned from the server are now uppercase.

## 0.9.0

- Emotes now use an animation file and completely override emotes shipped with the client.
  - Scaling is defined in the animation file. Adjust a point named SCALE on the first frame to fix scaling from older custom emote files.
  - Emote IDs use animation state name rather than hard coded numbers.
  - `--custom-emotes-path` split into `--emotes-animation-path` and `--emotes-texture-path`
  - Relevant functions:
    - [Net.set_player_emote()](/server/lua-api/players#netset_player_emoteplayer_id-emote_id)
    - [Net.exclusive_player_emote()](/server/lua-api/players#netexclusive_player_emoteplayer_id-emoter_id-emote_id)
    - [Net.set_bot_emote()](/server/lua-api/bots#netset_bot_emotebot_id-emote_id)

## 0.5.0

- `Async.remove_player_item()` removed.
- `Net.set_mod_whitelist_for_player()` and `Net.set_mod_blacklist_for_player()` removed.
  - Use [Net.set_player_restrictions()](/server/lua-api/players#netset_player_restrictionsplayer_id-path) instead.
- Replaced MD5 with SHA-256 for hashing packages.

## 0.2.0

- `Async.promisify()` removed.
  - Use [Async.create_scope()](/server/lua-api/async#asynccreate_scopetfunction-t) or [Async.create_function()](/server/lua-api/async#asynccreate_functiontfunction-t) instead.
- `Net.create_item()` renamed to [Net.register_item()](/server/lua-api/player-data#netregister_itemitem_id-item_definition)
- [Net.get_player_items()](/server/lua-api/player-data#netget_player_itemsplayer_id) now returns unique ids.
- [Net.open_shop()](/server/lua-api/widgets#netopen_shopplayer_id-shop_items-mug_texture_path-mug_animation_path) revised.
  - Descriptions removed from items, descriptions should be handled by `shop_description_request` listeners.
- `Net.set_bot_minimap_color()` renamed to [Net.set_bot_map_color()](/server/lua-api/widgets#netset_bot_map_colorbot_id-color)
- `Net.set_player_minimap_color()` renamed to [Net.set_player_map_color()](/server/lua-api/widgets#netset_player_map_colorplayer_id-color)
- `Net.map_to_string()` renamed to [Net.area_to_string()](/server/lua-api/areas#netarea_to_stringarea_id)
