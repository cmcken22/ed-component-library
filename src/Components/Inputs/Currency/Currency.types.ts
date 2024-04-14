import { NumberInputProps } from "../NumberInput/NumberInput";

export interface CurrencyProps
  extends Omit<NumberInputProps, "persistEndAdornment"> {
  /**
   * In the case that a staus icon is provided, the suffix will be hidden.
   * Setting `persistSuffix` to true will keep the suffix visible beside the status icon.
   */
  persistSuffix?: boolean;
  prefix?: "Dollar" | "Pound" | "Euro";
  suffix?: "Dollar" | "Pound" | "Euro";
}
