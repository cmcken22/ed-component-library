import { SxProps } from "@mui/material";
import { StandardInputProps } from "src/BaseInput";

export interface PercentSelectorProps extends StandardInputProps {
  id?: string;
  className?: string;
  sx?: SxProps;
  onChange?: (value: any) => void;
}
