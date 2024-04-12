import { BaseCalendarProps } from "src/Components/DatePicker/Common";

export interface RangePickerCalendarProps
  extends Omit<BaseCalendarProps, "range" | "children"> {
  value?: Date[];
  onSelect?: (date: Date[]) => void;
}

export interface RangePickerCalendarCompProps {
  value?: Date[];
  onSelect?: (date: Date[]) => void;
  tools?: boolean;
  toolFilter?: (val: string) => boolean;
  previewSelection?: boolean;
}
