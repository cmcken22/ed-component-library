import { Box } from "@mui/material";
import cx from "classnames";
import { useCallback, useState } from "react";
import { Button, Percent } from "src/index";
import HorizontalStack from "../HorizontalStack";
import { RangeFilterProps } from "./RangeFilter.types";
import RangeSlider from "./RangeSlider";

const getDefaultValue = ({
  defaultValue,
  value,
  min,
  max,
  minDistance,
}: any) => {
  const formattedValue = value || defaultValue || [];

  let minVal = min;
  let maxVal = minVal + minDistance;

  if (formattedValue.length === 2) {
    minVal = Math.max(min, formattedValue[0]);
    maxVal = Math.min(formattedValue[1], max);
    if (maxVal - minVal < minDistance) {
      minVal = maxVal - minDistance;
    }
  }

  if (formattedValue.length === 1) {
    minVal = Math.max(min, formattedValue[0]);
  }

  return [minVal, Math.min(maxVal, max)];
};

const RangeFilter = ({
  id,
  className,
  sx,
  Component,
  value: passedValue,
  defaultValue,
  min,
  max,
  minDistance,
  onSubmit,
  onClear,
  displayValueTooltip,
  clearBtnText,
  clearBtnProps,
  applyBtnText,
  applyBtnProps,
  minInputLabel,
  maxInputLabel,
}: RangeFilterProps) => {
  const [value, setValue] = useState<number[]>(
    getDefaultValue({
      defaultValue,
      value: passedValue,
      min,
      max,
      minDistance,
    })
    // []
  );

  const handleChange = useCallback(
    (newValue: number[]) => {
      setValue(newValue);
    },
    [setValue]
  );

  const handleInputChange = useCallback(
    (newValue: number, index: number) => {
      if (index === 0) {
        let minVal = newValue;
        let maxVal = value[1];
        if (minVal >= maxVal - minDistance) {
          maxVal = minVal + minDistance;
        }
        if (maxVal > max) {
          maxVal = max;
          minVal = maxVal - minDistance;
        }
        handleChange([minVal, maxVal]);
      } else {
        const maxVal = newValue;
        let minVal = value[0];
        if (minVal >= maxVal) {
          minVal = maxVal - minDistance;
        }
        handleChange([minVal, maxVal]);
      }
    },
    [value, handleChange, minDistance]
  );

  const handleClear = useCallback(() => {
    const nextValue = getDefaultValue({
      defaultValue,
      value: passedValue,
      min,
      max,
      minDistance,
    });
    handleChange(nextValue);
    if (onClear) onClear(nextValue);
  }, [defaultValue, passedValue, min, max, minDistance, handleChange, onClear]);

  const handleSubmit = useCallback(() => {
    if (onSubmit) onSubmit(value);
  }, [value, onSubmit]);

  console.log("VALUE:", value);

  return (
    <Box
      id={id}
      className={cx("RangeFilter", {
        [className]: className,
      })}
      sx={{
        ...sx,
        width: "200px",
        display: "flex",
        flexDirection: "column",
      }}
      data-testid="RangeFilter"
    >
      <RangeSlider
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
        minDistance={minDistance}
        displayValueTooltip={displayValueTooltip}
      />
      <HorizontalStack sx={{ mt: 2 }}>
        <Component
          label={minInputLabel}
          fullWidth
          value={value?.[0]}
          min={min}
          max={max - minDistance}
          onChange={(val: number) => handleInputChange(val, 0)}
        />
        <Component
          label={maxInputLabel}
          fullWidth
          value={value?.[1]}
          min={min + minDistance}
          max={max}
          onChange={(val: number) => handleInputChange(val, 1)}
        />
      </HorizontalStack>
      <HorizontalStack justifyContent="space-between" sx={{ mt: 0.5 }}>
        <Button
          variant="link"
          color="danger"
          onClick={handleClear}
          {...clearBtnProps}
        >
          {clearBtnText}
        </Button>
        <Button variant="link" onClick={handleSubmit} {...applyBtnProps}>
          {applyBtnText}
        </Button>
      </HorizontalStack>
    </Box>
  );
};

RangeFilter.defaultProps = {
  Component: Percent,
  clearBtnText: "Clear",
  applyBtnText: "Apply",
  minInputLabel: "Min",
  maxInputLabel: "Max",
  min: 0,
  max: 100,
  minDistance: 0,
} as Partial<RangeFilterProps>;

export default RangeFilter;
