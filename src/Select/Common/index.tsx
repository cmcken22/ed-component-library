import { useCallback } from "react";
import { CommonSelectProps } from "./Common.types";

export const useCommonMethods = <T extends CommonSelectProps>(props: T) => {
  const handleGetOptionLabel = useCallback(
    (opt: any) => {
      if (props.getOptionLabel) return props.getOptionLabel(opt);
      return opt.label;
    },
    [props.getOptionLabel]
  );

  const handleGetOptionValue = useCallback(
    (opt: any) => {
      if (props.getOptionValue) return props.getOptionValue(opt);
      return opt.value;
    },
    [props.getOptionValue]
  );

  const handleGetOptionDisabled = useCallback(
    (opt: any) => {
      if (props.getOptionDisabled) return props.getOptionDisabled(opt);
      return opt.disabled;
    },
    [props.getOptionDisabled]
  );

  const getOptionFromValue = useCallback(
    (value: string) => {
      return props.options.find((opt: any) => {
        const optValue = handleGetOptionValue(opt);
        return optValue === value;
      });
    },
    [handleGetOptionValue]
  );

  return {
    handleGetOptionLabel,
    handleGetOptionValue,
    handleGetOptionDisabled,
    getOptionFromValue,
  };
};
