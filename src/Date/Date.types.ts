export interface DateProps {
  value?: Date;
  onChange?: (value: Date) => void;
  format?: string;
  placeholder?: string;
  disabled?: boolean;
  disableFuture?: boolean;
  disablePast?: boolean;
  currentDate?: Date;
}
