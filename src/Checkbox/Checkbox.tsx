import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  styled,
} from "@mui/material";
import { useState } from "react";
import { FONTS } from "../theme/Typography";

const StyledFormControlLabel = styled(FormControlLabel, {
  slot: "root",
})<{ status?: string }>(({ theme }) => {
  return {
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

const StyledCheckbox = styled(MuiCheckbox, {
  slot: "root",
})<{ status?: string }>(() => {
  return {
    marginRight: "-2px",
  };
});

const Checkbox = ({ label, defaultChecked, disabled }: any) => {
  const [checked, setChecked] = useState(defaultChecked || false);

  return (
    <StyledFormControlLabel
      label={label}
      control={
        <StyledCheckbox
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={(e) => setChecked(e.target.checked)}
          disableFocusRipple
          disableTouchRipple
          disableRipple
          disabled={disabled}
        />
      }
    />
  );
};

Checkbox.defaultProps = {};

export default Checkbox;
