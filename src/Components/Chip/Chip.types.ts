import { SxProps } from "@mui/material";
import { ReactNode } from "react";
import { IconVariantType } from "../Icon";

export type ChipType =
  | "positive"
  | "negative"
  | "warning"
  | "pending"
  | "neutral"
  | "primary"
  | "secondary";

export interface ChipProps {
  id?: string;
  className?: string;
  type?: ChipType;
  text?: string;
  hideIcon?: boolean;
  iconPosition?: "left" | "right";
  onClick?: (e: any) => void;
  onMouseDown?: (e: any) => void;
  onHover?: (hovered: boolean) => void;
  children?: string | React.ReactNode;
  sx?: SxProps;
  icon?: IconVariantType | ReactNode;
  allowClose?: boolean;
  variant?: "outlined" | "contained";
  disabled?: boolean;
}
