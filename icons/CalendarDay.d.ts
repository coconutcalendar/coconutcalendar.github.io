interface CalendarDayProps {
    /**
     * The day of the month to show in the well. When omitted, a question mark
     * is shown instead, e.g. for a date picker anchor with no date selected
     */
    day?: number;
}
/**
 * The Calendar glyph with the date grid replaced by an open well showing a
 * day of the month, e.g. for a date picker anchor that reflects the
 * selected date, or a question mark when no day is provided. Keep the
 * rendered size at 24px or larger so two digit days stay legible
 */
declare function CalendarDay({ day }: CalendarDayProps): JSX.Element;
declare namespace CalendarDay {
    var uiName: string;
}
export default CalendarDay;
