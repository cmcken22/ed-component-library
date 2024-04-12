import {
  SnackbarOrigin,
  SnackbarProvider as SnackbarProviderNotistack,
} from "notistack";
import Snackbar from ".";

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

const SnackbarProvider = ({
  children,
  dense,
  maxSnack,
  autoHideDuration,
  anchorOrigin,
  domRoot,
}: SnackbarProviderProps) => {
  return (
    <SnackbarProviderNotistack
      dense={dense}
      maxSnack={maxSnack}
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin}
      domRoot={domRoot}
      Components={{
        success: Snackbar,
        error: Snackbar,
        warning: Snackbar,
        info: Snackbar,
      }}
    >
      {children}
    </SnackbarProviderNotistack>
  );
};

SnackbarProvider.defaultProps = {
  children: null,
  dense: true,
  maxSnack: 5,
  autoHideDuration: 3000,
  anchorOrigin: {
    vertical: "top",
    horizontal: "right",
  },
} as Partial<SnackbarProviderProps>;

export default SnackbarProvider;
