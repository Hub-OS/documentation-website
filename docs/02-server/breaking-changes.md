# Breaking Changes

## 0.2.0

- `Async.promisify()` removed.
  - Use [Async.create_scope()](/server/lua-api/async#asynccreate_scopefunction) or [Async.create_function()](/server/lua-api/async#asynccreate_functionfunction) instead.
- `Net.create_item()` renamed to [Net.register_item()](/server/lua-api/player-data#netregister_itemitem_id-item_definition)
- [Net.get_player_items()](</server/lua-api/player-data#netget_player_itemsplayer_id) now returns unique ids.
- [Net.open_shop()](/server/lua-api/widgets#netopen_shopplayer_id-items-mug_texture_path-mug_animation_path) revised.
  - Descriptions removed from items, descriptions should be handled by `shop_description_request` listeners.
- `Net.set_bot_minimap_color()` renamed to [Net.set_bot_map_color()](/server/lua-api/widgets#netset_bot_map_colorbot_id-color)
- `Net.set_player_minimap_color()` renamed to [Net.set_player_map_color()](/server/lua-api/widgets#netset_player_map_colorplayer_id-color)
- `Net.map_to_string()` renamed to [Net.area_to_string()](/server/lua-api/areas#netarea_to_stringarea_id)
