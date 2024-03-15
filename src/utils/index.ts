export function hexToRGBA(hex: string, opacity: number) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export const shouldNotForwardProp =
  (invalidList: string[]) => (prop: string) => {
    return !invalidList.includes(prop);
  };

export const sourceCodeFormatter =
  (componentName: string) => (_, context: any) => {
    let args = "";
    for (const key in context.args) {
      const value = context.args[key];
      if (typeof value === "function") {
        args += `  ${key}={() => {}}\n`;
      } else if (typeof value === "object") {
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
