import { FormattingProps, NumberInputProps } from '.';

export declare const useFormattingPropIsolation: <T extends FormattingProps>(props: T) => {
    formattingProps: FormattingProps;
    inputProps: Omit<T, keyof FormattingProps>;
};
declare const NumberInput: import('../../../../../node_modules/react').FC<NumberInputProps>;
export { NumberInput };
export default NumberInput;
