import { Box, styled } from "@mui/material";
import cx from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useStateWithPrevious } from "src/Hooks/useStateWithPrevious";
import { useEllisDonTheme } from "..";

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

  const [width, height] = useMemo(() => {
    if (!buttonRef?.current) return [0, 0];
    const { width, height } = buttonRef.current.getBoundingClientRect();
    return [width + 2, height + 2];
  }, [buttonRef?.current]);

  if (!loading && !active && !complete) return null;

  return (
    <StyledWrapper
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
