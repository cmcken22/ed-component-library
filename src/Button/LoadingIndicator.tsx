import { Box, styled } from "@mui/material";
import cx from "classnames";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useStateWithPrevious } from "src/Hooks/useStateWithPrevious";

const StyledWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "color",
  slot: "root",
})<{ color?: string }>(({ color }) => {
  return {
    height: "calc(100% + 2px)",
    width: "calc(100% + 2px)",
    position: "absolute",
    top: -1,
    left: -1,
    zIndex: -1,
    background: "inherit",
    borderRadius: "inherit",
    ...(color && {
      // we can easily change the border color by updating the var --borderColor
      ".loading-indicator": {
        "--borderColor": color,
      },
    }),
  };
});

export interface LoadingIdicatorProps {
  buttonRef?: any;
  loading?: boolean;
  color?: string;
}

const LoadingIdicator = ({
  buttonRef,
  loading,
  color,
}: LoadingIdicatorProps) => {
  const [prevActive, active, setActive] = useStateWithPrevious(false);
  const [complete, setComplete] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const listeners = useRef([]);

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

  const calcPosition = useCallback(() => {
    if (!buttonRef?.current) return null;
    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    return setPosition({ top, left, width, height });
  }, [setPosition]);

  useEffect(() => {
    if (!buttonRef?.current) return null;
    const resizeObserver = new ResizeObserver(() => calcPosition());
    resizeObserver.observe(buttonRef?.current);
    listeners.current.push(resizeObserver);

    const windowResizeObserver = new ResizeObserver(() => calcPosition());
    windowResizeObserver.observe(window.document.body);
    listeners.current.push(windowResizeObserver);
    calcPosition();
  }, []);

  useEffect(() => {
    return () => {
      if (!listeners.current.length) return;
      const currentListeners = listeners.current;
      currentListeners.forEach((listener) => listener.disconnect());
      listeners.current = [];
    };
  }, []);

  if (!loading && !active && !complete) return null;

  return createPortal(
    <StyledWrapper
      className="loading-indicator__wrapper"
      color={color}
      sx={{
        top: position?.top - 1,
        left: position?.left - 1,
        width: position?.width + 2,
        height: position?.height + 2,
      }}
    >
      <Box
        className={cx("loading-indicator", {
          "loading-indicator--active": active,
          "loading-indicator--complete": complete,
        })}
        sx={{
          background: "inherit",
          borderRadius: "inherit",
        }}
      />
    </StyledWrapper>,
    document.body
  );
};

LoadingIdicator.defaultProps = {
  color: "#ffffff",
};

export default LoadingIdicator;
