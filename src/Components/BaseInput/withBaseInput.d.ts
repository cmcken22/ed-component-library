import { BaseInputProps } from './BaseInput.types';
import { FC } from '../../../node_modules/react';

declare const withBaseInput: <T extends BaseInputProps>(Component: any, displayName: string) => FC<T>;
export default withBaseInput;
