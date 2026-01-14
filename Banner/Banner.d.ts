import type { PropsWithChildren } from 'react';
declare function Banner({ children, }: PropsWithChildren<Record<string, unknown>>): JSX.Element;
declare namespace Banner {
    var Actions: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
    var Content: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
    var Description: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
    var StartAdornment: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
    var displayName: string;
}
export default Banner;
