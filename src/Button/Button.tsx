import { Box, Button as MuiButton } from "@mui/material";
import cx from "classnames";
import { useCallback, useRef } from "react";
import Icon from "src/Icon";
import { ButtonProps, baseClassName, dataTestId } from "./Button.types";
import LoadingIdicator from "./LoadingIndicator";

const Button = ({
  id,
  className,
  children,
  onClick,
  color,
  variant,
  disabled,
  iconLeft,
  iconRight,
  loading,
  onHover,
  sx,
}: ButtonProps) => {
  const buttonRef = useRef(null);

  const handleClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return (
    <Box sx={{ position: "relative" }}>
      <LoadingIdicator buttonRef={buttonRef} loading={loading} />
      <MuiButton
        id={id}
        className={cx(baseClassName, {
          [`${baseClassName}--${variant}`]: variant,
          [`${baseClassName}--loading`]: loading,
          [className]: className,
        })}
        data-testid={dataTestId}
        ref={buttonRef}
        onClick={handleClick}
        variant={variant as any}
        color={color}
        disabled={disabled}
        disableTouchRipple
        onMouseEnter={onHover}
        sx={{
          ...sx,
          position: "relative",
        }}
      >
        {iconLeft && (
          <Box mr={1}>
            <Icon
              icon={iconLeft}
              className={`${baseClassName}__icon-left`}
              height="16px"
              width="16px"
            />
          </Box>
        )}
        {children}
        {iconRight && (
          <Box ml={1}>
            <Icon
              icon={iconRight}
              className={`${baseClassName}__icon-right`}
              height="16px"
              width="16px"
            />
          </Box>
        )}
      </MuiButton>
    </Box>
  );
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
  disabled: false,
  onHover: () => {},
  loading: true,
} as Partial<ButtonProps>;

export default Button;
