import type { ChangeEventHandler, Dispatch, FocusEventHandler, MouseEventHandler, MutableRefObject, PropsWithChildren, Ref } from 'react';
import type SvgIcon from '../SvgIcon/SvgIcon';
import type { TextInputColor, TextInputSize, TextInputVariant } from '../TextInput/styles';
import type { Actions } from './Actions';
export declare enum DisplayModes {
    Always = "always",
    WithTerm = "with-term",
    WithoutTerm = "without-term"
}
export interface AutocompleteProps {
    /**
     * Whether the autocomplete allows creating new values that don't exist in suggestions.
     * When it's set to true and there are no matching suggestions, an option to add the current input value will be shown
     * @default false
     */
    creatable?: boolean;
    /**
     * Whether to show a clear button to reset the input value.
     * This option is only applicable to the select mode (when `select` prop is set to `true`)
     * @default false
     */
    clearable?: boolean;
    /**
     * The color scheme of the text input
     * @default 'default'
     */
    color?: TextInputColor;
    /**
     * Custom data attributes to be added to the input element
     */
    dataSet?: Record<string, string | undefined>;
    /**
     * The default value displayed in the visible input field
     * @default ''
     */
    defaultDisplayValue?: string;
    /**
     * The initial value for the hidden text input
     * This value is not displayed in the visible input field, but is used to initialize the selections
     * @default ''
     */
    defaultValue?: string;
    /**
     * Reference to the visible input element
     */
    displayRef?: Ref<HTMLInputElement>;
    /**
     * If true, the autocomplete is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Icon or text to display at the end of the input
     */
    endAdornment?: typeof SvgIcon | string;
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
     * Reference to the hidden input element containing the value
     */
    inputRef?: Ref<HTMLInputElement>;
    /**
     * The label for the input element
     */
    label: string;
    /**
     * Whether the autocomplete is in a loading state.
     * When set to true, a loading indicator is shown instead of suggestions
     * @default false
     */
    loading?: boolean;
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
    onChange: ChangeEventHandler<HTMLInputElement>;
    /**
     * Callback fired when the input receives focus
     */
    onFocus?: FocusEventHandler<HTMLInputElement>;
    /**
     * Callback fired when a suggestion is selected
     */
    onSelect?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Whether the autocomplete behaves as a select dropdown.
     * In this mode, selecting a suggestion sets the input value to the selected option's value.
     * @default false
     */
    select?: boolean;
    /**
     * The size of the text input
     * @default 'medium'
     */
    size?: TextInputSize;
    /**
     * Icon or text to display at the start of the input
     */
    startAdornment?: typeof SvgIcon | string;
    /**
     * The visual style variant of the text input
     * @default 'outlined'
     */
    variant?: TextInputVariant;
}
type AutocompleteState = {
    displayInputRef: MutableRefObject<HTMLInputElement>;
    groups: Record<string, {
        display: DisplayModes;
        hasChildren: boolean;
    }>;
    inputRef: MutableRefObject<HTMLInputElement>;
    label: string;
    minWidth: string;
    multi: boolean;
    onSelectRef: MutableRefObject<MouseEventHandler<HTMLButtonElement> | undefined>;
    searching: boolean;
    select: boolean;
    selectingRef: MutableRefObject<boolean>;
    value: string;
};
type UseAutocompleteValues = [AutocompleteState, Dispatch<Actions>];
export declare const useAutocomplete: () => UseAutocompleteValues;
declare function Autocomplete({ creatable, clearable, children, color, dataSet, defaultDisplayValue, defaultValue, disabled, displayRef, endAdornment, error, helperText, inputRef, label, loading, name, onBlur, onChange, onFocus, onSelect, select, size, startAdornment, variant, }: PropsWithChildren<AutocompleteProps>): JSX.Element;
declare namespace Autocomplete {
    var Group: typeof import("./Group").default;
    var Suggestion: ({ children, disabled, displayValue, value, ...rest }: PropsWithChildren<SuggestionProps>) => JSX.Element;
}
interface SuggestionProps {
    disabled?: boolean;
    value: string;
    displayValue?: string;
}
export default Autocomplete;
