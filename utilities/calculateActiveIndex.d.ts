export declare enum Focus {
    First = 0,
    Previous = 1,
    Next = 2,
    Last = 3,
    Specific = 4,
    Nothing = 5
}
type Actions = {
    focus: Focus.Specific;
    id: string;
} | {
    focus: Exclude<Focus, Focus.Specific>;
};
interface Resolvers<Item> {
    resolveActiveIndex(): number | null;
    resolveDisabled(item: Item): boolean;
    resolveId(item: Item): string;
    resolveItems(): Item[];
}
export declare function calculateActiveIndex<Item>(action: Actions, resolvers: Resolvers<Item>): number | null;
export {};
