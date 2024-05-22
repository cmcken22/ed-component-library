export default {
  // defaultProps: {
  //   classes: "__TABS__",
  // },
  styleOverrides: {
    root: () => {
      return {
        // background: "red !important",
        width: "100%",
        minHeight: "unset",
        // borderBottom: "1px solid green",
        "& .MuiTab-root": {
          padding: "0px",
          paddingLeft: "2px",
          paddingRight: "2px",
          minWidth: "unset",
          minHeight: "unset",
          marginBottom: "4px",
        },
        "& .MuiTabs-flexContainer": {
          gap: "16px",
          display: "flex",
        },
        "& .MuiTabs-indicator": {
          borderRadius: "4px",
        },
        "& .Tab__label": {
          marginBottom: "6px",
        },
      };
    },
  },
};
