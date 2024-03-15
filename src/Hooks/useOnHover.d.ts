declare const useOnHover: (onHover: (hovered: boolean) => void) => {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};
export default useOnHover;
