/// <reference types="react" />
import { SnackbarOrigin } from "notistack";
export interface SnackbarProviderProps {
    children?: React.ReactNode;
    dense?: boolean;
    maxSnack?: number;
    autoHideDuration?: number;
    anchorOrigin?: SnackbarOrigin;
}
declare const SnackbarProvider: {
    ({ children, dense, maxSnack, autoHideDuration, anchorOrigin, }: SnackbarProviderProps): import('../../node_modules/react/jsx-runtime').JSX.Element;
    defaultProps: Partial<SnackbarProviderProps>;
};
export default SnackbarProvider;
