# Obstacle

Instance of [Entity](/client/lua-api/entity). All [Spell](/client/lua-api/spell) and [Living](/client/lua-api/living) functions are available as well.

### `Battle.Obstacle.new(team?)`

- `team`: [Team](/client/lua-api/entity#entityset_teamteam)

Returns a new [Entity](/client/lua-api/entity) instance.

### `Battle.Obstacle.from(entity)`

Returns the entity passed in if the entity is an obstacle, otherwise returns `nil`.
