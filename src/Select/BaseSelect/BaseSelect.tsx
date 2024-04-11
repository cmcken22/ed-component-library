import {
  Box,
  ClickAwayListener,
  MenuItem,
  Select as MuiSelect,
  styled,
} from "@mui/material";
import cx from "classnames";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { VariantMap } from "src/BaseInput/helpers";
import { useOnHover } from "src/Hooks";
import { shouldNotForwardProp, sizeFormat } from "src/utils";
import BaseInput, { BaseInputContext, withBaseInput } from "../../BaseInput";
import Checkbox from "../../Checkbox";
import Typography from "../../Typography";
import { BaseSelectProps, StandardSelectOption } from "./BaseSelect.types";
import SelectIcon from "./SelectIcon";

const StyledSelect = styled(MuiSelect, {
  shouldForwardProp: shouldNotForwardProp(["styleVariant", "wrap"]),
  slot: "root",
})<{ styleVariant: string; wrap?: boolean }>(({
  theme,
  styleVariant,
  wrap,
}) => {
  return {
    "& .MuiSelect-select": {
      ...(styleVariant === "table" && {
        "&:focus": {
          background: "transparent !important",
        },
        boxSizing: "border-box",
        maxHeight: "100%",
        overflow: "auto !important",
        height: "fit-content !important",
        background: "transparent !important",
        padding: theme.spacing(1),
        paddingLeft: 0,
        paddingRight: `${theme.spacing(4)} !important`,
        backgroundColor: "red",
      }),
      ...(!wrap && {
        overflow: "auto",
        flexWrap: "nowrap",
        height: "100% !important",
      }),
    },
  };
});

