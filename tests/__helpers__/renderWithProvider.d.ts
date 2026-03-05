import type { RenderResult } from '@testing-library/react';
import type { PropsWithChildren, ReactElement } from 'react';
export declare function TestingLocaleProvider({ children, locale: localeOverride, }: PropsWithChildren<Record<string, unknown>>): JSX.Element;
export declare function TestingUiProvider({ locale, children, }: PropsWithChildren<Record<string, unknown>>): JSX.Element;
declare function renderWithProvider(ui: ReactElement): RenderResult;
export default renderWithProvider;
