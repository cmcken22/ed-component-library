import { useCallback, useEffect, useRef, useState } from "react";
import useCommonOnChangeHandler from "src/Hooks/useCommonOnChangeHandler";
import { Typography } from "src/index";
import BaseSelect from "../BaseSelect";
import { useCommonMethods } from "../Common";
import { SelectProps } from "./Select.types";

const Select = (props: SelectProps) => {
  const {
    value: passedValue,
    options,
    onChange,
    placeholder,
    defaultActiveFirstOption,
    allowDeselect,
    renderValue,
    variant,
    debounce,
    allowClear,
    ...rest
  } = props;
  const [value, setValue] = useState(passedValue || "");
  const alreadyCheckedFirstValue = useRef(false);
  const {
    handleGetOptionLabel,
    handleGetOptionValue,
    handleGetOptionDisabled,
    getOptionFromValue,
  } = useCommonMethods<SelectProps>(props);
  const handleChangeCallback = useCommonOnChangeHandler({ onChange, debounce });

  useEffect(() => {
    setValue(passedValue || "");
  }, [passedValue]);

  const handleGetValueSelected = useCallback(
    (optValue: string) => {
      if (!value || !value?.length) return false;
      return value.includes(optValue);
    },
    [value, handleGetOptionValue]
  );

  const handleChange = useCallback(
    (nextSelected: string) => {
      let nextValue = nextSelected;
      if (nextValue === value && allowDeselect) nextValue = "";
      setValue(nextValue);
      handleChangeCallback(nextValue);
    },
    [value, setValue, allowDeselect, handleChangeCallback]
  );

  const renderSelectedValue = useCallback(
    (value: string) => {
      if (!value && placeholder) {
        return (
          <Typography variant="bodyR" color="charcoal.light">
            {placeholder}
          </Typography>
        );
      }

      const selectedOption = getOptionFromValue(value);
      if (!selectedOption) return null;

      if (renderValue) {
        return renderValue(value, selectedOption);
      }

      return (
        <Typography variant="bodyR" color="text.primary">
          {handleGetOptionLabel(selectedOption)}
        </Typography>
      );
    },
    [handleGetOptionLabel, placeholder, getOptionFromValue, renderValue]
  );

  const handleDefaultActiveFirstOption = useCallback(() => {
    if (options.length === 0) return;
    if (value) return;
    const firstOption = options[0];
    const optValue = handleGetOptionValue(firstOption);
    handleChange(optValue);
  }, [value, options, handleGetOptionValue, handleChange]);

  useEffect(() => {
    if (defaultActiveFirstOption && options.length > 0) {
      if (!alreadyCheckedFirstValue.current) {
        alreadyCheckedFirstValue.current = true;
        handleDefaultActiveFirstOption();
      }
    }
  }, [
    options,
    defaultActiveFirstOption,
    handleDefaultActiveFirstOption,
    value,
  ]);

  return (
    <BaseSelect
      {...rest}
      value={value}
      options={options}
      getOptionLabel={handleGetOptionLabel}
      getOptionValue={handleGetOptionValue}
      getOptionDisabled={handleGetOptionDisabled}
      onChange={handleChange}
      renderSelectedValue={renderSelectedValue}
      getValueSelected={handleGetValueSelected}
      placeholder={placeholder}
      variant={variant}
      allowClear={allowClear && Boolean(value)}
    />
  );
};

Select.defaultProps = {
  labelPosition: "top",
  options: [],
  maxListHeight: 144,
  variant: "outlined",
  allowDeselect: true,
} as Partial<SelectProps>;

export { Select };
export default Select;
