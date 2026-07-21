import type { RaDatePickerMode } from './CalendarBase';
interface RaCalendarBaseProps {
    /**
     * Whether the calendar grid should receive focus when it first renders
     * @default false
     */
    autoFocus?: boolean;
    /**
     * When true, displays a condensed calendar view showing only one week
     * instead of the full month
     * @default false
     */
    condensed?: boolean;
    /**
     * Callback that is called for each visible date. Returning true marks the
     * date as unavailable so it cannot be selected
     */
    isDateUnavailable?: (date: Date) => boolean;
    /**
     * The latest date that a user may select
     */
    maxDate?: Date;
    /**
     * The earliest date that a user may select
     */
    minDate?: Date;
    /**
     * IANA timezone identifier (e.g. 'America/New_York') used to determine
     * today's date and the dates emitted through onChange.
     * Defaults to the user's local timezone if not provided or invalid
     */
    timezone?: string;
}
export interface RaCalendarDayProps extends RaCalendarBaseProps {
    /**
     * The initially selected date (uncontrolled)
     */
    defaultValue?: Date | null;
    /**
     * Selection mode for the calendar
     * @default 'day'
     */
    mode?: 'day';
    /**
     * Callback invoked with the selected date when it changes
     */
    onChange?: (date: Date) => void;
    /**
     * The selected date (controlled)
     */
    value?: Date | null;
}
export interface RaCalendarWeekProps extends RaCalendarBaseProps {
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
export interface RaCalendarRangeProps extends RaCalendarBaseProps {
    /**
     * The initially selected date range (uncontrolled)
     */
    defaultValue?: [Date, Date] | null;
    mode: 'range';
    /**
     * Callback invoked with the start and end dates of the selected range
     */
    onChange?: (range: [Date, Date]) => void;
    /**
     * The selected date range (controlled)
     */
    value?: [Date, Date] | null;
}
export type RaCalendarProps = RaCalendarDayProps | RaCalendarRangeProps | RaCalendarWeekProps;
declare function RaCalendar(props: RaCalendarProps): JSX.Element;
export type { RaDatePickerMode };
export default RaCalendar;
