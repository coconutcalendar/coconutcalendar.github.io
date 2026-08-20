import type { ReactNode } from 'react';
import type { TextInputSize, TextInputVariant } from '../TextInput/styles';
export interface TimeInputProps {
    /**
     * The initially selected time as a 24-hour "HH:mm" string, ex "09:05" (uncontrolled)
     */
    defaultValue?: string | null;
    /**
     * Whether the input is disabled or not
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether the input is in an error state
     * @default false
     */
    error?: boolean;
    /**
     * The error message to display below the input while `error` is true
     */
    errorMessage?: ReactNode;
    /**
     * The descriptive text that sits below the input field. For errors, use
     * `errorMessage` combined with `error`
     */
    helperText?: ReactNode;
    /**
     * Display format of the input, 1:13pm or 13:13. The value of the input is always 24hr under the hood.
     * If this prop is not specified then it will default to the system's locale
     */
    hourCycle?: 12 | 24;
    /**
     * The label that sits at the top left of the input
     */
    label: ReactNode;
    /**
     * The name used when including this input in an HTML form.
     * Note that the submitted value is an ISO time with seconds, e.g. "09:05:00"
     */
    name?: string;
    /**
     * Callback invoked with the selected time as a 24-hour "HH:mm" string, or
     * null when the value is cleared. Only fires once every segment is filled in
     */
    onChange?: (value: string | null) => void;
    /**
     * Whether user input is required before form submission
     * @default false
     */
    required?: boolean;
    /**
     * The size of the input
     * @default 'medium'
     */
    size?: TextInputSize;
    /**
     * How validation is surfaced. 'aria' (the default) exposes validity to
     * assistive technology without blocking native form submission; 'native'
     * uses the browser's built-in form validation
     * @default 'aria'
     */
    validationBehavior?: 'aria' | 'native';
    /**
     * The selected time as a 24 hour format string, ex 19:05 (controlled)
     */
    value?: string | null;
    /**
     * The visual style variant of the input field
     * @default 'outlined'
     */
    variant?: TextInputVariant;
}
declare function TimeInput({ defaultValue, disabled, error, errorMessage, helperText, hourCycle, label, name, onChange, required, size, validationBehavior, value, variant, }: TimeInputProps): JSX.Element;
export default TimeInput;
