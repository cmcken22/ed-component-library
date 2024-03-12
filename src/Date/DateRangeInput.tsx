import { Box, InputAdornment } from "@mui/material";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCallback, useEffect, useRef, useState } from "react";
import Icon, { IconVariant } from "src/Icon";
dayjs.extend(customParseFormat);

const findLastSpecialCharIndex = (str: string) => {
  // Regular expression to match any special character
  const specialCharRegex = /[^\w\s]/;
  // Match all special characters in the string
  const matches = str.match(new RegExp(specialCharRegex, "g"));
  // If there are no special characters, return -1
  if (!matches) return 0;
  // Find the index of the last occurrence of any special character
  const lastIndex = str.lastIndexOf(matches[matches.length - 1]);
  return lastIndex + 1;
};

const trimTextFromEnd = (str, endIndex) => {
  // Check if endIndex is within the string bounds
  if (endIndex < 0 || endIndex >= str.length) {
    return str; // Return the original string if the endIndex is out of bounds
  }
  return str.substring(0, endIndex + 1); // Trim text from the end up to endIndex
};

function findIndicesOfSpecialCharacters(str) {
  var indices = [];
  var specialCharRegex = /[^A-Za-z0-9\s]/g; // Regular expression to match any non-alphanumeric character

  // Loop through the string and find indices of special characters
  var match;
  while ((match = specialCharRegex.exec(str)) !== null) {
    indices.push(match.index);
  }

  return indices;
}

function inverseIndices(indices, strLength) {
  var ranges = [];

  // Add range from beginning to first index - 1
  if (indices[0] > 0) {
    ranges.push([0, indices[0] - 1]);
  }

  // Add ranges between consecutive indices
  for (var i = 0; i < indices.length - 1; i++) {
    if (indices[i] + 1 < indices[i + 1]) {
      ranges.push([indices[i] + 1, indices[i + 1] - 1]);
    }
  }

  // Add range from last index + 1 to end
  if (indices[indices.length - 1] < strLength - 1) {
    ranges.push([indices[indices.length - 1] + 1, strLength - 1]);
  }

  return ranges;
}

const findInverseIndex = (index, inverse) => {
  for (let i = 0; i < inverse.length; i++) {
    const x = inverse[i][0];
    if (index === x) {
      return i;
    }
  }
  return -1;
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
        sx={{ flexShrink: 0 }}
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
