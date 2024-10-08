import { DefinitionMap } from "../../shared/definition_map";

const FLAT_ENUMS = {
  Shadow: ["None", "Small", "Big"],
  Lifetime: [
    "Local",
    "ActiveBattle",
    "Battle",
    "Scene",
    "CardSelectOpen",
    "CardSelectClose",
    "CardSelectComplete",
    "Nil",
  ],
  Direction: [
    "None",
    "Up",
    "Left",
    "Down",
    "Right",
    "UpLeft",
    "UpRight",
    "DownLeft",
    "DownRight",
  ],
  Element: [
    "None",
    "Fire",
    "Aqua",
    "Elec",
    "Wood",
    "Sword",
    "Wind",
    "Cursor",
    "Summon",
    "Plus",
    "Break",
  ],
  Rank: [
    "V1",
    "V2",
    "V3",
    "V4",
    "V5",
    "SP",
    "EX",
    "Rare1",
    "Rare2",
    "NM",
    "RV",
    "DS",
    "Alpha",
    "Beta",
    "Omega",
    "Sigma",
  ],
  Highlight: ["None", "Flash", "Solid"],
  CardClass: ["Standard", "Mega", "Giga", "Dark"],
  Team: ["Other", "Red", "Blue"],
  AudioBehavior: ["Default", "NoOverlap", "EndLoop"],
  Playback: ["Once", "Loop", "Bounce", "Reverse"],
  ColorMode: ["Additive", "Multiply"],
  SpriteShaderEffect: ["None", "Grayscale", "Pixelate"],
  Compare: ["LT", "LE", "EQ", "NE", "GT", "GE"],
  DefensePriority: ["Barrier", "Body", "Action", "Trap", "Last"],
  DefenseOrder: ["Always", "CollisionOnly"],
  ActionType: ["All", "Normal", "Charged", "Special", "Card", "Scripted"],
};

const SPECIAL_ENUMS = {
  Hit: [
    "---@enum Hit",
    "---@type { [string]: Hit }",
    "Hit = {}",
    "Hit.RetainIntangible = Hit._",
    "Hit.NoCounter = Hit._",
    "Hit.Drag = Hit._",
    "Hit.Impact = Hit._",
    "Hit.Flinch = Hit._",
    "Hit.Flash = Hit._",
    "Hit.Shake = Hit._",
    "Hit.PierceInvis = Hit._",
    "Hit.PierceGuard = Hit._",
    "Hit.PierceGround = Hit._",
    "Hit.Freeze = Hit._",
    "Hit.Paralyze = Hit._",
    "Hit.Root = Hit._",
    "Hit.Blind = Hit._",
    "Hit.Confuse = Hit._",
  ],
  TileState: [
    "---@enum TileState",
    "---@type { [string]: TileState }",
    "TileState = {}",
    "TileState.Void = TileState._",
    "TileState.Normal = TileState._",
    "TileState.PermaHole = TileState._",
    "TileState.Cracked = TileState._",
    "TileState.Broken = TileState._",
  ],
  Input: [
    "---@enum Input",
    "local _Input = { _ = 0 }",
    "",
    "Input = {",
    "  Held = {",
    "    Up = _Input._,",
    "    Left = _Input._,",
    "    Right = _Input._,",
    "    Down = _Input._,",
    "    Use = _Input._,",
    "    Special = _Input._,",
    "    Shoot = _Input._,",
    "    FaceLeft = _Input._,",
    "    FaceRight = _Input._,",
    "    LeftShoulder = _Input._,",
    "    RightShoulder = _Input._,",
    "    Confirm = _Input._,",
    "    Cancel = _Input._,",
    "    EndTurn = _Input._,",
    "    Ready = _Input._,",
    "  },",
    "  Pressed = {",
    "    Up = _Input._,",
    "    Left = _Input._,",
    "    Right = _Input._,",
    "    Down = _Input._,",
    "    Use = _Input._,",
    "    Special = _Input._,",
    "    Shoot = _Input._,",
    "    FaceLeft = _Input._,",
    "    FaceRight = _Input._,",
    "    LeftShoulder = _Input._,",
    "    RightShoulder = _Input._,",
    "    Confirm = _Input._,",
    "    Cancel = _Input._,",
    "    EndTurn = _Input._,",
    "    Ready = _Input._,",
    "  },",
    "  Pulsed = {",
    "    Up = _Input._,",
    "    Left = _Input._,",
    "    Right = _Input._,",
    "    Down = _Input._,",
    "    Use = _Input._,",
    "    Special = _Input._,",
    "    Shoot = _Input._,",
    "    FaceLeft = _Input._,",
    "    FaceRight = _Input._,",
    "    LeftShoulder = _Input._,",
    "    RightShoulder = _Input._,",
    "    Confirm = _Input._,",
    "    Cancel = _Input._,",
    "    EndTurn = _Input._,",
    "    Ready = _Input._,",
    "  },",
    "}",
  ],
};

export function defineEnums(definitions: DefinitionMap) {
  for (const name in FLAT_ENUMS) {
    definitions[name] = [
      "---@enum " + name,
      name + " = {",
      ...FLAT_ENUMS[name].map((value_name) => `  ${value_name} = 0,`),
      "}",
    ];
  }

  for (const name in SPECIAL_ENUMS) {
    definitions[name] = SPECIAL_ENUMS[name];
  }
}
