import { InputAdornment, TextField, styled } from "@mui/material";
import { useCallback, useContext, useState } from "react";
import { NumericFormat } from "react-number-format";
import BaseInput, { BaseInputContext, withBaseInput } from "src/BaseInput";
import Icon, { IconVariant } from "src/Icon";
import { CurrencyProps } from ".";

const StyledTextField = styled(TextField, {
  slot: "root",
})(() => {
  return {
    "& input": {
      textAlign: "right",
    },
  };
});

const CurrencyComp = ({
  label,
  placeholder,
  helperText,
  disabled,
  value: passedValue,
  required,
  labelPosition = "top",
  fixedDecimalScale,
  decimalScale,
  thousandSeparator,
  onChange,
}: CurrencyProps) => {
  const { endAdornment } = useContext(BaseInputContext);
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
        disabled={disabled}
        InputProps={{
          startAdornment: startAdornment(),
          endAdornment,
        }}
      />
      <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
    </>
  );
};

const Currency = withBaseInput<CurrencyProps>(CurrencyComp, "Currency");

Currency.defaultProps = {
  labelPosition: "top",
  thousandSeparator: false,
  fixedDecimalScale: false,
  decimalScale: 2,
  disabled: false,
  required: false,
} as Partial<CurrencyProps>;

// export named component for storybook docgen
export { Currency };
export default Currency;
