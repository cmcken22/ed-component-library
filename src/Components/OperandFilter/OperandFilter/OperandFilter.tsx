import { useCallback, useEffect, useState } from "react";
import { IconVariant } from "src/Components/Icon";
import { Icon, Input } from "../../..";
import { OPERAND } from "../OperandFilterControl";
import OperandFilterModal from "../OperandFilterModal";
import { OperandFilterProps } from "./OperandFilter.types";

const OperandFilter = ({
  id,
  className,
  sx,
  label,
  value: passedValue,
  defaultFilterValue,
  placeholder,
  helperText,
  required,
  labelPosition = "top",
  disabled,
  tooltip,
  variant,
  fullWidth,
  onChange,
  renderValue,
  filterLabel,
  filterPlacement,
  ...rest
}: OperandFilterProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<any>(passedValue || []);

  useEffect(() => {
    setValue(passedValue);
  }, [passedValue]);

  const handleSubmit = useCallback(
    (val: any) => {
      setValue(val);
      setOpen(false);
      if (onChange) onChange(val);
    },
    [setValue, setOpen, onChange]
  );

  const handleClear = useCallback(() => {
    setValue([]);
    setOpen(false);
    if (onChange) onChange([]);
  }, [setValue, setOpen, onChange]);

  const handleOpen = useCallback(() => {
    if (disabled) return;
    setOpen(true);
  }, [disabled, setOpen]);

  const handleRenderValue = useCallback(
    (value: any) => {
      if (renderValue) return renderValue(value);
      const operand = value?.[0];
      if (operand === OPERAND.BETWEEN) {
        const [op, val1, val2] = value;
        return `${op} ${val1}, ${val2}`;
      }
      return value?.join(" ") || "";
    },
    [renderValue]
  );

  return (
    <>
      <Input
        id={id}
        onClick={handleOpen}
        inputRef={(r: any) => setAnchorEl(r)}
        className={className}
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        helperText={helperText}
        required={required}
        value={handleRenderValue(value)}
        fullWidth={fullWidth}
        labelPosition={labelPosition}
        tooltip={tooltip}
        variant={variant}
        readOnly
        sx={{
          ...sx,
          cursor: disabled ? "default" : "pointer",
          ".MuiInputBase-root, input": {
            cursor: disabled ? "default" : "pointer",
          },
        }}
        endAdornment={
          <Icon
            icon={open ? IconVariant.NavArrowUp : IconVariant.NavArrowDown}
            size={20}
            sx={{
              cursor: disabled ? "default" : "pointer",
            }}
          />
        }
      />
      <OperandFilterModal
        open={open}
        anchorEl={anchorEl}
        label={filterLabel}
        value={value}
        defaultValue={defaultFilterValue}
        placement={filterPlacement}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        onClear={handleClear}
        {...rest}
      />
    </>
  );
};

OperandFilter.defaultProps = {
  filterPlacement: "bottom-end",
} as Partial<OperandFilterProps>;

export default OperandFilter;
