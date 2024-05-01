import { ChipProps } from '../../Chip';

interface SelectedItemChipProps {
    label: string;
    onRemove: () => void;
    disabled?: boolean;
    ChipProps?: ChipProps;
}
declare const SelectedItemChip: ({ label, disabled, onRemove, ChipProps, }: SelectedItemChipProps) => import("react/jsx-runtime").JSX.Element;
export default SelectedItemChip;
