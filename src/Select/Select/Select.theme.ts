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
          borderBottomWidth: "1px",
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
          borderWidth: "1px !important",
        },
        minHeight: "36px",
        width: "100%",
        ".MuiSelect-select": {
          display: "flex",
          alignItems: "center",
          borderColor: theme.palette.primary.main,
          height: "36px",
          paddingTop: 0,
          paddingBottom: 0,
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
          },
        },
      };
    },
  },
};
