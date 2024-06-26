import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import cx from "classnames";
import { useCallback, useEffect, useMemo, useState } from "react";
import { TEST_ID } from "src/enums";
import { RangeSliderProps } from "./RangeSlider.types";

const validateRange = (value: number[]) => {
  const filteredValue = value?.filter((v) => !isNaN(v));

  if (filteredValue?.length !== 2) {
    return false;
  }
  return true;
};

const RangeSlider = ({
  id,
  className,
  sx,
  value: passedValue,
  min,
  max,
  minDistance,
  onChange,
  displayValueTooltip,
  step,
}: RangeSliderProps) => {
  const [value, setValue] = useState<number[]>(passedValue);

  useEffect(() => {
    setValue(passedValue);
  }, [passedValue]);

  const handleChange = useCallback(
    (_: any, newValue: number | number[], activeThumb: number) => {
      if (!Array.isArray(newValue)) {
        return;
      }

      let nextValue: number[] = [];
      if (activeThumb === 0) {
        nextValue = [Math.min(newValue[0], value[1] - minDistance), value[1]];
      } else {
        nextValue = [value[0], Math.max(newValue[1], value[0] + minDistance)];
      }
      setValue(nextValue);
      if (onChange) onChange(nextValue);
    },
    [value, setValue, onChange, minDistance]
  );

  const isValid = useMemo(() => validateRange(value), [value]);

  return (
    <Box
      id={id}
      className={cx("RangeSlider", {
        [className]: className,
      })}
      data-testid={TEST_ID.RANGE_SLIDER}
      sx={{
        width: "calc(100% - 10px)",
        margin: "0 auto",
        height: "16px",
        display: "flex",
        alignItems: "center",
        ...sx,
      }}
    >
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay={displayValueTooltip}
        disableSwap
        color="secondary"
        max={max}
        min={min}
        step={step}
        sx={{
          ...(!isValid && {
            ".MuiSlider-track": {
              backgroundColor: "transparent !important",
            },
          }),
        }}
      />
    </Box>
  );
};

RangeSlider.defaultProps = {
  minDistance: 0,
  min: 0,
  max: 100,
  displayValueTooltip: "off",
  step: undefined,
} as Partial<RangeSliderProps>;

export default RangeSlider;
