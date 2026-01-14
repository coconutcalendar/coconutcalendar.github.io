import type { AriaAttributes, PropsWithChildren, ReactNode } from 'react';
import type { ListNestedLevel } from './ListContext';
export interface ListProps {
    /**
     * Accessible label for the list.
     * Only use if further context is needed and/or subheader is not present
     */
    'aria-label'?: AriaAttributes['aria-label'];
    /**
     * List items to be rendered within the list
     */
    children?: ReactNode | ReactNode[];
    /**
     * If true, reduces vertical padding for a more compact appearance
     * @default false
     */
    dense?: boolean;
    /**
     * The nesting level of the list: None=0, One=1, Two=2, Three=3, Four=4. Used for visual indentation
     * @default 0
     */
    nested?: ListNestedLevel;
    /**
     * Optional header text displayed above the list.
     * If the header is not present, you may provide an `aria-label` for accessibility
     */
    subheader?: ReactNode;
}
declare function List({ 'aria-label': label, children, dense, nested, subheader, }: PropsWithChildren<ListProps>): JSX.Element | null;
declare namespace List {
    var Item: typeof import("./Item").default;
}
export default List;
