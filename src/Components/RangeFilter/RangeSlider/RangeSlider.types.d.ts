import { SxProps } from '@mui/material';

export interface RangeSliderProps {
    id?: string;
    className?: string;
    sx?: SxProps;
    min: number;
    max: number;
    minDistance?: number;
    value?: number[];
    onChange: (value: number[]) => void;
    step?: number;
    /**
     * Controls when the value label is displayed:
     *
     * - `auto` the value label will display when the thumb is hovered or focused.
     * - `on` will display persistently.
     * - `off` will never display.
     * @default 'off'
     */
    displayValueTooltip?: "on" | "auto" | "off";
}
