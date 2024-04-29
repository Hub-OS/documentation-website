import { DefinitionMap } from "../../shared/definition_map";

const FLAT_ENUMS = {};

const SPECIAL_ENUMS = {};

export function defineEnums(definitions: DefinitionMap) {
  for (const name in FLAT_ENUMS) {
    definitions[name] = [
      "---@enum " + name,
      name + " = {",
      ...FLAT_ENUMS[name].map((value_name) => `  ${value_name} = {},`),
      "}",
    ];
  }

  for (const name in SPECIAL_ENUMS) {
    definitions[name] = SPECIAL_ENUMS[name];
  }
}
