import { ReactNode } from '../../../node_modules/react';

declare const BaseInput: {
    ({ children }: {
        children: ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
    Label: ({ children, required, position }: import('./Label').LabelProps) => import("react/jsx-runtime").JSX.Element;
    HelperText: ({ children }: import('./HelperText').HelperTextProps) => import("react/jsx-runtime").JSX.Element;
};
export default BaseInput;
