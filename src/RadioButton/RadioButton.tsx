import { Box, FormControlLabel, styled } from "@mui/material";
import { useCallback, useState } from "react";
import { FONTS } from "../theme/Typography";
import { hexToRGBA } from "../utils";

const RadioButtonWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "checked",
  slot: "root",
})<{ checked?: boolean; disabled?: boolean }>(
  ({ theme, checked, disabled }) => {
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
  }
);

const StyledRadioButton = styled(Box, {
  shouldForwardProp: (prop) => prop !== "checked",
  slot: "root",
})<{ checked?: boolean; disabled?: boolean }>(
  ({ theme, checked, disabled }) => {
    console.log("checked:", checked);
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
  }
);

const StyledFormControlLabel = styled(FormControlLabel, {
  slot: "root",
})<{ status?: string }>(({ theme }) => {
  return {
    margin: 0,
    webkitUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
    ".MuiCheckbox-root": {
      paddingRight: theme.spacing(1),
    },
    ".MuiFormControlLabel-label": {
      fontFamily: FONTS.NUNITO,
      fontWeight: 400,
      fontSize: theme.typography.pxToRem(16),
    },
  };
});

interface RadioButtonProps {
  checked?: boolean;
  disabled?: boolean;
  label: string;
  value: any;
  onChange: (value: any, checked: boolean) => void;
  allowDeselect?: boolean;
}

const RadioButton = ({
  checked: passedValue,
  disabled,
  label,
  value,
  onChange,
  allowDeselect,
}: RadioButtonProps) => {
  const [checked, setChecked] = useState(passedValue || false);

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
      className="RadioButtonWrapper"
      checked={checked}
      disabled={disabled}
    >
      <StyledFormControlLabel
        label={label}
        value={value}
        onClick={() => handleChange(!checked)}
        control={
          <StyledRadioButton
            className="RadioButton"
            checked={checked}
            disabled={disabled}
          />
        }
      />
    </RadioButtonWrapper>
  );
};

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  allowDeselect: false,
};

export default RadioButton;
