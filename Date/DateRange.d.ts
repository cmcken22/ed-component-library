import { DateProps } from "./Date.types";
declare const DateField: {
    ({ value: passedValue, onChange, format, placeholder, currentDate, disableFuture, disablePast, }: DateProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        format: string;
        placeholder: string;
    };
};
export default DateField;
