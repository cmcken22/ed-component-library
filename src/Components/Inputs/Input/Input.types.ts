import { StandardInputProps } from "src/Components/BaseInput";

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
  inputRef?:
    | React.RefObject<HTMLInputElement>
    | ((instance: HTMLInputElement | null) => void);
  // width?: string | number;
  // minWidth?: string | number;
}
