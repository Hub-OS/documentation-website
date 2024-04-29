import { DefinitionMap } from "../../shared/definition_map";

export const STRUCT_NAMES = [
  "TilePosition",
  "TiledObject",
  "TiledObjectOptions",
  "TiledObjectData",
  "TiledBasicObjectData",
  "TiledPolygonObjectData",
  "TiledTileObjectData",
  "TiledCustomProperties",
  "BotOptions",
  "ActorKeyframe",
  "ActorPropertyKeyframe",
  "ItemDefinition",
  "TextboxOptions",
  "TextStyle",
  "SpriteOptions",
  "Color",
  "TextureAnimationPair",
  "ShopItem",
  "BoardPost",
  "TilesetData",
  "TileData",
  "BattleResults",
  "RequestOptions",
];

export function defineStructs(definitions: DefinitionMap) {
  for (const name of STRUCT_NAMES) {
    definitions[name] = [];
  }
}
