import { Box } from "@mui/material";
import { useCallback } from "react";
import Icon, { IconVariant } from "src/Components/Icon";

interface SelectedItemChipProps {
  label: string;
  onRemove: () => void;
}

const SelectedItemChip = ({ label, onRemove }: SelectedItemChipProps) => {
  const handleClick = useCallback(
    (e: any) => {
      e?.stopPropagation();
      e?.preventDefault();
      if (onRemove) {
        onRemove();
      }
    },
    [onRemove]
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "24px",
        borderRadius: "20px",
        backgroundColor: "charcoal.10",
        color: "text.main",
        fontSize: "12px",
        lineHeight: "16px",
        padding: "0 8px",
        cursor: "pointer",
      }}
    >
      {label}
      {/* use mouse down to interrupt mui's event listener */}
      <Box onMouseDown={handleClick}>
        <Icon
          icon={IconVariant.Close1}
          size={12}
          color="text.main"
          sx={{ marginLeft: "4px", cursor: "pointer" }}
        />
      </Box>
    </Box>
  );
};

export default SelectedItemChip;
