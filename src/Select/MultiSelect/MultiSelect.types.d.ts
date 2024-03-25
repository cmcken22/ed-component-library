/// <reference types="react" />
import { CommonSelectProps } from "../Common/Common.types";
export interface MultiSelectProps extends CommonSelectProps {
    value?: string[];
    onChange?: (value: string[]) => void;
    renderValue?: (value: string[], selectedOptions: any[]) => React.ReactNode;
    wrap?: boolean;
}
