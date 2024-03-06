/// <reference types="react" />
import IconMap from "./Icon.map";
export type IconVariantType = keyof typeof IconMap;
export declare const IconVariant: Record<string, IconVariantType>;
export interface BaseIconProps {
    icon: IconVariantType | React.ElementType;
    color?: string;
    height?: string;
    width?: string;
    className?: string;
    sx?: any;
}
declare const Icon: {
    ({ icon, color, height, width, className, sx }: BaseIconProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {};
};
export default Icon;
