export type OptionType = {
    label: string;
    value: any;
    disabled?: boolean;
};
export interface CheckboxGroupProps {
    id?: string;
    options: OptionType[] | any[];
    value?: any[];
    onChange?: (value: any[]) => void;
    disabled?: boolean;
    row?: boolean;
    labelPosition?: "left" | "right";
    getOptionValue?: (option: OptionType | any) => any;
    getOptionLabel?: (option: OptionType | any) => any;
    getOptionDisabled?: (option: OptionType | any) => any;
}
