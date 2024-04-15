/// <reference types="react" />
export interface Props {
    status?: string;
    disabled?: boolean;
    labelPosition?: string;
    fullWidth?: boolean;
    componentType?: string;
    variant?: string;
}
declare const StyledWrapper: import('@emotion/styled').StyledComponent<import("@mui/system").BoxOwnProps<import("@mui/material").Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<import("@mui/material").Theme>> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & Props, {}, {}>;
export default StyledWrapper;
