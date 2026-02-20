---
sidebar_position: 1
---

# Minimal Setup

- `areas` folder
  - `.tmx` map files, `default.tmx` required
  - See [Areas](/server/areas)
- `assets` folder
  - Tilesets, textures, audio, animations, packages
  - See [Assets](/server/assets)
- `scripts` folder
  - Lua files. Entry scripts are read from `scripts/*/main.lua` for script projects, and `scripts/*.lua` for single file scripts
  - See [Lua API](/server/lua-api/lua-version-and-changes/)
- Server executable

Run the server through a command prompt or terminal and join on `127.0.0.1:8765`

Use `-h` to see more options and research port forwarding or server hosting if you want to share your server with others over the internet

### Port Forwarding Alternatives

- [PLAYIT.GG](https://playit.gg/)
  - Routes up to 4 TCP / UDP ports through a sharable URL.
  - <details>
      <summary>Set tunnel type to UDP, port to 8765, and the description to `Hub OS server https://hubos.dev`</summary>
      ![PlayIt.GG](/img/server/playit.gg.png)
    </details>
