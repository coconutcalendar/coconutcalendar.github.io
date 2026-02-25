import type { MutableRefObject, ReactNode } from 'react';
import type SvgIcon from '../SvgIcon/SvgIcon';
import type { Directions } from '../utilities/directions';
import type { ClickRowActionEventHandler, GroupedTableColumns, Limit, TableRow } from './TableContext';
export type Actions = {
    type: ActionTypes.ChangeLimit;
    limit: Limit;
} | {
    checked: boolean;
    key: string;
    type: ActionTypes.FilterChange;
    value: string;
} | {
    type: ActionTypes.FirstPage;
} | {
    type: ActionTypes.MoveColumn;
    direction: Directions.Left | Directions.Right;
    key: string;
} | {
    type: ActionTypes.NextPage;
} | {
    type: ActionTypes.PreviousPage;
} | {
    type: ActionTypes.SortColumn;
    direction: Directions.Ascending | Directions.Descending;
    key: string;
} | {
    type: ActionTypes.ToggleColumn;
    key: string;
} | {
    type: ActionTypes.ToggleRow;
    key: string;
    selectionsRef?: MutableRefObject<string[]>;
} | {
    type: ActionTypes.ToggleRows;
    status: string;
    selectionsRef?: MutableRefObject<string[]>;
} | {
    type: ActionTypes.UpdateLoading;
    loading: boolean;
} | {
    type: ActionTypes.UpdateRows;
    rows: TableRow[];
    selectionsRef?: MutableRefObject<string[]>;
    total?: number;
} | {
    type: ActionTypes.UpdateRowActions;
    rowActions?: {
        enabled?: (row: TableRow) => boolean;
        label: ReactNode;
        handler: ClickRowActionEventHandler;
        startAdornment?: typeof SvgIcon;
    }[];
} | {
    type: ActionTypes.UpdateColumns;
    columns: GroupedTableColumns;
} | {
    type: ActionTypes.UpdateScrolling;
    isScrolling: boolean;
} | {
    type: ActionTypes.UpdateScrollable;
    scrollable: boolean;
} | {
    type: ActionTypes.UpdateDense;
    dense: boolean;
} | {
    type: ActionTypes.UpdateSelectable;
    selectable: boolean;
};
export declare enum ActionTypes {
    MoveColumn = 0,
    SortColumn = 1,
    ToggleColumn = 2,
    UpdateColumns = 3,
    FilterChange = 4,
    ToggleRow = 5,
    ToggleRows = 6,
    UpdateRows = 7,
    UpdateRowActions = 8,
    ChangeLimit = 9,
    FirstPage = 10,
    NextPage = 11,
    PreviousPage = 12,
    UpdateLoading = 13,
    UpdateScrolling = 14,
    UpdateScrollable = 15,
    UpdateDense = 16,
    UpdateSelectable = 17
}
