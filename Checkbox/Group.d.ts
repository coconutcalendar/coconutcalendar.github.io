import type { PropsWithChildren } from 'react';
type GroupDirection = 'row' | 'col';
export interface CheckboxGroupProps {
    /**
     * If a visible label isn't specified for a CheckboxGroup, an aria-label must
     * be provided for accessibility
     */
    ariaLabel?: string;
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
declare function Group({ children, ariaLabel, error, helperText, direction, }: PropsWithChildren<CheckboxGroupProps>): JSX.Element;
export default Group;
