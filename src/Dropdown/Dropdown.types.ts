import { StandardInputProps } from "src/BaseInput";

export interface StandardDropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface DropdownProps extends StandardInputProps {
  label?: string;
  placeholder?: string;
  open?: boolean;
  helperText?: string;
  value?: string;
  required?: boolean;
  labelPosition?: "top" | "left";
  /**
   * StandardDropdownOption accepts label, value, and disabled,
   * or you can provide a custom list of options and utilize the getOptionLabel, getOptionValue, and getOptionDisabled methods.
   */
  options: StandardDropdownOption[] | any[];
  onChange?: (value: string) => void;
  getOptionLabel?: (option: any) => string;
  getOptionValue?: (option: any) => string;
  getOptionDisabled?: (option: any) => boolean;
  onHover?: (hovered: boolean) => void;
  defaultActiveFirstOption?: boolean;
  checkBoxSelection?: boolean;
  MenuProps?: {
    maxHeight?: number | string;
  };
}

export interface MultiSelectDropdownProps
  extends Omit<DropdownProps, "value" | "onChange"> {
  value?: string[];
  onChange?: (value: string[]) => void;
}
