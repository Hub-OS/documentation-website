# Breaking Changes

https://github.com/Hub-OS/mod-upgrade-tool

## 0.9

- Replaced AudioPriority with [AudioBehavior](/client/lua-api/resources#audiobehavior)

## 0.3

- Renamed "enemies" folder to "encounters"
- Renamed `battle_init` to `encounter_init`
- Renamed `battle` mod category to `encounter`
- Renamed `include` to `require`
- Removed `is_` and `get_` prefix for direct getters
- Renamed `Engine` to [Resources] (/client/lua-api/resources#resourcesplay_music)
- Renamed `Engine.stream_music()` to [Resources.play_music()](/client/lua-api/resources)
- Move `Engine` turn gauge functions to [TurnGauge](/client/lua-api/turn-gauge)
- Removed `Battle.` prefix
- Renamed `Battle.CardAction` to [Action](/client/lua-api/action)
- Renamed `card_properties.short_name` to `card_properties.short_name`
- Renamed `entity:card_action_event()` to [entity:queue_action()](/client/lua-api/entity#entityqueue_actionaction)
- Renamed `action:get_actor()` to [action:owner()](/client/lua-api/action#actionowner)
- Renamed `action:copy_metadata()` to [action:copy_card_properties()](/client/lua-api/action#actioncopy_card_properties)
  - Replacement / removal is under consideration.
- Renamed `action:set_metadata()` to [action:set_card_properties()](/client/lua-api/action#actionset_card_propertiesproperties)
  - Replacement / removal is under consideration.
- Renamed `Hit.Stun` to `Hit.Paralyze`
- Renamed `spell:highlight_tile()` to [spell:set_tile_highlight()](/client/lua-api/spell/#spellset_tile_highlightmode)
- Removed `tile:is_cracked()`, `tile:is_hidden()`, and `tile:is_hole()`
  - `not tile:is_walkable()` can be used where `tile:is_hole()` is called
- Renamed `tile:reserve_entity_by_id()` to [tile:reserve_for_id()](/client/lua-api/field#tilereserve_for_identity_id)
  - Added [tile:reserve_for(entity)](/client/lua-api/field#tilereserve_forentity)
  - Added [tile:remove_reservation_for_id(entity_id)](/client/lua-api/field#tileremove_reservation_for_identity_id)
  - Added [tile:remove_reservation_for(entity)](/client/lua-api/field#tileremove_reservation_forentity)
- Renamed `TileState.Empty` to `TileState.PermaHole`
- Renamed `MoveAction` to [Movement](/client/lua-api/entity#movement)
- Renamed `entity:raw_move_event()` to [entity:queue_movement()](/client/lua-api/entity#entityqueue_movementmovement)
- Renamed `entity:share_tile()` to [entity:enable_sharing_tile()](/client/lua-api/entity#entityenable_sharing_tileenabled)
- Renamed `entity:set_float_shoe()` to [entity:ignore_negative_tile_effects()](/client/lua-api/entity#entityignore_negative_tile_effectsenabled)
- Renamed `entity:set_air_shoe()` to [entity:ignore_hole_tiles()](/client/lua-api/entity#entityignore_hole_tilesenabled)
- Renamed `entity:get_current_palette()` to [entity:palette()](/client/lua-api/entity#entitypalette)
- Renamed `entity:set_animation(path)` to [entity:load_animation(path)](/client/lua-api/entity#entityload_animationpath)
- Renamed `sprite:show()` to [sprite:reveal()](/client/lua-api/sprite#spritereveal)
- Renamed `sprite:enable_parent_shader()` to [sprite:use_root_shader()](/client/lua-api/sprite#spriteuse_root_shaderenable)
- Renamed `animation:refresh(sprite)` to [animation:apply(sprite)](/client/lua-api/animation#animationapplysprite)
- Moved `entity:shake_camera()` to [field:shake()](/client/lua-api/field#fieldshakestrength-duration)
  - Also accepts game frames instead of seconds
- Renamed `living:toggle_hitbox()` to [living:enabled_hitbox()](/client/lua-api/living#livingenable_hitboxenabled)
- Renamed `living:toggle_counter()` to [living:set_counterable()](/client/lua-api/living#livingset_counterableenabled)
- Moved `IntangibleRule` to [IntangibleRule](/client/lua-api/living#intangiblerule)
- Renamed `Lifetime.Battlestep` to `Lifetime.Battle`

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
