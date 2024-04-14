import { useCallback } from "react";
import { clamp } from "src/utils";

interface UseStepIncrementorProps {
  min?: number;
  max?: number;
  step?: number;
  value: string | number;
  allowNegative: boolean;
  callback: (value: number) => void;
}

const parseValue = (value: string | number) => {
  if (value === null || value === undefined || value === "") return 0;
  if (isNaN(+value)) return 0;
  return parseFloat(`${value}`);
};

const useStepIncrementor = ({
  min,
  max,
  step,
  value,
  allowNegative,
  callback,
}: UseStepIncrementorProps) => {
  const getNextValue = useCallback(
    (value: number, incrementor = 1) => {
      let newValue = parseValue(value || 0) + incrementor;
      newValue = clamp(newValue, min, max);
      return newValue;
    },
    [min, max, value]
  );

  const handleIncrement = useCallback(() => {
    const newValue = getNextValue(value as number, step || 1);
    if (callback) callback(newValue);
  }, [value, step, callback]);

  const handleDecrement = useCallback(() => {
    let newValue = getNextValue(value as number, -step || -1);
    if (!allowNegative && newValue < 0) {
      newValue = 0;
    }
    if (callback) callback(newValue);
  }, [value, step, allowNegative, callback]);

  return {
    increment: handleIncrement,
    decrement: handleDecrement,
  };
};

useStepIncrementor.defaultProps = {
  step: 1,
};

export default useStepIncrementor;
