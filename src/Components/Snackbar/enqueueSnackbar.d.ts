import { OptionsWithExtraProps, SnackbarOrigin } from 'notistack';

export interface SnackbarOptions extends OptionsWithExtraProps<"success" | "warning" | "error" | "info"> {
    persist?: boolean;
    anchorOrigin?: SnackbarOrigin;
    autoHideDuration?: number;
    transitionDuration?: number;
}
declare const enqueueSnackbar: (message?: string, options?: SnackbarOptions) => import('notistack').SnackbarKey;
declare const closeSnackbar: (key?: string | number) => void;
export { closeSnackbar, enqueueSnackbar };
