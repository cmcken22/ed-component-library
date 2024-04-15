import { InputAdornment, TextField } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import BaseInput, {
  BaseInputContext,
  withBaseInput,
} from "src/Components/BaseInput";
import { VariantMap, getFontColor } from "src/Components/BaseInput/helpers";
import useCommonOnChangeHandler from "src/Hooks/useCommonOnChangeHandler";
import { InputProps } from ".";

const InputComp = ({
  label,
  placeholder,
  helperText,
  disabled,
  value: passedValue,
  required,
  labelPosition = "top",
  type,
  onChange,
  debounce,
  maxChars,
  variant,
  color,
  readOnly,
  inputRef,
  onClick,
  autoFocus,
  startAdornment,
  endAdornment,
  persistEndAdornment,
}: InputProps) => {
  const { endAdornment: statusAdornment } = useContext(BaseInputContext);
  const [value, setValue] = useState(passedValue || "");
  const handleChangeCallback = useCommonOnChangeHandler({ onChange, debounce });

  useEffect(() => {
    setValue(passedValue || "");
  }, [passedValue]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if ((maxChars || maxChars === 0) && e.target.value.length > maxChars) {
        return;
      }
      setValue(e.target.value);
      handleChangeCallback(e.target.value);
    },
    [onChange, setValue, maxChars, handleChangeCallback]
  );

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
        sx={{
          ml: "8px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          ".status-adornment": { ml: 0 },
        }}
      >
        {renderEndAdornment ? endAdornment : null}
        {statusAdornment}
      </InputAdornment>
    );
  }, [statusAdornment, endAdornment, persistEndAdornment]);

  return (
    <BaseInput>
      <BaseInput.Label required={required} position={labelPosition}>
        {label}
      </BaseInput.Label>
      <TextField
        ref={inputRef}
        autoFocus={autoFocus}
        placeholder={placeholder}
        type={type}
        value={value}
        variant={VariantMap[variant] as any}
        disabled={disabled}
        onClick={onClick}
        onChange={handleChange}
        InputProps={{
          readOnly,
          sx: { "& input": { color: getFontColor(color, value) } },
          startAdornment: renderStartAdornment(),
          endAdornment: renderEndAdornment(),
        }}
      />
      <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
    </BaseInput>
  );
};

const Input = withBaseInput<InputProps>(InputComp, "Input");

Input.defaultProps = {
  labelPosition: "top",
  type: "text",
  variant: "outlined",
} as Partial<InputProps>;

// export named component for storybook docgen
export { Input };
export default Input;
