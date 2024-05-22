import { BaseCalendarProps } from '../../Common';

export interface RangePickerCalendarProps extends Omit<BaseCalendarProps, "range" | "children"> {
    value?: Date[];
    onSelect?: (date: Date[]) => void;
    onSelectionIndexChange?: (index: number) => void;
}
export interface RangePickerCalendarCompProps {
    value?: Date[];
    onSelect?: (date: Date[]) => void;
    tools?: boolean;
    toolFilter?: (val: string) => boolean;
    previewSelection?: boolean;
    onSelectionIndexChange?: (index: number) => void;
}
