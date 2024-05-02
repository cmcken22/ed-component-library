import { Box, Stack } from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Button from "src/Components/Button";
import { IconVariant } from "src/Components/Icon";
import Popover from "src/Components/Popover";
import { Select } from "src/Components/Select";
import { FONT_WEIGHT } from "src/Components/theme/Typography";
import { Icon, Input, Percent, Typography, useEllisDonTheme } from "../..";
import { NumberInputOnChange } from "../Inputs/NumberInput/NumberInput/NumberInput.types";
import { OperandFilterProps } from "./Operand.types";

enum OPERAND {
  EQUAL_TO = "Equal to",
  MORE_THAN = "More than",
  LESS_THAN = "Less than",
  BETWEEN = "Between",
}

const OPTIONS = [
  {
    label: OPERAND.EQUAL_TO,
    value: OPERAND.EQUAL_TO,
  },
  {
    label: OPERAND.MORE_THAN,
    value: OPERAND.MORE_THAN,
  },
  {
    label: OPERAND.LESS_THAN,
    value: OPERAND.LESS_THAN,
  },
  {
    label: OPERAND.BETWEEN,
    value: OPERAND.BETWEEN,
  },
];

const OperandFilterModal = ({ value, onSubmit, onCancel }: any) => {
  const theme: any = useEllisDonTheme();
  const [operand, setOperand] = useState(value?.[0] || OPTIONS?.[0]?.value);
  const [val1, setVal1] = useState<any>(value?.[1] || null);
  const [val2, setVal2] = useState<any>(value?.[2] || null);
  const val1Ref = useRef<any>(value?.[1] || null);
  const val2Ref = useRef<any>(value?.[2] || null);

  useEffect(() => {
    if (value && value.length) {
      const [operand, val1, val2] = value;
      setOperand(operand);
      setVal1(val1);
      val1Ref.current = val1;
      if (operand === OPERAND.BETWEEN) {
        setVal2(val2);
        val2Ref.current = val2;
      }
    }
  }, [value]);

  useEffect(() => {
    if (!operand) return;
    if (operand === OPERAND.BETWEEN) {
      if (val2Ref.current === null) {
        setVal2(val1Ref.current);
        val2Ref.current = val1Ref.current;
      }
    } else {
      setVal2(null);
      val2Ref.current = null;
    }
  }, [operand]);

  const handleSubmit = useCallback(() => {
    const res = [operand];
    res.push(val1);
    if (operand === OPERAND.BETWEEN) {
      res.push(val2);
    }
    if (onSubmit) onSubmit(res);
  }, [operand, val1, val2, onSubmit]);

  const handleCancel = useCallback(() => {
    if (onCancel) onCancel();
  }, [onCancel]);

  const valid = useMemo(() => {
    if (operand === OPERAND.BETWEEN) {
      return (val1 || val1 === 0) && (val2 || val2 === 0) && operand;
    }
    return (val1 || val1 === 0) && operand;
  }, [operand, val1, val2]);

  return (
    <Box
      sx={{
        width: "239px",
        background: "white",
        borderRadius: `${theme.shape.borderRadius}px`,
        border: `${theme.shape.borderWidth} solid ${theme.palette.border.main}`,
        p: 1,
      }}
    >
      <Typography variant="bodyS" fontWeight={FONT_WEIGHT.bold}>
        Percent Complete
      </Typography>
      <Box
        sx={{
          mt: 2,
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
          ".item": {
            flexGrow: 0,
            width: "calc(50% - 4px)",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5em",
            ...(operand === OPERAND.BETWEEN && {
              width: "100%",
            }),
          },
        }}
      >
        <Box className="item">
          <Select
            key={operand}
            autoFocus
            fullWidth
            defaultActiveFirstOption
            sx={{
              ".MuiSelect-select": {
                paddingLeft: "8px",
              },
            }}
            renderValue={(value) => (
              <Typography variant="bodyS">{value}</Typography>
            )}
            allowDeselect={false}
            value={operand}
            disablePortal
            onChange={setOperand}
            options={OPTIONS}
          />
        </Box>
        <Box
          className="item"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Percent
            value={val1}
            fullWidth
            onChange={(val: NumberInputOnChange) => {
              val1Ref.current = val?.floatValue;
              setVal1(val?.floatValue);
            }}
          />
          {operand === OPERAND.BETWEEN && (
            <>
              <Icon icon="ArrowRight" size={16} sx={{ flexShrink: 0 }} />
              <Percent
                value={val2}
                fullWidth
                onChange={(val: NumberInputOnChange) => {
                  val2Ref.current = val?.floatValue;
                  setVal2(val?.floatValue);
                }}
              />
            </>
          )}
        </Box>
      </Box>
      <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
        <Button variant="link" color="danger" onClick={handleCancel}>
          Clear
        </Button>
        <Button variant="link" onClick={handleSubmit} disabled={!valid}>
          Apply
        </Button>
      </Stack>
    </Box>
  );
};

const OperandFilter = ({
  id,
  className,
  sx,
  label,
  placeholder,
  helperText,
  required,
  labelPosition = "top",
  disabled,
  tooltip,
  variant,
  fullWidth,
  onChange,
  renderValue,
}: OperandFilterProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<any>([]);

  const handleSubmit = useCallback(
    (val: any) => {
      setValue(val);
      setOpen(false);
      if (onChange) onChange(val);
    },
    [setValue, setOpen, onChange]
  );

  const handleClear = useCallback(() => {
    setValue([]);
    setOpen(false);
    if (onChange) onChange([]);
  }, [setValue, setOpen, onChange]);

  const handleOpen = useCallback(() => {
    if (disabled) return;
    setOpen(true);
  }, [disabled, setOpen]);

  const handleRenderValue = useCallback(
    (value: any) => {
      if (renderValue) return renderValue(value);
      return value?.join(" ") || "";
    },
    [renderValue]
  );

  return (
    <>
      <Input
        id={id}
        onClick={handleOpen}
        inputRef={(r: any) => setAnchorEl(r)}
        className={className}
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        helperText={helperText}
        required={required}
        value={handleRenderValue(value)}
        fullWidth={fullWidth}
        labelPosition={labelPosition}
        tooltip={tooltip}
        variant={variant}
        readOnly
        sx={{
          ...sx,
          cursor: disabled ? "default" : "pointer",
          ".MuiInputBase-root, input": {
            cursor: disabled ? "default" : "pointer",
          },
        }}
        endAdornment={
          <Icon
            icon={open ? IconVariant.NavArrowUp : IconVariant.NavArrowDown}
            size={20}
            sx={{
              cursor: disabled ? "default" : "pointer",
            }}
          />
        }
      />
      <Popover open={open} anchorEl={anchorEl} onClose={() => setOpen(false)}>
        <OperandFilterModal
          value={value}
          onSubmit={handleSubmit}
          onCancel={handleClear}
        />
      </Popover>
    </>
  );
};

OperandFilter.defaultProps = {} as Partial<OperandFilterProps>;

export default OperandFilter;
