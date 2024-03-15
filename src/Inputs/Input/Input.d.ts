import { InputProps } from ".";
declare const Input: {
    (props: InputProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    defaultProps: Partial<InputProps>;
    Currency: {
        (props: import('../Currency/Currency.types').CurrencyProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        defaultProps: Partial<import('../Currency/Currency.types').CurrencyProps>;
    };
    Percent: {
        (props: import('../Percent/Percent.types').PercentProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        defaultProps: Partial<import('../Percent/Percent.types').PercentProps>;
    };
    TextArea: {
        (props: import('../TextArea/TextArea.types').TextAreaProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        defaultProps: Partial<import('../TextArea/TextArea.types').TextAreaProps>;
    };
};
export default Input;
