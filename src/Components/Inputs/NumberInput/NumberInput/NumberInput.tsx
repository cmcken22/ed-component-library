import { InputAdornment, TextField, styled } from "@mui/material";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { NumericFormat, numericFormatter } from "react-number-format";
import BaseInput, {
  BaseInputContext,
  withBaseInput,
} from "src/Components/BaseInput";
import { VariantMap, getFontColor } from "src/Components/BaseInput/helpers";
import Icon, { IconVariant } from "src/Components/Icon";
import useClampValue from "src/Hooks/useClampValue";
import useCommonOnChangeHandler from "src/Hooks/useCommonOnChangeHandler";
import useKeyBoardInput from "src/Hooks/useKeyBoardInput";
import { FormattingProps, NumberInputProps } from ".";
import Stepper from "../Stepper";

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
    ...rest
  } = props;

  const formattingProps: FormattingProps = useMemo(() => {
    return {
      fixedDecimalScale,
      decimalScale,
      thousandSeparator,
      decimalSeparator,
      allowLeadingZeros,
      allowNegative,
    };
  }, [
    fixedDecimalScale,
    decimalScale,
    thousandSeparator,
    decimalSeparator,
    allowLeadingZeros,
    allowNegative,
  ]);

  const inputProps: Omit<T, keyof FormattingProps> = useMemo(() => {
    return rest;
  }, [rest]);

  return {
    formattingProps,
    inputProps,
  };
};

interface NumberInputCompProps extends Omit<NumberInputProps, "value"> {
  value: string;
}

const NumberInputComp = (props: NumberInputCompProps) => {
  const { inputProps, formattingProps } =
    useFormattingPropIsolation<NumberInputCompProps>(props);
  const {
    label,
    placeholder,
    helperText,
    disabled,
    readOnly,
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
    showSteps,
    allowClear,
  } = inputProps;
  const { endAdornment: statusAdornment } = useContext(BaseInputContext);
  const inputRef = useRef(null);
  const [hasFocus, setHasFocus] = useState(false);
  const [value, setValue] = useState<string>(passedValue);
  const handleChangeCallback = useCommonOnChangeHandler({ onChange, debounce });
  const clamp = useClampValue({ min, max });

  useEffect(() => {
    setValue(clamp(passedValue) as string);
  }, [passedValue, clamp]);

  const handleClear = useCallback(() => {
    handleChangeCallback({
      value: "",
      floatValue: null,
      formattedValue: "",
    });
    setValue("");
  }, [handleChangeCallback, setValue]);

  const handleChange = useCallback(
    (e: { value: string | number }) => {
      const value = `${e.value}`;
      if (e?.value === "") {
        handleClear();
        return;
      }
      const floatValue = parseFloat(value);
      const clampedValue = clamp(floatValue);
      const valid = floatValue === clampedValue;
      setValue(value);
      if (valid) {
        const formattedValue = numericFormatter(value, formattingProps);
        handleChangeCallback({
          value,
          floatValue,
          formattedValue,
        });
      }
    },
    [setValue, clamp, handleChangeCallback, formattingProps, handleClear]
  );

  useKeyBoardInput({
    allow: allowKeyBoardInput,
    hasFocus,
    value,
    allowNegative: formattingProps?.allowNegative,
    min,
    max,
    step,
    callback: (val: any) => handleChange({ value: val }),
  });

  const renderStepper = useCallback(() => {
    if (!showSteps) return null;
    if (disabled || readOnly) return null;
    return (
      <Stepper
        min={min}
        max={max}
        step={step}
        value={value}
        allowNegative={formattingProps?.allowNegative}
        onChange={(val: any) => handleChange({ value: val })}
      />
    );
  }, [
    showSteps,
    disabled,
    readOnly,
    min,
    max,
    step,
    value,
    formattingProps,
    handleChange,
  ]);

  const renderStartAdornment = useCallback(() => {
    if (!startAdornment) return null;
    return (
      <InputAdornment position="start" sx={{ ml: "8px" }}>
        {startAdornment}
      </InputAdornment>
    );
  }, [startAdornment]);

  const renderEndAdornment = useCallback(() => {
    const adornments: any = [];

    if (!endAdornment && !statusAdornment && !allowClear && !showSteps)
      return null;

    if (allowClear && value && !disabled) {
      adornments.push(
        <Icon
          key="clear"
          icon={IconVariant.Close}
          size={20}
          color="border.dark"
          onClick={handleClear}
        />
      );
    }
    if (showSteps) {
      adornments.push(renderStepper());
    }
    if (statusAdornment) {
      adornments.push(statusAdornment);
    }
    if (!endAdornment || (endAdornment && persistEndAdornment)) {
      adornments.push(endAdornment);
    }

    if (!adornments.length) return null;

    return (
      <InputAdornment
        position="end"
        sx={{
          ml: "8px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          ".status-adornment": { ml: 0 },
        }}
      >
        {adornments}
      </InputAdornment>
    );
  }, [
    allowClear,
    showSteps,
    value,
    disabled,
    statusAdornment,
    endAdornment,
    persistEndAdornment,
    handleChange,
    renderStepper,
    handleClear,
  ]);

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
        handleChange({ value: clampedValue });
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
        readOnly={readOnly}
        {...formattingProps}
        disabled={disabled}
        variant={VariantMap?.[variant] as any}
        onClick={onClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="one-time-code" // <- to prevent chrome from autofilling
        InputProps={{
          readOnly,
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

// this warpper is meant to convert the value to a string
const NumberInputWrapper = (props: NumberInputProps) => {
  const value = useMemo(() => {
    if (isNaN(+props?.value)) return undefined;
    return `${props?.value}`;
  }, [props?.value]);

  // @ts-ignore
  return <NumberInputComp {...props} value={value} />;
};

const NumberInput = withBaseInput<NumberInputProps>(
  NumberInputWrapper,
  "NumberInput"
);

NumberInput.defaultProps = {
  labelPosition: "top",
  thousandSeparator: false,
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
  showSteps: false,
  allowClear: false,
} as Partial<NumberInputProps>;

// export named component for storybook docgen
export { NumberInput };
export default NumberInput;
