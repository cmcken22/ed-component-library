import { useCallback, useEffect, useRef, useState } from "react";
import OverflowRowCounter from "src/OverflowRowCounter";
import { Typography } from "src/index";
import BaseSelect from "../BaseSelect";
import { useCommonMethods } from "../Common";
import { MultiSelectProps } from "./MultiSelect.types";
import SelectedItemChip from "./SelectItemChip";

const MultiSelect = (props: MultiSelectProps) => {
  const {
    value: passedValue,
    options,
    onChange,
    placeholder,
    defaultActiveFirstOption,
    renderValue,
    wrap,
    ...rest
  } = props;
  const [value, setValue] = useState(passedValue || []);
  const alreadyCheckedFirstValue = useRef(false);
  const {
    handleGetOptionLabel,
    handleGetOptionValue,
    handleGetOptionDisabled,
    getOptionFromValue,
  } = useCommonMethods<MultiSelectProps>(props);

  useEffect(() => {
    setValue(passedValue || []);
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
      let nextValue = [...value];
      if (nextValue.includes(nextSelected)) {
        nextValue = nextValue.filter((val) => val !== nextSelected);
      } else {
        nextValue.push(nextSelected);
      }
      setValue(nextValue);
      if (onChange) onChange(nextValue);
    },
    [value, setValue, onChange]
  );

  const renderSelectedValue = useCallback(
    (value?: string[]) => {
      const empty = !value || value?.length === 0;
      if (empty && placeholder) {
        return (
          <Typography variant="bodyR" color="charcoal.light">
            {placeholder}
          </Typography>
        );
      }
      if (empty) return null;

      const res = [];
      const selectedOptions = [];
      for (const val of value) {
        const opt = getOptionFromValue(val);
        if (opt) {
          selectedOptions.push(opt);
          res.push(
            <SelectedItemChip
              key={val}
              label={handleGetOptionLabel(opt)}
              onRemove={() => handleChange(val)}
            />
          );
        }
      }
      if (renderValue) {
        return renderValue(value, selectedOptions);
      }

      return <OverflowRowCounter>{res}</OverflowRowCounter>;
    },
    [
      handleGetOptionLabel,
      placeholder,
      getOptionFromValue,
      renderValue,
      handleChange,
    ]
  );

  const handleDefaultActiveFirstOption = useCallback(() => {
    if (options.length === 0) return;
    if (value && value.length > 0) return;
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
      multiple
      value={value}
      options={options}
      getOptionLabel={handleGetOptionLabel}
      getOptionValue={handleGetOptionValue}
      getOptionDisabled={handleGetOptionDisabled}
      onChange={handleChange}
      renderSelectedValue={renderSelectedValue}
      getValueSelected={handleGetValueSelected}
      placeholder={placeholder}
      wrap={wrap}
    />
  );
};

MultiSelect.defaultProps = {
  labelPosition: "top",
  options: [],
  maxListHeight: 144,
  wrap: true,
  variant: "outlined",
} as Partial<MultiSelectProps>;

export { MultiSelect };
export default MultiSelect;
