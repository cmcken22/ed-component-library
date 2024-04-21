import { Box, styled } from "@mui/material";
import cx from "classnames";
import { useCallback, useEffect, useState } from "react";
import { IconVariant } from "src/Components/Icon";
import useStepIncrementor from "src/Hooks/useStepIncrementor";
import { TEST_ID } from "src/enums";
import { Icon } from "src/index";
import { StepperProps } from "./Stepper.types";

const StyledIconWrapper = styled(Box, {
  slot: "root",
})<{ disabled?: boolean }>(({ theme, disabled }) => ({
  ".icon-wrapper": {
    transition: "none",
  },
  cursor: disabled ? "default" : "pointer",
  ...(!disabled && {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  }),
}));

const Stepper = ({
  id,
  className,
  sx,
  min,
  max,
  step,
  value: passedValue,
  allowNegative,
  onChange,
  disabled,
}: StepperProps) => {
  const [value, setValue] = useState<number | string>(passedValue);

  useEffect(() => {
    setValue(passedValue);
  }, [passedValue]);

  const handleChange = useCallback(
    (value: number) => {
      setValue(value);
      if (onChange) onChange(value);
    },
    [setValue, onChange]
  );

  const { increment, decrement } = useStepIncrementor({
    min,
    max,
    step,
    value,
    allowNegative,
    callback: handleChange,
  });

  return (
    <Box
      id={id}
      className={cx("Stepper", {
        [className]: className,
      })}
      sx={{
        ...sx,
        border: (theme: any) => `1px solid ${theme.palette.border.main}`,
        borderRadius: "2px",
      }}
      data-testid={TEST_ID.STEPPER}
    >
      <StyledIconWrapper disabled={disabled}>
        <Icon
          className="Stepper__icon--up"
          icon={IconVariant.NavArrowUp}
          size={12}
          onClick={disabled ? undefined : increment}
          color="inherit"
        />
      </StyledIconWrapper>
      <StyledIconWrapper disabled={disabled}>
        <Icon
          className="Stepper__icon--down"
          icon={IconVariant.NavArrowDown}
          size={12}
          onClick={disabled ? undefined : decrement}
          color="inherit"
        />
      </StyledIconWrapper>
    </Box>
  );
};

Stepper.defaultProps = {} as Partial<StepperProps>;

export default Stepper;
