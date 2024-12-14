import { Section } from "../shared/read_docs";
import PRIMITIVES from "../shared/primitives";

const COMPRESSED_RETURN_TYPES = [
  { type: "Net.ActorId", list: ["Returns a `bot_id`"] },
  {
    type: "Net.ActorId[]",
    list: ["Returns a list of `player_id`", "Returns a list of `bot_id`"],
  },
  { type: "Net.SpriteId", list: ["Returns sprite_id"] },
  {
    type: "Net.TextureAnimationPair",
    list: ["Returns [Net.TextureAnimationPair]"],
  },
  { type: "Net.Object", list: ["Returns [Net.Object]"] },
  { type: "Net.TilesetData", list: ["Returns [Net.TilesetData]"] },
  { type: "Net.TileData", list: ["Returns [Net.TileData]"] },
  { type: "Net.EventEmitter", list: ["Returns [Net.EventEmitter]"] },
  {
    type: "fun(): any",
    list: ["Returns an Iterator"],
  },
  {
    type: "fun(...): Net.Promise<T>",
    list: [
      "Returns a function that returns a promise, which resolves to the return value.",
    ],
  },
  {
    type: "fun(): Net.Promise",
    list: ["Returns an iterator that returns promises"],
  },
  {
    type: "Net.Promise<0|nil>",
    list: ["Returns a promise that resolves to `0`"],
  },
  {
    type: "Net.Promise<0|1|nil>",
    list: ["Returns a promise that resolves to `1`"],
  },
  {
    type: "Net.Promise<0|1|2|nil>",
    list: ["Returns a promise that resolves to 0-2"],
  },
  {
    type: "Net.Promise<string|nil>",
    list: ["Returns a promise that resolves to `string`"],
  },
  {
    type: "Net.Promise<{ status: number, headers: table<string, string>, body:string }|nil>",
    list: ["Returns a promise that resolves to `{ status, headers, body }?`"],
  },
  {
    type: "Net.Promise<boolean>",
    list: [
      "Returns a promise that resolves to `true` if the file was successfully saved, or `false` if the operation failed.",
    ],
  },
  {
    type: "Net.Promise<string>",
    list: [
      "Returns a promise that resolves to a string representing the bytes stored in the file.",
    ],
  },
  {
    type: "Net.Promise<T>",
    list: [
      "Returns a promise from a callback. A resolve function is passed to this callback",
      "Returns a promise, resolves to the return value.",
    ],
  },
  {
    type: "Net.Promise<{}|nil>",
    list: ["Returns a promise that resolves to `{}?`"],
  },
  {
    type: "Net.Promise<nil>",
    list: ["Returns a promise that resolves after the duration has passed."],
  },
  {
    type: "boolean",
    list: ["Returns a bool"],
  },
  {
    type: "number",
    list: [
      "Returns an `object_id`",
      "Returns the width",
      "Returns the height",
      "Returns the asset's size in bytes",
      "Returns the amount",
      "Returns the player's maximum",
      "Returns the starting health",
      "Returns the screen width",
      "Returns the screen height",
    ],
  },

  {
    type: "number, number",
    list: [
      "Returns the screen position using multi-values.",
      "Returns the world position using multi-values.",
    ],
  },
  {
    type: "number, number, number",
    list: [
      "Returns the player's position using multi-values.",
      "Returns the bot's position using multi-values.",
      "Returns the spawn position using multi-values.",
    ],
  },
  { type: "number[]", list: ["Returns a list of `object_id`"] },
  {
    type: "string",
    list: [
      "Returns a tmx string",
      "Returns the emotion",
      "Returns the name",
      "Returns the description",
      "Returns a list of unique item ids",
      "Returns the path",
      "Returns the `area_id`",
      "Returns the IP",
      "Returns the secret identifier for this player",
      "Returns the facing direction",
    ],
  },
  {
    type: "string[]",
    list: ["Returns a list of `tileset_path`", "Returns a list of area_ids"],
  },
  { type: "any", list: ["Returns the value passed by and_then"] },
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
    typeText = text.substring(0, text.search(/(?:[,. ]|$)/));

    if (typeText == "true") {
      typeText = "boolean";
    } else if (!PRIMITIVES.includes(typeText)) {
      typeText = typeText.replaceAll(/[^a-zA-Z]/g, "_");
      typeText = typeText[0].toUpperCase() + typeText.substring(1);
    }
  }

  return nillable ? typeText + "|nil" : typeText;
}
