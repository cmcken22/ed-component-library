import { Box, styled } from "@mui/material";
import cx from "classnames";
import { useMemo } from "react";
import Icon, { IconVariant } from "src/Components/Icon";
import Typography from "src/Components/Typography";
import { useOnHover } from "src/Hooks";
import { TEST_ID } from "src/enums";
import { shouldNotForwardProp } from "src/utils";
import { ChipProps, ChipType } from ".";

const StyledContainer = styled(Box, {
  shouldForwardProp: shouldNotForwardProp(["type", "iconPosition", "variant"]),
  slot: "root",
})<{ type?: ChipType; iconPosition?: "left" | "right"; variant: string }>(({
  theme,
  type,
  iconPosition,
  variant,
}) => {
  const bgColorMap = {
    primary: "#D8F0F2",
    secondary: "#DA4167",
    positive: "#E7FFF2",
    negative: "#FFF2F5",
    warning: "#FFFAF0",
    pending: "#E2FBFF",
    neutral: "#F6F6F6",
  };

  const fontColorMap = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.common.white,
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
    background: bgColorMap[type],
    gap: theme.spacing(0.5),
    ".icon-wrapper": {
      color: fontColorMap[type],
    },
    ".MuiTypography-root": {
      color: fontColorMap[type],
      lineHeight: "normal",
    },
    ...(variant === "outlined" && {
      border: `1px solid ${fontColorMap[type]}`,
    }),
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
  allowClose,
  variant,
  icon,
  sx,
}: ChipProps) => {
  const onHoverMethods = useOnHover({ callback: onHover });

  const currentIconVariant = useMemo(() => {
    if (icon) return icon;
    if (type === "positive") return IconVariant.Success;
    if (type === "negative") return IconVariant.Error;
    if (type === "warning") return IconVariant.WarningV2;
    if (type === "pending") return IconVariant.MoreActionsHorizontal;
    if (type === "neutral") return IconVariant.Undetermined;
    return "";
  }, [type, icon]);

  return (
    <StyledContainer
      id={id}
      className={cx("chip", {
        [className]: className,
      })}
      type={type}
      iconPosition={iconPosition}
      variant={variant}
      onClick={onClick}
      {...onHoverMethods}
      sx={{
        // cursor: onClick ? "pointer" : "default",
        ...(onClick && {
          cursor: "pointer",
          ".icon-wrapper": {
            cursor: "pointer",
          },
        }),
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
      {allowClose && (
        <Icon icon={IconVariant.Close} height="14px" width="14px" />
      )}
    </StyledContainer>
  );
};

Chip.defaultProps = {
  type: "neutral",
  hideIcon: false,
  iconPosition: "left",
  allowClose: false,
  variant: "contained",
} as Partial<ChipProps>;

export default Chip;
