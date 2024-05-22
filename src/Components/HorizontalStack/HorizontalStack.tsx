import { Stack } from "@mui/material";
import cx from "classnames";
import { TEST_ID } from "src/enums";
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
      data-testid={TEST_ID.HORIZONTAL_STACK}
      flexDirection="row"
      gap={sizeFormat(gap)}
      justifyContent={justifyContent}
      sx={sx}
    >
      {children}
    </Stack>
  );
};

HorizontalStack.defaultProps = {
  gap: 8,
} as Partial<HorizontalStackProps>;

export default HorizontalStack;
