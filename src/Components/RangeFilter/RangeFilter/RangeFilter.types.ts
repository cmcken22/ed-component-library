import { StandardInputProps } from "src/Components/BaseInput";
import { PopoverPlacement } from "src/Components/Popover";
import { RangeFilterModalProps } from "../RangeFilterModal/RangeFilterModal.types";

interface ModalProps
  extends Omit<
    RangeFilterModalProps,
    "onSubmit" | "onClear" | "placement" | "label" | "defaultValue"
  > {}

export interface RangeFilterProps extends StandardInputProps, ModalProps {
  onChange?: (value: number[]) => void;
  renderValue?: (value: number[]) => string;
  /**
   * The values to start with in the range filter modal
   */
  defaultRange?: number[];
  filterLabel?: string;
  filterPlacement?: keyof typeof PopoverPlacement;
}
