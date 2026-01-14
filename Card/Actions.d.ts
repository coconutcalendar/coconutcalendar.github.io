export type Actions = {
    type: ActionTypes.SetCollapsable;
    collapseId: string;
} | {
    type: ActionTypes.SetHasActions;
} | {
    type: ActionTypes.UnsetCollapsable;
} | {
    type: ActionTypes.UnsetHasActions;
} | {
    type: ActionTypes.ToggleOpen;
};
export declare enum ActionTypes {
    SetCollapsable = 0,
    SetHasActions = 1,
    UnsetCollapsable = 2,
    UnsetHasActions = 3,
    ToggleOpen = 4
}
