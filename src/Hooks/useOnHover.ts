import { useCallback } from "react";

const useOnHover = (onHover: (hovered: boolean) => void) => {
  const handleMouseEnter = useCallback(() => {
    if (onHover) onHover(true);
  }, [onHover]);

  const handleMouseLeave = useCallback(() => {
    if (onHover) onHover(false);
  }, [onHover]);

  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
};

export default useOnHover;
