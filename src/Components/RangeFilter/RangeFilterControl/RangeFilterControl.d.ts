import { RangeFilterControlProps } from './RangeFilterControl.types';

export declare const getDefaultValue: ({ defaultValue, value, min, max, minDistance, }: any) => any[];
declare const RangeFilterControl: {
    ({ id, className, sx, label, Component, ComponentProps, value: passedValue, defaultValue, min, max, minDistance, onSubmit, onClear, displayValueTooltip, clearBtnText, clearBtnProps, applyBtnText, applyBtnProps, minInputLabel, maxInputLabel, step, }: RangeFilterControlProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<RangeFilterControlProps>;
};
export default RangeFilterControl;
