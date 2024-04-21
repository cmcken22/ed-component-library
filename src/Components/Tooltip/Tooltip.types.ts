import { SxProps } from "@mui/material";
import React from "react";

export enum TooltipPlacement {
  "bottom-end" = "bottom-end",
  "bottom-start" = "bottom-start",
  "bottom" = "bottom",
  "left-end" = "left-end",
  "left-start" = "left-start",
  "left" = "left",
  "right-end" = "right-end",
  "right-start" = "right-start",
  "top-end" = "top-end",
  "top-start" = "top-start",
  "top" = "top",
}

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
  placement?: keyof typeof TooltipPlacement;
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
