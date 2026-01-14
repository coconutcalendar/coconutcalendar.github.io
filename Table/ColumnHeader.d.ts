import type { PropsWithChildren } from 'react';
import { Directions } from '../utilities/directions';
export type ColumnWidth = number;
export declare const getWidthStyle: (width?: ColumnWidth) => {
    width?: string | undefined;
};
interface ColumnHeaderProps {
    /**
     * Used for column filters
     */
    'data-key'?: string;
    /**
     * If true, reduces vertical padding for a more compact appearance
     * @default false
     */
    dense?: boolean;
    /**
     * The sort direction for the column
     */
    sort?: Directions.Ascending | Directions.Descending;
    /**
     * Whether the column header should stick to the right side of the table.
     * Used for columns that contain row actions or checkboxes to select rows
     * @default false
     */
    sticky?: boolean;
    /**
     * Tab order index for keyboard navigation
     * @default -1
     */
    tabIndex?: number;
    /**
     * The width of the column supporting a percentage value.
     * If not provided, the column will size automatically based on its content.
     */
    width?: ColumnWidth;
}
declare function ColumnHeader({ 'data-key': key, dense, children, sort, sticky, tabIndex, width, }: PropsWithChildren<ColumnHeaderProps>): JSX.Element;
export default ColumnHeader;
