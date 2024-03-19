import { BaseCalendarProps } from '../../Common';
export interface RangePickerCalendarProps extends Omit<BaseCalendarProps, "range" | "children"> {
    value?: Date[];
    onSelect?: (date: Date[]) => void;
}
export interface RangePickerCalendarCompProps {
    value?: Date[];
    onSelect?: (date: Date[]) => void;
}
