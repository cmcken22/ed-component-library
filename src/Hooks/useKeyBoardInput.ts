import { useCallback, useEffect } from "react";

interface UseKeyBoardInputProps {
  allow: boolean;
  hasFocus: boolean;
  value: string | number;
  allowNegative: boolean;
  callback: ({
    value,
    formattedValue,
    floatValue,
  }: {
    value: string;
    formattedValue: string;
    floatValue: number;
  }) => void;
}

const parseValue = (value: string | number) => {
  if (value === null || value === undefined || value === "") return 0;
  if (isNaN(+value)) return 0;
  return parseFloat(`${value}`);
};

const useKeyBoardInput = ({
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
        const newValue = parseValue(value) + 1;
        const formattedValue = newValue.toLocaleString();
        const floatValue = newValue;
        callback({
          value: newValue.toString(),
          formattedValue,
          floatValue,
        });
      }
      if (key === 40 || code === "ArrowDown") {
        e.preventDefault();
        let newValue = parseValue(value) - 1;
        if (!allowNegative && newValue < 0) {
          newValue = 0;
        }
        const formattedValue = newValue.toLocaleString();
        const floatValue = newValue;
        callback({
          value: newValue.toString(),
          formattedValue,
          floatValue,
        });
      }
    },
    [allow, hasFocus, value, allowNegative, callback]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useKeyBoardInput;
