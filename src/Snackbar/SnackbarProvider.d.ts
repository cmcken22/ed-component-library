/// <reference types="react" />
export interface SnackbarProviderProps {
    children: React.ReactNode;
    dense?: boolean;
    maxSnack?: number;
    autoHideDuration?: number;
    anchorOrigin?: {
        vertical: "top" | "bottom";
        horizontal: "left" | "center" | "right";
    };
}
declare const SnackbarProvider: {
    ({ children, dense, maxSnack, autoHideDuration, anchorOrigin, }: SnackbarProviderProps): import('../../node_modules/react/jsx-runtime').JSX.Element;
    defaultProps: {
        children: any;
        dense: boolean;
        maxSnack: number;
        autoHideDuration: number;
        anchorOrigin: {
            vertical: string;
            horizontal: string;
        };
    };
};
export default SnackbarProvider;
