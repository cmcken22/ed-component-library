import { StandardInputProps } from "src/Components/BaseInput";

export interface FormattingProps {
  fixedDecimalScale?: boolean;
  decimalScale?: number;
  /**
   * `thousandSeparator` can be passed as a boolean or a string.
   * Passing true will use the default separator (comma).
   * Passing a string will use that string as the separator.
   * @default false
   */
  thousandSeparator?: boolean | string;
  /**
   * Customize the `decimalSeparator`.
   * The decimal separator cannot be the same as the `thousandSeparator`.
   * You will receive an error if you try to use the same separator for both.
   * @default .
   */
  decimalSeparator?: string;
  allowLeadingZeros?: boolean;
  allowNegative?: boolean;
}

export interface NumberInputProps extends StandardInputProps, FormattingProps {
  label?: string;
  placeholder?: string;
  helperText?: string;
  value?: number | string;
  required?: boolean;
  labelPosition?: "top" | "left";
  debounce?: number;
  onChange?: (value: number, formattedValue: string) => void;
  /**
   * Allow the user to use the keyboard to increment or decrement the value.
   */
  allowKeyBoardInput?: boolean;
  max?: number;
  min?: number;
  /**
   * The amount to increment/decrement the value when using keyboard input
   * @default 1
   */
  step?: number;
  showSteps?: boolean;
  /**
   * In the case that a staus is provided, the endAdornment will be hidden.
   * Setting `persistEndAdornment` to true will keep the endAdornment visible beside the status icon.
   */
  persistEndAdornment?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  textAlign?: "left" | "center" | "right";
}
