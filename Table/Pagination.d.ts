import type { Limit } from './Table';
export type HandlesPaginationChange = (args: {
    limit: Limit;
    page: number;
}) => void;
interface PaginationProps {
    /**
     * Callback function invoked when pagination state changes
     */
    onChange: HandlesPaginationChange;
}
declare function PaginationComponent({ onChange }: PaginationProps): JSX.Element;
export default PaginationComponent;
