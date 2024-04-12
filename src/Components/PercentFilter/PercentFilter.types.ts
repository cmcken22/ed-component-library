import { SxProps } from "@mui/material";
import { StandardInputProps } from "src/Components/BaseInput";

export interface PercentFilterProps extends StandardInputProps {
  id?: string;
  className?: string;
  sx?: SxProps;
  onChange?: (value: any) => void;
  renderValue?: (value: any) => string;
}
