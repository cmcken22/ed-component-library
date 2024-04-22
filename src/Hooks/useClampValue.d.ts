declare const useClampValue: ({ min, max }: {
    min: number;
    max: number;
}) => (value: string | number) => string | number;
export default useClampValue;
