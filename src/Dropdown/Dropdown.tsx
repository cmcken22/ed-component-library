import { MenuItem, Select } from "@mui/material";
import cx from "classnames";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useOnHover } from "src/Hooks";
import BaseInput, { BaseInputContext, withBaseInput } from "../BaseInput";
import Checkbox from "../Checkbox";
import Typography from "../Typography";
import { DropdownProps, StandardDropdownOption } from "./Dropdown.types";
import DropdownIcon from "./DropdownIcon";

const DropdownComp = ({
  label,
  placeholder,
  open: defaultOpen,
  helperText,
  disabled,
  value: passedValue,
  required,
  labelPosition = "top",
  onChange,
  options,
  getOptionLabel,
  getOptionValue,
  getOptionDisabled,
  onHover,
  defaultActiveFirstOption,
  checkBoxSelection,
  MenuProps,
}: DropdownProps) => {
  const { endAdornment } = useContext(BaseInputContext);
  const [value, setValue] = useState(passedValue || "");
  const [open, setOpen] = useState(defaultOpen || false);
  const onHoverMethods = useOnHover(onHover);
  const alreadyCheckedFirstValue = useRef(false);

  useEffect(() => {
    setValue(passedValue || "");
  }, [passedValue]);

  useEffect(() => {
    setOpen(defaultOpen || false);
  }, [defaultOpen]);

  const handleChange = useCallback(
    (e: any) => {
      let nextValue = e.target.value;
      if (value === nextValue) nextValue = "";
      setValue(nextValue);
      if (onChange) onChange(nextValue);
    },
    [value, setValue, onChange]
  );

  const selectedValue = useMemo(() => {
    return options.find((opt) => {
      const optValue = getOptionValue ? getOptionValue(opt) : opt.value;
      return optValue === value;
    });
  }, [options, getOptionValue, value]);

  const renderSelectedValue = useCallback(
    (value?: any, selectedValue?: any) => {
      if (!value && placeholder) {
        return (
          <Typography variant="bodyR" color="charcoal.light">
            {placeholder}
          </Typography>
        );
      }
      return (
        <Typography variant="bodyR" color="text.primary">
          {getOptionLabel
            ? getOptionLabel(selectedValue)
            : selectedValue?.label}
        </Typography>
      );
    },
    [getOptionLabel, placeholder]
  );

  const handleDefaultActiveFirstOption = useCallback(() => {
    if (options.length === 0) return;
    const firstOption = options[0];
    const value = getOptionValue
      ? getOptionValue(firstOption)
      : firstOption.value;
    handleChange({ target: { value } });
  }, [options, getOptionValue, handleChange]);

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
    <>
      <BaseInput.Label required={required} position={labelPosition}>
        {label}
      </BaseInput.Label>
      {/* <FormControl> */}
      <Select
        className={cx("dropdown", {
          "dropdown--open": open,
        })}
        data-testid="Dropdown"
        open={open}
        {...onHoverMethods}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        displayEmpty
        placeholder={placeholder}
        value={value}
        renderValue={(value) => renderSelectedValue(value, selectedValue)}
        disabled={disabled}
        IconComponent={(props: any) => (
          <DropdownIcon endAdornment={endAdornment} {...props} />
        )}
        MenuProps={{
          ...MenuProps,
          sx: {
            ".MuiPaper-root": {
              maxHeight: MenuProps?.maxHeight || "144px",
            },
          },
        }}
      >
        {options?.map((opt: StandardDropdownOption | any, idx: number) => {
          const optValue = getOptionValue ? getOptionValue(opt) : opt?.value;
          const optDisabled = getOptionDisabled
            ? getOptionDisabled(opt)
            : opt?.disabled;
          return (
            <MenuItem
              key={optValue}
              value={optValue}
              disabled={optDisabled || disabled}
              data-dropdown-option={idx}
              onClick={(e) => {
                if (optDisabled || disabled) return;
                e.stopPropagation();
                e.preventDefault();
                handleChange({ target: { value: optValue } });
              }}
            >
              {checkBoxSelection ? (
                <Checkbox
                  label={getOptionLabel ? getOptionLabel(opt) : opt?.label}
                  checked={optValue === value ? true : false}
                  disabled={optDisabled || disabled}
                  typographyVariant="bodyS"
                />
              ) : (
                <Typography variant="bodyS" color="text.primary">
                  {getOptionLabel ? getOptionLabel(opt) : opt?.label}
                </Typography>
              )}
            </MenuItem>
          );
        })}
      </Select>
      {/* </FormControl> */}
      <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
    </>
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
