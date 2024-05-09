import { Box } from "@mui/material";
import cx from "classnames";
import { ContentProps } from "./Content.types";

const Content = ({
  id,
  className,
  children,
  sx,
  height,
  maxHeight,
  minHeight,
}: ContentProps) => {
  return (
    <Box
      id={id}
      className={cx("Modal__content", {
        [className]: className,
      })}
      sx={{
        padding: 2,
        height,
        minHeight,
        maxHeight,
        overflow: "auto",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

Content.defaultProps = {
  maxHeight: "calc(100vh - 200px)",
} as Partial<ContentProps>;

export default Content;
