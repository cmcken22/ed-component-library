import { TextField } from "@mui/material";
import _debounce from "lodash.debounce";
import { useCallback, useContext, useEffect, useState } from "react";
import BaseInput, { BaseInputContext } from "src/BaseInput";
import { InputProps } from ".";
import Currency from "../Currency";
import Percent from "../Percent";
import TextArea from "../TextArea";

const Input = (props: InputProps) => {
  const { id, status, fullWidth, ...rest } = props;

  return (
    <BaseInput id={id} status={status} fullWidth={fullWidth}>
      <InputComp {...rest} />
    </BaseInput>
  );
};

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
    <>
      <BaseInput.Label required={required} position={labelPosition}>
        {label}
      </BaseInput.Label>
      <TextField
        placeholder={placeholder}
        type={type}
        value={value}
        variant="outlined"
        disabled={disabled}
        onChange={handleChange}
        InputProps={{ endAdornment }}
      />
      <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
    </>
  );
};

Input.defaultProps = {
  labelPosition: "top",
  type: "text",
} as Partial<InputProps>;

Input.Currency = Currency;
Input.Percent = Percent;
Input.TextArea = TextArea;

export default Input;
