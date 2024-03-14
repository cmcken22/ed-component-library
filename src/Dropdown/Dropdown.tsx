import { FormControl, MenuItem, Select } from "@mui/material";
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
import BaseInput, { BaseInputContext } from "../BaseInput";
import Checkbox from "../Checkbox";
import Typography from "../Typography";
import { DropdownProps, StandardDropdownOption } from "./Dropdown.types";
import DropdownIcon from "./DropdownIcon";

const Dropdown = (props: DropdownProps) => {
  const { id, status, fullWidth, ...rest } = props;

  return (
    <BaseInput id={id} status={status} fullWidth={fullWidth}>
      <DropdownComp {...rest} />
    </BaseInput>
  );
};

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
      <FormControl>
        <Select
          className={cx("dropdown", {
            "dropdown--open": open,
          })}
          open={open}
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
              >
                {checkBoxSelection ? (
                  <Checkbox
                    label={getOptionLabel ? getOptionLabel(opt) : opt?.label}
                    checked={optValue === value}
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
      </FormControl>
      <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
    </>
  );
};

Dropdown.defaultProps = {
  labelPosition: "top",
  options: [],
} as Partial<DropdownProps>;

export default Dropdown;
