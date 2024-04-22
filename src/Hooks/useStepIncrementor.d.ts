interface UseStepIncrementorProps {
    min?: number;
    max?: number;
    step?: number;
    value: string | number;
    allowNegative: boolean;
    callback: (value: number | string) => void;
}
declare const useStepIncrementor: {
    ({ min, max, step, value, allowNegative, callback, }: UseStepIncrementorProps): {
        increment: () => void;
        decrement: () => void;
    };
    defaultProps: {
        step: number;
    };
};
export default useStepIncrementor;
