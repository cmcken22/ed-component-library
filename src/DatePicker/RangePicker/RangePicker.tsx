import { Box } from "@mui/material";
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
import { Status } from "src/CommonTypes";
import Popover from "src/Popover";
import { formatDateRange, isValidDate } from "../Common/utils";
import { RangePickerProps } from "./RangePicker.types";
import RangePickerCalendar from "./RangePickerCalendar/RangePickerCalendar";
import RangePickerInput from "./RangePickerInput";
dayjs.extend(customParseFormat);

const RangePickerComp = ({
  label,
  labelPosition,
  required,
  helperText,
  value: passedValue,
  disabled,
  onChange,
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
  tools,
  previewSelection,
  variant,
  color,
}: RangePickerProps) => {
  const { endAdornment, status, setStatus } = useContext(BaseInputContext);
  const anchorRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState<Date[] | null>(
    (passedValue ? passedValue : []) as Date[]
  );

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
    (dateRange: Date[]) => {
      let valid = true;
      for (let i = 0; i < dateRange.length; i++) {
        if (!isValidDate(dateRange[i])) {
          valid = false;
          break;
        }
        if (checkDateDisabled(dateRange[i])) {
          valid = false;
          break;
        }
      }
      if (dateRange[0] && dateRange[1]) {
        if (dateRange[0] > dateRange[1]) {
          valid = false;
        }
      }
      const nextError = !valid;
      setError(nextError);
      return valid;
    },
    [setError, checkDateDisabled, error]
  );

  // handle validation on mount
  useEffect(() => {
    if (value && Array.isArray(value) && value.length > 0) {
      handleValidation(value);
    }
  }, []);

  useEffect(() => {
    if (error === null) return;
    if (setStatus) setStatus(error ? Status.error : undefined);
    if (onValidation) onValidation(!error);
  }, [error, onValidation, setStatus]);

  const handleSelect = useCallback(
    (dateRange: Date[]) => {
      setValue(dateRange);
      if (onChange) onChange(dateRange);
    },
    [setValue, onChange]
  );

  const handleOpenPopover = useCallback(() => {
    if (disabled) return;
    setOpen(true);
  }, [disabled, setOpen]);

  const displayCalendar = useMemo(() => {
    return hideCalendar ? false : open || calendarOpen;
  }, [hideCalendar, open, calendarOpen]);

  useEffect(() => {
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
          ref={anchorRef}
          onClick={handleOpenPopover}
          sx={{ height: "100%" }}
        >
          <RangePickerInput
            format={format}
            value={value}
            onChange={handleSelect}
            placeholder={placeholder}
            endAdornment={endAdornment}
            status={status}
            disabled={disabled}
            disableTextInput={disableTextInput}
            variant={variant}
            color={color}
          />
        </Box>
        <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
      </BaseInput>
      <Popover
        open={displayCalendar}
        anchorEl={anchorRef?.current}
        placement={calendarPlacement}
        onClose={() => {
          if (calendarOpen) return;
          if (anchorRef?.current?.contains(document.activeElement)) return;
          if (document.activeElement === anchorRef?.current) return;
          setOpen(false);
        }}
        {...popoverProps}
      >
        <RangePickerCalendar
          onSelect={handleSelect}
          value={value}
          disableFuture={disableFuture}
          disablePast={disablePast}
          disableCurrent={disableCurrent}
          currentDate={currentDate}
          dateDisabled={dateDisabled}
          numberOfMonths={numberOfMonths}
          tools={tools}
          previewSelection={previewSelection}
          format={format}
        />
      </Popover>
    </>
  );
};

// @ts-ignore
const WrappedRangePicker = withBaseInput<RangePickerProps>(
  RangePickerComp,
  "RangePicker"
);

const RangePicker = (props: RangePickerProps) => {
  return (
    <WrappedRangePicker {...props} value={formatDateRange(props?.value)} />
  );
};

RangePicker.defaultProps = {
  format: "MMM DD, YYYY",
  placeholder: "MMM DD, YYYY",
  numberOfMonths: 2,
  disableFuture: false,
  disableCurrent: false,
  disablePast: false,
  calendarPlacement: "bottom-end",
  tools: false,
  previewSelection: false,
} as Partial<RangePickerProps>;

// export named component for storybook docgen
export { RangePicker };
export default RangePicker;
