import { SxProps } from "@mui/material";
import { ButtonProps } from "../Button";

export interface RangeFilterProps {
  id?: string;
  className?: string;
  sx?: SxProps;
  Component?: React.ElementType;
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
}
