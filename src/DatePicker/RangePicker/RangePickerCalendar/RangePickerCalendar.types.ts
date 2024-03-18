import { BaseCalendarProps } from "src/DatePicker/Common";

export interface RangePickerCalendarProps
  extends Omit<BaseCalendarProps, "range" | "children"> {
  value?: Date[];
  onSelect?: (date: Date[]) => void;
}

export interface RangePickerCalendarCompProps {
  value?: Date[];
  onSelect?: (date: Date[]) => void;
}
