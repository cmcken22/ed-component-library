import { useCallback, useEffect } from "react";
import useStepIncrementor from "./useStepIncrementor";

interface UseKeyBoardInputProps {
  min?: number;
  max?: number;
  step?: number;
  allow: boolean;
  hasFocus: boolean;
  value: string | number;
  allowNegative: boolean;
  callback: (value: string) => void;
}

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
  const { increment, decrement } = useStepIncrementor({
    min,
    max,
    step,
    value,
    allowNegative,
    callback,
  });

  const handleKeyDown = useCallback(
    (e: any) => {
      if (!hasFocus || !allow) return;
      const key = e.keyCode || e.which;
      const code = e.code;
      if (key === 38 || code === "ArrowUp") {
        e.preventDefault();
        increment();
      }
      if (key === 40 || code === "ArrowDown") {
        e.preventDefault();
        decrement();
      }
    },
    [allow, hasFocus, increment, decrement]
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
