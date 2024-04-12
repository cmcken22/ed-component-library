import { Box, SxProps } from "@mui/material";
import { useCallback } from "react";

interface PaginationItemProps {
  pageNumber?: number;
  onClick?: (page: number) => void;
  active?: boolean;
  text?: string;
  sx?: SxProps;
}

const PaginationItem = ({
  pageNumber,
  onClick,
  active,
  text,
  sx,
}: PaginationItemProps) => {
  const handleClick = useCallback(() => {
    if (onClick) onClick(pageNumber);
  }, [onClick, pageNumber]);

  return (
    <Box
      onClick={handleClick}
      className="PaginationItem"
      sx={{
        userSelect: "none",
        height: "24px",
        width: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        cursor: "default",
        ...(onClick && {
          cursor: "pointer",
          "&:hover": {
            opacity: 0.8,
            backgroundColor: "secondary.main",
            color: "white",
          },
        }),
        ...(active && {
          backgroundColor: "secondary.main",
          color: "white",
        }),
        ...sx,
      }}
    >
      {text}
    </Box>
  );
};

export default PaginationItem;
