import type { Ref } from 'react';
import type { ChangeEvent } from '../DatePicker/DatePicker';
import { Modes } from '../DatePicker/DatePicker';
import type { TextInputSize, TextInputVariant } from '../TextInput/styles';
type DatePickerInputProps = {
    /**
     * Reference to a button element that triggers clearing the selected date(s)
     */
    clearRef?: Ref<HTMLButtonElement>;
    /**
     * When true, displays a condensed calendar view showing only one week instead of the full month
     * @default false
     */
    condensed?: boolean;
    /**
     * If true, the input is disabled
     * @default false
     */
    disabled?: boolean;
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
     * The initially selected date(s).
     * Can be a single Date for day mode, a tuple [startDate, endDate] for range/week modes, or null for no initial selection
     * @default new Date()
     */
    initialDate?: [Date, Date] | Date | null;
    /**
     * IANA timezone identifier (e.g., 'America/New_York').
     * Defaults to the user's local timezone if not provided or invalid
     */
    initialTimezone?: string;
    /**
     * Reference to the input element containing the value
     * @default null
     */
    inputRef?: Ref<HTMLInputElement>;
    /**
     * The label for the input element
     */
    label: string;
    /**
     * Selection mode for the date picker: Day=0 (single date), Week=1 (full week), or Range=2 (custom date range)
     * @default Modes.Day
     */
    mode?: Modes;
    /**
     * The name attribute for the input element
     */
    name?: string;
    /**
     * Callback fired when the date value changes
     */
    onChange?: (event: ChangeEvent) => void;
    /**
     * The size of the text input
     * @default 'medium'
     */
    size?: TextInputSize;
    /**
     * The visual style variant of the input field
     * @default 'outlined'
     */
    variant?: TextInputVariant;
};
export type DayPickerInputProps = {
    onChange?: (event: SingleDateChangeEvent) => void;
} & Omit<DatePickerInputProps, 'onChange'>;
type MultiDateChangeEvent = {
    target: {
        value: Date[];
    };
};
type RangePickerInputProps = {
    onChange?: (event: MultiDateChangeEvent) => void;
} & Omit<DatePickerInputProps, 'onChange'>;
type SingleDateChangeEvent = {
    target: {
        value: Date;
    };
};
type WeekPickerInputProps = {
    onChange?: (event: MultiDateChangeEvent) => void;
} & Omit<DatePickerInputProps, 'onChange'>;
declare function DayPickerInput({ clearRef, condensed, disabled, error, helperText, initialDate, initialTimezone, inputRef, label, name, onChange, size, variant, }: DayPickerInputProps): JSX.Element;
declare function RangePickerInput({ clearRef, condensed, disabled, error, helperText, initialDate, initialTimezone, inputRef, label, name, onChange, size, variant, }: RangePickerInputProps): JSX.Element;
declare function WeekPickerInput({ clearRef, condensed, disabled, error, helperText, initialDate, initialTimezone, inputRef, label, name, onChange, size, variant, }: WeekPickerInputProps): JSX.Element;
export { DayPickerInput, RangePickerInput, WeekPickerInput };
