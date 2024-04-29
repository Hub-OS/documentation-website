// types that are vaguely documented as just existing

import { DefinitionMap } from "../../shared/definition_map";

const ALIASES = ["ActorId", "SpriteId"];

export function defineVague(definitions: DefinitionMap) {
  for (const name of ALIASES) {
    definitions[name] = ["---@class " + name];
  }
}
