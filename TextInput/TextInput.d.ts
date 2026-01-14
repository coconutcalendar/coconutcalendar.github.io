import type { ChangeEvent, FocusEventHandler, KeyboardEventHandler, MouseEventHandler, ReactNode, Ref } from 'react';
import React from 'react';
import type { TextInputSize, TextInputVariant, TextInputColor } from './styles';
type EnterKeyHint = 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
type InputMode = 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
type SvgIconComponent = {
    uiName: 'SvgIcon';
    (props: {
        color: string;
    }): JSX.Element;
};
export interface TextInputProps {
    /**
     * Forces the input to appear in a focused state.
     * Used when TextInput is a part of more complex components like Select and DatePicketInput, where the real focus may shift to a different element.
     * @default false
     */
    appearFocused?: boolean;
    /**
     * Automatically focuses the input when the component mounts
     * @default false
     */
    autoFocus?: boolean;
    /**
     * The color scheme of the input
     * @default 'default'
     */
    color?: TextInputColor;
    /**
     * Ref for the visible container element.
     * Often used for ensuring that other elements (like dropdowns) are positioned relative to the input.
     */
    containerRef?: Ref<HTMLLabelElement>;
    /**
     * Custom data attributes to be added to the input element
     */
    dataSet?: Record<string, string | undefined>;
    /**
     * The initial value of the text input
     * @default ''
     */
    defaultValue?: string;
    /**
     * If true, the input is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Icon, text or another element to display at the end of the input
     */
    endAdornment?: SvgIconComponent | string | ReactNode;
    /**
     * Hint for the virtual keyboard's enter key
     */
    enterKeyHint?: EnterKeyHint;
    /**
     * Whether the input is in an error state
     * @default false
     */
    error?: boolean;
    /**
     * Additional descriptive text or error text to display below the input
     */
    helperText?: string;
    /**
     * Specifies the virtual keyboard type for mobile devices
     */
    inputMode?: InputMode;
    /**
     * Reference to the input or textarea element containing the value
     */
    inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement>;
    /**
     * The label for the input element
     */
    label: string;
    /**
     * Number of visible text lines for multiline input.
     * Only applies when `multiline` is true
     * @default 0
     */
    lines?: number;
    /**
     * Maximum value for number inputs
     */
    max?: string | number;
    /**
     * Maximum number of lines for multiline input.
     * Only applies when `multiline` is true
     * @default 0
     */
    maxLines?: number;
    /**
     * Minimum value for number inputs
     */
    min?: string | number;
    /**
     * Renders a textarea instead of an input
     * @default false
     */
    multiline?: boolean;
    /**
     * The name attribute for the input element
     */
    name?: string;
    /**
     * Callback fired when the input loses focus
     */
    onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    /**
     * Callback fired when the clear button is clicked
     */
    onClear?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Callback fired when the input receives focus
     */
    onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    /**
     * Callback fired when the input value changes
     */
    onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * Callback fired when the input is activated
     */
    onClick?: MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    /**
     * Callback fired when a key is pressed while the input is focused
     */
    onKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    /**
     * Makes the input read-only
     * @default false
     */
    readOnly?: boolean;
    /**
     * Marks the input as required
     * @default false
     */
    required?: boolean;
    /**
     * An internal prop, only used when the TextInput is part of Select component.
     * Changes onChange behavior to fire immediately instead of debounced and also uses the pointer cursor.
     * @default false
     */
    selectable?: boolean;
    /**
     * The size of the input
     * @default 'medium'
     */
    size?: TextInputSize;
    /**
     * Icon, text or another element to display at the start of the input
     */
    startAdornment?: SvgIconComponent | string | ReactNode;
    /**
     * Tab order index for keyboard navigation
     */
    tabIndex?: number;
    /**
     * The type attribute of the input element
     * @default 'text'
     */
    type?: TextInputType;
    /**
     * The visual style variant of the text input
     * @default 'outlined'
     */
    variant?: TextInputVariant;
}
type TextInputType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'color';
declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLDivElement>>;
export default TextInput;
