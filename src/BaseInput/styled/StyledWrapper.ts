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
    : theme.palette.border.main;
  if (disabled) borderColor = theme.palette.border.main;

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
      "&__placement-container": {
        height: "100%",
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
    ...(variant === "table" && {
      height: "100%",
    }),
    ".MuiTextField-root": {
      ...(variant === "table" && {
        height: "100%",
      }),
    },
    ".MuiInputAdornment-positionStart": {
      ...(variant === "table" && {
        marginLeft: 0,
      }),
    },
    ".MuiInputAdornment-positionEnd": {
      ...(variant === "table" && {
        marginRight: 0,
      }),
    },
    ".MuiInputBase-input": {
      ...(variant === "table" && {
        paddingRight: 0,
        paddingLeft: 0,
      }),
    },
    ".MuiInputBase-root": {
      ...(variant === "table" && {
        backgroundColor: "transparent !important",
        minHeight: "100%",
        height: "100% !important",
        ".icon-wrapper": {
          color: theme.palette.charcoal["50"],
        },
        "&:before": {
          border: "none !important",
        },
        "&:hover:before": {
          border: "none !important",
        },
        "&:after": {
          border: "none !important",
        },
      }),
    },
  };
});

export default StyledWrapper;
