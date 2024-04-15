import { Box } from "@mui/material";
import cx from "classnames";
import { useCallback, useEffect, useState } from "react";
import { FONT_WEIGHT } from "src/Components/theme/Typography";
import { Button, NumberInput, Typography } from "src/index";
import { clamp } from "src/utils";
import HorizontalStack from "../../HorizontalStack";
import RangeSlider from "../RangeSlider";
import { RangeFilterControlProps } from "./RangeFilterControl.types";

export const getDefaultValue = ({
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

const sanitizeInitialValue = ({ value, defaultValue }: any) => {
  if (value && value?.length === 2) {
    return value;
  }
  if (defaultValue && defaultValue?.length === 2) {
    return defaultValue;
  }

  return [null, null];
};

const RangeFilterControl = ({
  id,
  className,
  sx,
  label,
  Component,
  ComponentProps,
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
  step,
}: RangeFilterControlProps) => {
  const [value, setValue] = useState<number[]>(
    sanitizeInitialValue({
      value: passedValue,
      defaultValue,
    })
  );

  useEffect(() => {
    setValue(
      sanitizeInitialValue({
        value: passedValue,
        defaultValue,
      })
    );
  }, [passedValue, defaultValue]);

  const handleChange = useCallback(
    (newValue: number[]) => {
      setValue(newValue);
    },
    [setValue]
  );

  const handleInputChange = useCallback(
    (newValue: number, index: number) => {
      if (index === 0) {
        const minVal = newValue;
        const maxVal = clamp(value[1], minVal + minDistance, max);
        handleChange([minVal, maxVal]);
      } else {
        const maxVal = newValue;
        const minVal = clamp(value[0], min, maxVal - minDistance);
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

  return (
    <Box
      id={id}
      className={cx("RangeFilterControl", {
        [className]: className,
      })}
      sx={{
        ...sx,
        width: "316px",
        display: "flex",
        flexDirection: "column",
        border: (theme: any) => `1px solid ${theme.palette.border.main}`,
        borderRadius: (theme: any) => theme.shape.borderRadius,
        padding: 1,
      }}
      data-testid="RangeFilterControl"
    >
      <Typography variant="bodyS" fontWeight={FONT_WEIGHT.bold} sx={{ mb: 2 }}>
        {label}
      </Typography>
      <RangeSlider
        value={value}
        min={min}
        max={max}
        step={step || 1}
        onChange={handleChange}
        minDistance={minDistance}
        displayValueTooltip={displayValueTooltip}
      />
      <HorizontalStack sx={{ mt: 2 }}>
        <Component
          {...ComponentProps}
          label={minInputLabel}
          fullWidth
          value={value?.[0]}
          min={min}
          max={max - minDistance}
          step={step}
          // variant="table"
          onChange={(val: number) => handleInputChange(val, 0)}
        />
        <Component
          {...ComponentProps}
          label={maxInputLabel}
          fullWidth
          value={value?.[1]}
          min={min + minDistance}
          max={max}
          step={step}
          // variant="table"
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

RangeFilterControl.defaultProps = {
  Component: NumberInput,
  clearBtnText: "Clear",
  applyBtnText: "Apply",
  step: 1,
  min: 0,
  max: 100,
  minDistance: 0,
} as Partial<RangeFilterControlProps>;

export default RangeFilterControl;
