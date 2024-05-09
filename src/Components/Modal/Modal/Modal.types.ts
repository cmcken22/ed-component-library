import { SxProps } from "@mui/material";

export interface ModalProps {
  id?: string;
  className?: string;
  sx?: SxProps;
  children?: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  hideCloseIcon?: boolean;
  hideBackdrop?: boolean;
  disableBackdropClick?: boolean;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  disableEscapeKeyDown?: boolean;
}
