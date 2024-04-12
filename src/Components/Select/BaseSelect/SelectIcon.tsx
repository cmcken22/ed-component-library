import { Box } from "@mui/material";
import Icon, { IconVariant } from "../../Icon";

const SelectIcon = ({ endAdornment, open, ...props }: any) => {
  if (endAdornment) {
    return (
      <Box
        {...props}
        sx={{
          top: "8px !important",
          margin: "0",
          height: "20px",
          width: "20px",
          display: "flex",
          alignItems: "center",
          transform: "rotate(0deg) !important",
          ".MuiInputAdornment-root": {
            margin: "0",
          },
        }}
      >
        {endAdornment}
      </Box>
    );
  }

  return (
    <Icon
      icon={IconVariant.NavArrowDown}
      size={20}
      color="border.dark"
      sx={{
        pointerEvents: "none",
        top: "calc(50% - 10px) !important",
        position: "absolute",
        right: "7px",
        transform: `rotate(${open ? "180deg" : "0deg"})`,
      }}
    />
  );
};

export default SelectIcon;
