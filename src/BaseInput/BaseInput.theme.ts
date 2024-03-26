import { FONT_WEIGHT_VALUES } from "../theme/Typography";

export default {
  styleOverrides: {
    root: ({ theme, ownerState }: any) => {
      const startAdornment = ownerState?.InputProps?.startAdornment;
      const endAdornment = ownerState?.InputProps?.endAdornment;

      return {
        "input::placeholder": {
          color: theme.palette.text.placeholder,
          opacity: 1,
        },
        "input::-webkit-outer-spin-button": {
          margin: 0,
        },
        "input::-webkit-inner-spin-button": {
          webkitAppearance: "none",
          margin: 0,
        },
        "input[type=number]": {
          mozAppearance: "textfield",
        },
        ".MuiInputBase-root": {
          padding: 0,
          backgroundColor: "white",
          // height: "36px !important",
        },
        ".MuiInputBase-adornedEnd": {
          paddingRight: "8px",
        },
        width: "100%",
        fieldset: {
          borderWidth: "1px !important",
          // borderColor: theme.palette.charcoal["20"],
          // borderColor: "theme.border.main",
          borderColor: theme.palette.border.main,
        },
        input: {
          ...theme.typography["bodyR"],
          fontWeight: FONT_WEIGHT_VALUES.regular,
          paddingTop: theme.typography.pxToRem(6.5),
          paddingBottom: theme.typography.pxToRem(6.5),
          paddingLeft: startAdornment
            ? theme.typography.pxToRem(0)
            : theme.typography.pxToRem(8),
          paddingRight: endAdornment
            ? theme.typography.pxToRem(0)
            : theme.typography.pxToRem(8),
        },
        textarea: {
          paddingTop: theme.typography.pxToRem(8),
          paddingBottom: theme.typography.pxToRem(8),
          paddingLeft: theme.typography.pxToRem(8),
          paddingRight: theme.typography.pxToRem(8),
        },
      };
    },
  },
};
