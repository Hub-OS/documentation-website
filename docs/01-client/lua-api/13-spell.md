# Spell

Instance of [Entity](/docs/client/lua-api/entity).

Spell functions are accessible to all entities, but will throw if the entity is not a Spell or [Obstacle](/docs/client/lua-api/obstacle).

### `Battle.Spell.new(team?)`

- `team`: [Team](/docs/client/lua-api/entity#entityset_teamteam)

Returns a new [Entity](/docs/client/lua-api/entity) instance.

### `Battle.Spell.from(entity)`

Returns the entity passed in if the entity is a spell, otherwise returns `nil`.

### `spell:highlight_tile(mode)`

Sets the highlight mode for tiles the spell passes over.

See [tile:highlight()](/docs/client/lua-api/tile#tilehighlightmode)

### `spell:copy_hit_props()`

Returns a copy of the spell's [HitProps](#hitprops)

### `spell:set_hit_props(hit_props)`

- `hit_props`: [HitProps](#hitprops)

### `spell.on_collision_func = function(self, entity)`

Called when the spell hits an entity and isn't blocked by [intangibility](/docs/client/lua-api/living#livingset_intangibleintangible-intangible_rule).

### `spell.on_attack_func = function(self, entity)`

Called after processing damage on the entity, if damage isn't blocked by [DefenseRules](/docs/client/lua-api/defense#defenserule).

## HitProps

### `HitProps.new(damage, flags, element, secondary_element, context?, drag)`

- `damage`: integer
- `flags` any of the values below, or combined using bitwise or (`|`)
  - `Hit.None`
  - `Hit.RetainIntangible`
  - `Hit.Freeze`
  - `Hit.PierceInvis`
  - `Hit.Flinch`
  - `Hit.Shake`
  - `Hit.Paralyze`
  - `Hit.Stun`
  - `Hit.Flash`
  - `Hit.PierceGuard`
  - `Hit.Impact`
  - `Hit.Drag`
  - `Hit.Bubble`
  - `Hit.NoCounter`
  - `Hit.Root`
  - `Hit.Blind`
  - `Hit.Confuse`
  - `Hit.PierceGround`
- `element`: [Element](/docs/client/lua-api/spell#element)
- `secondary_element`: [Element](/docs/client/lua-api/spell#element)
- `context`: The value obtained by [entity:get_context()](/docs/client/lua-api/entity#entityget_context)
- `drag`: [Drag](#drag)

Returns a new HitProps instance.

### `HitProps.new(damage, flags, element, context?, drag)`

Returns a new HitProps instance.

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

### `Battle.Hitbox.new(team?, damage?)`

Returns a new [Entity](/docs/client/lua-api/entity) instance.

## SharedHitbox

Adopts the parent spell's [HitProps](#hitprops) and [Team](/docs/client/lua-api/entity#entityset_teamteam), and attacks every frame until deleted.

The SharedHitbox's `on_collision_func` and `on_attack_func` calls the parent spell's `on_collision_func` and `on_attack_func`.

### `Battle.SharedHitbox.new(spell, duration)`

Creates a SharedHitbox.

Returns a new [Entity](/docs/client/lua-api/entity) instance.
