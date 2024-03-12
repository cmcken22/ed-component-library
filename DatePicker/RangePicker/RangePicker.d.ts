import { RangePickerProps } from "./RangePicker.types";
declare const RangePicker: {
    ({ id, label, labelPosition, required, helperText, value: passedValue, disabled, onChange, format, placeholder, currentDate, disableFuture, disableCurrent, disablePast, dateDisabled, status, numberOfMonths, calendarOpen, hideCalendar, disableTextInput, }: RangePickerProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        format: string;
        placeholder: string;
        numberOfMonths: number;
    };
};
export default RangePicker;
