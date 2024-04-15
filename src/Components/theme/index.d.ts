import { Colors, palette } from './palette';
import { Theme } from '@mui/material';

declare const theme: Theme;
declare const useEllisDonTheme: () => Theme;
declare const DEFAULT_WIDTHS: {
    RangePicker: string;
    DateRangeField: string;
    Input: string;
};
export { Colors, DEFAULT_WIDTHS, palette, theme, useEllisDonTheme };
