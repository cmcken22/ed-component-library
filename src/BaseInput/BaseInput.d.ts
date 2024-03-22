import { ReactNode } from '../../node_modules/react';
declare const BaseInput: {
    ({ children }: {
        children: ReactNode;
    }): import('../../node_modules/react/jsx-runtime').JSX.Element;
    Label: ({ children, required, position }: import("./Label").LabelProps) => import('../../node_modules/react/jsx-runtime').JSX.Element;
    HelperText: ({ children }: import("./HelperText").HelperTextProps) => import('../../node_modules/react/jsx-runtime').JSX.Element;
};
export declare const BaseInputMeta: {
    className: string;
    dataTestId: string;
};
export default BaseInput;
