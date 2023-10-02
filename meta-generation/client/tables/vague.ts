// types that are vaguely documented as just existing

import { DefinitionMap } from "../definition_map";

const ALIASES = ["EntityId", "EntityContext", "Namespace"];

export function defineVague(definitions: DefinitionMap) {
  for (const name of ALIASES) {
    definitions[name] = ["---@class " + name];
  }
}
