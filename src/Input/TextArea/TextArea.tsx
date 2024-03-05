import { TextField } from "@mui/material";
import _debounce from "lodash.debounce";
import { useCallback, useState } from "react";
import BaseInput from "src/BaseInput";
import { InputProps } from "../Input";

export interface TextAreaProps extends Omit<InputProps, "type"> {
  maxRows?: number;
  minRows?: number;
  onChange?: (value: string) => void;
  debounce?: number;
  maxChars?: number;
  maxWords?: number;
}

const TextArea = ({
  id,
  label,
  placeholder,
  status,
  helperText,
  disabled,
  value: passedValue,
  fullWidth,
  required,
  labelPosition = "top",
  maxRows,
  minRows,
  onChange,
  debounce,
  maxChars,
  maxWords,
  width,
  minWidth,
}: TextAreaProps) => {
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
    <BaseInput id={id} status={status} disabled={disabled}>
      {({ endAdornment }: any) => (
        <>
          <BaseInput.Label required={required} position={labelPosition}>
            {label}
          </BaseInput.Label>
          <TextField
            value={value}
            placeholder={placeholder}
            variant="outlined"
            disabled={disabled}
            fullWidth={fullWidth}
            onChange={handleChange}
            multiline
            minRows={minRows}
            maxRows={maxRows}
            InputProps={{ endAdornment }}
            sx={{
              width,
              minWidth,
            }}
          />
          <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
        </>
      )}
    </BaseInput>
  );
};

TextArea.defaultProps = {
  labelPosition: "top",
  minRows: 2,
  maxRows: 4,
  minWidth: "240px",
};

export default TextArea;
