import { BaseDatePickerProps } from "../Common";

export interface RangePickerProps
  extends Omit<BaseDatePickerProps, "placeholder" | "value"> {
  value?: Date[] | null;
  onChange?: (range: Date[]) => void;
  /**
   * Since there are two inputs, the placeholder can be an array of strings
   * @default MMM DD, YYYY
   * @example ["Start date", "End date"]
   */
  placeholder?: string | string[];
  /**
   * Number of months to display in the calendar
   * @default 2
   */
  numberOfMonths?: number;
  onValidation?: (isValid: boolean) => void;
}
