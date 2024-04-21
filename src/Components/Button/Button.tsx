import { Box, Button as MuiButton } from "@mui/material";
import cx from "classnames";
import { forwardRef, useCallback, useRef } from "react";
import Icon from "src/Components/Icon";
import { useOnHover } from "src/Hooks";
import { TEST_ID } from "src/enums";
import { ButtonProps } from "./Button.types";
import LoadingIdicator from "./LoadingIndicator";

const Button = forwardRef<HTMLDivElement, ButtonProps>((props, ref) => {
  const {
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
    ...tooltipProps
  } = props;
  const buttonRef = useRef(null);
  const onHoverMethods = useOnHover({ callback: onHover });

  const handleClick = useCallback(
    (e: any) => {
      if (onClick) onClick(e);
    },
    [onClick]
  );

  return (
    <Box ref={ref} {...tooltipProps} sx={{ position: "relative" }}>
      <LoadingIdicator buttonRef={buttonRef} loading={loading} />
      <MuiButton
        id={id}
        className={cx("Button", {
          [`Button--${variant}`]: variant,
          [`Button--loading`]: loading,
          [className]: className,
        })}
        data-testid={TEST_ID.BUTTON}
        ref={buttonRef}
        onClick={handleClick}
        variant={variant as any}
        color={color}
        disabled={disabled}
        disableTouchRipple
        {...onHoverMethods}
        sx={{
          ...sx,
          position: "relative",
        }}
      >
        {iconLeft && (
          <Box mr={1}>
            <Icon
              icon={iconLeft}
              className="Button__icon-left"
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
              className="Button__icon-right"
              height="16px"
              width="16px"
            />
          </Box>
        )}
      </MuiButton>
    </Box>
  );
});

Button.defaultProps = {
  variant: "contained",
  color: "primary",
  disabled: false,
  onHover: () => {},
  loading: false,
} as Partial<ButtonProps>;

export default Button;
