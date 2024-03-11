/// <reference types="react" />
export declare const numberToMonth: (num: number) => any;
export declare const getFirstDay: (weeks: any) => any;
export declare const WeeklyHeader: () => import("react/jsx-runtime").JSX.Element;
export declare const WeekView: ({ week }: any) => import("react/jsx-runtime").JSX.Element;
export declare const MonthTitle: ({ weeks }: any) => import("react/jsx-runtime").JSX.Element;
export declare const NextMonthBtn: () => import("react/jsx-runtime").JSX.Element;
export declare const PrevMonthBtn: () => import("react/jsx-runtime").JSX.Element;
export declare const MonthView: ({ weeks, children }: any) => import("react/jsx-runtime").JSX.Element;
type DatePickerContext = {
    selected: Date[] | undefined;
    onSelect: (date: Date) => void;
    selectedDateStrings: string[] | undefined;
    viewNextMonth: () => void;
    viewPreviousMonth: () => void;
    viewing: Date | undefined;
    getDateSelected: (date: Date) => boolean | undefined;
    getDateInRange: (date: Date) => boolean | undefined;
};
export declare const DatePickerContext: import("react").Context<DatePickerContext>;
declare const DatePicker: ({ onSelect }: any) => import("react/jsx-runtime").JSX.Element;
export default DatePicker;
