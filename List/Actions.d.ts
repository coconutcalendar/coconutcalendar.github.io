import type { ListItemStateType } from './Item';
export type NestedListActions = {
    type: NestedListActionTypes.RegisterListId;
    id: string;
} | {
    type: NestedListActionTypes.ToggleOpen;
} | {
    type: NestedListActionTypes.UnregisterListId;
} | {
    type: NestedListActionTypes.UpdateItemState;
    itemState: ListItemStateType;
};
export declare enum NestedListActionTypes {
    RegisterListId = 0,
    UnregisterListId = 1,
    ToggleOpen = 2,
    UpdateItemState = 3
}
