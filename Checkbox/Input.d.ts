import type { ChangeEventHandler, PropsWithChildren, Ref } from 'react';
export interface CheckboxProps {
    /**
     * Accessible label for the checkbox input
     */
    'aria-label'?: string;
    /**
     * The color scheme of the checkbox.
     * Affects the checkbox color and hover/focus states
     * @default 'primary'
     */
    color?: CheckboxColor;
    /**
     * When true, reduces padding around the checkbox for tighter spacing
     */
    constrained?: boolean;
    /**
     * Used for column filters in Table component
     */
    'data-key'?: string;
    /**
     * Initial checked state of the checkbox
     * @default false
     */
    defaultChecked?: boolean;
    /**
     * If true, the checkbox is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * If true, sets aria-invalid on the checkbox
     * @default: false
     */
    error?: boolean;
    /**
     * Additional descriptive text to display below the checkbox label
     */
    helperText?: string;
    /** When true, displays the checkbox in an indeterminate state (partially checked)
     * @default false
     */
    indeterminate?: boolean;
    /**
     * Reference to the underlying input element
     * @default null
     */
    inputRef?: Ref<HTMLInputElement>;
    /**
     * The name attribute for the checkbox input element
     */
    name?: string;
    /**
     * The size of the checkbox
     * @default 'small'
     */
    size?: CheckboxSize;
    /** Callback function triggered when the checkbox state changes */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Tab order index for keyboard navigation
     */
    tabIndex?: number;
    /**
     * The value of the checkbox.
     * Submitted with the checkbox's name when the form is submitted
     */
    value?: string;
}
type CheckboxColor = 'error' | 'primary' | 'secondary';
type CheckboxSize = 'medium' | 'small';
declare function Input({ 'aria-label': label, children, color, constrained, 'data-key': key, defaultChecked, disabled, error, helperText, indeterminate, inputRef, name, onChange, size, tabIndex, value, }: PropsWithChildren<CheckboxProps>): JSX.Element;
export default Input;
