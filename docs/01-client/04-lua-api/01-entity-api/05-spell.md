# Spell

Instance of [Entity](/client/lua-api/entity-api/entity).

Spell functions are accessible to all entities, but will throw if the entity is not a Spell or [Obstacle](/client/lua-api/entity-api/obstacle).

### `Spell.new(team?)`

- `team`: [Team](/client/lua-api/entity-api/entity#entityset_teamteam)

Returns a new [Entity](/client/lua-api/entity-api/entity) instance.

### `Spell.from(entity)`

Returns the entity passed in if the entity is a spell, otherwise returns `nil`.

### `spell:set_tile_highlight(highlight)`

Sets the highlight mode for tiles the spell passes over.

See [tile:set_highlight()](/client/lua-api/field-api/tile#tileset_highlighthighlight)

### `spell:copy_hit_props()`

Returns a copy of the spell's [HitProps](/client/lua-api/attack-api/hit-props)

### `spell:set_hit_props(hit_props)`

- `hit_props`: [HitProps](/client/lua-api/attack-api/hit-props)

### `spell:attack_tile(tile?)`

Attack entities on the target tile, defaults to the spell's current tile.

If this function is called on every frame by this spell, attacks queued for the same tile will be ignored after the first frame hits occur in.

To allow a spell to hit multiple times on the same tile, calls to this function should be skipped for at least a frame, or a new spell should be spawned to perform the attack.

See [SharedHitbox](#sharedhitbox) for a convenience spell to handle attacks.

### `spell:attack_tiles(tiles)`

Same as calling [spell:attack_tile(tile)](#spellattack_tiletile) for each tile.

### `spell.on_collision_func = function(self, entity)`

Called when the spell hits an entity and isn't blocked by [intangibility](/client/lua-api/entity-api/living#livingset_intangibleintangible-intangible_rule).

Commonly used by spells that delete on collision.

### `spell.on_attack_func = function(self, entity)`

Called after processing defenses on the hit entity, if damage isn't blocked by [DefenseRules](/client/lua-api/defense-api/defense-rule).

Commonly used for spawning hit particles or applying secondary effects.

## Hitbox

Attacks on first update then deletes self.

### `Hitbox.new(team?, damage?)`

Returns a new [Entity](/client/lua-api/entity-api/entity) instance.

## SharedHitbox

Adopts the parent spell's [HitProps](/client/lua-api/attack-api/hit-props) and [Team](/client/lua-api/entity-api/entity#entityset_teamteam). Attacks every frame until deleted.

The SharedHitbox's `on_collision_func` and `on_attack_func` calls the parent spell's `on_collision_func` and `on_attack_func`.

### `SharedHitbox.new(spell, duration?)`

- `duration`: The amount of frames this spell should exist for. If unset, it will require manual deletion.

Creates a SharedHitbox.

Returns a new [Entity](/client/lua-api/entity-api/entity) instance.
