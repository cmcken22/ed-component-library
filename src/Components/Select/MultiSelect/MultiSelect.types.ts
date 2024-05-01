import { ChipProps } from "src/Components/Chip";
import { CommonSelectProps } from "../Common/Common.types";

export interface MultiSelectProps extends CommonSelectProps {
  value?: string[];
  onChange?: (value: string[]) => void;
  renderValue?: (value: string[], selectedOptions: any[]) => React.ReactNode;
  wrap?: boolean;
  counterPosition?: "left" | "right";
  /**
   * Change the props for the selected item chips
   */
  ChipProps?: ChipProps;
}
