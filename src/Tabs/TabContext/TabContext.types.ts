export interface TabContextProps {
  /**
   * The default value of the tab
   */
  defaultValue?: string | number | undefined;
  /**
   * Provide value, if you want to control the component.
   * Otherwise, use defaultValue alone if you want to use the component in an uncontrolled manner.
   */
  value?: string | number | undefined;
  children: React.ReactNode;
  onTabChange?: (value: string | number) => void;
}
