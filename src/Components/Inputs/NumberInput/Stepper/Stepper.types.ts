import { SxProps } from "@mui/material";

export interface StepperProps {
  id?: string;
  className?: string;
  sx?: SxProps;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  allowNegative?: boolean;
  onChange?: (val: number) => void;
  disabled?: boolean;
}
