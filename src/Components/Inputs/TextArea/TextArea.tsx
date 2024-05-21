import { InputAdornment, TextField } from "@mui/material";
import { useCallback, useContext, useState } from "react";
import BaseInput, {
  BaseInputContext,
  withBaseInput,
} from "src/Components/BaseInput";
import { VariantMap, getFontColor } from "src/Components/BaseInput/helpers";
import Icon, { IconVariant } from "src/Components/Icon";
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
  allowClear,
  endAdornment,
  persistEndAdornment,
}: TextAreaProps) => {
  const { endAdornment: statusAdornment } = useContext(BaseInputContext);
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

  const handleClear = useCallback(() => {
    setValue("");
    handleChangeCallback("");
  }, [setValue, handleChangeCallback]);

  const renderEndAdornment = useCallback(() => {
    const adornments: any = [];

    if (!endAdornment && !statusAdornment && !allowClear) return null;

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
    value,
    disabled,
    statusAdornment,
    endAdornment,
    persistEndAdornment,
    handleClear,
  ]);

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
          endAdornment: renderEndAdornment(),
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
  allowClear: false,
} as Partial<TextAreaProps>;

// export named component for storybook docgen
export { TextArea };
export default TextArea;
