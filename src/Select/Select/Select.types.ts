import { CommonSelectProps } from "../Common/Common.types";

export interface SelectProps extends CommonSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  renderValue?: (value: string, option: any) => React.ReactNode;
  /**
   * Enabling this will allow the user to deselect the selected value.
   */
  allowDeselect?: boolean;
}
