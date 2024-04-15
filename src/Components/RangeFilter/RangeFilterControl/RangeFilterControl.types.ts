import { SxProps } from "@mui/material";
import { ButtonProps } from "../../Button";

export interface RangeFilterControlProps {
  id?: string;
  className?: string;
  sx?: SxProps;
  label?: string;
  Component?: React.ElementType;
  /**
   * Props to pass to the Component
   */
  ComponentProps?: any;
  minDistance?: number;
  onSubmit: (value: number[]) => void;
  onClear: (value: number[]) => void;
  value?: number[];
  defaultValue?: number[];
  min: number;
  max: number;
  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   * @default 'off'
   */
  displayValueTooltip?: "on" | "auto" | "off";
  clearBtnText?: string;
  clearBtnProps?: ButtonProps;
  applyBtnText?: string;
  applyBtnProps?: ButtonProps;
  minInputLabel?: string;
  maxInputLabel?: string;
  step?: number;
  // open?: boolean;
  // anchorEl?: HTMLElement | null;
  // onClose?: () => void;
  // placement?:
  //   | "auto-end"
  //   | "auto-start"
  //   | "auto"
  //   | "bottom-end"
  //   | "bottom-start"
  //   | "bottom"
  //   | "left-end"
  //   | "left-start"
  //   | "left"
  //   | "right-end"
  //   | "right-start"
  //   | "right"
  //   | "top-end"
  //   | "top-start"
  //   | "top";
}
