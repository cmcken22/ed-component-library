import { SxProps } from "@mui/material";
import { PopoverPlacement } from "src/Components/Popover";
import { OperandFilterControlProps } from "../OperandFilterControl";

export interface OperandFilterModalProps {
  id?: string;
  className?: string;
  sx?: SxProps;
}

export interface OperandFilterModalProps extends OperandFilterControlProps {
  open?: boolean;
  anchorEl?: HTMLElement | null;
  onClose?: () => void;
  placement?: keyof typeof PopoverPlacement;
}
