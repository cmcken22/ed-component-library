import { Box, Tooltip } from "@mui/material";
import { useCallback, useContext, useEffect } from "react";
import Icon, { IconVariant } from "src/Icon";
import { BaseInputContext } from ".";
import Typography from "../Typography";
import { FONT_VARIANT } from "../theme/Typography";

export interface LabelProps {
  children?: any;
  required?: boolean;
  position?: "top" | "left";
}

const Label = ({ children, required, position }: LabelProps) => {
  const { setLabelPosition, tooltip, variant } = useContext(BaseInputContext);

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

  const renderInfoTooltip = useCallback(() => {
    if (!tooltip) return null;
    return (
      <Tooltip title={tooltip} placement="top" arrow>
        <Icon
          icon={IconVariant.WarningV2}
          height="12px"
          width="12px"
          sx={{
            ml: 1,
            transform: "rotate(180deg)",
          }}
        />
      </Tooltip>
    );
  }, [tooltip]);

  if (!children) return null;
  if (variant === "table") return null;

  return (
    <Box
      className="Input__label"
      sx={{
        display: "flex",
        alignItems: "center",
        whiteSpace: "nowrap",
      }}
    >
      <Typography
        variant={FONT_VARIANT.fieldLabel}
        color="text.primary"
        preventTextSelection
      >
        {children}
      </Typography>
      {renderRequiredIndicator()}
      {renderInfoTooltip()}
    </Box>
  );
};

export default Label;
