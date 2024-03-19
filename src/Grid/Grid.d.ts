import { GridProps } from "./Grid.types";
declare const Grid: {
    ({ id, className, sx, children, gutter }: GridProps): import('../../node_modules/react/jsx-runtime').JSX.Element;
    defaultProps: Partial<GridProps>;
    Item: ({ id, className, xs, sm, md, lg, xl, sx, children }: any) => import('../../node_modules/react/jsx-runtime').JSX.Element;
};
export default Grid;
