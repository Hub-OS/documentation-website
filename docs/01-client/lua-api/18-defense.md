# Defense

## DefenseJudge

Created for each attack resolution and passed through [DefenseRule](#defenserule) callbacks.

### `judge:block_damage()`

Prevents damage and statuses from applying to the defending entity.

### `judge:block_impact()`

### `judge:is_damage_blocked()`

Returns true if `judge:block_damage()` was called.

### `judge:is_impact_blocked()`

Returns true if `judge:block_impact()` was called.

## DefenseRule

See [living:add_defense_rule()](/docs/client/lua-api/living#livingadd_defense_ruledefense_rule)

### `Battle.DefenseRule.new(priority, defense_order)`

- `priority`
  - `DefensePriority.Barrier`
  - `DefensePriority.Body`
  - `DefensePriority.CardAction`
  - `DefensePriority.Trap`
  - `DefensePriority.Last`
- `defense_order`
  - `DefenseOrder.Always`
  - `DefenseOrder.CollisionOnly`

Adding a DefenseRule to an entity when a DefenseRule already exists with the same priorty will replace the existing rule.

### `defense_rule:is_replaced()`

Returns true if a DefenseRule with the same priority replaced this rule.

### `defense_rule.on_replace_func = function()`

Called when a DefenseRule with the same priority replaced this rule.

### `defense_rule.can_block_func = function(judge, attacker, defender)`

If the defense order is `DefenseOrder.Always`, this function will be called on every hit.

If the defense order is `DefenseOrder.CollisionOnly`, this function will be called after intangibility is determined to not block the attack.

- `judge`: [DefenseJudge](#defensejudge)
- `attacker`: [Entity](/docs/client/lua-api/entity)
- `defender`: [Entity](/docs/client/lua-api/entity)

### `defense_rule.filter_statuses_func = function(hit_props)`

Called before applying damage and statuses to the entity.

Should return [HitProps](/docs/client/lua-api/spell#hitprops)

The return value replaces the HitProps applied to the entity.

## DefenseVirusBody

### `Battle.DefenseVirusBody.new()`

Creates a [DefenseRule](#defenserule) with `DefensePriority.Body` and `DefenseOrder.CollisionOnly`.

Filters `Hit.Flinch` and `Hit.Flash` flags during status filtering.

## IntangibleRule

### `Battle.IntangibleRule.new()`

### `intangible_rule.duration`

The maximum time the rule should last for in game frames.

The default value is 120.

### `intangible_rule.hit_weaknesses`

Hit flags combined into a single value see [HitProps](/docs/client/lua-api/spell#hitprops)

The default value is `Hit.PierceInvis`

### `intangible_rule.element_weaknesses`

A list of [Elements](/docs/client/lua-api/element)

The default value is `{}`

### `intangible_rule.on_deactivate_func = function()`

Called when the duration runs out, or when the defense is pierced.
