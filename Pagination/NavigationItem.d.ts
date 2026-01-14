import type { PropsWithChildren } from 'react';
import type { PaginationColor, PaginationSize, PaginationVariant } from './Pagination';
interface NavigationItemProps {
    /**
     * The color scheme of the pagination component
     */
    color: PaginationColor;
    /**
     * If true, the navigation item is disabled
     */
    disabled: boolean;
    /**
     * Callback fired when the navigation item is activated
     */
    onClick: () => void;
    /**
     * The label for the navigation action
     */
    label: string;
    /**
     * The size of the navigation component
     */
    size: PaginationSize;
    /**
     * The visual style variant of the navigation component
     */
    variant: PaginationVariant;
}
declare function NavigationItem({ children, color, disabled, label, onClick, size, variant, }: PropsWithChildren<NavigationItemProps>): JSX.Element;
export default NavigationItem;
