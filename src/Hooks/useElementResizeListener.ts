import { useCallback, useEffect, useRef } from "react";

const useElementResizeListener = (elm: any, onResize: any) => {
  const resizeObserverRef = useRef(null);

  const handleCallback = useCallback(() => {
    if (onResize) onResize(elm);
  }, [onResize, elm]);

  const unobserve = useCallback(() => {
    if (resizeObserverRef.current) {
      resizeObserverRef.current?.unobserve(elm);
      resizeObserverRef.current = null;
    }
  }, [elm]);

  useEffect(() => {
    if (!elm) return;
    if (resizeObserverRef.current) unobserve();
    resizeObserverRef.current = new ResizeObserver(() => {
      handleCallback();
    });
    resizeObserverRef.current?.observe(elm);
    return () => unobserve();
  }, [elm, handleCallback, unobserve]);
};

export default useElementResizeListener;
