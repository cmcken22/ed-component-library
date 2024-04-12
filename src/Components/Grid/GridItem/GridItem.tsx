import MuiGrid from "@mui/material/Unstable_Grid2";
import cx from "classnames";
import { GridItemProps } from "..";

const GridItem = ({
  id,
  className,
  xs,
  sm,
  md,
  lg,
  xl,
  sx,
  children,
}: GridItemProps) => {
  return (
    <MuiGrid
      id={id}
      className={cx("Grid__item", {
        [className]: className,
      })}
      sx={sx}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      {children}
    </MuiGrid>
  );
};

GridItem.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
} as Partial<GridItemProps>;

export default GridItem;
