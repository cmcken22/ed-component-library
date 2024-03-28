import { default as IconMap } from './Icon.map';
import { ReactNode } from '../../node_modules/react';

export type IconVariantType = keyof typeof IconMap;
export declare const IconVariant: Record<string, IconVariantType>;
export interface IconProps {
    id?: string;
    icon: IconVariantType | ReactNode;
    color?: string;
    size?: string | number;
    height?: string | number;
    width?: string | number;
    className?: string;
    sx?: any;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onHover?: (hovered: boolean) => void;
}
