# Packages

## Augments

Expects a `package.toml` file

```toml
[package]
category = "augment" # must match
id = "dev.konstinople.augment.Attack1.bn6" # must be unique
past_ids = [] # optional, list of strings
name = "Attack+1"
description = "MegaBstr\nAttck +1"
long_description = "" # optional
preview_texture_path = "preview.png" # optional
health_boost = 0 # optional, default is 0
attack_boost = 1 # optional, default is 0
rapid_boost = 0 # optional, default is 0
charge_boost = 0 # optional, default is 0
mega_boost = 0 # optional, default is 0
giga_boost = 0 # optional, default is 0
dark_boost = 0 # optional, default is 0
hand_size_boost = 0 # optional, default is 0
priority = false # optional, default is false, this allows the augment to override behavior on forms

# optional, list of strings, custom
# some tags will be automatically added: "BLOCK", "FLAT_BLOCK"
tags = ["BUG"]

## switch drive specific
# valid slots: "Head" | "Arms" | "Body" | "Legs"
slot = "Arms"

## block specific
# list of colors, case insensitive
# valid colors: "red" | "green" | "blue" | "pink" | "yellow" | "white"
colors = ["pink", "red", "blue"]
flat = false # optional, defaults to false
# list of lists, 5x5, filled with 0 or 1s to represent the shape
shape = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
# list of package ids
# used when two augments of the same color touch on a grid
# or when an augment on a grid is out of bounds
# any package ids here must also be marked as a dependency
byproducts = []
prevent_byproducts = false # optional, defaults to false, prevents all blocks from creating byproducts
limit = 9 # optional, defaults to 9

# this section is optional, see the Battle section for an example
[defines]
characters = []

# this section is optional
[dependencies]
augments = [] # optional, list of package ids
encounters = [] # optional, list of package ids
cards = [] # optional, list of package ids, must also depend on defining package
characters = [] # optional, list of package ids
libraries = [] # optional, list of package ids
statuses = [] # optional, list of package ids
tile_states = [] # optional, list of package ids
```

