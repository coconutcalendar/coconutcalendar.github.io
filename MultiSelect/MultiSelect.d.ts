import type { ChangeEventHandler, Dispatch, FocusEventHandler, PropsWithChildren, ReactNode, Ref, SetStateAction } from 'react';
import type SvgIcon from '../SvgIcon/SvgIcon';
import type { TextInputSize, TextInputVariant } from '../TextInput/styles';
import type { Actions, MultiSelectValue } from './Actions';
export { DisplayModes } from '../Autocomplete/Autocomplete';
export interface MultiSelectProps {
    /** The default value displayed in the visible input field
     * @default ''
     */
    defaultDisplayValue?: string;
    /**
     * The initial selected values for the multi-select component.
     * This value is not displayed in the visible input field, but is used to initialize the selections
     * @default {}
     */
    defaultValue?: MultiSelectValue;
    /**
     * Whether to use a compact display mode that shows an inline summary instead of individual selections
     * @default false
     */
    dense?: boolean;
    /**
     * Reference to the visible input element
     */
    displayRef?: Ref<HTMLInputElement>;
    /**
     * If true, the multi-select is disabled
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
     * Reference to the hidden input element containing the value of the selections
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
     * Callback fired when selections are confirmed (on blur or menu close)
     */
    onSelect: (value: MultiSelectValue) => unknown;
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
     * The total number of available options.
     * Used for displaying "All X selected" when all options have been selected
     * @default -1
     */
    total?: number;
    /**
     * The visual style variant of the input field
     * @default 'outlined'
     */
    variant?: TextInputVariant;
}
type MultiSelectState = {
    actions: ReactNode;
    handleClose: () => void;
    selections: MultiSelectValue;
    setDisplayedSuggestionsValues: Dispatch<SetStateAction<MultiSelectValue>>;
};
type UseMultiSelectValues = [MultiSelectState, Dispatch<Actions>];
export declare const useMultiSelect: () => UseMultiSelectValues;
declare function MultiSelect({ children, defaultDisplayValue, defaultValue, dense, disabled, displayRef, endAdornment: endAdornmentProp, error, helperText, inputRef, label, loading, name, onBlur, onChange, onFocus, onSelect, size, startAdornment, total, variant, }: PropsWithChildren<MultiSelectProps>): JSX.Element;
declare namespace MultiSelect {
    var Group: typeof import("../Autocomplete/Group").default;
    var Suggestion: ({ children, disabled, displayValue, value, }: PropsWithChildren<SuggestionProps>) => JSX.Element;
}
interface SuggestionProps {
    /**
     * If true, the suggestion option is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Value associated with the suggestion option
     */
    value: string;
    /**
     * The display text to show for the suggestion.
     * If not provided, the children will be used as the display value
     */
    displayValue?: string;
}
export default MultiSelect;
