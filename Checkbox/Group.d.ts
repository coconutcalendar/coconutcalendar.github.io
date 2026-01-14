import type { PropsWithChildren } from 'react';
type GroupDirection = 'row' | 'col';
export interface CheckboxGroupProps {
    /**
     * The layout direction of the checkbox group.
     * Use `row` for horizontal, `col` for vertical
     * @default 'col'
     */
    direction?: GroupDirection;
    /**
     * Whether the checkbox group is in an error state
     * @default false
     * */
    error?: boolean;
    /**
     * Additional descriptive text or error text to display below the checkbox group
     * @default ''
     */
    helperText?: string;
}
declare function Group({ children, error, helperText, direction, }: PropsWithChildren<CheckboxGroupProps>): JSX.Element;
export default Group;
