import { FC } from '../../node_modules/react';
import { BaseInputProps } from "./BaseInput.types";
declare const withBaseInput: <T extends BaseInputProps>(Component: any, displayName: string) => FC<T>;
export default withBaseInput;
