import { useCallback } from "react";
import { clamp } from "src/utils";

const useClampValue = ({ min, max }: { min: number; max: number }) => {
  const clampValue = useCallback(
    (value: string | number) => {
      return clamp(value, min, max);
    },
    [min, max]
  );

  return clampValue;
};

export default useClampValue;
