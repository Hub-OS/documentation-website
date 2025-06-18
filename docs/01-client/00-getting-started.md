# Getting Started

This guide provides information on creating mods for the client. For creating custom servers, take a look at the [server documentation](/server/minimal-setup)

## Steps

- [Install VS Code](#install-visual-studio-code)
- [Open Mods Folder in VS Code](#open-the-mods-folder-in-vs-code)
- [Install Extensions](#install-extensions)
- [Add Type Definitions File](#add-type-definitions-file)
- [Understanding the Mods Folder](#understanding-the-mods-folder)
- [Your First Mod!](#your-first-mod)
- [Utilizing Types](#utilizing-types)

## Install Visual Studio Code

Download from the [official website](https://code.visualstudio.com/)

## Open the Mods Folder in VS Code

You can open your mods folder in VS Code by right clicking on the folder and selecting `Open with Code` or by using `File -> Open Folder` within VS Code.

![Open Folder Dropdown Option](/img/getting-started/open-folder.png)

## Install Extensions

You'll want at minimum the Lua extension by sumneko, as it will provide syntax highlighting and autocomplete for Lua:

![Sumneko Extension](/img/getting-started/sumneko-install.png)

## Add Type Definitions File

You can add our client type definitions file to your project / mods folder: [Client Type Definitions](/hubos-client.d.lua)

It should look like this inside of VS Code:

![Type Definitions File](/img/getting-started/type-definitions.png)

## Understanding the Mods Folder

Each category of mod has a specific folder it should exist in. Some categories may share a folder, such as `library` and `pack` / mod packs.

You can read more details about where each category of mod belongs and what is expected in [Packages](/client/packages).

At minimum a mod must contain a `package.toml` file for meta information such as the category, name, and package ID.

![Minimal Mod](/img/getting-started/minimal-mod.png)

## Your First Mod

The best way to learn is to add your own changes to simple mods from others before trying from scratch.

Some starter mods:

- [Man](https://hubos.dev/mods/com.discord.Konstinople%237692.player.Man)
  - Features: Simple forms, basic attacks.
- [Bass](https://hubos.dev/mods/dev.konstinople.player.Bass)
  - Features: Emotions, custom actions, chip charging, intro.
- [ProtoMan](https://hubos.dev/mods/BattleNetwork6.ProtoMan)
  - Features: Emotions, custom actions, chip charging, special attack, fixed cards, reusing cards as attacks.

If you want to start from scratch take a look at the [Packages section](/client/packages) for the base requirements of each type of mod.

## Utilizing Types

If you provide correct type information for your function parameters, the Lua extension can provide in-editor documentation and code suggestions from the type definitions file.

Proper annotations for script entry functions can be found in the [Packages section](/client/packages) (Ctrl+F for `entry.lua`).

[More details on Sumneko Lua's Annotations](https://luals.github.io/wiki/annotations/)

An example of how this works, see how the `button` variable gets suggestions and documentation from only adding `---@param player Entity`:

![Autocomplete](/img/getting-started/utilizing-types.png)
