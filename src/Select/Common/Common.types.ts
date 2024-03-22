import { BaseSelectProps } from "../BaseSelect";

export interface CommonSelectProps
  extends Omit<
    BaseSelectProps,
    | "value"
    | "multiple"
    | "renderSelectedValue"
    | "getValueSelected"
    | "onChange"
    | "getOptionLabel"
    | "getOptionValue"
    | "getOptionDisabled"
  > {
  getOptionLabel?: (option: any) => string;
  getOptionValue?: (option: any) => string;
  getOptionDisabled?: (option: any) => boolean;
}
