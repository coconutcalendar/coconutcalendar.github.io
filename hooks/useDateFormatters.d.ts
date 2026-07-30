import type { AvailableLocales } from '../locales';
type DateFunctions = 'formatDateLocal' | 'formatDateLong' | 'formatDayOfMonth' | 'formatDayOfWeek' | 'formatISODate' | 'formatMonthLong' | 'formatMonthAndYearLong' | 'formatWeekOfYear' | 'formatYearAndMonth';
export type SupportedLocales = keyof AvailableLocales;
export default function useDateFormatters(): Record<DateFunctions, (date: Date) => string>;
export {};
