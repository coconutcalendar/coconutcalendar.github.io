import type { Dispatch, MutableRefObject, ReactNode } from 'react';
import type SvgIcon from '../SvgIcon/SvgIcon';
import { Directions } from '../utilities/directions';
import type { Actions } from './Actions';
export interface GroupedTableColumns {
    selected: TableColumn[];
    unselected: TableColumn[];
}
export type ColumnWidth = number;
export type Pagination = 'simple' | 'lengthAware';
export type Limit = 25 | 50 | 100;
export type FilterOptions = {
    columnKey: string;
    value: string;
    checked: boolean;
};
export type SortOptions = {
    direction: Directions.Ascending | Directions.Descending;
    key: keyof TableRow;
};
export type ClickRowActionEventHandler = (row: TableRow) => void;
export type FilterEventHandler = ({ columnKey, value, checked, }: FilterOptions) => void;
export type SelectEventHandler = (rows: TableRow[]) => void;
export type SortEventHandler = ({ direction, key }: SortOptions) => void;
export interface TableColumn {
    /**
     * Array of filter options for this column. Each filter option contains a label for display, a value for identification, and a checked state
     */
    filter?: {
        label: string;
        value: string;
        checked: boolean;
    }[];
    /**
     * Unique identifier for the column. Used to match column definitions with row data
     */
    key: string;
    /**
     * Whether the column is currently visible in the table
     */
    selected: boolean;
    /**
     * Current sort direction applied to this column. Only one column can have a sort direction at a time
     */
    sort?: Directions.Ascending | Directions.Descending;
    /**
     * Whether the column can be sorted by the user
     * @default false
     */
    sortable?: boolean;
    /**
     * The content to display in the column header
     */
    value: ReactNode;
    /**
     * The width configuration for the column supporting a percentage value.
     * If not provided, the column will size automatically based on its content.
     */
    width?: ColumnWidth;
}
export interface TableRow {
    [key: string]: string | ReactNode;
    id: string;
    selected?: boolean;
}
export interface TableState {
    columns: GroupedTableColumns;
    dense: boolean;
    isScrolling?: boolean;
    limit: Limit;
    loading: boolean;
    onFilterChange?: FilterEventHandler;
    onSelect?: SelectEventHandler;
    onSort?: SortEventHandler;
    page: number;
    pagination: Pagination;
    rowActions?: {
        enabled?: (row: TableRow) => boolean;
        label: ReactNode;
        handler: ClickRowActionEventHandler;
        startAdornment?: typeof SvgIcon;
    }[];
    rows: TableRow[];
    scrollable: boolean;
    selectionsRef?: MutableRefObject<string[]>;
    selectable: boolean;
    staticColumns: boolean;
    total?: number;
}
type UseTableValues = [TableState, Dispatch<Actions>];
/**
 * Partition columns into selected (visible) and unselected (hidden) groups
 *
 * @param columns
 * @returns GroupedTableColumns
 */
export declare const partition: (columns: TableColumn[]) => GroupedTableColumns;
/**
 * Populate columns from localStorage if available
 *
 * @param defaultColumns
 * @param initialRender
 * @param storageKey
 * @returns TableColumn[]
 */
export declare const populate: (defaultColumns: TableColumn[], initialRender: boolean, storageKey?: string) => TableColumn[];
export declare const runReducer: (state: TableState, action: Actions) => TableState;
export declare const TableContext: import("react").Context<UseTableValues | null>;
export declare const useTable: () => UseTableValues;
export {};
