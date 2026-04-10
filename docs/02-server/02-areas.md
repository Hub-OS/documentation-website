# Areas, Objects, and Tiles

Maps for areas are stored in `./areas`. The first area players will see is `default.tmx` (required).

## Suggested Settings

Editor:

- Fine grid divisions: 2 (Edit -> Preferences -> Interface)
- Snap To Fine Grid (View -> Snapping)
  - When working with Object Layer
- Snap To Pixels (View -> Snapping)
  - When working with Collision shapes

Map:

- Tile Width: 64
- Tile Height: 32
- Tile Layer Format: CSV (required)
- Create map in assets

Tilesets:

- Type: Based on Tileset Image (other types are not currently supported)
- Object Alignment:
  - Top - For tile objects stuck to the floor such as warps
    - Set drawing offset to 0,0
  - Bottom - For tile objects that act as a wall
- Place in a Tile Layer to tune drawing offset

Layers:

- An area layer is made of an object layer and tile layer
- Offset X: 0
- Offset Y: (number of tile layers below) \* -16

![Layering](/img/servers/layering-example.png)

## Custom properties

Map:

- Name: string
  - Area name to display in the PersonalMenu
- Music: string
  - Path to audio asset
- Background Texture: string
  - Path to background image file
- Background Animation: string
  - Path to background .animation file
  - One animation state "BG"
    - First frame of this animation determines background repetition
  - Excluding this will use texture size for background repetition
- Background Vel X: float
- Background Vel Y: float
- Background Parallax: float
- Foreground Texture: string
  - Path to foreground image file
- Foreground Animation: string
  - Path to foreground .animation file
  - One animation state "BG"
    - First frame of this animation determines foreground repetition
  - Excluding this will use texture size for foreground repetition
- Foreground Vel X: float
- Foreground Vel Y: float
- Foreground Parallax: float

Tiles and TileSets:

- Shadow: string
  - "Always"
  - "Never"
  - Unset - Automatic

- Minimap: bool
  - When set and not checked, this tile will skip rendering to the minimap

## Object and Tile Classes

Classes are used to denote special tiles or objects understood by the client.

- Warps
  - [Home Warp](#home-warp)
  - [Position Warp](#position-warp)
  - [Server Warp](#server-warp)
  - [Custom Server Warp](#custom-server-warp)
  - [Custom Warp](#custom-warp)
- Movement
  - [Stairs](#stairs)
  - [Conveyor](#conveyor)
  - [Ice](#ice)
  - [Treadmill](#treadmill)
- Plain Markers
  - [Board](#board)
  - [Shop](#shop)
  - [Arrow](#arrow)
  - [Invisible](#invisible)

### Home Warp

- Tile Objects only
- Visible in map
- Players will disconnect after colliding with the warp
- Custom properties:
  - Direction: string
    - Left
    - Right
    - Up
    - Down
    - Up Left
    - Up Right
    - Down Left
    - Down Right

![Home Warp](/img/servers/home-warp-sample.png)

### Position Warp

- Tile Objects only
- Visible in map
- Players will be warped to the set position after colliding with the warp
- Custom properties:
  - X: float
  - Y: float
  - Z: float
  - Direction: string
    - Left
    - Right
    - Up
    - Down
    - Up Left
    - Up Right
    - Down Left
    - Down Right

### Server Warp

- Tile Objects only
- Visible in map
- Players will be transferred to a different server after colliding with the warp
- Custom properties:
  - Address: string
  - Data: string
    - Custom data to pass to the other server
    - Can be read in the [player_request](/server/lua-api/events#player_request) event on the other server
    - Try to keep it short! Long data strings may get ignored
  - Direction: string
    - Left
    - Right
    - Up
    - Down
    - Up Left
    - Up Right
    - Down Left
    - Down Right

![Server Warp](/img/servers/server-warp-sample.png)

### Custom Server Warp

- Tile Objects only
- Visible in map
- Players will be warped out after colliding with the warp,
  the result of the warp can be resolved in a listener for [custom_warp](/server/lua-api/events#custom_warp)
- Custom Properties:
  - Direction: string
    - Left
    - Right
    - Up
    - Down
    - Up Left
    - Up Right
    - Down Left
    - Down Right

### Custom Warp

- Tile Objects only
- Visible in map
- Players will be warped out after colliding with the warp,
  the result of the warp can be resolved in a listener for [custom_warp](/server/lua-api/events#custom_warp)
  - Direction: string
    - Left
    - Right
    - Up
    - Down
    - Up Left
    - Up Right
    - Down Left
    - Down Right

### Stairs

- Tiles only
- Visible in map
- Allows players to walk up or down a layer
- Makes tile directly above become treated as a hole
- Custom properties:
  - Direction: string
    - Marks the direction the player will travel up
    - Up Left
    - Up Right
    - Down Left
    - Down Right

Stairs moving Up Left / Up Right generally need a top tile placed on the next layer for proper layering.

Collisions are ignored for tiles placed above a stair tile for this reason.

|                      No Top                      |                       With Top                       |
| :----------------------------------------------: | :--------------------------------------------------: |
| ![Stairs No Top](/img/servers/stairs-no-top.png) | ![Stairs With Top](/img/servers/stairs-with-top.png) |

Stair tile sample, the tile on the bottom is used as the upper half of the stairs and has no properties:

![Stairs](/img/servers/stairs.png)

### Conveyor

- Tiles only
- Visible in map
- Custom properties:
  - Direction: string
    - Marks the direction the player will travel
    - Up Left
    - Up Right
    - Down Left
    - Down Right
  - Speed: number? (Tiles per second, default: 6)
  - Sound Effect: string

### Ice

- Tiles only
- Custom properties:
  - Speed: number? (Tiles per second, default: 6)
  - Sound Effect: string

### Treadmill

- Tiles only
- Custom properties:
  - Direction: string
    - Marks the direction the player will travel
    - Up Left
    - Up Right
    - Down Left
    - Down Right
  - Speed: number? (Tiles per second, default: 1.875)

### Board

- Visible in map

### Shop

- Visible in map

### Bookmark

- Visible in map

### Marker

- Objects only
- Visible in map
- Custom Properties
  - Texture: string
  - Animation: string
  - State: string

### Arrow

- Tiles only
- Visible in map
- Custom properties:
  - Direction: string
    - Up Left
    - Up Right
    - Down Left
    - Down Right

### Invisible

- Tiles only
- Hides the tile from players, great for invisible pathways
