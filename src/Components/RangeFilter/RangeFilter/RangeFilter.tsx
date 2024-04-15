import { useCallback, useEffect, useState } from "react";
import { IconVariant } from "src/Components/Icon";
import { Icon, Input } from "src/index";
import RangeFilterModal from "../RangeFilterModal/RangeFilterModal";
import { RangeFilterProps } from "./RangeFilter.types";

const RangeFilterInput = ({
  id,
  className,
  sx,
  label,
  filterLabel,
  placeholder,
  helperText,
  required,
  Component,
  ComponentProps,
  defaultValue,
  defaultRange,
  value: passedValue,
  labelPosition = "top",
  disabled,
  tooltip,
  variant,
  fullWidth,
  min,
  max,
  minDistance,
  displayValueTooltip,
  clearBtnText,
  clearBtnProps,
  applyBtnText,
  applyBtnProps,
  minInputLabel,
  maxInputLabel,
  step,
  filterPlacement,
  onChange,
  renderValue,
}: RangeFilterProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number[]>(passedValue || []);

  useEffect(() => {
    setValue(passedValue || []);
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
      return value?.join(" - ") || "";
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
      <RangeFilterModal
        open={open}
        anchorEl={anchorEl}
        onClose={() => setOpen(false)}
        placement={filterPlacement}
        label={filterLabel}
        onSubmit={handleSubmit}
        onClear={handleClear}
        min={min}
        max={max}
        minDistance={minDistance}
        defaultValue={defaultValue || defaultRange}
        value={value}
        Component={Component}
        ComponentProps={ComponentProps}
        displayValueTooltip={displayValueTooltip}
        clearBtnText={clearBtnText}
        clearBtnProps={clearBtnProps}
        applyBtnText={applyBtnText}
        applyBtnProps={applyBtnProps}
        minInputLabel={minInputLabel}
        maxInputLabel={maxInputLabel}
        step={step}
      />
    </>
  );
};

RangeFilterInput.defaultProps = {
  // Component: NumberInput,
  defaultRange: [0, 100],
  clearBtnText: "Clear",
  applyBtnText: "Apply",
  minInputLabel: "Minimum",
  maxInputLabel: "Maximum",
  filterLabel: "Amount",
  step: 1,
  min: 0,
  max: 100,
  minDistance: 0,
  filterPlacement: "bottom-end",
} as Partial<RangeFilterProps>;

export default RangeFilterInput;
