import { CalendarDate } from '@internationalized/date';
import type { DateValue } from '@internationalized/date';
export declare function isValidTimezone(timezone?: string): boolean;
/**
 * Returns the given IANA timezone when it is valid, falling back to the
 * system timezone otherwise
 */
export declare function resolveTimezone(timezone?: string): string;
/**
 * Converts a native Date into a CalendarDate using the date parts as the
 * user would read them locally, mirroring how the legacy DatePicker
 * interpreted incoming dates
 */
export declare function toCalendarDate(date: Date): CalendarDate;
/**
 * Converts a CalendarDate back into a native Date at midnight in the
 * provided timezone
 */
export declare function toNativeDate(value: DateValue, timezone: string): Date;
