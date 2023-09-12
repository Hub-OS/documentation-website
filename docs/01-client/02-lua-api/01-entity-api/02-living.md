# Living

Instance of [Entity](/client/lua-api/entity-api/entity).

Living functions are accessible to all entities, but will throw if the entity is not a [Player](/client/lua-api/entity-api/player), [Character](/client/lua-api/entity-api/character), or [Obstacle](/client/lua-api/entity-api/obstacle).

### `living:max_health()`

Returns the entity's max health.

### `living:health()`

Returns the entity's current health.

### `living:set_health()`

Sets the entity's max health.

### `living:hitbox_enabled()`

Returns true if the entity can interact with attacks.

Different from [entity:hittable()](/client/lua-api/entity-api/entity#entityhittable)

### `living:enable_hitbox(enabled?)`

Passing false will allow attacks to pass through as if the entity didn't exist.

### `living:counterable()`

Returns true if the entity can currently be countered.

### `living:set_counterable(enabled?)`

Allows the entity to be countered when hit by an attack with a [context](/client/lua-api/entity-api/entity#entitycontext) created in [card_init](/client/packages/#cards)

### `living:intangible()`

Returns true if an [IntangibleRule](/client/lua-api/defense-api/intangible-rule) is active.

### `living:set_intangible(intangible, intangible_rule?)`

- `intangible`: bool, if false the active rule is removed.
- `intangible_rule`: [IntangibleRule](/client/lua-api/defense-api/intangible-rule)
  - Ignored if `intangible` is false.
  - A default will be used if `intangible_rule` is unset.

### `living:add_defense_rule(defense_rule)`

- `defense_rule`: [DefenseRule](/client/lua-api/defense-api/defense-rule)

### `living:remove_defense_rule(defense_rule)`

- `defense_rule`: [DefenseRule](/client/lua-api/defense-api/defense-rule)

### `living:add_aux_prop(aux_prop)`

- `aux_prop`: [AuxProp](/client/lua-api/defense-api/aux-prop)

### `living:remove_aux_prop(aux_prop)`

- `aux_prop`: [AuxProp](/client/lua-api/defense-api/aux-prop)

### `living:apply_status(hit_flag, duration)`

- `hit_flag` a single hit flag, see [HitProps](/client/lua-api/attack-api/hit-props)
- `duration` number, how many battle frames the effect should last

Queues a status update. If the status is already applied, the remaining time will be updated to use the longer duration.

### `living:remove_status(hit_flag)`

- `hit_flag` a single hit flag, see [HitProps](/client/lua-api/attack-api/hit-props)

### `living:remaining_status_time(hit_flag)`

- `hit_flag` a single hit flag, see [HitProps](/client/lua-api/attack-api/hit-props)

Returns a number representing the amount of battle frames until the status wears off.

### `living:set_remaining_status_time(hit_flag, duration)`

- `hit_flag` a single hit flag, see [HitProps](/client/lua-api/attack-api/hit-props)
- `duration` number, how many battle frames the effect should last.

Updates remaining time for a status already applied, or queues a new status update if isn't.

### `living:register_status_callback(hit_flag, function())`

- `hit_flag` a single hit flag, see [HitProps](/client/lua-api/attack-api/hit-props)

The callback will be called when the `hit_flag` is applied to the entity.

### `living.on_countered_func = function(self)`

Called when this entity has been countered.

Not to be confused with [entity.on_counter_func](/client/lua-api/entity-api/entity#entityon_counter_func--functionself)
