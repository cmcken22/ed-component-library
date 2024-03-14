import { InputAdornment } from "@mui/material";
import cx from "classnames";
import { useCallback, useMemo, useState } from "react";
import { BaseInputContext, BaseInputProps } from ".";
import Icon, { IconVariant } from "../Icon";
import HelperText from "./HelperText";
import Label from "./Label";
import PlacementContainer from "./styled/PlacementContainer";
import StyledWrapper from "./styled/StyledWrapper";

const BaseInput = ({
  id,
  className,
  status,
  disabled,
  fullWidth,
  sx,
  children,
}: BaseInputProps) => {
  const [labelPosition, setLabelPosition] = useState<"top" | "left">("top");

  const handleSetLabelPosition = useCallback(
    (pos: "top" | "left") => {
      setLabelPosition(pos);
    },
    [setLabelPosition]
  );

  const statusIcon = useMemo(() => {
    if (!status) return null;
    if (status === "error") return IconVariant.Close1;
    if (status === "warning") return IconVariant.Warning;
    if (status === "success") return IconVariant.Success;
  }, [status]);

  const renderStatusIcon = useCallback(() => {
    if (!statusIcon) return null;
    return (
      <InputAdornment position="end">
        <Icon icon={statusIcon} height="20px" width="20px" />
      </InputAdornment>
    );
  }, [statusIcon]);

  return (
    <BaseInputContext.Provider
      value={{
        status,
        setLabelPosition: handleSetLabelPosition,
        labelPosition,
        disabled,
        endAdornment: renderStatusIcon(),
      }}
    >
      <StyledWrapper
        id={id}
        className={cx({
          [className]: className,
        })}
        status={status}
        disabled={disabled}
        labelPosition={labelPosition}
        fullWidth={fullWidth}
        data-testid="Input"
        sx={sx}
      >
        <PlacementContainer
          className={cx("Input-container", {
            ["Input-container--align-left"]: labelPosition === "left",
          })}
        >
          {children}
        </PlacementContainer>
      </StyledWrapper>
    </BaseInputContext.Provider>
  );
};

BaseInput.Label = Label;
BaseInput.HelperText = HelperText;

export default BaseInput;
