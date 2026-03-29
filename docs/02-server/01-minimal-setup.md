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

Run the server through a command prompt or terminal and join on `127.0.0.1:7370`

Use `-h` to see more options and research port forwarding or server hosting if you want to share your server with others over the internet

### Port Forwarding Alternatives

- [PLAYIT.GG](https://playit.gg/)
  - Routes up to 4 TCP / UDP ports through a sharable URL.
  - Running the [playit program](https://playit.gg/download/) should guide you through creating an account and setting up an "Agent"
  - To forward Hub OS, you'll need to create a new tunnel.
    - Tunnel Type: `UDP`
    - Description: `Hub OS server https://hubos.dev`
    - Origin Port: `7370`
