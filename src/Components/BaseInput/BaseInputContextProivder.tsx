import { InputAdornment } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { Status } from "src/enums";
import { BaseInputContext, BaseInputProps } from ".";
import Icon, { IconVariant } from "../Icon";

const BaseInputContextProvider = ({
  id,
  className,
  status,
  disabled,
  fullWidth,
  sx,
  children,
  tooltip,
  componentType,
  variant,
  endAdornment,
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
    if (!statusIcon && !endAdornment) return null;
    if (endAdornment) return endAdornment;
    return (
      <InputAdornment position="end" className="status-adornment">
        <Icon icon={statusIcon} size={20} />
      </InputAdornment>
    );
  }, [statusIcon, endAdornment]);

  return (
    <BaseInputContext.Provider
      value={{
        id,
        className,
        fullWidth,
        componentType,
        sx,
        status: status || innerStatus,
        setStatus: setInnerStatus,
        setLabelPosition: handleSetLabelPosition,
        labelPosition,
        disabled,
        endAdornment: renderStatusIcon(),
        tooltip,
        variant,
      }}
    >
      {children}
    </BaseInputContext.Provider>
  );
};

export default BaseInputContextProvider;
