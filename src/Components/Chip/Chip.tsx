import { Box, styled } from "@mui/material";
import cx from "classnames";
import { useMemo } from "react";
import Icon, { IconVariant } from "src/Components/Icon";
import Typography from "src/Components/Typography";
import { useOnHover } from "src/Hooks";
import { TEST_ID } from "src/enums";
import { hexToRGBA } from "src/utils";
import { ChipProps, ChipType } from ".";

const StyledContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "type" && prop !== "iconPosition",
  slot: "root",
})<{ type?: ChipType; iconPosition?: "left" | "right" }>(({
  theme,
  type,
  iconPosition,
}) => {
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
      lineHeight: "normal",
    },
  };
});

const Chip = ({
  id,
  type,
  text,
  hideIcon,
  className,
  iconPosition,
  onClick,
  onHover,
  children,
  sx,
}: ChipProps) => {
  const onHoverMethods = useOnHover({ callback: onHover });

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
      className={cx("chip", {
        [className]: className,
      })}
      type={type}
      iconPosition={iconPosition}
      onClick={onClick}
      {...onHoverMethods}
      sx={{
        cursor: onClick ? "pointer" : "default",
        ...sx,
      }}
      data-testid={TEST_ID.CHIP}
      data-chip-type={type}
    >
      {!hideIcon && currentIconVariant && (
        <Icon icon={currentIconVariant} height="14px" width="14px" />
      )}
      {typeof children === "string" ? (
        <Typography preventTextSelection variant="bodyXS">
          {children}
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
  type: "neutral",
  hideIcon: false,
  iconPosition: "left",
} as Partial<ChipProps>;

export default Chip;
