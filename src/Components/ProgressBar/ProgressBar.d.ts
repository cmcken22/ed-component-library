import { ProgressBarProps } from './ProgressBar.types';

export interface Props {
    barColor?: string;
    railColor?: string;
    size?: string | number;
}
declare const ProgressBar: {
    ({ id, className, sx, value, status, leftText, rightText, errorMessage, width, minWidth, fullWidth, color: passedColor, railColor, size, }: ProgressBarProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<ProgressBarProps>;
};
export default ProgressBar;
