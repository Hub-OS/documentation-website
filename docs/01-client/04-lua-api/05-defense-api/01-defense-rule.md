# DefenseRule

See [living:add_defense_rule()](/client/lua-api/entity-api/living#livingadd_defense_ruledefense_rule)

### `DefenseRule.new(defense_priority, defense_order)`

- `priority`
  - `DefensePriority.Barrier`
  - `DefensePriority.Body`
  - `DefensePriority.Action`
  - `DefensePriority.Trap`
    - Additionally causes all players to see `????` in the UI
  - `DefensePriority.Last`
- `defense_order`
  - `DefenseOrder.Always`
  - `DefenseOrder.CollisionOnly`

Adding a DefenseRule to an entity when a DefenseRule already exists with the same priorty will replace the existing rule.

Returns a new DefenseRule.

### `defense_rule:replaced()`

Returns true if a DefenseRule with the same priority replaced this rule.

### `defense_rule.on_replace_func = function()`

Called when a DefenseRule with the same priority replaced this rule.

### `defense_rule.defense_func = function(defense, attacker, defender, hit_props)`

If the defense order is `DefenseOrder.Always`, this function will be called on every hit.

If the defense order is `DefenseOrder.CollisionOnly`, this function will be called after intangibility is determined to not block the attack.

- `defense`: [Defense](#defense)
- `attacker`: [Entity](/client/lua-api/entity-api/entity)
- `defender`: [Entity](/client/lua-api/entity-api/entity)
- `hit_props`: [HitProps](/client/lua-api/attack-api/hit-props)

### `defense_rule.filter_func = function(hit_props): HitProps`

Called before applying damage and statuses to the entity.

Should return [HitProps](/client/lua-api/attack-api/hit-props)

The return value replaces the HitProps applied to the entity.

## Defense

Created for each attack resolution and passed through DefenseRule callbacks.

### `defense:block_damage()`

Prevents damage and statuses from applying to the defending entity.

### `defense:block_impact()`

Used to mark `Hit.Impact` as handled / retaliated.

Does not strip `Hit.Impact`.

### `defense:damage_blocked()`

Returns true if `defense:block_damage()` was called.

### `defense:impact_blocked()`

Returns true if `defense:block_impact()` was called.
