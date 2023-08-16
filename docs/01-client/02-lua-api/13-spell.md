# Spell

Instance of [Entity](/client/lua-api/entity).

Spell functions are accessible to all entities, but will throw if the entity is not a Spell or [Obstacle](/client/lua-api/obstacle).

### `Spell.new(team?)`

- `team`: [Team](/client/lua-api/entity#entityset_teamteam)

Returns a new [Entity](/client/lua-api/entity) instance.

### `Spell.from(entity)`

Returns the entity passed in if the entity is a spell, otherwise returns `nil`.

### `spell:set_tile_highlight(mode)`

Sets the highlight mode for tiles the spell passes over.

See [tile:highlight()](/client/lua-api/field#tilehighlightmode)

### `spell:copy_hit_props()`

Returns a copy of the spell's [HitProps](#hitprops)

### `spell:set_hit_props(hit_props)`

- `hit_props`: [HitProps](#hitprops)

### `spell.on_collision_func = function(self, entity)`

Called when the spell hits an entity and isn't blocked by [intangibility](/client/lua-api/living#livingset_intangibleintangible-intangible_rule).

### `spell.on_attack_func = function(self, entity)`

Called after processing damage on the entity, if damage isn't blocked by [DefenseRules](/client/lua-api/living#defenserule).

## HitProps

### `HitProps.new(damage, flags, element, secondary_element, context?, drag?)`

- `damage`: integer
- `flags`: See [flags](#hit_propsflags)
- `element`: [Element](/client/lua-api/spell#element)
- `secondary_element`: [Element](/client/lua-api/spell#element)
- `context`: The value obtained by [entity:context()](/client/lua-api/entity#entitycontext)
- `drag`: [Drag](#drag) defaults to Drag.None

Returns a new HitProps instance.

### `HitProps.new(damage, flags, element, context?, drag?)`

Returns a new HitProps instance.

### `hit_props.damage`

A number, used to calculate how much health to take away from entities hit by the attack.

### `hit_props.flags`

Any of the values below, or combined using bitwise or (`|`)

- `Hit.None`
- `Hit.RetainIntangible`
- `Hit.Freeze`
- `Hit.PierceInvis`
- `Hit.Flinch`
- `Hit.Shake`
- `Hit.Paralyze`
- `Hit.Flash`
- `Hit.PierceGuard`
- `Hit.Impact`
- `Hit.Drag`
- `Hit.NoCounter`
- `Hit.Root`
- `Hit.Blind`
- `Hit.Confuse`
- `Hit.PierceGround`
- [Hit.[flag_name]](/client/packages#statuses)

### `hit_props.element`

An [Element](/client/lua-api/spell#element). If element or secondary_element is super effective against an entity's element, this attack will deal 2x damage.

### `hit_props.secondary_element`

An [Element](/client/lua-api/spell#element). If element or secondary_element is super effective against an entity's element, this attack will deal 2x damage.

### `hit_props.drag`

[Drag](#drag)

### `hit_props.context`

Context obtained by [entity:context()](/client/lua-api/entity#entitycontext)

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

### `Drag.new(direction?, count?)`

Returns a new Drag instance.

### `Drag.None`

Same as `Drag.new()`

## Hitbox

Attacks on first update then deletes self.

### `Hitbox.new(team?, damage?)`

Returns a new [Entity](/client/lua-api/entity) instance.

## SharedHitbox

Adopts the parent spell's [HitProps](#hitprops) and [Team](/client/lua-api/entity#entityset_teamteam), and attacks every frame until deleted.

The SharedHitbox's `on_collision_func` and `on_attack_func` calls the parent spell's `on_collision_func` and `on_attack_func`.

### `SharedHitbox.new(spell, duration)`

Creates a SharedHitbox.

Returns a new [Entity](/client/lua-api/entity) instance.
