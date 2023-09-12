# Artifact

Instance of [Entity](/client/lua-api/entity-api/entity).

### `Artifact.new(team?)`

- `team`: [Team](/client/lua-api/entity-api/entity#entityset_teamteam)

Returns a new [Entity](/client/lua-api/entity-api/entity) instance.

### `Artifact.from(entity)`

Returns the entity passed in if the entity is an artifact, otherwise returns `nil`.

### `Explosion.new(team?)`

- `team`: [Team](/client/lua-api/entity-api/entity#entityset_teamteam)

Returns a new [Entity](/client/lua-api/entity-api/entity) instance.

The entity will play an animation and sound, automatically deletes on completion.

### `Poof.new(team?)`

- `team`: [Team](/client/lua-api/entity-api/entity#entityset_teamteam)

Returns a new [Entity](/client/lua-api/entity-api/entity) instance.

The entity will play an animation, automatically deletes on completion.

### `Alert.poof(team?)`

- `team`: [Team](/client/lua-api/entity-api/entity#entityset_teamteam)

Returns a new [Entity](/client/lua-api/entity-api/entity) instance.

The entity will play an animation, automatically deletes on completion.
