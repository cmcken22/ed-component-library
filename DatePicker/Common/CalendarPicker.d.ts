export declare const numberToMonth: (num: number) => any;
export declare const getMonth: (weeks: any) => number;
export declare const getFirstDay: (weeks: any) => any;
export declare const WeeklyHeader: () => import("react/jsx-runtime").JSX.Element;
export declare const WeekView: ({ month, week }: any) => import("react/jsx-runtime").JSX.Element;
export declare const MonthTitle: ({ weeks }: any) => import("react/jsx-runtime").JSX.Element;
export declare const NextMonthBtn: () => import("react/jsx-runtime").JSX.Element;
export declare const PrevMonthBtn: () => import("react/jsx-runtime").JSX.Element;
export declare const MonthView: ({ weeks, month, children }: any) => import("react/jsx-runtime").JSX.Element;
declare const CalendarPickerWrapper: ({ value, onSelect, disableFuture, disableCurrent, disablePast, dateDisabled, currentDate, numberOfMonths, range, }: any) => import("react/jsx-runtime").JSX.Element;
export default CalendarPickerWrapper;