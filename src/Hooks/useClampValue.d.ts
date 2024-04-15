declare const useClampValue: ({ min, max }: {
    min: number;
    max: number;
}) => (value: number) => number;
export default useClampValue;
