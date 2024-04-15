import { RangeSliderProps } from './RangeSlider.types';

declare const RangeSlider: {
    ({ id, className, sx, value: passedValue, min, max, minDistance, onChange, displayValueTooltip, step, }: RangeSliderProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<RangeSliderProps>;
};
export default RangeSlider;
