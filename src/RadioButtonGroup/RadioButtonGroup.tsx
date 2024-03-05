import { Box, styled } from "@mui/material";
import { useCallback, useState } from "react";
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

export interface RadioButtonGroupProps {
  options: any[];
  value: any;
  onChange?: (value: any) => void;
  disabled?: boolean;
  row?: boolean;
  allowDeselect?: boolean;
}

const RadioButtonGroup = ({
  options,
  value: selectedValue,
  onChange,
  disabled,
  row,
  allowDeselect,
}: RadioButtonGroupProps) => {
  const [value, setValue] = useState(selectedValue || null);

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
    <RadioButtonGroupWrapper row={row}>
      {options?.map((option, index) => (
        <RadioButton
          key={`${option?.label}--${index}--${getOptionChecked(option?.value)}`}
          {...option}
          onChange={handleChange}
          checked={() => getOptionChecked(option?.value)}
          disabled={option?.disabled || disabled}
        />
      ))}
    </RadioButtonGroupWrapper>
  );
};

RadioButtonGroup.defaultProps = {
  options: [],
  value: null,
  disabled: false,
  row: false,
  allowDeselect: false,
};

export default RadioButtonGroup;
