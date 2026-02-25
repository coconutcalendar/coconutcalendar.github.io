import type { ReactElement, ReactNode } from 'react';
import type SvgIcon from '../SvgIcon/SvgIcon';
import type { ClickRowActionEventHandler, TableColumn, TableRow } from './TableContext';
export interface BaseTableProps {
    children?: ReactElement | ReactElement[];
    columns: TableColumn[];
    dense?: boolean;
    loading?: boolean;
    rowActions?: {
        enabled?: (row: TableRow) => boolean;
        label: ReactNode;
        handler: ClickRowActionEventHandler;
        startAdornment?: typeof SvgIcon;
    }[];
    rows: TableRow[];
    scrollable?: boolean;
    selectable?: boolean;
    storageKey?: string;
    total?: number;
}
declare function BaseTable({ children, columns: initialColumns, dense, loading, rowActions, rows, scrollable, selectable, storageKey, total, }: BaseTableProps): JSX.Element;
export default BaseTable;
