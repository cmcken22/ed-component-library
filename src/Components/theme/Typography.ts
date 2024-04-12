import { createTheme } from "@mui/material";

export enum FONTS {
  RED_HAT_DISPLAY = "Red Hat Display",
  NUNITO = "Nunito",
}
export enum FONT_WEIGHT {
  regular = "regular",
  medium = "medium",
  semiBold = "semiBold",
  bold = "bold",
}
export const FONT_WEIGHT_VALUES = {
  [FONT_WEIGHT.regular]: 400,
  [FONT_WEIGHT.medium]: 500,
  [FONT_WEIGHT.semiBold]: 600,
  [FONT_WEIGHT.bold]: 700,
};

export type FontWeight = FONT_WEIGHT | keyof typeof FONT_WEIGHT;

export enum FONT_STYLE {
  normal = "normal",
  italic = "italic",
}
export type FontStyle = FONT_STYLE | keyof typeof FONT_STYLE;

export enum FONT_VARIANT {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  bodyR = "bodyR",
  bodyS = "bodyS",
  bodyXS = "bodyXS",
  button = "button",
  errorMessage = "errorMessage",
  fieldLabel = "fieldLabel",
}

export type FontVariant = FONT_VARIANT | keyof typeof FONT_VARIANT;

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    [FONT_VARIANT.bodyR]: any;
    [FONT_VARIANT.bodyS]: any;
    [FONT_VARIANT.bodyXS]: any;
    [FONT_VARIANT.errorMessage]: any;
    [FONT_VARIANT.fieldLabel]: any;
  }
  interface TypographyOptions {
    [FONT_VARIANT.bodyR]: any;
    [FONT_VARIANT.bodyS]: any;
    [FONT_VARIANT.bodyXS]: any;
    [FONT_VARIANT.errorMessage]: any;
    [FONT_VARIANT.fieldLabel]: any;
  }
}

const { typography: t1 } = createTheme();
const theme = createTheme({
  typography: {
    fontFamily: [
      `${FONTS.RED_HAT_DISPLAY}, Arial, sans-serif`,
      `${FONTS.NUNITO}, sans-serif`,
    ].join(","),
    fontWeightLight: FONT_WEIGHT_VALUES.regular,
    fontWeightRegular: FONT_WEIGHT_VALUES.medium,
    fontWeightMedium: FONT_WEIGHT_VALUES.semiBold,
    fontWeightBold: FONT_WEIGHT_VALUES.bold,
    [FONT_VARIANT.h1]: {
      fontFamily: FONTS.RED_HAT_DISPLAY,
      fontWeight: FONT_WEIGHT_VALUES.bold,
      fontSize: t1.pxToRem(32),
    },
    [FONT_VARIANT.h2]: {
      fontFamily: FONTS.RED_HAT_DISPLAY,
      fontWeight: FONT_WEIGHT_VALUES.semiBold,
      fontSize: t1.pxToRem(28),
    },
    [FONT_VARIANT.h3]: {
      fontFamily: FONTS.RED_HAT_DISPLAY,
      fontWeight: FONT_WEIGHT_VALUES.medium,
      fontSize: t1.pxToRem(24),
    },
    [FONT_VARIANT.h4]: {
      fontFamily: FONTS.RED_HAT_DISPLAY,
      fontWeight: FONT_WEIGHT_VALUES.regular,
      fontSize: t1.pxToRem(22),
    },
    [FONT_VARIANT.h5]: {
      fontFamily: FONTS.RED_HAT_DISPLAY,
      fontWeight: FONT_WEIGHT_VALUES.regular,
      fontSize: t1.pxToRem(18),
    },
    [FONT_VARIANT.bodyR]: {
      fontFamily: FONTS.NUNITO,
      fontSize: t1.pxToRem(16),
    },
    [FONT_VARIANT.bodyS]: {
      fontFamily: FONTS.NUNITO,
      fontSize: t1.pxToRem(14),
    },
    [FONT_VARIANT.bodyXS]: {
      fontFamily: FONTS.NUNITO,
      fontSize: t1.pxToRem(12),
    },
    [FONT_VARIANT.button]: {
      fontFamily: FONTS.RED_HAT_DISPLAY,
      fontWeight: FONT_WEIGHT_VALUES.medium,
      fontSize: t1.pxToRem(14),
      lineHeight: 1.429,
      textTransform: "none",
    },
    [FONT_VARIANT.errorMessage]: {
      fontFamily: FONTS.NUNITO,
      fontWeight: FONT_WEIGHT_VALUES.regular,
      fontSize: t1.pxToRem(10),
    },
    [FONT_VARIANT.fieldLabel]: {
      fontFamily: FONTS.RED_HAT_DISPLAY,
      fontWeight: FONT_WEIGHT_VALUES.medium,
      fontSize: t1.pxToRem(12),
    },
  },
});

export default theme.typography;
