import { Stack } from "@mui/material";
import cx from "classnames";
import { sizeFormat } from "src/utils";
import { HorizontalStackProps } from "./HorizontalStack.types";

const HorizontalStack = ({
  id,
  className,
  sx,
  children,
  gap,
  justifyContent,
}: HorizontalStackProps) => {
  return (
    <Stack
      id={id}
      className={cx("HorizontalStack", {
        [className]: className,
      })}
      sx={sx}
      data-testid="HorizontalStack"
      flexDirection="row"
      gap={sizeFormat(gap)}
      justifyContent={justifyContent}
    >
      {children}
    </Stack>
  );
};

HorizontalStack.defaultProps = {
  gap: 8,
} as Partial<HorizontalStackProps>;

export default HorizontalStack;
