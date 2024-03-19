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

export const sizeFormat = (value: string | number) => {
  if (typeof value === "string") {
    const num = +value;
    if (!isNaN(num)) return `${num}px`;
    return value;
  }
  return `${value}px`;
};
