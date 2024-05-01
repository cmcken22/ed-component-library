import { Box, styled } from "@mui/material";
import cx from "classnames";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import useElementResizeListener from "src/Hooks/useElementResizeListener";
import { useStateWithPrevious } from "src/Hooks/useStateWithPrevious";
import { generateUniqueKey } from "src/utils";
import { useEllisDonTheme } from "../..";

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

const ClipSvg = ({ width, height }: { width: number; height: number }) => {
  const theme = useEllisDonTheme();

  const borderRadius = useMemo(() => {
    const halfHeight = height / 2;
    if (theme.shape.borderRadius >= halfHeight) return halfHeight;
    return theme.shape.borderRadius;
  }, [height, theme.shape.borderRadius]);

  return (
    <svg
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
        <mask
          id="loading-indicator__clip-mask"
          x="0"
          y="0"
          width={width}
          height={height}
        >
          <rect width="100%" height="100%" fill="white" ry={borderRadius} />
          <rect
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            fill="black"
            ry={borderRadius}
            x="1"
            y="1"
          />
        </mask>
      </defs>
    </svg>
  );
};

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
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [key, setKey] = useState(generateUniqueKey());

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

  const detectDimensions = useCallback(() => {
    if (!buttonRef?.current) {
      setWidth(0);
      setHeight(0);
      return;
    }
    const { width, height } = buttonRef.current.getBoundingClientRect();
    setWidth(width + 2);
    setHeight(height + 2);
  }, [setWidth, setHeight]);

  useLayoutEffect(() => {
    detectDimensions();
  }, []);

  const handleResize = useCallback(() => {
    // if we resize the animation is off by a few pixels,
    // and I can't figure out why..
    // so I just generate a new key to force the component to redraw
    // this is a very unlikely scenario since buttons tend to remain one size,
    // but it is possible to change the size
    setKey(generateUniqueKey());
    detectDimensions();
  }, [detectDimensions, setKey]);

  useElementResizeListener(buttonRef?.current, handleResize);

  if (!loading && !active && !complete) return null;

  return (
    <StyledWrapper
      key={key}
      className="loading-indicator__wrapper"
      color={color}
      sx={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {/* the svg here is used to clip the inner content */}
      <ClipSvg width={width} height={height} />
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
