import { Box, styled } from "@mui/material";
import { forwardRef, useCallback } from "react";
import Icon from "../Icon";
import Typography from "../Typography";
import { closeSnackbar } from "./";
import { SnackbarProps } from "./Snackbar.types";

const StyledContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant",
  slot: "Root",
})<{ variant?: string }>(({ theme, variant }) => {
  const variantMap = {
    info: "primary",
    success: "success",
    warning: "warning",
    error: "error",
  };
  const formattedVariant = variantMap?.[variant] || "primary";
  return {
    backgroundColor: theme.palette?.[formattedVariant].extraLight,
    border: `1px solid ${theme.palette?.[formattedVariant].main}`,
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    borderRadius: "2px",
    display: "flex",
    alignItems: "center",
    "& .icon-wrapper:not(.close-icon)": {
      color: theme.palette?.[formattedVariant].main,
    },
    "& .close-icon": {
      cursor: "pointer",
    },
  };
});

const Snackbar = forwardRef((props: SnackbarProps, ref) => {
  const { id, message, variant, persist, hideIcon, width } = props;

  const getIcon = useCallback((variant?: string) => {
    const iconMap = {
      success: "Success",
      warning: "Warning",
      error: "Close1",
      info: "Info",
    };
    return iconMap[variant];
  }, []);

  return (
    <StyledContainer ref={ref} role="alert" variant={variant} sx={{ width }}>
      {!hideIcon && <Icon icon={getIcon(variant)} height="20px" width="20px" />}
      <Typography variant="bodyR" color="text.main">
        {message}
      </Typography>
      {persist && (
        <Box onClick={() => closeSnackbar(id)} sx={{ ml: "auto" }}>
          <Icon className="close-icon" icon="Close" color="charcoal.90" />
        </Box>
      )}
    </StyledContainer>
  );
});

Snackbar.defaultProps = {
  message: "",
  variant: "info",
  persist: false,
};

export default Snackbar;
