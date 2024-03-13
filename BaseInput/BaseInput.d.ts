/// <reference types="react" />
export interface BaseInputProps {
    id?: string;
    status?: "error" | "warning" | "success";
    disabled?: boolean;
    fullWidth?: boolean;
    children?: React.ReactNode | React.JSX.Element | ((props: any) => React.ReactNode);
    containerSx?: any;
}
type InputContext = {
    status: "error" | "warning" | "success" | undefined;
    required?: boolean;
    disabled?: boolean;
    labelPosition?: "top" | "left";
    endAdornment?: React.ReactNode;
    setLabelPosition: (pos: string) => void;
};
export declare const InputContext: import("react").Context<InputContext>;
declare const BaseInputProvider: {
    ({ id, status, disabled, fullWidth, containerSx, children, }: BaseInputProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        labelPosition: string;
        multiline: boolean;
    };
    Label: ({ children, required, position, tooltip }: import("./Label").LabelProps) => import("react/jsx-runtime").JSX.Element;
    HelperText: ({ children }: import("./HelperText").HelperTextProps) => import("react/jsx-runtime").JSX.Element;
};
export default BaseInputProvider;
