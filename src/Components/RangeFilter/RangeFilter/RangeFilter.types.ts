import { StandardInputProps } from "src/Components/BaseInput";
import { RangeFilterModalProps } from "../RangeFilterModal/RangeFilterModal.types";

interface ModalProps
  extends Omit<
    RangeFilterModalProps,
    "onSubmit" | "onClear" | "placement" | "label"
  > {}

export interface RangeFilterProps extends StandardInputProps, ModalProps {
  onChange?: (value: number[]) => void;
  renderValue?: (value: number[]) => string;
  /**
   * The values to start with in the range filter modal
   */
  defaultRange?: number[];
  filterLabel?: string;
  filterPlacement?:
    | "auto-end"
    | "auto-start"
    | "auto"
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
}
