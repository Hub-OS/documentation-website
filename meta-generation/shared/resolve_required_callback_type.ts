import resolveArgumentTypes from "./resolve_argument_types";

export default function resolveRequiredCallbackType(
  class_name: string,
  argument_text: string,
  resolve_variable_type: (name: string) => string
): string {
  const argument_group_end = argument_text.indexOf(")") + 1;
  const argument_group = argument_text.slice(
    argument_text.indexOf("("),
    argument_group_end
  );

  const argument_info = resolveArgumentTypes(
    class_name,
    argument_group,
    resolve_variable_type
  );

  const argument_strings = argument_info.map(({ type, name, optional }) => {
    if (name == "self") {
      return "self: " + class_name;
    }

    if (name == "...") {
      return name;
    }

    let string = name;

    if (optional) {
      string = string + "?";
    }

    return string + ": " + type;
  });
  const arguments_string = argument_strings.join(", ");

  const return_type = argument_text.slice(argument_group_end);

  return "fun(" + arguments_string + ")" + return_type;
}
