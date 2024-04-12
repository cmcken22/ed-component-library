import cx from "classnames";
import { ReactNode, useContext } from "react";
import { TEST_ID } from "src/enums";
import { BaseInputContext } from ".";
import HelperText from "./HelperText";
import Label from "./Label";
import PlacementContainer from "./styled/PlacementContainer";
import StyledWrapper from "./styled/StyledWrapper";

const BaseInput = ({ children }: { children: ReactNode }) => {
  const {
    id,
    className,
    fullWidth,
    sx,
    labelPosition,
    status,
    disabled,
    componentType,
    variant,
  } = useContext(BaseInputContext);

  return (
    <StyledWrapper
      id={id}
      className={cx("Input", {
        [className]: className,
      })}
      componentType={componentType}
      status={status}
      disabled={disabled}
      labelPosition={labelPosition}
      fullWidth={fullWidth}
      data-testid={TEST_ID.BASE_INPUT}
      data-test-status={status}
      sx={sx}
      variant={variant}
    >
      <PlacementContainer
        className={cx("Input__placement-container", {
          ["Input__placement-container--align-left"]: labelPosition === "left",
        })}
      >
        {children}
      </PlacementContainer>
    </StyledWrapper>
  );
};

BaseInput.Label = Label;
BaseInput.HelperText = HelperText;

export default BaseInput;
