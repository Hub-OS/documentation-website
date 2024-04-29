import resolveRequiredCallbackType from "./resolve_required_callback_type";

export default function resolveArgumentTypes(
  class_name: string,
  argument_group: string,
  resolve_variable_type: (name: string) => string
): { name: string; type: string; optional: boolean }[] {
  const arguments_text = argument_group.slice(1, argument_group.length - 1);
  const result: { name: string; type: string; optional: boolean }[] = [];

  let exhausted = false;
  let start_index = 0;
  let end_index = 0;

  while (!exhausted) {
    const is_callback = arguments_text.startsWith("function(", start_index);

    if (is_callback) {
      // skip args
      end_index = arguments_text.indexOf(")") + 1;
      // jump to next comma or end
      end_index = arguments_text.indexOf(",", end_index);
    } else {
      end_index = arguments_text.indexOf(",", start_index);
    }

    exhausted = end_index == -1;

    if (exhausted) {
      end_index = arguments_text.length;
    }

    if (start_index >= end_index) {
      break;
    }

    let argument_text = arguments_text.slice(start_index, end_index);
    const optional = argument_text.endsWith("?");

    if (optional) {
      argument_text = argument_text.slice(0, argument_text.length - 1);
    }

    if (!is_callback) {
      const name = argument_text;
      const type = resolve_variable_type(name);

      result.push({ name, type, optional });
    } else {
      const type = resolveRequiredCallbackType(
        class_name,
        argument_text,
        resolve_variable_type
      );

      result.push({ name: "callback", type, optional });
    }

    start_index = end_index + 2;
  }

  return result;
}
