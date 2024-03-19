import MuiGrid from "@mui/material/Unstable_Grid2";
import cx from "classnames";
import { GridProps } from "./Grid.types";

const Item = ({ id, className, xs, sm, md, lg, xl, sx, children }: any) => {
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

const Grid = ({ id, className, sx, children, gutter }: GridProps) => {
  return (
    <MuiGrid
      id={id}
      className={cx("Grid", {
        [className]: className,
      })}
      sx={{
        ...sx,
        padding: `0 ${gutter}`,
      }}
      // padding={0}
      container
      spacing={2}
      columnSpacing={2}
      columns={12}
    >
      {children}
    </MuiGrid>
  );
};

Grid.defaultProps = {
  gutter: "8px",
} as Partial<GridProps>;

Grid.Item = Item;

export default Grid;
