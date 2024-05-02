import { StandardInputProps } from "src/Components/BaseInput";
import { PopoverPlacement } from "src/Components/Popover";
import { OperandFilterModalProps } from "../OperandFilterModal";

interface ModalProps
  extends Omit<
    OperandFilterModalProps,
    "onSubmit" | "onClear" | "placement" | "label" | "defaultValue"
  > {}

export interface OperandFilterProps extends StandardInputProps, ModalProps {
  onChange?: (value: number[]) => void;
  renderValue?: (value: number[]) => string;
  /**
   * The values to start with in the operand filter modal
   */
  defaultFilterValue?: any[];
  filterLabel?: string;
  filterPlacement?: keyof typeof PopoverPlacement;
}
