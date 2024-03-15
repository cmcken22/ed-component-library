/// <reference types="react" />
type ChipType = "positive" | "negative" | "warning" | "pending" | "neutral";
export interface ChipProps {
    id?: string;
    type: ChipType;
    text: string;
    hideIcon?: boolean;
    iconPosition?: "left" | "right";
    onClick?: () => void;
    onHover?: () => void;
    children?: string | React.ReactNode;
}
declare const Chip: {
    ({ id, type, text, hideIcon, iconPosition, onClick, onHover, children, }: ChipProps): import('../../node_modules/react/jsx-runtime').JSX.Element;
    defaultProps: {
        type: ChipType;
        hideIcon: boolean;
        iconPosition: "right" | "left";
    };
};
export default Chip;
