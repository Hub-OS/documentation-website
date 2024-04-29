import { DefinitionMap } from "../../shared/definition_map";

const STATIC_TABLES = ["Async", "Net"];

export function defineStaticTables(definitions: DefinitionMap) {
  for (const name of STATIC_TABLES) {
    definitions[name] = [name + " = {}"];
  }
}
