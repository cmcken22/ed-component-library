import { OperandFilterControlProps } from '../OperandFilterControl';
import { PopoverPlacement } from '../../Popover';
import { SxProps } from '@mui/material';

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
