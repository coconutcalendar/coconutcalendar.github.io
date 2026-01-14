import type { PropsWithChildren } from 'react';
import type { ColumnWidth } from './ColumnHeader';
interface CellProps {
    /**
     * Whether the cell is selected
     * @default false
     */
    selected?: boolean;
    /**
     * Whether the cell should stick to the right side of the table.
     * Used for columns that contain row actions or checkboxes to select rows
     * @default false
     */
    sticky?: boolean;
    /**
     * The width of the column supporting a percentage value.
     * If not provided, the column will size automatically based on its content.
     */
    width?: ColumnWidth;
}
declare function Cell({ children, selected, sticky, width, }: PropsWithChildren<CellProps>): JSX.Element;
export default Cell;
