import { OperandFilterModalProps } from '../OperandFilterModal';
import { PopoverPlacement } from '../../Popover';
import { StandardInputProps } from '../../BaseInput';

interface ModalProps extends Omit<OperandFilterModalProps, "onSubmit" | "onClear" | "placement" | "label" | "defaultValue"> {
}
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
export {};
