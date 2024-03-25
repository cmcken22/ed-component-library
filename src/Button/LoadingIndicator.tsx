import { Box, styled } from "@mui/material";
import cx from "classnames";
import { useEffect, useMemo, useState } from "react";
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
  // const [position, setPosition] = useState({
  //   top: 0,
  //   left: 0,
  //   width: 0,
  //   height: 0,
  // });
  // const listeners = useRef([]);

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

  // const calcPosition = useCallback(() => {
  //   if (!buttonRef?.current) return null;
  //   const { top, left, width, height } =
  //     buttonRef.current.getBoundingClientRect();
  //   return setPosition({ top, left, width, height });
  // }, [setPosition]);

  // useEffect(() => {
  //   if (!buttonRef?.current) return null;
  //   const resizeObserver = new ResizeObserver(() => calcPosition());
  //   resizeObserver.observe(buttonRef?.current);
  //   listeners.current.push(resizeObserver);

  //   const windowResizeObserver = new ResizeObserver(() => calcPosition());
  //   windowResizeObserver.observe(window.document.body);
  //   listeners.current.push(windowResizeObserver);
  //   calcPosition();
  // }, []);

  // useEffect(() => {
  //   return () => {
  //     if (!listeners.current.length) return;
  //     const currentListeners = listeners.current;
  //     currentListeners.forEach((listener) => listener.disconnect());
  //     listeners.current = [];
  //   };
  // }, []);

  const [width, height] = useMemo(() => {
    if (!buttonRef?.current) return [0, 0];
    return [
      buttonRef?.current?.getBoundingClientRect().width + 2,
      buttonRef?.current?.getBoundingClientRect().height + 2,
    ];
  }, [buttonRef?.current]);

  if (!loading && !active && !complete) return null;

  return (
    <StyledWrapper
      className="loading-indicator__wrapper"
      color={color}
      sx={{
        width: width,
        height: height,
      }}
    >
      <svg
        id="mySVG"
        width={width}
        height={height}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <defs>
          <mask id="myMask" x="0" y="0" width={width} height={height}>
            <rect width="100%" height="100%" fill="white" rx="4" ry="4" />
            <rect
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              fill="black"
              rx="4"
              ry="4"
              x="1"
              y="1"
            />
          </mask>
        </defs>
        {/* <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="red"
            mask="url(#myMask)"
          ></rect> */}
      </svg>
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
    </StyledWrapper>
  );
};

LoadingIdicator.defaultProps = {
  color: "#ffffff",
};

export default LoadingIdicator;
