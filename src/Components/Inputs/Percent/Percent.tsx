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
  iconPlacement,
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
}: PercentProps) => {
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
        // @ts-ignore
        variant={VariantMap[variant] as any}
        onFocus={handleFocus}
        onBlur={handleBlur}
        inputProps={{
          min,
          max,
        }}
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
  thousandSeparator: !false,
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
  step: 1,
} as Partial<PercentProps>;

// export named component for storybook docgen
export { Percent };
export default Percent;
