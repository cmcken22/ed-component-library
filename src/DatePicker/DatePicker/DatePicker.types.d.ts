import { BaseDatePickerProps } from '../Common';

export interface DatePickerProps extends BaseDatePickerProps {
    value?: Date | null;
    onChange?: (value: Date) => void;
    /**
     * @default MMM DD, YYYY
     */
    placeholder?: string;
    /**
     * Number of months to display in the calendar
     * @default 1
     */
    numberOfMonths?: number;
    onValidation?: (isValid: boolean) => void;
}
