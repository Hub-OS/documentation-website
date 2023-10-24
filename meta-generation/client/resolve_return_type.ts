import { Section } from "../shared/read_docs";
import PRIMITIVES from "../shared/primitives";

const COMPRESSED_RETURN_TYPES = [
  {
    type: "Entity",
    list: ["Returns the entity passed"],
  },
  {
    type: "Entity[]",
    list: ["Returns a list of entities"],
  },
  {
    type: "EntityId",
    list: ["Returns the id "],
  },
  {
    type: "EntityContext",
    list: [
      "Returns a value that can be used to decide if an attack can counter",
    ],
  },
  {
    type: "Rank",
    list: ["Returns the character's rank."],
  },
  {
    type: "HitProps",
    list: ["Returns a copy of the spell's [HitProps]"],
  },
  {
    type: "DeckCard[]",
    list: ["Returns a list of [DeckCard]"],
  },
  {
    type: "CardProperties",
    list: ["Returns a copy of the action's card properties."],
  },
  {
    type: "CardProperties[]",
    list: ["Returns a list of [CardProperties]"],
  },
  {
    type: "StagedItem[]",
    list: ["Returns a list of [StagedItem]"],
  },
  {
    type: "Direction",
    list: ["Returns the facing [Direction]"],
  },
  {
    type: "Tile[]",
    list: ["Returns a list of [Tiles]"],
  },
  {
    type: "Augment[]",
    list: ["Returns a list of [Augments]"],
  },
  {
    type: "Sprite",
    list: [
      "Returns a reference to the attachment's [Sprite]",
      "Returns a reference to the sync node's sprite",
      "Returns a new child Sprite ",
    ],
  },
  {
    type: "Animation",
    list: [
      "Returns a reference to the attachment's [Animation]",
      "Returns a reference to the sync node's [Animation]",
    ],
  },
  {
    type: "boolean",
    list: ["Returns a bool"],
  },
  {
    type: "number",
    list: [
      "Returns the amount ",
      "Returns the max amount ",
      "Returns the width ",
      "Returns the height ",
      "Returns the column ",
      "Returns the row ",
      "Returns the total columns ",
      "Returns the total rows ",
      "Returns an integer",
      "Returns the player's total ",
      "Returns the elevation ",
      "Returns the movement's animation progress",
      "Returns the entity's current health.",
      "Returns the entity's max health.",
    ],
  },
  {
    type: "string",
    list: [
      "Returns the displayed name ",
      "Returns the package id ",
      "Returns the path ",
      "Returns the name ",
      "Returns a state name ",
    ],
  },
  {
    type: "string[]",
    list: ["Returns a list of valid values for `player:set_emotion()`."],
  },
];

const FLATTENED_RETURN_TYPES = COMPRESSED_RETURN_TYPES.flatMap(
  ({ type, list }) =>
    list.map((begins_with) => ({
      type,
      begins_with,
    }))
);

export default function resolveReturnType(
  section: Section
): string | undefined {
  if (section.name.startsWith("`aux_prop:")) {
    // special exception
    return "AuxProp";
  }

  let text = section.body;
  const returnIndex = text.indexOf("Returns");

  if (returnIndex == -1) {
    return undefined;
  }

  text = text.substring(returnIndex);
  const nillable = text.includes("`nil`");

  let typeText = FLATTENED_RETURN_TYPES.find((v) =>
    text.startsWith(v.begins_with)
  )?.type;

  if (typeText) {
    return typeText;
  }

  text = text.replace(/Returns( the| an|:?(:? a)?(:? new)?) /, "");

  if (text.startsWith("[")) {
    typeText = text.substring(1, text.indexOf("]"));
  } else if (text.startsWith("`")) {
    typeText = text.substring(1, text.indexOf("`", 1));
  } else {
    typeText = text.substring(0, text.search(/(?:\.| |$)/));

    if (typeText == "true") {
      typeText = "boolean";
    } else if (!PRIMITIVES.includes(typeText)) {
      typeText = typeText.replaceAll(/[^a-zA-Z]/g, "_");
      typeText = typeText[0].toUpperCase() + typeText.substring(1);
    }
  }

  return nillable ? typeText + "|nil" : typeText;
}
