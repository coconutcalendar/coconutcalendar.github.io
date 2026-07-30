import type { CalendarDate, DateValue } from '@internationalized/date';
/**
 * Returns the given IANA timezone when it is valid, falling back to the
 * system timezone otherwise
 */
export declare function resolveTimezone(timezone?: string): string;
/**
 * Converts a native Date into a CalendarDate as read in the given timezone.
 * This is the inverse of toNativeDate, so echoing an onChange value back into
 * the controlled value prop round-trips to the same day rather than drifting.
 */
export declare function toCalendarDate(date: Date, timezone: string): CalendarDate;
/**
 * Converts a CalendarDate back into a native Date at midnight in the
 * provided timezone
 */
export declare function toNativeDate(value: DateValue, timezone: string): Date;
export interface CalendarConstraintProps {
    isDateUnavailable?: (date: DateValue) => boolean;
    maxValue?: CalendarDate;
    minValue?: CalendarDate;
}
/**
 * Builds the shared date-constraint props that both the segmented field and the
 * standalone Calendar hand to react-aria: the min/max bounds (converted into
 * the given timezone) and the unavailable-date predicate (wrapped to receive a
 * native Date). Inverted bounds are swapped rather than passed through, because
 * handing react-stately a minValue greater than its maxValue throws the
 * focused-date constraint into a render-phase update loop ("too many
 * re-renders"). Keys are omitted when their source is undefined, so the result
 * is safe to spread directly onto the calendar props.
 */
export declare function calendarConstraints({ isDateUnavailable, maxDate, minDate, }: {
    isDateUnavailable?: (date: Date) => boolean;
    maxDate?: Date;
    minDate?: Date;
}, timezone: string): CalendarConstraintProps;
