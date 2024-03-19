import { SxProps } from "@mui/material";

export interface GridProps {
  id?: string;
  className?: string;
  sx?: SxProps;
  children?: React.ReactNode;
  gutter?: number | string;
}
