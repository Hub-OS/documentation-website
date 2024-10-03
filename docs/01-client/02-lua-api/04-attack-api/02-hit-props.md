# HitProps

See [spell:set_hit_props()](/client/lua-api/entity-api/spell#spellset_hit_propshit_props)

### `HitProps.new(damage, flags, element, secondary_element, context?, drag?)`

- `damage`: integer
- `flags`: See [flags](#hit_propsflags)
- `element`: [Element](/client/lua-api/attack-api/hit-props#element)
- `secondary_element`: [Element](/client/lua-api/attack-api/hit-props#element)
- `context`: An [AttackContext](#attackcontext) (obtained by [entity:context()](/client/lua-api/entity-api/entity#entitycontext))
- `drag`: [Drag](#drag) defaults to Drag.None

Returns a new HitProps instance.

### `HitProps.new(damage, flags, element, context?, drag?)`

Returns a new HitProps instance.

### `HitProps.from_card(card_properties, context?, drag?)`

Returns a new HitProps instance.

### `hit_props.damage`

A number, used to calculate how much health to take away from entities hit by the attack.

### `hit_props.flags`

Any of the values below, or combined using bitwise or (`|`)

- `Hit.None`
- `Hit.RetainIntangible` prevents intangibility from being lost if the attack pierces.
- `Hit.NoCounter` prevents the attack from countering.
- `Hit.Drag` Allows the [drag property](#hit_propsdrag) to drag the entity.
- `Hit.Impact` allows the attack to counter the entity and causes the entity to appear white for one frame.
- `Hit.Flinch` read by the hit entity to cancel attacks and play a flinch animation.
- `Hit.Flash` applies the default intangible rule to the hit entity and flickers the entity's sprite.
- `Hit.Shake` causes the hit entity to shake.
- `Hit.PierceInvis` read by defense rules to pierce defenses.
- `Hit.PierceGuard` read by defense rules to pierce defenses.
- `Hit.PierceGround` read by defense rules to pierce defenses.
- `Hit.Freeze` applies freeze status on hit.
- `Hit.Paralyze` applies paralyze status on hit.
- `Hit.Root` applies root status on hit.
- `Hit.Blind` applies blindness status on hit.
- `Hit.Confuse` applies confusion status on hit.
- [Hit.[flag_name]](/client/packages#statuses)

### `hit_props.status_durations`

A table that maps frame durations for status hit flags.

See [Hit.duration_for()](#hitduration_forhit_flag-level)

### `hit_props.element`

An [Element](/client/lua-api/attack-api/hit-props#element). If element or secondary_element is super effective against an entity's element, this attack will deal 2x damage.

### `hit_props.secondary_element`

An [Element](/client/lua-api/attack-api/hit-props#element). If element or secondary_element is super effective against an entity's element, this attack will deal 2x damage.

### `hit_props.drag`

[Drag](#drag)

### `hit_props.context`

The [AttackContext](#attackcontext) obtained by [entity:context()](/client/lua-api/entity-api/entity#entitycontext)

## Hit

### `Hit.duration_for(hit_flag, level)`

-`level`: Starts at level 1, clamps to valid (defined) duration levels.
Durations are specified in [Status Packages](/client/packages#statuses)

Returns the duration in frames for a status effect at a specific level, or `1` if no durations are specified.

### `Hit.mutual_exclusions_for(hit_flag)`

Returns a number, representing all of the mutually exclusive hit flags for bit manipulation.

## Element

- `Element.None`
- `Element.Fire`
- `Element.Aqua`
- `Element.Elec`
- `Element.Wood`
- `Element.Sword`
- `Element.Wind`
- `Element.Cursor`
- `Element.Summon`
- `Element.Plus`
- `Element.Break`

## Drag

### `Drag.new(direction?, distance?)`

Returns a new Drag instance.

### `Drag.None`

Returns a new Drag instance.

Same as `Drag.new()`

### `drag.direction`

Direction, the direction to move the entity.

### `drag.distance`

Number, the amount of tiles to drag the entity.

## AttackContext

Data tracking the attacker and [HitProps](#hitprops) overrides.
Obtained by [entity:context()](/client/lua-api/entity-api/entity#entitycontext) and passed through HitProps.
Updates when a player or character starts an attack, or when HitProps are set on an entity.
By default, the context is used by the engine to pass flags related to countering, see [living:set_counterable()](/client/lua-api/entity-api/living#livingset_counterableenabled).

### `context.aggressor`

The EntityId of the attacking entity.

### `context.flags`

See [HitProps.flags](#hit_propsflags)

### `context.status_durations`

A table that maps frame durations for status hit flags.

See [Hit.duration_for()](#hitduration_forhit_flag-level)

### `context.drag`

[Drag](#drag)
