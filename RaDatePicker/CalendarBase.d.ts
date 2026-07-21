import type { CalendarDate } from '@internationalized/date';
export type RaDatePickerMode = 'day' | 'week' | 'range';
export interface SelectedWeek {
    end: CalendarDate;
    start: CalendarDate;
}
export declare const calendarContainerClasses = "max-w-xs p-6 font-sans rounded bg-white-100 shadow-1";
export type FirstDayOfWeek = 'fri' | 'mon' | 'sat' | 'sun' | 'thu' | 'tue' | 'wed';
/**
 * Determines the first day of the week override for the current locale,
 * preserving the legacy behavior where specific navigator languages
 * (e.g. fr-CA) start the week on Sunday even though the base locale does not
 */
export declare function useFirstDayOfWeek(): FirstDayOfWeek | undefined;
/**
 * The month navigation header shared between the day, week and range
 * calendars. Reads the calendar state from React Aria's context so it works
 * inside both Calendar and RangeCalendar
 */
export declare function CalendarHeader(): JSX.Element;
interface CalendarCellsProps {
    /**
     * When true, days outside the current month are not dimmed since a
     * condensed calendar only ever renders a single week
     */
    condensed?: boolean;
    mode: RaDatePickerMode;
    /**
     * The currently selected week, only used to highlight the entire row in
     * week mode
     */
    selectedWeek?: SelectedWeek | null;
    timezone: string;
}
/**
 * The weekday header row and date cells shared between the day, week and
 * range calendars
 */
export declare function CalendarCells({ condensed, mode, selectedWeek, timezone, }: CalendarCellsProps): JSX.Element;
export {};
