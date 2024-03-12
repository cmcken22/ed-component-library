import { BaseDatePickerProps } from "../Common";

export interface RangePickerProps extends BaseDatePickerProps {
  value?: Date[] | null;
  onChange?: (range: Date[]) => void;
  numberOfMonths?: number;
}
