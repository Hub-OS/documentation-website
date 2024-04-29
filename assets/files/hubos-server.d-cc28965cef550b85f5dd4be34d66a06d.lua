---@meta
-- https://luals.github.io/wiki/annotations/
---@diagnostic disable: missing-return, unused-local

---@class ActorId

---@class SpriteId

---@class Net.EventEmitter
Net.EventEmitter = {}

---@class Promise<T>: { and_then: fun(callback: fun(T)) }

---@class TilePosition
---@field x number
---@field y number
---@field z number

---@class TiledObject
---@field id number
---@field name string
---@field class string deprecated
---@field type string
---@field visible boolean
---@field x number
---@field y number
---@field z number
---@field width number
---@field height number
---@field rotation number
---@field data TiledObjectData
---@field custom_properties TiledCustomProperties

---@class TiledObjectOptions
---@field id? number
---@field name? string
---@field class? string deprecated
---@field type? string
---@field visible? boolean
---@field x? number
---@field y? number
---@field z? number
---@field width? number
---@field height? number
---@field rotation? number
---@field data TiledObjectData
---@field custom_properties? TiledCustomProperties

---@alias TiledObjectData TiledBasicObjectData | TiledPolygonObjectData | TiledTileObjectData

---@class TiledBasicObjectData
---@field type "point" | "rect" | "ellipse"

---@class TiledPolygonObjectData
---@field type "polygon" | "polyline"
---@field points { x: number, y: number }[],

---@class TiledTileObjectData
---@field type "tile"
---@field gid number
---@field flipped_horizontally boolean
---@field flipped_vertically boolean

---@alias TiledCustomProperties table<string, string>

---@class BotOptions
---@field name? string
---@field area_id? string
---@field warp_in? boolean
---@field texture_path? string
---@field animation_path? string
---@field animation? string
---@field x? number
---@field y? number
---@field z? number
---@field direction? string
---@field solid? boolean

---Expanded:
---
---```lua
---keyframes: {
---  properties: {
---    property: "Animation" | "Animation Speed" | "X" | "Y" | "Z" | "ScaleX" | "ScaleY" | "Rotation" | "Direction" | "Sound Effect" | "Sound Effect Loop",
---    ease?: "Linear" | "In" | "Out" | "InOut" | "Floor",
---    value: number | string
---  }[],
---  duration: number
---}[]
---```
---@class ActorKeyframe
---@field properties ActorPropertyKeyframe[]
---@field duration number in seconds

---@class ActorPropertyKeyframe
---@field property "Animation" | "Animation Speed" | "X" | "Y" | "Z" | "ScaleX" | "ScaleY" | "Rotation" | "Direction" | "Sound Effect" | "Sound Effect Loop"
---@field ease? "Linear" | "In" | "Out" | "InOut" | "Floor",
---@field value number | string

---@class ItemDefinition
---@field name string
---@field description string
---@field consumable boolean?

---@class TextboxOptions
---@field mug TextureAnimationPair
---@field text_style TextStyle

---Example:
---
---```lua
----- note modified syntax: ? marks a field as optional
---local textbox_options = {
---  mug? = {
---    texture_path = "/server/assets/[...].png",
---    animation_path = "/server/assets/[...].animation",
---  }
---}
---
---Net.message_player(player_id, message, textbox_options)
---```
---@class TextStyle
---@field font_name? string
---@field monospace? boolean
---@field min_glyph_width? number
---@field letter_spacing? number
---@field line_spacing? number
---@field scale_x? number
---@field scale_y? number
---@field color? Color
---@field shadow_color? Color
---@field custom_atlas? TextureAnimationPair,

---@class SpriteOptions
---@field player_id? ActorId restricts visibility to this specific player if set.
---@field parent_id "widget" | "hud" | ActorId a point defined in the parent's animation file or built-in point.
---@field parent_point? string If unset the origin will be used. For "widget" and "hud" the origin is the top left of the screen.
---@field x? number offset from `parent_point` in screen pixels
---@field y? number offset from `parent_point` in screen pixels
---@field layer? number used for sorting sprites relative to the parent. Use negatives if you want to display in front of other sprites.
---@field texture_path string
---@field animation_path? string
---@field animation? string Animation state, this state will be looped.

--- All fields are in the range: [0, 255]
---@class Color
---@field r number
---@field g number
---@field b number
---@field a? number

---@class TextureAnimationPair
---@field texture_path string
---@field animation_path string

---@class ShopItem
---@field id string?
---@field name string,
---@field price number | string

---@class BoardPost
---@field id string
---@field read boolean?
---@field title string?
---@field author string?

---@class TilesetData
---@field path string
---@field first_gid number

---@class TileData
---@field gid number
---@field flipped_horizontally boolean
---@field flipped_vertically boolean
---@field rotated boolean

---@class BattleResults
---@field player_id string
---@field health number
---@field score number
---@field time number
---@field ran boolean
---@field emotion number
---@field turns number
---@field allies { name: string, health: number }[]
---@field enemies { name: string, health: number }[]
---@field neutral { name: string, health: number }[]

---@class RequestOptions
---@field method? string
---@field headers? table<string, string>
---@field body? string

--- If you want to use IO while players are connected, you'll want to use the Async API to prevent server hiccups.
--- Note: paths in this section use system paths and not asset paths.
Async = {}

---@class Net: Net.EventEmitter
Net = {}

--- Constructs a new EventEmitter instance.
function Net.EventEmitter.new() end

--- Parameters after `event_name` are custom and passed to event listeners.
--- 
--- ```lua
--- local emitter = Net.EventEmitter.new()
--- 
--- emitter:on("example_event", function(a, b)
---   print(a .. b) -- will output `cd`
--- end)
--- 
--- emitter:emit("example_event", "c", "d")
--- ```
---@param event_name string
function Net.EventEmitter:emit(event_name, ...) end

--- Calls the provided function every time an event matching `event_name` is emitted.
---@param event_name string
---@param callback fun(...)
function Net.EventEmitter:on(event_name, callback) end

--- Calls the provided function when an event matching `event_name` is emitted, then deletes the listener.
---@param event_name string
---@param callback fun(...)
function Net.EventEmitter:once(event_name, callback) end

--- Calls the provided function when any event is emitted. Useful for debugging.
--- 
--- ```lua
--- local emitter = Net.EventEmitter.new()
--- 
--- emitter:on_any(function(...)
---   print(...) -- will output `example_event c d`
--- end)
--- 
--- emitter:emit("example_event", "c", "d")
--- ```
---@param callback fun(event_name: string, ...)
function Net.EventEmitter:on_any(callback) end

--- Calls the provided function when any event is emitted, then deletes the listener.
---@param callback fun(event_name: string, ...)
function Net.EventEmitter:on_any_once(callback) end

--- Removes the listener to prevent future calls from the emitter.
--- `callback` must be a reference to the same instance of the function.
--- 
--- ```lua
--- local emitter = Net.EventEmitter.new()
--- 
--- local listener = function(a, b)
---   print(a .. b)
--- end
--- 
--- emitter:on("example_event", listener)
--- emitter:emit("example_event", "c", "d")  -- will output `c d` from the listener
--- 
--- emitter:remove_listener("example_event", listener)
--- emitter:emit("example_event", "c", "d")  -- no output
--- ```
---@param event_name string
---@param callback fun()
function Net.EventEmitter:remove_listener(event_name, callback) end

