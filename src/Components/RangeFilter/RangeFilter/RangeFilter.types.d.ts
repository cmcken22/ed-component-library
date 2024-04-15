import { RangeFilterModalProps } from '../RangeFilterModal/RangeFilterModal.types';
import { StandardInputProps } from '../../BaseInput';

interface ModalProps extends Omit<RangeFilterModalProps, "onSubmit" | "onClear" | "placement" | "label"> {
}
export interface RangeFilterProps extends StandardInputProps, ModalProps {
    onChange?: (value: number[]) => void;
    renderValue?: (value: number[]) => string;
    /**
     * The values to start with in the range filter modal
     */
    defaultRange?: number[];
    filterLabel?: string;
    filterPlacement?: "auto-end" | "auto-start" | "auto" | "bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top";
}
export {};
