import { useCallback, useEffect } from "react";
import { clamp } from "src/utils";

interface UseKeyBoardInputProps {
  min?: number;
  max?: number;
  step?: number;
  allow: boolean;
  hasFocus: boolean;
  value: string | number;
  allowNegative: boolean;
  callback: (value: number) => void;
}

const parseValue = (value: string | number) => {
  if (value === null || value === undefined || value === "") return 0;
  if (isNaN(+value)) return 0;
  return parseFloat(`${value}`);
};

const useKeyBoardInput = ({
  min,
  max,
  step,
  allow,
  hasFocus,
  value,
  allowNegative,
  callback,
}: UseKeyBoardInputProps) => {
  const getNextValue = useCallback(
    (value: number, incrementor = 1) => {
      let newValue = parseValue(value || 0) + incrementor;
      newValue = clamp(newValue, min, max);
      return newValue;
    },
    [min, max, value]
  );

  const handleKeyDown = useCallback(
    (e: any) => {
      if (!hasFocus || !allow) return;
      const key = e.keyCode || e.which;
      const code = e.code;
      if (key === 38 || code === "ArrowUp") {
        e.preventDefault();
        const newValue = getNextValue(value as number, step || 1);
        callback(newValue);
      }
      if (key === 40 || code === "ArrowDown") {
        e.preventDefault();
        let newValue = getNextValue(value as number, -step || -1);
        if (!allowNegative && newValue < 0) {
          newValue = 0;
        }
        callback(newValue);
      }
    },
    [allow, hasFocus, value, allowNegative, step, callback, getNextValue]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};

useKeyBoardInput.defaultProps = {
  step: 1,
};

export default useKeyBoardInput;
