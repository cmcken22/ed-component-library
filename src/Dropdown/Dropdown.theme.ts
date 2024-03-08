import { Colors } from "src/theme";
import { hexToRGBA } from "src/utils";

export default {
  defaultProps: {
    MenuProps: {
      PaperProps: {
        sx: {
          marginTop: "3px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "charcoal.30",
          boxShadow: "none",
          "& .MuiList-root": {
            padding: 0,
          },
          "& .MuiMenuItem-root": {
            minHeight: "36px",
            padding: "5.5px 8px",
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: "charcoal.30",
            "&:last-child": {
              borderBottom: "none",
            },
            "&:hover": {
              backgroundColor: hexToRGBA(Colors.Bermuda["10"], 0.07),
            },
          },
        },
      },
    },
  },
  styleOverrides: {
    root: ({ theme, ownerState }: any) => {
      console.log("ownerState:", ownerState?.open);
      return {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: "1px !important",
        },
        height: "36px",
        width: ownerState.fullWidth ? "100%" : "229px",
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
