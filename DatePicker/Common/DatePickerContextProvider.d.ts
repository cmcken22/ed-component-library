/// <reference types="react" />
export type DatePickerContext = {
    value?: Date | null | Date[];
    months: any;
    selected: Date[] | undefined;
    onSelect: (date: Date) => void;
    viewNextMonth: () => void;
    viewPreviousMonth: () => void;
    viewing: Date | undefined;
    disableFuture?: boolean;
    disableCurrent?: boolean;
    disablePast?: boolean;
    dateDisabled?: (date: Date) => boolean;
    currentDate?: Date;
    range?: boolean;
    isSelected?: (date: Date) => boolean;
    inRange?: (date: Date, start?: Date, end?: Date) => boolean;
    hoveredDate?: Date | null;
    setHoveredDate?: (date: Date | null) => void;
    setViewing?: (date: Date) => void;
};
export declare const DatePickerContext: import("react").Context<DatePickerContext>;
declare const DatePickerContextProvider: import("react").ForwardRefExoticComponent<Omit<any, "ref"> & import("react").RefAttributes<unknown>>;
export default DatePickerContextProvider;
