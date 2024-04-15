interface UseKeyBoardInputProps {
    min?: number;
    max?: number;
    step?: number;
    allow: boolean;
    hasFocus: boolean;
    value: string | number;
    allowNegative: boolean;
    callback: (value: number) => void;
}
declare const useKeyBoardInput: {
    ({ min, max, step, allow, hasFocus, value, allowNegative, callback, }: UseKeyBoardInputProps): void;
    defaultProps: {
        step: number;
    };
};
export default useKeyBoardInput;
