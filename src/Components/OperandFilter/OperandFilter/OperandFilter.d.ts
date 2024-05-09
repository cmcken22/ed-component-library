import { OperandFilterProps } from './OperandFilter.types';

declare const OperandFilter: {
    ({ id, className, sx, label, value: passedValue, defaultFilterValue, placeholder, helperText, required, labelPosition, disabled, tooltip, variant, fullWidth, onChange, renderValue, filterLabel, filterPlacement, ...rest }: OperandFilterProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<OperandFilterProps>;
};
export default OperandFilter;
