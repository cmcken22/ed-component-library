import { hexToRGBA } from "../utils";

export default {
  styleOverrides: {
    root: ({ theme }: any) => {
      return {
        ".MuiSvgIcon-root": {
          width: "20px",
          height: "20px",
        },
        "& svg": {
          color: "transparent !important",
        },
        "&:after": {
          content: '""',
          height: "16px",
          width: "16px",
          position: "absolute",
          border: "1px solid",
          borderRadius: "2px",
          borderColor: theme.palette.charcoal.main,
          zIndex: -1,
        },
        "&:hover": {
          "& svg": {
            color: theme.palette.primary.main,
          },
          "&:after": {
            content: '""',
            height: "16px",
            width: "16px",
            position: "absolute",
            border: "1px solid",
            borderRadius: "2px",
            borderColor: theme.palette.primary.main,
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.1),
            zIndex: -1,
          },
        },
        "&.Mui-checked": {
          "& svg": {
            color: `${theme.palette.primary.main} !important`,
          },
          "&:after": {
            content: '""',
            height: "16px",
            width: "16px",
            position: "absolute",
            border: "1px solid",
            borderRadius: "2px",
            borderColor: theme.palette.primary.main,
            zIndex: -1,
          },
        },
        "&.Mui-disabled": {
          "& svg": {
            color: "transparent !important",
          },
          "&:after": {
            content: '""',
            height: "16px",
            width: "16px",
            position: "absolute",
            border: "1px solid",
            borderRadius: "2px",
            borderColor: theme.palette.charcoal["30"],
            zIndex: -1,
          },
        },
      };
    },
  },
};
