import { InputAdornment, TextField, styled } from "@mui/material";
import _debounce from "lodash.debounce";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { NumericFormat, numericFormatter } from "react-number-format";
import BaseInput, {
  BaseInputContext,
  withBaseInput,
} from "src/Components/BaseInput";
import { VariantMap, getFontColor } from "src/Components/BaseInput/helpers";
import Icon, { IconVariant } from "src/Components/Icon";
import useClampValue from "src/Hooks/useClampValue";
import useKeyBoardInput from "src/Hooks/useKeyBoardInput";
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

const SymbolMap: Record<string, string | (() => JSX.Element)> = {
  Dollar: () => <Icon icon={IconVariant.Dollar} size={20} />,
  Pound: () => <Icon icon={IconVariant.Pound} size={20} />,
  Euro: () => <Icon icon={IconVariant.Euro} size={20} />,
};

const CurrencyComp = ({
  label,
  placeholder,
  helperText,
  disabled,
  value: passedValue,
  required,
  labelPosition = "top",
  prefix,
  suffix,
  persistSuffix,
  onChange,
  variant,
  color,
  allowKeyBoardInput,
  autoFocus,
  min,
  max,
  step,
  debounce,
  onFocus,
  onBlur,
  ...formattingProps
}: CurrencyProps) => {
  const { endAdornment: statusAdornment } = useContext(BaseInputContext);
  const inputRef = useRef(null);
  const [hasFocus, setHasFocus] = useState(false);
  const [value, setValue] = useState<number>(passedValue);
  const clamp = useClampValue({ min, max });

  useEffect(() => {
    setValue(clamp(passedValue));
  }, [passedValue, clamp]);

  const debounceOnChange = useCallback(
    _debounce((value: number, formattedValue: string) => {
      if (onChange) onChange(value, formattedValue);
    }, debounce),
    [debounce, onChange]
  );

  const handleChangeCallback = useCallback(
    (value: number, formattedValue: string) => {
      if (!onChange) return;
      if (debounce || debounce === 0) {
        debounceOnChange(value, formattedValue);
      } else {
        onChange(value, formattedValue);
      }
    },
    [debounce, onChange]
  );

  const handleChange = useCallback(
    (e: { floatValue: number }) => {
      const { floatValue } = e;
      const clampedValue = clamp(floatValue);
      const valid = floatValue === clampedValue;
      setValue(floatValue);
      if (valid) {
        const inputValue = inputRef.current?.value;
        const formattedValue = numericFormatter(inputValue, formattingProps);
        handleChangeCallback(floatValue, formattedValue);
      }
    },
    [setValue, clamp, handleChangeCallback, formattingProps]
  );

  useKeyBoardInput({
    allow: allowKeyBoardInput,
    hasFocus,
    value,
    allowNegative: formattingProps?.allowNegative,
    min,
    max,
    step,
    callback: (val: number) => handleChange({ floatValue: val }),
  });

  const renderCustomIcon = useCallback(
    (symbol: string | (() => JSX.Element)) => {
      if (!symbol) return null;
      if (symbol instanceof Function) {
        return symbol();
      }
      return null;
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

  const handleFocus = useCallback(
    (e: any) => {
      setHasFocus(true);
      if (onFocus) onFocus(e);
    },
    [setHasFocus, onFocus]
  );

  const handleBlur = useCallback(
    (e: any) => {
      setHasFocus(false);
      const clampedValue = clamp(value);
      if (clampedValue !== value) {
        handleChange({ floatValue: clampedValue });
      }
      if (onBlur) onBlur(e);
    },
    [setHasFocus, value, clamp, handleChange, onBlur]
  );

  return (
    <BaseInput>
      <BaseInput.Label required={required} position={labelPosition}>
        {label}
      </BaseInput.Label>
      <NumericFormat
        inputRef={inputRef}
        defaultValue={value}
        value={value}
        autoFocus={autoFocus}
        onValueChange={handleChange}
        placeholder={placeholder}
        customInput={StyledTextField}
        {...formattingProps}
        disabled={disabled}
        variant={VariantMap?.[variant] as any}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
  variant: "outlined",
  allowKeyBoardInput: true,
  step: 1,
} as Partial<CurrencyProps>;

// export named component for storybook docgen
export { Currency };
export default Currency;
