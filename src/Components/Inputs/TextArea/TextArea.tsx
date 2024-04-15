import { TextField } from "@mui/material";
import { useCallback, useContext, useState } from "react";
import BaseInput, {
  BaseInputContext,
  withBaseInput,
} from "src/Components/BaseInput";
import { VariantMap, getFontColor } from "src/Components/BaseInput/helpers";
import useCommonOnChangeHandler from "src/Hooks/useCommonOnChangeHandler";
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
  readOnly,
}: TextAreaProps) => {
  const { endAdornment } = useContext(BaseInputContext);
  const [value, setValue] = useState(passedValue || "");
  const handleChangeCallback = useCommonOnChangeHandler({ onChange, debounce });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if ((maxChars || maxChars === 0) && e.target.value.length > maxChars) {
        return;
      }
      if (maxWords && e.target.value.split(" ").length > maxWords) {
        return;
      }
      setValue(e.target.value);
      handleChangeCallback(e.target.value);
    },
    [setValue, maxChars, maxWords, handleChangeCallback]
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
          readOnly,
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
