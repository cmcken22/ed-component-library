import { SxProps } from "@mui/material";
import { StandardInputProps } from "src/Components/BaseInput";

export interface DateFieldProps extends StandardInputProps {
  id?: string;
  className?: string;
  sx?: SxProps;
  format?: string;
  value?: Date | null;
  onChange?: (value: Date) => void;
  hideCalendarIcon?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
}
