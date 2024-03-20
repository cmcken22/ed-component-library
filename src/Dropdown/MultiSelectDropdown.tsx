import { useCallback, useEffect, useRef, useState } from "react";
import { Chip } from "..";
import { withBaseInput } from "../BaseInput";
import Typography from "../Typography";
import { CommonDropdown } from "./Dropdown";
import { DropdownProps, MultiSelectDropdownProps } from "./Dropdown.types";

const DropdownComp = ({
  placeholder,
  value: passedValue,
  onChange,
  options,
  getOptionLabel,
  getOptionValue,
  defaultActiveFirstOption,
  ...rest
}: MultiSelectDropdownProps) => {
  const [value, setValue] = useState<string[]>(passedValue || []);
  const alreadyCheckedFirstValue = useRef(false);

  useEffect(() => {
    setValue(passedValue || []);
  }, [passedValue]);

  const handleChange = useCallback(
    (data: any) => {
      const nextValues = [...value];
      if (nextValues.includes(data)) {
        nextValues.splice(value.indexOf(data), 1);
      } else {
        nextValues.push(data);
      }
      setValue(nextValues);
      if (onChange) onChange(nextValues);
    },
    [value, setValue, onChange]
  );

  const getOptionFromValue = useCallback(
    (value: any) => {
      return options.find(
        (option) =>
          (getOptionValue ? getOptionValue(option) : option?.value) === value
      );
    },
    [options]
  );

  const renderSelectedValue = useCallback(
    (value?: any) => {
      const empty = !value || value.length === 0;
      if (empty && placeholder) {
        return (
          <Typography variant="bodyR" color="charcoal.light">
            {placeholder}
          </Typography>
        );
      }
      if (empty) return null;

      const str = value?.map((val) => {
        const selectedValue = getOptionFromValue(val);
        return getOptionLabel
          ? getOptionLabel(selectedValue)
          : selectedValue?.label;
      });
      console.log("str:", str);

      return (
        <Typography
          variant="bodyR"
          color="text.primary"
          sx={{
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {str.join(", ")}
        </Typography>
      );

      return (
        <>
          {value.map((val) => {
            const selectedValue = getOptionFromValue(val);
            return <Chip key={val} text={getOptionLabel(selectedValue)} />;
          })}
        </>
      );
    },
    [getOptionLabel, placeholder, getOptionFromValue]
  );

  const handleDefaultActiveFirstOption = useCallback(() => {
    if (options.length === 0) return;
    const firstOption = options[0];
    const value = getOptionValue
      ? getOptionValue(firstOption)
      : firstOption.value;
    handleChange({ target: { value } });
  }, [options, getOptionValue, handleChange]);

  const getOptionSelected = useCallback(
    (opt: any) => {
      const optValue = getOptionValue ? getOptionValue(opt) : opt.value;
      return value.includes(optValue);
    },
    [value, getOptionValue]
  );

  useEffect(() => {
    if (defaultActiveFirstOption && !value && options.length > 0) {
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
    <CommonDropdown
      {...rest}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      options={options}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      renderSelectedValue={renderSelectedValue}
      getOptionSelected={getOptionSelected}
      multiple
    />
  );
};

const Dropdown = withBaseInput<DropdownProps>(DropdownComp, "Dropdown");

Dropdown.defaultProps = {
  labelPosition: "top",
  options: [],
  MenuProps: {
    maxHeight: "144px",
  },
} as Partial<DropdownProps>;

// export named component for storybook docgen
export { Dropdown };
export default Dropdown;
