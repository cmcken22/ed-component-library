import { useCallback } from "react";
import Chip from "src/Components/Chip";

interface SelectedItemChipProps {
  label: string;
  onRemove: () => void;
  disabled?: boolean;
}

const SelectedItemChip = ({
  label,
  disabled,
  onRemove,
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
      // use mouse down to interrupt mui's event listener
      onMouseDown={handleClick}
    />
  );
};

export default SelectedItemChip;
