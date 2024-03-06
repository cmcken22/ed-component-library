import { InputProps } from "../Input";
export interface TextAreaProps extends Omit<InputProps, "type"> {
    maxRows?: number;
    minRows?: number;
    onChange?: (value: string) => void;
    debounce?: number;
    maxChars?: number;
    maxWords?: number;
}
declare const TextArea: {
    ({ id, label, placeholder, status, helperText, disabled, value: passedValue, fullWidth, required, labelPosition, maxRows, minRows, onChange, debounce, maxChars, maxWords, width, minWidth, }: TextAreaProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        labelPosition: string;
        minRows: number;
        maxRows: number;
        minWidth: string;
    };
};
export default TextArea;
