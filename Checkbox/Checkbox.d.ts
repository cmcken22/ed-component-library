import { CheckboxProps } from "./Checkbox.types";
declare const Checkbox: {
    ({ id, label, checked: passedValue, disabled, onChange, labelPosition, typographyVariant, }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        labelPosition: string;
        disabled: boolean;
        checked: boolean;
        typographyVariant: string;
    };
};
export default Checkbox;
