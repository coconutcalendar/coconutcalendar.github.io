import type { ReactNode } from 'react';
import type { TableRow } from './TableContext';
interface BulkActionProps {
    children: ReactNode | ((selected: TableRow[]) => ReactNode) | undefined;
}
declare function BulkActions({ children }: BulkActionProps): JSX.Element;
export default BulkActions;
