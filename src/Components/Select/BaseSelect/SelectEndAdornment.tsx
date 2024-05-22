import { Box } from "@mui/material";
import { useMemo } from "react";
import ClearFieldIcon from "src/Components/ClearFieldIcon";
import Icon, { IconVariant } from "../../Icon";

interface SelectEndAdornmentProps {
  endAdornment?: React.ReactNode;
  open: boolean;
  allowClear?: boolean;
  onOpen?: () => void;
  onClear?: () => void;
  disabled?: boolean;
  persistEndAdornment?: boolean;
}

const SelectEndAdornment = ({
  endAdornment,
  open,
  allowClear,
  onOpen,
  onClear,
  disabled,
  persistEndAdornment,
  ...props
}: SelectEndAdornmentProps) => {
  const Comp = useMemo(() => {
    const adornments: any = [];

    if (allowClear && !disabled) {
      adornments.push(<ClearFieldIcon key="clear" onClear={onClear} />);
    }

    if (!endAdornment || (endAdornment && persistEndAdornment)) {
      adornments.push(
        <Icon
          key="arrow"
          icon={IconVariant.NavArrowDown}
          size={20}
          color="border.dark"
          onClick={!disabled ? onOpen : undefined}
          sx={{
            transform: `rotate(${open ? "180deg" : "0deg"})`,
          }}
        />
      );
    }

    if (endAdornment) {
      adornments.push(
        <Box
          key="endAdornment"
          sx={{
            position: "relative",
            margin: "0",
            height: "20px",
            width: "20px",
            display: "flex",
            alignItems: "center",
            transform: "rotate(0deg) !important",
            ".MuiInputAdornment-root": {
              margin: "0",
            },
          }}
        >
          {endAdornment}
        </Box>
      );
    }

    return adornments;
  }, [
    allowClear,
    endAdornment,
    open,
    props,
    onOpen,
    onClear,
    disabled,
    persistEndAdornment,
  ]);

  return (
    <Box
      sx={{
        marginRight: "8px",
        display: "flex",
        alignItems: "center",
        gap: 0.25,
      }}
    >
      {Comp}
    </Box>
  );
};

export default SelectEndAdornment;
