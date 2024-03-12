import { Box, InputAdornment } from "@mui/material";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCallback, useRef, useState } from "react";
import BaseInput from "src/BaseInput";
import Icon, { IconVariant } from "src/Icon";
import { DateProps } from "./Date.types";
// import DatePicker from "./DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DatePicker from "./DatePicker";
import Popover from "./Popover";
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

const DateField = ({
  value: passedValue,
  onChange,
  format,
  placeholder,
  currentDate = new Date(),
  disableFuture,
  disableCurrent,
  disablePast,
  dateDisabled,
}: DateProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState<Date | null>(
    convertDateString(passedValue)
  );
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(0);
  const popoverRef = useRef(null);

  const startAdornment = useCallback(() => {
    return (
      <InputAdornment position="start" sx={{ ml: "8px" }}>
        <Icon icon={IconVariant.Calendar} height="20px" width="20px" />
      </InputAdornment>
    );
  }, []);

  const handleSelect = useCallback(
    (date: Date) => {
      if (disableFuture && date > currentDate) {
        return;
      }
      if (disablePast && date < currentDate) {
        return;
      }
      setValue(date);
      if (onChange) onChange(date);
    },
    [setValue, onChange, disableFuture, disablePast, currentDate]
  );

  return (
    <div>
      <BaseInput key={key}>
        {({ endAdornment }: any) => (
          <>
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
        <DatePicker
          ref={popoverRef}
          key={`date-picker2--${key}`}
          onSelect={handleSelect}
          value={isValidDate(value) ? value : null}
          disableFuture={disableFuture}
          disablePast={disablePast}
          disableCurrent={disableCurrent}
          currentDate={currentDate}
          dateDisabled={dateDisabled}
        />
      </Popover>
    </div>
  );
};

DateField.defaultProps = {
  format: "MM-DD-YYYY",
  placeholder: "MM-DD-YYYY",
};

export default DateField;
