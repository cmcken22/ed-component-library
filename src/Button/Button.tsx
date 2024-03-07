import { Box, Button as MuiButton } from "@mui/material";
import { useCallback } from "react";
import Icon from "src/Icon";
import { ButtonProps } from "./Button.types";

const Button = ({
  children,
  onClick,
  color = "primary",
  variant = "contained",
  disabled,
  iconLeft,
  iconRight,
  onHover,
  sx,
}: ButtonProps) => {
  const handleClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return (
    <MuiButton
      onClick={handleClick}
      variant={variant as any}
      color={color}
      disabled={disabled}
      disableTouchRipple
      onMouseEnter={onHover}
      sx={sx}
    >
      {iconLeft && (
        <Box mr={1}>
          <Icon icon={iconLeft} height="16px" width="16px" />
        </Box>
      )}
      {children}
      {iconRight && (
        <Box ml={1}>
          <Icon icon={iconRight} height="16px" width="16px" />
        </Box>
      )}
    </MuiButton>
  );
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
  disabled: false,
  onHover: () => {},
};

export default Button;
