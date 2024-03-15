export declare const DropdownListTheme: {
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
                minHeight: string;
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
            height: string;
            width: string;
            ".MuiSelect-select": {
                display: string;
                alignItems: string;
                borderColor: any;
                height: string;
                paddingTop: number;
                paddingBottom: number;
            };
            "&.MuiFormControl-root": {
                height: string;
                backgroundColor: string;
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
