import { ToggleProps } from './Toggle.types';

declare const Toggle: {
    ({ id, className, checked: passedValue, disabled, onChange, displayToggleText, label, labelPosition, sx, }: ToggleProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<ToggleProps>;
};
export default Toggle;
