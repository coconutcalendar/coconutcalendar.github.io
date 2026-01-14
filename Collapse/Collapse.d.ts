import type { PropsWithChildren } from 'react';
interface CollapseProps {
    /**
     * The direction of the flex layout when the collapse is open
     * @default 'col'
     */
    dir?: 'col' | 'row';
    /**
     * The id attribute of the collapse container element
     */
    id?: string;
    /**
     * Whether the collapse is currently open/visible
     * @default false
     */
    open?: boolean;
}
declare function Collapse({ children, dir, id, open, }: PropsWithChildren<CollapseProps>): JSX.Element | null;
export default Collapse;
