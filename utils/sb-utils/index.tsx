const ind = (num: number) => {
  return "  ".repeat(num);
};

export const sourceCodeFormatter =
  (componentName: string, options?: any) => (_, context: any) => {
    const { map, indent = 1 } = options || { map: {}, indent: 1 };
    let args = "";
    for (const key in context.args) {
      const value = context.args[key];
      if (map && map[key]) {
        args += `${ind(indent)}${key}={${map[key]}}\n`;
        continue;
      }
      if (typeof value === "function") {
        args += `${ind(indent)}${key}={() => {}}\n`;
      } else if (typeof value === "object") {
        if (value instanceof Date) {
          args += `${ind(indent)}${key}={new Date("${value.toISOString()}")}\n`;
          continue;
        }
        const formattedValue = JSON.stringify(value, null, 2).replace(
          /\n/g,
          "\n  "
        );
        args += `${ind(indent)}${key}={${formattedValue}}\n`;
      } else if (typeof value === "boolean") {
        args += `${ind(indent)}${key}={${value.toString()}}\n`;
      } else if (typeof value === "number") {
        args += `${ind(indent)}${key}={${value.toString()}}\n`;
      } else {
        args += `${ind(indent)}${key}="${value}"\n`;
      }
    }

    return `<${componentName}\n` + `${args}` + `/>`;
  };
