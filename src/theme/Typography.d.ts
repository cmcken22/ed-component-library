export declare enum FONTS {
    RED_HAT_DISPLAY = "Red Hat Display",
    NUNITO = "Nunito"
}
export declare enum FONT_WEIGHT {
    regular = "regular",
    medium = "medium",
    semiBold = "semiBold",
    bold = "bold"
}
export declare const FONT_WEIGHT_VALUES: {
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
};
export type FontWeight = FONT_WEIGHT | keyof typeof FONT_WEIGHT;
export declare enum FONT_STYLE {
    normal = "normal",
    italic = "italic"
}
export type FontStyle = FONT_STYLE | keyof typeof FONT_STYLE;
export declare enum FONT_VARIANT {
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
    fieldLabel = "fieldLabel"
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
declare const _default: import("@mui/material").TypographyVariants;
export default _default;
