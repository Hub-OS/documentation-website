# AuxProp

AuxProps are structures for generating conditional behavior that composes well with other AuxProps, without requiring writers to be aware of all content to avoid ordering conflicts. AuxProps achieves this using a priority system that uses the effect and requirements to generate a clear order for behavior.

AuxProps can only be tied to a single entity and can not be updated once bound. To update an AuxProp it must be removed and added again.

### `AuxProp.new()`

Returns a new AuxProp. Attach to an entity with [living:add_aux_prop()](/client/lua-api/entity-api/living#livingadd_aux_propaux_prop) and remove with [living:add_aux_prop()](/client/lua-api/entity-api/living#livingremove_aux_propaux_prop)

All AuxProp methods return the AuxProp for chaining.

### `aux_prop:once()`

Allows the AuxProp to auto remove after it's effects are first applied.

### `aux_prop:immediate()`

Allows the AuxProp to auto remove after a single test run, approximately a single battle frame.

### `aux_prop:with_callback(callback)`

The callback will be called shortly after the AuxProp's effect is applied. Multiple callbacks can be added to a single AuxProp.

## AuxProp Requirements

An AuxProp can have zero or more requirements. Every requirement must pass on the same test run (approximately a single battle frame) to execute [effects](#auxprop-effects) and callbacks.

The requirements affect the final priority of the AuxProp.
The lowest requirement priority is used as a secondary priority when multiple [effects](#auxprop-effects) have the same priority.
The lower the priority is in the list, the later it will execute.

- Unconditional
- Interval
- Hit
- Body
- HP Expression
- HP GE
- HP LE

All hit related requirements will use hit properties after [DefenseRule](/client/lua-api/defense-api/defense-rule) modification and before AuxProp modification.

### `aux_prop:require_interval(frames)`

- Interval priority
- `frames`: number

The AuxProp can pass if `battle_frame_time % frames == 0`

In the future the AuxProp will store an internal timer that starts as soon as it is attached, increments every battle frame, passing the test on the first frame and at each interval.

### `aux_prop:require_hit_element(element)`

- Hit priority
- `element`: [Element](/client/lua-api/attack-api/hit-props#element)

The AuxProp will check the incoming hit's element and secondary element of incoming hits for a match.

### `aux_prop:require_hit_element_is_weakness()`

- Hit priority

The AuxProp will check the incoming hit's element and secondary element to see if the attached entity's element is weak to either element.

### `aux_prop:require_hit_flag(hit_flags)`

- Hit priority
- `hit_flags`: [Hit](/client/lua-api/attack-api/hit-props#hit_propsflags)

The AuxProp will check the incoming hit's [flags](/client/lua-api/attack-api/hit-props#hit_propsflags) to see if all matching flags apply.

### `aux_prop:require_hit_damage(compare, damage)`

- Hit priority
- `compare`: [Compare](#compare)
- `damage`: number

The AuxProp will check the incoming hit's [damage](/client/lua-api/attack-api/hit-props#hit_propsdamage).

### `aux_prop:require_projected_hit_damage(expr, compare, damage)`

- Hit priority
- `expr`: [Math Expression String](#math-expression-strings), `"DAMAGE"` will represent the damage value for the current hit.
- `compare`: [Compare](#compare)
- `damage`: number

The AuxProp will check the incoming hit's [damage](/client/lua-api/attack-api/hit-props#hit_propsdamage).

### `aux_prop:require_total_damage(compare, damage)`

- Hit priority
- `compare`: [Compare](#compare)
- `damage`: number

The AuxProp will check the total incoming damage from all hits in the current frame.

### `aux_prop:require_element(element)`

- Body priority
- `element`: [Element](/client/lua-api/attack-api/hit-props#element)

The AuxProp will check the attached entity for matching element.

### `aux_prop:require_negative_tile_interaction()`

- Body priority

The AuxProp will check `entity:ignoring_negative_tile_effects() == false`.

### `aux_prop:require_emotion(emotion)`

- Body priority
- `emotion`: string

The AuxProp will check the attached entity for matching emotion.

### `aux_prop:require_charged_card()`

- Body priority

The AuxProp will require a [Player](/client/lua-api/entity-api/player) to be holding a fully [charged](/client/lua-api/entity-api/player#playercan_charge_card_func--functioncard_properties-boolean) card.

### `aux_prop:require_card_element(element)`

- Body priority
- `element`: [Element](/client/lua-api/attack-api/hit-props#element)

The AuxProp will check the next card on the attached entity for either matching element or secondary element.

### `aux_prop:require_card_not_element(element)`

- Body priority
- `element`: [Element](/client/lua-api/attack-api/hit-props#element)

The AuxProp will check the next card on the attached entity for a failed match with both element and secondary element.

### `aux_prop:require_card_damage(compare, damage)`

- Body priority
- `compare`: [Compare](#compare)
- `damage`: number

The AuxProp will compare the damage on the next card on the attached entity against the `damage` value.

### `aux_prop:require_card_recover(compare, recover)`

- Body priority
- `compare`: [Compare](#compare)
- `recover`: number

The AuxProp will compare the recover amount on the next card on the attached entity against the `recover` value.

### `aux_prop:require_card_hit_flags(hit_flags)`

- Body priority
- `hit_flags`: [Hit](/client/lua-api/attack-api/hit-props#hit_propsflags)

The AuxProp will check the next card on the attached entity for matching hit flags.

### `aux_prop:require_card_code(code)`

- Body priority
- `code`: string

The AuxProp will check the next card on the attached entity for matching code.

### `aux_prop:require_card_class(card_class)`

- Body priority
- `card_class`: [CardClass](/client/lua-api/attack-api/cards#card_propertiescard_class)

The AuxProp will check the next card on the attached entity for matching class.

### `aux_prop:require_card_time_freeze(time_freeze)`

- Body priority
- `time_freeze`: bool

The AuxProp will check the time freeze value on the next card on the attached entity.

### `aux_prop:require_card_tag(tag)`

- Body priority
- `tag`: string

The AuxProp will check the next card on the attached entity for matching tag.

### `aux_prop:require_projected_health_threshold(expr, compare, percentage)`

- HP Expression priority
- `expr`: [Math Expression String](#math-expression-strings), `"DAMAGE"` will represent the total damage value for all incoming hits.
- `compare`: [Compare](#compare)
- `percentage`: a number in range [0, 1]

The AuxProp will compare the result of the expression divided by the entity's max_health against `percentage`.

### `aux_prop:require_projected_health(expr, compare, health)`

- HP Expression priority
- `expr`: [Math Expression String](#math-expression-strings), `"DAMAGE"` will represent the total damage value for all incoming hits.
- `compare`: [Compare](#compare)
- `health`: a number

The AuxProp will compare the result of the expression against `health`.

### `aux_prop:require_health_threshold(compare, percentage)`

- HP GE or HP LE priority depending on `compare`
- `compare`: [Compare](#compare)
- `percentage`: a number in range [0, 1]

The AuxProp will compare the entity's health divided by it's max health against `percentage`.

### `aux_prop:require_health(compare, health)`

- HP GE or HP LE priority depending on `compare`
- `compare`: [Compare](#compare)
- `health`: a number

The AuxProp will compare the entity's health against `health`.

## AuxProp Effects

An AuxProp can have one optional effect (but still have multiple callbacks). The type of effect has a strong influence over the priority and execution order of the effect.

The lower the priority is in the list, the later it will execute.

- Increase Card Damage
- Increase Card Multiplier
- Intercept Action
- Interrupt Action
- Status Immunity
- Apply Status
- Remove Status
- Increase Hit Damage
- Decrease Hit Damage
- Decrease Damage Total
- Drain Health
- Recover Health
- No Effect

### `aux_prop:increase_card_damage(increase)`

- Increase Card Damage priority
- `increase`: number, the amount to increase the card damage before multiplying.

### `aux_prop:increase_card_multiplier(increase)`

- Increase Card Multiplier priority
- `increase`: number, the amount to increase the multiplier by.

### `aux_prop:intercept_action(function(action): Action|nil)`

- Intercept Action priority

Intercepts an Action moving off the action queue for execution. Returning a different Action or nil in the callback will cancel and delete the Action. `aux_prop:require_card_*` will refer to properties on the Action.

### `aux_prop:interrupt_action(function(action))`

- Interrupt Action priority

Interrupts an Action that is about to execute or has executed. The Action will be deleted after the callback finishes.
`aux_prop:require_card_*` will refer to properties on the Action.

### `aux_prop:declare_immunity(hit_flags)`

- Status Immunity priority
- `hit_flags`: [Hit](/client/lua-api/attack-api/hit-props#hit_propsflags)

Declares immunity for incoming hits this frame, will not remove existing statuses.

### `aux_prop:apply_status(hit_flag, duration)`

- Apply Status priority
- `hit_flag`: [Hit](/client/lua-api/attack-api/hit-props#hit_propsflags)
- `duration`: number, how many game frames the effect should last

Applies a status to the entity.

### `aux_prop:remove_status(hit_flag)`

- Remove Status priority
- `hit_flag`: [Hit](/client/lua-api/attack-api/hit-props#hit_propsflags)

Removes an existing status on the entity, won't affect incoming hits.

### `aux_prop:increase_hit_damage(expr)`

- Increase Hit Damage priority
- `expr`: [Math Expression String](#math-expression-strings), `"DAMAGE"` will represent the damage value for the current hit before any modifications.

The result of `expr` will be added to the total incoming damage.

If the result is negative, it will be clamped to 0.

### `aux_prop:decrease_hit_damage(expr)`

- Decrease Hit Damage priority
- `expr`: [Math Expression String](#math-expression-strings), `"DAMAGE"` will represent the damage value for the current hit before any modifications.

The result of `expr` will be subtracted from the total incoming damage.

If the result is negative, it will be clamped to 0.

Note: To entirely negate damage a defense rule must be used.

### `aux_prop:decrease_total_damage(expr)`

- Decrease Damage Total priority
- `expr`: [Math Expression String](#math-expression-strings), `"DAMAGE"` will represent the total damage value for all incoming hits.

The result of `expr` will be subtracted from the total incoming damage.

If the total damage was previously not zero the final total damage will have a minimum value of 1.

### `aux_prop:drain_health(health)`

- Drain Health priority
- `health`: the amount of health to take away

### `aux_prop:recover_health(health)`

- Recover Health priority
- `health`: the amount of health to restore

## Math Expression Strings

Math expressions that are evalulated later in time.

### Examples

```lua
-- undershirt
local aux_prop = AuxProp.new()
  :require_total_damage(Compare.GT, 0)
  :decrease_total_damage("clamp(DAMAGE, 1, HEALTH - 1)")

entity:add_aux_prop(aux_prop)
```

### Supported Values

- Numbers with optional sign and decimal: `-1.2`, `2`, `3.0`
- Built-in variables:
  - `HEALTH`: The attached entities health.
  - `MAX_HEALTH`: The attached entities max health.
  - `DAMAGE`: Context dependent damage value, either from a single hit or the total of all hits.

### Supported Operations

- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Modulus / Remainder

### Supported Functions

- `clamp(value, min, max)`
- `abs(value)`
- `sign(value)`

## Compare

- `Compare.LT`
  - Less Than `<`
- `Compare.LE`
  - Less Than Equal `<=`
- `Compare.NE`
  - Not Equal `~=`
- `Compare.EQ`
  - Equal `==`
- `Compare.GT`
  - Greater Than `>`
- `Compare.GE`
  - Greater Than Equal `>=`

## StandardEnemyAux

### `StandardEnemyAux.new()`

Returns an AuxProp that provides `Hit.Flash` immunity.
