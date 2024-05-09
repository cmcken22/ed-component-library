import { Box } from "@mui/material";
import cx from "classnames";
import { ContentProps } from "./Content.types";

const Content = ({ id, className, children, sx }: any) => {
  return (
    <Box
      id={id}
      className={cx("Modal__content", {
        [className]: className,
      })}
      sx={{
        minHeight: "45px",
        padding: 2,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

Content.defaultProps = {} as Partial<ContentProps>;

export default Content;
