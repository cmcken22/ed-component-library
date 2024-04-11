import { InputAdornment, TextField, styled } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import BaseInput, { BaseInputContext, withBaseInput } from "src/BaseInput";
import { VariantMap, getFontColor } from "src/BaseInput/helpers";
import useKeyBoardInput from "src/Hooks/useKeyBoardInput";
import Icon, { IconVariant } from "src/Icon";
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

const PercentComp = ({
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
  decimalSeparator,
  iconPlacement,
  persistSuffix,
  allowLeadingZeros,
  allowNegative,
  onChange,
  variant,
  color,
  allowKeyBoardInput,
  autoFocus,
}: PercentProps) => {
  const { endAdornment: statusAdornment } = useContext(BaseInputContext);
  const [value, setValue] = useState(passedValue);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    setValue(passedValue);
  }, [passedValue]);

  const handleChange = useCallback(
    (e: { formattedValue: string; value: string; floatValue: number }) => {
      const value = e.value;
      setValue(value);
      if (onChange) onChange(value, e.formattedValue, e.floatValue);
    },
    [setValue, onChange]
  );

  useKeyBoardInput({
    allow: allowKeyBoardInput,
    hasFocus,
    value,
    allowNegative,
    callback: handleChange,
  });

  const renderStartAdornment = useCallback(() => {
    if (iconPlacement !== "prefix") return null;
    return (
      <InputAdornment position="start" sx={{ ml: "8px" }}>
        <Icon icon={IconVariant.Percentage} size={20} />
      </InputAdornment>
    );
  }, [iconPlacement]);

  const renderEndAdornment = useCallback(() => {
    if (iconPlacement !== "suffix") {
      return statusAdornment;
    }
    return (
      <InputAdornment
        position="end"
        sx={{ ml: "8px", ".status-adornment": { ml: 0 } }}
      >
        {!statusAdornment || (statusAdornment && persistSuffix) ? (
          <Icon icon={IconVariant.Percentage} size={20} />
        ) : null}
        {statusAdornment}
      </InputAdornment>
    );
  }, [iconPlacement, persistSuffix, statusAdornment]);

  return (
    <BaseInput>
      <BaseInput.Label required={required} position={labelPosition}>
        {label}
      </BaseInput.Label>
      <NumericFormat
        value={value}
        autoFocus={autoFocus}
        onValueChange={handleChange}
        placeholder={placeholder}
        thousandSeparator={thousandSeparator}
        fixedDecimalScale={fixedDecimalScale}
        decimalScale={decimalScale}
        decimalSeparator={decimalSeparator}
        customInput={StyledTextField}
        allowLeadingZeros={allowLeadingZeros}
        allowNegative={allowNegative}
        disabled={disabled}
        variant={VariantMap[variant] as any}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        InputProps={{
          sx: { "& input": { color: getFontColor(color, value) } },
          startAdornment: renderStartAdornment(),
          endAdornment: renderEndAdornment(),
        }}
      />
      <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
    </BaseInput>
  );
};

const Percent = withBaseInput<PercentProps>(PercentComp, "Percent");

Percent.defaultProps = {
  labelPosition: "top",
  fixedDecimalScale: false,
  thousandSeparator: false,
  decimalSeparator: ".",
  disabled: false,
  required: false,
  iconPlacement: "suffix",
  persistSuffix: false,
  allowLeadingZeros: false,
  allowNegative: true,
  decimalScale: 2,
  variant: "outlined",
  allowKeyBoardInput: true,
} as Partial<PercentProps>;

// export named component for storybook docgen
export { Percent };
export default Percent;
