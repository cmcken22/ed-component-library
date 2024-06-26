import { InputAdornment } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
// import { DateField as MuiDateField } from "@mui/x-date-pickers/DateField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isEqual from "lodash.isequal";
import { useCallback, useContext, useEffect, useState } from "react";
import BaseInput, {
  BaseInputContext,
  withBaseInput,
} from "src/Components/BaseInput";
import { VariantMap, getFontColor } from "src/Components/BaseInput/helpers";
import ClearFieldIcon from "src/Components/ClearFieldIcon";
import { isValidDate } from "src/Components/DatePicker/Common/utils";
import Icon, { IconVariant } from "src/Components/Icon";
import useCommonOnChangeHandler from "src/Hooks/useCommonOnChangeHandler";
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
  debounce,
  currentDate = new Date(),
  disablePast,
  disableFuture,
  disableCurrent,
  dateDisabled,
  onValidation,
  allowClear,
  endAdornment,
  persistEndAdornment,
}: DateFieldProps) => {
  const { endAdornment: statusAdornment } = useContext(BaseInputContext);
  const [value, setValue] = useState<Date | null>(passedValue);
  const handleChangeCallback = useCommonOnChangeHandler({ onChange, debounce });

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
      if (onValidation) onValidation(valid);
      return valid;
    },
    [checkDateDisabled, onValidation]
  );

  // handle validation on mount
  useEffect(() => {
    if (value) {
      handleValidation(value);
    }
  }, []);

  const handleSelect = useCallback(
    (date: Date) => {
      setValue(date);
      handleChangeCallback(date);
      handleValidation(date);
    },
    [setValue, handleChangeCallback, handleValidation]
  );

  const handleClear = useCallback(
    (e: any) => {
      e?.preventDefault();
      e?.stopPropagation();
      handleSelect(null);
    },
    [handleSelect]
  );

  const renderEndAdornment = useCallback(() => {
    const adornments: any = [];

    if (!endAdornment && !statusAdornment && !allowClear) return null;
    if (allowClear && value && !disabled) {
      adornments.push(<ClearFieldIcon key="clear" onClear={handleClear} />);
    }
    if (statusAdornment) {
      adornments.push(statusAdornment);
    }
    if (!endAdornment || (endAdornment && persistEndAdornment)) {
      adornments.push(endAdornment);
    }

    if (!adornments.length) return null;

    return (
      <InputAdornment
        position="end"
        sx={{
          ml: "8px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          ".status-adornment": { ml: 0 },
        }}
      >
        {adornments}
      </InputAdornment>
    );
  }, [
    statusAdornment,
    endAdornment,
    persistEndAdornment,
    allowClear,
    disabled,
    value,
    handleClear,
  ]);

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
                endAdornment: renderEndAdornment(),
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
  allowClear: false,
} as Partial<DateFieldProps>;

export default DateField;
