import { Box, Button as MuiButton, SxProps } from "@mui/material";
import { ReactNode, useCallback } from "react";
import Icon, { IconVariantType } from "src/Icon";

export interface ButtonProps {
  children?: ReactNode;
  variant?: "contained" | "outlined" | "link";
  color?: any;
  onClick?: () => void;
  disabled?: boolean;
  iconLeft?: IconVariantType | React.FC<React.SVGProps<SVGSVGElement>>;
  iconRight?: IconVariantType | React.FC<React.SVGProps<SVGSVGElement>>;
  onHover?: () => void;
  sx?: SxProps;
}

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
