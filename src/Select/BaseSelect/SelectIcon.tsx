import { Box } from "@mui/material";
import Icon, { IconVariant } from "../../Icon";

const DropdownIcon = ({ endAdornment, ...props }: any) => {
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
      className={props?.className}
      icon={IconVariant.NavArrowDown}
      height="20px"
      width="20px"
      color="charcoal.dark"
      sx={{
        top: "calc(50% - 10px) !important",
      }}
    />
  );
};

export default DropdownIcon;
