/// <reference types="react" />
import { BaseCalendarProps } from "./BaseDatePicker.types";
export type CalendarContextType = {
    months: any;
    selected: Date[] | undefined;
    select: (date: Date | Date[], clear?: boolean) => void;
    viewNextMonth: () => void;
    viewPreviousMonth: () => void;
    numberOfMonths?: number;
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
export declare const CalendarContext: import('../../../node_modules/react').Context<CalendarContextType>;
declare const CalendarContextProvider: import('../../../node_modules/react').ForwardRefExoticComponent<BaseCalendarProps & import('../../../node_modules/react').RefAttributes<unknown>>;
export default CalendarContextProvider;
