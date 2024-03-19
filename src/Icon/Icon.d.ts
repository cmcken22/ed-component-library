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
declare const Icon: import('../../node_modules/react').ForwardRefExoticComponent<BaseIconProps & import('../../node_modules/react').RefAttributes<unknown>>;
export default Icon;
