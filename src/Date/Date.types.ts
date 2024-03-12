export interface DateProps {
  value?: Date | Date[] | null;
  onChange?: (value: Date) => void;
  format?: string;
  placeholder?: string;
  disabled?: boolean;
  disableFuture?: boolean;
  disableCurrent?: boolean;
  disablePast?: boolean;
  dateDisabled?: (date: Date) => boolean;
  currentDate?: Date;
  status?: "error" | "success" | "warning";
}
