import { SxProps } from "@mui/material";

export interface FooterProps {
  id?: string;
  className?: string;
  sx?: SxProps;
  /**
   * Passing children will override the default buttons
   */
  children?: React.ReactNode;
  onAccept?: () => void;
  onCancel?: () => void;
  acceptBtn?: boolean;
  acceptBtnText?: string;
  acceptBtnProps?: any;
  cancelBtn?: boolean;
  cancelBtnText?: string;
  cancelBtnProps?: any;
}
