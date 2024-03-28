import { Children, cloneElement, useEffect, useRef } from "react";
import Counter from "./Counter";

interface OverflowCounterProps {
  children: any;
  onOverflow: (count: number) => void;
}

const OverflowCounter = ({ children, onOverflow }: any) => {
  const refs = useRef<any>({});

  useEffect(() => {
    if (!onOverflow) return;
    let overflowCount = 0;
    let counterWidth = 0;

    Children.forEach(children, (child: any, idx: number) => {
      if (!child) return;

      if (child?.type?.displayName === Counter.displayName) {
        const element = refs.current[idx];
        if (!element) return;
        const style = element.currentStyle || window.getComputedStyle(element);
        const width = element.offsetWidth;
        const margin =
          parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        counterWidth = width + margin;
      }

      if (child?.type?.displayName !== Counter.displayName) {
        const domNode = refs.current[idx];
        if (!domNode) return;
        const parent = domNode.parentElement.getBoundingClientRect();
        const rect = domNode.getBoundingClientRect();

        if (rect.right + counterWidth > parent.right) {
          overflowCount++;
          domNode.style.visibility = "hidden";
        } else {
          domNode.style.visibility = "visible";
        }
      }
    });

    onOverflow(overflowCount);
  }, [children, onOverflow]);

  return (
    <>
      {Children.map(children, (element, idx) => {
        if (!element) return null;
        return cloneElement(element, {
          ref: (ref: any) => (refs.current[idx] = ref),
        });
      })}
    </>
  );
};

OverflowCounter.defaultProps = {
  children: null,
  onOverflow: () => {},
} as Partial<OverflowCounterProps>;

export default OverflowCounter;
