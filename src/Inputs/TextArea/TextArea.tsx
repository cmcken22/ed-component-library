import { TextField } from "@mui/material";
import _debounce from "lodash.debounce";
import { useCallback, useContext, useState } from "react";
import BaseInput, { BaseInputContext, withBaseInput } from "src/BaseInput";
import { VariantMap, getFontColor } from "src/BaseInput/helpers";
import { TextAreaProps } from ".";

const TextAreaComp = ({
  label,
  placeholder,
  helperText,
  disabled,
  value: passedValue,
  required,
  labelPosition = "top",
  maxRows,
  minRows,
  onChange,
  debounce,
  maxChars,
  maxWords,
  variant,
  color,
  autoFocus,
}: TextAreaProps) => {
  const { endAdornment } = useContext(BaseInputContext);
  const [value, setValue] = useState(passedValue || "");

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
      if (maxWords && e.target.value.split(" ").length > maxWords) {
        return;
      }
      setValue(e.target.value);
      if (onChange) {
        if (debounce || debounce === 0) {
          debounceOnChange(e.target.value);
        } else onChange(e.target.value);
      }
    },
    [onChange, setValue, debounce, debounceOnChange, maxChars, maxWords]
  );

  return (
    <BaseInput>
      <BaseInput.Label required={required} position={labelPosition}>
        {label}
      </BaseInput.Label>
      <TextField
        value={value}
        autoFocus={autoFocus}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        multiline
        minRows={minRows}
        maxRows={maxRows}
        variant={VariantMap[variant] as any}
        InputProps={{
          sx: { "& input": { color: getFontColor(color, value) } },
          endAdornment,
        }}
      />
      <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
    </BaseInput>
  );
};

const TextArea = withBaseInput<TextAreaProps>(TextAreaComp, "TextArea");

TextArea.defaultProps = {
  labelPosition: "top",
  minRows: 2,
  maxRows: 4,
  variant: "outlined",
} as Partial<TextAreaProps>;

// export named component for storybook docgen
export { TextArea };
export default TextArea;
