export default {
  styleOverrides: {
    tooltip: ({ theme, ownerState }: any) => {
      const boxShadow = "0px 0px 9px rgba(0, 0, 0, 0.4)";

      let fontColor = theme.palette.text.primary;
      let bgColor = "white";

      if (ownerState?.variant === "dark") {
        fontColor = "white";
        bgColor = theme.palette.charcoal[90];
      }

      return {
        padding: theme.spacing(2),
        ...(!ownerState?.fullWidth && {
          maxWidth: "200px",
        }),
        // use filter for drop shadow to account for arrow
        filter: `drop-shadow(${boxShadow})`,
        ".MuiTypography-root": {
          color: fontColor,
        },
        ".Tooltip__close-icon": {
          color: fontColor,
        },
        // TODO: ask design what color they're using
        background: bgColor,
        "& .MuiTooltip-arrow": {
          color: bgColor,
        },
      };
    },
  },
};
