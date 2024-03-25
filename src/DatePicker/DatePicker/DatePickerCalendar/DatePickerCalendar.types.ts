import { BaseCalendarProps } from "src/DatePicker/Common";

export interface DatePickerCalendarProps
  extends Omit<BaseCalendarProps, "range" | "children"> {
  value?: Date;
  onSelect?: (date: Date) => void;
}

export interface DatePickerCalendarCompProps {
  value?: Date;
  onSelect?: (date: Date) => void;
  tools?: any[];
  previewBar?: boolean;
}
