import { Box, FormControlLabel, styled } from "@mui/material";
import cx from "classnames";
import { forwardRef, useCallback, useEffect, useState } from "react";
import { RadioButtonProps, baseClassName, dataTestId } from ".";
import { hexToRGBA } from "../../utils";
import { FONTS } from "../theme/Typography";

const RadioButtonWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "checked",
  slot: "root",
})<{ checked?: boolean; disabled?: boolean }>(({
  theme,
  checked,
  disabled,
}) => {
  return {
    width: "fit-content",
    ...(!checked &&
      !disabled && {
        "&:hover": {
          ".RadioButton": {
            borderColor: theme.palette.primary.main,
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.1),
          },
        },
      }),
  };
});

const StyledRadioButton = styled(Box, {
  shouldForwardProp: (prop) => prop !== "checked",
  slot: "root",
})<{ checked?: boolean; disabled?: boolean }>(({
  theme,
  checked,
  disabled,
}) => {
  return {
    height: 16,
    width: 16,
    borderRadius: "50%",
    marginRight: theme.spacing(1),

    border: `${checked ? 4 : 1}px solid ${theme.palette.charcoal.main}`,
    ...(!checked &&
      !disabled && {
        "&:hover": {
          borderColor: theme.palette.primary.main,
          backgroundColor: hexToRGBA(theme.palette.primary.main, 0.1),
        },
      }),
    ...(checked && {
      borderColor: theme.palette.primary.main,
    }),
    ...(disabled && {
      borderColor: theme.palette.charcoal["30"],
    }),
  };
});

const StyledFormControlLabel = styled(FormControlLabel, {
  slot: "root",
})<{ status?: string }>(({ theme }) => {
  return {
    margin: 0,
    webkitUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
    "&.MuiFormControlLabel": {
      "&-labelPlacementStart": {
        ".RadioButton__input": {
          marginLeft: theme.spacing(1),
          marginRight: 0,
        },
      },
      "&-labelPlacementEnd": {
        ".RadioButton__input": {
          marginRight: theme.spacing(1),
          marginLeft: 0,
        },
      },
    },
    ".MuiFormControlLabel-label": {
      fontFamily: FONTS.NUNITO,
      fontWeight: 400,
      fontSize: theme.typography.pxToRem(16),
    },
  };
});

const muiLabelPlacementMap: Record<string, "start" | "end"> = {
  left: "start",
  right: "end",
};

const RadioButton = forwardRef((props: RadioButtonProps, ref: any) => {
  const {
    id,
    className,
    checked: passedValue,
    disabled,
    label,
    value,
    onChange,
    allowDeselect,
    labelPosition,
    sx,
    ...tooltipProps
  } = props;
  const [checked, setChecked] = useState(passedValue || false);

  useEffect(() => {
    setChecked(passedValue || false);
  }, [passedValue, setChecked]);

  const handleChange = useCallback(
    (checked: boolean) => {
      if (disabled) return;
      if (checked || allowDeselect) {
        setChecked(checked);
        if (onChange) onChange(value, checked);
      }
    },
    [setChecked, onChange, disabled, value, allowDeselect]
  );

  return (
    <RadioButtonWrapper
      id={id}
      ref={ref}
      className={cx(`${baseClassName}`, {
        [className]: className,
      })}
      data-testid={dataTestId}
      data-checked={checked}
      checked={checked}
      disabled={disabled}
      sx={sx}
      {...tooltipProps}
    >
      <StyledFormControlLabel
        className={`${baseClassName}__label`}
        label={label}
        value={value}
        onClick={() => handleChange(!checked)}
        labelPlacement={muiLabelPlacementMap[labelPosition] || "end"}
        control={
          <StyledRadioButton
            className={`${baseClassName}__input`}
            checked={checked}
            disabled={disabled}
          />
        }
      />
    </RadioButtonWrapper>
  );
});

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  allowDeselect: false,
  labelPosition: "right",
} as Partial<RadioButtonProps>;

export default RadioButton;
