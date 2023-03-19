# Synchronization

### `Net.synchronize(function())`

Packets sent by functions in the callback will wait until all packets arrive, causing every packet to be processed on the same frame and appear synchronized.

```lua
Net.synchronize(function()
  -- Net updates here will wait to be processed on clients until every update is received
end)
```

### `Net.request_update_synchronization()`

Automatically called by `Net.synchronize()`. Be careful when using directly.

### `Net.request_disable_update_synchronization()`

Automatically called by `Net.synchronize()`. Be careful when using directly.
