/// <reference types="react" />
export declare const numberToMonth: (num: number) => any;
export type DatePickerContext = {
    value?: Date | null | Date[];
    months: any;
    selected: Date[] | undefined;
    onSelect: (date: Date) => void;
    viewNextMonth: () => void;
    viewPreviousMonth: () => void;
    viewing: Date | undefined;
    disableFuture?: boolean;
    disablePast?: boolean;
    currentDate?: Date;
    range?: boolean;
    isSelected?: (date: Date) => boolean;
    inRange?: (date: Date) => boolean;
};
export declare const DatePickerContext: import("react").Context<DatePickerContext>;
declare const DatePickerContextProvider: ({ onSelect, numberOfMonths, value, children, disableFuture, disablePast, currentDate, range, }: {
    onSelect: any;
    numberOfMonths: any;
    value: any;
    children: any;
    disableFuture: any;
    disablePast: any;
    currentDate: any;
    range: any;
}) => import("react/jsx-runtime").JSX.Element;
export default DatePickerContextProvider;
