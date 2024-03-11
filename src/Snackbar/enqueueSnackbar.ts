import {
  OptionsWithExtraProps,
  SnackbarOrigin,
  closeSnackbar as closeSnackbarNotistack,
  enqueueSnackbar as enqueueSnackbarNotistack,
} from "notistack";

export interface SnackbarOptions
  extends OptionsWithExtraProps<"success" | "warning" | "error" | "info"> {
  persist?: boolean;
  anchorOrigin?: SnackbarOrigin;
  autoHideDuration?: number;
  transitionDuration?: number;
}

const enqueueSnackbar = (message?: string, options?: SnackbarOptions) => {
  return enqueueSnackbarNotistack(message, options);
};

const closeSnackbar = (key?: string | number) => {
  return closeSnackbarNotistack(key);
};

export { closeSnackbar, enqueueSnackbar };
