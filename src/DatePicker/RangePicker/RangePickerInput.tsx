import { Box, InputAdornment, styled } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCallback, useEffect, useRef, useState } from "react";
import { getFontColor } from "src/BaseInput/helpers";
import Icon, { IconVariant } from "src/Icon";
import { shouldNotForwardProp } from "src/utils";
dayjs.extend(customParseFormat);

const StyledWrapper = styled(Box, {
  shouldForwardProp: shouldNotForwardProp(["row", "status", "variant"]),
  slot: "root",
})<{ status?: string; disabled?: boolean; variant?: string; theme?: any }>(({
  theme,
  status,
  disabled,
  variant,
}) => {
  const colorMap = {
    error: theme.palette.error.main,
    warning: theme.palette.warning.main,
    success: theme.palette.success.main,
  };

  let borderColor = colorMap?.[status]
    ? `${colorMap?.[status]} !important`
    : theme.palette.border.main;
  if (disabled) borderColor = theme.palette.border.main;

  return {
    backgroundColor: theme.palette.common.white,
    border: "1px solid",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderColor: borderColor,
    borderWidth: theme.shape.borderWidth,
    ".MuiInputBase-root": {
      width: "auto",
    },
    fieldset: {
      display: "none",
    },
    "&:hover": {
      borderColor: !disabled ? theme.palette.primary.main : "",
    },
    "&:focus-within": {
      borderColor: !disabled ? theme.palette.primary.main : "",
    },
    ...(variant === "table" && {
      height: "100%",
      border: "none",
      backgroundColor: "transparent",
    }),
  };
});

const findIndicesOfSpecialCharacters = (str) => {
  const formattedStr = str.replace(/ /g, "_");
  const indices = [];
  const specialCharRegex = /[^A-Za-z0-9\s]/g; // Regular expression to match any non-alphanumeric character

  let match;
  while ((match = specialCharRegex.exec(formattedStr)) !== null) {
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

const DateRangeInput = ({
  format,
  value: passedValue,
  onChange,
  placeholder,
  endAdornment,
  status,
  disabled,
  disableTextInput,
  variant,
  color,
}: any) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [value, setValue] = useState(passedValue || [null, null]);

  useEffect(() => {
    setValue(passedValue || [null, null]);
  }, [passedValue]);

  const startAdornment = useCallback(() => {
    return (
      <InputAdornment position="start" sx={{ ml: "8px" }}>
        <Icon icon={IconVariant.Calendar} height="20px" width="20px" />
      </InputAdornment>
    );
  }, []);

  const handleKeyDown = useCallback(
    (e, target, refNumber) => {
      if (e?.key !== "ArrowLeft" && e?.key !== "ArrowRight") return;
      const indices = findIndicesOfSpecialCharacters(format);
      const inverse = inverseIndices(indices, format.length);

      const direction = e?.key === "ArrowRight" ? 1 : -1;
      const nextInput = refNumber === 0 ? ref2.current : ref1.current;
      if (target.selectionEnd >= format.length && direction === 1) {
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
      const nextValue = [...value];
      nextValue[idx] = date;
      setValue(nextValue);
      if (onChange) onChange(nextValue, idx);
    },
    [value, onChange, setValue]
  );

  const renderInput = useCallback(
    (index: number) => {
      return (
        <MuiDatePicker
          inputRef={index === 0 ? ref1 : ref2}
          format={format}
          disableOpenPicker
          value={value?.[index] ? dayjs(value?.[index]) : null}
          sx={{
            pointerEvents: disableTextInput ? "none" : "all",
            fieldset: {
              border: "none",
            },
          }}
          slotProps={{
            textField: {
              InputProps: {
                style: {
                  height: "34px",
                  padding: 0,
                  color: getFontColor(color, value?.[index]),
                },
              },
              onKeyDown: (e) => handleKeyDown(e, e.target, index),
              placeholder: Array.isArray(placeholder)
                ? placeholder?.[index]
                : placeholder,
            },
          }}
          disabled={disabled || disableTextInput}
          onChange={(date: any) => {
            handleChange(date ? date.toDate() : null, index);
          }}
        />
      );
    },
    [
      handleKeyDown,
      format,
      value,
      handleChange,
      placeholder,
      disabled,
      disableTextInput,
      color,
    ]
  );

  return (
    <StyledWrapper status={status} disabled={disabled} variant={variant}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {startAdornment()}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {renderInput(0)}
          <Icon
            icon={IconVariant.ArrowRight}
            height="16px"
            width="16px"
            sx={{ flexShrink: 0 }}
          />
          {renderInput(1)}
        </Box>
        {endAdornment && <Box sx={{ mr: 1 }}>{endAdornment}</Box>}
      </LocalizationProvider>
    </StyledWrapper>
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
