# Character

Instance of [Entity](/docs/client/lua-api/entity). All [Living](/docs/client/lua-api/living) functions are available as well.

Character functions are accessible to all entities, but will throw if the entity is not a Character, [Player](/docs/client/lua-api/player), or [Obstacle](/docs/client/lua-api/obstacle).

### `Battle.Character.from(entity)`

Returns the entity passed in if the entity is a character or player, otherwise returns `nil`.

### `Battle.Character.from_package(package_id, team, rank)`

- `package_id`: string, the package id of the character
- `team`: [Team](/docs/client/lua-api/team)
- `rank`
  - `Rank.V1`
  - `Rank.V2`
  - `Rank.V3`
  - `Rank.V4`
  - `Rank.V5`
  - `Rank.SP`
  - `Rank.EX`
  - `Rank.Rare1`
  - `Rank.Rare2`
  - `Rank.NM`
  - `Rank.RV`
  - `Rank.DS`
  - `Rank.Alpha`
  - `Rank.Beta`
  - `Rank.Omega`
  - `Rank.Sigma`

Returns the entity passed in if the entity is a character or player, otherwise returns `nil`.

### `Character:get_rank()`

Returns the character's rank.
