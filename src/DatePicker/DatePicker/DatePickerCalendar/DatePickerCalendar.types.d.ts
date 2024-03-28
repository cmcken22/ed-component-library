import { BaseCalendarProps } from '../../Common';

export interface DatePickerCalendarProps extends Omit<BaseCalendarProps, "range" | "children"> {
    value?: Date;
    onSelect?: (date: Date) => void;
}
export interface DatePickerCalendarCompProps {
    value?: Date;
    onSelect?: (date: Date) => void;
    tools?: boolean;
    toolFilter?: (val: string) => boolean;
    previewSelection?: boolean;
}
