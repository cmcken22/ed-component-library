import { TextField } from "@mui/material";
import _debounce from "lodash.debounce";
import { useCallback, useContext, useState } from "react";
import BaseInput, { BaseInputContext } from "src/BaseInput";
import { TextAreaProps } from ".";

const TextArea = (props: TextAreaProps) => {
  const { id, status, fullWidth, ...rest } = props;

  return (
    <BaseInput id={id} status={status} fullWidth={fullWidth}>
      <TextAreaComp {...rest} fullWidth={fullWidth} />
    </BaseInput>
  );
};

const TextAreaComp = ({
  label,
  placeholder,
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
      />
      <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
    </>
  );
};

TextArea.defaultProps = {
  labelPosition: "top",
  minRows: 2,
  maxRows: 4,
} as Partial<TextAreaProps>;

export default TextArea;
