import { SxProps } from "@mui/material";
import React from "react";

export interface TooltipProps {
  id?: string;
  className?: string;
  sx?: SxProps;
  title?: string | React.ReactNode;
  content?: string | React.ReactNode;
  children?: any;
  open?: boolean;
  defaultOpen?: boolean;
  allowClose?: boolean;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  persistent?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  variant?: "dark" | "light";
  arrow?: boolean;
  render?: () => React.ReactNode;
  footer?: React.ReactNode;
  disabled?: boolean;
  /**
   * The number of milliseconds to wait before showing the tooltip.
   */
  enterDelay?: number;
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   */
  enterNextDelay?: number;
  leaveDelay?: number;
}
