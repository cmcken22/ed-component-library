import { Box, InputAdornment } from "@mui/material";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCallback, useEffect, useRef, useState } from "react";
import Icon, { IconVariant } from "src/Icon";
dayjs.extend(customParseFormat);

const findIndicesOfSpecialCharacters = (str) => {
  const indices = [];
  const specialCharRegex = /[^A-Za-z0-9\s]/g; // Regular expression to match any non-alphanumeric character
  // Loop through the string and find indices of special characters
  let match;
  while ((match = specialCharRegex.exec(str)) !== null) {
    indices.push(match.index);
  }

  return indices;
};

const inverseIndices = (indices, strLength) => {
  const ranges = [];

  // Add range from beginning to first index - 1
  if (indices[0] > 0) {
    ranges.push([0, indices[0] - 1]);
  }

  // Add ranges between consecutive indices
  for (let i = 0; i < indices.length - 1; i++) {
    if (indices[i] + 1 < indices[i + 1]) {
      ranges.push([indices[i] + 1, indices[i + 1] - 1]);
    }
  }

  // Add range from last index + 1 to end
  if (indices[indices.length - 1] < strLength - 1) {
    ranges.push([indices[indices.length - 1] + 1, strLength - 1]);
  }

  return ranges;
};

const DateRangeInput = ({ format, value: passedValue, onChange }: any) => {
  const [value, setValue] = useState(passedValue);

  useEffect(() => {
    setValue(passedValue);
  }, [passedValue]);

  const startAdornment = useCallback(() => {
    return (
      <InputAdornment position="start" sx={{ ml: "8px" }}>
        <Icon icon={IconVariant.Calendar} height="20px" width="20px" />
      </InputAdornment>
    );
  }, []);

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const handleKeyDown = useCallback(
    (e, target, refNumber) => {
      if (e?.key !== "ArrowLeft" && e?.key !== "ArrowRight") return;
      const indices = findIndicesOfSpecialCharacters(format);
      const inverse = inverseIndices(indices, format.length);
      const direction = e?.key === "ArrowRight" ? 1 : -1;
      const nextInput = refNumber === 1 ? ref2.current : ref1.current;
      if (target.selectionEnd === 10 && direction === 1) {
        nextInput.focus();
        nextInput.setSelectionRange(0, 0);
      }
      if (target.selectionStart === 0 && direction === -1) {
        nextInput.focus();
        const pos = inverse[inverse.length - 1];
        const start = pos[0];
        const end = pos[1] + 1;
        nextInput.setSelectionRange(start, end);
      }
    },
    [format]
  );

  const handleChange = useCallback(
    (date: Date | null, idx: number) => {
      console.log("date:", date);
      console.log("value:", value);
      console.log("idx:", idx);
      const nextValue = [...value];
      nextValue[idx] = date;
      setValue(nextValue);
      if (onChange) onChange(nextValue);
    },
    [value, onChange]
  );

  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        width: "400px",
        ".MuiInputBase-root": {
          // background: "rgba(255, 0, 255, 0.4)",
          width: "auto",
        },
        fieldset: {
          display: "none",
        },
      }}
    >
      {startAdornment()}
      <MuiDatePicker
        inputRef={ref1}
        format={format}
        disableOpenPicker
        value={value?.[0] ? dayjs(value?.[0]) : ""}
        sx={{
          fieldset: {
            border: "none",
          },
        }}
        slotProps={{
          textField: {
            onKeyDown: (e) => handleKeyDown(e, e.target, 1),
            sx: {
              border: "none",
            },
          },
        }}
        onChange={(date: any) => {
          handleChange(date.toDate(), 0);
        }}
      />
      <Icon
        icon={IconVariant.ArrowRight}
        height="16px"
        width="16px"
        sx={{ flexShrink: 0, mr: "8px" }}
      />
      <MuiDatePicker
        inputRef={ref2}
        format={format}
        disableOpenPicker
        value={value?.[1] ? dayjs(value?.[1]) : ""}
        slotProps={{
          textField: {
            onKeyDown: (e) => handleKeyDown(e, e.target, 2),
          },
        }}
        onChange={(date: any) => {
          handleChange(date.toDate(), 1);
        }}
      />
    </Box>
  );
};

DateRangeInput.defaultProps = {
  format: "DD-MM-YYYY",
  value: new Date(),
  currentDate: new Date(),
  disableFuture: false,
  disablePast: false,
};

export default DateRangeInput;
