// Generated with util/create-component.js
export default {
  styleOverrides: {
    root: ({ theme, ownerState }: any) => {
      console.log("ownerState:", ownerState?.open);
      return {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: "1px !important",
        },
        // "&.MuiOutlinedInput-notchedOutline": {
        //   borderColor: "red !important",
        //   borderWidth: "1px !important",
        //   // borderColor: theme.palette.primary.main,
        // },
        height: "36px",
        width: ownerState.fullWidth ? "100%" : "229px",
        ".MuiSelect-select": {
          borderColor: theme.palette.primary.main,
          // backgroundColor: "blue",
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
