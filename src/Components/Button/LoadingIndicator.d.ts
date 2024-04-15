export interface LoadingIdicatorProps {
    buttonRef?: any;
    loading?: boolean;
    color?: string;
}
declare const LoadingIdicator: {
    ({ buttonRef, loading, color, }: LoadingIdicatorProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        color: string;
    };
};
export default LoadingIdicator;
