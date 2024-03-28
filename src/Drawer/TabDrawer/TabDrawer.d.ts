import { TabDrawerProps } from './TabDrawer.types';

declare const TabDrawer: {
    ({ children, sx, ...rest }: TabDrawerProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<TabDrawerProps>;
};
export default TabDrawer;
