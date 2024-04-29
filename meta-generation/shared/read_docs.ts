import * as fs from "fs";
import * as path from "path";

export type Chapter = { name: string; body: string; sections: Section[] };
export type Section = { name: string; body: string };
export type DocusaurusConfig = { url: string };

const SECTION_REGEX = /^#* (?:(?!^#).)+$/gms;

export default function (
  config: DocusaurusConfig,
  relative_path: string,
  api_sub_path: string
): Chapter[] {
  const docs_folder = path.join(module.path, relative_path);
  const api_folder = path.join(docs_folder, api_sub_path);
  const api_root_entries = fs.readdirSync(api_folder);
  const folders = api_root_entries
    .filter((name) => !name.includes("."))
    .map((name) => path.join(api_folder, name));

  const files = folders.flatMap((folder_path) =>
    fs
      .readdirSync(folder_path)
      .filter((name) => name.endsWith(".md"))
      .map((name) => path.join(folder_path, name))
  );

  files.push(
    ...api_root_entries
      .filter((name) => name.endsWith(".md"))
      .map((name) => path.join(api_folder, name))
  );

  const chapters: Chapter[] = [];

  for (const path of files) {
    const text = fs.readFileSync(path, "utf8");

    const file_url =
      config.url +
      path
        // remove `.md`
        .slice(0, path.length - 3)
        // remove absolute path prefix
        .substring(docs_folder.length)
        // removing number/ordering prefix
        .split("/")
        .map((name) => name.replace(/[0-9]+-/, ""))
        .join("/");

    for (const [match] of text.matchAll(SECTION_REGEX)) {
      const firstNewLine = match.indexOf("\n");

      const body = match
        .substring(firstNewLine)
        .replaceAll("](/", "](" + config.url + "/")
        .replaceAll("](#", "](" + file_url + "#")
        .trim();

      if (match.startsWith("# ") || match.startsWith("## ")) {
        // # or ##
        const nameStart = match[1] == "#" ? 3 : 2;

        chapters.push({
          name: match.substring(nameStart, firstNewLine),
          body,
          sections: [],
        });
      } else {
        // ###
        const chapter = chapters[chapters.length - 1];

        const section = {
          file_url,
          // "### ".length == 4
          name: match.substring(4, firstNewLine),
          // skip the first two new lines for the body
          body,
        };

        chapter.sections.push(section);
      }
    }
  }

  return chapters;
}
