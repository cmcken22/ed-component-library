import { Box, styled } from "@mui/material";
import cx from "classnames";
import { useCallback, useEffect, useState } from "react";
import { baseClassName, dataTestId } from ".";
import RadioButton from "../RadioButton";

const RadioButtonGroupWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "row",
  slot: "root",
})<{ row?: boolean }>(({ theme, row }) => {
  return {
    ...(!row
      ? {
          display: "flex",
          flexDirection: "column",
          ".RadioButtonWrapper": {
            marginBottom: theme.spacing(2),
          },
        }
      : {
          display: "flex",
          flexDirection: "row",
          ".RadioButtonWrapper": {
            marginRight: theme.spacing(2),
          },
        }),
  };
});

export type OptionType = {
  label: string;
  value: any;
  disabled?: boolean;
};

export interface RadioButtonGroupProps {
  id?: string;
  className?: string;
  options: OptionType[] | any[];
  value: any;
  onChange?: (value: any) => void;
  disabled?: boolean;
  row?: boolean;
  allowDeselect?: boolean;
  getOptionValue?: (option: any) => any;
  getOptionLabel?: (option: any) => any;
  getOptionDisabled?: (option: any) => any;
  labelPosition?: "left" | "right";
}

const RadioButtonGroup = ({
  id,
  className,
  options,
  value: selectedValue,
  onChange,
  disabled,
  row,
  allowDeselect,
  getOptionValue,
  getOptionLabel,
  getOptionDisabled,
  labelPosition,
}: RadioButtonGroupProps) => {
  const [value, setValue] = useState(selectedValue || null);

  useEffect(() => {
    setValue(selectedValue || null);
  }, [selectedValue]);

  const getOptionChecked = useCallback(
    (optionValue: any) => {
      return optionValue === value;
    },
    [value]
  );

  const handleChange = useCallback(
    (value: any, checked: any) => {
      let nextValue = value;
      if (allowDeselect) nextValue = checked ? value : null;
      setValue(nextValue);
      if (onChange) onChange(nextValue);
    },
    [setValue, onChange, allowDeselect]
  );

  return (
    <RadioButtonGroupWrapper
      id={id}
      row={row}
      className={cx(baseClassName, {
        [className]: className,
      })}
      data-testid={dataTestId}
      data-value={value}
    >
      {options?.map((option, index) => {
        const label = getOptionLabel ? getOptionLabel(option) : option?.label;
        const value = getOptionValue ? getOptionValue(option) : option?.value;
        const optDisabled = getOptionDisabled
          ? getOptionDisabled(option)
          : option?.disabled;
        return (
          <RadioButton
            key={`${label}--${index}`}
            {...option}
            label={label}
            onChange={handleChange}
            checked={() => getOptionChecked(value)}
            disabled={optDisabled || disabled}
            allowDeselect={allowDeselect}
            labelPosition={labelPosition}
          />
        );
      })}
    </RadioButtonGroupWrapper>
  );
};

RadioButtonGroup.defaultProps = {
  options: [],
  value: null,
  disabled: false,
  row: false,
  allowDeselect: false,
  labelPosition: "right",
} as Partial<RadioButtonGroupProps>;

export default RadioButtonGroup;
