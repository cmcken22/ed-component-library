import { Box, SxProps } from "@mui/material";
import { forwardRef } from "react";
import { sizeFormat } from "src/utils";
import { Typography } from "../..";

interface CounterProps {
  count?: number;
  sx?: SxProps;
  gap?: string | number;
}

const Counter = forwardRef(({ count, sx, gap }: CounterProps, ref: any) => {
  if (count === 0) return null;

  return (
    <Box
      ref={ref}
      className="counter"
      sx={{
        height: "22px",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        background: (theme) => theme.palette.secondary.main,
        padding: "8px",
        borderRadius: "40px",
        flexShrink: 0,
        boxSizing: "border-box",
        ml: sizeFormat(gap),
        top: "calc(50% - 11px)",
        ...sx,
      }}
    >
      <Typography variant="bodyXS" color="white">
        +{count}
      </Typography>
    </Box>
  );
});

Counter.displayName = "Counter";

Counter.defaultProps = {
  count: 0,
  gap: 8,
} as Partial<CounterProps>;

export default Counter;
