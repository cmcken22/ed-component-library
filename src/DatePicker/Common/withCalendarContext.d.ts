import { FC } from '../../../node_modules/react';
import { BaseCalendarProps } from "./BaseDatePicker.types";
declare const withCalendarContext: <T extends BaseCalendarProps>(Component: any, displayName: string, options: {
    range: boolean;
}) => FC<T>;
export default withCalendarContext;
