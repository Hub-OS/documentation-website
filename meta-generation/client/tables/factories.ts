import { DefinitionMap } from "../../shared/definition_map";

// tables that create tables with no inheritance
// ex: `Color.new()` creates an {r,g,b,a} table with no methods or links back to Color

const FACTORIES = [
  "Color",
  "TextStyle",
  "TextMetrics",
  "Movement",
  "Drag",
  "HitProps",
  "DeckCard",
  "CardProperties",
  "StagedItem",
];

export function defineFactories(definitions: DefinitionMap) {
  for (const name of FACTORIES) {
    definitions[name] = [
      //
      "---@class " + name,
      "",
      name + " = {}",
    ];
  }
}

export default FACTORIES;
