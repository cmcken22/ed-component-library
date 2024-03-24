import { InputAdornment, TextField, styled } from "@mui/material";
import { useCallback, useContext, useState } from "react";
import { NumericFormat } from "react-number-format";
import BaseInput, { BaseInputContext, withBaseInput } from "src/BaseInput";
import { VariantMap, getFontColor } from "src/BaseInput/helpers";
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

const StyledTextIcon = styled(Icon, {
  slot: "root",
})(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const SymbolMap: Record<string, string | (() => JSX.Element)> = {
  Dollar: () => <Icon icon={IconVariant.Dollar} size={20} />,
  $: () => <Icon icon={IconVariant.Dollar} size={20} />,
  Pound: "£",
  "£": "£",
  Euro: "€",
  "€": "€",
};

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
  decimalSeparator,
  prefix,
  suffix,
  persistSuffix,
  allowLeadingZeros,
  allowNegative,
  onChange,
  variant,
  color,
}: CurrencyProps) => {
  const { endAdornment: statusAdornment } = useContext(BaseInputContext);
  const [value, setValue] = useState(passedValue);

  const handleChange = useCallback(
    (e: { formattedValue: string; value: string; floatValue: number }) => {
      setValue(e.value);
      if (onChange) onChange(e.value, e.formattedValue, e.floatValue);
    },
    [setValue, onChange]
  );

  const renderCustomIcon = useCallback(
    (symbol: string | (() => JSX.Element)) => {
      if (!symbol) return null;
      if (symbol instanceof Function) {
        return symbol();
      }
      return <StyledTextIcon icon={<>{symbol}</>} size={20} />;
    },
    []
  );

  const renderStartAdornment = useCallback(() => {
    if (prefix && SymbolMap[prefix]) {
      const symbol = SymbolMap[prefix];
      return (
        <InputAdornment position="start" sx={{ ml: "8px" }}>
          {renderCustomIcon(symbol)}
        </InputAdornment>
      );
    }
  }, [prefix, renderCustomIcon]);

  const renderEndAdornment = useCallback(() => {
    if (!suffix) return statusAdornment;
    const symbol = SymbolMap?.[suffix];
    return (
      <InputAdornment
        position="end"
        sx={{ ml: "8px", ".status-adornment": { ml: 0 } }}
      >
        {!statusAdornment || (statusAdornment && persistSuffix)
          ? renderCustomIcon(symbol)
          : null}
        {statusAdornment && <>{statusAdornment}</>}
      </InputAdornment>
    );
  }, [suffix, persistSuffix, statusAdornment]);

  return (
    <BaseInput>
      <BaseInput.Label required={required} position={labelPosition}>
        {label}
      </BaseInput.Label>
      <NumericFormat
        value={value}
        onValueChange={handleChange}
        placeholder={placeholder}
        thousandSeparator={thousandSeparator}
        decimalSeparator={decimalSeparator}
        fixedDecimalScale={fixedDecimalScale}
        decimalScale={decimalScale}
        customInput={StyledTextField}
        allowLeadingZeros={allowLeadingZeros}
        allowNegative={allowNegative}
        disabled={disabled}
        variant={VariantMap?.[variant] as any}
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

const Currency = withBaseInput<CurrencyProps>(CurrencyComp, "Currency");

Currency.defaultProps = {
  labelPosition: "top",
  thousandSeparator: true,
  fixedDecimalScale: false,
  decimalSeparator: ".",
  decimalScale: 2,
  disabled: false,
  required: false,
  prefix: "Dollar",
  persistSuffix: false,
  allowLeadingZeros: false,
  allowNegative: true,
} as Partial<CurrencyProps>;

// export named component for storybook docgen
export { Currency };
export default Currency;
