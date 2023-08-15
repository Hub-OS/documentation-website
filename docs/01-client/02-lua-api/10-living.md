# Living

Instance of [Entity](/client/lua-api/entity).

Living functions are accessible to all entities, but will throw if the entity is not a [Player](/client/lua-api/player), [Character](/client/lua-api/character), or [Obstacle](/client/lua-api/obstacle).

### `living:max_health()`

Returns the entity's max health.

### `living:health()`

Returns the entity's current health.

### `living:set_health()`

Sets the entity's max health.

### `living:hitbox_enabled()`

Returns true if the entity can interact with attacks.

### `living:enable_hitbox(enabled?)`

Passing false will allow attacks to pass through as if the entity didn't exist.

### `living:counterable()`

Returns true if the entity can currently be countered.

### `living:set_counterable(enabled?)`

Allows the entity to be countered when hit by an attack with a [context](/client/lua-api/entity#entitycontext) created in [card_init](/client/packages/#cards)

### `living:intangible()`

Returns true if an [IntangibleRule](/client/lua-api/living#intangiblerule) is active.

### `living:set_intangible(intangible, intangible_rule?)`

- `intangible`: bool, if false the active rule is removed.
- `intangible_rule`: [IntangibleRule](/client/lua-api/living#intangiblerule)
  - Ignored if `intangible` is false.
  - A default will be used if `intangible_rule` is unset.

### `living:add_defense_rule(defense_rule)`

- `defense_rule`: [DefenseRule](/client/lua-api/living#defenserule)

### `living:remove_defense_rule(defense_rule)`

- `defense_rule`: [DefenseRule](/client/lua-api/living#defenserule)

### `living:register_status_callback(hit_flag, function())`

- `hit_flag` a single hit flag, see [HitProps](/client/lua-api/spell#hitprops)

The callback will be called when the `hit_flag` is applied to the entity.

### `living.on_countered_func = function(self)`

Called when this entity has been countered.

Not to be confused with [entity.on_counter_func](/client/lua-api/entity#entityon_counter_func--functionself)

## DefenseJudge

Created for each attack resolution and passed through [DefenseRule](#defenserule) callbacks.

### `judge:block_damage()`

Prevents damage and statuses from applying to the defending entity.

### `judge:block_impact()`

### `judge:damage_blocked()`

Returns true if `judge:block_damage()` was called.

### `judge:impact_blocked()`

Returns true if `judge:block_impact()` was called.

## DefenseRule

See [living:add_defense_rule()](/client/lua-api/living#livingadd_defense_ruledefense_rule)

### `DefenseRule.new(priority, defense_order)`

- `priority`
  - `DefensePriority.Barrier`
  - `DefensePriority.Body`
  - `DefensePriority.Action`
  - `DefensePriority.Trap`
  - `DefensePriority.Last`
- `defense_order`
  - `DefenseOrder.Always`
  - `DefenseOrder.CollisionOnly`

Adding a DefenseRule to an entity when a DefenseRule already exists with the same priorty will replace the existing rule.

### `defense_rule:replaced()`

Returns true if a DefenseRule with the same priority replaced this rule.

### `defense_rule.on_replace_func = function()`

Called when a DefenseRule with the same priority replaced this rule.

### `defense_rule.can_block_func = function(judge, attacker, defender, hit_props)`

If the defense order is `DefenseOrder.Always`, this function will be called on every hit.

If the defense order is `DefenseOrder.CollisionOnly`, this function will be called after intangibility is determined to not block the attack.

- `judge`: [DefenseJudge](#defensejudge)
- `attacker`: [Entity](/client/lua-api/entity)
- `defender`: [Entity](/client/lua-api/entity)
- `hit_props`: [HitProps](/client/lua-api/spell#hitprops)

### `defense_rule.filter_statuses_func = function(hit_props)`

Called before applying damage and statuses to the entity.

Should return [HitProps](/client/lua-api/spell#hitprops)

The return value replaces the HitProps applied to the entity.

## DefenseVirusBody

### `DefenseVirusBody.new()`

Creates a [DefenseRule](#defenserule) with `DefensePriority.Body` and `DefenseOrder.CollisionOnly`.

Filters `Hit.Flinch` and `Hit.Flash` flags during status filtering.

## IntangibleRule

### `IntangibleRule.new()`

Returns a new IntangibleRule.

### `intangible_rule.duration`

The maximum time the rule should last for in game frames.

The default value is 120.

### `intangible_rule.hit_weaknesses`

Hit flags combined into a single value see [HitProps](/client/lua-api/spell#hitprops)

The default value is `Hit.PierceInvis`

### `intangible_rule.element_weaknesses`

A list of [Elements](/client/lua-api/spell#element)

The default value is `{}`

### `intangible_rule.on_deactivate_func = function()`

Called when the duration runs out, or when the defense is pierced.
