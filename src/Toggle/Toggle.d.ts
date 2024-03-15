export interface ToggleProps {
    checked?: boolean;
    disabled?: boolean;
    onChange?: (value: boolean) => void;
    /**
     * Display the text "ON" and "OFF" inside the toggle
     * @default false
     */
    displayToggleText?: boolean;
    label?: string;
    sx?: any;
    labelPosition?: "left" | "right";
}
declare const Toggle: {
    ({ checked: passedValue, disabled, onChange, displayToggleText, label, labelPosition, sx, }: ToggleProps): import('../../node_modules/react/jsx-runtime').JSX.Element;
    defaultProps: Partial<ToggleProps>;
};
export default Toggle;
