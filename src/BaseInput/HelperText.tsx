import { Box } from "@mui/material";
import { useContext } from "react";
import Typography from "../Typography";
import { FONT_VARIANT } from "../theme/Typography";
import { BaseInputContext } from "./";

export interface HelperTextProps {
  children?: any;
}

const HelperText = ({ children }: HelperTextProps) => {
  const { labelPosition, variant } = useContext(BaseInputContext);

  if (!children) return null;
  if (variant === "table") return null;

  return (
    <>
      {/* render box here to push helper text into next column under the input */}
      {labelPosition === "left" && <Box />}
      <Typography
        className="Input__helper-text"
        variant={FONT_VARIANT.errorMessage}
        preventTextSelection
      >
        {children}
      </Typography>
    </>
  );
};

export default HelperText;
