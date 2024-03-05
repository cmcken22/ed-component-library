// Generated with util/create-component.js
import { Box, styled } from "@mui/material";
import { useMemo } from "react";
import Icon, { IconVariant } from "src/Icon";
import Typography from "src/Typography";
import { hexToRGBA } from "src/utils";

type ChipType = "positive" | "negative" | "warning" | "pending" | "neutral";

const StyledContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "type" && prop !== "iconPosition",
  slot: "root",
})<{ type?: ChipType; iconPosition?: "left" | "right" }>(
  ({ theme, type, iconPosition }) => {
    const colorMap = {
      positive: theme.palette.success.dark,
      negative: theme.palette.error.dark,
      warning: theme.palette.warning.dark,
      pending: theme.palette.primary["70"],
      neutral: theme.palette.charcoal["80"],
    };

    return {
      width: "fit-content",
      display: "flex",
      flexDirection: iconPosition === "right" ? "row-reverse" : "row",
      alignItems: "center",
      borderRadius: "16px",
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      background: hexToRGBA(colorMap[type], 0.2),
      gap: theme.spacing(0.5),
      ".icon-wrapper": {
        color: colorMap[type],
      },
      ".MuiTypography-root": {
        color: colorMap[type],
      },
    };
  }
);

export interface ChipProps {
  id?: string;
  type: ChipType;
  text: string;
  hideIcon?: boolean;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  onHover?: () => void;
  // tooltip?: string | React.ReactNode;
  children?: string | React.ReactNode;
}

const Chip = ({
  id,
  type,
  text,
  hideIcon,
  iconPosition,
  onClick,
  onHover,
  children,
  // tooltip,
}: ChipProps) => {
  const currentIconVariant = useMemo(() => {
    if (type === "positive") return IconVariant.Success;
    if (type === "negative") return IconVariant.Error;
    if (type === "warning") return IconVariant.WarningV2;
    if (type === "pending") return IconVariant.MoreActionsHorizontal;
    if (type === "neutral") return IconVariant.Undetermined;
    return "";
  }, [type]);

  return (
    <StyledContainer
      id={id}
      type={type}
      iconPosition={iconPosition}
      onClick={onClick}
      onMouseEnter={onHover}
      sx={{
        cursor: onClick ? "pointer" : "default",
      }}
    >
      {!hideIcon && currentIconVariant && (
        <Icon icon={currentIconVariant} height="14px" width="14px" />
      )}
      {typeof children === "string" ? (
        <Typography preventTextSelection variant="bodyXS">
          {text}
        </Typography>
      ) : (
        <>{children}</>
      )}
      {text && !children && (
        <Typography preventTextSelection variant="bodyXS">
          {text}
        </Typography>
      )}
    </StyledContainer>
  );
};

Chip.defaultProps = {
  type: "neutral" as ChipType,
  hideIcon: false,
  iconPosition: "left" as "left" | "right",
};

export default Chip;
