import type { TextInputSize, TextInputVariant } from '../TextInput/styles';
import type { SelectedWeek, RaDatePickerMode } from './CalendarBase';
interface RaDatePickerBaseProps {
    /**
     * When true, displays a condensed calendar view showing only one week
     * instead of the full month
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
     * Callback that is called for each visible date. Returning true marks the
     * date as unavailable so it cannot be selected
     */
    isDateUnavailable?: (date: Date) => boolean;
    /**
     * The label for the input element
     */
    label: string;
    /**
     * The latest date that a user may select
     */
    maxDate?: Date;
    /**
     * The earliest date that a user may select
     */
    minDate?: Date;
    /**
     * The name of the input element, used when submitting an HTML form
     */
    name?: string;
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
     * IANA timezone identifier (e.g. 'America/New_York') used to determine
     * today's date and the dates emitted through onChange.
     * Defaults to the user's local timezone if not provided or invalid
     */
    timezone?: string;
    /**
     * The visual style variant of the input field
     * @default 'outlined'
     */
    variant?: TextInputVariant;
}
export interface RaDatePickerDayProps extends RaDatePickerBaseProps {
    /**
     * The initially selected date (uncontrolled)
     */
    defaultValue?: Date | null;
    /**
     * Selection mode for the date picker
     * @default 'day'
     */
    mode?: 'day';
    /**
     * Callback invoked with the selected date when it changes, or null when
     * the value is cleared
     */
    onChange?: (date: Date | null) => void;
    /**
     * The selected date (controlled)
     */
    value?: Date | null;
}
export interface RaDatePickerWeekProps extends RaDatePickerBaseProps {
    /**
     * The initially selected week (uncontrolled). A single date selects the
     * week containing it
     */
    defaultValue?: Date | [Date, Date] | null;
    mode: 'week';
    /**
     * Callback invoked with the start and end dates of the selected week
     */
    onChange?: (range: [Date, Date]) => void;
    /**
     * The selected week (controlled). A single date selects the week
     * containing it
     */
    value?: Date | [Date, Date] | null;
}
export interface RaDatePickerRangeProps extends RaDatePickerBaseProps {
    /**
     * The initially selected date range (uncontrolled)
     */
    defaultValue?: [Date, Date] | null;
    mode: 'range';
    /**
     * Callback invoked with the start and end dates of the selected range, or
     * null when the value is cleared
     */
    onChange?: (range: [Date, Date] | null) => void;
    /**
     * The selected date range (controlled)
     */
    value?: [Date, Date] | null;
}
export type RaDatePickerProps = RaDatePickerDayProps | RaDatePickerRangeProps | RaDatePickerWeekProps;
declare function RaDatePicker(props: RaDatePickerProps): JSX.Element;
export type { RaDatePickerMode, SelectedWeek };
export default RaDatePicker;
