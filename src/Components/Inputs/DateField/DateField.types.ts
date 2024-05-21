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
  /**
   * @default false
   */
  disableFuture?: boolean;
  /**
   * @default false
   */
  disableCurrent?: boolean;
  /**
   * @default false
   */
  disablePast?: boolean;
  /**
   * Function to disable specific dates
   */
  dateDisabled?: (date: Date) => boolean;
  /**
   * Current Date, used for validating the date
   * @default new Date()
   */
  currentDate?: Date;
  onValidation?: (isValid: boolean) => void;
}
