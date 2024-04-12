import { SxProps } from "@mui/material";
import { ReactNode } from "react";
import { IconVariantType } from "src/Components/Icon";

export interface ButtonProps {
  id?: string;
  className?: string;
  children?: ReactNode | string;
  variant?: "contained" | "outlined" | "link";
  color?: any;
  onClick?: () => void;
  disabled?: boolean;
  iconLeft?: IconVariantType | ReactNode;
  iconRight?: IconVariantType | ReactNode;
  loading?: boolean;
  onHover?: () => void;
  sx?: SxProps;
}
