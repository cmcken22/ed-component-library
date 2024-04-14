import { StandardInputProps } from "src/Components/BaseInput";

export interface PercentProps extends StandardInputProps {
  label?: string;
  placeholder?: string;
  helperText?: string;
  value?: number;
  required?: boolean;
  labelPosition?: "top" | "left";
  iconPlacement?: "prefix" | "suffix";
  /**
   * In the case that a staus icon is provided, the suffix will be hidden.
   * Setting `persistSuffix` to true will keep the suffix visible beside the status icon.
   */
  persistSuffix?: boolean;
  // endAdornment?: React.ReactNode;
  debounce?: number;
  onChange?: (value: number, formattedValue: string) => void;
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
}
