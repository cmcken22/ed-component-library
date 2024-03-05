import { TextField } from "@mui/material";
import cx from "classnames";
import _debounce from "lodash.debounce";
import { useCallback, useState } from "react";
import BaseInput, { BaseInputProps } from "src/BaseInput";
import Currency from "./Currency";
import Percent from "./Percent";
import TextArea from "./TextArea";

export interface InputProps extends BaseInputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  value?: string;
  required?: boolean;
  labelPosition?: "top" | "left";
  onChange?: (value: string) => void;
  endAdornment?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "text" | "password" | "number";
  debounce?: number;
  maxChars?: number;
  width?: string | number;
  minWidth?: string | number;
}

const Input = ({
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
  type,
  onChange,
  debounce,
  maxChars,
  width,
  minWidth,
}: InputProps) => {
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
    <BaseInput id={id} status={status}>
      {({ endAdornment, className }: any) => (
        <>
          <BaseInput.Label required={required} position={labelPosition}>
            {label}
          </BaseInput.Label>
          <TextField
            className={cx(className)}
            placeholder={placeholder}
            type={type}
            value={value}
            variant="outlined"
            disabled={disabled}
            fullWidth={fullWidth}
            onChange={handleChange}
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

Input.defaultProps = {
  labelPosition: "top",
  multiline: false,
  type: "text",
  minWidth: "240px",
};

Input.Currency = Currency;
Input.Percent = Percent;
Input.TextArea = TextArea;

export default Input;
