import { ReactNode } from "react";
import IconMap from "./Icon.map";

export type IconVariantType = keyof typeof IconMap;

export const IconVariant: Record<string, IconVariantType> = Object.freeze(
  Object.fromEntries(Object.keys(IconMap).map((key: any) => [key, key]))
);

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
