import { MenuItem, Select as MuiSelect } from "@mui/material";
import cx from "classnames";
import { useContext, useEffect, useState } from "react";
import { useOnHover } from "src/Hooks";
import BaseInput, { BaseInputContext, withBaseInput } from "../../BaseInput";
import Checkbox from "../../Checkbox";
import Typography from "../../Typography";
import { BaseSelectProps, StandardSelectOption } from "./BaseSelect.types";
import SelectIcon from "./SelectIcon";

const BaseSelectComp = ({
  label,
  placeholder,
  open: defaultOpen,
  helperText,
  disabled,
  value,
  required,
  labelPosition = "top",
  onChange,
  options,
  getOptionLabel,
  getOptionValue,
  getOptionDisabled,
  getValueSelected,
  onHover,
  checkBoxSelection,
  MenuProps,
  multiple,
  renderSelectedValue,
}: BaseSelectProps) => {
  const { endAdornment } = useContext(BaseInputContext);
  const [open, setOpen] = useState(defaultOpen || false);
  const onHoverMethods = useOnHover(onHover);

  useEffect(() => {
    setOpen(defaultOpen || false);
  }, [defaultOpen]);

  return (
    <BaseInput>
      <BaseInput.Label required={required} position={labelPosition}>
        {label}
      </BaseInput.Label>
      <MuiSelect
        className={cx(BaseSelectMeta.className, {
          [`${BaseSelectMeta.className}--open`]: open,
        })}
        data-testid={BaseSelectMeta.dataTestId}
        open={open}
        {...onHoverMethods}
        multiple={multiple}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        displayEmpty
        placeholder={placeholder}
        value={value}
        renderValue={renderSelectedValue}
        disabled={disabled}
        IconComponent={(props: any) => (
          <SelectIcon endAdornment={endAdornment} {...props} />
        )}
        MenuProps={{
          // ...MenuProps,
          sx: {
            ".MuiPaper-root": {
              maxHeight: MenuProps?.maxHeight || "144px",
            },
          },
        }}
      >
        {options?.map((opt: StandardSelectOption | any, idx: number) => {
          const optValue = getOptionValue(opt);
          const optDisabled = getOptionDisabled(opt);
          const selected = getValueSelected(optValue);
          return (
            <MenuItem
              key={optValue}
              value={optValue}
              disabled={optDisabled || disabled}
              data-select-option={idx}
              onClick={(e) => {
                if (optDisabled || disabled) return;
                e.stopPropagation();
                e.preventDefault();
                if (onChange) onChange(optValue);
              }}
            >
              {checkBoxSelection ? (
                <Checkbox
                  label={getOptionLabel(opt)}
                  checked={selected}
                  disabled={optDisabled || disabled}
                  typographyVariant="bodyS"
                />
              ) : (
                <Typography variant="bodyS" color="text.primary">
                  {getOptionLabel(opt)}
                </Typography>
              )}
            </MenuItem>
          );
        })}
      </MuiSelect>
      <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
    </BaseInput>
  );
};

const BaseSelect = withBaseInput<BaseSelectProps>(BaseSelectComp, "BaseSelect");

BaseSelect.defaultProps = {
  labelPosition: "top",
  options: [],
  MenuProps: {
    maxHeight: "144px",
  },
} as Partial<BaseSelectProps>;

BaseSelect.displayName = "BaseSelect";

export const BaseSelectMeta = {
  className: "Select",
  dataTestId: "Select",
};

// export named component for storybook docgen
export { BaseSelect };
export default BaseSelect;
