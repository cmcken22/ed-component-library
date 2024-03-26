import { CommonColors, TypeText, createTheme } from "@mui/material";

const Bermuda = {
  extraLight: "#F4FEFF",
  light: "#05A8B8",
  main: "#03919F",
  dark: "#027884",
  contrastText: "#FFFFFF",
  10: "#A1F0FB",
  20: "#2BDEF2",
  30: "#05C4D6",
  40: "#05A8B8",
  50: "#03919F",
  60: "#027884",
  70: "#02606A",
  80: "#014A52",
  90: "#04343A",
  100: "#051F23",
};

const Cabaret = {
  light: "#EB7288",
  main: "#DA4167",
  dark: "#BE3859",
  contrastText: "#FFFFFF",
  10: "#F6DCDE",
  20: "#F2BBC1",
  30: "#EF97A3",
  40: "#EB7288",
  50: "#DA4167",
  60: "#BE3859",
  70: "#9A2B47",
  80: "#782036",
  90: "#561625",
  100: "#340E16",
};

const Resolver = {
  light: "#B08CCC",
  main: "#9C71C0",
  dark: "#8856B4",
  contrastText: "#FFFFFF",
  10: "#E8DFEF",
  20: "#D5C3E3",
  30: "#C2A6D7",
  40: "#B08CCC",
  50: "#9C71C0",
  60: "#8856B4",
  70: "#70409B",
  80: "#573179",
  90: "#3D2256",
  100: "#20112D",
};

const Charcoal = {
  light: "#9A9A9A",
  main: "#828282",
  dark: "#6C6C6C",
  contrastText: "#FFFFFF",
  1: "#FCFCFC",
  3: "#FBFBFB",
  5: "#F6F6F6",
  10: "#E2E2E2",
  20: "#C9C9C9",
  30: "#B0B0B0",
  40: "#9A9A9A",
  50: "#828282",
  60: "#6C6C6C",
  70: "#565656",
  80: "#424242",
  90: "#2E2E2E",
  100: "#1F1F1F",
};

const Success = {
  extraLight: "#F1FFFA",
  light: "#00C37E",
  main: "#00A86B",
  dark: "#008456",
};

const Warning = {
  extraLight: "#FFF8EB",
  light: "#FFC266",
  main: "#FFA500",
  dark: "#E69500",
};

const Danger = {
  extraLight: "#FFF3F6",
  light: "#C2284D",
  main: "#B7163E",
  dark: "#A1042B",
};

const Text = {
  placeholder: Charcoal[40],
  primary: Charcoal[100],
  secondary: Charcoal[100],
  disabled: Charcoal[40],
};

const Common = {
  white: "#FFFFFF",
  black: "#000000",
};

const Border = {
  main: Charcoal[20],
  dark: Charcoal[60],
};

const Colors = {
  Bermuda,
  Cabaret,
  Resolver,
  Charcoal,
  Success,
  Warning,
  Danger,
  text: Text,
  info: Bermuda,
  common: Common,
};

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    danger: any;
    charcoal: any;
    border: any;
  }
  interface PaletteOptions {
    danger: any;
    charcoal: any;
    border: any;
  }
}

const theme = createTheme({
  palette: {
    primary: Colors.Bermuda,
    secondary: Colors.Cabaret,
    danger: Colors.Danger,
    charcoal: Colors.Charcoal,
    success: Colors.Success,
    warning: Colors.Warning,
    error: Colors.Danger,
    grey: Colors.Charcoal,
    text: Colors.text as Partial<TypeText>,
    info: Colors.info,
    common: Colors.common as Partial<CommonColors>,
    border: Border,
    action: {
      disabledOpacity: 0.48,
      disabledBackground: "",
      disabled: "",
    },
  },
});

const omitThemeColors = (colors: string[]) => (palette: any) => {
  colors.forEach((color) => {
    delete palette[color];
  });
};

const palette = theme.palette;
omitThemeColors([
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "A100",
  "A200",
  "A400",
  "A700",
  "contrastText",
])(palette.grey);
omitThemeColors(["contrastText"])(palette.primary);
omitThemeColors(["contrastText"])(palette.secondary);
omitThemeColors(["contrastText"])(palette.success);
omitThemeColors(["contrastText"])(palette.warning);
omitThemeColors(["contrastText"])(palette.danger);
omitThemeColors(["contrastText"])(palette.charcoal);
omitThemeColors(["contrastText"])(palette.error);
omitThemeColors(["contrastText"])(palette.text);
omitThemeColors(["contrastText"])(palette.info);

export { Colors, palette };
export default palette;
