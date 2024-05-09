import { OperandFilterControlProps } from './OperandFilterControl.types';

declare const OperandFilterControl: {
    ({ id, className, sx, label, value, defaultValue, onSubmit, onClear, clearBtnText, clearBtnProps, applyBtnText, applyBtnProps, Component: ComponentToRender, ComponentProps, min, max, }: OperandFilterControlProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        clearBtnText: string;
        applyBtnText: string;
    };
};
export default OperandFilterControl;
