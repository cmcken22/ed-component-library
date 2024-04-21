import { SxProps } from "@mui/material";
import { TooltipProps } from "../Tooltip/Tooltip";

export interface AvatarProps {
  id?: string;
  className?: string;
  size?: "default" | "large" | "small" | string | number;
  text?: string;
  sx?: SxProps;
  src?: string;
  onClick?: (e: any) => void;
  onHover?: (hovered: boolean) => void;
  tooltip?: string;
  ToolTipProps?: TooltipProps;
}
