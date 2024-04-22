import { RangeFilterModalProps } from '../RangeFilterModal/RangeFilterModal.types';
import { PopoverPlacement } from '../../Popover';
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
    filterPlacement?: keyof typeof PopoverPlacement;
}
export {};
