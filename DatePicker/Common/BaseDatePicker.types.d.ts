export interface BaseDatePickerProps {
    id?: string;
    label?: string;
    /**
     * @default "top"
     */
    labelPosition?: "top" | "left";
    /**
     * @default false
     */
    required?: boolean;
    helperText?: string;
    /**
     * Format of the date, formats come from dayjs
     * @default "MM-DD-YYYY"
     */
    format?: string;
    placeholder?: string;
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
    status?: "error" | "success" | "warning";
}
