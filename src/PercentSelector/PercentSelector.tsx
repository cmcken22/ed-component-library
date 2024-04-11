import { Box } from "@mui/material";
import cx from "classnames";
import { useCallback, useEffect, useRef, useState } from "react";
import BaseInput, { withBaseInput } from "src/BaseInput";
import Button from "src/Button";
import Popover from "src/Popover";
import { Select } from "src/Select";
import { FONT_WEIGHT } from "src/theme/Typography";
import { Icon, Percent, Typography, useEllisDonTheme } from "..";
import { PercentSelectorProps } from "./PercentSelector.types";

const PercentSelectorModal = () => {
  const theme: any = useEllisDonTheme();
  const [operand, setOperand] = useState("Equal to");
  const [val1, setVal1] = useState<any>(0);
  const [val2, setVal2] = useState<any>(0);
  const val1Ref = useRef<any>(0);

  useEffect(() => {
    if (operand === "Between") {
      setVal2(val1Ref.current);
    }
  }, [operand]);

  console.log("val1:", val1);
  console.log("val2:", val2);

  const handleSubmit = useCallback(() => {
    console.log("submit", operand, val1, val2);
    const res = [operand];
    res.push(val1);
    if (operand === "Between") {
      res.push(val2);
    }
    console.log("res:", res);
  }, [operand, val1, val2]);

  return (
    <Box
      sx={{
        // height: "200px",
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
            ...(operand === "Between" && {
              width: "100%",
            }),
          },
        }}
      >
        <Box className="item">
          <Select
            fullWidth
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
            onChange={setOperand}
            options={[
              {
                label: "Equal to",
                value: "Equal to",
              },
              {
                label: "More than",
                value: "More than",
              },
              {
                label: "Less than",
                value: "Less than",
              },
              {
                label: "Between",
                value: "Between",
              },
            ]}
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
            onChange={(val) => {
              val1Ref.current = val;
              setVal1(val);
            }}
          />
          {operand === "Between" && (
            <>
              <Icon icon="ArrowRight" size={16} sx={{ flexShrink: 0 }} />
              <Percent
                value={val2}
                fullWidth
                onChange={(val) => {
                  setVal2(val);
                }}
              />
            </>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 0.5,
        }}
      >
        <Button variant="link" color="danger">
          Clear
        </Button>
        <Button variant="link" onClick={handleSubmit}>
          Apply
        </Button>
      </Box>
    </Box>
  );
};

const PercentSelectorComp = ({
  id,
  className,
  sx,
  required,
  labelPosition = "top",
  label,
  helperText,
}: PercentSelectorProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <Box
      id={id}
      className={cx("PercentSelector", {
        [className]: className,
      })}
      sx={sx}
      data-testid="PercentSelector"
    >
      <BaseInput>
        <BaseInput.Label required={required} position={labelPosition}>
          {label}
        </BaseInput.Label>
        <Box
          data-testid="calendar-input"
          onClick={() => setOpen(true)}
          ref={(r: any) => setAnchorEl(r)}
        >
          <Box
            sx={{
              height: "36px",
              width: "100%",
              overflow: "hidden",
              background: "rgba(255, 0, 255, 0.7)",
            }}
          ></Box>
        </Box>
        <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
      </BaseInput>
      <Popover
        open={open}
        anchorEl={anchorEl}
        // placement={calendarPlacement}
        onClose={() => {
          // if (calendarOpen) return;
          if (anchorEl?.contains(document.activeElement)) return;
          if (document.activeElement === anchorEl) return;
          setOpen(false);
        }}
        // {...popoverProps}
      >
        <PercentSelectorModal />
      </Popover>
    </Box>
  );
};

const PercentSelector = withBaseInput<PercentSelectorProps>(
  PercentSelectorComp,
  "PercentSelector"
);

PercentSelector.defaultProps = {} as Partial<PercentSelectorProps>;

export default PercentSelector;
