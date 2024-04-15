import { StandardInputProps } from '../../BaseInput';
import { SxProps } from '@mui/material';

export interface DateRangeFieldProps extends Omit<StandardInputProps, "placeholder"> {
    id?: string;
    className?: string;
    sx?: SxProps;
    format?: string;
    value?: Date[] | null;
    onChange?: (value: Date[]) => void;
    hideCalendarIcon?: boolean;
    inputRef?: React.Ref<HTMLInputElement>;
    /**
     * Since there are two inputs, the placeholder can be an array of strings
     * @default MMM DD, YYYY
     * @example ["Start date", "End date"]
     */
    placeholder?: string | string[];
}
