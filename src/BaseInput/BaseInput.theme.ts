import { FONT_WEIGHT_VALUES } from "../theme/Typography";

export default {
  styleOverrides: {
    root: ({ theme, ownerState }: any) => {
      const startAdornment = ownerState?.InputProps?.startAdornment;
      const endAdornment = ownerState?.InputProps?.endAdornment;

      return {
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
          height: "100%",
        },
        ".MuiInputBase-adornedEnd": {
          paddingRight: "8px",
        },
        width: "100%",
        fieldset: {
          borderWidth: "1px !important",
          borderColor: theme.palette.charcoal["20"],
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
