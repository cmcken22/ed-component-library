import Popover from "src/Components/Popover";
import RangeFilterControl from "../RangeFilterControl";
import { RangeFilterModalProps } from "./RangeFilterModal.types";

const RangeFilterModal = ({
  open,
  anchorEl,
  onClose,
  placement,
  ...rest
}: RangeFilterModalProps) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      placement={placement}
    >
      <RangeFilterControl {...rest} />
    </Popover>
  );
};

RangeFilterModal.defaultProps = {
  open: false,
  anchorEl: null,
  onClose: () => {},
  placement: "bottom-end",
} as Partial<RangeFilterModalProps>;

export default RangeFilterModal;
