declare const DateRangeInput: {
    ({ format, value: passedValue, onChange }: any): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        format: string;
        value: Date;
        currentDate: Date;
        disableFuture: boolean;
        disablePast: boolean;
    };
};
export default DateRangeInput;
