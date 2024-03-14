import { Box, styled } from "@mui/material";
import { DEFAULT_WIDTHS } from "src/theme";
import { shouldNotForwardProp } from "src/utils";

export interface Props {
  status?: string;
  disabled?: boolean;
  labelPosition?: string;
  fullWidth?: boolean;
}

const StyledWrapper = styled(Box, {
  shouldForwardProp: shouldNotForwardProp([
    "status",
    "labelPosition",
    "fullWidth",
  ]),
  slot: "root",
})<Props>(({ theme, status, disabled, labelPosition, fullWidth }) => {
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
    // width: fullWidth ? "100%" : "240px",
    // background: hexToRGBA(theme.palette.primary.main, 0.05),
    width: fullWidth ? "100%" : DEFAULT_WIDTHS.INPUT,
    display: "flex",
    flexDirection: "column",
    color: colorMap?.[status],
    input: {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    ".MuiInputAdornment-positionEnd .icon-wrapper": {
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
  };
});

export default StyledWrapper;
