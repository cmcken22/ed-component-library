export declare function hexToRGBA(hex: string, opacity: number): string;
export declare const shouldNotForwardProp: (invalidList: string[]) => (prop: string) => boolean;
export declare const sizeFormat: (value: string | number) => string;
export declare const useBreakPoint: () => "" | "xl" | "lg" | "md" | "sm" | "xs";
export declare const getChildByDisplayName: (children: any, displayName: any) => any;
export declare const reduceRepeatingValues: (array: any[]) => any[];
export declare const generateUniqueKey: () => string;
export declare const removeNumericFormatting: (value: string, formattingProps: any) => number;
export declare const clamp: (value: number | string, min: number, max: number) => string | number;
