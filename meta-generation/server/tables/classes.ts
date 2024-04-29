import { DefinitionMap } from "../../shared/definition_map";

const CLASS_NAMES = ["Net.EventEmitter"];

export function defineClasses(definitions: DefinitionMap) {
  for (const name of CLASS_NAMES) {
    definitions[name] = [
      //
      "---@class " + name,
      name + " = {}",
    ];
  }

  definitions["Promise"] = [
    "---@class Promise<T>: { and_then: fun(callback: fun(T)) }",
  ];
}
