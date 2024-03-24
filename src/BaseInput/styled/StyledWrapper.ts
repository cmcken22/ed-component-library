import { Box, styled } from "@mui/material";
import { DEFAULT_WIDTHS } from "src/theme";
import { shouldNotForwardProp } from "src/utils";

export interface Props {
  status?: string;
  disabled?: boolean;
  labelPosition?: string;
  fullWidth?: boolean;
  componentType?: string;
  variant?: string;
}

const StyledWrapper = styled(Box, {
  shouldForwardProp: shouldNotForwardProp([
    "status",
    "labelPosition",
    "fullWidth",
    "componentType",
    "variant",
  ]),
  slot: "root",
})<Props>(({
  theme,
  status,
  disabled,
  labelPosition,
  fullWidth,
  componentType,
  variant,
}) => {
  const colorMap = {
    error: theme.palette.error.main,
    warning: theme.palette.warning.main,
    success: theme.palette.success.main,
  };

  let borderColor = colorMap?.[status]
    ? `${colorMap?.[status]} !important`
    : theme.palette.charcoal["20"];
  if (disabled) borderColor = theme.palette.charcoal["20"];

  return {
    width: fullWidth
      ? "100%"
      : DEFAULT_WIDTHS?.[componentType] || DEFAULT_WIDTHS.Input,
    display: "flex",
    flexDirection: "column",
    color: colorMap?.[status],
    input: {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    ".MuiInputAdornment-positionEnd.status-adornment .icon-wrapper": {
      color: colorMap?.[status],
    },
    ".Input": {
      "&__label": {
        lineHeight: theme.typography.pxToRem(16),
        marginBottom: labelPosition === "top" ? theme.spacing(0.5) : 0,
      },
      "&__helper-text": {
        marginTop: theme.spacing(0.5),
        lineHeight: "13.64px",
      },
      "&__required-indicator": {
        marginLeft: theme.spacing(0.25),
      },
    },
    "& .MuiInputBase-root:not(.Mui-disabled)": {
      "& fieldset": {
        borderColor: borderColor,
      },
      "&:hover fieldset": {
        borderColor: !disabled ? theme.palette.primary.main : "",
      },
      "&:focus-within": {
        "& fieldset": {
          borderColor: theme.palette.primary.main,
        },
      },
    },
    "& .MuiInputBase-root.Mui-disabled": {
      "& fieldset": {
        borderColor: borderColor,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.charcoal["20"],
      },
    },
    ".MuiInputBase-root": {
      ...(variant === "table" && {
        transition: `background-color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
        "&:hover": {
          backgroundColor: theme.palette.charcoal["5"],
        },
        minHeight: "58px",
        ".icon-wrapper": {
          color: theme.palette.charcoal["50"],
        },
        "&:before": {
          borderBottom: `1px solid ${theme.palette.charcoal?.["20"]} !important`,
        },
        "&:hover:before": {
          borderBottom: `1px solid ${theme.palette.charcoal?.["20"]} !important`,
        },
        "&:after": {
          border: "none !important",
        },
      }),
    },
  };
});

export default StyledWrapper;
