import { Box, styled } from "@mui/material";
import cx from "classnames";
import { forwardRef, useCallback, useEffect, useState } from "react";
import { TEST_ID } from "src/enums";
import { shouldNotForwardProp, sizeFormat } from "src/utils";
import { RadioButtonGroupProps } from ".";
import RadioButton from "../RadioButton";

const RadioButtonGroupWrapper = styled(Box, {
  shouldForwardProp: shouldNotForwardProp(["row", "gap"]),
  slot: "root",
})<{ row?: boolean; gap?: string | number }>(({ theme, row, gap }) => {
  return {
    ...(!row
      ? {
          display: "flex",
          flexDirection: "column",
          gap: gap !== undefined ? sizeFormat(gap) : theme.spacing(1),
          ".RadioButtonWrapper": {
            marginBottom: theme.spacing(2),
          },
        }
      : {
          display: "flex",
          flexDirection: "row",
          gap: gap !== undefined ? sizeFormat(gap) : theme.spacing(1),
          ".RadioButtonWrapper": {
            marginRight: theme.spacing(2),
          },
        }),
  };
});

const RadioButtonGroup = forwardRef(
  (props: RadioButtonGroupProps, ref: any) => {
    const {
      id,
      className,
      options,
      value: selectedValue,
      onChange,
      disabled,
      row,
      gap,
      allowDeselect,
      getOptionValue,
      getOptionLabel,
      getOptionDisabled,
      labelPosition,
      ...tooltipProps
    } = props;
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
        ref={ref}
        row={row}
        className={cx("RadioButtonGroup", {
          [className]: className,
        })}
        gap={gap}
        data-testid={TEST_ID.RADIO_BUTTON_GROUP}
        data-value={value}
        {...tooltipProps}
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
  }
);

RadioButtonGroup.defaultProps = {
  options: [],
  value: null,
  disabled: false,
  row: false,
  allowDeselect: false,
  labelPosition: "right",
  gap: "8px",
} as Partial<RadioButtonGroupProps>;

export default RadioButtonGroup;
