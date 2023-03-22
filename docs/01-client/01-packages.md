# Packages

## Augments

Expects a package.toml file

```toml
[package]
category = "augment" # must match
id = "dev.konstinople.augment.Attack1.bn6" # must be unique
name = "Attack+1"
description = "MegaBstr\nAttck +1"
health_boost = 0 # optional
attack_boost = 1 # optional
rapid_boost = 0 # optional
charge_boost = 0 # optional
mega_boost = 0 # optional
giga_boost = 0 # optional
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

# this section is optional, see the Battle section for an example
[defines]
characters = []

# this section is optional
[dependencies]
augments = [] # optional, list of package ids
battles = [] # optional, list of package ids
cards = [] # optional, list of package ids, must also depend on defining package
characters = [] # optional, list of package ids
libraries = [] # optional, list of package ids
```

Expects an entry.lua file. See [Augment](/client/lua-api/player#augment)

```lua
function augment_init(augment)
end
```

## Battles

Expects a package.toml file

```toml
[package]
category = "battle" # must match
id = "com.discord.Konstinople#7692.cactikil" # must be unique
name = "Cactikil"
description = 'Cactikil, known as "Sabotekoron" in Japan, is a cactus'
preview_texture_path = "preview.png"

# this section is optional
[defines]
characters = [
  { id = "com.discord.Konstinople#7692.enemy.cactikil", path = "cactikil" },
  { id = "com.discord.Konstinople#7692.enemy.cactroll", path = "cactroll" },
  { id = "com.discord.Konstinople#7692.enemy.cacter", path = "cacter" },
]

# this section is optional
[dependencies]
augments = [] # optional, list of package ids
battles = [] # optional, list of package ids
cards = [] # optional, list of package ids, must also depend on defining package
characters = [] # optional, list of package ids
libraries = [] # optional, list of package ids
```

Expects an entry.lua file. See [Battle](/client/lua-api/battle)

```lua
function battle_init(battle)
end
```

## Characters

Expects an entry.lua file. See [Character](/client/lua-api/character)

```lua
function character_init(character)
end
```

## Cards

Expects a package.toml file

```toml
[package]
category = "card" # must match
id = "com.discord.Konstinople#7692.card.AreaEater" # must be unique
name = "AreaEatr"
icon_texture_path = "icon.png"
preview_texture_path = "preview.png"
description = "Beast steals panels!" # optional, used in preview
long_description = "Beast steals panels!" # optional, used in battle
damage = 100 # optional
# "none" | "fire" | "aqua" | "elec" | "wood" | "sword" |
# "wind" | "cursor" | "summon" | "plus" | "break"
element = "sword" # optional
secondary_element = "none" # optional
codes = ['A', 'O', 'X']
card_class = "giga" # optional, "standard" | "mega"| "giga" | "dark"
limit = 3 # optional, defaults to 5
# optional, case insensitive
# valid values:
# "retainintangible" | "freeze" | "pierceinvis" | "flinch" | "shake" |
# "paralyze" | "flash" | "pierceguard" | "impact" | "drag" | "bubble" |
# "nocounter" | "root" | "blind" | "confuse" | "pierceground"
hit_flags = ["impact", "flinch", "flash"]
can_boost = true # optional
time_freeze = true # optional
skip_time_freeze_intro = false # optional
meta_classes = [] # optional, list of strings, custom

# this section is optional, see the Battle section for an example
[defines]
characters = []

# this section is optional
[dependencies]
augments = [] # optional, list of package ids
battles = [] # optional, list of package ids
cards = [] # optional, list of package ids, must also depend on defining package
characters = [] # optional, list of package ids
libraries = [] # optional, list of package ids
```

Expects an entry.lua file. See [Action](/client/lua-api/action)

```lua
function card_init(entity, card_properties)
  local action = Battle.Action.new(entity, "PLAYER_IDLE")
  return action
end
```

## Libraries

Expects a package.toml file

```toml
[package]
category = "library" # must match
id = "com.example.library" # must be unique
name = "Example Library"
description = "Example Library"

# this section is optional, see the Battle section for an example
[defines]
characters = []

# this section is optional
[dependencies]
augments = [] # optional, list of package ids
battles = [] # optional, list of package ids
cards = [] # optional, list of package ids, must also depend on defining package
characters = [] # optional, list of package ids
libraries = [] # optional, list of package ids
```

Expects an entry.lua file.

```lua
-- Can contain anything
-- The return value will be passed to lua files using require()
return "hello"
```

## Players

Expects a package.toml file

```toml
[package]
category = "player" # must match
id = "com.discord.Konstinople#7692.player.Man" # must be unique
name = "Man"
description = "Before he was Mega, he was Man"
health = 1000
icon_texture_path = "icon.png"
preview_texture_path = "preview.png"
overworld_animation_path = "overworld.animation"
overworld_texture_path = "overworld.png"
mugshot_texture_path = "mug.png"
mugshot_animation_path = "mug.animation"
emotions_texture_path = "" # optional

# this section is optional, see the Battle section for an example
[defines]
characters = []

# this section is optional
[dependencies]
augments = [] # optional, list of package ids
battles = [] # optional, list of package ids
cards = [] # optional, list of package ids, must also depend on defining package
characters = [] # optional, list of package ids
libraries = [] # optional, list of package ids
```

Expects an entry.lua file. See [Player](/client/lua-api/player)

```lua
function player_init(player)
end
```
