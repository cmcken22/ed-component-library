import { PaginationProps } from './Pagination.types';

declare const Pagination: {
    ({ id, className, sx, page: passedPage, count, startBoundaryCount, endBoundaryCount, siblingCount, onChange, hideBackButton, hideFirstButton, hideNextButton, hideLastButton, }: PaginationProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<PaginationProps>;
};
export default Pagination;
