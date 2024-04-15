import { SnackbarOrigin } from 'notistack';

export interface SnackbarProviderProps {
    children?: React.ReactNode;
    dense?: boolean;
    maxSnack?: number;
    autoHideDuration?: number;
    anchorOrigin?: SnackbarOrigin;
    /**
     * Specify the mounting element for the snackbar
     */
    domRoot?: HTMLElement;
}
declare const SnackbarProvider: {
    ({ children, dense, maxSnack, autoHideDuration, anchorOrigin, domRoot, }: SnackbarProviderProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<SnackbarProviderProps>;
};
export default SnackbarProvider;
