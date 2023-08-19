# AuxProp

AuxProps are structures for generating conditional behavior that composes well with other AuxProps, without requiring writers to be aware of all content to avoid ordering conflicts. AuxProps achieves this using a priority system that uses the effect and requirements to generate a clear order for behavior.

AuxProps can only be tied to a single entity and can not be updated once bound. To update an AuxProp it must be removed and added again.

### `AuxProp.new()`

Returns a new AuxProp. Attach to an entity with [living:add_aux_prop()](/client/lua-api/living#livingadd_aux_propaux_prop) and remove with [living:add_aux_prop()](/client/lua-api/living#livingremove_aux_propaux_prop)

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

All hit related requirements will use hit properties after [DefenseRule](/client/lua-api/living#defenserule) modification and before AuxProp modification.

### `aux_prop:require_interval(frames)`

- Interval priority
- `frames`: number

The AuxProp can pass if `battle_frame_time % frames == 0`

In the future the AuxProp will store an internal timer that starts as soon as it is attached, increments every battle frame, passing the test on the first frame and at each interval.

### `aux_prop:require_hit_element(element)`

- Hit priority
- `element`: [Element](/client/lua-api/spell#element)

The AuxProp will check the incoming hit's element and secondary element of incoming hits for a match.

### `aux_prop:require_hit_element_is_weakness()`

- Hit priority

The AuxProp will check the incoming hit's element and secondary element to see if the attached entity's element is weak to either element.

### `aux_prop:require_hit_flag(hit_flags)`

- Hit priority
- `hit_flags`: [Hit](/client/lua-api/spell#hit_propsflags)

The AuxProp will check the incoming hit's [flags](/client/lua-api/spell#hit_propsflags) to see if all matching flags apply.

### `aux_prop:require_hit_damage(compare, damage)`

- Hit priority
- `compare`: [Compare](#compare)
- `damage`: number

The AuxProp will check the incoming hit's [damage](/client/lua-api/spell#hit_propsdamage).

### `aux_prop:require_projected_hit_damage(expr, compare, damage)`

- Hit priority
- `expr`: An [AuxMath](#auxmath) expression, `"DAMAGE"` will represent the damage value for the current hit.
- `compare`: [Compare](#compare)
- `damage`: number

The AuxProp will check the incoming hit's [damage](/client/lua-api/spell#hit_propsdamage).

### `aux_prop:require_total_damage(compare, damage)`

- Hit priority
- `compare`: [Compare](#compare)
- `damage`: number

The AuxProp will check the total incoming damage from all hits in the current frame.

### `aux_prop:require_element(element)`

- Body priority
- `element`: [Element](/client/lua-api/spell#element)

The AuxProp will check the attached entity for matching element.

### `aux_prop:require_emotion(emotion)`

- Body priority
- `emotion`: string

The AuxProp will check the attached entity for matching emotion.

### `aux_prop:require_projected_health_threshold(expr, compare, percentage)`

- HP Expression priority
- `expr`: An [AuxMath](#auxmath) expression, `"DAMAGE"` will represent the total damage value for all incoming hits.
- `compare`: [Compare](#compare)
- `percentage`: a number in range [0, 1]

The AuxProp will compare the result of the expression divided by the entity's max_health against `percentage`.

### `aux_prop:require_projected_health(health)`

- HP Expression priority
- `expr`: An [AuxMath](#auxmath) expression, `"DAMAGE"` will represent the total damage value for all incoming hits.
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

- Status Immunity
- Apply Status
- Remove Status
- Increase Hit Damage
- Decrease Hit Damage
- Decrease Damage Total
- Drain Health
- Recover Health
- No Effect

### `aux_prop:declare_immunity(hit_flags)`

- Status Immunity priority
- `hit_flags`: [Hit](/client/lua-api/spell#hit_propsflags)

Declares immunity for incoming hits this frame, will not remove existing statuses.

### `aux_prop:apply_status(hit_flag, duration)`

- Apply Status priority
- `hit_flag`: [Hit](/client/lua-api/spell#hit_propsflags)
- `duration`: number, how many game frames the effect should last

Applies a status to the entity.

### `aux_prop:remove_status(hit_flag)`

- Remove Status priority
- `hit_flag`: [Hit](/client/lua-api/spell#hit_propsflags)

Removes an existing status on the entity, won't affect incoming hits.

### `aux_prop:increase_hit_damage(expr)`

- Increase Hit Damage priority
- `expr`: An [AuxMath](#auxmath) expression, `"DAMAGE"` will represent the damage value for the current hit.

The difference in the result of `expr` and the incoming hit's damage will be used to update the total incoming damage.

If the result is less than the incoming hit's damage, a warning will be logged.

### `aux_prop:decrease_hit_damage(expr)`

- Decrease Hit Damage priority
- `expr`: An [AuxMath](#auxmath) expression, `"DAMAGE"` will represent the damage value for the current hit.

The difference in the result of `expr` and the incoming hit's damage will be used to update the total incoming damage.

If the result is less than the incoming hit's damage, a warning will be logged.

### `aux_prop:decrease_total_damage(expr)`

- Decrease Damage Total priority
- `expr`: An [AuxMath](#auxmath) expression, `"DAMAGE"` will represent the total damage value for all incoming hits.

The result of `expr` will be used to modify the total incoming damage.

If the total damage was previously not zero the final total damage will have a minimum value of 1.

### `aux_prop:drain_health(health)`

- Drain Health priority
- `health`: the amount of health to take away

### `aux_prop:recover_health(health)`

- Recover Health priority
- `health`: the amount of health to restore

## AuxMath

Math expressions for AuxProps that are evalulated later in time.

Acceptable values for anything accepting AuxMath:

- Numbers
- Strings representing variables:
  - `"HEALTH"`: The attached entities health.
  - `"MAX_HEALTH"`: The attached entities max health.
  - `"DAMAGE"`: Context dependent damage value, either from a single hit or the total of all hits.
- The result of a function returning an AuxMath value (defined below)
  - Results of these functions can be chained: `AuxMath.sub(AuxMath.add(1, 3), 2)` and `AuxMath.add(1, 3):sub(2)` have the same result.

### `AuxMath.add(a, b)`

Returns an AuxMath expression representing `a + b`

### `AuxMath.sub(a, b)`

Returns an AuxMath expression representing `a - b`

### `AuxMath.mul(a, b)`

Returns an AuxMath expression representing `a * b`

### `AuxMath.div(a, b)`

Returns an AuxMath expression representing `a / b`

### `AuxMath.mod(a, b)`

Returns an AuxMath expression representing `a % b`

### `AuxMath.abs(a)`

Returns an AuxMath expression representing `math.abs(a)`

### `AuxMath.sign(a)`

Returns an AuxMath expression that calculates the sign of `a`

- `a < 0` will evalulate to -1
- `a == 0` will evalulate to 0
- `a > 0` will evalulate to 1

### `AuxMath.clamp(a, b, c)`

Returns an AuxMath expression that keeps `a` between `b` and `c`

- `a < b` will evalulate to `b`
- `a > c` will evalulate to `c`
- Otherwise it will evalulate to `a`

### `AuxMath.eval(expr, variables?)`

- `expr`: an AuxMath expression
- `variables`: a table mapping variable names to values

```lua
local variables = {
  a = 3,
  b = 1
}

-- lua
print((3 + 2) - 1) -- 4

-- chaining
print(AuxMath.add(3, 2):sub(1):eval()) -- 4

-- variables, chaining
print(AuxMath.add("a", 2):sub("b"):eval(variables)) -- 4

-- variables, no chaining
print(AuxMath.eval(AuxMath.sub(AuxMath.add("a", 2), "b"), variables)) -- 4
```

## Compare

- `Compare.LT`
  - Less Than <
- `Compare.LE`
  - Less Than Equal <=
- `Compare.NE`
  - Not Equal ~=
- `Compare.EQ`
  - Equal ==
- `Compare.GT`
  - Greater Than >
- `Compare.GE`
  - Greater Than Equal >=
