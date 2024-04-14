import { useCallback, useEffect } from "react";

interface UseKeyBoardInputProps {
  min?: number;
  max?: number;
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
  allow,
  hasFocus,
  value,
  allowNegative,
  callback,
}: UseKeyBoardInputProps) => {
  const handleKeyDown = useCallback(
    (e: any) => {
      if (!hasFocus || !allow) return;
      const key = e.keyCode || e.which;
      const code = e.code;
      if (key === 38 || code === "ArrowUp") {
        e.preventDefault();
        let newValue = parseValue(value) + 1;
        if (max || max === 0) {
          if (newValue > max) {
            newValue = max;
          }
        }
        callback(newValue);
      }
      if (key === 40 || code === "ArrowDown") {
        e.preventDefault();
        let newValue = parseValue(value) - 1;
        if (!allowNegative && newValue < 0) {
          newValue = 0;
        }
        if (min || min === 0) {
          if (newValue < min) {
            newValue = min;
          }
        }
        callback(newValue);
      }
    },
    [allow, hasFocus, value, allowNegative, callback, min, max]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useKeyBoardInput;
