import {
  Box,
  ClickAwayListener,
  MenuItem,
  Select as MuiSelect,
  styled,
} from "@mui/material";
import cx from "classnames";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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

const useMenuProps = ({
  open,
  selectRef,
  disablePortal,
  maxListHeight,
}: any) => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const backDrop = document.querySelector(".MuiMenu-root");
    let top = selectRef?.getBoundingClientRect().top;
    if (backDrop) {
      top = top - backDrop.getBoundingClientRect().top;
    }
    let left = selectRef?.getBoundingClientRect().left;
    if (backDrop) {
      left = left - backDrop.getBoundingClientRect().left;
    }
    const width = selectRef?.getBoundingClientRect().width;
    const height = selectRef?.getBoundingClientRect().height;
    if (top) setTop(top);
    if (left) setLeft(left);
    if (width) setWidth(width);
    if (height) setHeight(height);
  }, [open, selectRef, setTop, setLeft, setWidth, setHeight]);

  const menuProps = useMemo(() => {
    return {
      ...(disablePortal && {
        PaperProps: {
          sx: {
            top: "100% !important",
            left: "0px !important",
          },
        },
        getContentAnchorEl: null,
        keepMounted: true,
        disablePortal: true,
        anchorEl: () => selectRef,
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
      }),
      sx: {
        ...(disablePortal && {
          transform: `translateY(${sizeFormat(top)}) translateX(${sizeFormat(left)})`,
          height: sizeFormat(height),
          width: sizeFormat(width),
        }),
        ".MuiPaper-root": {
          maxHeight: sizeFormat(maxListHeight),
        },
      },
    };
  }, [disablePortal, maxListHeight, open, selectRef, top, left, width, height]);

  return menuProps;
};

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
  const selectRef = useRef<Element>(null);
  const [open, setOpen] = useState(defaultOpen || false);
  const onHoverMethods = useOnHover({ callback: onHover });

  useEffect(() => {
    setOpen(defaultOpen || false);
  }, [defaultOpen]);

  const menuProps: any = useMenuProps({
    open,
    selectRef: selectRef.current,
    disablePortal,
    maxListHeight,
  });

  const handleClickOutside = useCallback(
    (e: any) => {
      if (!disablePortal) return;
      if (open) {
        e?.stopPropagation();
        e?.preventDefault();
        setOpen(false);
      }
    },
    [open, setOpen, disablePortal]
  );

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
        <ClickAwayListener onClickAway={handleClickOutside}>
          <StyledSelect
            ref={selectRef}
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
              ...menuProps,
            }}
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
