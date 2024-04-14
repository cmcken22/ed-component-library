import { InputAdornment, TextField, styled } from "@mui/material";
import _debounce from "lodash.debounce";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { NumericFormat } from "react-number-format";
import BaseInput, {
  BaseInputContext,
  withBaseInput,
} from "src/Components/BaseInput";
import { VariantMap, getFontColor } from "src/Components/BaseInput/helpers";
import Icon, { IconVariant } from "src/Components/Icon";
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
  debounce,
  ...formattingProps
}: PercentProps) => {
  const { endAdornment: statusAdornment } = useContext(BaseInputContext);
  const [value, setValue] = useState(passedValue);
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setValue(passedValue);
  }, [passedValue]);

  const debounceOnChange = useCallback(
    _debounce((value: number) => {
      if (onChange) onChange(value);
    }, debounce),
    [debounce, onChange]
  );

  const handleChangeCallback = useCallback(
    (value: number) => {
      if (!onChange) return;
      if (debounce || debounce === 0) {
        debounceOnChange(value);
      } else {
        onChange(value);
      }
    },
    [debounce, onChange]
  );

  const handleChange = useCallback(
    (e: { floatValue: number }) => {
      const { floatValue } = e;

      let valid = true;
      if ((min || min === 0) && floatValue < min) {
        valid = false;
      } else if ((max || max === 0) && floatValue > max) {
        valid = false;
      }

      setValue(floatValue);
      if (valid) handleChangeCallback(floatValue);
    },
    [setValue, min, max, handleChangeCallback]
  );

  useKeyBoardInput({
    allow: allowKeyBoardInput,
    hasFocus,
    value,
    allowNegative: formattingProps?.allowNegative,
    min,
    max,
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

  const handleBlur = useCallback(() => {
    setHasFocus(false);
    if (value === null || value === undefined) {
      return;
    }
    const parsedValue = parseFloat(`${value}`);
    if ((min || min === 0) && parsedValue < min) {
      const nextValue = `${min}`;
      const floatValue = parseFloat(nextValue);
      handleChange({ floatValue });
    }
    if ((max || max === 0) && parsedValue > max) {
      const nextValue = `${max}`;
      const floatValue = parseFloat(nextValue);
      handleChange({ floatValue });
    }
  }, [value, min, max, setHasFocus, formattingProps, handleChange]);

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
        onFocus={() => setHasFocus(true)}
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
  min: 0,
  max: 100,
} as Partial<PercentProps>;

// export named component for storybook docgen
export { Percent };
export default Percent;
