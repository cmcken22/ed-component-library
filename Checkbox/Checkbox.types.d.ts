import { FontVariant } from '../theme/Typography';
export interface CheckboxProps {
    id?: string;
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    labelPosition?: "left" | "right";
    typographyVariant?: FontVariant;
}
