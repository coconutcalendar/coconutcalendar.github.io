import type { MutableRefObject, ReactElement, ReactNode } from 'react';
import PaginationComponent from './Pagination';
import type { ColumnWidth, Limit, Pagination, SelectEventHandler, TableRow } from './TableContext';
export interface BasicTableColumn {
    /**
     * Unique identifier for the column. Used to match column definitions with row data
     */
    key: string;
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
export interface BasicTableProps {
    /**
     * Child components to render within the table's header.
     * Can include `Table.Header` and `Table.Toolbar` components.
     */
    children?: ReactElement | ReactElement[];
    /**
     * Array of column definitions that specify the table structure, including column keys, labels, and widths
     */
    columns: BasicTableColumn[];
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
     * Total number of rows available (for pagination). Defaults to rows.length if not provided
     * @default rows.length
     */
    total?: number;
}
declare function BasicTable({ children, columns: initialColumns, dense, limit, loading, onSelect, pagination, rows, scrollable, selectable, selectionsRef, total, }: BasicTableProps): JSX.Element;
declare namespace BasicTable {
    var BulkActions: typeof import("./BulkActions").default;
    var GlobalActions: typeof import("./GlobalActions").default;
    var Header: typeof import("./Header").default;
    var Pagination: typeof PaginationComponent;
    var Search: typeof import("./Search").default;
    var Title: typeof import("./Title").default;
    var Toolbar: typeof import("./Toolbar").default;
}
export default BasicTable;
