import { useCallback } from "react";

interface UseOnHoverProps {
  callback?: (hovered: boolean) => void;
  onMouseEnter?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
}

const useOnHover = ({
  callback,
  onMouseEnter,
  onMouseLeave,
}: UseOnHoverProps) => {
  const handleMouseEnter = useCallback(
    (e: any) => {
      if (callback) callback(true);
      if (onMouseEnter) onMouseEnter(e);
    },
    [callback, onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (e: any) => {
      if (callback) callback(false);
      if (onMouseLeave) onMouseLeave(e);
    },
    [callback, onMouseLeave]
  );

  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
};

export default useOnHover;
