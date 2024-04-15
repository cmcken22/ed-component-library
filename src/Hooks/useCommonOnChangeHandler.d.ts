interface CommonOnChangeHandlerProps {
    onChange: (...args: any) => void;
    debounce?: number;
}
declare const useCommonOnChangeHandler: ({ onChange, debounce, }: CommonOnChangeHandlerProps) => (...value: any) => void;
export default useCommonOnChangeHandler;
