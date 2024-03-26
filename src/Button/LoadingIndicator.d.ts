export interface LoadingIdicatorProps {
    buttonRef?: any;
    loading?: boolean;
    color?: string;
}
declare const LoadingIdicator: {
    ({ buttonRef, loading, color, }: LoadingIdicatorProps): import('../../node_modules/react/jsx-runtime').JSX.Element;
    defaultProps: {
        color: string;
    };
};
export default LoadingIdicator;
