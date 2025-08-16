// npx ts-node meta-generation/client.ts
// https://luals.github.io/wiki/annotations/

import { defineVague } from "./client/tables/vague";
import { defineEnums } from "./client/tables/enums";
import { defineClasses } from "./client/tables/classes";
import { defineFactories } from "./client/tables/factories";
import {
  ENTITY_SUBCATEGORIES,
  defineStaticTables,
} from "./client/tables/static_tables";
import resolveReturnType from "./client/resolve_return_type";
import resolveVariableType from "./client/resolve_variable_type";
import resolveArgumentTypes from "./shared/resolve_argument_types";
import resolveRequiredCallbackType from "./shared/resolve_required_callback_type";
import readDocs, { Section } from "./shared/read_docs";
import {
  baseTableName,
  snakeToPascal,
  stringToCommentList,
} from "./shared/util";
import { TypeDefinition, isDefinitionEnum } from "./shared/definition_map";
import * as fs from "fs";

const config = require("../docusaurus.config");

//// warning suppression

const DUPLICATE_ALLOWED = [
  "HitProps.new(damage, flags, element, secondary_element, context?, drag?)",
  "HitProps.new(damage, flags, element, context?, drag?)",
  "Field.spawn(entity, tile)",
  "Field.spawn(entity, col, row)",
];

//// definitions

const TABLE_DEFINITIONS = {};

defineVague(TABLE_DEFINITIONS);
defineEnums(TABLE_DEFINITIONS);
defineClasses(TABLE_DEFINITIONS);
defineFactories(TABLE_DEFINITIONS);
defineStaticTables(TABLE_DEFINITIONS);

//// regex

const FUNCTION_REGEX = /[A-Za-z_]+[.:][A-Za-z0-9_]*\(.*\)/;

//// building the file

function buildMetaFile() {
  const chapters = readDocs(config, "../../docs", "01-client/04-lua-api");
  const all_sections = chapters.flatMap((chapter) => chapter.sections);

  let output = [
    "---@meta",
    "-- https://luals.github.io/wiki/annotations/",
    "---@diagnostic disable: missing-return, unused-local, inject-field",
    "",
    "---@type string",
    "_folder_path = nil",
    "",
  ];

  // finish building TABLE_DEFINITIONS
  for (const section of all_sections) {
    if (!section.name.startsWith("`")) {
      continue;
    }

    const heading = section.name.slice(1, section.name.length - 1);

    if (FUNCTION_REGEX.test(heading)) {
      continue;
    }

    const table_name = resolveTableName(heading);
    const definition = TABLE_DEFINITIONS[table_name];

    if (!definition) {
      throw "No definition for " + table_name;
    }

    let field_name = resolveFieldName(heading);

    if (isDefinitionEnum(definition)) {
      const comments = stringToCommentList(section.body);
      documentEnumValue(definition, field_name, comments);
      continue;
    }

    if (field_name[0] == field_name[0].toUpperCase()) {
      // ### `Drag.None`
      definition.push(`---@type ${resolveReturnType(section)}`);
      definition.push(`${table_name}.${field_name} = nil`);
      continue;
    }

    let type: string;

    if (heading.includes("function(")) {
      // ### `table.callback_func = function()`
      type = resolveRequiredCallbackType(
        table_name,
        heading,
        resolveVariableType
      );
    } else {
      // ### `table.property`
      type = resolveVariableType(field_name);
    }

    const comments = stringToCommentList(section.body);
    documentField(definition, field_name, type, comments);
  }

  // write definitions
  for (const name in TABLE_DEFINITIONS) {
    const tableDefinition = TABLE_DEFINITIONS[name];
    const chapter = chapters.find((chapter) => chapter.name == name);

    if (chapter) {
      output.push(...stringToCommentList(chapter.body));
    }

    output.push(...tableDefinition);
    output.push("");
  }

  // functions
  for (const section of all_sections) {
    if (!section.name.startsWith("`")) {
      continue;
    }

    const heading = section.name.slice(1, section.name.length - 1);

    if (FUNCTION_REGEX.test(heading)) {
      outputFunctionDefinition(output, section, heading);
    }
  }

  if (output[output.length - 1] == "") {
    // remove excess spacing
    output.pop();
  }

  fs.writeFileSync("static/hubos-client.d.lua", output.join("\n"));
}

