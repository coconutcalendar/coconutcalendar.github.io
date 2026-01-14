import type { ChangeEvent, ReactNode, Ref } from 'react';
import type SvgIcon from '../SvgIcon/SvgIcon';
import type { TextInputColor, TextInputSize, TextInputVariant } from '../TextInput/styles';
export type TextProps = {
    /** The color scheme of the text input */
    color?: TextInputColor;
    /** Custom data attributes to be applied to the component */
    dataSet?: Record<string, string | undefined>;
    /** The initial value of the select input */
    defaultValue?: string;
    /**
     * If true, the select input is disabled
     */
    disabled?: boolean;
    /** Ref for the display input element */
    displayInputRef: Ref<HTMLInputElement>;
    /**
     * Whether the select input is in an error state
     */
    error?: boolean;
    /**
     * Additional descriptive text or error text to display below the input
     */
    helperText?: string;
    /**
     * Reference to the hidden input element containing the value of the selection
     */
    inputRef: Ref<HTMLInputElement>;
    /**
     * The label for the input element
     */
    label: string;
    /**
     * The name attribute for the input element
     */
    name?: string;
    /** Callback fired when the selected value changes.
     * @param event - The change event
     * @param actions - An object containing action functions like `revert`
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, actions: Record<string, () => void>) => void;
    /** Function that returns a callback to revert the selection programmatically */
    revert: () => () => void;
    /**
     * The size of the text input
     */
    size?: TextInputSize;
    /**
     * Icon or another element to display at the start of the input
     */
    startAdornment?: typeof SvgIcon | ReactNode;
    /** The visual style variant of the text input */
    variant?: TextInputVariant;
};
declare function Text({ color, dataSet, defaultValue, disabled, displayInputRef, error, helperText, inputRef, label, onChange, name, revert, size, startAdornment, variant, }: TextProps): JSX.Element;
export default Text;
