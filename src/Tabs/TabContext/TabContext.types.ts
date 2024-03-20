export interface TabContextProps {
  value?: string | number | undefined;
  children: React.ReactNode;
  onTabChange?: (value: string | number) => void;
}
