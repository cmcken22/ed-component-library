import { Box, styled } from "@mui/material";

const PlacementContainer = styled(Box, {
  slot: "root",
})(() => {
  return {
    "&.Input-container": {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      "&--align-left": {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr",
        gap: "0px 8px",
        gridTemplateAreas: `
          ". ."
          ". ."
        `,
      },
    },
  };
});

export default PlacementContainer;
