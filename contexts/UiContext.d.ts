import type { PropsWithChildren } from 'react';
export interface UiProviderProps {
    primary?: string;
    secondary?: string;
}
declare function UiProvider({ children, primary, secondary, }: PropsWithChildren<UiProviderProps>): JSX.Element;
export { UiProvider };
