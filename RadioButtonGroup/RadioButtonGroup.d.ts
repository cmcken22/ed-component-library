export interface RadioButtonGroupProps {
    options: any[];
    value: any;
    onChange?: (value: any) => void;
    disabled?: boolean;
    row?: boolean;
    allowDeselect?: boolean;
}
declare const RadioButtonGroup: {
    ({ options, value: selectedValue, onChange, disabled, row, allowDeselect, }: RadioButtonGroupProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        options: any[];
        value: any;
        disabled: boolean;
        row: boolean;
        allowDeselect: boolean;
    };
};
export default RadioButtonGroup;
