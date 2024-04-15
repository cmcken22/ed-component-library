import { HorizontalStackProps } from './HorizontalStack.types';

declare const HorizontalStack: {
    ({ id, className, sx, children, gap, justifyContent, }: HorizontalStackProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<HorizontalStackProps>;
};
export default HorizontalStack;
