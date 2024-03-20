export default {
  // defaultProps: {
  //   classes: "__TABS__",
  // },
  styleOverrides: {
    root: () => {
      return {
        // background: "red !important",
        width: "fit-content",
        minHeight: "unset",
        // "& .MuiTabs-root": {
        // },
        "& .MuiTab-root": {
          padding: "0px",
          paddingLeft: "2px",
          paddingRight: "2px",
          // background: "blue",
          minWidth: "unset",
          minHeight: "unset",
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
