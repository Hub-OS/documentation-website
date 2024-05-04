const COMPRESSED_VARIABLE_TYPES = [
  { type: "Namespace", list: ["namespace"] },
  {
    type: "Entity",
    list: [
      "entity",
      "spell",
      "player",
      "character",
      "attacker",
      "defender",
      "owner",
    ],
  },
  { type: "EntityId", list: ["id", "entity_id", "target_id", "observer_id"] },
  { type: "EntityId[]", list: ["exclude_list"] },
  {
    type: "EntityContext",
    list: ["context"],
  },
  { type: "PlayerForm", list: ["form"] },
  { type: "Lifetime", list: ["lifetime"] },
  { type: "Element", list: ["element", "secondary_element"] },
  { type: "Element[]", list: ["element_weaknesses"] },
  { type: "Rank", list: ["rank"] },
  { type: "Input", list: ["input_query"] },
  { type: "AudioBehavior", list: ["audio_behavior"] },
  { type: "Animation", list: ["animation"] },
  { type: "Playback", list: ["playback"] },
  { type: "any", list: ["frame_data"] }, // todo: [number, number][]
  { type: "Color", list: ["color", "color_a", "color_b"] },
  { type: "ColorMode", list: ["color_mode"] },
  { type: "TextStyle", list: ["text_style"] },
  { type: "Sprite", list: ["sprite"] },
  { type: "SpriteShaderEffect", list: ["sprite_shader_effect"] },
  { type: "SyncNode", list: ["sync_node"] },
  { type: "Team", list: ["team"] },
  { type: "Movement", list: ["movement"] },
  { type: "Direction", list: ["direction", "direction_a", "direction_b"] },
  { type: "Drag", list: ["drag"] },
  { type: "Tile", list: ["tile", "prev_tile", "dest_tile"] },
  { type: "TileState", list: ["tile_state"] },
  { type: "Highlight", list: ["highlight"] },
  { type: "HitProps", list: ["hit_props"] },
  { type: "DeckCard", list: ["deck_card"] },
  { type: "CardProperties", list: ["card_properties", "card"] },
  { type: "CardClass", list: ["card_class"] },
  { type: "Element", list: ["element"] },
  { type: "Action", list: ["action"] },
  { type: "ActionLockout", list: ["lockout"] },
  { type: "DefenseRule", list: ["defense_rule"] },
  { type: "DefensePriority", list: ["defense_priority"] },
  { type: "DefenseOrder", list: ["defense_order"] },
  { type: "DefenseJudge", list: ["judge"] },
  { type: "IntangibleRule", list: ["intangible_rule"] },
  { type: "AuxProp", list: ["aux_prop"] },
  { type: "Compare", list: ["compare"] },
  {
    type: "boolean",
    list: [
      "bool",
      "charged",
      "time_freeze",
      "enabled",
      "enable",
      "share",
      "never_flip",
      "loops",
      "do_once",
      "visible",
      "intangible",
      "conceal",
      "prevent_time_freeze_counter",
      "skip_time_freeze_intro",
      "can_boost",
      "can_charge",
    ],
  },
  {
    type: "number",
    list: [
      "hit_weaknesses",
      "distance",
      "hit_flag", // todo
      "hit_flags", // todo
      "flags", // todo
      "index",
      "deck_index",
      "player_index",
      "tile_width",
      "tile_height",
      "vel_x",
      "vel_y",
      "time",
      "frames",
      "endlag",
      "delay",
      "delta",
      "elapsed",
      "layer",
      "width",
      "height",
      "elevation",
      "health",
      "percentage",
      "progress",
      "damage",
      "recover",
      "size",
      "slot_count",
      "level_increment",
      "increment",
      "increase",
      "strength",
      "duration",
      "amount",
      "limit",
      "count",
      "frame_index",
      "delta",
      "col",
      "row",
      "x",
      "y",
      "r",
      "g",
      "b",
      "a",
    ],
  },
  {
    type: "string",
    list: [
      "text",
      "font_name",
      "emotion",
      "tag",
      "package_id",
      "description",
      "code",
      "state",
      "name",
      "short_name",
      "point_name",
      "path",
      "texture_path",
      "category",
      "animation_path",
      "expr",
    ],
  },
  { type: "string[]", list: ["texture_paths", "tags"] },
  { type: "fun()", list: ["callback"] },
];

const VARIABLE_TYPE_MAP: { [name: string]: string } = {};

for (const { type, list } of COMPRESSED_VARIABLE_TYPES) {
  for (const name of list) {
    VARIABLE_TYPE_MAP[name] = type;
  }
}

export default function resolveVariableType(name: string): string | undefined {
  return VARIABLE_TYPE_MAP[name];
}
