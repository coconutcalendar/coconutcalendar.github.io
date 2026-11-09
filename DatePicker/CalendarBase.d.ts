import type { CalendarMode, FirstDayOfWeek, SelectedWeek } from './types';
export declare const calendarContainerClasses = "max-w-xs p-6 font-sans rounded bg-white-100 shadow-1";
/**
 * Determines the first day of the week for the calendar. An explicit
 * override always wins, otherwise the legacy behavior is preserved where
 * specific navigator languages (e.g. fr-CA) start the week on Sunday even
 * though the base locale does not. Returning undefined defers to the
 * locale's default
 */
export declare function useFirstDayOfWeek(override?: FirstDayOfWeek): FirstDayOfWeek | undefined;
/**
 * The month navigation header shared between the day, week and range
 * calendars. When condensed, the previous/next buttons page one week at a
 * time (by moving the focused date) instead of one month, since the grid only
 * shows a single week
 */
export declare function CalendarHeader({ condensed, }: {
    condensed?: boolean;
}): JSX.Element;
/**
 * A visually hidden live region that announces the week containing the
 * focused date (e.g. "Week of January 12th, 2020") as the user navigates in
 * week mode. React Aria labels each cell with its own date only, so without
 * this a screen reader user never hears which week their keystroke landed on.
 * The text only changes when focus crosses into a different week, so moving
 * between days of the same week stays silent
 */
export declare function WeekAnnouncement({ firstDayOfWeek, }: {
    firstDayOfWeek?: FirstDayOfWeek;
}): JSX.Element;
interface CalendarCellsProps {
    /**
     * When true, days outside the current month are not dimmed since a
     * condensed calendar only ever renders a single week
     */
    condensed?: boolean;
    mode: CalendarMode;
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
