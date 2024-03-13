import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCallback, useRef, useState } from "react";
import BaseInput from "src/BaseInput";
import { CalendarPicker } from "../Common";
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
  const popoverRef = useRef(null);
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

  // TODO: if change is coming from the calendar,
  // then we need to have better judgement on which index to update
  // i.e: if the first date is invalid, then maybe we should update the first date
  // otherwise, maybe we sort the dates?
  const handleSelect = useCallback(
    (dateRange: Date[]) => {
      console.clear();
      console.log("dateRange:", dateRange);
      // const sortedRange = dateRange.sort((a, b) => a.getTime() - b.getTime());

      let valid = true;
      for (let i = 0; i < dateRange.length; i++) {
        if (checkDateDisabled(dateRange[i])) {
          valid = false;
          break;
        }
      }
      setError(!valid);
      setValue(dateRange);
      if (onChange) onChange(dateRange);
    },
    [setValue, onChange, checkDateDisabled, setError]
  );

  const handleOpenPopover = useCallback(() => {
    if (disabled) return;
    setOpen(true);
  }, [disabled, setOpen]);

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
          ref={popoverRef}
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
