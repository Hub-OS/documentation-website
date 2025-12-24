import { DefinitionMap } from "../../shared/definition_map";

export const STRUCT_NAMES = [
  "Net.Position",
  "Net.Object",
  "Net.ObjectOptions",
  "Net.ObjectData",
  "Net.BasicObjectData",
  "Net.PolygonObjectData",
  "Net.TileObjectData",
  "Net.CustomProperties",
  "Net.BotOptions",
  "Net.ActorKeyframe",
  "Net.ActorPropertyKeyframe",
  "Net.ItemDefinition",
  "Net.TextboxOptions",
  "Net.TextStyle",
  "Net.SpriteOptions",
  "Net.TextSpriteOptions",
  "Net.ReferOptions",
  "Net.Color",
  "Net.TextureAnimationPair",
  "Net.ShopItem",
  "Net.BoardPost",
  "Net.TilesetData",
  "Net.TileData",
  "Net.BattleResults",
  "Net.RequestOptions",
];

export function defineStructs(definitions: DefinitionMap) {
  for (const name of STRUCT_NAMES) {
    definitions[name] = [];
  }
}
