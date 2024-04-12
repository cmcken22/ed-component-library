import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isEqual from "lodash.isequal";
import { useCallback, useEffect, useMemo, useState } from "react";
import DateRangeField from "src/Components/Inputs/DateRangeField";
import Popover from "src/Components/Popover";
import { formatDateRange, isValidDate } from "../../Common/utils";
import RangePickerCalendar from "../RangePickerCalendar/RangePickerCalendar";
import { RangePickerProps } from "./RangePicker.types";
dayjs.extend(customParseFormat);

const RangePickerComp = ({
  value: passedValue,
  disabled,
  onChange,
  format,
  currentDate = new Date(),
  disableFuture,
  disableCurrent,
  disablePast,
  dateDisabled,
  numberOfMonths,
  calendarOpen,
  hideCalendarPicker,
  disableTextInput,
  onValidation,
  calendarPlacement,
  popoverProps,
  tools,
  previewSelection,
  readOnly,
  ...inputProps
}: RangePickerProps) => {
  const [anchorEl, setAnchorRef] = useState<HTMLElement | null>(null);
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
    if (onValidation) onValidation(!error);
  }, [error, onValidation]);

  const handleSelect = useCallback(
    (dateRange: Date[]) => {
      if (readOnly) return;
      setValue(dateRange);
      if (onChange) onChange(dateRange);
    },
    [setValue, onChange, readOnly]
  );

  const handleOpenPopover = useCallback(() => {
    if (disabled) return;
    setOpen(true);
  }, [disabled, setOpen]);

  const displayCalendar = useMemo(() => {
    return hideCalendarPicker ? false : open || calendarOpen;
  }, [hideCalendarPicker, open, calendarOpen]);

  useEffect(() => {
    handleValidation(value);
  }, [value]);

  return (
    <>
      <DateRangeField
        {...inputProps}
        onClick={handleOpenPopover}
        inputRef={(ref) => setAnchorRef(ref)}
        format={format}
        value={value}
        onChange={handleSelect}
        disabled={disabled}
        readOnly={disableTextInput || readOnly}
      />
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

const RangePicker = (props: RangePickerProps) => {
  return <RangePickerComp {...props} value={formatDateRange(props?.value)} />;
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
