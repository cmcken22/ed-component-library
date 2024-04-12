import MuiGrid from "@mui/material/Unstable_Grid2";
import cx from "classnames";
import { sizeFormat } from "src/utils";
import { GridItem } from "../GridItem";
import { GridProps } from "./Grid.types";

const formatGridSpacing = (spacing: any) => {
  if (spacing === undefined) return undefined;
  if (Array.isArray(spacing) || typeof spacing === "object") {
    return spacing;
  }
  return sizeFormat(spacing);
};

const Grid = ({
  id,
  className,
  sx,
  children,
  gutter,
  columns,
  spacing,
  columnSpacing,
  rowSpacing,
  direction,
  wrap,
}: GridProps) => {
  return (
    <MuiGrid
      id={id}
      className={cx("Grid", {
        [className]: className,
      })}
      sx={{
        ...sx,
        padding: `0 ${sizeFormat(gutter)}`,
      }}
      container
      columns={columns}
      spacing={formatGridSpacing(spacing)}
      columnSpacing={formatGridSpacing(columnSpacing)}
      rowSpacing={formatGridSpacing(rowSpacing)}
      direction={direction}
      wrap={wrap}
    >
      {children}
    </MuiGrid>
  );
};

Grid.defaultProps = {
  gutter: 0,
  columns: 12,
  spacing: 8,
  direction: "row",
  wrap: "wrap",
} as Partial<GridProps>;

Grid.Item = GridItem;

export default Grid;
