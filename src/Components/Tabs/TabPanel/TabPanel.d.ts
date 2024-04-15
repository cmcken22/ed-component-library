import { TabPanelProps } from './TabPanel.types';

declare const TabPanel: {
    ({ id, className, sx, children, tabValue, ...other }: TabPanelProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
    defaultProps: Partial<TabPanelProps>;
};
export default TabPanel;
