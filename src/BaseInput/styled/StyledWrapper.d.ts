/// <reference types="react" />
export interface Props {
    status?: string;
    disabled?: boolean;
    labelPosition?: string;
    fullWidth?: boolean;
}
declare const StyledWrapper: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<import("@mui/material").Theme> & Omit<Omit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import('../../../node_modules/react').Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<import("@mui/material").Theme>> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & Props, {}, {}>;
export default StyledWrapper;
