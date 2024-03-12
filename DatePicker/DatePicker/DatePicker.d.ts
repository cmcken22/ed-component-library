import { DatePickerProps } from "./DatePicker.types";
declare const DatePicker: {
    ({ id, label, labelPosition, required, helperText, value: passedValue, onChange, disabled, format, placeholder, currentDate, disableFuture, disableCurrent, disablePast, dateDisabled, status, numberOfMonths, calendarOpen, hideCalendar, disableTextInput, }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        format: string;
        placeholder: string;
        numberOfMonths: number;
    };
};
export default DatePicker;