--- Removes the listener to prevent future calls from the emitter.
--- `callback` must be a reference to the same instance of the function.
--- 
--- ```lua
--- local emitter = Net.EventEmitter.new()
--- 
--- local listener = function(...)
---   print(...)
--- end
--- 
--- emitter:on_any(listener)
--- emitter:emit("example_event", "c", "d")  -- will output `example_name c d` from the listener
--- 
--- emitter:remove_on_any_listener(listener)
--- emitter:emit("example_event", "c", "d")  -- no output
--- ```
---@param event_name string
---@param callback fun()
function Net.EventEmitter:remove_on_any_listener(event_name, callback) end

--- Returns an iterator that returns promises with the value set to `...` (Event custom parameters).
--- 
--- ```lua
--- local emitter = Net.EventEmitter.new()
--- 
--- Async.create_scope(function()
---   -- Async.await can transform async iterators into iterators that return values directly
---   for a, b in Async.await(emitter:async_iter("example_event")) do
---     print(a .. b) -- will output "cd"
---   end
--- end)
--- 
--- emitter:emit("example_event", "c", "d")
--- emitter:destroy()
--- ```
---@param event_name string
---@return fun(): Promise
function Net.EventEmitter:async_iter(event_name) end

--- Returns an iterator that returns promises with the value set to `event_name, ...`.
--- 
--- ```lua
--- local emitter = Net.EventEmitter.new()
--- 
--- Async.create_scope(function()
---   for event_name, a, b in Async.await(emitter:async_iter_all()) do
---     print(event_name .. " " .. a .. b) -- will output "example_event cd"
---   end
--- end)
--- 
--- emitter:emit("example_event", "c", "d")
--- emitter:destroy()
--- ```
---@param event_name string
---@return fun(): Promise
function Net.EventEmitter:async_iter_all(event_name) end

--- Allows async iterators to complete. Otherwise iterators will wait until the program ends.
--- 
--- ```lua
--- local emitter = Net.EventEmitter.new()
--- 
--- Async.create_scope(function()
---   for _ in Async.await(emitter:async_iter("example_event")) do
---   end
--- 
---   print("complete!") -- will only output "complete!" if emitter:destroy() is called
--- end)
--- 
--- emitter:emit("example_event", "c", "d")
--- emitter:destroy()
--- ```
function Net.EventEmitter:destroy() end

--- Returns a list of area_ids.
---@return string[]
function Net.list_areas() end

--- Not implemented.
---@param new_area_id string
function Net.create_area(new_area_id) end

--- Overwrites all objects, tiles, and custom properties for the area, clients will be updated at the end of the tick.
---@param area_id string
---@param tmx_string string
function Net.update_area(area_id, tmx_string) end

--- Creates a copy of an area. Includes objects and tiles.
---@param area_id string
---@param new_area_id string
function Net.clone_area(area_id, new_area_id) end

--- Unloads an area, any players in this area are kicked.
---@param area_id string
function Net.remove_area(area_id) end

--- Returns a tmx string for an area.
---@param area_id string
---@return string
function Net.area_to_string(area_id) end

--- Returns the width for tile layers in tiles.
---@param area_id string
---@return number
function Net.get_layer_width(area_id) end

--- Returns the height for tile layers in tiles.
---@param area_id string
---@return number
function Net.get_layer_height(area_id) end

--- Returns the number of layers within an area.
---@param area_id string
---@return number
function Net.get_layer_count(area_id) end

--- Returns the screen width of a tile in pixels.
---@param area_id string
---@return number
function Net.get_tile_width(area_id) end

--- Returns the screen height of a tile in pixels.
---@param area_id string
---@return number
function Net.get_tile_height(area_id) end

