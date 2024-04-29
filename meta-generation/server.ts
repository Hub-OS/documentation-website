// npx ts-node meta-generation/server.ts
// https://luals.github.io/wiki/annotations/

import { defineVague } from "./server/tables/vague";
import { defineEnums } from "./server/tables/enums";
import { defineClasses } from "./server/tables/classes";
import { STRUCT_NAMES, defineStructs } from "./server/tables/structs";
import { defineFactories } from "./server/tables/factories";
import { defineStaticTables } from "./server/tables/static_tables";
import resolveReturnType from "./server/resolve_return_type";
import resolveVariableType from "./server/resolve_variable_type";
import resolveArgumentTypes from "./shared/resolve_argument_types";
import resolveRequiredCallbackType from "./shared/resolve_required_callback_type";
import readDocs, { Chapter, Section } from "./shared/read_docs";
import {
  baseTableName,
  snakeToPascal,
  stringToCommentList,
} from "./shared/util";
import {
  DefinitionMap,
  TypeDefinition,
  isDefinitionEnum,
} from "./shared/definition_map";
import * as fs from "fs";

const config = require("../docusaurus.config");

//// warning suppression

const DUPLICATE_ALLOWED = [];

//// definitions

const TABLE_DEFINITIONS: DefinitionMap = {};

defineVague(TABLE_DEFINITIONS);
defineEnums(TABLE_DEFINITIONS);
defineClasses(TABLE_DEFINITIONS);
defineStructs(TABLE_DEFINITIONS);
defineFactories(TABLE_DEFINITIONS);
defineStaticTables(TABLE_DEFINITIONS);

//// regex

const FUNCTION_REGEX = /[A-Za-z_]+[.:][A-Za-z0-9_<, >]*\(.*\)/;

//// building the file
const EXCLUDED_CHAPTERS = ["Server Events"];

function buildMetaFile() {
  const chapters = readDocs(config, "../../docs", "02-server/04-lua-api");
  const all_sections = chapters
    .filter((chapter) => !EXCLUDED_CHAPTERS.includes(chapter.name))
    .flatMap((chapter) => {
      return chapter.sections.map((section): [Chapter, Section] => [
        chapter,
        section,
      ]);
    });

  let output = [
    "---@meta",
    "-- https://luals.github.io/wiki/annotations/",
    "---@diagnostic disable: missing-return, unused-local",
    "",
  ];

  for (const chapter of chapters) {
    if (STRUCT_NAMES.includes(chapter.name)) {
      documentStruct(chapter);
      continue;
    }
  }

  // finish building TABLE_DEFINITIONS
  for (const [chapter, section] of all_sections) {
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
      throw `No definition for ${table_name} (in ${chapter.name})`;
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

    if (chapter && !STRUCT_NAMES.includes(chapter.name)) {
      output.push(...stringToCommentList(chapter.body));
    }

    output.push(...tableDefinition);
    output.push("");
  }

  // functions
  for (const [_, section] of all_sections) {
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

  fs.writeFileSync("static/hubos-server.d.lua", output.join("\n"));
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

function documentStruct(section: Section) {
  const definition = TABLE_DEFINITIONS[section.name];

  const startIndex = section.body.indexOf("```") + 3;
  const endIndex = section.body.indexOf("```", startIndex);

  // comments
  const commentText = section.body.slice(endIndex + 3).trim();

  if (commentText != "") {
    for (const line of commentText.split("\n")) {
      definition.push("---" + line);
    }
  }

  // real bits
  const lines = section.body.slice(startIndex, endIndex).split("\n");

  for (let i = 1; i < lines.length - 1; i++) {
    definition.push(lines[i]);
  }
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

  const colon_index = heading.indexOf(":");
  const separator_index =
    colon_index == -1 || colon_index > paren_open_index
      ? heading.indexOf(".")
      : colon_index;
  const separator = heading[separator_index];

  let table_name = resolveTableName(heading);
  const original_table_name = snakeToPascal(baseTableName(heading));
  let function_name = heading.slice(separator_index + 1, paren_open_index);
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

  // inject generics
  const generics_start = function_name.indexOf("<");

  if (generics_start > 0) {
    const generics_end = function_name.indexOf(">");
    const generics = function_name.slice(generics_start + 1, generics_end);

    output.push("---@generic " + generics);

    function_name = function_name.slice(0, generics_start);
  }

  // inject arguments
  const argumentTypes = resolveArgumentTypes(
    table_name,
    argument_group,
    resolveVariableType
  );

  for (const { type, name, optional } of argumentTypes) {
    if (name != "...") {
      output.push(`---@param ${name}${optional ? "?" : ""} ${type}`);
    }
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
  let function_start = heading.indexOf("(");
  if (function_start == -1) {
    function_start = heading.length;
  }

  const searchable_slice = heading.slice(0, function_start);

  const dot_index = searchable_slice.indexOf(".");
  const colon_index = searchable_slice.indexOf(":");
  const separator_index = colon_index == -1 ? dot_index : colon_index;
  const table_name = snakeToPascal(heading.slice(0, separator_index));

  if (table_name == "Emitter") {
    return "Net.EventEmitter";
  }

  return table_name;
}

buildMetaFile();
