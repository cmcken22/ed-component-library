import { createContext, useCallback, useEffect, useState } from "react";
import { TabContextProps } from "./TabContext.types";

export type TabContext = {
  value?: any;
  setTabValue?: (value: string | number) => void;
};

const defaultContext: TabContext = {
  value: undefined,
  setTabValue: () => {},
};

export const TabContext = createContext<TabContext>(defaultContext);

// in the case that 0 is provided as a value
const detectValue = (value: string | number | undefined) => {
  if (value === undefined) return false;
  return true;
};

const TabContextProvider = ({
  defaultValue,
  value,
  onTabChange,
  children,
}: TabContextProps) => {
  const [tabValue, setTabValue] = useState(
    detectValue(defaultValue) ? defaultValue : value
  );

  useEffect(() => {
    if (detectValue(value)) setTabValue(value);
  }, [value]);

  const handleTabChange = useCallback(
    (value: string | number) => {
      setTabValue(value);
      if (onTabChange) onTabChange(value);
    },
    [tabValue, onTabChange]
  );

  return (
    <TabContext.Provider
      value={{ value: tabValue, setTabValue: handleTabChange }}
    >
      {children}
    </TabContext.Provider>
  );
};

TabContextProvider.displayName = "TabContextProvider";

TabContextProvider.defaultProps = {} as Partial<TabContextProps>;

export default TabContextProvider;
