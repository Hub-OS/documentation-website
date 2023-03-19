# Living

Instance of [Entity](/docs/client/lua-api/entity).

Living functions are accessible to all entities, but will throw if the entity is not a [Player](/docs/client/lua-api/player), [Character](/docs/client/lua-api/character), or [Obstacle](/docs/client/lua-api/obstacle).

### `living:get_max_health()`

Returns the entity's max health.

### `living:get_health()`

Returns the entity's current health.

### `living:set_health()`

Sets the entity's max health.

### `living:toggle_hitbox(enabled?)`

Passing false will allow attacks to pass through as if the entity didn't exist.

### `living:is_counterable()`

Returns true if the entity can currently be countered.

### `living:toggle_counter(enabled?)`

### `living:is_intangible()`

Returns true if an [IntangibleRule](/docs/client/lua-api/defense#intangiblerule) is active.

### `living:set_intangible(intangible, intangible_rule?)`

- `intangible`: bool, if false the active rule is removed.
- `intangible_rule`: [IntangibleRule](/docs/client/lua-api/defense#intangiblerule)
  - Ignored if `intangible` is false.
  - A default will be used if `intangible_rule` is unset.

### `living:add_defense_rule(defense_rule)`

- `defense_rule`: [DefenseRule](/docs/client/lua-api/defense#defenserule)

### `living:remove_defense_rule(defense_rule)`

- `defense_rule`: [DefenseRule](/docs/client/lua-api/defense#defenserule)

### `living:register_status_callback(hit_flag, function())`

- `hit_flag` a single hit flag, see [HitProps](/docs/client/lua-api/spell#hitprops)

The callback will be called when the `hit_flag` is applied to the entity.
