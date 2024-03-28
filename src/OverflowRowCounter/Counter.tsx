import { Box, SxProps } from "@mui/material";
import { forwardRef } from "react";
import { Typography } from "..";

interface CounterProps {
  count?: number;
  sx?: SxProps;
}

const Counter = forwardRef(({ count, sx }: CounterProps, ref: any) => {
  if (count === 0) return null;
  return (
    <Box
      ref={ref}
      sx={{
        height: "22px",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        background: "black",
        padding: "8px",
        borderRadius: "40px",
        flexShrink: 0,
        boxSizing: "border-box",
        ml: 0.5,
        top: "calc(50% - 11px)",
        position: "absolute",
        right: 0,
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
} as Partial<CounterProps>;

export default Counter;
