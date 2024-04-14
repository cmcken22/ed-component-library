import { InputAdornment } from "@mui/material";
import cx from "classnames";
import { useCallback } from "react";
import Icon, { IconVariant } from "src/Components/Icon";
import { PercentProps } from ".";
import NumberInput, {
  useFormattingPropIsolation,
} from "../NumberInput/NumberInput";

const Percent = (props: PercentProps) => {
  const { inputProps, formattingProps } =
    useFormattingPropIsolation<PercentProps>(props);
  const { className, iconPlacement, persistSuffix, ...rest } = inputProps;

  const renderStartAdornment = useCallback(() => {
    if (iconPlacement !== "prefix") return null;
    return (
      <InputAdornment position="start" sx={{ ml: "8px" }}>
        <Icon icon={IconVariant.Percentage} size={20} />
      </InputAdornment>
    );
  }, [iconPlacement]);

  const renderEndAdornment = useCallback(() => {
    if (iconPlacement !== "suffix") return null;
    return <Icon icon={IconVariant.Percentage} size={20} />;
  }, [iconPlacement]);

  return (
    <NumberInput
      {...rest}
      {...formattingProps}
      className={cx("Currency", {
        [className]: className,
      })}
      startAdornment={renderStartAdornment()}
      endAdornment={renderEndAdornment()}
      persistEndAdornment={persistSuffix}
      {...formattingProps}
    />
  );
};

Percent.defaultProps = {
  labelPosition: "top",
  fixedDecimalScale: false,
  thousandSeparator: false,
  decimalSeparator: ".",
  disabled: false,
  required: false,
  iconPlacement: "suffix",
  persistSuffix: false,
  allowLeadingZeros: false,
  allowNegative: true,
  decimalScale: 2,
  variant: "outlined",
  allowKeyBoardInput: true,
  step: 1,
  textAlign: "left",
} as Partial<PercentProps>;

// export named component for storybook docgen
export { Percent };
export default Percent;
