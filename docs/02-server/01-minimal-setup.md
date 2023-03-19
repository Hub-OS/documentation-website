---
sidebar_position: 1
---

# Minimal Setup

- `areas` folder
  - `.tmx` map files, `default.tmx` required
  - See [Areas](./areas)
- `assets` folder
  - Tilesets, textures, audio, animations, packages
  - See [Assets](./assets)
- `scripts` folder
  - Lua files. Entry scripts are read from `scripts/*/main.lua` for script projects, and `scripts/*.lua` for single file scripts
  - See [Lua API](#lua-api)
- Server executable
  - See [Building the Project](#building-the-project) if you don't have a copy

Run the server through a command prompt or terminal and join on `127.0.0.1:8765`

Use `-h` to see more options and research port forwarding or server hosting if you want to share your server with others over the internet
