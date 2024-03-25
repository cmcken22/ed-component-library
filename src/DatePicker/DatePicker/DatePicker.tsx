import { Box, InputAdornment } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isEqual from "lodash.isequal";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import BaseInput, { BaseInputContext, withBaseInput } from "src/BaseInput";
import { VariantMap, getFontColor } from "src/BaseInput/helpers";
import { Status } from "src/CommonTypes";
import Icon, { IconVariant } from "src/Icon";
import Popover from "src/Popover";
import { convertDateToGMT, isValidDate } from "../Common/utils";
import { DatePickerProps } from "./DatePicker.types";
import DatePickerCalendar from "./DatePickerCalendar";
dayjs.extend(customParseFormat);

const DatePickerComp = ({
  label,
  labelPosition,
  required,
  helperText,
  value: passedValue,
  onChange,
  disabled,
  format,
  placeholder,
  currentDate = new Date(),
  disableFuture,
  disableCurrent,
  disablePast,
  dateDisabled,
  numberOfMonths,
  calendarOpen,
  hideCalendar,
  disableTextInput,
  onValidation,
  calendarPlacement,
  popoverProps,
  variant,
  color,
  tools,
  previewSelection,
}: DatePickerProps) => {
  const { endAdornment, setStatus } = useContext(BaseInputContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState<Date | null>(passedValue);
  const prevValue = useRef<Date | null>(value);

  const checkDateDisabled = useCallback(
    (date: Date) => {
      const formattedCurrentDate = new Date(currentDate);
      formattedCurrentDate.setHours(0, 0, 0, 0);

      if (disableCurrent && isEqual(date, formattedCurrentDate)) {
        return true;
      }
      if (disableFuture && date > formattedCurrentDate) {
        return true;
      }
      if (disablePast && date < formattedCurrentDate) {
        return true;
      }
      if (dateDisabled) {
        return dateDisabled(date);
      }
      return false;
    },
    [disableCurrent, currentDate, disableFuture, disablePast, dateDisabled]
  );

  const handleValidation = useCallback(
    (date: Date) => {
      let valid = true;
      if (!isValidDate(date)) {
        valid = false;
      }
      if (checkDateDisabled(date)) {
        valid = false;
      }
      const nextError = !valid;
      setError(nextError);
      return valid;
    },
    [setError, checkDateDisabled]
  );

  // handle validation on mount
  useEffect(() => {
    if (value) {
      handleValidation(value);
    }
  }, []);

  const startAdornment = useCallback(() => {
    return (
      <InputAdornment position="start" sx={{ ml: "8px" }}>
        <Icon icon={IconVariant.Calendar} height="20px" width="20px" />
      </InputAdornment>
    );
  }, []);

  useEffect(() => {
    if (error === null) return;
    if (setStatus) setStatus(error ? Status.error : undefined);
    if (onValidation) onValidation(!error);
  }, [error, onValidation, setStatus]);

  const handleSelect = useCallback(
    (date: Date) => {
      setValue(date);
      if (onChange) onChange(date);
    },
    [setValue, onChange, checkDateDisabled]
  );

  const displayCalendar = useMemo(() => {
    return hideCalendar ? false : open || calendarOpen;
  }, [hideCalendar, open, calendarOpen]);

  useEffect(() => {
    if (isEqual(prevValue.current, value)) return;
    prevValue.current = value;
    handleValidation(value);
  }, [value]);

  return (
    <>
      <BaseInput>
        <BaseInput.Label required={required} position={labelPosition}>
          {label}
        </BaseInput.Label>
        <Box
          data-testid="calendar-input"
          onClick={() => setOpen(true)}
          ref={(r: any) => setAnchorEl(r)}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MuiDatePicker
              key={`MuiDatePicker--${disableTextInput}`}
              format={format}
              disableOpenPicker
              value={value ? dayjs(value) : null}
              disabled={disabled}
              sx={{
                ".MuiInputBase-root": {
                  cursor: disableTextInput ? "pointer" : "text",
                  "& input": {
                    pointerEvents: disableTextInput ? "none" : "",
                  },
                },
              }}
              slotProps={{
                textField: {
                  variant: VariantMap[variant] as any,
                  onFocus: disableTextInput ? (e) => e?.target?.blur() : null,
                  InputProps: {
                    sx: { "& input": { color: getFontColor(color, value) } },
                    placeholder,
                    startAdornment: startAdornment(),
                    endAdornment,
                  },
                },
              }}
              onChange={(date: any) => {
                if (disableTextInput) return;
                handleSelect(date ? date.toDate() : null);
              }}
            />
          </LocalizationProvider>
        </Box>
        <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
      </BaseInput>
      <Popover
        open={displayCalendar}
        anchorEl={anchorEl}
        placement={calendarPlacement}
        onClose={() => {
          if (calendarOpen) return;
          if (anchorEl?.contains(document.activeElement)) return;
          if (document.activeElement === anchorEl) return;
          setOpen(false);
        }}
        {...popoverProps}
      >
        <DatePickerCalendar
          onSelect={handleSelect}
          value={isValidDate(value) ? value : null}
          disableFuture={disableFuture}
          disablePast={disablePast}
          disableCurrent={disableCurrent}
          currentDate={currentDate}
          dateDisabled={dateDisabled}
          numberOfMonths={numberOfMonths}
          tools={tools}
          previewSelection={previewSelection}
        />
      </Popover>
    </>
  );
};

const WrappedDatePicker = withBaseInput<DatePickerProps>(
  DatePickerComp,
  "DatePicker"
);

const DatePicker = (props: DatePickerProps) => {
  return (
    <WrappedDatePicker {...props} value={convertDateToGMT(props?.value)} />
  );
};

DatePicker.defaultProps = {
  format: "MMM DD, YYYY",
  placeholder: "MMM DD, YYYY",
  numberOfMonths: 1,
  disableFuture: false,
  disableCurrent: false,
  disablePast: false,
  calendarPlacement: "bottom-end",
  tools: false,
  previewSelection: false,
} as Partial<DatePickerProps>;

// export named component for storybook docgen
export { DatePicker };
export default DatePicker;
