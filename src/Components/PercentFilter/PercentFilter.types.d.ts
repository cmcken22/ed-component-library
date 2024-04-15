import { StandardInputProps } from '../BaseInput';
import { SxProps } from '@mui/material';

export interface PercentFilterProps extends StandardInputProps {
    id?: string;
    className?: string;
    sx?: SxProps;
    onChange?: (value: any) => void;
    renderValue?: (value: any) => string;
}
