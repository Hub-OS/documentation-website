export function stringToCommentList(text: string): string[] {
  return text.split("\n").map((line) => "--- " + line);
}

export function snakeToPascal(text: string): string {
  return text
    .split("_")
    .map((name) => name[0].toUpperCase() + name.slice(1))
    .join("");
}

export function baseTableName(heading: string) {
  const dotIndex = heading.indexOf(".");
  const colonIndex = heading.indexOf(":");
  const separator_index = dotIndex == -1 ? colonIndex : dotIndex;
  return heading.slice(0, separator_index);
}
