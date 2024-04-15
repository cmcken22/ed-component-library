import { SelectProps } from './Select.types';

declare const Select: {
    (props: SelectProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<SelectProps>;
};
export { Select };
export default Select;
