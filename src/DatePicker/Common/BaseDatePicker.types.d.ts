/// <reference types="react" />
import { StandardInputProps } from '../../BaseInput';
import { PopoverProps } from '../../Popover';
export interface BaseDatePickerProps extends StandardInputProps {
    label?: string;
    /**
     * @default top
     */
    labelPosition?: "top" | "left";
    /**
     * @default false
     */
    required?: boolean;
    helperText?: string;
    /**
     * Format of the date, formats come from dayjs
     * @default MMM DD, YYYY
     */
    format?: string;
    /**
     * @default false
     */
    disabled?: boolean;
    /**
     * @default false
     */
    disableFuture?: boolean;
    /**
     * @default false
     */
    disableCurrent?: boolean;
    /**
     * @default false
     */
    disablePast?: boolean;
    /**
     * Function to disable specific dates
     */
    dateDisabled?: (date: Date) => boolean;
    /**
     * Current Date, the calendar will open to this date
     * @default new Date()
     */
    currentDate?: Date;
    /**
     * Controls the calendar open state
     * @default false
     */
    calendarOpen?: boolean;
    /**
     * To use the text field without the calendar
     * @default false
     */
    hideCalendar?: boolean;
    /**
     * To force the user to select from the calendar,
     * we can disable the text input
     * @default false
     */
    disableTextInput?: boolean;
    calendarPlacement?: "auto-end" | "auto-start" | "auto" | "bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top";
    /**
     * Popover props to pass to the underlying Popover component
     */
    popoverProps?: Omit<PopoverProps, "children" | "open" | "anchorEl" | "onClose">;
}
export interface BaseCalendarProps {
    children: React.ReactNode;
    disableFuture?: boolean;
    disableCurrent?: boolean;
    disablePast?: boolean;
    dateDisabled?: (date: Date) => boolean;
    currentDate?: Date;
    numberOfMonths?: number;
    range?: boolean;
}
