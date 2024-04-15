import _debounce from "lodash.debounce";
import { useCallback } from "react";

interface CommonOnChangeHandlerProps {
  onChange: (...args: any) => void;
  debounce?: number;
}

const useCommonOnChangeHandler = ({
  onChange,
  debounce,
}: CommonOnChangeHandlerProps) => {
  const debounceOnChange = useCallback(
    _debounce((...value: any) => {
      if (onChange) onChange(...value);
    }, debounce),
    [debounce, onChange]
  );

  const handleChangeCallback = useCallback(
    (...value: any) => {
      if (!onChange) return;
      if (debounce || debounce === 0) {
        debounceOnChange(...value);
      } else {
        onChange(...value);
      }
    },
    [debounce, onChange]
  );

  return handleChangeCallback;
};

export default useCommonOnChangeHandler;
