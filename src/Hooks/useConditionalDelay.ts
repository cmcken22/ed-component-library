import { useEffect, useRef, useState } from "react";

const useConditionalDelay = (condition: boolean, delay: number) => {
  const [ready, setReady] = useState(false);
  const timer = useRef<any>(null);

  useEffect(() => {
    if (condition) {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }
      timer.current = setTimeout(() => {
        setReady(true);
      }, delay);
    } else {
      setReady(false);
    }
  }, [condition, delay]);

  return ready;
};

export default useConditionalDelay;
