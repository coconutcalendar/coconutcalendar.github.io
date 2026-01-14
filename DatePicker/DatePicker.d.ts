import type { Ref, RefObject } from 'react';
export interface ChangeEvent {
    target: {
        value: Date | (Date | null)[] | null;
    };
}
export interface DatePickerProps {
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
     * Only used internally inside the `DatePickerInput` component
     */
    inputRef?: RefObject<HTMLInputElement>;
    /**
     * Only used internally inside the `DatePickerInput` component
     */
    inputValueRef?: RefObject<string>;
    /**
     * Selection mode for the date picker: Day=0 (single date), Week=1 (full week), or Range=2 (custom date range)
     * @default Modes.Day
     */
    mode?: Modes;
    /**
     * Callback function invoked when the selected date(s) change
     */
    onChange?: (event: ChangeEvent) => void;
    /**
     * Whether the date picker is currently open/visible
     */
    open?: boolean;
}
export declare enum Modes {
    Day = 0,
    Week = 1,
    Range = 2
}
declare function DatePicker({ clearRef, condensed, initialDate, initialTimezone, inputRef, inputValueRef, mode, onChange, open, }: DatePickerProps): JSX.Element;
export default DatePicker;
