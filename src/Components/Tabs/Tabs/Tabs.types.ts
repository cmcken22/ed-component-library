import { SxProps } from "@mui/material";

export interface TabsProps {
  id?: string;
  className?: string;
  sx?: SxProps;
  /**
   * The only children should be Tab components
   */
  children: React.ReactNode;
  onTabChange?: (tabValue: string | number) => void;
  /**
   * To add padding to the left and right of the tabs list
   */
  gutter?: string | number;
  hideBottomBorder?: boolean;
}
