import { SnackbarProvider as SnackbarProviderNotistack } from "notistack";
import Snackbar from "./";

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

const SnackbarProvider = ({
  children,
  dense,
  maxSnack,
  autoHideDuration,
  anchorOrigin,
}: SnackbarProviderProps) => {
  return (
    <SnackbarProviderNotistack
      dense={dense}
      maxSnack={maxSnack}
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin}
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
};

export default SnackbarProvider;
