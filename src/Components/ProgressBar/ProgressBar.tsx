import { Box, styled } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import cx from "classnames";
import { useCallback, useMemo } from "react";
import { clamp, shouldNotForwardProp, sizeFormat } from "src/utils";
import Typography from "../Typography";
import { useEllisDonTheme } from "../theme";
import { FONT_VARIANT } from "../theme/Typography";
import { ProgressBarProps } from "./ProgressBar.types";

export interface Props {
  barColor?: string;
  railColor?: string;
  size?: string | number;
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: shouldNotForwardProp(["barColor", "railColor", "size"]),
  slot: "root",
})<Props>(({ theme, barColor, railColor, size }) => {
  return {
    width: "100%",
    height: sizeFormat(size),
    borderRadius: sizeFormat(size),
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: railColor ? railColor : theme.palette.charcoal?.["10"],
    },
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: barColor,
      borderRadius: sizeFormat(size),
    },
  };
});

const ProgressBar = ({
  id,
  className,
  sx,
  value,
  status,
  leftText,
  rightText,
  errorMessage,
  width,
  minWidth,
  fullWidth,
  color: passedColor,
  railColor,
  size,
}: ProgressBarProps) => {
  const theme = useEllisDonTheme();

  const formattedValue = useMemo(() => {
    if (value === undefined) return undefined;
    if (status === "error") return 100;
    if (status === "success") return 100;
    return clamp(value, 0, 100) as number;
  }, [value]);

  const color = useMemo(() => {
    if (status === "error") return theme.palette.danger.main;
    if (status === "success" || formattedValue >= 100)
      return theme.palette.success.main;
    if (passedColor) return passedColor;
    return theme.palette.warning.main;
  }, [theme, status, formattedValue, passedColor]);

  const indeterminate = useMemo(() => {
    if (status === "error") return false;
    if (status === "success") return false;
    if (value === undefined) return true;
    return false;
  }, [status, value]);

  const renderContent = useCallback(() => {
    if (status === "error" && errorMessage) {
      return (
        <Typography
          className="ProgressBar__errorMessage"
          variant={FONT_VARIANT.errorMessage}
          color="error"
        >
          {errorMessage}
        </Typography>
      );
    }

    return (
      <>
        {leftText && (
          <Typography
            className="ProgressBar__leftText"
            variant={FONT_VARIANT.errorMessage}
            color="text.placeholder"
          >
            {leftText}
          </Typography>
        )}
        {rightText && (
          <Typography
            className="ProgressBar__rightText"
            variant={FONT_VARIANT.errorMessage}
            color="text.placeholder"
          >
            {rightText}
          </Typography>
        )}
      </>
    );
  }, [status, errorMessage, leftText, rightText]);

  return (
    <Box
      id={id}
      className={cx("ProgressBar", {
        [className]: className,
      })}
      sx={{
        width: fullWidth ? "100%" : sizeFormat(width),
        minWidth: sizeFormat(minWidth),
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        ...sx,
      }}
      data-testid="ProgressBar"
    >
      <BorderLinearProgress
        variant={indeterminate ? "indeterminate" : "determinate"}
        value={formattedValue}
        barColor={color}
        railColor={railColor}
        size={size}
      />
      {(errorMessage && status === "error") || leftText || rightText ? (
        <Box
          className="ProgressBar__content"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          {renderContent()}
        </Box>
      ) : null}
    </Box>
  );
};

ProgressBar.defaultProps = {
  value: undefined,
  fullWidth: true,
  leftText: "",
  rightText: "",
  minWidth: 100,
  railColor: undefined,
  size: 4,
} as Partial<ProgressBarProps>;

export default ProgressBar;
