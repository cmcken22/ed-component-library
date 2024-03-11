declare const _default: {
    defaultProps: {
        MenuProps: {
            PaperProps: {
                sx: {
                    marginTop: string;
                    borderWidth: string;
                    borderStyle: string;
                    borderColor: string;
                    boxShadow: string;
                    "& .MuiList-root": {
                        padding: number;
                    };
                    "& .MuiMenuItem-root": {
                        minHeight: string;
                        padding: string;
                        borderBottomWidth: string;
                        borderBottomStyle: string;
                        borderBottomColor: string;
                        "&:last-child": {
                            borderBottom: string;
                        };
                        "&:hover": {};
                    };
                };
            };
        };
    };
    styleOverrides: {
        root: ({ theme, ownerState }: any) => {
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
