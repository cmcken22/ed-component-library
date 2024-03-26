import { hexToRGBA } from "src/utils";

export const SelectListTheme = {
  defaultProps: {
    className: "Select__list",
    "data-testid": "SelectList",
  },
  styleOverrides: {
    root: ({ theme }: any) => {
      return {
        "& .MuiPaper-root": {
          marginTop: "3px",
        },
        "& .MuiList-root": {
          padding: 0,
        },
        "& .MuiMenuItem-root": {
          "&:focus": {
            backgroundColor: hexToRGBA(theme.palette.primary["10"], 0.07),
          },
          padding: "5.5px 8px",
          borderBottomWidth: theme.shape.borderWidth,
          borderBottomStyle: "solid",
          borderBottomColor: theme.palette.border.main,
          "&:last-child": {
            borderBottom: "none",
          },
          "&:hover": {
            backgroundColor: hexToRGBA(theme.palette.primary["10"], 0.07),
          },
        },
      };
    },
  },
};

export default {
  styleOverrides: {
    root: ({ theme, ownerState }: any) => {
      return {
        "&.MuiInputBase-root": {
          background: "white",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: `${theme.shape.borderWidth} !important`,
        },
        minHeight: "36px",
        width: "100%",
        ".MuiSelect-select": {
          display: "flex",
          alignItems: "center",
          borderColor: theme.palette.primary.main,
          borderWidth: `${theme.shape.borderWidth} !important`,
          height: "36px",
          paddingTop: 0,
          paddingBottom: 0,
        },
        fieldset: {
          borderWidth: `${theme.shape.borderWidth} !important`,
        },
        "& .MuiSelect-multiple": {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          height: "unset",
          gap: theme.spacing(0.5),
          ...(ownerState?.value &&
            ownerState?.value.length > 0 && {
              paddingTop: theme.spacing(0.5),
              paddingBottom: theme.spacing(0.5),
            }),
        },
        "&.dropdown--open": {
          "&.MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
            borderColor: `${theme.palette.primary.main} !important`,
            borderWidth: `${theme.shape.borderWidth} !important`,
          },
        },
      };
    },
  },
};
