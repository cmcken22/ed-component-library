import { createTheme } from "@mui/material";

export const Colors = {
  Bermuda: {
    main: "#03919F",
    light: "#05A8B8",
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
  },
  Cabaret: {
    main: "#DA4167",
    light: "#EB7288",
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
  },
  Resolver: {
    main: "#9C71C0",
    light: "#B08CCC",
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
  },
  Charcoal: {
    main: "#828282",
    light: "#9A9A9A",
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
  },
  Success: {
    main: "#00A86B",
    light: "#00C37E",
    dark: "#008456",
    contrastText: "#FFFFFF",
  },
  Warning: {
    main: "#FFA500",
    light: "#FFC266",
    dark: "#E69500",
    contrastText: "#FFFFFF",
  },
  Danger: {
    main: "#B7163E",
    light: "#C2284D",
    dark: "#A1042B",
    contrastText: "#FFFFFF",
  },
  text: {
    main: "#1F1F1F",
    primary: "#1F1F1F",
    secondary: "#1F1F1F",
    disabled: "#1F1F1F",
    contrastText: "#FFFFFF",
  },
};

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    danger: any;
    charcoal: any;
    // @ts-ignore
    grey: any;
  }
  interface PaletteOptions {
    danger: any;
    charcoal: any;
    // @ts-ignore
    grey: any;
  }
}

const omitDefaultColrs = {
  // 100: "undefined",
  200: "#00FFFFFF",
  300: "#00FFFFFF",
  400: "#00FFFFFF",
  500: "#00FFFFFF",
  600: "#00FFFFFF",
  700: "#00FFFFFF",
  800: "#00FFFFFF",
  900: "#00FFFFFF",
  A100: "#00FFFFFF",
  A200: "#00FFFFFF",
  A400: "#00FFFFFF",
  A700: "#00FFFFFF",
  // contrastText: "#00FFFFFF",
};

const { palette: p1 } = createTheme();
const theme = createTheme({
  palette: {
    primary: p1.augmentColor({
      color: { ...Colors.Bermuda },
    }),
    secondary: p1.augmentColor({
      color: { ...Colors.Cabaret },
    }),
    danger: p1.augmentColor({
      color: { ...Colors.Danger },
    }),
    charcoal: p1.augmentColor({
      color: { ...Colors.Charcoal },
    }),
    success: p1.augmentColor({
      color: { ...Colors.Success },
    }),
    warning: p1.augmentColor({
      color: { ...Colors.Warning },
    }),
    error: p1.augmentColor({
      color: { ...Colors.Danger },
    }),
    // @ts-ignore
    grey: p1.augmentColor({
      color: {
        ...Colors.Charcoal,
        ...omitDefaultColrs,
      },
    }),
    // @ts-ignore
    text: p1.augmentColor({
      color: {
        ...Colors.text,
        ...omitDefaultColrs,
      },
    }),
    action: {
      disabledOpacity: 0.48,
      disabledBackground: "",
      disabled: "",
    },
  },
});

export const palette = theme.palette;
