import { RangeFilterControlProps } from '..';
import { PopoverPlacement } from '../../Popover';

export interface RangeFilterModalProps extends RangeFilterControlProps {
    open?: boolean;
    anchorEl?: HTMLElement | null;
    onClose?: () => void;
    placement?: keyof typeof PopoverPlacement;
}
