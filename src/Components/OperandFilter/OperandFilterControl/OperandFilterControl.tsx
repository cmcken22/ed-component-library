import { Box, Stack } from "@mui/material";
import cx from "classnames";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Select } from "src/Components/Select";
import { FONT_WEIGHT } from "src/Components/theme/Typography";
import { TEST_ID } from "src/enums";
import {
  Button,
  Icon,
  NumberInput,
  Typography,
  useEllisDonTheme,
} from "src/index";
import { NumberInputOnChange } from "../../Inputs/NumberInput/NumberInput/NumberInput.types";
import {
  OPERAND,
  OperandFilterControlProps,
} from "./OperandFilterControl.types";

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

const OperandFilterControl = ({
  id,
  className,
  sx,
  label,
  value,
  defaultValue,
  onSubmit,
  onClear,
  clearBtnText,
  clearBtnProps,
  applyBtnText,
  applyBtnProps,
  Component: ComponentToRender,
  ComponentProps,
  min,
  max,
}: OperandFilterControlProps) => {
  const theme: any = useEllisDonTheme();
  const [operand, setOperand] = useState(
    value?.[0] || defaultValue?.[0] || null
  );
  const [val1, setVal1] = useState<any>(
    value?.[1] || defaultValue?.[1] || null
  );
  const [val2, setVal2] = useState<any>(
    value?.[2] || defaultValue?.[2] || null
  );
  const val1Ref = useRef<any>(value?.[1] || defaultValue?.[1] || null);
  const val2Ref = useRef<any>(value?.[2] || defaultValue?.[2] || null);

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

  const handleClear = useCallback(() => {
    setVal1("");
    setVal2("");
    setOperand(OPTIONS?.[0]?.value);
    if (onClear) onClear([]);
  }, [onClear, setVal1, setVal2, setOperand]);

  const valid = useMemo(() => {
    if (operand === OPERAND.BETWEEN) {
      return (val1 || val1 === 0) && (val2 || val2 === 0) && operand;
    }
    return (val1 || val1 === 0) && operand;
  }, [operand, val1, val2]);

  const Component = useMemo(
    () => ComponentToRender || NumberInput,
    [ComponentToRender]
  );

  return (
    <Box
      id={id}
      className={cx("OperandFilterControl", {
        [className]: className,
      })}
      sx={{
        width: "239px",
        background: "white",
        borderRadius: `${theme.shape.borderRadius}px`,
        border: `${theme.shape.borderWidth} solid ${theme.palette.border.main}`,
        p: 1,
        ...sx,
      }}
      data-testid={TEST_ID.OPERAND_FILTER_CONTROL}
    >
      {label && (
        <Typography variant="bodyS" fontWeight={FONT_WEIGHT.bold}>
          {label}
        </Typography>
      )}
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
          <Component
            value={val1 ?? ""}
            fullWidth
            min={min}
            max={max}
            {...ComponentProps}
            onChange={(val: NumberInputOnChange) => {
              val1Ref.current = val?.floatValue;
              setVal1(val?.floatValue);
            }}
          />
          {operand === OPERAND.BETWEEN && (
            <>
              <Icon icon="ArrowRight" size={16} sx={{ flexShrink: 0 }} />
              <Component
                value={val2 ?? ""}
                fullWidth
                min={min}
                max={max}
                {...ComponentProps}
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
        <Button
          variant="link"
          color="danger"
          onClick={handleClear}
          {...clearBtnProps}
        >
          {clearBtnText}
        </Button>
        <Button
          variant="link"
          onClick={handleSubmit}
          disabled={!valid}
          {...applyBtnProps}
        >
          {applyBtnText}
        </Button>
      </Stack>
    </Box>
  );
};

OperandFilterControl.defaultProps = {
  clearBtnText: "Clear",
  applyBtnText: "Apply",
};

export default OperandFilterControl;
