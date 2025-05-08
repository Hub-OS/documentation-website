# Server Events

Positions are in tile space. To get the center of a tile add `0.5`

### `tick`

Emits 20 times per second.

```lua
Net:on("tick", function(event)
  -- { delta_time: number (seconds) }
  print(event.delta_time)
end)
```

### `player_request`

Emits when the player requests connection to the server. It is the first event seen by scripts for a player's connection.

Only transfers and kicks should occur in listeners for this event.

```lua
Net:on("player_request", function(event)
  -- { player_id: Net.ActorId, data: string }
  print(event.player_id, event.data)
end)
```

### `player_connect`

Emits when the player connects to the server (good place to setup while the player is loading).

```lua
Net:on("player_connect", function(event)
  -- { player_id: Net.ActorId }
  print(event.player_id)
end)
```

### `player_join`

Emits when the player enters their first area after connecting.

```lua
Net:on("player_join", function(event)
  -- { player_id: Net.ActorId }
  print(event.player_id)
end)
```

### `player_area_transfer`

Emits when the player changes area.

```lua
Net:on("player_area_transfer", function(event)
  -- { player_id: Net.ActorId }
  print(event.player_id)
end)
```

### `player_disconnect`

The player is invalid after this function executes.

```lua
Net:on("player_disconnect", function(event)
  -- { player_id: Net.ActorId }
  print(event.player_id)
end)
```

### `player_move`

Calling `Net.get_player_position(event.player_id)` within the listener will report the player's old position, as the player's position is updated after the event is emitted.

```lua
Net:on("player_move", function(event)
  -- { player_id: Net.ActorId, x: number, y: number, z: number }
  print(event.player_id, event.x, event.y, event.z)
end)
```

### `player_augment`

The player's base health and max health will be updated on the player before this event emits.

```lua
Net:on("player_augment", function(event)
  -- { player_id: Net.ActorId, augments: { id: string }[] }
  print(event.player_id, event)
end)
```

### `player_avatar_change`

The player's health, base health, max health, and element will be updated on the player before this function executes.
`prevent_default` blocks texture and animation change from being visible to other clients.

```lua
Net:on("player_avatar_change", function(event)
  -- { player_id: Net.ActorId, texture_path: string, animation_path: string, prevent_default: Function }
  print(event.player_id, event)
end)
```

### `player_emote`

```lua
Net:on("player_emote", function(event)
  -- { player_id: Net.ActorId, emote: number, prevent_default: Function }
  print(event.player_id, event.emote)
end)
```

### `custom_warp`

Player warped out by a "Custom Warp" or "Custom Server Warp".

```lua
Net:on("custom_warp", function(event)
  -- { player_id: Net.ActorId, object_id: number }
  print(event.player_id, event.object_id)
end)
```

### `object_interaction`

The player has pressed the Interact button on an Object.

```lua
Net:on("object_interaction", function(event)
  -- { player_id: Net.ActorId, object_id: number, button: number }
  print(event.player_id, event.object_id, event.button)
end)
```

### `actor_interaction`

The player has pressed the Interact button on another Player or Bot.

```lua
Net:on("actor_interaction", function(event)
  -- { player_id: Net.ActorId, actor_id: string, button: number }
  -- actor_id is a player or bot id
  print(event.player_id, event.actor_id, event.button)
end)
```

### `tile_interaction`

The player has pressed the Interact button with no Actor or Object in range.

```lua
Net:on("tile_interaction", function(event)
  -- { player_id: Net.ActorId, x: number, y: number, z: number, button: number }
  print(event.player_id, event.x, event.y, event.z, event.button)
end)
```

### `textbox_response`

```lua
Net:on("textbox_response", function(event)
  -- { player_id: Net.ActorId, response: number | string }
  print(event.player_id, event.response)
end)
```

### `board_open`

Deprecated.

```lua
Net:on("board_open", function(event)
  -- { player_id: Net.ActorId }
  print(event.player_id)
end)
```

### `board_close`

The board menu has closed from either another menu opening or the player pressing the Cancel button.

```lua
Net:on("board_close", function(event)
  -- { player_id: Net.ActorId }
  print(event.player_id)
end)
```

### `post_request`

Client has exhausted board posts and is requesting more posts. Useful for implementing infinite scroll.

```lua
Net:on("post_request", function(event)
  -- { player_id: Net.ActorId }
  print(event.player_id)
end)
```

### `post_selection`

The player has pressed the Confirm button on a board post. A custom response using textboxes is expected, but optional.

```lua
Net:on("post_selection", function(event)
  -- { player_id: Net.ActorId, post_id: string }
  print(event.player_id, event.post_id)
end)
```

### `shop_leave`

The player has pressed the Cancel button in the shop menu. A custom message using [Net.set_shop_message()](/server/lua-api/widgets#netset_shop_messageplayer_id-message) is expected, but optional.

```lua
Net:on("shop_leave", function(event)
  -- { player_id: Net.ActorId }
  print(event.player_id)
end)
```

### `shop_close`

The shop menu has closed from either another menu opening or completing leave.

```lua
Net:on("shop_close", function(event)
  -- { player_id: Net.ActorId }
  print(event.player_id)
end)
```

### `shop_purchase`

The player has pressed the Confirm button on a shop item. A custom response using textboxes is expected, but optional.

```lua
Net:on("shop_purchase", function(event)
  -- { player_id: Net.ActorId, item_id: string }
  print(event.player_id, event.item_id)
end)
```

### `shop_description_request`

The player has pressed the Info button on a shop item.

```lua
Net:on("shop_description_request", function(event)
  -- { player_id: Net.ActorId, item_id: string }
  print(event.player_id, event.item_id)
end)
```

### `item_use`

Emits when the player requests to use an item. Does not automatically remove the item from their inventory.

```lua
Net:on("item_use", function(event)
  -- { player_id: Net.ActorId, item_id: string }
  print(event.player_id, event.item_id)
end)
```

### `battle_results`

Emits after a player leaves any server sent battle, regardless of winning, losing, or running.

```lua
Net:on("battle_results", function(event)
  --[[
    {
      player_id: Net.ActorId,
      won: boolean,
      health: number,
      score: number,
      time: number,
      ran: bool,
      emotion: string,
      turns: number,
      allies: { name: String, health: number }[],
      enemies: { name: String, health: number }[],
      neutral: { name: String, health: number }[],
    }
  ]]--
  print(event.player_id, event.health, event.time, event.ran, event.emotion, event.turns, event.enemies)
end)
```

### `battle_message`

Access to data sent by [encounter:send_to_server()](/client/lua-api/field-api/encounter#encountersend_to_serverdata) in encounter mods sent by the server.

```lua
Net:on("battle_message", function(event)
  --[[
    {
      player_id: Net.ActorId,
      battle_id: Net.BattleId,
      data: any
    }
  ]]--
  print(event.player_id, event.data)
end)
```

### `server_message`

```lua
Net:on("server_message", function(event)
  -- { address: string, data: string }
  print(event.address, event.data)
en
```

### `authorization`

A player on another server needs to be authenticated with this server, caused by a server calling [Net.request_authorization()](/server/lua-api/players#netrequest_authorizationplayer_id-address-data).

The host for the other server is provided with the event for custom response / implementation.

Do NOT share identity with other servers, use data for a temporary link between identities without sharing the identity.

```lua
Net:on("authorization", function(event)
  -- { identity: string, host: string, data: string }
  print(event.identity, event.host, event.data)
end)
```
