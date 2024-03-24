import cx from "classnames";
import { ReactNode, useContext } from "react";
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
      className={cx(BaseInputMeta.className, {
        [className]: className,
      })}
      componentType={componentType}
      status={status}
      disabled={disabled}
      labelPosition={labelPosition}
      fullWidth={fullWidth}
      data-testid={BaseInputMeta.dataTestId}
      data-test-status={status}
      // sx={sx}
      sx={{
        ...sx,
        ...(variant === "table" &&
          {
            // backgroundColor: "red",
          }),
      }}
      // variant={variant}
    >
      <PlacementContainer
        className={cx(`${BaseInputMeta.className}__placement-container`, {
          [`${BaseInputMeta.className}__placement-container--align-left`]:
            labelPosition === "left",
        })}
      >
        {children}
      </PlacementContainer>
    </StyledWrapper>
  );
};

BaseInput.Label = Label;
BaseInput.HelperText = HelperText;

export const BaseInputMeta = {
  className: "Input",
  dataTestId: "Input",
};

export default BaseInput;
