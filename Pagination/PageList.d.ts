import type { KeyboardEvent, MouseEvent, PropsWithChildren } from 'react';
import type { PaginationColor, PaginationSize, PaginationVariant } from './Pagination';
interface PageListProps {
    /**
     * Number of pages to show at the start and end of the pagination
     */
    boundaryCount: number;
    /**
     * Total number of pages
     */
    count: number;
    /**
     * The color scheme of the pagination component
     */
    color: PaginationColor;
    /**
     * If true, the page list is disabled
     */
    disabled: boolean;
    /**
     * Callback fired when a page item is activated
     */
    onClick: (event: MouseEvent | KeyboardEvent) => void;
    /**
     * The current selected page number.
     * Used to determine if the current page is selected
     */
    page: number;
    /**
     * Number of pages to show before and after the current page
     */
    siblingCount: number;
    /**
     * The size of the page list component
     */
    size: PaginationSize;
    /**
     * The visual style variant of the page list component
     */
    variant: PaginationVariant;
}
declare function PageList({ boundaryCount, count, color, disabled, page, onClick, siblingCount, size, variant, }: PropsWithChildren<PageListProps>): JSX.Element;
export default PageList;
