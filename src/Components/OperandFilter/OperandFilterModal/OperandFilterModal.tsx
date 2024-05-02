import Popover from "src/Components/Popover";
import OperandFilterControl from "../OperandFilterControl";
import { OperandFilterModalProps } from "./OperandFilterModal.types";

const OperandFilterModal = ({
  open,
  anchorEl,
  onClose,
  placement,
  ...rest
}: OperandFilterModalProps) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      placement={placement}
    >
      <OperandFilterControl {...rest} />
    </Popover>
  );
};

OperandFilterModal.defaultProps = {
  open: false,
  anchorEl: null,
  onClose: () => {},
  placement: "bottom-end",
} as Partial<OperandFilterModalProps>;

export default OperandFilterModal;
