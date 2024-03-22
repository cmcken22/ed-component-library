import { MenuItem, Select as MuiSelect } from "@mui/material";
import cx from "classnames";
import { useCallback, useContext, useEffect, useState } from "react";
import { useOnHover } from "src/Hooks";
import { sizeFormat } from "src/utils";
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
  labelPosition,
  onChange,
  options,
  getOptionLabel,
  getOptionValue,
  getOptionDisabled,
  getValueSelected,
  onHover,
  checkBoxSelection,
  maxListHeight,
  multiple,
  renderSelectedValue,
  renderOption,
}: BaseSelectProps) => {
  const { endAdornment } = useContext(BaseInputContext);
  const [open, setOpen] = useState(defaultOpen || false);
  const onHoverMethods = useOnHover(onHover);

  useEffect(() => {
    setOpen(defaultOpen || false);
  }, [defaultOpen]);

  const renderMenuItem = useCallback(
    (opt: any, index: number) => {
      const optLabel = getOptionLabel(opt);
      const optValue = getOptionValue(opt);
      const optDisabled = getOptionDisabled(opt);
      const selected = getValueSelected(optValue);

      const renderChildren = () => {
        if (renderOption) {
          return renderOption(opt, {
            index,
            label: optLabel,
            value: optValue,
            selected,
            disabled: optDisabled || disabled,
          });
        }
        if (checkBoxSelection) {
          return (
            <Checkbox
              label={optLabel}
              checked={selected}
              disabled={optDisabled || disabled}
              typographyVariant="bodyS"
            />
          );
        }
        return <Typography variant="bodyS">{optLabel}</Typography>;
      };

      return (
        <MenuItem
          value={`${optValue}--${index}`}
          disabled={optDisabled || disabled}
          data-select-option={index}
          onClick={(e) => {
            if (optDisabled || disabled) return;
            e.stopPropagation();
            e.preventDefault();
            if (onChange) onChange(optValue);
          }}
        >
          {renderChildren()}
        </MenuItem>
      );
    },
    [
      renderOption,
      disabled,
      onChange,
      getOptionLabel,
      getOptionValue,
      getOptionDisabled,
      getValueSelected,
      checkBoxSelection,
    ]
  );

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
          sx: {
            ".MuiPaper-root": {
              maxHeight: sizeFormat(maxListHeight),
            },
          },
        }}
      >
        {options?.map((opt: StandardSelectOption | any, idx: number) => {
          return renderMenuItem(opt, idx);
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
  maxListHeight: 144,
} as Partial<BaseSelectProps>;

BaseSelect.displayName = "BaseSelect";

export const BaseSelectMeta = {
  className: "Select",
  dataTestId: "Select",
};

// export named component for storybook docgen
export { BaseSelect };
export default BaseSelect;
