export const PaginationItemTheme = {
  defaultProps: {
    className: "Select__list",
    "data-testid": "SelectList",
  },
  styleOverrides: {
    root: ({ theme }: any) => {
      return {
        borderRadius: theme.shape.borderRadius,
        ...theme.typography.bodyS,
        "&[aria-current='true']": {
          background: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
        },
        "&.Mui-selected:hover": {
          background: theme.palette.secondary.main,
          color: theme.palette.primary.contrastText,
        },
      };
    },
  },
};

export default {
  styleOverrides: {
    root: () => {
      return {};
    },
  },
};
