import { Box, Button as MuiButton } from "@mui/material";
import cx from "classnames";
import { useCallback, useEffect, useState } from "react";
import { useStateWithPrevious } from "src/Hooks/useStateWithPrevious";
import Icon from "src/Icon";
import { ButtonProps } from "./Button.types";

const LoadingIdicator = ({ loading }: any) => {
  const [prevActive, active, setActive] = useStateWithPrevious(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setActive(loading);
  }, [loading]);

  useEffect(() => {
    if (!active && prevActive) {
      setComplete(true);
      setTimeout(() => {
        setComplete(false);
      }, 500);
    }
  }, [active, prevActive]);

  return (
    <Box
      sx={{
        height: "calc(100% + 2px)",
        width: "calc(100% + 2px)",
        position: "absolute",
        top: -1,
        left: -1,
        zIndex: -1,
      }}
    >
      <Box
        className={cx("fancy", {
          "fancy--active": active,
          "fancy--complete": complete,
        })}
      >
        <Box
          className={cx("fancy2", {
            "fancy2--complete": complete,
          })}
        />
        <Box
          sx={{
            borderRadius: "4px",
            background: "rgba(0, 255, 0, 0.7)",
            zIndex: -1,
          }}
        />
      </Box>
    </Box>
  );
};

const Button = ({
  id,
  children,
  onClick,
  color = "primary",
  variant = "contained",
  disabled,
  iconLeft,
  iconRight,
  loading,
  onHover,
  sx,
}: ButtonProps) => {
  const handleClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return (
    <Box>
      <MuiButton
        id={id}
        onClick={handleClick}
        variant={variant as any}
        color={color}
        disabled={disabled}
        disableTouchRipple
        onMouseEnter={onHover}
        sx={{
          ...sx,
        }}
      >
        <LoadingIdicator loading={loading} />
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
    </Box>
  );
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
  disabled: false,
  onHover: () => {},
  loading: true,
};

export default Button;
