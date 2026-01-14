import type { DisplayModes } from './Autocomplete';
export type Actions = {
    type: ActionTypes.SetSearching;
} | {
    type: ActionTypes.ClearSearching;
} | {
    type: ActionTypes.SelectOption;
    label: string;
    value: string;
} | {
    type: ActionTypes.Clear;
} | {
    type: ActionTypes.ClearSelecting;
} | {
    type: ActionTypes.RegisterGroup;
    id: string;
    data: {
        display: DisplayModes;
        hasChildren: boolean;
    };
} | {
    type: ActionTypes.UnregisterGroup;
    id: string;
} | {
    type: ActionTypes.SetMinWidth;
    value: string;
};
export declare enum ActionTypes {
    Clear = 0,
    ClearSearching = 1,
    ClearSelecting = 2,
    RegisterGroup = 3,
    SelectOption = 4,
    SetSearching = 5,
    UnregisterGroup = 6,
    SetMinWidth = 7
}
