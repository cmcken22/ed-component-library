interface UseOnHoverProps {
    callback?: (hovered: boolean) => void;
    onMouseEnter?: (e: any) => void;
    onMouseLeave?: (e: any) => void;
}
declare const useOnHover: ({ callback, onMouseEnter, onMouseLeave, }: UseOnHoverProps) => {
    onMouseEnter: (e: any) => void;
    onMouseLeave: (e: any) => void;
};
export default useOnHover;
