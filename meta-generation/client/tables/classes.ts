import { DefinitionMap } from "../definition_map";

const CLASS_NAMES = [
  "Entity",
  "TextStyle",
  "Sprite",
  "Animation",
  "Action",
  "DefenseRule",
  "IntangibleRule",
  "AuxProp",
  "DefenseJudge",
  "Status",
  "Step",
  "Attachment",
  "Spawner",
  "Mutator",
  "Encounter",
  "Tile",
  "Field",
  "Augment",
  "PlayerForm",
  "CardSelectButton",
  "Component",
  "SyncNode",
  "ActionLockout",
  "CustomTileState",
];

export function defineClasses(definitions: DefinitionMap) {
  for (const name of CLASS_NAMES) {
    definitions[name] = [
      //
      "---@class " + name,
      name + " = {}",
    ];
  }
}
