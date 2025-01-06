# Script Nodes

A partial alternative to the Lua scripting API on servers is the script nodes library.

## Basic Usage

The Script Nodes library is kicked off through the `script_nodes_entry.lua` file that ships with the server. This file can be modified to register items, implement saving data, and create custom script nodes.

Nodes are map objects with a "type" starting with `Script Entry: ` or `Script Node: `, these are known as Script Nodes (or just nodes) and Script Entry Nodes (or just entry nodes) respectively. Entry nodes seed a context for execution and execute script nodes at documented events. Script nodes perform some action, and generally offer support for a `Next`/`Next 1` custom property to execute the next script node after the current node has completed. Many script nodes also have support for `Next 2` or higher custom properties, which will fall back to `Next` then `Next 1`.

Note: Entry nodes are not the only way to begin script execution. Some script node APIs have simplified entry points such as the `On Interact` custom property for objects and actors or the `On Load` boolean for self starting script nodes.

Script node types, aside from the prefixes, are case insensitive. However, the custom properties are case sensitive.

## Examples

Open the `default.tmx` file provided with the server in [Tiled](https://www.mapeditor.org/).

## Event Entry API

Implements support for the `Load`, `Server Event`, and `Player Interaction` entry types and the `On Load` property on all script nodes.

When `:load()` is called on an area, any script nodes with `On Load` set to true will execute using a context containing `area_id`.

As a reminder: entry nodes have a type starting with `Script Entry: ` such as `Script Entry: Load`.

### `Load`

Supplies a context with `area_id`.

Custom properties supported by `Load`:

- `Next [1]` a link to the next node (optional)

### `Server Event`

Supplies a context with `area_id`, `player_id`, `object_id`, `x`, `y`, `z` when possible.

Custom properties supported by `Server Event`:

- `Event` string, an event name (optional)
- `Events` string, a list of event names separated by a comma and space ", " (optional)
- `Next [1]` a link to the next node (optional)

### `Player Interaction`

Supplies a context with `player_ids` and `area_id`.

Custom properties supported by `Player Interaction`:

- `Next [1]` a link to the next node (optional)

### `Tile Interaction`

Supplies a context with `area_id`, `player_id`, `x`, `y`, and `z`.

Custom properties supported by `Tile Interaction`:

- `Next [1]` a link to the next node (optional)

### `Help`

Supplies a context with `player_id` and `area_id`.

Custom properties supported by `Help`:

- `Next [1]` a link to the next node (optional)

### `Item Use`

Supplies a context with `player_id` and `area_id`.

Custom properties supported by `Item Use`:

- `Item` string, item id
- `Next [1]` a link to the next node (optional)

## Area API

Implements support for `Set Area Name`, `Set Area Background`, `Set Area Foreground`,
`Set Area Music`, `Transfer To Area`, `Transfer To Instance`, `Transfer In Instance`, and `Remove Area` nodes.

Expects `area_id` to be defined on the context table.

### `Set Area Name`

Custom properties supported by `Set Area Name`:

- `Name` the new name of the area
- `Next [1]` a link to the next node (optional)

### `Set Area Background` and `Set Area Foreground`

Custom properties supported by `Set Area Background` and `Set Area Foreground`:

- `Texture` the path to the texture
- `Animation` the path to the animation (optional)
- `Vel X` number (optional)
- `Vel Y` number (optional)
- `Parallax` number (optional)
- `Next [1]` a link to the next node (optional)

### `Set Area Music`

Custom properties supported by `Set Area Music`:

- `Music` the path to the new music
- `Next [1]` a link to the next node (optional)

### `Transfer To Area`

Custom properties supported by `Transfer To Area`:

- `Area` string (ignored when `Target` is set to a player or bot)
- `Target` object, decides the spawn position and can supply `Warp` and `Direction` values (optional)
- `Warp` boolean, decides whether players should play a warp animation (optional)
- `Direction` string (optional)
- `Next [1]` a link to the next node (optional)

### `Transfer To Instance`

Custom properties supported by `Transfer To Instance`:

- `Area` string, a template area used to seed the new instance
- `Target` object, decides the spawn position and can supply `Warp` and `Direction` values (optional)
- `Warp` boolean, decides whether players should play a warp animation (optional)
- `Direction` string (optional)
- `Next [1]` a link to the next node (optional)

### `Transfer In Instance`

Custom properties supported by `Transfer In Instance`:

- `Area` string, a template area used to seed a new area in the instance if the area doesn't exist yet
- `Target` object, decides the spawn position and can supply `Warp` and `Direction` values (optional)
- `Warp` boolean, decides whether players should play a warp animation (optional)
- `Direction` string (optional)
- `Next [1]` a link to the next node (optional)

### `Remove Area`

Does not support any custom properties.

## Object API

Implements support for the `On Interact` property on objects, the `On Warp` property on `Custom Warp` objects,
and support for the `Move Object`, `Hide Object`, `Show Object`, and `Remove Object` nodes

`On Interact` should be applied on an interactable object, and the value should be an object usable as a script node.
When players interact with the object, the node will execute using a context containing `area_id`, `player_id`, and `object_id`.

`On Warp` should be applied on a `Custom Warp` object, and the value should be an object usable as a script node.
When players warp using this object, the node will execute using a context containing `area_id`, `player_id`, and `object_id`.

All nodes expect `area_id` and optionally `object_id` on the context table.

### `Move Object`

Custom properties supported by `Move Object`:

- `Target` object (optional)
- `Next [1]` a link to the next node (optional)

### `Hide Object`, `Show Object`, and `Remove Object`

Custom properties supported by `Hide Object`, `Show Object`, and `Remove Object`:

- `Next [1]` a link to the next node (optional)

## Tile API

Implements support for the `Has Tile Id` and `Set Tile Id` nodes

All nodes expect `area_id` and optionally `object_id` on the context table.

### `Has Tile Id`

Custom properties supported by `Has Tile Id`:

- `Target` object, expects a tile object or a tile under the object (optional)
- `Next [1]` a link to the default node (optional)
- `Next [1]` a link to the passing node (optional)

### `Set Tile Id`

Custom properties supported by `Set Tile Id`:

- `Target` object, expects a tile object or a tile under the object (optional)
- `Next [1]` a link to the next node (optional)

## Textbox API

Implements support for `Message`, `Auto Message`, `Question`, and `Quiz` nodes

All nodes expect `area_id` and either `player_id` or `player_ids` defined on the context table.

If `player_ids` is defined, the script will wait for all players and resolve to the first option as the response.

Supported custom properties:

- `Mug` "Random Player" | "Player [1+]" | string, the extensionless texture and animation for the mug. (optional)
- `Mug Texture` string, the texture for the mug. (optional)
- `Mug Animation` string, the animation for the mug. (optional)
- `Close Delay` a duration in seconds to wait before closing the textbox. (`Auto Message` specific, optional)
- `Text [1+]`
- `Next [1+]` a link to the next node based on the response (optional)

## BBS API

Implements support for the `BBS` node.

Expects `area_id` and `player_id` to be defined on the context table.

### `BBS`

Custom properties supported by `BBS`:

- `Color` color (optional)
- `Name` string (optional)
- `Instant` boolean, skips the open and close animations (optional)
- `Post 1+` object (optional)
- `Next [1]` a link to the next node (optional)

Custom properties supported by Post objects:

- `Mug` "Random Player" | "Player [1+]" | string, the extensionless texture and animation for the mug. (optional)
- `Mug Texture` string, the texture for the mug. (optional)
- `Mug Animation` string, the animation for the mug. (optional)
- `Title` string (optional)
- `Author` string (optional)
- `Text` string (optional)
- `On Interact` a link to a script node (optional)

## Shop API

Implements support for the `Shop` node.

Expects `area_id` and `player_id` to be defined on the context table.

### `Shop`

Custom properties supported by `Shop`:

- `Mug` "Random Player" | "Player [1+]" | string, the extensionless texture and animation for the shop keeper's mug. (optional)
- `Mug Texture` string, the texture for the shop keeper's mug. (optional)
- `Mug Animation` string, the animation for the shop keeper's mug. (optional)
- `Text` string, the shop keeper's default message (optional)
- `Welcome Text` string, shop keeper's welcome message (optional)
- `Leave Text` string, the shop keeper's goodbye message (optional)
- `Purchase Question` string, the shop keeper's confirmation text (optional)
- `Item 1+` object (optional)
- `Next [1]` a link to the next node (optional)

Custom properties supported by Item objects:

- `Name` string (optional)
- `Price` number (optional)
- `Description` string (optional)
- `Item` string, an item id, used to populate a name and description for this shop item (optional)
- `On Interact` a link to a script node (optional)

## Sound API

Implements support for the `Play Sound` node.

Expects `area_id` and optionally `player_id` or `player_ids` to be defined on the context table.

### `Play Sound`

Supported custom properties:

- `Target` "Player [1+]" (optional)
- `Next [1]` a link to the next node (optional)

## Camera API

Implements support for the `Camera` node.

Expects `area_id` and either `player_id` or `player_ids` to be defined on the context table.

### `Camera`

Supported custom properties:

- `Duration` the duration of the effect in seconds (optional)
- `Fade` a color to fade to (optional)
- `Shake` a number representing the strength of the shake effect (optional)
- `Motion` "Snap" | "Slide" | "Track" (optional)
- `Target` "Player [1+]" | "Bot [id]" | object (optional)
- `Unlocks` boolean, unlocks the camera at the end of the effect if true (optional)
- `Next [1]` a link to the next node (optional)

## Encounter API

Implements support for the `Encounter` node.

Expects `area_id` and `player_id` or `player_ids` to be defined on the context table.

### `Encounter`

Supported custom properties:

- `Encounter` the duration of the delay in seconds (optional)
- `Data` string, custom data to pass to the encounter (optional)
- `Forget Results` boolean (optional)
- `Next [1]` a link to the next node (optional)
- `On Win` a link to a node, threads per player (optional)
- `On Lose` a link to a node, threads per player (optional)

## Inventory API

Implements support for the `Give Money`, `Take Money`, `Has Money`,
`Give Item`, `Take Item`, and `Has Item` nodes.

Expects `area_id` and `player_id` or `player_ids` to be defined on the context table.

### `Give Money`

Supported custom properties for `Give Money`:

- `Amount` the amount of money to give
- `Next [1]` a link to the next node (optional)

### `Take Money`

Supported custom properties for `Take Money`:

- `Amount` the amount of money to take, no money will be taken on failure
- `Next [1]` a link to the default node (optional)
- `Next 2` a link to the passing node (optional)

### `Has Money`

Supported custom properties for `Has Money`:

- `Amount` the minumum amount of money to pass the check
- `Next [1]` a link to the default node (optional)
- `Next 2` a link to the passing node (optional)

### `Give Item`

Supported custom properties for `Give Item`:

- `Item` the ID of the item
- `Amount` the amount of items to give (optional)
- `Next [1]` a link to the next node (optional)

### `Take Item`

Supported custom properties for `Take Item`:

- `Item` the ID of the item
- `Amount` the amount of items to take, no items will be taken on failure (optional)
- `Next [1]` a link to the default node (optional)
- `Next 2` a link to the passing node (optional)

### `Has Item`

Supported custom properties for `Has Item`:

- `Item` the ID of the item
- `Amount` the minumum amount of items to pass the check (optional)
- `Next [1]` a link to the default node (optional)
- `Next 2` a link to the passing node (optional)

## Link API

Implements support for the `Refer Server` and `Refer Package` nodes

Expects `area_id` and `player_id` or `player_ids` to be defined on the context table.

### `Refer Server`

Supported custom properties for `Refer Server`:

- `Name` string
- `Address` string
- `Next [1]` a link to the next node (optional)

### `Refer Package`

Supported custom properties for `Refer Package`:

- `Id` string
- `Next [1]` a link to the next node (optional)

## Actor API

Implements support for `Spawn Bot`, `Remove Bot`, `Emote`, `Face`, `Lock Input`, and `Unlock Input` nodes.

Expects `area_id` to be defined on the context table.
Some nodes may also require `bot_id` and `player_id` or `player_ids` to be defined on the context table.

### `Spawn Bot`

Custom properties supported by `Spawn Bot`:

- `Id` the identifer for the bot for use in nodes matching "Bot [id]" (optional, tied to area)
- `Name` the displayed name of the bot (optional)
- `Warp In` boolean, whether the bot should warp in or not (optional)
- `Asset` the extensionless path to the texture and animation for the bot (optional if `Texture` and `Animation` are set)
- `Texture` the path to the texture for the bot (ignored if `Asset` is set)
- `Animation` the path to the animation for the bot (ignored if `Asset` is set)
- `Animation State` an initial animation to play on the bot (optional)
- `Direction` an initial direction for the bot to face (optional)
- `Solid` boolean, whether this bot should collide with players or not (optional)
- `Next [1]` a link to the next node (optional)
- `On Interact` object, a script node to execute on interactions (optional)

  The node will execute using a context populated with `area_id`, `player_id`, and `bot_id`.

### `Remove Bot`

Custom properties supported by `Remove Bot`:

- `Id` the identifier for the bot (optional)
- `Warp Out` boolean (optional)
- `Next [1]` a link to the next node (optional)

### `Emote`

Custom properties supported by `Emote`:

- `Actor` "Player [1+]" | "Bot [id]" (optional)
- `Emote` string
- `Next [1]` a link to the next node (optional)

### `Face`

Custom properties supported by `Face`:

- `Actor` "Player [1+]" | "Bot [id]" (optional)
- `Direction` string (optional)
- `Target` "Player [1+]" | "Bot [id]" | object (optional)
- `Target Diagonally` boolean, when true the `Target` will resolve to a diagonal direction (optional)
- `Target Diagonal` (alias for `Target Diagonally`, optional)
- `Next [1]` a link to the next node (optional)

### `Animate`

Custom properties supported by `Animate`:

- `Actor` "Player [1+]" | "Bot [id]" (optional)
- `Animation State` string
- `Loop` boolean (optional)
- `Next [1]` a link to the next node (optional)

### `Teleport`

Custom properties supported by `Teleport`:

- `Target` object, decides the position and can supply `Warp` and `Direction` values (optional)
- `Warp` boolean, decides whether players should play a warp animation (optional)
- `Direction` string (optional)
- `Next [1]` a link to the next node (optional)

### `Lock Input` and `Unlock Input`

Custom properties supported by `Lock Input` and `Unlock Input`:

- `Next [1]` a link to the next node (optional)

## Tag API

Implements support for `Tag`, `Untag`, and `Clear Tag` nodes.

Expects `area_id` and optionally `bot_id`, `player_id`, or `player_ids` to be defined on the context table.

### `Tag`

Custom properties supported by `Tag`:

- `Actor` "Player [1+]" | "Bot [id]" (optional)
- `Tag` the tag to give the actor
- `Next [1]` a link to the next node (optional)

### `Untag`

Custom properties supported by `Untag`:

- `Actor` "Player [1+]" | "Bot [id]" (optional)
- `Tag` the tag to remove from the actor
- `Next [1]` a link to the next node (optional)

### `Clear Tag`

Custom properties supported by `Clear Tag`:

- `Tag` the tag to clear
- `Next [1]` a link to the next node (optional)

## Common Animations API

Implements support for the `Area Transition` node.

Expects `area_id` and optionally `player_id`, or `player_ids` to be defined on the context table.

### `Area Transition`

Custom properties supported by `Area Transition`:

- `Fade` a color to fade to (optional)
- `Direction` number, the direction players should walk or face during the transition (optional)
- `Walk Distance` number, how far players should walk during the transition (optional)
- `Next [1]` a link to the next node, executes before the screen fades back in. (optional)

## Path API

Implements support for `Set Path`, `Paused Path`, `Pause Path`, and `Resume Path` nodes.

Expects `area_id` and optionally `bot_id`, `player_id`, or `player_ids` to be defined on the context table.

### `Set Path`

Custom properties supported by `Set Path`:

- `Actor` "Player [1+]" | "Bot [id]" (optional)
- `Path Start` a link to the first path node. (optional)

  Path nodes support optional `Path Next` and `Speed Multiplier` properties.

- `Speed Multiplier` number (optional)
- `Interrupt Radius` number, if a player enters this radius, movement will be blocked (optional, bot specific)
- `Wait` number, how long the actor should wait at this point before continuing movement (optional)
- `Loop` boolean (optional, bot specific)

  If the path doesn't contain a loop it will be played in reverse when the path ends.
  If `Loop` is false or unspecified, paths with a loop will end at the loop.

- `Next [1]` a link to the next node, executes immediately if `Loop` is set to true. (optional)

### `Paused Path`

Custom properties supported by `Paused Path`:

- `Actor` "Bot [id]" (optional)
- `Next [1]` a link to the next node (optional)
- `Next 2` a link to the passing node (optional)

### `Pause Path`

Custom properties supported by `Pause Path`:

- `Actor` "Bot [id]" (optional)
- `Next [1]` a link to the next node (optional)

### `Unpause Path`

Custom properties supported by `Unpause Path`:

- `Actor` "Bot [id]" (optional)
- `Next [1]` a link to the next node (optional)

## Collision API

Implements support for the `Collision` entry node, and the `Set Collider` script node.

As a reminder: entry nodes have a type starting with `Script Entry: ` such as `Script Entry: Collision`

### `Collision`

Custom properties supported by `Collision`:

- `On Enter` a link to a script node (optional)
- `On Exit` a link to a script node (optional)
- `Ignore Transfer` boolean, whether collision changes should be detected when players transfer areas (optional)

### `Set Collider`

Custom properties supported by `Set Collider`:

- `Target` "Player [1+]" | "Bot [id]" (optional)
- `On Enter` a link to a script node (optional)
- `On Exit` a link to a script node (optional)
- `Radius` number (optional)
- `Ignore Transfer` boolean, whether collision changes should be detected when players transfer areas (optional)

## Delay API

Implements support for the `Delay` node.

Expects `area_id` to be defined on the context table.

### `Delay`

Supported custom properties:

- `Duration` the duration of the delay in seconds (optional)
- `Next [1]` a link to the next node (optional)

## Random API

Implements support for the `Random` node. This node will select a random next node.

Expects `area_id` to be defined on the context table.

### `Random`

Supported custom properties:

- `Weight [1+]` a weight for the next node (optional)
- `Next [1+]` a link to the next node (optional)

## Thread API

Implements support for the `Thread` node. This node will execute every supplied next node.

Expects `area_id` to be defined on the context table.

### `Thread`

Supported custom properties:

- `Next [1+]` a link to the next node (optional)

## Party API

Implements support for the `Party All`, `Party Loaded`, `Party Instance`,
`Party Area`, `Party Near`, `Party Inside`, `Party Tag`, `Clear Party`, `Disband Party`, `Reunite Party`,
`Shuffle Party`, `Split Party`, and `Require Party Size` nodes.

### `Party All`, `Party Loaded`, `Party Instance`, `Party Area`

Expects `area_id` to be defined on the context table.

Clears `player_id` and sets `player_ids` on the context.

Supported custom properties:

- `Next [1]` a link to the next node (optional)

### `Party Near`

Expects `area_id` to be defined on the context table.

Clears `player_id` and sets `player_ids` on the context.

Supported custom properties for `Party Near`:

- `Target` "Player [1+]" | "Bot [id]" | object (optional)
- `Radius` number
- `Next [1]` a link to the next node (optional)

### `Party Inside`

Expects `area_id` to be defined on the context table.

Clears `player_id` and sets `player_ids` on the context.

Supported custom properties for `Party Inside`:

- `Target` the object to build the party from (optional)
- `Next [1]` a link to the next node (optional)

### `Party Tag`

Expects `area_id` to be defined on the context table.

Clears `player_id` and sets `player_ids` on the context.

Supported custom properties for `Party Tag`:

- `Tag` the tag to build the party from
- `Next [1]` a link to the next node (optional)

### `Clear Party`

Expects `area_id` to be defined on the context table.

Removes `player_ids` and `player_id` from the context table.

Supported custom properties for `Clear Party`:

- `Next [1+]` a link to the next node for each player (optional)

### `Disband Party`

Expects `area_id` and `player_ids` to be defined on the context table.

Splits `player_ids` in the context to multiple contexts with `player_id` and `disbanded_party`.

Supported custom properties for `Disband Party`:

- `Next [1+]` a link to the next node for each player (optional)

### `Reunite Party`

Expects `area_id` and `disbanded_party` to be defined on the context table.

Clears `player_id` and renames `disbanded_party` to `player_ids` on the context.

Supported custom properties for `Reunite Party`:

- `Next [1]` a link to the next node (optional)

### `Exclude Busy`

Expects `area_id` and `player_id` or `player_ids` to be defined on the context table.

Filters out busy players from the party.

Supported custom properties for `Exclude Busy`:

- `Next [1]` a link to the next node (optional)

### `Shuffle Party`

Expects `area_id` and optionally `player_id` or `player_ids` to be defined on the context table.

Supported custom properties for `Shuffle Party`:

- `Start` integer, every player at and after the matching index will be shuffled (optional)
- `Next [1]` a link to the next node (optional)

### `Split Party`

Expects `area_id` and optionally `player_id` or `player_ids` to be defined on the context table.

Attempts to split the party in two.

Supported custom properties for `Split Party`:

- `Start` integer, the players at and after the matching index will be moved to a second party (optional)
- `Start Fraction` number, splits the party using a value between `0` and `1`
  to decide what fraction of the party should be in the first party (an alternative to `Start`, optional)
- `Next [1]` a link to the default node (optional)
- `Next 2` a link to the next node for the second party (optional)

### `Require Party Size`

Expects `area_id` and optionally `player_id` or `player_ids` to be defined on the context table.

Supported custom properties for `Require Party Size`:

- `Minimum` integer (optional)
- `Min` integer (alias for `Minimum`, optional)
- `Maximum` integer (optional)
- `Max` integer (alias for `Maximum`, optional)
- `Next [1]` a link to the default node (optional)
- `Next 2` a link to the passing node (optional)

## Variable API

Implements support for the `Set Variable`, `Increment Variable`, `Require Variable Value`,
`Push Variable Scope`, `Pop Variable Scope`, `Push Function`, `Pop Function`, and `Print Variables` nodes.

Variable names have the following format: `[scope: ]Name`. (Example `Local: X`, `Global: X`, or `X`)

Supported scopes:

- `Local` tied to the current context, used for temporary variables.
- `Up` tied to the current context, allows access to the previous local scope after pushing a scope.
- `Self` tied to an object, bot, or player.
- `Area` tied to the area.
- `Instance` tied to the instance or global scope when outside of an instance (the default)
- `Global`

Note: Unless a function or variable scope is pushed, local variables will be shared between threads
when `Thread` nodes are used. Variables stored in `Up` after a scope is pushed will still be shared between threads.

### `Set Variable`

Supported custom properties for `Set Variable`:

- `Variable` string
- `Target` "Player [1+]" | "Bot [id]" | object, allows specification for the `Self` scope (optional)
- `Value` number | string
- `Next [1]` a link to the next node (optional)

### `Increment Variable`

Supported custom properties for `Increment Variable`:

- `Variable` string
- `Target` "Player [1+]" | "Bot [id]" | object, allows specification for the `Self` scope (optional)
- `Value` number (optional)
- `Amount` number (alias for `Value`, optional)
- `Next [1]` a link to the next node (optional)

### `Decrement Variable`

Supported custom properties for `Decrement Variable`:

- `Variable` string
- `Target` "Player [1+]" | "Bot [id]" | object, allows specification for the `Self` scope (optional)
- `Value` number (optional)
- `Amount` number (alias for `Value`, optional)
- `Next [1]` a link to the next node (optional)

### `Require Variable Value`

Supported custom properties for `Require Variable Value`:

- `Variable` string
- `Target` "Player [1+]" | "Bot [id]" | object, allows specification for the `Self` scope (optional)
- `Minimum` number (optional)
- `Min` number (alias for `Minimum`, optional)
- `Maximum` number (optional)
- `Max` number (alias for `Maximum`, optional)
- `Value` number | string (optional)
- `Next [1]` a link to the default node (optional)
- `Next 2` a link to the passing node (optional)

### `Push Variable Scope`

Supported custom properties for `Push Variable Scope`:

- `Next [1]` a link to the next node (optional)

### `Pop Variable Scope`

Supported custom properties for `Pop Variable Scope`:

- `Next [1]` a link to the next node (optional)

### `Push Function`

Supported custom properties for `Push Function`:

- `Function` a link to a script node
- `Next [1]` a link to node to run after the function script node finishes (optional)

  Note: the next node will never run if `Pop Function` is never called.

Automatically pushes a variable scope.

### `Pop Function`

Supported custom properties for `Pop Function`:

- None

Automatically pops a variable scope.

### `Print Variables`

Supported custom properties for `Print Variables`:

- `Scope` string (optional)
- `Next [1]` a link to the next node (optional)

## Debug API

Implements support for the `Print` and `Print Context` nodes.

### `Print`

Supported custom properties for `Print`:

- `Text [1]` the message to print
- `Next [1]` a link to the next node (optional)

### `Print Context`

Supported custom properties for `Print Context`:

- `Next [1]` a link to the next node (optional)
