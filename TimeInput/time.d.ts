import type { Time } from '@internationalized/date';
/**
 * Converts a HH:mm string into the time value used by React Aria
 *
 * @param value
 */
export declare function toTime(value: string | null | undefined): Time | null;
/**
 * Converts an hour and minute back to a HH:mm string
 *
 * @param value
 */
export declare function toTimeString(value: {
    hour: number;
    minute: number;
} | null): string | null;
