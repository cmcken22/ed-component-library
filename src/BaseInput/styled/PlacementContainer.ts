import { Box, styled } from "@mui/material";
import { BaseInputMeta } from "../BaseInput";

const PlacementContainer = styled(Box, {
  slot: "root",
})(() => {
  return {
    [`&.${BaseInputMeta.className}__placement-container`]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      "&--align-left": {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
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
