import { DefinitionMap } from "../definition_map";

export const ENTITY_SUBCATEGORIES = [
  "Artifact",
  "Player",
  "Spell",
  "Character",
  "Living",
  "Obstacle",
  "SharedHitbox",
  "Hitbox",
  "Explosion",
  "Poof",
  "Alert",
  "TrapAlert",
];

const STATIC_TABLES = [
  ...ENTITY_SUBCATEGORIES,
  "Resources",
  "DefenseVirusBody",
  "TurnGauge",
  "Buster",
];

export function defineStaticTables(definitions: DefinitionMap) {
  for (const name of STATIC_TABLES) {
    definitions[name] = [name + " = {}"];
  }
}
