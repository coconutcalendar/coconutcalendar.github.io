import type { PropsWithChildren } from 'react';
import type { PaginationSize } from './Pagination';
interface EllipsisItemProps {
    /**
     * If true, the ellipsis item is disabled
     */
    disabled: boolean;
    /**
     * The size of the ellipsis component
     */
    size: PaginationSize;
}
declare function EllipsisItem({ disabled, size, }: PropsWithChildren<EllipsisItemProps>): JSX.Element;
export default EllipsisItem;
