const ind = (num: number) => {
  return "  ".repeat(num);
};

export const formatArgs = ({ args, map, indent }: any) => {
  let res = "";
  for (const key in args) {
    const value = args[key];
    if (map && map[key]) {
      const formattedValue =
        typeof map[key] === "function" ? map[key](value) : map[key];
      res += `${ind(indent)}${key}={${formattedValue}}\n`;
      continue;
    }
    if (typeof value === "function") {
      res += `${ind(indent)}${key}={() => {}}\n`;
    } else if (typeof value === "object") {
      if (value instanceof Date) {
        res += `${ind(indent)}${key}={new Date("${value.toISOString()}")}\n`;
        continue;
      }
      const formattedValue = JSON.stringify(value, null, 2).replace(
        /\n/g,
        "\n  "
      );
      res += `${ind(indent)}${key}={${formattedValue}}\n`;
    } else if (typeof value === "boolean") {
      res += `${ind(indent)}${key}={${value.toString()}}\n`;
    } else if (typeof value === "number") {
      res += `${ind(indent)}${key}={${value.toString()}}\n`;
    } else {
      res += `${ind(indent)}${key}="${value}"\n`;
    }
  }
  return res;
};

export const sourceCodeFormatter =
  (componentName: string, options?: any) => (_, context: any) => {
    const { map, indent = 1 } = options || { map: {}, indent: 1 };
    const args = formatArgs({ args: context.args, map, indent });
    return `<${componentName}\n` + `${args}` + `/>`;
  };