--- Returns a [TiledCustomProperties](https://docs.hubos.dev/server/lua-api/objects#tiledcustomproperties)
---@param area_id string
---@return TiledCustomProperties
function Net.get_area_custom_properties(area_id) end

--- Returns a string value for the property matching the name.
---@param area_id string
---@param name string
---@return string
function Net.get_area_custom_property(area_id, name) end

--- Sets a value for the property matching the name.
---@param area_id string
---@param name string
---@param property_value string
function Net.set_area_custom_property(area_id, name, property_value) end

--- Returns the name of the area, visible to the client.
---@param area_id string
---@return string
function Net.get_area_name(area_id) end

--- Sets the name of the area, visible to the client.
---@param area_id string
---@param name string
function Net.set_area_name(area_id, name) end

--- Returns the path of the area's music.
---@param area_id string
---@return string
function Net.get_music(area_id) end

--- Changes the music for the area, players will be updated at the end of the tick.
---@param area_id string
---@param path string
function Net.set_music(area_id, path) end

--- Returns [TextureAnimationPair](https://docs.hubos.dev/server/lua-api/widgets#textureanimationpair)
---@param area_id string
---@return TextureAnimationPair
function Net.get_background(area_id) end

--- Returns `{ x: number, y: number }`
---@param area_id string
---@return { x: number, y: number }
function Net.get_background_velocity(area_id) end

--- Returns a number representing how strongly the player's position affects the background.
---@param area_id string
---@return number
function Net.get_background_parallax(area_id) end

--- Modifies background properties all at once, players will be updated at the end of the tick.
---@param area_id string
---@param texture_path string
---@param animation_path? string
---@param vel_x? number
---@param vel_y? number
---@param parallax? number
function Net.set_background(area_id, texture_path, animation_path, vel_x, vel_y, parallax) end

--- Returns `{ texture_path: string, animation_path: string }`
---@param area_id string
---@return { texture_path: string, animation_path: string }
function Net.get_foreground(area_id) end

--- Returns `{ x: number, y: number }`
---@param area_id string
---@return { x: number, y: number }
function Net.get_foreground_velocity(area_id) end

--- Returns a number representing how strongly the player's position affects the foreground.
---@param area_id string
---@return number
function Net.get_foreground_parallax(area_id) end

--- Modifies foreground properties all at once, players will be updated at the end of the tick.
---@param area_id string
---@param texture_path string
---@param animation_path? string
---@param vel_x? number
---@param vel_y? number
---@param parallax? number
function Net.set_foreground(area_id, texture_path, animation_path, vel_x, vel_y, parallax) end

--- Returns [TilePosition](https://docs.hubos.dev/server/lua-api/misc#tileposition)
--- 
--- Defaults to either the Home Warp or (0, 0, 0)
---@param area_id string
---@return TilePosition
function Net.get_spawn_position(area_id) end

--- Sets the default spawn position for players entering the area.
---@param area_id string
---@param x number
---@param y number
---@param z number
function Net.set_spawn_position(area_id, x, y, z) end

--- Returns a string representing the spawn direction.
--- 
--- Defaults the Home Warp's `Direction` custom property.
---@param area_id string
---@return string
function Net.get_spawn_direction(area_id) end

--- Sets the default spawn direction for players entering the area.
---@param area_id string
---@param direction string
function Net.set_spawn_direction(area_id, direction) end

--- Returns a list of `tileset_path`s
---@param area_id string
---@return string[]
function Net.list_tilesets(area_id) end

--- Returns [TilesetData](https://docs.hubos.dev/server/lua-api/areas#tilesetdata) or `nil`.
---@param area_id string
---@param tileset_path string
---@return TilesetData|nil
function Net.get_tileset(area_id, tileset_path) end

--- Returns [TilesetData](https://docs.hubos.dev/server/lua-api/areas#tilesetdata) or `nil`.
--- 
--- Note: The same `tile_gid` can return different values for different areas.
---@param area_id string
---@param tile_gid number
---@return TilesetData|nil
function Net.get_tileset_for_tile(area_id, tile_gid) end

--- Returns [TileData](https://docs.hubos.dev/server/lua-api/areas#tiledata)
---@param area_id string
---@param x number
---@param y number
---@param z number
---@return TileData|nil
function Net.get_tile(area_id, x, y, z) end

--- Sets the tile at the specified position, updates are merged and sent to players at the end of the tick.
---@param area_id string
---@param x number
---@param y number
---@param z number
---@param tile_gid number
---@param flip_h? boolean
---@param flip_v? boolean
---@param rotate? boolean
function Net.set_tile(area_id, x, y, z, tile_gid, flip_h, flip_v, rotate) end

--- Marks the asset as a dependency for the area, forcing joining players to download the asset before being able to play.
--- 
--- Useful for avoiding lag spikes during gameplay with dynamically loaded large assets. (Playing sound effects)
---@param area_id string
---@param path string
function Net.provide_asset(area_id, path) end

--- Plays a sound for every player within the area.
---@param area_id string
---@param path string
function Net.play_sound(area_id, path) end

--- Returns a list of `object_id`s.
---@param area_id string
---@return number[]
function Net.list_objects(area_id) end

--- Returns [TiledObject](https://docs.hubos.dev/server/lua-api/objects#tiledobject) or `nil`
---@param area_id string
---@param object_id number|string
---@return TiledObject|nil
function Net.get_object_by_id(area_id, object_id) end

--- Returns [TiledObject](https://docs.hubos.dev/server/lua-api/objects#tiledobject) or `nil`
---@param area_id string
---@param name string
---@return TiledObject|nil
function Net.get_object_by_name(area_id, name) end

--- - `object_options`: [TiledObjectOptions](https://docs.hubos.dev/server/lua-api/objects#tiledobjectoptions)
--- 
--- Returns an `object_id`
---@param area_id string
---@param object_options TiledObjectOptions
---@return number
function Net.create_object(area_id, object_options) end

--- Removes an object, clients will be updated at the end of the tick.
---@param area_id string
---@param object_id number|string
function Net.remove_object(area_id, object_id) end

--- Renames an object.
---@param area_id string
---@param object_id number|string
---@param name string
function Net.set_object_name(area_id, object_id, name) end

--- Changes the object's class, clients will be updated at the end of the tick.
---@param area_id string
---@param object_id number|string
---@param class string
function Net.set_object_class(area_id, object_id, class) end

--- Deprecated. Use set_object_class instead.
---@param area_id string
---@param object_id number|string
---@param type string
function Net.set_object_type(area_id, object_id, type) end

--- Modifies an object's custom property, clients will be updated at the end of the tick.
---@param area_id string
---@param object_id number|string
---@param name string
---@param property_value string
function Net.set_object_custom_property(area_id, object_id, name, property_value) end

--- Resizes the object, clients will be updated at the end of the tick.
---@param area_id string
---@param object_id number|string
---@param width number
---@param height number
function Net.resize_object(area_id, object_id, width, height) end

--- `rotation` is in degrees, clients will be updated at the end of the tick.
---@param area_id string
---@param object_id number|string
---@param rotation number
function Net.set_object_rotation(area_id, object_id, rotation) end

--- `visibility` is a bool, the object will be invisible if set to `false`. Clients will be updated at the end of the tick.
---@param area_id string
---@param object_id number|string
---@param visibility boolean
function Net.set_object_visibility(area_id, object_id, visibility) end

--- Moves the object, clients will be updated at the end of the tick.
---@param area_id string
---@param object_id number|string
---@param x number
---@param y number
---@param layer number
function Net.move_object(area_id, object_id, x, y, layer) end

--- - `object_data`: [TiledObjectData](https://docs.hubos.dev/server/lua-api/objects#tiledobjectdata)
--- 
--- Allows for the type and shape of the object to be adjusted. Clients will be updated at the end of the tick.
---@param area_id string
---@param object_id number|string
---@param object_data TiledObjectData
function Net.set_object_data(area_id, object_id, object_data) end

--- Returns true if the player is in a server sent battle, or if a board, shop, or textbox is open.
---@param player_id ActorId
---@return boolean
function Net.is_player_busy(player_id) end

--- Returns true if a board, shop, or textbox is open.
---@param player_id ActorId
---@return boolean
function Net.is_player_in_widget(player_id) end

--- Returns true if a shop is open.
---@param player_id ActorId
---@return boolean
function Net.is_player_shopping(player_id) end

--- Hides the HUD for the specified player.
---@param player_id ActorId
function Net.hide_hud(player_id) end

--- Makes the HUD visible for the specified player.
---@param player_id ActorId
function Net.show_hud(player_id) end

--- - `message`: `string`
--- 
--- Displays a textbox with the message and mug.
--- 
--- See [textbox_response](https://docs.hubos.dev/server/lua-api/events#textbox_response) or the [async](https://docs.hubos.dev/server/lua-api/async#asyncmessage_playerplayer_id-message-mug_texture_path-mug_animation_path) version of this function for handling responses.
---@param player_id ActorId
---@param message string
---@param mug_texture_path? string
---@param mug_animation_path? string
function Net.message_player(player_id, message, mug_texture_path, mug_animation_path) end

--- - `message`: `string`
--- - `textbox_options`: [TextboxOptions](https://docs.hubos.dev/server/lua-api/widgets#textboxoptions)
--- 
--- Displays a textbox with the message and mug.
--- 
--- See [textbox_response](https://docs.hubos.dev/server/lua-api/events#textbox_response) or the [async](https://docs.hubos.dev/server/lua-api/async#asyncmessage_playerplayer_id-message-textbox_options) version of this function for handling responses.
---@param player_id ActorId
---@param message string
---@param textbox_options? TextboxOptions
function Net.message_player(player_id, message, textbox_options) end

--- - `question`: `string`
--- 
--- Displays a textbox with a Yes / No input after the message.
--- 
--- See [textbox_response](https://docs.hubos.dev/server/lua-api/events#textbox_response) or the [async](https://docs.hubos.dev/server/lua-api/async#asyncquestion_playerplayer_id-question-mug_texture_path-mug_animation_path) version of this function for handling responses.
---@param player_id ActorId
---@param question string
---@param mug_texture_path? string
---@param mug_animation_path? string
function Net.question_player(player_id, question, mug_texture_path, mug_animation_path) end

--- - `question`: `string`
--- - `textbox_options`: [TextboxOptions](https://docs.hubos.dev/server/lua-api/widgets#textboxoptions)
--- 
--- Displays a textbox with a Yes / No input after the message.
--- 
--- See [textbox_response](https://docs.hubos.dev/server/lua-api/events#textbox_response) or the [async](https://docs.hubos.dev/server/lua-api/async#asyncquestion_playerplayer_id-question-textbox_options) version of this function for handling responses.
---@param player_id ActorId
---@param question string
---@param textbox_options? TextboxOptions
function Net.question_player(player_id, question, textbox_options) end

--- - `option_a`: `string`
--- - `option_b`: `string`
--- - `option_c`: `string`
--- 
--- Displays a textbox with selectable options.
--- 
--- See [textbox_response](https://docs.hubos.dev/server/lua-api/events#textbox_response) or the [async](https://docs.hubos.dev/server/lua-api/async#asyncquiz_playerplayer_id-option_a-option_b-option_c-mug_texture_path-mug_animation_path) version of this function for handling responses.
---@param player_id ActorId
---@param option_a? string
---@param option_b? string
---@param option_c? string
---@param mug_texture_path? string
---@param mug_animation_path? string
function Net.quiz_player(player_id, option_a, option_b, option_c, mug_texture_path, mug_animation_path) end

--- - `option_a`: `string`
--- - `option_b`: `string`
--- - `option_c`: `string`
--- - `textbox_options`: [TextboxOptions](https://docs.hubos.dev/server/lua-api/widgets#textboxoptions)
--- 
--- Displays a textbox with selectable options.
--- 
--- See [textbox_response](https://docs.hubos.dev/server/lua-api/events#textbox_response) or the [async](https://docs.hubos.dev/server/lua-api/async#asyncquiz_playerplayer_id-option_a-option_b-option_c-textbox_options) version of this function for handling responses.
---@param player_id ActorId
---@param option_a? string
---@param option_b? string
---@param option_c? string
---@param textbox_options? TextboxOptions
function Net.quiz_player(player_id, option_a, option_b, option_c, textbox_options) end

--- Displays a textbox that accepts text input.
--- 
--- See [textbox_response](https://docs.hubos.dev/server/lua-api/events#textbox_response) or the [async](https://docs.hubos.dev/server/lua-api/async#asyncprompt_playerplayer_id-character_limit-default_text) version of this function for handling responses.
---@param player_id ActorId
---@param character_limit? number
---@param default_text? string
function Net.prompt_player(player_id, character_limit, default_text) end

--- - `color`: [Color](https://docs.hubos.dev/server/lua-api/widgets#color)
--- - `posts`: [BoardPost[]](https://docs.hubos.dev/server/lua-api/widgets#boardpost)
--- 
--- Returns [EventEmitter](https://docs.hubos.dev/server/lua-api/event-emitters), re-emits `post_selection`, `post_request`, and `board_close` server events.
---@param player_id ActorId
---@param board_name string
---@param color Color
---@param posts BoardPost
---@param open_instantly? boolean
---@return Net.EventEmitter
function Net.open_board(player_id, board_name, color, posts, open_instantly) end

--- Issues may arise when multiple scripts create boards at the same time.
---@param player_id ActorId
---@param posts BoardPost
---@param post_id? string
function Net.prepend_posts(player_id, posts, post_id) end

--- Issues may arise when multiple scripts create boards at the same time.
---@param player_id ActorId
---@param posts BoardPost
---@param post_id? string
function Net.append_posts(player_id, posts, post_id) end

--- Issues may arise when multiple scripts create boards at the same time.
---@param player_id ActorId
---@param post_id string
function Net.remove_post(player_id, post_id) end

--- Closes the currently opened board for the player.
---@param player_id ActorId
function Net.close_board(player_id) end

--- - `shop_items`: [ShopItem[]](https://docs.hubos.dev/server/lua-api/widgets#shopitem)
---   - If the `id` is unset, the `name` is used as the `id` instead.
--- 
--- Returns [EventEmitter](https://docs.hubos.dev/server/lua-api/event-emitters), re-emits `shop_purchase`, `shop_description_request`, `shop_leave`, and `shop_close` server events.
---@param player_id ActorId
---@param shop_items ShopItem[]
---@param mug_texture_path? string
---@param mug_animation_path? string
---@return Net.EventEmitter
function Net.open_shop(player_id, shop_items, mug_texture_path, mug_animation_path) end

--- Sets the default text for the shop keeper. Ignored if no shop is open.
---@param player_id ActorId
---@param message string
function Net.set_shop_message(player_id, message) end

--- - `shop_item`: [ShopItem](https://docs.hubos.dev/server/lua-api/widgets#shopitem)
--- 
--- Replaces the `shop_item` for the item matching the `id`.
---@param player_id ActorId
---@param shop_item ShopItem
function Net.update_shop_item(player_id, shop_item) end

--- Delete the item from the open shop.
---@param player_id ActorId
---@param item_id string
function Net.remove_shop_item(player_id, item_id) end

--- - `sprite_options` [SpriteOptions](https://docs.hubos.dev/server/lua-api/widgets#spriteoptions)
--- 
--- Returns sprite_id
---@param sprite_options SpriteOptions
---@return SpriteId
function Net.create_sprite(sprite_options) end

--- Sets the animation state for the sprite.
---@param sprite_id SpriteId
---@param state_name string
---@param loop? boolean
function Net.animate_sprite(sprite_id, state_name, loop) end

--- Deletes the the sprite.
---@param sprite_id SpriteId
function Net.delete_sprite(sprite_id) end

--- - `color`: [Color](https://docs.hubos.dev/server/lua-api/widgets#color)
--- 
--- Sets the color of the marker used in the map menu to represent this player. Defaults to `{ r: 0, g: 0, b: 0, a: 0 }`
---@param player_id ActorId
---@param color Color
function Net.set_player_map_color(player_id, color) end

--- - `color`: [Color](https://docs.hubos.dev/server/lua-api/widgets#color)
--- 
--- Sets the color of the marker used in the map menu to represent this bot. Defaults to `{ r: 0, g: 0, b: 0, a: 0 }`
---@param bot_id ActorId
---@param color Color
function Net.set_bot_map_color(bot_id, color) end

--- Opens a menu for the player to save the referred server.
---@param player_id ActorId
---@param name string
---@param address string
function Net.refer_server(player_id, name, address) end

--- Opens a menu on the client for the player to view and install a package from their preferred package repo.
---@param player_id ActorId
---@param package_id string
function Net.refer_package(player_id, package_id) end

--- Allows the client to directly download packages from the server.
--- 
--- Currently unimplemented on the client.
---@param player_id ActorId
---@param package_id string
function Net.offer_package(player_id, package_id) end

--- Returns a list of `player_id`s.
---@param area_id string
---@return ActorId[]
function Net.list_players(area_id) end

--- Returns true if the server is aware of a player with the provided id.
---@param player_id ActorId
---@return boolean
function Net.is_player(player_id) end

--- Returns the `area_id` for the area the player is currently in.
---@param player_id ActorId
---@return string
function Net.get_player_area(player_id) end

--- Returns the IP address of the player as a string. Useful for creating connection whitelists/blacklists.
--- 
--- If you want to track data use [Net.get_player_secret()](https://docs.hubos.dev/server/lua-api/player-data#netget_player_secretplayer_id). Otherwise you'll have issues when multiple players live within the same house.
---@param player_id ActorId
---@return string
function Net.get_player_ip(player_id) end

--- Gets the name of the player. "Nickname" in config.
---@param player_id ActorId
function Net.get_player_name(player_id) end

--- Sets the name of the player for all players to see.
---@param player_id ActorId
---@param name string
function Net.set_player_name(player_id, name) end

--- Gets the facing direction of the player.
---@param player_id ActorId
function Net.get_player_direction(player_id) end

--- Returns [TilePosition](https://docs.hubos.dev/server/lua-api/misc#tileposition)
---@param player_id ActorId
---@return TilePosition
function Net.get_player_position(player_id) end

--- Returns [TextureAnimationPair](https://docs.hubos.dev/server/lua-api/widgets#textureanimationpair)
---@param player_id ActorId
---@return TextureAnimationPair
function Net.get_player_mugshot(player_id) end

--- Returns [TextureAnimationPair](https://docs.hubos.dev/server/lua-api/widgets#textureanimationpair)
---@param player_id ActorId
---@return TextureAnimationPair
function Net.get_player_avatar(player_id) end

--- Sets the texture file and animation file used to display the player.
---@param player_id ActorId
---@param texture_path string
---@param animation_path string
function Net.set_player_avatar(player_id, texture_path, animation_path) end

--- Returns the name of the playable character used by the player.
---@param player_id ActorId
---@return string
function Net.get_player_avatar_name(player_id) end

--- Displays an emote above the player. `emote_id` is the name of an animation state in the emotes animation.
---@param player_id ActorId
---@param emote_id string
function Net.set_player_emote(player_id, emote_id) end

--- - `emoter_id`: a `bot_id` or `player_id`
--- 
--- Displays an emote exclusively to this player.
---@param player_id ActorId
---@param emoter_id ActorId
---@param emote_id string
function Net.exclusive_player_emote(player_id, emoter_id, emote_id) end

--- Sets the animation state for the player, the default states will be used if the player moves.
---@param player_id ActorId
---@param state_name string
---@param loop? boolean
function Net.animate_player(player_id, state_name, loop) end

--- Allows for assets to be sent ahead of time to reduce apparent server hiccups.
---@param player_id ActorId
---@param path string
function Net.provide_asset_for_player(player_id, path) end

--- Allows for assets to be sent ahead of time to reduce apparent server hiccups.
---@param player_id ActorId
---@param path string
function Net.play_sound_for_player(player_id, path) end

--- Disables collisions, interactions, and hides the object for this player.
---@param player_id ActorId
---@param object_id number|string
function Net.exclude_object_for_player(player_id, object_id) end

--- Brings back functionality removed by `Net.exclude_object_for_player()` for this player.
---@param player_id ActorId
---@param object_id number|string
function Net.include_object_for_player(player_id, object_id) end

--- Disables collisions, interactions, and hides the actor for this player.
---@param player_id ActorId
---@param actor_id ActorId
function Net.exclude_actor_for_player(player_id, actor_id) end

--- Brings back functionality removed by `Net.exclude_actor_for_player()` for this player.
---@param player_id ActorId
---@param actor_id ActorId
function Net.include_actor_for_player(player_id, actor_id) end

--- - `range_x`: number
--- - `range_y`: number
--- 
--- Not implemented. Subject to change.
---@param player_id ActorId
---@param range_x? number
---@param range_y? number
function Net.enable_camera_controls(player_id, range_x, range_y) end

--- Snaps the camera to a specific position.
--- 
--- Locks the camera.
---@param player_id ActorId
---@param x number
---@param y number
---@param z number
---@param holdTimeInSeconds? number
function Net.move_player_camera(player_id, x, y, z, holdTimeInSeconds) end

--- Slides the camera to a specific position.
--- 
--- Locks the camera.
---@param player_id ActorId
---@param x number
---@param y number
---@param z number
---@param durationInSeconds number
function Net.slide_player_camera(player_id, x, y, z, durationInSeconds) end

--- Shakes the camera. Useful for impact (explosions, landing, earthquakes)
---@param player_id ActorId
---@param strength number
---@param durationInSeconds number
function Net.shake_player_camera(player_id, strength, durationInSeconds) end

--- - `color`: `{ r: 0-255, g: 0-255, b: 0-255, a?: 0-255 }`
---@param player_id ActorId
---@param color Color
---@param durationInSeconds number
function Net.fade_player_camera(player_id, color, durationInSeconds) end

--- Changes which actor the camera follows. Initially this will be set to the player.
---@param player_id ActorId
---@param actor_id ActorId
function Net.track_with_player_camera(player_id, actor_id) end

--- Unlocks the player's camera, allowing it to follow the tracked actor again.
---@param player_id ActorId
function Net.unlock_player_camera(player_id) end

--- Returns true if there's any locks on the player's input.
---@param player_id ActorId
---@return boolean
function Net.is_player_input_locked(player_id) end

--- Prevents the player from moving, interacting, and opening menus. Multiple locks can exist at a time.
---@param player_id ActorId
function Net.lock_player_input(player_id) end

--- Removes a lock on the player's input.
---@param player_id ActorId
function Net.unlock_player_input(player_id) end

--- Teleports the player to a new position.
---@param player_id ActorId
---@param warp boolean
---@param x number
---@param y number
---@param z number
---@param direction? string
function Net.teleport_player(player_id, warp, x, y, z, direction) end

--- Gets permission from the player to permanently install a package on their client, allowing for the package to be used when disconnected and while on other servers.
--- 
--- If the player accepts, the package will be installed.
--- 
--- Not implemented.
---@param player_id ActorId
---@param package_path string
function Net.offer_package(player_id, package_path) end

--- - `path`: `string`
---   - Server asset path to a toml file.
--- 
--- Expecting structure:
--- 
--- ```toml
--- [deck]
---@param player_id ActorId
---@param path string
function Net.set_player_restrictions(player_id, path) end

--- Returns true if the player is in a server sent battle, or if a board, shop, or textbox is open.
---@param player_id ActorId
---@return boolean
function Net.is_player_busy(player_id) end

--- Returns true if the player is in battle.
---@param player_id ActorId
---@return boolean
function Net.is_player_battling(player_id) end

--- - `encounter_data`: anything that could be represented as JSON.
---   - Read as second param in encounter_init for the encounter package
---@param player_id ActorId
---@param package_path string
---@param encounter_data? any
function Net.initiate_encounter(player_id, package_path, encounter_data) end

--- - `encounter_data`: anything that could be represented as JSON.
---   - Read as second param in encounter_init for the encounter package
---@param player_1_id ActorId
---@param player_2_id ActorId
---@param package_path? string
---@param encounter_data? any
function Net.initiate_pvp(player_1_id, player_2_id, package_path, encounter_data) end

--- - `encounter_data`: anything that could be represented as JSON.
---   - Read as second param in encounter_init for the encounter package
---@param player_ids ActorId[]
---@param package_path? string
---@param encounter_data? any
function Net.initiate_netplay(player_ids, package_path, encounter_data) end

--- Sends the player to a different area.
---@param player_id ActorId
---@param area_id string
---@param warp_in? boolean
---@param x? number
---@param y? number
---@param z? number
---@param direction? string
function Net.transfer_player(player_id, area_id, warp_in, x, y, z, direction) end

--- - `data`: `string`
---   - Readable in [player_request](https://docs.hubos.dev/server/lua-api/events#player_request) on the remote server
---@param player_id ActorId
---@param address string
---@param warp_out? boolean
---@param data? string
function Net.transfer_server(player_id, address, warp_out, data) end

--- - `data`: `string`
---   - Readable in [authorization](https://docs.hubos.dev/server/lua-api/events#authorization) on the remote server
---@param player_id ActorId
---@param address string
---@param data? string
function Net.request_authorization(player_id, address, data) end

--- 
---@param player_id ActorId
---@param reason string
---@param warp_out? boolean
function Net.kick_player(player_id, reason, warp_out) end

--- The secret identifier for this player, also known as `identity`. Similar to a password, do not share.
---@param player_id ActorId
function Net.get_player_secret(player_id) end

--- Returns `"None" | "Fire" | "Aqua" | "Elec" | "Wood" | "Sword" | "Wind" | "Cursor" | "Summon" | "Plus" | "Break"`
---@param player_id ActorId
---@return "None" | "Fire" | "Aqua" | "Elec" | "Wood" | "Sword" | "Wind" | "Cursor" | "Summon" | "Plus" | "Break"
function Net.get_player_element(player_id) end

--- Returns the starting health for the next battle.
---@param player_id ActorId
---@return number
function Net.get_player_health(player_id) end

--- Sets the starting health for the next battle.
---@param player_id ActorId
---@param health number
function Net.set_player_health(player_id, health) end

--- Returns the player's maximum health without augments.
---@param player_id ActorId
---@return number
function Net.get_player_base_health(player_id) end

--- Sets the player's maximum health without augments.
---@param player_id ActorId
---@param health number
function Net.set_player_base_health(player_id, health) end

--- Returns the player's maximum health with augments.
---@param player_id ActorId
---@return number
function Net.get_player_max_health(player_id) end

--- Returns the emotion that will be applied at the start of the next battle.
---@param player_id ActorId
---@return string
function Net.get_player_emotion(player_id) end

--- Sets the emotion applied at the start of the next battle.
---@param player_id ActorId
---@param emotion string
function Net.set_player_emotion(player_id, emotion) end

--- Returns the amount of money the player has.
---@param player_id ActorId
---@return number
function Net.get_player_money(player_id) end

--- Sets the amount of money the player has.
---@param player_id ActorId
---@param money number
function Net.set_player_money(player_id, money) end

--- - `item_definition`: [ItemDefinition](https://docs.hubos.dev/server/lua-api/player-data#itemdefinition)
--- 
--- Registers an item definition to be shared with the client when the player obtains this item for the first time.
--- 
--- The item's name should be at most 8 characters for best display.
---@param item_id string
---@param item_definition ItemDefinition
function Net.register_item(item_id, item_definition) end

--- Returns the name used in menus.
---@param item_id string
---@return string
function Net.get_item_name(item_id) end

--- Returns the description used in menus.
---@param item_id string
---@return string
function Net.get_item_description(item_id) end

--- Returns a list of unique item ids.
---@param player_id ActorId
---@return string
function Net.get_player_items(player_id) end

--- Gives the player items. `count` will default to 1.
--- 
--- Accepts negative amount.
---@param player_id ActorId
---@param item_id string
---@param amount? number
function Net.give_player_item(player_id, item_id, amount) end

--- Returns the amount of the item the player has.
---@param player_id ActorId
---@param item_id string
---@return number
function Net.get_player_item_count(player_id, item_id) end

--- Returns true if the player has at least one of this item.
---@param player_id ActorId
---@param item_id string
---@return boolean
function Net.player_has_item(player_id, item_id) end

--- Returns the amount of matching cards the player owns.
---@param player_id ActorId
---@param package_id string
---@param code string
---@return number
function Net.get_player_card_count(player_id, package_id, code) end

--- Adds cards to the player's pack.
--- 
--- Adding any card restricts usable cards to only given cards.
--- 
--- Accepts negative amount.
---@param player_id ActorId
---@param package_id string
---@param code string
---@param amount? number
function Net.give_player_card(player_id, package_id, code, amount) end

--- Returns the amount of matching cards the player owns.
---@param player_id ActorId
---@param package_id string
---@param color Color
---@return number
function Net.get_player_block_count(player_id, package_id, color) end

--- Adds blocks to the player's pack.
--- 
--- Adding any block restricts usable blocks to only given blocks.
--- 
--- Accepts negative amount.
---@param player_id ActorId
---@param package_id string
---@param color Color
---@param amount? number
function Net.give_player_block(player_id, package_id, color, amount) end

--- Returns true if the player can use the playable character's abilities.
---@param player_id ActorId
---@param package_id string
---@return boolean
function Net.player_character_enabled(player_id, package_id) end

--- Allows the player to use the playable character's abilities.
--- 
--- Enabling any playable character locks the player out of using abilities on non enabled playable characters.
---@param player_id ActorId
---@param package_id string
function Net.enable_player_character(player_id, package_id) end

--- Returns a list of `bot_id`s.
---@param area_id string
---@return ActorId[]
function Net.list_bots(area_id) end

--- - `bot_options`: [BotOptions](https://docs.hubos.dev/server/lua-api/bots#botoptions)
--- 
--- Creates a bot.
--- 
--- Returns a `bot_id`
---@param bot_options BotOptions
---@return ActorId
function Net.create_bot(bot_options) end

--- Returns true if the id matches an existing bot.
---@param bot_id ActorId
---@return boolean
function Net.is_bot(bot_id) end

--- Deletes the bot and notifies clients in the same area.
---@param bot_id ActorId
---@param warp_out? boolean
function Net.remove_bot(bot_id, warp_out) end

--- Returns the `area_id` for the area the bot is currently in.
---@param bot_id ActorId
---@return string
function Net.get_bot_area(bot_id) end

--- Returns the name shown to players for the bot.
---@param bot_id ActorId
---@return string
function Net.get_bot_name(bot_id) end

--- Sets the name shown to players for the bot.
---@param bot_id ActorId
---@param name string
function Net.set_bot_name(bot_id, name) end

--- Gets the facing direction of the bot.
---@param bot_id ActorId
function Net.get_bot_direction(bot_id) end

--- Sets the facing direction of the bot.
---@param bot_id ActorId
---@param direction string
function Net.set_bot_direction(bot_id, direction) end

--- Returns [TilePosition](https://docs.hubos.dev/server/lua-api/misc#tileposition)
---@param bot_id ActorId
---@return TilePosition
function Net.get_bot_position(bot_id) end

--- Sets the position of the bot, will play a warp animation on the clients if the bot is moving too fast.
---@param bot_id ActorId
---@param x number
---@param y number
---@param z number
function Net.move_bot(bot_id, x, y, z) end

--- Sets the area and position of the bot.
---@param bot_id ActorId
---@param area_id string
---@param warp_in? boolean
---@param x? number
---@param y? number
---@param z? number
function Net.transfer_bot(bot_id, area_id, warp_in, x, y, z) end

--- Not implemented.
---@param bot_id ActorId
---@param solid boolean
function Net.set_bot_solid(bot_id, solid) end

--- Sets texture and animation files used to display the bot.
---@param bot_id ActorId
---@param texture_path string
---@param animation_path string
function Net.set_bot_avatar(bot_id, texture_path, animation_path) end

--- Displays an emote above the bot. `emote_id` is the name of an animation state in the emotes animation.
---@param bot_id ActorId
---@param emote_id string
function Net.set_bot_emote(bot_id, emote_id) end

--- Sets the animation state for the bot, the default states will be used if the bot moves.
---@param bot_id ActorId
---@param state_name string
---@param loop? boolean
function Net.animate_bot(bot_id, state_name, loop) end

--- - `keyframes`: [ActorKeyframe[]](https://docs.hubos.dev/server/lua-api/actor-property-animations#actorkeyframe)
--- 
--- Interpolated animation for fancy effects.
--- 
--- If a keyframe at duration 0 does not exist for a property, the client will default to initial values or a blank value. Ex: X/Y/Z will use the actor's current position, and "Sound Effect" would use blank / play no sounds.
--- 
--- If the position is not animated, the player can control their actor while the animations play.
--- 
--- The final state of the animation will stick to the player, excluding sounds.
--- 
--- ```lua
--- Net:on("tile_interaction", function(event)
---   local position = Net.get_player_position(event.player_id)
--- 
---   -- a stretched jump. if the player disappears, you may need to add a new tile layer
---   local keyframes = {
---     {
---       properties = {
---         { property = "Z",      value = position.z + 1, ease = "Out" },
---         { property = "ScaleY", value = 1.5,            ease = "Out" }
---       },
---       duration = 0.5
---     },
---     {
---       properties = {
---         { property = "Z",      value = position.z, ease = "In" },
---         { property = "ScaleY", value = 1,          ease = "In" }
---       },
---       duration = 0.5
---     }
---   }
--- 
---   Net.animate_player_properties(event.player_id, keyframes)
--- end)
--- ```
--- 
--- If you need something to happen when the animation ends, you should use [Async.sleep()](https://docs.hubos.dev/server/lua-api/async#asyncsleepseconds)
---@param player_id ActorId
---@param keyframes ActorKeyframe[]
function Net.animate_player_properties(player_id, keyframes) end

--- - `keyframes`: [ActorKeyframe[]](https://docs.hubos.dev/server/lua-api/actor-property-animations#actorkeyframe)
--- 
--- Interpolated animation for fancy effects.
--- 
--- If a keyframe at duration 0 does not exist for a property, the client will default to initial values or a blank value. Ex: X/Y/Z will use the actor's current position, and "Sound Effect" would use blank / play no sounds.
--- 
--- The final state of the animation will stick to the bot, excluding sounds.
--- 
--- ```lua
--- local position = Net.get_bot_position(bot_id)
--- 
--- -- a stretched jump. if the bot disappears, you may need to add a new tile layer
--- local keyframes = {
---   {
---     properties = {
---       { property = "Z",      value = position.z + 1, ease = "Out" },
---       { property = "ScaleY", value = 1.5,            ease = "Out" }
---     },
---     duration = 0.5
---   },
---   {
---     properties = {
---       { property = "Z",      value = position.z, ease = "In" },
---       { property = "ScaleY", value = 1,          ease = "In" }
---     },
---     duration = 0.5
---   }
--- }
--- 
--- Net.animate_bot_properties(bot_id, keyframes)
--- ```
--- 
--- If you need something to happen when the animation ends, you should use [Async.sleep()](https://docs.hubos.dev/server/lua-api/async#asyncsleepseconds)
---@param bot_id ActorId
---@param keyframes ActorKeyframe[]
function Net.animate_bot_properties(bot_id, keyframes) end

--- - `content`: `string`
--- 
--- Modifies the asset in memory and updates any clients that have downloaded the previous version of this asset.
---@param server_path string
---@param content string
function Net.update_asset(server_path, content) end

--- Unloads the asset from the server, preventing the asset from being shared to clients.
---@param server_path string
function Net.remove_asset(server_path) end

--- Returns true if the asset exists.
---@param server_path string
---@return boolean
function Net.has_asset(server_path) end

--- Returns `"text" | "texture" | "audio" | "data"`
---@param server_path string
---@return "text" | "texture" | "audio" | "data"
function Net.get_asset_type(server_path) end

--- Returns the asset's size in bytes.
--- 
--- Note some assets are compressed when loaded by the server and may differ from the size on disk.
---@param server_path string
---@return number
function Net.get_asset_size(server_path) end

--- Packets sent by functions in the callback will wait until all packets arrive, causing every packet to be processed on the same frame and appear synchronized.
--- 
--- ```lua
--- Net.synchronize(function()
---   -- Net updates here will wait to be processed on clients until every update is received
--- end)
--- ```
---@param callback fun()
function Net.synchronize(callback) end

--- Automatically called by `Net.synchronize()`. Be careful when using directly.
function Net.request_update_synchronization() end

--- Automatically called by `Net.synchronize()`. Be careful when using directly.
function Net.request_disable_update_synchronization() end

--- Returns a promise from a callback. A resolve function is passed to this callback, which calls functions passed to `and_then`
--- 
--- This promise supports late calls to `and_then`
--- 
--- ```lua
--- local promise = Async.create_promise(function(resolve)
---   resolve(1, 2, 3)
--- end)
--- 
--- promise.and_then(print) -- outputs "1 2 3"
--- ```
---@generic T
---@param callback fun(resolve: fun(value: T))
---@return Promise<T>
function Async.create_promise(callback) end

--- Can only be used within an async scope or coroutine.
--- 
--- Waits for a promise by providing a function to and_then and yielding until the function is called.
--- 
--- Returns the value passed by and_then
---@param promise Promise<any>
---@return any
function Async.await(promise) end

--- Retruns an iterator from an async iterator (an iterator which returns promises).
--- 
--- Can only be used within a coroutine. Use `Async.promisify()` to let the server handle resuming the coroutine.
--- 
--- ```lua
--- -- example with Async.await(async_iterator)
--- local shop_items = {
---   { name = "a", price = 0 },
---   { name = "b", price = 0 }
--- }
--- 
--- Net:on("player_join", Async.create_function(function(event)
---   local emitter = Net.open_shop(event.player_id, )
--- 
---   -- events are automatically awaited
---   for event in Async.await(emitter:async_iter("shop_purchase")) do
---     print(event)
---   end
--- end))
--- ```
--- 
--- ```lua
--- -- example without Async.await(async_iterator)
--- local shop_items = {
---   { name = "a", price = 0 },
---   { name = "b", price = 0 }
--- }
--- 
--- Net:on("player_join", Async.create_function(function(event)
---   local emitter = Net.open_shop(event.player_id)
--- 
---   for promise in emitter:async_iter("shop_purchase") do
---     -- each event must be awaited individually
---     local event = Async.await(promise)
---     print(event)
---   end
--- end))
--- ```
---@param async_iterator fun(): Promise<any>
function Async.await(async_iterator) end

--- Can only be used within an async scope or coroutine.
--- 
--- Takes a list of promises and returns a list of values.
---@param promises Promise<any>[]
function Async.await_all(promises) end

--- Returns a promise, resolves to the return value.
--- 
--- ```lua
--- local promise = Async.create_scope(function()
---   Async.await(Async.sleep(5))
--- 
---   return "hi"
--- end)
--- 
--- promise.and_then(print) -- says "hi" after 5s
--- ```
---@generic T
---@param callback fun(): T
---@return Promise<T>
function Async.create_scope(callback) end

--- Returns a function that returns a promise, which resolves to the return value.
--- 
--- ```lua
--- local say_after = Async.create_function(function(message, delay)
---   Async.await(Async.sleep(delay)))
--- 
---   return message
--- end)
--- 
--- say_after("hello", 5).and_then(print) -- says "hello" after 5s
--- say_after("world", 10).and_then(print) -- says "world" after 10s
--- ```
---@generic T
---@param callback fun(...): T|nil
---@return fun(...): Promise<T>
function Async.create_function(callback) end

--- - `request_options`: [RequestOptions](https://docs.hubos.dev/server/lua-api/async#requestoptions)
--- 
--- Returns a promise that resolves to `{ status, headers, body }?`
---@param url string
---@param request_options? RequestOptions
---@return Promise<{ status: number, headers: table<string, string>, body:string }|nil>
function Async.request(url, request_options) end

--- - `request_options`: [RequestOptions](https://docs.hubos.dev/server/lua-api/async#requestoptions)
--- 
--- Downloads a file straight to disk.
--- 
--- Returns a promise that resolves to `true` if the file was successfully saved, or `false` if the operation failed.
---@param path string
---@param url string
---@param request_options? RequestOptions
---@return Promise<boolean>
function Async.download(path, url, request_options) end

--- Returns a promise that resolves to a string representing the bytes stored in the file.
--- 
--- An empty string is returned if reading failed.
---@param path string
---@return Promise<string>
function Async.read_file(path) end

--- Returns a promise that resolves to `true` if the file was successfully saved, or `false` if the operation failed.
---@param path string
---@param content string
---@return Promise<boolean>
function Async.write_file(path, content) end

--- Returns a promise that resolves to `{}?`
---@param address string
---@return Promise<{}|nil>
function Async.poll_server(address) end

--- You will not know if this succeeds, the other server will need to reply. See [server_message](https://docs.hubos.dev/server/lua-api/events#server_message).
---@param address string
---@param data string
function Async.message_server(address, data) end

--- Returns a promise that resolves after the duration has passed.
---@param seconds number
---@return Promise<nil>
function Async.sleep(seconds) end

--- Returns a promise that resolves to `0` or `nil` for disconnected.
---@param player_id ActorId
---@param message string
---@param mug_texture_path? string
---@param mug_animation_path? string
---@return Promise<0|nil>
function Async.message_player(player_id, message, mug_texture_path, mug_animation_path) end

--- - `textbox_options`: [TextboxOptions](https://docs.hubos.dev/server/lua-api/widgets#textboxoptions)
--- 
--- Returns a promise that resolves to `0` or `nil` for disconnected.
---@param player_id ActorId
---@param message string
---@param textbox_options? TextboxOptions
---@return Promise<0|nil>
function Async.message_player(player_id, message, textbox_options) end

--- Returns a promise that resolves to `1` for yes, `0` for no, and `nil` for disconnected.
---@param player_id ActorId
---@param question string
---@param mug_texture_path? string
---@param mug_animation_path? string
---@return Promise<0|1|nil>
function Async.question_player(player_id, question, mug_texture_path, mug_animation_path) end

--- - `textbox_options`: [TextboxOptions](https://docs.hubos.dev/server/lua-api/widgets#textboxoptions)
--- 
--- Returns a promise that resolves to `1` for yes, `0` for no, and `nil` for disconnected.
---@param player_id ActorId
---@param question string
---@param textbox_options? TextboxOptions
---@return Promise<0|1|nil>
function Async.question_player(player_id, question, textbox_options) end

--- Returns a promise that resolves to 0-2 for option a-c, or `nil` for disconnected.
---@param player_id ActorId
---@param option_a? string
---@param option_b? string
---@param option_c? string
---@param mug_texture_path? string
---@param mug_animation_path? string
---@return Promise<0|1|2|nil>
function Async.quiz_player(player_id, option_a, option_b, option_c, mug_texture_path, mug_animation_path) end

--- - `textbox_options`: [TextboxOptions](https://docs.hubos.dev/server/lua-api/widgets#textboxoptions)
--- 
--- Returns a promise that resolves to 0-2 for option a-c, or `nil` for disconnected.
---@param player_id ActorId
---@param option_a? string
---@param option_b? string
---@param option_c? string
---@param textbox_options? TextboxOptions
---@return Promise<0|1|2|nil>
function Async.quiz_player(player_id, option_a, option_b, option_c, textbox_options) end

--- Returns a promise that resolves to `string`, or `nil` for disconnected.
---@param player_id ActorId
---@param character_limit? number
---@param default_text? string
---@return Promise<string|nil>
function Async.prompt_player(player_id, character_limit, default_text) end

--- - `encounter_data`: anything that could be represented as JSON.
---   - Read as second param in encounter_init for the encounter package
--- 
--- Returns `Promise<BattleResults?>`
---@param player_id ActorId
---@param package_path string
---@param encounter_data? any
---@return Promise<BattleResults?>
function Async.initiate_encounter(player_id, package_path, encounter_data) end

--- - `encounter_data`: anything that could be represented as JSON.
---   - Read as second param in encounter_init for the encounter package
--- 
--- Returns `Promise<BattleResults?>[]`
---@param player_1_id ActorId
---@param player_2_id ActorId
---@param package_path? string
---@param encounter_data? any
---@return Promise<BattleResults?>[]
function Async.initiate_pvp(player_1_id, player_2_id, package_path, encounter_data) end

--- - `encounter_data`: anything that could be represented as JSON.
---   - Read as second param in encounter_init for the encounter package
--- 
--- Returns `Promise<BattleResults?>[]`
---@param player_ids ActorId[]
---@param package_path? string
---@param encounter_data? any
---@return Promise<BattleResults?>[]
function Async.initiate_netplay(player_ids, package_path, encounter_data) end

--- Encodes characters for use in a URI or within file names.
--- 
--- Alphanumeric characters, spaces, dashes, and underscores will be unmodified. Periods will also remain, unless the period is the first character in the text.
--- 
--- Returns a string.
---@param text string
---@return string
function Net.encode_uri_component(text) end

--- Decodes a string encoded for use in a URI.
--- 
--- Returns a string.
---@param text string
---@return string
function Net.decode_uri_component(text) end

--- Returns a number, specifically a cryptographically secure 64 bit random integer using the system's random number generator.
---@return number
function Net.system_random() end