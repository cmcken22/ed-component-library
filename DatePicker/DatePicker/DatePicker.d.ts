import { DatePickerProps } from "./DatePicker.types";
declare const DatePicker: {
    ({ id, label, labelPosition, required, helperText, value: passedValue, onChange, format, placeholder, currentDate, disableFuture, disableCurrent, disablePast, dateDisabled, status, numberOfMonths, }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        format: string;
        placeholder: string;
        numberOfMonths: number;
    };
};
export default DatePicker;
