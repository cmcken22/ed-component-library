import { TabProps } from './Tab.types';

declare const Tab: {
    ({ id, className, sx, label, value, children, disabled, }: TabProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<TabProps>;
};
export default Tab;
