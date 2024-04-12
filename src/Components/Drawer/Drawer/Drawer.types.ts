import { SxProps } from "@mui/material";

export interface DrawerProps {
  id?: string;
  className?: string;
  sx?: SxProps;
  open?: boolean;
  onClose?: () => void;
  anchor?: "left" | "top" | "right" | "bottom";
  marginTop?: number | string;
  width?: number | string;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  headerBorder?: boolean;
  footerBorder?: boolean;
  /**
   * If true, the backdrop is not displayed.
   */
  hideBackdrop?: boolean;
  /**
   * If true, the drawer is persistent and does not close on overlay click.
   * It will remain open until explicitly closed.
   */
  persistent?: boolean;
  /**
   * To toggle the close button visibility.
   */
  allowClose?: boolean;

  /**
   * To hide the header.
   */
  displayHeader?: boolean;
}
