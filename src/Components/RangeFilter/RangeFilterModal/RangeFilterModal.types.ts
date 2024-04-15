import { PopoverPlacement } from "src/Components/Popover";
import { RangeFilterControlProps } from "src/Components/RangeFilter";

export interface RangeFilterModalProps extends RangeFilterControlProps {
  open?: boolean;
  anchorEl?: HTMLElement | null;
  onClose?: () => void;
  placement?: PopoverPlacement;
}
