/// <reference types="react" />
import { SxProps } from "@mui/material";
export interface GridProps {
    id?: string;
    className?: string;
    sx?: SxProps;
    children?: React.ReactNode;
    /**
     * The gutter of the grid. This adds padding to the left and right of the grid.
     */
    gutter?: number | string;
    /**
     * Defines the horizontal space between the type item components. It overrides the value of the spacing prop.
     */
    columns?: number;
    /**
     * The spacing between the columns.
     */
    spacing?: Array<number | string> | number | object | string;
    /**
     * The spacing between the columns.
     */
    columnSpacing?: Array<number | string> | number | object | string;
    /**
     * Defines the vertical space between the type item components. It overrides the value of the spacing prop.
     */
    rowSpacing?: Array<number | string> | number | object | string;
    /**
     * Defines the flex-direction style property. It is applied for all screen sizes.
     */
    direction?: "column-reverse" | "column" | "row-reverse" | "row" | Array<"column-reverse" | "column" | "row-reverse" | "row"> | object;
    /**
     * Defines the flex-wrap style property. It's applied for all screen sizes.
     */
    wrap?: "nowrap" | "wrap-reverse" | "wrap";
}
