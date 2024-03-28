import { GridProps } from './Grid.types';

declare const Grid: {
    ({ id, className, sx, children, gutter, columns, spacing, columnSpacing, rowSpacing, direction, wrap, }: GridProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<GridProps>;
    Item: {
        ({ id, className, xs, sm, md, lg, xl, sx, children, }: import('../GridItem/GridItem.types').GridItemProps): import("react/jsx-runtime").JSX.Element;
        defaultProps: Partial<import('../GridItem/GridItem.types').GridItemProps>;
    };
};
export default Grid;
