import { SxProps } from "@mui/material";
import { ReactNode } from "react";
import { IconVariantType } from "src/Icon";

export interface ButtonProps {
  id?: string;
  children?: ReactNode;
  variant?: "contained" | "outlined" | "link";
  color?: any;
  onClick?: () => void;
  disabled?: boolean;
  iconLeft?: IconVariantType | React.FC<React.SVGProps<SVGSVGElement>>;
  iconRight?: IconVariantType | React.FC<React.SVGProps<SVGSVGElement>>;
  loading?: boolean;
  onHover?: () => void;
  sx?: SxProps;
}
