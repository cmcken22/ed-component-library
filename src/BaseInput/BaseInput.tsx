import { Box, InputAdornment, styled } from "@mui/material";
import cx from "classnames";
import { useCallback, useMemo, useState } from "react";
import { BaseInputContext, BaseInputProps } from ".";
import Icon, { IconVariant } from "../Icon";
import HelperText from "./HelperText";
import Label from "./Label";

const StyledWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "status" && prop !== "labelPosition",
  slot: "Root",
})<{ status?: string; disabled?: boolean; labelPosition?: string }>(({
  theme,
  status,
  disabled,
  labelPosition,
}) => {
  const colorMap = {
    error: theme.palette.error.main,
    warning: theme.palette.warning.main,
    success: theme.palette.success.main,
  };

  let borderColor = colorMap?.[status]
    ? `${colorMap?.[status]} !important`
    : theme.palette.charcoal["20"];
  if (disabled) borderColor = theme.palette.charcoal["20"];

  return {
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    color: colorMap?.[status],
    input: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      // "&:-internal-autofill-selected": {
      //   backgroundColor: "red",
      // },
    },
    // "input:-internal-autofill-selected": {
    //   backgroundColor: "red",
    // },
    ".MuiInputAdornment-positionEnd .icon-wrapper": {
      color: colorMap?.[status],
    },
    ".Input": {
      "&__label": {
        marginBottom: labelPosition === "top" ? theme.spacing(0.5) : 0,
      },
      "&__helper-text": {
        marginTop: theme.spacing(0.5),
        lineHeight: "13.64px",
      },
      "&__required-indicator": {
        marginLeft: theme.spacing(0.25),
        marginBottom: labelPosition === "top" ? theme.spacing(0.5) : 0,
      },
    },
    "& .MuiInputBase-root:not(.Mui-disabled)": {
      "& fieldset": {
        borderColor: borderColor,
      },
      "&:hover fieldset": {
        borderColor: !disabled ? theme.palette.primary.main : "",
      },
      "&:focus-within": {
        "& fieldset": {
          borderColor: theme.palette.primary.main,
          // borderColor: borderColor,
        },
      },
    },
    "& .MuiInputBase-root.Mui-disabled": {
      "& fieldset": {
        borderColor: borderColor,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.charcoal["20"],
      },
    },
  };
});

const PlacementContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "fullWidth",
  slot: "root",
})<{ fullWidth?: boolean }>(({ fullWidth }) => {
  return {
    "&.Input-container": {
      display: "flex",
      flexDirection: "column",
      width: fullWidth ? "100%" : "fit-content",
      "&--align-left": {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr",
        gap: "0px 8px",
        gridTemplateAreas: `
          ". ."
          ". ."
        `,
      },
    },
  };
});

const BaseInput = ({
  id,
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
        status={status}
        disabled={disabled}
        labelPosition={labelPosition}
        data-testid="Input"
        sx={sx}
      >
        <PlacementContainer
          fullWidth={fullWidth}
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
