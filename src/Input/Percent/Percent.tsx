import { Box, InputAdornment, TextField, styled } from "@mui/material";
import { useCallback, useState } from "react";
import { NumericFormat } from "react-number-format";
import BaseInput from "src/BaseInput";
import { InputProps } from "src/Input";
import Typography from "src/Typography";

const StyledTextField = styled(TextField, {
  slot: "root",
})(() => {
  return {
    "& input": {
      textAlign: "left",
    },
  };
});

export interface PercentInputProps
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

const Percent = ({
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
  onChange,
  fixedDecimalScale,
  decimalScale,
  thousandSeparator,
  width,
  minWidth,
}: PercentInputProps) => {
  const [value, setValue] = useState(passedValue);

  const handleChange = useCallback(
    (e: { formattedValue: string; value: string; floatValue: number }) => {
      const value = e.value;
      setValue(value);
      if (onChange) onChange(value, e.formattedValue, e.floatValue);
    },
    [setValue, onChange]
  );

  const percentAdornment = useCallback(() => {
    return (
      <InputAdornment position="end" sx={{ mr: 0 }}>
        <Box sx={{ width: "15px" }}>
          <Typography variant="bodyR" color="charcoal.90">
            %
          </Typography>
        </Box>
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
              // "& input": {
              //   textAlign: "left",
              // },
            }}
            InputProps={{
              endAdornment: endAdornment || percentAdornment(),
            }}
          />
          <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
        </>
      )}
    </BaseInput>
  );
};

Percent.defaultProps = {
  labelPosition: "top",
  fixedDecimalScale: false,
  thousandSeparator: false,
  disabled: false,
  required: false,
  width: "73px",
  minWidth: "73px",
};

export default Percent;
