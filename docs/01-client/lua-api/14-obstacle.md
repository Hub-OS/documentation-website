# Obstacle

Instance of [Entity](/docs/client/lua-api/entity). All [Spell](/docs/client/lua-api/spell) and [Living](/docs/client/lua-api/living) functions are available as well.

### `Battle.Obstacle.new(team?)`

- `team`: [Team](/docs/client/lua-api/entity#entityset_teamteam)

Returns a new [Entity](/docs/client/lua-api/entity) instance.

### `Battle.Obstacle.from(entity)`

Returns the entity passed in if the entity is an obstacle, otherwise returns `nil`.
