import { CommonSelectProps } from "../Common/Common.types";

export interface MultiSelectProps extends CommonSelectProps {
  value?: string[];
  onChange?: (value: string[]) => void;
}
