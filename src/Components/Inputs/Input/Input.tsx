import { TextField } from "@mui/material";
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
}: InputProps) => {
  const { endAdornment } = useContext(BaseInputContext);
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
          sx: { "& input": { color: getFontColor(color, value) } },
          endAdornment,
          readOnly,
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
