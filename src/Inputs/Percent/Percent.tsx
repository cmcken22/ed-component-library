import { Box, InputAdornment, TextField, styled } from "@mui/material";
import { useCallback, useContext, useState } from "react";
import { NumericFormat } from "react-number-format";
import BaseInput, { BaseInputContext } from "src/BaseInput";
import Typography from "src/Typography";
import { PercentProps } from ".";

const StyledTextField = styled(TextField, {
  slot: "root",
})(() => {
  return {
    "& input": {
      textAlign: "left",
    },
  };
});

const Percent = (props: PercentProps) => {
  const { id, status, fullWidth, ...rest } = props;

  return (
    <BaseInput id={id} status={status} fullWidth={fullWidth}>
      <PercentComp {...rest} fullWidth={fullWidth} />
    </BaseInput>
  );
};

const PercentComp = ({
  label,
  placeholder,
  helperText,
  disabled,
  value: passedValue,
  // fullWidth,
  required,
  labelPosition = "top",
  fixedDecimalScale,
  decimalScale,
  thousandSeparator,
  onChange,
}: PercentProps) => {
  const { endAdornment } = useContext(BaseInputContext);
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
        // fullWidth={fullWidth}
        disabled={disabled}
        // sx={{
        //   width,
        //   minWidth,
        // }}
        InputProps={{
          endAdornment: endAdornment || percentAdornment(),
        }}
      />
      <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
    </>
  );
};

Percent.defaultProps = {
  labelPosition: "top",
  fixedDecimalScale: false,
  thousandSeparator: false,
  disabled: false,
  required: false,
} as Partial<PercentProps>;

export default Percent;