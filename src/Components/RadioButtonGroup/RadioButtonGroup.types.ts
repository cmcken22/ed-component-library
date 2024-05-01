export type OptionType = {
  label: string;
  value: any;
  disabled?: boolean;
};

export interface RadioButtonGroupProps {
  id?: string;
  className?: string;
  options: OptionType[] | any[];
  value: any;
  onChange?: (value: any) => void;
  disabled?: boolean;
  row?: boolean;
  allowDeselect?: boolean;
  getOptionValue?: (option: any) => any;
  getOptionLabel?: (option: any) => any;
  getOptionDisabled?: (option: any) => any;
  labelPosition?: "left" | "right";
  gap?: string | number;
}
