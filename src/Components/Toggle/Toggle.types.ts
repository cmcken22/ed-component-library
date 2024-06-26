export interface ToggleProps {
  id?: string;
  className?: string;
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
  onHover?: (hovered?: boolean) => void;
  // TODO:
  // tooltip?: string;
}
