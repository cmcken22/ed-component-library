import { Box, styled } from "@mui/material";
import cx from "classnames";
import { useCallback, useState } from "react";
import Typography from "../Typography";
import { ToggleProps } from "./Toggle.types";

const ToggleContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "checked" && prop !== "labelPosition",
  slot: "root",
})<{ checked?: boolean; disabled?: boolean; labelPosition?: string }>(({
  theme,
  checked,
  disabled,
  labelPosition,
}) => {
  return {
    cursor: disabled ? "default" : "pointer",
    display: "flex",
    flexDirection: labelPosition === "right" ? "row" : "row-reverse",
    gap: "8px",
    alignItems: "center",
    width: "fit-content",
    "& .ToggleLabel": {
      webkitUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      color: disabled
        ? theme.palette.charcoal["60"]
        : theme.palette.charcoal["90"],
    },
    ...(!disabled && {
      "&:hover": {
        ".ToggleWrapper": {
          borderColor: theme.palette.primary.main,
          ".ToggleText--OFF": {
            color: theme.palette.primary.main,
          },
          ...(!checked && {
            ".ToggleIndicator": {
              background: theme.palette.primary.main,
            },
          }),
        },
      },
    }),
  };
});

const ToggleWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "checked",
  slot: "root",
})<{ checked?: boolean; disabled?: boolean }>(({
  theme,
  checked,
  disabled,
}) => {
  let borderColor = theme.palette.charcoal.main;
  if (checked) borderColor = theme.palette.primary.main;
  if (disabled) borderColor = theme.palette.charcoal["30"];

  return {
    cursor: disabled ? "default" : "pointer",
    position: "relative",
    width: "38px",
    height: "20px",
    borderRadius: "24px",
    border: `1px solid ${borderColor}`,
    backgroundColor: checked ? borderColor : "white",
    borderColor: borderColor,
    display: "flex",
    alignItems: "center",
    transition: "all 0.2s ease",
    ".ToggleText": {
      webkitUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
    },
    ...(!disabled && {
      "&:hover": {
        borderColor: theme.palette.primary.main,
        ".ToggleText--OFF": {
          color: theme.palette.primary.main,
        },
        ...(!checked && {
          ".ToggleIndicator": {
            background: theme.palette.primary.main,
          },
        }),
      },
    }),
  };
});

const ToggleIndicator = styled(Box, {
  shouldForwardProp: (prop) => prop !== "checked",
  slot: "root",
})<{ checked?: boolean; disabled?: boolean }>(({
  theme,
  checked,
  disabled,
}) => {
  let background = checked ? "white" : theme.palette.charcoal.main;
  if (disabled) background = checked ? "white" : theme.palette.charcoal["30"];
  return {
    position: "absolute",
    width: "16px",
    height: "16px",
    background,
    borderRadius: "50%",
    left: checked ? "18px" : "1px",
    transition: "all 0.2s ease",
  };
});

const ToggleText = styled(Box, {
  shouldForwardProp: (prop) => prop !== "checked",
  slot: "root",
})(() => {
  return {
    height: "100%",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const Toggle = ({
  id,
  className,
  checked: passedValue,
  disabled,
  onChange,
  displayToggleText,
  label,
  labelPosition,
  sx,
}: ToggleProps) => {
  const [checked, setChecked] = useState(passedValue || false);

  const handleChange = useCallback(
    (value: boolean) => {
      if (disabled) return;
      setChecked(value);
      if (onChange) onChange(value);
    },
    [setChecked, onChange, disabled]
  );

  const renderToggleText = useCallback(
    (type: string) => {
      if (!displayToggleText) return null;
      return (
        <ToggleText sx={{ pr: type === "OFF" ? 0.3 : 0 }}>
          <Typography
            className={cx("ToggleText", {
              [`ToggleText--${type}`]: type,
            })}
            variant="errorMessage"
            color={type === "OFF" ? "charcoal.main" : "white"}
            fontSize="8px"
          >
            {type}
          </Typography>
        </ToggleText>
      );
    },
    [displayToggleText]
  );

  const renderToggleLabel = useCallback(() => {
    if (!label) return null;
    return (
      <Typography className="ToggleLabel" variant="bodyS">
        {label}
      </Typography>
    );
  }, [label]);

  return (
    <ToggleContainer
      id={id}
      className={cx("Toggle", {
        [className]: className,
      })}
      data-testid="Toggle"
      data-checked={checked}
      disabled={disabled}
      checked={checked}
      onClick={() => handleChange(!checked)}
      labelPosition={labelPosition}
      sx={sx}
    >
      <ToggleWrapper
        className="ToggleWrapper"
        checked={checked}
        disabled={disabled}
      >
        {renderToggleText("ON")}
        <ToggleIndicator
          className="ToggleIndicator"
          checked={checked}
          disabled={disabled}
        />
        {renderToggleText("OFF")}
      </ToggleWrapper>
      {renderToggleLabel()}
    </ToggleContainer>
  );
};

Toggle.defaultProps = {
  displayToggleText: false,
  labelPosition: "right",
} as Partial<ToggleProps>;

export default Toggle;
