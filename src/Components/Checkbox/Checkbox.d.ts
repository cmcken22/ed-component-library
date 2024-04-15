import { CheckboxProps } from './Checkbox.types';

declare const Checkbox: {
    ({ id, className, label, checked: passedValue, disabled, onChange, labelPosition, typographyVariant, }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<CheckboxProps>;
};
export default Checkbox;
