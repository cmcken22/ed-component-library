interface OverflowCounterProps {
    children: any;
    onOverflow: (count: number) => void;
}
declare const OverflowCounter: {
    ({ children, onOverflow }: any): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<OverflowCounterProps>;
};
export default OverflowCounter;
