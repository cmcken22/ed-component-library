import { useMediaQuery, useTheme } from "@mui/material";

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

export const useBreakPoint = () => {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const xs = useMediaQuery(theme.breakpoints.up("xs"));

  if (xl) return "xl";
  if (lg) return "lg";
  if (md) return "md";
  if (sm) return "sm";
  if (xs) return "xs";
  return "";
};
