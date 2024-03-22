import { CommonSelectProps } from "../Common/Common.types";

export interface SelectProps extends CommonSelectProps {
  value?: string;
  onChange?: (value: string) => void;
}
