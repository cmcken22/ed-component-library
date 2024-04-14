import { hexToRGBA } from "src/utils";

export default {
  styleOverrides: {
    root: ({ theme, ownerState }: any) => {
      return {
        ".MuiSlider-rail": {
          height: "2px",
          backgroundColor: theme.palette?.charcoal?.[10],
        },
        ".MuiSlider-track": {
          height: "2px",
          border: "none",
        },
        ".MuiSlider-thumb": {
          "&.Mui-focusVisible, &.Mui-active, &:hover": {
            boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette?.[ownerState?.color]?.main, 0.2)} !important`,
          },
          height: "10px",
          width: "10px",
        },
      };
    },
  },
};
