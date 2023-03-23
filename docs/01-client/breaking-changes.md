# Breaking Changes

https://github.com/Real-PET/mod-upgrade-tool

## 0.3

- Renamed "enemies" folder to "battles"
- Renamed `include` to `require`
- Renamed `Battle.CardAction` to [Battle.Action](/client/lua-api/action)
- Renamed `card_properties.short_name` to `card_properties.short_name`
- Renamed `entity:card_action_event()` to [entity:queue_action()](/client/lua-api/entity#entityqueue_actionaction)
- Renamed `action:get_actor()` to [action:get_owner()](/client/lua-api/action#actionget_owner)
- Renamed `action:copy_metadata()` to [action:copy_card_properties()](/client/lua-api/action#actioncopy_card_properties)
  - Replacement / removal is under consideration.
- Renamed `action:set_metadata()` to [action:set_card_properties()](/client/lua-api/action#actionset_card_propertiesproperties)
  - Replacement / removal is under consideration.
- Moved `HitProps` to [Battle.HitProps](/client/lua-api/spell/#hitprops)
- Renamed `spell:highlight_tile()` to [spell:set_tile_highlight()](/client/lua-api/spell/#spellset_tile_highlightmode)
- Removed `tile:is_cracked()`, `tile:is_hidden()`, and `tile:is_hole()`
  - `not tile:is_walkable()` can be used where `tile:is_hole()` is called
- Renamed `tile:reserve_entity_by_id()` to [tile:reserve_for_id()](/client/lua-api/field#tilereserve_for_identity_id)
  - Added [tile:reserve_for(entity)](/client/lua-api/field#tilereserve_forentity)
  - Added [tile:remove_reservation_for_id(entity_id)](/client/lua-api/field#tileremove_reservation_for_identity_id)
  - Added [tile:remove_reservation_for(entity)](/client/lua-api/field#tileremove_reservation_forentity)
- Renamed `TileState.Empty` to `TileState.PermaHole`
- Renamed `MoveAction` to [Battle.Movement](/client/lua-api/entity#movement)
- Renamed `entity:raw_move_event()` to [entity:queue_movement()](/client/lua-api/entity#entityqueue_movementmovement)
- Renamed `entity:get_current_palette()` to [entity:get_palette()](/client/lua-api/entity#entityget_palette)
- Renamed `entity:set_animation(path)` to [entity:load_animation(path)](/client/lua-api/entity#entityload_animationpath)
- Renamed `sprite:show()` to [sprite:reveal()](/client/lua-api/sprite#spritereveal)
- Renamed `sprite:enable_parent_shader()` to [sprite:use_root_shader()](/client/lua-api/sprite#spriteuse_root_shaderenable)
- Renamed `animation:refresh(sprite)` to [animation:apply(sprite)](/client/lua-api/animation#animationapplysprite)
- Moved `entity:shake_camera()` to [field:shake()](/client/lua-api/field#fieldshakestrength-duration)
  - Also accepts game frames instead of seconds
- Renamed `Engine.reset_turn_gauge_to_default()` to [Engine.reset_turn_gauge_max_time()](/client/lua-api/engine#enginereset_turn_gauge_max_time)
- Renamed `Engine.get_turn_gauge_value()` to [Engine.get_turn_gauge_progress()](/client/lua-api/engine#engineget_turn_gauge_progress)
- Moved `IntangibleRule` to [Battle.IntangibleRule](/client/lua-api/living#intangiblerule)

## 0.2

- `package_init` and `package_requires_scripts` removed, replaced with [package.toml](/client/packages)
  - mods/blocks -> mods/augments
  - `block:set_mutator()` -> `function augment_init(augment)`
  - `charge_boost` + `attack_boost` + `rapid_boost` in [package.toml](/client/packages) for blocks
- For battles: `package_build` -> `battle_init`
- For characters: `package_init` -> `character_init`

## 0.1

- [entity.on_delete_func](/client/lua-api/entity#entityon_delete_func--functionself)
  - Requires call to [entity:erase()](/client/lua-api/entity#entityerase), [entity:default_character_delete()](/client/lua-api/entity#entitydefault_character_delete), or [entity:default_player_delete()](/client/lua-api/entity#entitydefault_player_delete)
- `charged_time_table_func` -> [calculate_charge_time_func](/client/lua-api/player/#playercalculate_charge_time_func--functionself)
- Simplified `Battle.Step.new()` + `card_action:add_step(step)` to [card_action:create_step()](/client/lua-api/action#actioncreate_step)
- Simplified `Battle.Component.new(lifetime)` + `entity:register_component(component)` to [entity:create_component(lifetime)](/client/lua-api/entity#entitycreate_componentlifetime)
- Removed `frames(number)`, just use the number directly
- Removed `make_frame_data(data)`, just use the data directly
- Removed the `dt` param from `entity.on_update_func()`
