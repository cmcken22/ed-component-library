import { StepperProps } from './Stepper.types';

declare const Stepper: {
    ({ id, className, sx, min, max, step, value: passedValue, allowNegative, onChange, disabled, }: StepperProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<StepperProps>;
};
export default Stepper;
