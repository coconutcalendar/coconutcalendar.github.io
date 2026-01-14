type DateFunctions = {
    parseDateLocal: (date: string) => Date;
    validateTimezone: (tz?: string) => boolean;
};
export default function useDateParsers(): DateFunctions;
export {};
