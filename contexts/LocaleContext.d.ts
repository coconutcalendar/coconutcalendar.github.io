import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import React from 'react';
import type { AvailableLocales } from '../locales';
interface LocaleProviderProps {
    locale?: LocaleState;
}
type LocaleState = keyof AvailableLocales;
type UseLocaleValues = [LocaleState, Dispatch<SetStateAction<LocaleState>>];
export declare const LocaleContext: React.Context<UseLocaleValues | null>;
export declare const useLocale: () => UseLocaleValues;
declare function LocaleProvider({ children, locale, }: PropsWithChildren<LocaleProviderProps>): JSX.Element;
export { LocaleProvider };
