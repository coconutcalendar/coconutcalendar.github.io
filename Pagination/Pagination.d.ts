import type { AriaAttributes, PropsWithChildren } from 'react';
interface PaginationProps {
    /**
     * Accessible label for the pagination navigation
     */
    'aria-label': AriaAttributes['aria-label'];
    /**
     * Number of pages to show at the start and end of the pagination
     * @default 1
     */
    boundaryCount?: number;
    /**
     * Total number of pages
     */
    count: number;
    /**
     * The color scheme of the pagination component
     * @default 'default'
     */
    color?: PaginationColor;
    /**
     * The initially selected page
     * @default 1
     */
    defaultPage?: number;
    /**
     * If true, the pagination component is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Number of pages to show before and after the current page
     * @default 1
     */
    siblingCount?: number;
    /**
     * The size of the pagination component
     * @default 'medium'
     */
    size?: PaginationSize;
    /**
     * The visual style variant of the pagination component
     * @default 'filled'
     */
    variant?: PaginationVariant;
}
export type PaginationColor = 'default' | 'primary' | 'secondary';
export type PaginationSize = 'large' | 'medium' | 'small';
type PaginationSizes = {
    [key in PaginationSize]: string;
};
export type PaginationVariant = 'filled' | 'outlined';
export type PaginationVariants = {
    [key in PaginationVariant]: {
        [key in PaginationColor]: {
            selected: string;
            unselected: string;
        };
    };
};
export declare const sizes: PaginationSizes;
export declare const variants: PaginationVariants;
declare function Pagination({ 'aria-label': label, boundaryCount, count, color, defaultPage, disabled, siblingCount, size, variant, }: PropsWithChildren<PaginationProps>): JSX.Element;
export default Pagination;
