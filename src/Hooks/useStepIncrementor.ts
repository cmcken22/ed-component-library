import { useCallback } from "react";
import { clamp } from "src/utils";

interface UseStepIncrementorProps {
  min?: number;
  max?: number;
  step?: number;
  value: string | number;
  allowNegative: boolean;
  callback: (value: number | string) => void;
}

const countDecimalPlaces = (numString: string) => {
  const decimalIndex = numString.indexOf(".");
  if (decimalIndex === -1) {
    return 0;
  } else {
    return numString.length - decimalIndex - 1;
  }
};

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
    (value: number | string, incrementor = 1) => {
      const decimalPlaces = countDecimalPlaces(`${value}`);
      let newValue: string | number = parseValue(value || 0) + incrementor;
      newValue = clamp(newValue, min, max);
      // if there were decimal places before parsing, add them back
      if (decimalPlaces) newValue = (+newValue).toFixed(decimalPlaces);
      return newValue;
    },
    [min, max, value]
  );

  const handleIncrement = useCallback(() => {
    const newValue = getNextValue(value as number, step || 1);
    if (callback) callback(`${newValue}`);
  }, [value, step, callback]);

  const handleDecrement = useCallback(() => {
    let newValue = getNextValue(value as number, -step || -1);
    if (!allowNegative && +newValue < 0) {
      newValue = 0;
    }
    if (callback) callback(`${newValue}`);
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
