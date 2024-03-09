import { isEqual } from "lodash";
import { useState } from "react";

export const useStateWithPrevious = <ValueType>(initial: ValueType) => {
  const [value, setValue] = useState<any>(initial);
  const [prev, setPrev] = useState<any>(initial);

  function setValueAndPrev<ValueType>(newValue: ValueType) {
    if (isEqual(value, newValue)) return;
    setPrev(value);
    setValue(newValue);
  }

  return [prev, value, setValueAndPrev];
};