Expects an `entry.lua` file. See [Augment](/client/lua-api/entity-api/player#augment)

```lua
---@param augment Augment
function augment_init(augment)
end
```

## Encounters

Expects a `package.toml` file

```toml
[package]
category = "encounter" # must match
id = "konstinople.cactikil" # must be unique
past_ids = [] # optional, list of strings
name = "Cactikil"
description = 'Cactikil, known as "Sabotekoron" in Japan, is a cactus'
long_description = "" # optional
preview_texture_path = "preview.png"

## recording specific
recording_path = "recording.dat"
recording_overrides = []

# this section is optional
[defines]
characters = [
  { id = "konstinople.enemy.cactikil", path = "cactikil" },
  { id = "konstinople.enemy.cactroll", path = "cactroll" },
  { id = "konstinople.enemy.cacter", path = "cacter" },
]

# this section is optional
[dependencies]
augments = [] # optional, list of package ids
encounters = [] # optional, list of package ids
cards = [] # optional, list of package ids, must also depend on defining package
characters = [] # optional, list of package ids
libraries = [] # optional, list of package ids
statuses = [] # optional, list of package ids
tile_states = [] # optional, list of package ids
```

Expects an `entry.lua` file. See [Encounter](/client/lua-api/field-api/encounter)

```lua
---@param encounter Encounter
function encounter_init(encounter)
end
```

## Characters

Expects an `entry.lua` file. See [Character](/client/lua-api/entity-api/character)

```lua
---@param character Entity
function character_init(character)
end
```

## Cards

Expects a `package.toml` file

```toml
[package]
category = "card" # must match
id = "konstinople.card.AreaEater" # must be unique
past_ids = [] # optional, list of strings
name = "AreaEatr"
icon_texture_path = "icon.png" # 14x14
preview_texture_path = "preview.png"
description = "Beast steals panels!" # optional, used in preview
long_description = "Beast steals panels!" # optional, used in battle
damage = 100 # optional, defaults to 0
recover = 0 # optional, defaults to 0
dynamic_damage = false # optional, displays ??? in the library and resolves with card_dynamic_damage() during battle
# "none" | "fire" | "aqua" | "elec" | "wood" | "sword" |
# "wind" | "cursor" | "summon" | "plus" | "break"
element = "sword" # optional, defaults to "none"
secondary_element = "none" # optional, defaults to "none"
codes = ['A', 'O', 'X']
card_class = "giga" # optional, "standard" | "mega"| "giga" | "dark" | "recipe"
regular_allowed = false # optional, defaults to true for "standard" cards
limit = 3 # optional, defaults to 5
# optional, case sensitive
# for valid values, see: https://docs.hubos.dev/client/lua-api/attack-api/hit-props#hit_propsflags
hit_flags = ["Flinch", "Flash"]
# optional, defaults to a duration matching level 1 for all statuses
status_durations = [
  { flag_name = "Flash", level = 1 },
  # or
  { flag_name = "Flash", duration = 300 }
]
can_boost = true # optional, defaults to true
can_charge = true # optional, defaults to true
time_freeze = true # optional, defaults to false
skip_time_freeze_intro = false # optional, defaults to false
prevent_freeze_counter = false # optional, defaults to false
conceal = false # optional, defaults to false
tags = ["NAVI"] # optional, list of strings, custom
# optional, used for PAs
recipes = [
  { id = "BattleNetwork6.Class01.Standard.001", codes = ["A", "B", "C"] },
  { name = "Cannon", codes = ["A", "B", "C"] },
  { mix = [
    { id = "BattleNetwork6.Class01.Standard.070" },
    { name = "WideSwrd" },
    { id = "BattleNetwork6.Class01.Standard.072" }
  ] },
]
# hides the card from the deck editor and library
hidden = false

# this section is optional, see the Battle section for an example
[defines]
characters = []

# this section is optional
[dependencies]
augments = [] # optional, list of package ids
encounters = [] # optional, list of package ids
cards = [] # optional, list of package ids, must also depend on defining package
characters = [] # optional, list of package ids
libraries = [] # optional, list of package ids
statuses = [] # optional, list of package ids
tile_states = [] # optional, list of package ids
```

Expects an `entry.lua` file. See [Action](/client/lua-api/attack-api/action)

```lua
-- optional implementation, called when package ids change on cards tied to a character
-- ---@param entity Entity
-- ---@param card_index number
-- function card_mutate(entity, card_index)
-- end

-- used if dynamic_damage is true, called when this card is unused and visible
-- ---@param entity Entity
-- ---@return number?
-- function card_dynamic_damage(entity)
-- end

---@param entity Entity
---@param card_properties CardProperties
function card_init(entity, card_properties)
  local action = Action.new(entity, "CHARACTER_IDLE")

  -- note: returning nil instead of an Action will create a poof effect
  return action
end
```

## Libraries and Packs

Expects a `package.toml` file

```toml
[package]
category = "library" # accepts "library" and "pack"
id = "com.example.library" # must be unique
past_ids = [] # optional, list of strings
name = "Example Library"
description = "Example Library"
long_description = "" # optional
preview_texture_path = "preview.png" # optional

# this section is optional, see the Battle section for an example
[defines]
characters = []

# this section is optional
[dependencies]
augments = [] # optional, list of package ids
encounters = [] # optional, list of package ids
cards = [] # optional, list of package ids, must also depend on defining package
characters = [] # optional, list of package ids
libraries = [] # optional, list of package ids
statuses = [] # optional, list of package ids
tile_states = [] # optional, list of package ids
```

May contain an `entry.lua` file.

```lua
-- Can contain anything
-- The return value will be passed to lua files using require(package_id)
return "hello"
```

## Statuses

Expects a `package.toml` file

```toml
[package]
category = "status" # must match
id = "com.BN6.Statuses.Bubble"
past_ids = [] # optional, list of strings
name = "Bubble Status"
description = "" # optional
long_description = "" # optional
icon_texture_path = "icon.png" # 12x12 optional
preview_texture_path = "preview.png" # optional
flag_name = "Bubble" # register Hit.Bubble, up to 64 hit flags can exist
mutual_exclusions = ["Freeze"] # prevents conflicting statuses from applying, prioritizes the last applied status
blocked_by = [] # any status in the list can block this status when applied on the same hit as this status
blocks_flags = [] # any status in the list will be blocked when applied on the same hit as this status
blocks_actions = true # prevents entities from using Actions, animating, and pauses or cancels the current movement
blocks_mobility = true # prevents entities from moving
durations = [90] # a list of durations for each supported level of the status

# this section is optional, see the Battle section for an example
[defines]
characters = []

# this section is optional
[dependencies]
augments = [] # optional, list of package ids
encounters = [] # optional, list of package ids
cards = [] # optional, list of package ids, must also depend on defining package
characters = [] # optional, list of package ids
libraries = [] # optional, list of package ids
statuses = [] # optional, list of package ids
tile_states = [] # optional, list of package ids
```

Expects an `entry.lua` file. See [Status](/client/lua-api/attack-api/status)

```lua
---@param status Status
function status_init(status)
  -- apply
  -- create components and sprites for graphics here
  -- modify animation state, etc

  status.on_delete_func = function(self)
    -- clean up
  end
end
```

## Tile States

Expects a `package.toml` file

```toml
[package]
category = "tile_state" # must match
id = "BattleNetwork6.TileStates.Grass"
past_ids = [] # optional, list of strings
category = "tile_state"
name = "BN6 Grass Tile"
state_name = "Grass"
texture_path = "texture.png"
animation_path = "animation.animation"
max_lifetime = 60 # optional
hide_frame = false # optional
hide_body = false # optional
hole = false # optional, affects tile:is_walkable()
cleanser_element = "Fire" # optional, attacks matching this element will overwrite the state to TileState.Normal

# this section is optional, see the Battle section for an example
[defines]
characters = []

# this section is optional
[dependencies]
augments = [] # optional, list of package ids
encounters = [] # optional, list of package ids
cards = [] # optional, list of package ids, must also depend on defining package
characters = [] # optional, list of package ids
libraries = [] # optional, list of package ids
statuses = [] # optional, list of package ids
tile_states = [] # optional, list of package ids
```

Expects an `entry.lua` file. See [CustomTileState](/client/lua-api/field-api/custom-tile-state)

```lua
---@param custom_tile_state CustomTileState
function status_init(custom_tile_state)
  custom_tile_state.on_entity_enter_func = function(self, entity, movement)
    -- ...
  end
end
```

Animation example:

```
# prefix state names with "RED_" "BLUE_" "OTHER_" to add support for team differences
# suffix with "_FLIPPED" to support perspective differences
# if there's a universal state, just use "DEFAULT"

animation state="1"
frame x="0" w="40" h="30"

animation state="2"
frame x="40" w="40" h="30"

animation state="3"
frame x="80" w="40" h="30"
```

## Players

Expects a `package.toml` file

```toml
[package]
category = "player" # must match
id = "konstinople.player.Man" # must be unique
past_ids = [] # optional, list of strings
name = "Man"
description = "Before he was Mega, he was Man"
long_description = "" # optional
element = "none" # optional, defaults to "none"
health = 1000
mega_boost = 0 # optional, default is 0
giga_boost = 0 # optional, default is 0
dark_boost = 0 # optional, default is 0
icon_texture_path = "icon.png"
preview_texture_path = "preview.png"
overworld_animation_path = "overworld.animation"
overworld_texture_path = "overworld.png"
mugshot_texture_path = "mug.png"
mugshot_animation_path = "mug.animation"
emotions_texture_path = "" # optional
emotions_animation_path = "" # optional

# this section is optional, see the Battle section for an example
[defines]
characters = []

# this section is optional
[dependencies]
augments = [] # optional, list of package ids
encounters = [] # optional, list of package ids
cards = [] # optional, list of package ids, must also depend on defining package
characters = [] # optional, list of package ids
libraries = [] # optional, list of package ids
statuses = [] # optional, list of package ids
tile_states = [] # optional, list of package ids
```

Expects an `entry.lua` file. See [Player](/client/lua-api/entity-api/player)

```lua
---@param player Entity
function player_init(player)
end
```

## Resources

Expects a `package.toml` file

```toml
[package]
category = "resource" # must match
id = "com.example.resource" # must be unique
past_ids = [] # optional, list of strings
name = "Example Resource Package"
description = "Example Resource Package"
long_description = "" # optional
preview_texture_path = "preview.png" # optional
```

Expects a `resources` folder. Files in this package's `resources` folder will override files in the program's `resources` folder when enabled.
