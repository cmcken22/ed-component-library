import { TextField } from "@mui/material";
import _debounce from "lodash.debounce";
import { useCallback, useContext, useEffect, useState } from "react";
import BaseInput, { BaseInputContext, withBaseInput } from "src/BaseInput";
import { VariantMap, getFontColor } from "src/BaseInput/helpers";
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
}: InputProps) => {
  const { endAdornment } = useContext(BaseInputContext);

  const [value, setValue] = useState(passedValue || "");

  useEffect(() => {
    setValue(passedValue || "");
  }, [passedValue]);

  const debounceOnChange = useCallback(
    _debounce((value: any) => {
      if (onChange) onChange(value);
    }, debounce),
    [debounce, onChange]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if ((maxChars || maxChars === 0) && e.target.value.length > maxChars) {
        return;
      }
      setValue(e.target.value);
      if (onChange) {
        if (debounce || debounce === 0) {
          debounceOnChange(e.target.value);
        } else onChange(e.target.value);
      }
    },
    [onChange, setValue, debounce, debounceOnChange, maxChars]
  );

  return (
    <BaseInput>
      <BaseInput.Label required={required} position={labelPosition}>
        {label}
      </BaseInput.Label>
      <TextField
        placeholder={placeholder}
        type={type}
        value={value}
        variant={VariantMap[variant] as any}
        disabled={disabled}
        onChange={handleChange}
        InputProps={{
          sx: { "& input": { color: getFontColor(color, value) } },
          endAdornment,
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
