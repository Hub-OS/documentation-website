# Assets

Types of assets:

- Texture (.png|.bmp)
- Audio (.ogg|.wav|.mid|.midi|.mp3)
- Mod Packages (.zip)
- Text

Paths

- `/server`
  - Pseudo folder that represents files in memory
  - `/assets`
    - Generated at start from files in `./assets`.
    - `./assets/prog.png` can be referenced with `/server/assets/prog.png`
  - `/players`
    - Stores avatar files sent from players (5 MiB limit)
    - Textures are stored as `[id].texture`, and animations are stored as `[id].animation`
  - `/areas`
    - Generated from areas and updated every tick.
    - Stored as `[area id].txt`
- Paths not starting with `/server` are treated as paths to client files. Files of interest are available in `assets/`
- PATHS ARE CASE SENSITIVE OUT OF WINDOWS, also avoid `\` as that's Windows specific
