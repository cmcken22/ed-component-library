declare const Colors: {
    Bermuda: {
        extraLight: string;
        light: string;
        main: string;
        dark: string;
        contrastText: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        80: string;
        90: string;
        100: string;
    };
    Cabaret: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        80: string;
        90: string;
        100: string;
    };
    Resolver: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        80: string;
        90: string;
        100: string;
    };
    Charcoal: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
        1: string;
        3: string;
        5: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        80: string;
        90: string;
        100: string;
    };
    Success: {
        extraLight: string;
        light: string;
        main: string;
        dark: string;
    };
    Warning: {
        extraLight: string;
        light: string;
        main: string;
        dark: string;
    };
    Danger: {
        extraLight: string;
        light: string;
        main: string;
        dark: string;
    };
    text: {
        placeholder: string;
        primary: string;
        secondary: string;
        disabled: string;
    };
    info: {
        extraLight: string;
        light: string;
        main: string;
        dark: string;
        contrastText: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        80: string;
        90: string;
        100: string;
    };
    common: {
        white: string;
        black: string;
    };
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
declare const palette: import('@mui/material').Palette;
export { Colors, palette };
export default palette;
