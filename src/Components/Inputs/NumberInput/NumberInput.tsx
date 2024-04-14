import { InputAdornment, TextField, styled } from "@mui/material";
import _debounce from "lodash.debounce";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { NumericFormat, numericFormatter } from "react-number-format";
import BaseInput, {
  BaseInputContext,
  withBaseInput,
} from "src/Components/BaseInput";
import { VariantMap, getFontColor } from "src/Components/BaseInput/helpers";
import useClampValue from "src/Hooks/useClampValue";
import useKeyBoardInput from "src/Hooks/useKeyBoardInput";
import { FormattingProps, NumberInputProps } from ".";

const StyledTextField = styled(TextField, {
  slot: "root",
  shouldForwardProp: (prop) => prop !== "textAlign",
})<{ textAlign?: string }>(({ textAlign }) => {
  return {
    "& input": {
      textAlign,
    },
  };
});

export const useFormattingPropIsolation = <T extends FormattingProps>(
  props: T
) => {
  const {
    fixedDecimalScale,
    decimalScale,
    thousandSeparator,
    decimalSeparator,
    allowLeadingZeros,
    allowNegative,
    ...inputProps
  } = props;

  return {
    formattingProps: {
      fixedDecimalScale,
      decimalScale,
      thousandSeparator,
      decimalSeparator,
      allowLeadingZeros,
      allowNegative,
    } as FormattingProps,
    inputProps: inputProps as Omit<T, keyof FormattingProps>,
  };
};

const NumberInputComp = (props: NumberInputProps) => {
  const { inputProps, formattingProps } =
    useFormattingPropIsolation<NumberInputProps>(props);
  const {
    label,
    placeholder,
    helperText,
    disabled,
    value: passedValue,
    required,
    labelPosition = "top",
    onChange,
    variant,
    color,
    allowKeyBoardInput,
    autoFocus,
    min,
    max,
    step,
    debounce,
    onClick,
    onFocus,
    onBlur,
    endAdornment,
    startAdornment,
    persistEndAdornment,
    textAlign,
  } = inputProps;
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

  const renderStartAdornment = useCallback(() => {
    if (!startAdornment) return null;
    return (
      <InputAdornment position="start" sx={{ ml: "8px" }}>
        {startAdornment}
      </InputAdornment>
    );
  }, [startAdornment]);

  const renderEndAdornment = useCallback(() => {
    if (!endAdornment && !statusAdornment) return null;
    if (!endAdornment) return statusAdornment;

    let renderEndAdornment = true;
    if (statusAdornment) {
      renderEndAdornment = false;
      if (persistEndAdornment) renderEndAdornment = true;
    }

    return (
      <InputAdornment
        position="end"
        sx={{ ml: "8px", ".status-adornment": { ml: 0 } }}
      >
        {renderEndAdornment ? endAdornment : null}
        {statusAdornment}
      </InputAdornment>
    );
  }, [statusAdornment, endAdornment, persistEndAdornment]);

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
        onClick={onClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        InputProps={{
          sx: {
            "& input": {
              color: getFontColor(color, value),
              textAlign,
            },
          },
          startAdornment: renderStartAdornment(),
          endAdornment: renderEndAdornment(),
        }}
      />
      <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
    </BaseInput>
  );
};

const NumberInput = withBaseInput<NumberInputProps>(
  NumberInputComp,
  "NumberInput"
);

NumberInput.defaultProps = {
  labelPosition: "top",
  thousandSeparator: true,
  fixedDecimalScale: false,
  decimalSeparator: ".",
  decimalScale: 2,
  disabled: false,
  required: false,
  allowLeadingZeros: false,
  allowNegative: true,
  variant: "outlined",
  allowKeyBoardInput: true,
  persistEndAdornment: false,
  textAlign: "right",
  step: 1,
} as Partial<NumberInputProps>;

// export named component for storybook docgen
export { NumberInput };
export default NumberInput;
