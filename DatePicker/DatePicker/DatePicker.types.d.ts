import { BaseDatePickerProps } from "../Common";
export interface DatePickerProps extends BaseDatePickerProps {
    value?: Date | null;
    onChange?: (value: Date) => void;
    numberOfMonths?: number;
}
