export type TypeDefinition = string[];
export type DefinitionMap = { [name: string]: TypeDefinition };

export function isDefinitionEnum(definition: string[]) {
  return definition.some((item) => item.startsWith("---@enum"));
}
