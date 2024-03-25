/// <reference types="react" />
import { BaseSelectProps } from "../BaseSelect";
export interface RenderOptionProps {
    index: number;
    label: string;
    value: string;
    selected: boolean;
    disabled: boolean;
}
export interface CommonSelectProps extends Omit<BaseSelectProps, "value" | "multiple" | "renderSelectedValue" | "getValueSelected" | "onChange" | "getOptionLabel" | "getOptionValue" | "getOptionDisabled" | "wrap"> {
    getOptionLabel?: (option: any) => string;
    getOptionValue?: (option: any) => string;
    getOptionDisabled?: (option: any) => boolean;
    renderOption?: (option: any, props: RenderOptionProps) => React.ReactNode;
}
