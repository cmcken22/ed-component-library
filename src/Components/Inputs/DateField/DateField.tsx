import { InputAdornment } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCallback, useContext, useEffect, useState } from "react";
import BaseInput, {
  BaseInputContext,
  withBaseInput,
} from "src/Components/BaseInput";
import { VariantMap, getFontColor } from "src/Components/BaseInput/helpers";
import Icon, { IconVariant } from "src/Components/Icon";
import { TEST_ID } from "src/enums";
import { DateFieldProps } from "./DateField.types";
dayjs.extend(customParseFormat);

const DateFieldComp = ({
  label,
  required,
  labelPosition = "top",
  helperText,
  disabled,
  variant,
  placeholder,
  color,
  format,
  value: passedValue,
  onClick,
  onChange,
  hideCalendarIcon,
  readOnly,
  inputRef,
}: DateFieldProps) => {
  const { endAdornment } = useContext(BaseInputContext);
  const [value, setValue] = useState<Date | null>(passedValue);

  useEffect(() => {
    setValue(passedValue);
  }, [passedValue]);

  const startAdornment = useCallback(() => {
    if (hideCalendarIcon) return null;
    return (
      <InputAdornment position="start" sx={{ ml: "8px" }}>
        <Icon icon={IconVariant.Calendar} height="20px" width="20px" />
      </InputAdornment>
    );
  }, [hideCalendarIcon]);

  const handleSelect = useCallback(
    (date: Date) => {
      setValue(date);
      if (onChange) onChange(date);
    },
    [setValue, onChange]
  );

  return (
    <BaseInput>
      <BaseInput.Label required={required} position={labelPosition}>
        {label}
      </BaseInput.Label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MuiDatePicker
          ref={inputRef}
          format={format}
          disableOpenPicker
          value={value ? dayjs(value) : null}
          disabled={disabled}
          readOnly={readOnly}
          slotProps={{
            textField: {
              variant: VariantMap[variant] as any,
              onFocus: readOnly ? (e) => e?.target?.blur() : null,
              onClick,
              InputProps: {
                ...{ "data-testid": TEST_ID.DATE_FIELD_INPUT },
                sx: { "& input": { color: getFontColor(color, value) } },
                placeholder,
                startAdornment: startAdornment(),
                endAdornment,
              },
            },
          }}
          // this is required because mui does not support MMM due to lack of locale support.
          // although, it seems to be working fine. I think its more of an issue outside of North America
          // link to issue: https://github.com/mui/mui-x/issues/9509#issuecomment-1612965715
          localeText={{
            fieldMonthPlaceholder: () => "MMM",
          }}
          onChange={(date: any) => {
            if (readOnly || disabled) return;
            handleSelect(date ? date.toDate() : null);
          }}
        />
      </LocalizationProvider>
      <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
    </BaseInput>
  );
};

const DateField = withBaseInput<DateFieldProps>(DateFieldComp, "DateField");

DateField.defaultProps = {
  format: "MMM DD, YYYY",
  placeholder: "MMM DD, YYYY",
  disableFuture: false,
  disableCurrent: false,
  disablePast: false,
} as Partial<DateFieldProps>;

export default DateField;
