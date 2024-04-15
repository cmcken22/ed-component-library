import { ToggleProps } from './Toggle.types';

declare const Toggle: {
    ({ id, className, checked: passedValue, disabled, onChange, onHover, displayToggleText, label, labelPosition, sx, }: ToggleProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<ToggleProps>;
};
export default Toggle;
