import type { PropsWithChildren, ReactElement } from 'react';
interface ActionProps {
    children: JSX.Element;
}
export interface CardProps {
    outlined?: boolean;
}
interface HeaderProps {
    children: ReactElement | ReactElement[];
}
declare function CardActions({ children, }: PropsWithChildren<Record<string, unknown>>): JSX.Element;
declare function Card({ children, outlined, }: PropsWithChildren<CardProps>): JSX.Element;
declare namespace Card {
    var Actions: typeof CardActions;
    var Action: ({ children }: ActionProps) => JSX.Element;
    var Collapse: typeof CollapseContent;
    var Content: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
    var Header: ({ children }: HeaderProps) => JSX.Element;
    var Subtitle: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
    var Title: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
}
declare function CollapseContent({ children, }: PropsWithChildren<Record<string, unknown>>): JSX.Element;
export default Card;
