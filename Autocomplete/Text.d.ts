import type { ChangeEventHandler, FocusEventHandler, Ref } from 'react';
import React from 'react';
import type SvgIcon from '../SvgIcon/SvgIcon';
import type { TextInputColor, TextInputSize, TextInputVariant } from '../TextInput/styles';
export type TextProps = {
    /**
     * Whether to show a clear button to reset the input value.
     * This option is only applicable to the select mode (when `select` prop is set to `true`)
     * @default false
     */
    clearable?: boolean;
    /**
     * The color scheme of the text input
     */
    color: TextInputColor;
    /**
     * Custom data attributes to be added to the input element
     */
    dataSet?: Record<string, string | undefined>;
    /**
     * The default value displayed in the visible input field
     */
    defaultDisplayValue?: string;
    /**
     * The initial value for the hidden text input
     * This value is not displayed in the visible input field, but is used to initialize the selections
     * @default ''
     */
    defaultValue?: string;
    /**
     * If true, the input is disabled
     */
    disabled?: boolean;
    /**
     * Icon or text to display at the end of the input
     */
    endAdornment?: typeof SvgIcon | string;
    /**
     * Whether the input is in an error state
     */
    error?: boolean;
    /**
     * Additional descriptive text or error text to display below the input
     */
    helperText?: string;
    /**
     * Reference to the hidden input element containing the value
     */
    inputRef?: Ref<HTMLInputElement>;
    /**
     * Whether the autocomplete is rendered within a menu
     */
    inMenu?: boolean;
    /**
     * Reference to the visible input element
     */
    displayRef?: Ref<HTMLInputElement>;
    /**
     * The label for the input element
     */
    label: string;
    /**
     * The name attribute for the input element
     */
    name?: string;
    /**
     * Callback fired when the input loses focus
     */
    onBlur?: FocusEventHandler<HTMLInputElement>;
    /**
     * Callback fired when the input value changes
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Callback fired when the input receives focus
     */
    onFocus?: FocusEventHandler<HTMLInputElement>;
    /**
     * The size of the text input
     */
    size?: TextInputSize;
    /**
     * Icon or text to display at the start of the input
     */
    startAdornment?: typeof SvgIcon | string;
    /**
     * The visual style variant of the text input
     */
    variant?: TextInputVariant;
};
declare const _default: React.ForwardRefExoticComponent<TextProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default _default;