const BaseSelectComp = ({
  label,
  placeholder,
  open: defaultOpen,
  helperText,
  disabled,
  value,
  required,
  labelPosition,
  onChange,
  options,
  getOptionLabel,
  getOptionValue,
  getOptionDisabled,
  getValueSelected,
  onHover,
  checkBoxSelection,
  maxListHeight,
  multiple,
  renderSelectedValue,
  renderOption,
  variant,
  wrap,
  disablePortal,
}: BaseSelectProps) => {
  const { endAdornment } = useContext(BaseInputContext);
  const [open, setOpen] = useState(defaultOpen || false);
  const onHoverMethods = useOnHover({ callback: onHover });
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    setOpen(defaultOpen || false);
  }, [defaultOpen]);

  const renderMenuItem = useCallback(
    (opt: any, index: number) => {
      const optLabel = getOptionLabel(opt);
      const optValue = getOptionValue(opt);
      const optDisabled = getOptionDisabled(opt);
      const selected = getValueSelected(optValue);

      const renderChildren = () => {
        if (renderOption) {
          return renderOption(opt, {
            index,
            label: optLabel,
            value: optValue,
            selected,
            disabled: optDisabled || disabled,
          });
        }
        if (checkBoxSelection) {
          return (
            <Checkbox
              key={optValue}
              label={optLabel}
              checked={selected}
              disabled={optDisabled || disabled}
              typographyVariant="bodyS"
            />
          );
        }
        return <Typography variant="bodyS">{optLabel}</Typography>;
      };

      return (
        <MenuItem
          key={optValue}
          value={optValue}
          disabled={optDisabled || disabled}
          data-select-option={index}
          onClick={(e) => {
            if (optDisabled || disabled) return;
            e.stopPropagation();
            e.preventDefault();
            if (onChange) onChange(optValue);
          }}
        >
          {renderChildren()}
        </MenuItem>
      );
    },
    [
      renderOption,
      disabled,
      onChange,
      getOptionLabel,
      getOptionValue,
      getOptionDisabled,
      getValueSelected,
      checkBoxSelection,
    ]
  );

  const testRef = useRef<Element>(null);

  useEffect(() => {
    if (open) {
      const backDrop = document.querySelector(".MuiMenu-root");
      let top = testRef.current?.getBoundingClientRect().top;
      if (backDrop) {
        top = top - backDrop.getBoundingClientRect().top;
      }
      let left = testRef.current?.getBoundingClientRect().left;
      if (backDrop) {
        left = left - backDrop.getBoundingClientRect().left;
      }
      if (top) setTop(top);
      if (left) setLeft(left);
    }
  }, [open]);

  console.log("open", open);

  return (
    <BaseInput>
      <BaseInput.Label required={required} position={labelPosition}>
        {label}
      </BaseInput.Label>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <ClickAwayListener
          onClickAway={(e: any) => {
            if (open && disablePortal) {
              e?.stopPropagation();
              e?.preventDefault();
              console.log("CLICK AWAY LISTENER");
              setOpen(false);
            }
          }}
        >
          <StyledSelect
            ref={testRef}
            className={cx(BaseSelectMeta.className, {
              [`${BaseSelectMeta.className}--open`]: open,
            })}
            data-testid={BaseSelectMeta.dataTestId}
            open={open}
            {...onHoverMethods}
            multiple={multiple}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            displayEmpty
            placeholder={placeholder}
            value={value}
            renderValue={renderSelectedValue}
            disabled={disabled}
            styleVariant={variant}
            wrap={wrap}
            variant={VariantMap[variant] as any}
            IconComponent={(props: any) => (
              <SelectIcon endAdornment={endAdornment} {...props} open={open} />
            )}
            MenuProps={{
              ...(disablePortal && {
                PaperProps: {
                  sx: {
                    background: "red",
                    top: `100% !important`,
                    left: `0px !important`,
                  },
                },
                getContentAnchorEl: null,
                slotProps: {
                  root: {},
                },
                keepMounted: true,
                disablePortal: true,
                anchorEl: () => testRef.current,
                // anchorEl: () => testRef.current?.childNodes?.[0],
                // anchorEl: () => document.body,

                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                anchorPosition: {
                  top: 0,
                  left: 0,
                },
                anchorReference: "anchorPosition",
                // anchorReference: "anchorEl",
                // PopoverProps: {
                //   disablePortal: true,
                //   // anchorEl: testRef.current,
                //   // anchorReference: "anchorEl",
                // },
                // BackdropProps: {
                //   sx: {
                //     position: "relative !important",
                //     background: "rgba(0, 255, 255, 0.4) !important",
                //     // transformOrigin: "top left",
                //     transform: `translateY(${top}px) translateX(${left}px)`,
                //     // top: `${top}px`,
                //     // top: `${testRef.current?.getBoundingClientRect().top}px`,
                //     height: `${testRef.current?.getBoundingClientRect().height}px`,
                //     width: `${testRef.current?.getBoundingClientRect().width}px`,
                //     // left: `${testRef.current?.getBoundingClientRect().left}px`,
                //     // pointerEvents: "none !important",
                //   },
                // },
              }),
              sx: {
                // position: "relative !important",
                background: "rgba(0, 255, 255, 0.4) !important",
                transform: `translateY(${top}px) translateX(${left}px)`,
                height: `${testRef.current?.getBoundingClientRect().height}px`,
                width: `${testRef.current?.getBoundingClientRect().width}px`,
                // left: `${testRef.current?.getBoundingClientRect().left}px`,
                // pointerEvents: "none !important",
                ".MuiPaper-root": {
                  maxHeight: sizeFormat(maxListHeight),
                },
              },
            }}
            // sx={{
            //   height: "100px !important",
            //   background: "red",
            //   opacity: 0.5,
            // }}
          >
            {options?.map((opt: StandardSelectOption | any, idx: number) => {
              return renderMenuItem(opt, idx);
            })}
          </StyledSelect>
        </ClickAwayListener>
      </Box>
      <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
    </BaseInput>
  );
};

const BaseSelect = withBaseInput<BaseSelectProps>(BaseSelectComp, "BaseSelect");

BaseSelect.defaultProps = {
  labelPosition: "top",
  options: [],
  maxListHeight: 144,
} as Partial<BaseSelectProps>;

BaseSelect.displayName = "BaseSelect";

export const BaseSelectMeta = {
  className: "Select",
  dataTestId: "Select",
};

// export named component for storybook docgen
export { BaseSelect };
export default BaseSelect;
