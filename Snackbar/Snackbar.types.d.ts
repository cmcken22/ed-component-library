export interface SnackbarProps {
    id?: string;
    message?: string;
    variant?: "success" | "warning" | "error" | "info";
    persist?: boolean;
    hideIcon?: boolean;
}
