import { StandardInputProps } from "src/BaseInput";

export interface InputProps extends StandardInputProps {
  label?: string;
  placeholder?: string;
  helperText?: string;
  value?: string | number;
  required?: boolean;
  labelPosition?: "top" | "left";
  onChange?: (value: string) => void;
  endAdornment?: React.ReactNode;
  type?: "text" | "password" | "number";
  debounce?: number;
  maxChars?: number;
  // width?: string | number;
  // minWidth?: string | number;
}
