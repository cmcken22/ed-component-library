import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCallback, useRef, useState } from "react";
import BaseInput from "src/BaseInput";
import { CalendarPicker } from "../Common";
import { isValidDate, subtractMonths } from "../Common/utils";
import Popover from "../Popover";
import { RangePickerProps } from "./RangePicker.types";
import RangePickerInput from "./RangePickerInput";
dayjs.extend(customParseFormat);

const RangePicker = ({
  id,
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
  status,
  numberOfMonths,
  calendarOpen,
  hideCalendar,
  disableTextInput,
}: RangePickerProps) => {
  const anchorRef = useRef<HTMLElement>(null);
  const calendarRef = useRef(null);
  const [value, setValue] = useState<Date[] | null>(
    (passedValue ? passedValue : []) as Date[]
  );
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(0);
  const [error, setError] = useState(false);

  const checkDateDisabled = useCallback(
    (date: Date) => {
      const formattedCurrentDate = new Date(currentDate);
      formattedCurrentDate.setHours(0, 0, 0, 0);

      if (disableCurrent && date === formattedCurrentDate) {
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

  const handleSelect = useCallback(
    (dateRange: Date[], idx?: number) => {
      let valid = true;
      for (let i = 0; i < dateRange.length; i++) {
        if (checkDateDisabled(dateRange[i])) {
          valid = false;
          break;
        }
      }
      // TODO: check if dateRange[0] is after dateRange[1]
      if (dateRange[0] && dateRange[1]) {
        if (dateRange[0] > dateRange[1]) {
          valid = false;
        }
      }
      setError(!valid);
      setValue(dateRange);
      if (onChange) onChange(dateRange);
      setTimeout(() => {
        if (!isNaN(idx)) {
          const valid = isValidDate(dateRange[idx]);
          if (valid && calendarRef.current) {
            if (idx === 1) {
              const prevMonth = subtractMonths(dateRange[idx], 1);
              calendarRef.current.setViewing(prevMonth);
            } else {
              calendarRef.current.setViewing(dateRange[idx]);
            }
          }
        }
      }, 50);
    },
    [setValue, onChange, checkDateDisabled, setError]
  );

  const handleOpenPopover = useCallback(() => {
    if (disabled) return;
    setOpen(true);
  }, [disabled, setOpen]);

  console.log("calendarRef:", calendarRef);

  return (
    <div>
      <BaseInput key={key} id={id} status={error ? "error" : status}>
        {({ endAdornment }: any) => (
          <>
            <BaseInput.Label required={required} position={labelPosition}>
              {label}
            </BaseInput.Label>
            <Box ref={anchorRef} onClick={handleOpenPopover}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <RangePickerInput
                  format={format}
                  value={value}
                  onChange={handleSelect}
                  placeholder={placeholder}
                  endAdornment={endAdornment}
                  status={error ? "error" : status}
                  disabled={disabled}
                  disableTextInput={disableTextInput}
                />
              </LocalizationProvider>
            </Box>
            <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
          </>
        )}
      </BaseInput>
      <Popover
        key={`date-picker--${key}`}
        open={hideCalendar ? false : open || calendarOpen}
        anchorEl={anchorRef?.current}
        placement="bottom-end"
        onClose={() => {
          if (calendarOpen) return;
          if (anchorRef?.current?.contains(document.activeElement)) return;
          if (document.activeElement === anchorRef?.current) return;
          setOpen(false);
          setKey((prev) => prev + 1);
        }}
      >
        <CalendarPicker
          ref={calendarRef}
          key={`date-picker2--${key}`}
          onSelect={handleSelect}
          value={value}
          disableFuture={disableFuture}
          disableCurrent={disableCurrent}
          disablePast={disablePast}
          dateDisabled={dateDisabled}
          currentDate={currentDate}
          numberOfMonths={numberOfMonths}
          range
        />
      </Popover>
    </div>
  );
};

RangePicker.defaultProps = {
  format: "MM/DD/YYYY",
  placeholder: "MM/DD/YYYY",
  numberOfMonths: 2,
};

export default RangePicker;
