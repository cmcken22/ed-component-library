import { InputAdornment } from "@mui/material";
import cx from "classnames";
import { useCallback, useMemo, useState } from "react";
import { Status } from "src/CommonTypes";
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
  tooltip,
  componentType,
}: BaseInputProps) => {
  const [labelPosition, setLabelPosition] = useState<"top" | "left">("top");
  const [innerStatus, setInnerStatus] = useState<Status>();

  const handleSetLabelPosition = useCallback(
    (pos: "top" | "left") => {
      setLabelPosition(pos);
    },
    [setLabelPosition]
  );

  const statusIcon = useMemo(() => {
    const currentStatus = status || innerStatus;
    if (!currentStatus) return null;
    if (currentStatus === Status.error) return IconVariant.Close1;
    if (currentStatus === Status.warning) return IconVariant.Warning;
    if (currentStatus === Status.success) return IconVariant.Success;
  }, [status, innerStatus]);

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
        status: status || innerStatus,
        setStatus: setInnerStatus,
        setLabelPosition: handleSetLabelPosition,
        labelPosition,
        disabled,
        endAdornment: renderStatusIcon(),
        tooltip,
      }}
    >
      <StyledWrapper
        id={id}
        className={cx({
          [className]: className,
        })}
        componentType={componentType}
        status={status || innerStatus}
        disabled={disabled}
        labelPosition={labelPosition}
        fullWidth={fullWidth}
        data-testid="Input"
        data-test-status={status || innerStatus}
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
