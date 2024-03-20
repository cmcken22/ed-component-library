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

const TabContextProvider = ({
  value,
  onTabChange,
  children,
}: TabContextProps) => {
  const [tabValue, setTabValue] = useState(value);

  useEffect(() => {
    setTabValue(value);
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

TabContextProvider.defaultProps = {} as Partial<TabContextProps>;

export default TabContextProvider;
