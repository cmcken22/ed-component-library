import { FormControl, MenuItem, Select } from "@mui/material";
import cx from "classnames";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useOnHover } from "src/Hooks";
import BaseInput from "../BaseInput";
import Typography from "../Typography";
import DropdownIcon from "./DropdownIcon";

export interface StandardDropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface DropdownProps {
  id?: string;
  label?: string;
  placeholder?: string;
  open?: boolean;
  status?: "error" | "success" | "warning";
  helperText?: string;
  disabled?: boolean;
  value?: string;
  // fullWidth?: boolean;
  required?: boolean;
  labelPosition?: "top" | "left";
  options: StandardDropdownOption[] | any[];
  onChange?: (value: string) => void;
  startAdornment?: () => React.ReactNode;
  getOptionLabel?: (option: any) => string;
  getOptionValue?: (option: any) => string;
  getOptionDisabled?: (option: any) => boolean;
  onHover?: (hovered: boolean) => void;
  defaultActiveFirstOption?: boolean;
  minWidth?: number | string;
}

const Dropdown = ({
  id,
  label,
  placeholder,
  open: defaultOpen,
  status,
  helperText,
  disabled,
  value: passedValue,
  // fullWidth,
  required,
  labelPosition = "top",
  onChange,
  options,
  getOptionLabel,
  getOptionValue,
  getOptionDisabled,
  onHover,
  defaultActiveFirstOption,
  minWidth,
}: DropdownProps) => {
  const [value, setValue] = useState(passedValue || "");
  const [open, setOpen] = useState(defaultOpen || false);
  const onHoverMethods = useOnHover(onHover);
  const alreadyCheckedFirstValue = useRef(false);

  const handleChange = useCallback(
    (e: any) => {
      setValue(e.target.value);
      if (onChange) onChange(e.target.value);
    },
    [setValue, onChange]
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
  }, [options, getOptionValue, value, handleChange]);

  useEffect(() => {
    if (defaultActiveFirstOption && !value && options.length > 0) {
      if (!alreadyCheckedFirstValue.current) {
        alreadyCheckedFirstValue.current = true;
        handleDefaultActiveFirstOption();
      }
    }
  }, [options, defaultActiveFirstOption, handleDefaultActiveFirstOption]);

  return (
    <BaseInput id={id} status={status}>
      {({ endAdornment }: any) => (
        <>
          <BaseInput.Label required={required} position={labelPosition}>
            {label}
          </BaseInput.Label>
          <FormControl sx={{ minWidth }}>
            <Select
              className={cx("dropdown", {
                "dropdown--open": open,
              })}
              {...onHoverMethods}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
              displayEmpty
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              renderValue={(value) => renderSelectedValue(value, selectedValue)}
              disabled={disabled}
              IconComponent={(props: any) => (
                <DropdownIcon endAdornment={endAdornment} {...props} />
              )}
            >
              {options?.map((opt: StandardDropdownOption | any) => {
                const value = getOptionValue ? getOptionValue(opt) : opt?.value;
                const optDisabled = getOptionDisabled
                  ? getOptionDisabled(opt)
                  : opt?.disabled;
                return (
                  <MenuItem
                    key={value}
                    value={value}
                    disabled={optDisabled || disabled}
                  >
                    {getOptionLabel ? getOptionLabel(opt) : opt?.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
        </>
      )}
    </BaseInput>
  );
};

Dropdown.defaultProps = {
  labelPosition: "top",
  options: [],
  minWidth: 120,
};

export default Dropdown;
