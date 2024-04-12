import { SxProps } from "@mui/material";

export const dataTestId = "RadioButton";
export const baseClassName = "RadioButton";

export interface RadioButtonProps {
  id?: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  label: string;
  value: any;
  onChange: (value: any, checked: boolean) => void;
  allowDeselect?: boolean;
  labelPosition?: "left" | "right";
  sx?: SxProps;
}
