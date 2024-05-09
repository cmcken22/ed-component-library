import { ContentProps } from './Content.types';

declare const Content: {
    ({ id, className, children, sx, height, maxHeight, minHeight, }: ContentProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<ContentProps>;
};
export default Content;
