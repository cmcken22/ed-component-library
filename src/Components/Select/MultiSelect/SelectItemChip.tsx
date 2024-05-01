import { useCallback } from "react";
import Chip, { ChipProps } from "src/Components/Chip";

interface SelectedItemChipProps {
  label: string;
  onRemove: () => void;
  disabled?: boolean;
  ChipProps?: ChipProps;
}

const SelectedItemChip = ({
  label,
  disabled,
  onRemove,
  ChipProps,
}: SelectedItemChipProps) => {
  const handleClick = useCallback(
    (e: any) => {
      if (disabled) return;
      e?.stopPropagation();
      e?.preventDefault();
      if (onRemove) {
        onRemove();
      }
    },
    [onRemove, disabled]
  );

  return (
    <Chip
      type="neutral"
      text={label}
      hideIcon
      allowClose
      disabled={disabled}
      {...ChipProps}
      // use mouse down to interrupt mui's event listener
      onMouseDown={handleClick}
    />
  );
};

export default SelectedItemChip;
