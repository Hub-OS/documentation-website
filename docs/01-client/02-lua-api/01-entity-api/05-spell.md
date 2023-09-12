# Spell

Instance of [Entity](/client/lua-api/entity-api/entity).

Spell functions are accessible to all entities, but will throw if the entity is not a Spell or [Obstacle](/client/lua-api/entity-api/obstacle).

### `Spell.new(team?)`

- `team`: [Team](/client/lua-api/entity-api/entity#entityset_teamteam)

Returns a new [Entity](/client/lua-api/entity-api/entity) instance.

### `Spell.from(entity)`

Returns the entity passed in if the entity is a spell, otherwise returns `nil`.

### `spell:set_tile_highlight(mode)`

Sets the highlight mode for tiles the spell passes over.

See [tile:highlight()](/client/lua-api/field-api/field#tilehighlightmode)

### `spell:copy_hit_props()`

Returns a copy of the spell's [HitProps](/client/lua-api/attack-api/hit-props)

### `spell:set_hit_props(hit_props)`

- `hit_props`: [HitProps](/client/lua-api/attack-api/hit-props)

### `spell.on_collision_func = function(self, entity)`

Called when the spell hits an entity and isn't blocked by [intangibility](/client/lua-api/entity-api/living#livingset_intangibleintangible-intangible_rule).

### `spell.on_attack_func = function(self, entity)`

Called after processing damage on the entity, if damage isn't blocked by [DefenseRules](/client/lua-api/defense-api/defense-rule).

## Hitbox

Attacks on first update then deletes self.

### `Hitbox.new(team?, damage?)`

Returns a new [Entity](/client/lua-api/entity-api/entity) instance.

## SharedHitbox

Adopts the parent spell's [HitProps](/client/lua-api/attack-api/hit-props) and [Team](/client/lua-api/entity-api/entity#entityset_teamteam), and attacks every frame until deleted.

The SharedHitbox's `on_collision_func` and `on_attack_func` calls the parent spell's `on_collision_func` and `on_attack_func`.

### `SharedHitbox.new(spell, duration)`

Creates a SharedHitbox.

Returns a new [Entity](/client/lua-api/entity-api/entity) instance.
