import { SxProps } from '@mui/material';

interface PaginationItemProps {
    pageNumber?: number;
    onClick?: (page: number) => void;
    active?: boolean;
    text?: string;
    sx?: SxProps;
}
declare const PaginationItem: ({ pageNumber, onClick, active, text, sx, }: PaginationItemProps) => import("react/jsx-runtime").JSX.Element;
export default PaginationItem;
