import { DefinitionMap } from "../../shared/definition_map";

const CLASS_NAMES = [
  "Entity",
  "AttackContext",
  "Sprite",
  "Animation",
  "Action",
  "DefenseRule",
  "Defense",
  "IntangibleRule",
  "AuxProp",
  "Status",
  "ActionStep",
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

  // special case
  definitions["Hud"] = [
    //
    "---@class Hud: Sprite",
    "Hud = {}",
  ];
}
