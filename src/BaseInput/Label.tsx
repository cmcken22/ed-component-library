import { Box } from "@mui/material";
import { useCallback, useContext, useEffect } from "react";
import Typography from "../Typography";
import { FONT_VARIANT } from "../theme/Typography";
import { InputContext } from "./BaseInput";

export interface LabelProps {
  children?: any;
  required?: boolean;
  position?: "top" | "left";
}

const Label = ({ children, required, position }: LabelProps) => {
  const { setLabelPosition } = useContext(InputContext);

  useEffect(() => {
    if (position) setLabelPosition(position);
  }, [position, setLabelPosition]);

  const renderRequiredIndicator = useCallback(() => {
    if (!required) return null;
    return (
      <Typography
        className="Input__required-indicator"
        variant={FONT_VARIANT.fieldLabel}
        color="danger.main"
        preventTextSelection
      >
        *
      </Typography>
    );
  }, [required]);

  if (!children) return null;
  return (
    <Box
      sx={{
        ...(position === "left" && {
          display: "flex",
          alignItems: "center",
        }),
      }}
    >
      <Typography
        className="Input__label"
        variant={FONT_VARIANT.fieldLabel}
        color="text.primary"
        preventTextSelection
      >
        {children}
      </Typography>
      {renderRequiredIndicator()}
    </Box>
  );
};

export default Label;
