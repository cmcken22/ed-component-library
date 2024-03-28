import { CheckboxGroupProps } from './CheckboxGroup.types';

declare const CheckboxGroup: {
    ({ id, options, value: passedValue, onChange, disabled, row, getOptionValue, getOptionLabel, getOptionDisabled, labelPosition, }: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<CheckboxGroupProps>;
};
export default CheckboxGroup;
