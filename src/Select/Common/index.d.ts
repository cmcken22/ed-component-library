import { CommonSelectProps } from "./Common.types";
export declare const useCommonMethods: <T extends CommonSelectProps>(props: T) => {
    handleGetOptionLabel: (opt: any) => any;
    handleGetOptionValue: (opt: any) => any;
    handleGetOptionDisabled: (opt: any) => any;
    getOptionFromValue: (value: string) => any;
};