function resolveFieldName(trimmed_section_name: string): string {
  let name_end_index = trimmed_section_name.indexOf(" = ");

  if (name_end_index == -1) {
    name_end_index = trimmed_section_name.length;
  }
  return trimmed_section_name.slice(
    trimmed_section_name.indexOf(".") + 1,
    name_end_index
  );
}

function documentEnumValue(
  definition: TypeDefinition,
  name: string,
  comments: string[]
) {
  const insertIndex = definition.findIndex((line) =>
    line.trim().startsWith(name)
  );

  if (insertIndex == -1) {
    throw `No property ${name} on enum`;
  }

  definition.splice(insertIndex, 0, ...comments);
}

function documentField(
  definition: TypeDefinition,
  name: string,
  type: string,
  comments: string[]
) {
  let index = 0;

  for (index; index < definition.length; index++) {
    const item = definition[index];

    if (!item.startsWith("---@class") && !item.startsWith("---@field")) {
      break;
    }
  }

  if (index == 0) {
    throw `Failed to document ${name}, not a class?`;
  }

  definition.splice(index, 0, ...comments, `---@field ${name} ${type}`);
}

function outputFunctionDefinition(
  output: string[],
  section: Section,
  heading: string
) {
  const paren_open_index = heading.indexOf("(");
  const separator_index = Math.max(
    heading.lastIndexOf(".", paren_open_index),
    heading.lastIndexOf(":", paren_open_index)
  );
  const separator = heading[separator_index];

  let table_name = resolveTableName(heading);
  const original_table_name = snakeToPascal(baseTableName(heading));
  const function_name = heading.slice(separator_index + 1, paren_open_index);
  let argument_group = heading.slice(paren_open_index);

  // inject comment
  output.push(...stringToCommentList(section.body));

  if (table_name != original_table_name && table_name == "Entity") {
    const table_url =
      config.url +
      "/client/lua-api/entity-api/" +
      original_table_name.toLowerCase();

    output.push("---");
    output.push(
      `--- Throws if the Entity doesn't pass [${original_table_name}.from()](${table_url})`
    );
  }

  // inject arguments
  const argumentTypes = resolveArgumentTypes(
    table_name,
    argument_group,
    resolveVariableType
  );

  for (const { type, name, optional } of argumentTypes) {
    output.push(`---@param ${name}${optional ? "?" : ""} ${type}`);
  }

  argument_group = "(" + argumentTypes.map(({ name }) => name).join(", ") + ")";

  // inject return value
  const returnType = resolveReturnType(section);

  if (returnType) {
    output.push("---@return " + returnType);
  }

  // warning suppression
  if (DUPLICATE_ALLOWED.includes(heading)) {
    output.push("---@diagnostic disable-next-line: duplicate-set-field");
  }

  // inject declaration
  output.push(
    `function ${table_name}${separator}${function_name}${argument_group} end`
  );

  // spacing
  output.push("");
}

function resolveTableName(heading: string) {
  const dotIndex = heading.indexOf(".");
  const colonIndex = heading.indexOf(":");
  const separator_index = dotIndex == -1 ? colonIndex : dotIndex;
  // const table_name = snakeToPascal(heading.slice(0, separator_index));

  const variable_name = heading.slice(0, separator_index);
  const table_name = resolveVariableType(variable_name) || variable_name;

  if (ENTITY_SUBCATEGORIES.includes(table_name)) {
    const is_constructor =
      heading.startsWith(".new", separator_index) ||
      heading.startsWith(".from", separator_index);

    if (!is_constructor) {
      return "Entity";
    }
  }

  return table_name;
}

buildMetaFile();
