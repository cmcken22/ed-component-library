import { FontVariant } from "src/theme/Typography";

export interface CheckboxProps {
  id?: string;
  className?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  labelPosition?: "left" | "right";
  typographyVariant?: FontVariant;
}
