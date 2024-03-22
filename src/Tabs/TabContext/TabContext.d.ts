/// <reference types="react" />
import { TabContextProps } from "./TabContext.types";
export type TabContext = {
    value?: any;
    setTabValue?: (value: string | number) => void;
};
export declare const TabContext: import('../../../node_modules/react').Context<TabContext>;
declare const TabContextProvider: {
    ({ defaultValue, value, onTabChange, children, }: TabContextProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
    defaultProps: Partial<TabContextProps>;
};
export default TabContextProvider;
