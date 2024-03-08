import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  styled,
} from "@mui/material";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { CheckboxProps } from "./Checkbox.types";

const StyledFormControlLabel = styled(FormControlLabel, {
  slot: "root",
})<{ status?: string }>(({ theme }) => {
  return {
    webkitUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
    margin: 0,
    ".Checkbox": {
      zIndex: 1,
    },
    "&.MuiFormControlLabel": {
      "&-labelPlacementStart": {
        ".Checkbox": {
          marginLeft: theme.spacing(1),
          marginRight: 0,
        },
      },
      "&-labelPlacementEnd": {
        ".Checkbox": {
          marginRight: theme.spacing(1),
          marginLeft: 0,
        },
      },
    },
    // ".MuiFormControlLabel-label": {
    //   fontFamily: FONTS.NUNITO,
    //   fontWeight: 400,
    //   fontSize: theme.typography.pxToRem(16),
    // },
  };
});

const StyledCheckbox = styled(MuiCheckbox, {
  slot: "root",
})<{ status?: string }>(() => {
  return {
    padding: 0,
  };
});

const muiLabelPlacementMap: Record<string, "start" | "end"> = {
  left: "start",
  right: "end",
};

const Checkbox = ({
  id,
  label,
  checked: passedValue,
  disabled,
  onChange,
  labelPosition,
  typographyVariant,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(passedValue || false);

  useEffect(() => {
    setChecked(passedValue || false);
  }, [passedValue, setChecked]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      const checked = e.target.checked;
      setChecked(checked);
      if (onChange) onChange(checked);
    },
    [setChecked, onChange, disabled]
  );

  return (
    <StyledFormControlLabel
      id={id}
      className="CheckboxWrapper"
      label={label}
      labelPlacement={muiLabelPlacementMap[labelPosition] || "end"}
      componentsProps={{
        typography: {
          // @ts-expect-error
          variant: typographyVariant,
        },
      }}
      control={
        <StyledCheckbox
          key={`Checkbox--${checked}`}
          className="Checkbox"
          checked={checked}
          defaultChecked={checked}
          onChange={handleChange}
          disableFocusRipple
          disableTouchRipple
          disableRipple
          disabled={disabled}
        />
      }
    />
  );
};

Checkbox.defaultProps = {
  labelPosition: "right",
  disabled: false,
  checked: false,
  typographyVariant: "bodyR",
};

export default Checkbox;
