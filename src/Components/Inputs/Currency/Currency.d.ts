import { CurrencyProps } from '.';

declare const Currency: {
    (props: CurrencyProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<CurrencyProps>;
};
export { Currency };
export default Currency;
