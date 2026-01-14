/// <reference types="react" />
export declare enum ListNestedLevel {
    None = 0,
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4
}
export type ListState = {
    dense: boolean;
    nested: ListNestedLevel;
    id: string;
};
export declare const ListContext: import("react").Context<ListState | null>;
export declare const useList: () => ListState;
