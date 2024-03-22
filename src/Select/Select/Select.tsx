import { useCallback, useEffect, useRef, useState } from "react";
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
      if (nextValue === value) nextValue = "";
      setValue(nextValue);
      if (onChange) onChange(nextValue);
    },
    [value, setValue, onChange]
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

      return (
        <Typography variant="bodyR" color="text.primary">
          {handleGetOptionLabel(selectedOption)}
        </Typography>
      );
    },
    [handleGetOptionLabel, placeholder, getOptionFromValue]
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
    />
  );
};

Select.defaultProps = {
  labelPosition: "top",
  options: [],
  maxListHeight: 144,
} as Partial<SelectProps>;

export default Select;
