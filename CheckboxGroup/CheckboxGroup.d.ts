import { CheckboxGroupProps } from "./CheckboxGroup.types";
declare const CheckboxGroup: {
    ({ id, options, value: passedValue, onChange, disabled, row, getOptionValue, getOptionLabel, getOptionDisabled, labelPosition, }: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        options: any[];
        value: any;
        disabled: boolean;
        row: boolean;
        labelPosition: string;
    };
};
export default CheckboxGroup;
