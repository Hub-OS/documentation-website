---
sidebar_position: 1
---

# Minimal Setup

- `areas` folder
  - `.tmx` map files, `default.tmx` required
  - The base file name is used to resolve the ID for the area: `default.tmx` is `default`
  - See [Areas](/server/areas)
- `assets` folder
  - Tilesets, textures, audio, animations, packages
  - Mods stored in this location can be referenced as a path by the server: `/server/mods/custom_encounter`.
  - See [Assets](/server/assets)
- `mods` folder
  - Stores any client mods, each mod should be in their own unzipped folder.
  - Mods stored in this location can be referenced as a path by the server: `/server/mods/custom_encounter`.
- `scripts` folder
  - Lua files. Entry scripts are read from `scripts/*/main.lua` for script projects, and `scripts/*.lua` for single file scripts
  - Paths passed to `require()` are relative to the server folder: `require("scripts/libs/direction")`
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
