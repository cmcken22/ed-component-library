import { SxProps } from "@mui/material";
import { forwardRef } from "react";
import { Chip } from "src/index";
import { sizeFormat } from "src/utils";

interface CounterProps {
  count?: number;
  sx?: SxProps;
  gap?: string | number;
}

const Counter = forwardRef(({ count, sx, gap }: CounterProps, ref: any) => {
  if (count === 0) return null;

  return (
    <Chip
      ref={ref}
      className="counter"
      type="secondary"
      text={`+${count}`}
      sx={{
        height: "22px",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
        boxSizing: "border-box",
        ml: sizeFormat(gap),
        top: "calc(50% - 11px)",
        ...sx,
      }}
    />
  );
});

Counter.displayName = "Counter";

Counter.defaultProps = {
  count: 0,
  gap: 8,
} as Partial<CounterProps>;

export default Counter;
