export const sourceCodeFormatter =
  (componentName: string, map?: any) => (_, context: any) => {
    let args = "";
    for (const key in context.args) {
      const value = context.args[key];
      if (map && map[key]) {
        args += `  ${key}={${map[key]}}\n`;
        continue;
      }
      if (typeof value === "function") {
        args += `  ${key}={() => {}}\n`;
      } else if (typeof value === "object") {
        if (value instanceof Date) {
          args += `  ${key}={new Date("${value.toISOString()}")}\n`;
          continue;
        }
        const formattedValue = JSON.stringify(value, null, 2).replace(
          /\n/g,
          "\n  "
        );
        args += `  ${key}={${formattedValue}}\n`;
      } else if (typeof value === "boolean") {
        args += `  ${key}={${value.toString()}}\n`;
      } else if (typeof value === "number") {
        args += `  ${key}={${value.toString()}}\n`;
      } else {
        args += `  ${key}="${value}"\n`;
      }
    }

    return `<${componentName}\n` + `${args}` + `/>`;
  };
