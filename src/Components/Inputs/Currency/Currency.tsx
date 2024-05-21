import cx from "classnames";
import { useCallback } from "react";
import Icon, { IconVariant } from "src/Components/Icon";
import { CurrencyProps } from ".";
import NumberInput, { useFormattingPropIsolation } from "../NumberInput";

const SymbolMap: Record<string, string | (() => JSX.Element)> = {
  Dollar: () => (
    <Icon icon={IconVariant.Dollar} size={20} sx={{ flexShrink: 0 }} />
  ),
  Pound: () => (
    <Icon icon={IconVariant.Pound} size={20} sx={{ flexShrink: 0 }} />
  ),
  Euro: () => <Icon icon={IconVariant.Euro} size={20} sx={{ flexShrink: 0 }} />,
};

const renderCustomIcon = (symbol: string | (() => JSX.Element)) => {
  if (!symbol) return null;
  if (symbol instanceof Function) {
    return symbol();
  }
  return null;
};

const Currency = (props: CurrencyProps) => {
  const { inputProps, formattingProps } =
    useFormattingPropIsolation<CurrencyProps>(props);
  const { className, prefix, suffix, persistSuffix, allowClear, ...rest } =
    inputProps;

  const renderStartAdornment = useCallback(() => {
    if (prefix && SymbolMap[prefix]) {
      const symbol = SymbolMap[prefix];
      return renderCustomIcon(symbol);
    }
  }, [prefix]);

  const renderEndAdornment = useCallback(() => {
    if (suffix && SymbolMap[suffix]) {
      const symbol = SymbolMap[suffix];
      return renderCustomIcon(symbol);
    }
  }, [suffix]);

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
      allowClear={allowClear}
      {...formattingProps}
    />
  );
};

Currency.defaultProps = {
  labelPosition: "top",
  thousandSeparator: true,
  fixedDecimalScale: false,
  decimalSeparator: ".",
  decimalScale: 2,
  disabled: false,
  required: false,
  prefix: "Dollar",
  persistSuffix: false,
  allowLeadingZeros: false,
  allowNegative: true,
  variant: "outlined",
  allowKeyBoardInput: true,
  step: 1,
  allowClear: false,
} as Partial<CurrencyProps>;

// export named component for storybook docgen
export { Currency };
export default Currency;
