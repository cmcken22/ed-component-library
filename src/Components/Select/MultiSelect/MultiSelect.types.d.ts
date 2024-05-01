import { CommonSelectProps } from '../Common/Common.types';
import { ChipProps } from '../../Chip';

export interface MultiSelectProps extends CommonSelectProps {
    value?: string[];
    onChange?: (value: string[]) => void;
    renderValue?: (value: string[], selectedOptions: any[]) => React.ReactNode;
    wrap?: boolean;
    counterPosition?: "left" | "right";
    ChipProps?: ChipProps;
}
