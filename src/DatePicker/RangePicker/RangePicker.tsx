import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCallback, useContext, useRef, useState } from "react";
import BaseInput, { BaseInputContext } from "src/BaseInput";
import { isValidDate, subtractMonths } from "../Common/utils";
import Popover from "../Popover";
import { RangePickerProps } from "./RangePicker.types";
import RangePickerInput from "./RangePickerInput";
import MultiDatePicker from "./RangePickerModal/MultiDatePicker";
dayjs.extend(customParseFormat);

const RangePicker = (props: RangePickerProps) => {
  const { id, status, fullWidth, ...rest } = props;

  return (
    <BaseInput id={id} status={status} fullWidth={fullWidth}>
      <RangePickerComp {...rest} />
    </BaseInput>
  );
};

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
}: RangePickerProps) => {
  const { endAdornment, status } = useContext(BaseInputContext);
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
      console.log("calendarRef.current:", calendarRef.current);
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

  return (
    <div>
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
              status={status ? status : error ? "error" : ""}
              disabled={disabled}
              disableTextInput={disableTextInput}
            />
          </LocalizationProvider>
        </Box>
        <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
      </>
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
        <MultiDatePicker
          ref={calendarRef}
          onSelect={handleSelect}
          value={value}
          disableFuture={disableFuture}
          disablePast={disablePast}
          disableCurrent={disableCurrent}
          currentDate={currentDate}
          dateDisabled={dateDisabled}
          numberOfMonths={numberOfMonths}
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
