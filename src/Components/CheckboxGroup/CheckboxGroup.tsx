import { Box, styled } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import Checkbox from "../Checkbox";
import { CheckboxGroupProps } from "./CheckboxGroup.types";

const CheckboxGroupWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "row",
  slot: "root",
})<{ row?: boolean }>(({ theme, row }) => {
  return {
    ...(!row
      ? {
          display: "flex",
          flexDirection: "column",
          ".checkbox": {
            marginBottom: theme.spacing(2),
          },
        }
      : {
          display: "flex",
          flexDirection: "row",
          ".checkbox": {
            marginRight: theme.spacing(2),
          },
        }),
  };
});

const CheckboxGroup = ({
  id,
  options,
  value: passedValue,
  onChange,
  disabled,
  row,
  getOptionValue,
  getOptionLabel,
  getOptionDisabled,
  labelPosition,
}: CheckboxGroupProps) => {
  const [selected, setSelected] = useState(passedValue || []);

  useEffect(() => {
    setSelected(passedValue || []);
  }, [passedValue]);

  const getOptionChecked = useCallback(
    (optionValue: any) => {
      return selected.includes(optionValue);
    },
    [selected]
  );

  const handleChange = useCallback(
    (checkBoxValue: any, checked: any) => {
      if (disabled) return;
      if (checked) {
        const nextSelected = [...selected, checkBoxValue];
        setSelected(nextSelected);
        if (onChange) onChange(nextSelected);
      } else {
        const nextSelected = selected.filter(
          (value) => value !== checkBoxValue
        );
        setSelected(nextSelected);
        if (onChange) onChange(nextSelected);
      }
    },
    [setSelected, onChange, disabled, selected]
  );

  return (
    <CheckboxGroupWrapper id={id} row={row}>
      {options?.map((option, index) => {
        const label = getOptionLabel ? getOptionLabel(option) : option?.label;
        const value = getOptionValue ? getOptionValue(option) : option?.value;
        const optDisabled = getOptionDisabled
          ? getOptionDisabled(option)
          : option?.disabled;
        return (
          <Checkbox
            key={`${label}--${index}`}
            {...option}
            label={label}
            value={value}
            onChange={(checked) => handleChange(value, checked)}
            checked={() => getOptionChecked(value)}
            disabled={optDisabled || disabled}
            labelPosition={labelPosition}
          />
        );
      })}
    </CheckboxGroupWrapper>
  );
};

CheckboxGroup.defaultProps = {
  options: [],
  value: null,
  disabled: false,
  row: false,
  labelPosition: "right",
} as Partial<CheckboxGroupProps>;

export default CheckboxGroup;
