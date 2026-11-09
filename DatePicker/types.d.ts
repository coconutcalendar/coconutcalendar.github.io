import type { CalendarDate } from '@internationalized/date';
export type CalendarMode = 'day' | 'week' | 'range';
export interface SelectedWeek {
    end: CalendarDate;
    start: CalendarDate;
}
export type FirstDayOfWeek = 'fri' | 'mon' | 'sat' | 'sun' | 'thu' | 'tue' | 'wed';
