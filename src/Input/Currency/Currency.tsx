import { InputAdornment, TextField, styled } from "@mui/material";
import { useCallback, useState } from "react";
import { NumericFormat } from "react-number-format";
import BaseInput from "src/BaseInput";
import Icon, { IconVariant } from "src/Icon";
import { InputProps } from "../Input";

const StyledTextField = styled(TextField, {
  slot: "root",
})(() => {
  return {
    "& input": {
      textAlign: "right",
    },
  };
});

export interface CurrencyInputProps
  extends Omit<InputProps, "type" | "maxChars" | "onChange"> {
  onChange?: (
    value: string,
    formattedValue: string,
    floatValue: number
  ) => void;
  fixedDecimalScale?: boolean;
  decimalScale?: number;
  thousandSeparator?: boolean;
}

const Currency = ({
  id,
  label,
  placeholder,
  status,
  helperText,
  disabled,
  value: passedValue,
  fullWidth,
  required,
  labelPosition = "top",
  fixedDecimalScale,
  decimalScale,
  thousandSeparator,
  onChange,
  width,
  minWidth,
}: CurrencyInputProps) => {
  const [value, setValue] = useState(passedValue);

  const handleChange = useCallback(
    (e: { formattedValue: string; value: string; floatValue: number }) => {
      setValue(e.value);
      if (onChange) onChange(e.value, e.formattedValue, e.floatValue);
    },
    [setValue, onChange]
  );

  const startAdornment = useCallback(() => {
    return (
      <InputAdornment position="start" sx={{ ml: "8px" }}>
        <Icon icon={IconVariant.Dollar} height="20px" width="20px" />
      </InputAdornment>
    );
  }, []);

  return (
    <BaseInput id={id} status={status}>
      {({ endAdornment }: any) => (
        <>
          <BaseInput.Label required={required} position={labelPosition}>
            {label}
          </BaseInput.Label>
          <NumericFormat
            value={value}
            onValueChange={handleChange}
            placeholder={placeholder}
            thousandSeparator={thousandSeparator}
            fixedDecimalScale={fixedDecimalScale}
            decimalScale={decimalScale}
            customInput={StyledTextField}
            fullWidth={fullWidth}
            disabled={disabled}
            sx={{
              width,
              minWidth,
            }}
            InputProps={{
              startAdornment: startAdornment(),
              endAdornment,
            }}
          />
          <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
        </>
      )}
    </BaseInput>
  );
};

Currency.defaultProps = {
  labelPosition: "top",
  thousandSeparator: false,
  fixedDecimalScale: false,
  decimalScale: 2,
  fullWidth: true,
  disabled: false,
  required: false,
  minWidth: "240px",
};

export default Currency;
