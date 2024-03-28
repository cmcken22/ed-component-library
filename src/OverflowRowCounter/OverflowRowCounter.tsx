import { Box, styled } from "@mui/material";
import cx from "classnames";
import { Children, cloneElement, useState } from "react";
import { shouldNotForwardProp, sizeFormat } from "src/utils";
import Counter from "./Counter";
import OverflowCounter from "./OverflowCounter";
import { OverflowRowCounterProps } from "./OverflowRowCounter.types";

const StyledContainer = styled(Box, {
  shouldForwardProp: shouldNotForwardProp(["gap"]),
  slot: "root",
})<any>(({ gap }) => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: sizeFormat(gap),
    overflow: "hidden",
    position: "relative",
    height: "100%",
    alignItems: "center",
    // background: "rgba(0, 255, 255, 0.4)",
  };
});

const OverflowRowCounter = ({
  id,
  className,
  sx,
  gap,
  children,
  counterPosition,
}: OverflowRowCounterProps) => {
  const [count, setCount] = useState(0);

  return (
    <StyledContainer
      id={id}
      className={cx("overflow-row-counter", {
        [className]: className,
      })}
      gap={gap}
      sx={sx}
      data-testid="OverflowRowCounter"
    >
      <OverflowCounter onOverflow={setCount}>
        {count > 0 ? (
          <Counter
            count={count}
            gap={gap}
            sx={{
              opacity: counterPosition === "left" ? 0 : 1,
              position: "absolute",
              right: 0,
            }}
          />
        ) : null}
        {Children.map(children, (element: any, idx: number) => {
          if (!element) return null;
          const childCount = Children.map(children, () => "x").length;
          const visibleCount = childCount - count;
          return (
            <span
              key={`overflow-row-counter--${idx}`}
              style={{
                position: "relative",
              }}
            >
              {cloneElement(element)}
              <Counter
                key={`overflow-row-counter__counter--${idx}`}
                count={count}
                gap={gap}
                sx={{
                  opacity: 0,
                  position: "absolute",
                  left: "100%",
                  ...(idx + 1 === visibleCount && {
                    opacity: counterPosition === "left" ? 1 : 0,
                  }),
                }}
              />
            </span>
          );
        })}
      </OverflowCounter>
    </StyledContainer>
  );
};

OverflowRowCounter.defaultProps = {
  gap: 8,
  counterPosition: "right",
} as Partial<OverflowRowCounterProps>;

export default OverflowRowCounter;
