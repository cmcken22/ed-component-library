export declare const SelectListTheme: {
    defaultProps: {
        className: string;
        "data-testid": string;
    };
    styleOverrides: {
        root: ({ theme }: any) => {
            "& .MuiPaper-root": {
                marginTop: string;
            };
            "& .MuiList-root": {
                padding: number;
            };
            "& .MuiMenuItem-root": {
                "&:focus": {
                    backgroundColor: string;
                };
                padding: string;
                borderBottomWidth: string;
                borderBottomStyle: string;
                borderBottomColor: any;
                "&:last-child": {
                    borderBottom: string;
                };
                "&:hover": {
                    backgroundColor: string;
                };
            };
        };
    };
};
declare const _default: {
    styleOverrides: {
        root: ({ theme, ownerState }: any) => {
            "&.MuiInputBase-root": {
                background: string;
            };
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderWidth: string;
            };
            minHeight: string;
            width: string;
            ".MuiSelect-select": {
                display: string;
                alignItems: string;
                borderColor: any;
                height: string;
                paddingTop: number;
                paddingBottom: number;
            };
            "& .MuiSelect-multiple": {
                paddingTop: any;
                paddingBottom: any;
                display: string;
                flexWrap: string;
                alignItems: string;
                height: string;
                gap: any;
            };
            "&.dropdown--open": {
                "&.MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: string;
                };
            };
        };
    };
};
export default _default;
