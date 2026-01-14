import type { KeyboardEvent, MouseEvent, PropsWithChildren } from 'react';
import type { PaginationColor, PaginationSize, PaginationVariant } from './Pagination';
interface PageItemProps {
    /**
     * The color scheme of the pagination component
     */
    color: PaginationColor;
    /**
     * If true, the page item is disabled
     */
    disabled: boolean;
    /**
     * The page number for this item
     */
    index: number;
    /**
     * The current selected page number.
     * Used to determine if the current page is selected
     */
    page: number;
    /**
     * Callback fired when the page item is activated
     */
    onClick: (event: MouseEvent | KeyboardEvent) => void;
    /**
     * The size of the page component
     */
    size: PaginationSize;
    /**
     * The visual style variant of the page component
     */
    variant: PaginationVariant;
}
declare function PageItem({ color, disabled, index, page, onClick, size, variant, }: PropsWithChildren<PageItemProps>): JSX.Element;
export default PageItem;
