# Obstacle

Instance of [Entity](/client/lua-api/entity-api/entity). All [Spell](/client/lua-api/entity-api/spell) and [Living](/client/lua-api/entity-api/living) functions are available as well.

### `Obstacle.new(team?)`

- `team`: [Team](/client/lua-api/entity-api/entity#entityset_teamteam)

Returns a new [Entity](/client/lua-api/entity-api/entity) instance.

### `Obstacle.from(entity)`

Returns the entity passed in if the entity is an obstacle, otherwise returns `nil`.
