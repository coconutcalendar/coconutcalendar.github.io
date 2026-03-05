import type { Dispatch, MutableRefObject, ReactElement, ReactNode } from 'react';
import type SvgIcon from '../SvgIcon/SvgIcon';
import { Directions } from '../utilities/directions';
import type { Actions } from './Actions';
import type { ColumnWidth } from './ColumnHeader';
import PaginationComponent from './Pagination';
export interface GroupedTableColumns {
    selected: TableColumn[];
    unselected: TableColumn[];
}
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
type FilterEventHandler = ({ columnKey, value, checked }: FilterOptions) => void;
type SelectEventHandler = (rows: TableRow[]) => void;
type SortEventHandler = ({ direction, key }: SortOptions) => void;
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
export interface TableProps {
    /**
     * Child components to render within the table's header.
     * Can include `Table.Header` and `Table.Toolbar` components.
     */
    children?: ReactElement | ReactElement[];
    /**
     * Array of column definitions that specify the table structure, including column keys, labels, sorting, filtering, and visibility
     */
    columns: TableColumn[];
    /**
     * Displays table in a denser (compact) layout with reduced padding
     * @default false
     */
    dense?: boolean;
    /**
     * Maximum number of rows to display per page
     * @default 50
     */
    limit?: Limit;
    /**
     * Whether the table is in a loading state
     * @default false
     */
    loading?: boolean;
    /**
     * Callback function invoked when a column filter option is toggled
     */
    onFilterChange?: FilterEventHandler;
    /**
     * Callback function invoked when a column is sorted
     */
    onSort?: SortEventHandler;
    /**
     * Callback function invoked when rows are selected or deselected
     */
    onSelect?: SelectEventHandler;
    /**
     * Type of pagination to display for the table.
     * `simple`: Shows basic previous/next navigation without total page count: e.g. 25-50 of 51+. Note, when using 'simple' pagination, you need to provide one extra row to indicate if there is a next page.
     * `lengthAware': Shows full pagination with total count: e.g. 25-50 of 123
     * @default 'lengthAware'
     */
    pagination?: Pagination;
    /**
     * Array of action items to display in a menu for each row
     */
    rowActions?: {
        enabled?: (row: TableRow) => boolean;
        label: ReactNode;
        handler: ClickRowActionEventHandler;
        startAdornment?: typeof SvgIcon;
    }[];
    /**
     * Array of row data objects. Each row must have an "id" property and properties matching column keys
     */
    rows: TableRow[];
    /**
     * Enables vertical scrolling for the table body when content exceeds the viewport height.
     * When `true`, the table will only expand until the end of the viewport. If the table starts below the bottom of the viewport, the table will behave as if `scrollable` is set to false. Use this behaviour when the table is the main content on the page.
     * When `false`, the table will expand to fit its content. Use this behaviour when the table is part of a larger layout or there are multiple tables on the page.
     * @default true
     */
    scrollable?: boolean;
    /**
     * Enables row selection with checkboxes. When true, adds a checkbox column and enables bulk selection
     * @default false
     */
    selectable?: boolean;
    /**
     * Mutable ref object to track selected row IDs. Used for controlled selection state
     */
    selectionsRef?: MutableRefObject<string[]>;
    /**
     * Key used to persist column column visibility and order preferences in local storage.
     * If provided, the table will save the following information for the columns: whether they are visible or hidden, sorting and filtering info.
     */
    storageKey?: string;
    /**
     * Total number of rows available (for pagination). Defaults to rows.length if not provided
     * @default rows.length
     */
    total?: number;
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
    total?: number;
}
type UseTableValues = [TableState, Dispatch<Actions>];
export declare const useTable: () => UseTableValues;
declare function Table({ children, columns: initialColumns, dense, limit, loading, onFilterChange, onSelect, onSort, pagination, rowActions, rows, scrollable, selectable, selectionsRef, storageKey, total, }: TableProps): JSX.Element;
declare namespace Table {
    var BulkActions: typeof import("./BulkActions").default;
    var GlobalActions: typeof import("./GlobalActions").default;
    var Header: typeof import("./Header").default;
    var Pagination: typeof PaginationComponent;
    var Search: typeof import("./Search").default;
    var Title: typeof import("./Title").default;
    var Toolbar: typeof import("./Toolbar").default;
}
export default Table;
