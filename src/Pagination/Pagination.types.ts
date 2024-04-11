import { SxProps } from "@mui/material";

export interface PaginationProps {
  id?: string;
  className?: string;
  sx?: SxProps;
  page: number;
  count: number;
  /**
   * Number of always visible pages at the beginning.
   */
  startBoundaryCount?: number;
  /**
   * Number of always visible pages at the end.
   */
  endBoundaryCount?: number;
  /**
   * Number of always visible pages before and after the current page.
   */
  siblingCount?: number;
  onChange?: (page: number) => void;
  hideBackButton?: boolean;
  hideFirstButton?: boolean;
  hideNextButton?: boolean;
  hideLastButton?: boolean;
}
