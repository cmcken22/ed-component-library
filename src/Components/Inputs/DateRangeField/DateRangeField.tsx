import { Box, InputAdornment, styled } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import BaseInput, {
  BaseInputContext,
  withBaseInput,
} from "src/Components/BaseInput";
import { getFontColor } from "src/Components/BaseInput/helpers";
import ClearFieldIcon from "src/Components/ClearFieldIcon";
import Icon, { IconVariant } from "src/Components/Icon";
import useCommonOnChangeHandler from "src/Hooks/useCommonOnChangeHandler";
import { TEST_ID } from "src/enums";
import { shouldNotForwardProp } from "src/utils";
import {
  findIndicesOfSpecialCharacters,
  inverseIndices,
} from "./DateRangeField.helpers";
import { DateRangeFieldProps } from "./DateRangeField.types";
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
    ...(disabled && {
      backgroundColor: theme.palette.charcoal?.["5"],
    }),
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

const DateRangeFieldComp = ({
  label,
  labelPosition = "top",
  placeholder,
  helperText,
  required,
  disabled,
  variant,
  format,
  value: passedValue,
  onChange,
  readOnly,
  color,
  hideCalendarIcon,
  inputRef,
  onClick,
  debounce,
  allowClear,
  endAdornment,
  persistEndAdornment,
}: DateRangeFieldProps) => {
  const { status, endAdornment: statusAdornment } =
    useContext(BaseInputContext);
  const handleChangeCallback = useCommonOnChangeHandler({ onChange, debounce });

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [value, setValue] = useState(passedValue || [null, null]);

  useEffect(() => {
    setValue(passedValue || [null, null]);
  }, [passedValue]);

  const startAdornment = useCallback(() => {
    if (hideCalendarIcon) return null;
    return (
      <InputAdornment position="start" sx={{ ml: "8px" }}>
        <Icon icon={IconVariant.Calendar} height="20px" width="20px" />
      </InputAdornment>
    );
  }, [hideCalendarIcon]);

  const handleKeyDown = useCallback(
    (e: any, target: any, refNumber: number) => {
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
      handleChangeCallback(nextValue);
    },
    [value, setValue, handleChangeCallback]
  );

  const handleClear = useCallback(
    (e: any, idx: number) => {
      e?.preventDefault();
      e?.stopPropagation();
      handleChange(null, idx);
    },
    [handleChange]
  );

  const renderInputEndAdornment = useCallback(
    (idx: number) => {
      if (!allowClear) return null;

      const adornments: any = [];

      const val = value?.[idx];
      if (allowClear && val && !disabled) {
        adornments.push(
          <ClearFieldIcon
            key="clear"
            onClear={(e) => handleClear(e, idx)}
            sx={{ flexShrink: 0 }}
          />
        );
      }

      if (!adornments.length) return null;

      return adornments;
    },
    [
      statusAdornment,
      endAdornment,
      persistEndAdornment,
      allowClear,
      disabled,
      value,
      handleClear,
    ]
  );

  const renderEndAdornment = useCallback(() => {
    if (!endAdornment && !statusAdornment) return null;

    const adornments: any = [];

    if (statusAdornment) {
      adornments.push(statusAdornment);
    }
    if (!endAdornment || (endAdornment && persistEndAdornment)) {
      adornments.push(endAdornment);
    }

    if (!adornments.length) return null;

    return (
      <Box
        sx={{
          height: "20px",
          width: "20px",
          mr: 1,
          ml: 0.25,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <InputAdornment
          position="end"
          sx={{
            position: "absolute",
            right: 0,
            display: "flex",
            alignItems: "center",
            gap: "4px",
            ".status-adornment": { ml: 0 },
          }}
        >
          {adornments}
        </InputAdornment>
      </Box>
    );
  }, [statusAdornment, endAdornment, persistEndAdornment]);

  const renderInput = useCallback(
    (index: number) => {
      return (
        <MuiDatePicker
          inputRef={index === 0 ? ref1 : ref2}
          format={format}
          disableOpenPicker
          value={value?.[index] ? dayjs(value?.[index]) : null}
          readOnly={readOnly}
          sx={{
            pointerEvents: readOnly ? "none" : "all",
            fieldset: {
              border: "none",
            },
            ".MuiInputBase-root": {
              input: {
                padding: 0,
                paddingRight: 0.5,
              },
            },
          }}
          slotProps={{
            textField: {
              InputProps: {
                style: {
                  height: "34px",
                  padding: "0 !important",
                  color: getFontColor(color, value?.[index]),
                },
              },
              onKeyDown: (e) => handleKeyDown(e, e.target, index),
              placeholder: Array.isArray(placeholder)
                ? placeholder?.[index]
                : placeholder,
            },
          }}
          disabled={disabled}
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
      readOnly,
      color,
    ]
  );

  return (
    <BaseInput>
      <BaseInput.Label required={required} position={labelPosition}>
        {label}
      </BaseInput.Label>
      <StyledWrapper
        ref={inputRef}
        status={status}
        disabled={disabled}
        variant={variant}
        onClick={onClick}
        data-testid={TEST_ID.DATE_RANGE_FIELD}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {startAdornment()}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              paddingRight: !endAdornment && !statusAdornment ? 1 : 0,
            }}
          >
            {renderInput(0)}
            {renderInputEndAdornment(0)}
            <Icon
              icon={IconVariant.ArrowRight}
              height="16px"
              width="16px"
              sx={{ flexShrink: 0, mx: 0.5 }}
            />
            {renderInput(1)}
            {renderInputEndAdornment(1)}
            {renderEndAdornment()}
          </Box>
          {endAdornment && <Box sx={{ mr: 1 }}>{endAdornment}</Box>}
        </LocalizationProvider>
      </StyledWrapper>
      <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
    </BaseInput>
  );
};

// @ts-ignore
const DateRangeField = withBaseInput<DateRangeFieldProps>(
  DateRangeFieldComp,
  "DateRangeField"
);

DateRangeField.defaultProps = {
  format: "MMM DD, YYYY",
  placeholder: "MMM DD, YYYY",
  allowClear: false,
} as Partial<DateRangeFieldProps>;

export default DateRangeField;
