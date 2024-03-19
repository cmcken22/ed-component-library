import { hexToRGBA } from "src/utils";

export const DropdownListTheme = {
  defaultProps: {
    className: "dropdown__list",
    "data-testid": "DropdownList",
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
          minHeight: "36px",
          padding: "5.5px 8px",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: theme.palette.charcoal[20],
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
        height: "36px",
        width: "100%",
        ".MuiSelect-select": {
          display: "flex",
          alignItems: "center",
          borderColor: theme.palette.primary.main,
          height: "36px",
          paddingTop: 0,
          paddingBottom: 0,
        },
        "&.MuiFormControl-root": {
          height: "400px",
          backgroundColor: ownerState?.open ? "blue" : "red",
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
