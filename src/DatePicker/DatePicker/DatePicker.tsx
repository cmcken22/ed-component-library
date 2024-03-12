import { Box, InputAdornment } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCallback, useEffect, useRef, useState } from "react";
import BaseInput from "src/BaseInput";
import Icon, { IconVariant } from "src/Icon";
import { CalendarPicker } from "../Common";
import Popover from "../Popover";
import { DatePickerProps } from "./DatePicker.types";
dayjs.extend(customParseFormat);

const convertDateString = (text) => {
  if (!text) return null;
  if (text instanceof Date) return text;
  return new Date(text);
};

function isValidDate(d: any) {
  // @ts-ignore
  return d instanceof Date && !isNaN(d);
}

const DatePicker = ({
  id,
  label,
  labelPosition,
  required,
  helperText,
  value: passedValue,
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
}: DatePickerProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState<Date | null>(
    convertDateString(passedValue)
  );
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(0);
  const popoverRef = useRef(null);

  useEffect(() => {
    setValue(convertDateString(passedValue));
  }, [passedValue]);

  const startAdornment = useCallback(() => {
    return (
      <InputAdornment position="start" sx={{ ml: "8px" }}>
        <Icon icon={IconVariant.Calendar} height="20px" width="20px" />
      </InputAdornment>
    );
  }, []);

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
    (date: Date) => {
      const dateDisabled = checkDateDisabled(date);
      if (dateDisabled) return;
      setValue(date);
      if (onChange) onChange(date);
    },
    [setValue, onChange, checkDateDisabled]
  );

  return (
    <>
      <BaseInput key={key} id={id} status={status}>
        {({ endAdornment }: any) => (
          <>
            <BaseInput.Label required={required} position={labelPosition}>
              {label}
            </BaseInput.Label>
            <Box onClick={() => setOpen(true)} ref={(r: any) => setAnchorEl(r)}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MuiDatePicker
                  format={format}
                  disableOpenPicker
                  value={dayjs(value)}
                  slotProps={{
                    textField: {
                      InputProps: {
                        placeholder,
                        startAdornment: startAdornment(),
                        endAdornment,
                      },
                    },
                  }}
                  onChange={(date: any) => {
                    handleSelect(date.toDate());
                  }}
                />
              </LocalizationProvider>
            </Box>
            <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
          </>
        )}
      </BaseInput>
      <Popover
        key={`date-picker--${key}`}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
        onClose={() => {
          console.clear();
          console.log("document.activeElement:", document.activeElement);
          if (anchorEl?.contains(document.activeElement)) return;
          if (document.activeElement === anchorEl) return;
          setOpen(false);
          setKey((prev) => prev + 1);
        }}
      >
        <CalendarPicker
          ref={popoverRef}
          key={`date-picker2--${key}`}
          onSelect={handleSelect}
          value={isValidDate(value) ? value : null}
          disableFuture={disableFuture}
          disablePast={disablePast}
          disableCurrent={disableCurrent}
          currentDate={currentDate}
          dateDisabled={dateDisabled}
          numberOfMonths={numberOfMonths}
        />
      </Popover>
    </>
  );
};

DatePicker.defaultProps = {
  format: "MM-DD-YYYY",
  placeholder: "MM-DD-YYYY",
  numberOfMonths: 1,
};

export default DatePicker;
